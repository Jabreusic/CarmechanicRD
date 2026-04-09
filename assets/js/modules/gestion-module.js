(function registerGestionModule(global) {
  const bus = global.CarsystemActionBus;
  if (!bus) {
    return;
  }

  bus.register('input', 'gestion-filtrar-cotizaciones', () => {
    global.filtrarCotizaciones();
  });

  bus.register('change', 'gestion-filtrar-cotizaciones-estado', () => {
    global.filtrarCotizaciones();
  });

  bus.register('input', 'gestion-filtrar-ordenes', () => {
    global.filtrarOrdenesEntrada();
  });

  bus.register('input', 'gestion-filtrar-facturas', () => {
    global.filtrarFacturas();
  });

  bus.register('change', 'gestion-preview-servicio', () => {
    global.previewServicioCatalogo();
  });

  bus.register('click', 'gestion-guardar-servicio', () => {
    global.guardarServicioCatalogo();
  });

  bus.register('click', 'gestion-eliminar-servicio', () => {
    global.eliminarServicioCatalogo();
  });

  bus.register('change', 'gestion-preview-pieza', () => {
    global.previewPiezaCatalogo();
  });

  bus.register('click', 'gestion-guardar-pieza', () => {
    global.guardarPiezaCatalogo();
  });

  bus.register('click', 'gestion-eliminar-pieza', () => {
    global.eliminarPiezaCatalogo();
  });

  bus.register('click', 'gestion-recordatorio-toggle', (event, element) => {
    global.markReminderHandled(element.dataset.type, element.dataset.cotizacionId, element.dataset.reopen === 'true');
    return false;
  });

  bus.register('click', 'gestion-crear-reingreso', (event, element) => {
    global.crearReingresoGarantiaDesdeFactura(element.dataset.facturaId, element.dataset.cotizacionId);
    return false;
  });
})(window);