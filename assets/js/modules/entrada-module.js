(function registerEntradaModule(global) {
  const bus = global.CarsystemActionBus;
  if (!bus) {
    return;
  }

  bus.register('click', 'entrada-eliminar-marca', (event, element) => {
    global.removeEntryDamageMark(Number(element.dataset.markIndex || 0), event);
    return false;
  });
})(window);