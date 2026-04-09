(function registerConfiguracionModule(global) {
  const bus = global.CarsystemActionBus;
  if (!bus) {
    return;
  }

  bus.register('change', 'configuracion-logo', () => {
    global.handleLogoUpload();
  });

  bus.register('click', 'configuracion-eliminar-logo', () => {
    global.clearConfiguredLogo();
  });

  bus.register('click', 'configuracion-preset', (event, element) => {
    global.aplicarPresetPlantillaImpresion(element.dataset.preset);
    return false;
  });

  bus.register('click', 'configuracion-vista-previa-html', () => {
    global.imprimirPlantillaHtmlPrueba();
  });

  bus.register('click', 'configuracion-guardar', () => {
    global.guardarDatosConfiguracion();
  });

  bus.register('click', 'configuracion-prueba-impresion', (event, element) => {
    const printKind = element.dataset.printKind;
    if (printKind === 'cotizacion') {
      global.imprimirPruebaCotizacion();
    } else if (printKind === 'factura') {
      global.imprimirPruebaFactura();
    } else if (printKind === 'entrada') {
      global.imprimirPruebaOrdenEntrada();
    } else if (printKind === 'diagnostico') {
      global.imprimirPruebaDiagnostico();
    } else if (printKind === 'salida') {
      global.imprimirPruebaOrdenSalida();
    }
    return false;
  });

  bus.register('click', 'configuracion-unlock', () => {
    global.unlockApp();
  });
})(window);