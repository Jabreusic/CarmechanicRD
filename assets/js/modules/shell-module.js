(function registerShellModule(global) {
  const bus = global.CarsystemActionBus;
  if (!bus) {
    return;
  }

  bus.register('click', 'shell-open-tab', (event, element) => {
    global.openTab(event, element.dataset.tab, element.dataset.subtab || null, element.dataset.bypassGuard === 'true');
    return false;
  });

  bus.register('click', 'shell-open-subtab', (event, element) => {
    global.openSubTab(event, element.dataset.subtab);
    return false;
  });

  bus.register('click', 'shell-open-step', (event, element) => {
    global.openCotStep(event, element.dataset.step);
    return false;
  });

  bus.register('click', 'shell-hide-notice', () => {
    global.hideAppNotice();
  });

  bus.register('click', 'shell-toggle-workflow-summary', () => {
    global.toggleActiveWorkflowHeaderDetails();
  });

  bus.register('click', 'shell-close-decision', (event, element) => {
    global.closeAppDecisionModal(element.dataset.confirm === 'true');
  });

  bus.register('click', 'shell-close-quote-approval', () => {
    global.closeQuoteApprovalModal();
  });

  bus.register('click', 'shell-decision-backdrop', (event) => {
    global.handleAppDecisionBackdrop(event);
  });

  bus.register('click', 'shell-quote-backdrop', (event) => {
    global.handleQuoteApprovalModalBackdrop(event);
  });

  bus.register('click', 'shell-apply-quote-approval', () => {
    global.applyQuoteApprovalConfig();
  });

  bus.register('change', 'shell-quote-approval-status', () => {
    global.handleQuoteApprovalStatusChange();
  });

  bus.register('change', 'shell-quote-approval-labor', () => {
    global.refreshQuoteApprovalTotals();
  });

  bus.register('change', 'shell-quote-piece-toggle', () => {
    global.refreshQuoteApprovalTotals();
  });

  bus.register('click', 'shell-abrir-cotizacion-edicion', (event, element) => {
    global.cargarCotizacionParaEditar(element.dataset.cotizacionId);
    return false;
  });

  bus.register('click', 'shell-abrir-ot', (event, element) => {
    global.cargarOrdenEntradaById(element.dataset.ordenId);
    return false;
  });

  bus.register('click', 'shell-imprimir-ot', (event, element) => {
    global.imprimirOrdenEntrada(element.dataset.ordenId);
    return false;
  });
})(window);