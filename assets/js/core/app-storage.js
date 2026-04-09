(function initCarsystemStorage(global) {
  const ROUTE_STORAGE_KEY = 'carsystem_ui_route';

  function read(key) {
    return localStorage.getItem(key);
  }

  function write(key, value) {
    localStorage.setItem(key, value);
  }

  function remove(key) {
    localStorage.removeItem(key);
  }

  function readJson(key, fallback = null) {
    const raw = read(key);
    if (!raw) {
      return fallback;
    }

    try {
      return JSON.parse(raw);
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    write(key, JSON.stringify(value));
  }

  function saveRouteState(routeState) {
    writeJson(ROUTE_STORAGE_KEY, routeState);
  }

  function loadRouteState() {
    return readJson(ROUTE_STORAGE_KEY, null);
  }

  global.CarsystemStorage = {
    read,
    write,
    remove,
    readJson,
    writeJson,
    saveRouteState,
    loadRouteState
  };
})(window);