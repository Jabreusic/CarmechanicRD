(function initCarsystemActionBus(global) {
  const handlers = {
    click: new Map(),
    change: new Map(),
    input: new Map()
  };
  const attributeMap = {
    click: 'data-action',
    change: 'data-change-action',
    input: 'data-input-action'
  };
  const genericCallAttributeMap = {
    click: 'data-action-call',
    change: 'data-change-call',
    input: 'data-input-call'
  };
  const genericArgsAttributeMap = {
    click: 'data-action-args',
    change: 'data-change-args',
    input: 'data-input-args'
  };
  const genericIncludeEventAttributeMap = {
    click: 'data-action-include-event',
    change: 'data-change-include-event',
    input: 'data-input-include-event'
  };

  function register(eventType, actionName, handler) {
    handlers[eventType]?.set(actionName, handler);
  }

  function resolveGlobalFunction(functionPath) {
    if (!functionPath) {
      return null;
    }

    return functionPath.split('.').reduce((currentValue, segment) => currentValue?.[segment], global);
  }

  function parseArgs(rawArgs) {
    if (!rawArgs) {
      return [];
    }

    try {
      const parsed = JSON.parse(rawArgs);
      return Array.isArray(parsed) ? parsed : [parsed];
    } catch (error) {
      return [rawArgs];
    }
  }

  function invokeGeneric(eventType, event) {
    const callAttribute = genericCallAttributeMap[eventType];
    const argsAttribute = genericArgsAttributeMap[eventType];
    const includeEventAttribute = genericIncludeEventAttributeMap[eventType];
    const actionElement = event.target.closest(`[${callAttribute}]`);
    if (!actionElement) {
      return false;
    }

    const handler = resolveGlobalFunction(actionElement.getAttribute(callAttribute));
    if (typeof handler !== 'function') {
      return false;
    }

    const args = parseArgs(actionElement.getAttribute(argsAttribute));
    const includeEvent = actionElement.getAttribute(includeEventAttribute) === 'true';
    handler.apply(global, includeEvent ? [event, ...args] : args);
    return true;
  }

  function dispatch(eventType, event) {
    const attributeName = attributeMap[eventType];
    const actionElement = event.target.closest(`[${attributeName}]`);
    if (!actionElement) {
      invokeGeneric(eventType, event);
      return;
    }

    const actionName = actionElement.getAttribute(attributeName);
    const handler = handlers[eventType]?.get(actionName);
    if (!handler) {
      invokeGeneric(eventType, event);
      return;
    }

    const result = handler(event, actionElement);
    if (result === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  function init() {
    document.addEventListener('click', event => dispatch('click', event));
    document.addEventListener('change', event => dispatch('change', event));
    document.addEventListener('input', event => dispatch('input', event));
  }

  global.CarsystemActionBus = {
    register,
    init
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})(window);