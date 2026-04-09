(function registerDiagnosticoModule(global) {
  const bus = global.CarsystemActionBus;
  if (!bus) {
    return;
  }

  bus.register('click', 'diagnostico-abrir-parte', (event, element) => {
    global.openDiagnosticPartModal(element.dataset.partId);
    return false;
  });

  bus.register('click', 'diagnostico-eliminar-foto', (event, element) => {
    global.removeDiagnosticPhoto(Number(element.dataset.photoIndex || 0));
    return false;
  });
})(window);