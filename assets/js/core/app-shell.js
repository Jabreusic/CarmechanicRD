(function initCarsystemShell(global) {
  let isApplyingRouteHash = false;

  function hideAppNotice() {
    const host = document.getElementById('appNoticeHost');
    const card = document.getElementById('appNoticeCard');
    if (!host) {
      return;
    }
    host.classList.add('hidden');
    if (card) {
      card.classList.remove('app-notice-success', 'app-notice-warning', 'app-notice-danger', 'app-notice-info');
    }
    if (appNoticeTimeout) {
      clearTimeout(appNoticeTimeout);
      appNoticeTimeout = null;
    }
  }

  function showAppNotice({ title = 'Mensaje del sistema', message = '', kicker = 'Aviso', tone = 'warning', autoHideMs = 4200 } = {}) {
    const host = document.getElementById('appNoticeHost');
    const card = document.getElementById('appNoticeCard');
    if (!host) {
      return;
    }

    document.getElementById('appNoticeKicker').textContent = kicker;
    document.getElementById('appNoticeTitle').textContent = title;
    document.getElementById('appNoticeMessage').textContent = message;
    if (card) {
      card.classList.remove('app-notice-success', 'app-notice-warning', 'app-notice-danger', 'app-notice-info');
      if (tone === 'success') {
        card.classList.add('app-notice-success');
      } else if (tone === 'danger') {
        card.classList.add('app-notice-danger');
      } else if (tone === 'info') {
        card.classList.add('app-notice-info');
      } else {
        card.classList.add('app-notice-warning');
      }
    }
    host.classList.remove('hidden');

    if (appNoticeTimeout) {
      clearTimeout(appNoticeTimeout);
    }

    if (autoHideMs > 0) {
      appNoticeTimeout = window.setTimeout(() => {
        hideAppNotice();
      }, autoHideMs);
    }
  }

  function notifySuccess(title, message, options = {}) {
    showAppNotice({ title, message, kicker: options.kicker || 'Completado', tone: 'success', autoHideMs: options.autoHideMs ?? 4200 });
  }

  function notifyValidation(title, message, options = {}) {
    showAppNotice({ title, message, kicker: options.kicker || 'Validación', tone: 'warning', autoHideMs: options.autoHideMs ?? 5200 });
  }

  function notifyError(title, message, options = {}) {
    showAppNotice({ title, message, kicker: options.kicker || 'Error', tone: 'danger', autoHideMs: options.autoHideMs ?? 5600 });
  }

  function getVisibleAppModal() {
    return document.querySelector('.app-modal:not(.hidden)');
  }

  function getFocusableElements(container) {
    if (!container) {
      return [];
    }

    return Array.from(container.querySelectorAll('button:not([disabled]), [href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'))
      .filter(element => !element.closest('.hidden') && !element.hasAttribute('hidden'));
  }

  function syncModalBodyState() {
    const visibleModal = getVisibleAppModal();
    document.body.classList.toggle('modal-open', Boolean(visibleModal));
  }

  function ensureModalRoot(modal) {
    if (!(modal instanceof HTMLElement)) {
      return;
    }

    if (modal.dataset.modalRoot === 'body' && modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }
  }

  function openAccessibleModal(modalId, focusSelector = '.modal-close-btn, button, input, select, textarea, [tabindex]:not([tabindex="-1"])') {
    const modal = document.getElementById(modalId);
    if (!modal) {
      return;
    }

    ensureModalRoot(modal);
    lastFocusedElementBeforeModal = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    syncModalBodyState();

    const focusTarget = modal.querySelector(focusSelector) || getFocusableElements(modal)[0] || modal.querySelector('.app-modal-dialog');
    if (focusTarget instanceof HTMLElement) {
      window.setTimeout(() => focusTarget.focus(), 0);
    }
  }

  function closeAccessibleModal(modalId, { restoreFocus = true } = {}) {
    const modal = document.getElementById(modalId);
    if (!modal) {
      return;
    }

    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    syncModalBodyState();

    if (restoreFocus && lastFocusedElementBeforeModal instanceof HTMLElement) {
      const focusTarget = lastFocusedElementBeforeModal;
      lastFocusedElementBeforeModal = null;
      window.setTimeout(() => focusTarget.focus(), 0);
    }
  }

  function handleAppDecisionBackdrop(event) {
    if (event.target.id === 'appDecisionModal') {
      closeAppDecisionModal(false);
    }
  }

  function openAppDecisionModal({ title = 'Revisa esta acción', message = '', kicker = 'Confirmación', confirmText = 'Confirmar', cancelText = 'Cancelar', onConfirm = null, onCancel = null } = {}) {
    const modal = document.getElementById('appDecisionModal');
    if (!modal) {
      return;
    }

    document.getElementById('appDecisionKicker').textContent = kicker;
    document.getElementById('appDecisionTitle').textContent = title;
    document.getElementById('appDecisionMessage').textContent = message;
    document.getElementById('appDecisionConfirmBtn').textContent = confirmText;
    document.getElementById('appDecisionCancelBtn').textContent = cancelText;
    pendingDecisionResolver = { onConfirm, onCancel };
    openAccessibleModal('appDecisionModal', '#appDecisionCancelBtn');
  }

  function openAppDecisionModalPromise(options = {}) {
    return new Promise(resolve => {
      openAppDecisionModal({
        ...options,
        onConfirm: () => {
          options.onConfirm?.();
          resolve(true);
        },
        onCancel: () => {
          options.onCancel?.();
          resolve(false);
        }
      });
    });
  }

  function closeAppDecisionModal(confirmed) {
    closeAccessibleModal('appDecisionModal');

    const resolver = pendingDecisionResolver;
    pendingDecisionResolver = null;
    if (!resolver) {
      return;
    }

    if (confirmed) {
      resolver.onConfirm?.();
    } else {
      resolver.onCancel?.();
    }
  }

  function syncMainTabAccessibility() {
    const mainTabList = document.querySelector('.main-workflow-tabs');
    if (mainTabList) {
      mainTabList.setAttribute('role', 'tablist');
      mainTabList.setAttribute('aria-label', 'Navegación principal de módulos');
      mainTabList.setAttribute('aria-orientation', window.innerWidth <= 768 ? 'horizontal' : 'vertical');
    }

    document.querySelectorAll('.main-workflow-tabs [data-main-tab-target]').forEach(button => {
      const targetId = button.dataset.mainTabTarget;
      const panel = document.getElementById(targetId);
      if (!targetId || !panel) {
        return;
      }

      if (!button.id) {
        button.id = `tab-${targetId}`;
      }
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', targetId);
      button.setAttribute('aria-selected', button.classList.contains('active') ? 'true' : 'false');
      button.tabIndex = button.classList.contains('active') ? 0 : -1;

      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('aria-labelledby', button.id);
      panel.setAttribute('aria-hidden', panel.classList.contains('active') ? 'false' : 'true');
      panel.tabIndex = -1;
    });
  }

  function syncSubTabAccessibility() {
    document.querySelectorAll('.sub-tabs').forEach((tabList, tabListIndex) => {
      tabList.setAttribute('role', 'tablist');
      tabList.setAttribute('aria-label', `Subnavegación ${tabListIndex + 1}`);
      tabList.setAttribute('aria-orientation', 'horizontal');

      tabList.querySelectorAll('.sub-tab-button').forEach((button, buttonIndex) => {
        const targetId = button.dataset.subtab || '';
        const panel = targetId ? document.getElementById(targetId) : null;
        if (!targetId || !panel) {
          return;
        }

        if (!button.id) {
          button.id = `subtab-${tabListIndex + 1}-${buttonIndex + 1}`;
        }

        button.setAttribute('role', 'tab');
        button.setAttribute('aria-controls', targetId);
        button.setAttribute('aria-selected', button.classList.contains('active') ? 'true' : 'false');
        button.tabIndex = button.classList.contains('active') ? 0 : -1;

        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', button.id);
        panel.setAttribute('aria-hidden', panel.classList.contains('active') ? 'false' : 'true');
        panel.tabIndex = -1;
      });
    });
  }

  function initAppAccessibility() {
    syncMainTabAccessibility();
    syncSubTabAccessibility();

    document.querySelectorAll('.app-modal').forEach((modal, index) => {
      modal.setAttribute('role', modal.getAttribute('role') || 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-hidden', modal.classList.contains('hidden') ? 'true' : 'false');
      modal.tabIndex = -1;

      const title = modal.querySelector('h3, h2');
      if (title) {
        if (!title.id) {
          title.id = `appModalTitle${index + 1}`;
        }
        modal.setAttribute('aria-labelledby', title.id);
      }
    });
  }

  function moveTabFocus(buttons, currentButton, direction) {
    const currentIndex = buttons.indexOf(currentButton);
    if (currentIndex < 0) {
      return;
    }

    const nextIndex = (currentIndex + direction + buttons.length) % buttons.length;
    const nextButton = buttons[nextIndex];
    if (!(nextButton instanceof HTMLElement)) {
      return;
    }

    nextButton.focus();
    nextButton.click();
  }

  function handleAppAccessibilityKeydown(event) {
    const visibleModal = getVisibleAppModal();

    if (visibleModal && event.key === 'Tab') {
      const focusableElements = getFocusableElements(visibleModal);
      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
        return;
      }
    }

    if (visibleModal && event.key === 'Escape') {
      switch (visibleModal.id) {
        case 'appDecisionModal':
          closeAppDecisionModal(false);
          event.preventDefault();
          return;
        case 'quoteApprovalModal':
          closeQuoteApprovalModal();
          event.preventDefault();
          return;
        case 'clienteFormModal':
        case 'vehiculoFormModal':
          cancelarEdicionClienteWorkspace();
          event.preventDefault();
          return;
        default:
          break;
      }
    }

    const mainTabButton = event.target.closest('.main-workflow-tabs [role="tab"]');
    if (mainTabButton) {
      const buttons = Array.from(document.querySelectorAll('.main-workflow-tabs [role="tab"]'));
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        moveTabFocus(buttons, mainTabButton, 1);
        return;
      }
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        moveTabFocus(buttons, mainTabButton, -1);
        return;
      }
      if (event.key === 'Home') {
        event.preventDefault();
        buttons[0]?.focus();
        buttons[0]?.click();
        return;
      }
      if (event.key === 'End') {
        event.preventDefault();
        buttons[buttons.length - 1]?.focus();
        buttons[buttons.length - 1]?.click();
        return;
      }
    }

    const subTabButton = event.target.closest('.sub-tabs [role="tab"]');
    if (subTabButton) {
      const tabList = subTabButton.closest('.sub-tabs');
      const buttons = tabList ? Array.from(tabList.querySelectorAll('[role="tab"]')) : [];
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        moveTabFocus(buttons, subTabButton, 1);
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        moveTabFocus(buttons, subTabButton, -1);
        return;
      }
      if (event.key === 'Home') {
        event.preventDefault();
        buttons[0]?.focus();
        buttons[0]?.click();
        return;
      }
      if (event.key === 'End') {
        event.preventDefault();
        buttons[buttons.length - 1]?.focus();
        buttons[buttons.length - 1]?.click();
      }
    }
  }

  function parseRouteHash() {
    const rawHash = window.location.hash.replace(/^#/, '').trim();
    if (!rawHash) {
      return null;
    }

    const [tab, subtab] = rawHash.split('/').map(value => decodeURIComponent(value || ''));
    if (!tab) {
      return null;
    }

    return { tab, subtab: subtab || null };
  }

  function syncRouteState(tabName, subTabName = null) {
    if (isApplyingRouteHash) {
      return;
    }

    const nextRoute = { tab: tabName, subtab: subTabName || null };
    CarsystemStorage.saveRouteState(nextRoute);

    const nextHash = `#${encodeURIComponent(tabName)}${subTabName ? `/${encodeURIComponent(subTabName)}` : ''}`;
    if (window.location.hash !== nextHash) {
      history.replaceState(null, '', nextHash);
    }
  }

  function applyRouteState(routeState) {
    if (!routeState?.tab) {
      openTab(null, 'dashboard');
      return;
    }

    isApplyingRouteHash = true;
    try {
      openTab(null, routeState.tab, routeState.subtab || null);
    } finally {
      isApplyingRouteHash = false;
    }
  }

  function initializeShellRouting() {
    const hashRoute = parseRouteHash();
    const savedRoute = CarsystemStorage.loadRouteState();
    applyRouteState(hashRoute || savedRoute || { tab: 'dashboard', subtab: null });

    window.addEventListener('hashchange', () => {
      const nextRoute = parseRouteHash();
      if (!nextRoute) {
        return;
      }
      applyRouteState(nextRoute);
    });
  }

  function resolveMainTabButton(tabName) {
    return document.querySelector(`[data-main-tab-target="${tabName}"]`) || document.querySelector(`[data-action="shell-open-tab"][data-tab="${tabName}"]`);
  }

  function resolveSubTabButton(subTabName) {
    return document.querySelector(`.sub-tab-button[data-subtab="${subTabName}"]`);
  }

  function ensureMobileDockInteraction(tabName = '') {
    const dock = document.querySelector('.app-mobile-dock');
    if (!dock) {
      return;
    }

    if (!dock.dataset.dragReady) {
      let isPointerDown = false;
      let startX = 0;
      let startScrollLeft = 0;

      dock.addEventListener('pointerdown', event => {
        isPointerDown = true;
        startX = event.clientX;
        startScrollLeft = dock.scrollLeft;
        dock.dataset.dragging = 'true';
      });

      dock.addEventListener('pointermove', event => {
        if (!isPointerDown) {
          return;
        }
        const deltaX = event.clientX - startX;
        dock.scrollLeft = startScrollLeft - deltaX;
      });

      const stopDrag = () => {
        isPointerDown = false;
        delete dock.dataset.dragging;
      };

      dock.addEventListener('pointerup', stopDrag);
      dock.addEventListener('pointercancel', stopDrag);
      dock.addEventListener('pointerleave', stopDrag);
      dock.dataset.dragReady = 'true';
    }

    const activeButton = dock.querySelector(`[data-main-tab-target="${tabName}"]`) || dock.querySelector('.active');
    if (!(activeButton instanceof HTMLElement)) {
      return;
    }

    const nextLeft = activeButton.offsetLeft - Math.max((dock.clientWidth - activeButton.clientWidth) / 2, 0);
    dock.scrollTo({ left: Math.max(nextLeft, 0), behavior: 'smooth' });
  }

  function openTab(evt, tabName, subTabName = null, bypassGuard = false) {
    let i;
    const tabcontent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabcontent.length; i += 1) {
      tabcontent[i].style.display = 'none';
      tabcontent[i].classList.remove('active');
      tabcontent[i].setAttribute('aria-hidden', 'true');
    }

    const tabbuttons = document.querySelectorAll('[data-main-tab-target]');
    for (i = 0; i < tabbuttons.length; i += 1) {
      tabbuttons[i].className = tabbuttons[i].className.replace(' active', '');
      if (tabbuttons[i].matches('.main-workflow-tabs [role="tab"]')) {
        tabbuttons[i].setAttribute('aria-selected', 'false');
        tabbuttons[i].tabIndex = -1;
      } else {
        tabbuttons[i].setAttribute('aria-current', 'false');
      }
    }

    const targetPanel = document.getElementById(tabName);
    targetPanel.style.display = 'block';
    targetPanel.classList.add('active');
    targetPanel.setAttribute('aria-hidden', 'false');
    if (evt && evt.currentTarget?.matches?.('[data-main-tab-target]')) {
      evt.currentTarget.className += ' active';
      if (evt.currentTarget.matches('.main-workflow-tabs [role="tab"]')) {
        evt.currentTarget.setAttribute('aria-selected', 'true');
        evt.currentTarget.tabIndex = 0;
      } else {
        evt.currentTarget.setAttribute('aria-current', 'page');
      }
    } else {
      const targetButton = resolveMainTabButton(tabName);
      if (targetButton) {
        targetButton.className += ' active';
        if (targetButton.matches('.main-workflow-tabs [role="tab"]')) {
          targetButton.setAttribute('aria-selected', 'true');
          targetButton.tabIndex = 0;
        } else {
          targetButton.setAttribute('aria-current', 'page');
        }
      }
    }

    syncMainTabAccessibility();
    ensureMobileDockInteraction(tabName);
    syncRouteState(tabName, subTabName);

    if (subTabName) {
      openSubTab(null, subTabName);
    }

    if (tabName === 'dashboard') {
      updateDashboard();
    } else if (tabName === 'facturacion') {
      actualizarModuloFacturacion();
    } else if (tabName === 'gestionYCatalogos') {
      if (!document.querySelector('#gestionYCatalogos .sub-tab-content.active')) {
        openSubTab(null, subTabName || 'historialCotizacionesTab');
      }
      actualizarListaCotizacionesHistorial();
      actualizarListaServiciosCatalogo();
      actualizarListaPiezasCatalogo();
      actualizarListaFacturasHistorial();
    } else if (MODULE_TAB_IDS.includes(tabName)) {
      if (tabName !== 'cotStepCliente') {
        hydrateLatestOrdenEntradaForSelection();
      }

      if (tabName === 'cotStepOrden') {
        renderOrdenEntradaContext();
        renderEntryDamageMarkers();
        updateCombustibleVisual();
        syncWarningLightCards();
        loadEntrySignatureToCanvas();
      }
      actualizarListaServiciosCatalogoEnNuevaCotizacion();
      actualizarListaPiezasCatalogoEnNuevaCotizacion();
      if (currentLoadedClientId) {
        actualizarListaVehiculosClienteActual(currentLoadedClientId);
      }
      if (tabName === 'cotStepCliente') {
        actualizarIndicadoresClienteVehiculo();
        renderClienteWorkspace();
      }
      if (tabName === 'cotStepDiagnostico') {
        renderDiagnosticModuleContext();
        renderDiagnosticPartsGrid();
        updateDiagnosticSignatureStatus();
        syncDiagnosticLockUI();
      }
      if (tabName === 'cotStepServicio') {
        renderServicioContext();
      }
      if (tabName === 'cotStepSalida') {
        renderSalidaContext();
        loadSalidaSignatureToCanvas();
      }
      const fechaInput = document.getElementById('fecha');
      if (fechaInput && !fechaInput.value) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        fechaInput.value = `${year}-${month}-${day}`;
      }
      const fechaSalidaInput = document.getElementById('fechaSalida');
      if (tabName === 'cotStepSalida' && fechaSalidaInput && !fechaSalidaInput.value) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        fechaSalidaInput.value = `${year}-${month}-${day}`;
      }
      updateModuleCompletionIndicators();
    }

    renderActiveWorkflowHeader();
  }

  function openSubTab(evt, subTabName) {
    let i;
    const subTabContent = document.getElementsByClassName('sub-tab-content');
    for (i = 0; i < subTabContent.length; i += 1) {
      subTabContent[i].style.display = 'none';
      subTabContent[i].classList.remove('active');
      subTabContent[i].setAttribute('aria-hidden', 'true');
    }

    const subTabButtons = document.getElementsByClassName('sub-tab-button');
    for (i = 0; i < subTabButtons.length; i += 1) {
      subTabButtons[i].className = subTabButtons[i].className.replace(' active', '');
      subTabButtons[i].setAttribute('aria-selected', 'false');
      subTabButtons[i].tabIndex = -1;
    }

    const targetSubPanel = document.getElementById(subTabName);
    targetSubPanel.style.display = 'block';
    targetSubPanel.classList.add('active');
    targetSubPanel.setAttribute('aria-hidden', 'false');
    if (evt?.currentTarget) {
      evt.currentTarget.className += ' active';
      evt.currentTarget.setAttribute('aria-selected', 'true');
      evt.currentTarget.tabIndex = 0;
    } else {
      const targetButton = resolveSubTabButton(subTabName);
      if (targetButton) {
        targetButton.className += ' active';
        targetButton.setAttribute('aria-selected', 'true');
        targetButton.tabIndex = 0;
      }
    }

    syncSubTabAccessibility();
    const activeMainTab = document.querySelector('[data-main-tab-target].active')?.dataset.mainTabTarget || 'gestionYCatalogos';
    syncRouteState(activeMainTab, subTabName);

    if (subTabName === 'historialCotizacionesTab') {
      actualizarListaCotizacionesHistorial();
    } else if (subTabName === 'historialOrdenesEntradaTab') {
      actualizarListaOrdenesEntradaHistorial();
    } else if (subTabName === 'catalogoServiciosTab') {
      actualizarListaServiciosCatalogo();
      previewServicioCatalogo();
    } else if (subTabName === 'catalogoPiezasTab') {
      actualizarListaPiezasCatalogo();
      previewPiezaCatalogo();
    } else if (subTabName === 'historialFacturasTab') {
      actualizarListaFacturasHistorial();
    } else if (subTabName === 'postventaTab') {
      renderPostventaModule();
    }
  }

  function openCotStep(evt, stepName) {
    const resolvedStep = stepName === 'cotStepVehiculo' ? 'cotStepCliente' : stepName;
    openTab(evt, resolvedStep);
  }

  Object.assign(global, {
    hideAppNotice,
    showAppNotice,
    notifySuccess,
    notifyValidation,
    notifyError,
    getVisibleAppModal,
    getFocusableElements,
    syncModalBodyState,
    openAccessibleModal,
    closeAccessibleModal,
    handleAppDecisionBackdrop,
    openAppDecisionModal,
    openAppDecisionModalPromise,
    closeAppDecisionModal,
    syncMainTabAccessibility,
    syncSubTabAccessibility,
    initAppAccessibility,
    ensureMobileDockInteraction,
    handleAppAccessibilityKeydown,
    initializeShellRouting,
    openTab,
    openSubTab,
    openCotStep
  });
})(window);