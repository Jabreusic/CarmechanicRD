(function registerCotizacionModule(global) {
  const bus = global.CarsystemActionBus;
  if (!bus) {
    return;
  }

  bus.register('click', 'cotizacion-eliminar-pieza', (event, element) => {
    global.eliminarPieza(Number(element.dataset.piezaIndex || 0));
    return false;
  });
})(window);