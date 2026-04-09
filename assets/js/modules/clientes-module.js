(function registerClientesModule(global) {
  const bus = global.CarsystemActionBus;
  if (!bus) {
    return;
  }

  bus.register('click', 'clientes-cotizar-reciente', (event, element) => {
    global.cargarClienteYCotizar(element.dataset.clientId);
    return false;
  });

  bus.register('click', 'clientes-seleccionar-workspace', (event, element) => {
    global.seleccionarClienteWorkspace(element.dataset.clientId);
    return false;
  });

  bus.register('click', 'clientes-seleccionar-vehiculo', (event, element) => {
    global.seleccionarVehiculoDelCliente(element.dataset.clientId, element.dataset.vehicleId);
    return false;
  });

  bus.register('click', 'clientes-eliminar-vehiculo', (event, element) => {
    global.eliminarVehiculoDelCliente(element.dataset.clientId, element.dataset.vehicleId);
    return false;
  });

  bus.register('click', 'clientes-abrir-cotizacion', (event, element) => {
    global.cargarCotizacionById(element.dataset.cotizacionId);
    return false;
  });

  bus.register('click', 'clientes-abrir-cotizacion-edicion', (event, element) => {
    global.cargarCotizacionParaEditar(element.dataset.cotizacionId);
    return false;
  });
})(window);