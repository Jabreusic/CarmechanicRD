(function registerFacturacionModule(global) {
  const bus = global.CarsystemActionBus;
  if (!bus) {
    return;
  }

  bus.register('change', 'facturacion-resumen-pago', () => {
    global.actualizarResumenPagoFactura();
  });

  bus.register('input', 'facturacion-filtrar', () => {
    global.filtrarFacturacionModulo();
  });

  bus.register('click', 'facturacion-registrar-pago', () => {
    global.registrarPagoFactura();
  });

  bus.register('click', 'facturacion-limpiar-pago', () => {
    global.limpiarFormularioPagoFactura();
  });

  bus.register('click', 'facturacion-imprimir', (event, element) => {
    global.imprimirFactura(element.dataset.facturaId);
    return false;
  });
})(window);