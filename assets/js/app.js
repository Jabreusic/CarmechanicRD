const LOCAL_STORAGE_CONFIG_KEY = 'carsystem_config';
const LOCAL_STORAGE_EMPRESA_KEY = 'carsystem_empresa';
const LOCAL_STORAGE_CLIENTES_KEY = 'carsystem_clientes';
const LOCAL_STORAGE_COTIZACIONES_KEY = 'carsystem_cotizaciones';
const LOCAL_STORAGE_ORDENES_ENTRADA_KEY = 'carsystem_ordenes_entrada';
const LOCAL_STORAGE_SERVICIOS_CATALOGO_KEY = 'carsystem_servicios_catalogo';
const LOCAL_STORAGE_PIEZAS_CATALOGO_KEY = 'carsystem_piezas_catalogo';
const LOCAL_STORAGE_FACTURAS_KEY = 'carsystem_facturas';
const LOCAL_STORAGE_POSTVENTA_KEY = 'carsystem_postventa';
const LOCAL_STORAGE_UNLOCKED_KEY = 'carsystem_unlocked';
const LOCAL_STORAGE_MODULE_DRAFT_KEY = 'carsystem_module_draft';
const MAX_CLIENTES_DEMO = window.MAX_CLIENTES_DEMO ?? 5;
const MAX_COTIZACIONES_DEMO = window.MAX_COTIZACIONES_DEMO ?? 5;
const MAX_FACTURAS_DEMO = window.MAX_FACTURAS_DEMO ?? 5;
const MAX_SERVICIOS_DEMO = window.MAX_SERVICIOS_DEMO ?? 5;
const MAX_PIEZAS_DEMO = window.MAX_PIEZAS_DEMO ?? 5;
const MASTER_KEYS = Array.isArray(window.MASTER_KEYS) ? window.MASTER_KEYS : [];
const DEFAULT_PRECIO_BASE_HORA = 1500;
const DEFAULT_ITBIS_PERCENT = 18;
const DEFAULT_PRINT_TEMPLATE_CONFIG = {
  primaryColor: '#1f2937',
  accentColor: '#ea580c',
  paperSize: 'letter',
  density: 'compact',
  fontFamily: 'inter',
  headerLayout: 'inline',
  footerAlign: 'left',
  sectionTitleStyle: 'line',
  baseFontSize: 15,
  pageMarginMm: 8,
  borderRadius: 12,
  showLogo: true,
  showContact: true,
  showAddress: true,
  showHeaderMeta: true,
  showKicker: true,
  footerText: 'Documento generado automáticamente desde CarsystemRD para control interno y entrega al cliente.'
};
const APP_THEME_OPTIONS = ['light', 'dark', 'system'];
const DIAGNOSTIC_PARTS = [
  { id: 'motor', nombre: 'Motor' },
  { id: 'frenos', nombre: 'Frenos' },
  { id: 'suspension', nombre: 'Suspension' },
  { id: 'direccion', nombre: 'Direccion' },
  { id: 'transmision', nombre: 'Transmision' },
  { id: 'electrico', nombre: 'Sistema electrico' },
  { id: 'refrigeracion', nombre: 'Refrigeracion' },
  { id: 'neumaticos', nombre: 'Neumaticos' },
  { id: 'arranque-carga', nombre: 'Arranque y carga' },
  { id: 'aire-acondicionado', nombre: 'Aire acondicionado' },
  { id: 'escape-emisiones', nombre: 'Escape y emisiones' },
  { id: 'carroceria-interior', nombre: 'Carroceria e interior' }
];
const ENTRY_FUEL_STOPS = [
  { value: 0, label: 'Vacio' },
  { value: 25, label: '1/4' },
  { value: 50, label: '1/2' },
  { value: 75, label: '3/4' },
  { value: 100, label: 'Lleno' }
];
const VEHICLE_COLOR_SWATCH_MAP = {
  blanco: '#f5f5f5',
  negro: '#111827',
  gris: '#6b7280',
  grisoscuro: '#4b5563',
  grisclaro: '#9ca3af',
  plateado: '#c0c0c0',
  plata: '#c0c0c0',
  rojo: '#dc2626',
  vino: '#7f1d1d',
  azul: '#2563eb',
  azulmarino: '#1e3a8a',
  celeste: '#38bdf8',
  verde: '#16a34a',
  amarillo: '#facc15',
  naranja: '#f97316',
  dorado: '#d4a017',
  beige: '#d6c29c',
  crema: '#f5e6c8',
  marron: '#8b5e3c',
  cafe: '#6f4e37',
  morado: '#7c3aed',
  violeta: '#7c3aed',
  rosado: '#ec4899'
};
const ENTRY_WARNING_LIGHTS = [
  { label: 'Check Engine', file: 'check-engine.png' },
  { label: 'ABS', file: 'abs.png' },
  { label: 'Aceite', file: 'aceite.png' },
  { label: 'Batería', file: 'bateria.png' },
  { label: 'Airbag', file: 'airbag.png' },
  { label: 'Freno', file: 'freno.png' },
  { label: 'Temperatura', file: 'temperatura.png' },
  { label: 'TPMS', file: 'tpms.png' }
];
const ENTRY_CHECKLIST_ITEMS = [
  { key: 'placa', label: 'Placa', legacyValues: ['Placa'] },
  { key: 'micas', label: 'Micas', legacyValues: ['Micas'] },
  { key: 'encendedor', label: 'Encendedor' },
  { key: 'vidrios', label: 'Vidrios' },
  { key: 'portaVasos', label: 'Porta vasos', legacyValues: ['Porta vasos'] },
  { key: 'llavesDeRuedas', label: 'Llaves de ruedas', legacyValues: ['Llave de ruedas'] },
  { key: 'sunroof', label: 'Sunroof', legacyValues: ['Sunroof'] },
  { key: 'cinturones', label: 'Cinturones' },
  { key: 'centroDeAros', label: 'Centro de aros' },
  { key: 'llaveros', label: 'Llaveros', legacyValues: ['Llave', 'Llave de repuesto', 'Control alarma'] },
  { key: 'documentos', label: 'Documentos', legacyValues: ['Documentos'] },
  { key: 'bocinas', label: 'Bocinas' },
  { key: 'tapaDeMotor', label: 'Tapa de motor', legacyValues: ['Tapa motor'] },
  { key: 'logos', label: 'Logos', legacyValues: ['Logos'] },
  { key: 'retrovisorDerecho', label: 'Retrovisor derecho' },
  { key: 'retrovisorIzquierdo', label: 'Retrovisor izquierdo' },
  { key: 'antena', label: 'Antena' },
  { key: 'tuercasDeAro', label: 'Tuercas de aro' },
  { key: 'limpiabrisas', label: 'Limpiabrisas' },
  { key: 'alfombras', label: 'Alfombras', legacyValues: ['Alfombras'] },
  { key: 'taponDeGasolina', label: 'Tapon de gasolina' },
  { key: 'gomas', label: 'Gomas' },
  { key: 'revistaManual', label: 'Revista/manual', legacyValues: ['Manual'] },
  { key: 'asientos', label: 'Asientos' },
  { key: 'radio', label: 'Radio', legacyValues: ['Radio'] },
  { key: 'aireAcondicionado', label: 'Aire acondicionado', legacyValues: ['Aire acondicionado'] },
  { key: 'gato', label: 'Gato', legacyValues: ['Gato'] }
];
const ENTRY_PRINT_TERMS = [
  'El cliente debe saldar el monto correspondiente antes de retirar el vehiculo del taller.',
  'El taller no se hace responsable por dinero, documentos u objetos personales dejados dentro del vehiculo.',
  'El taller no asume responsabilidad por eventos externos o fortuitos, incluyendo robo, incendio, inundacion, vandalismo o desastres naturales.',
  'Todo vehiculo abandonado o no retirado oportunamente podra generar cargos por estadia y custodia segun las politicas del taller.',
  'El cliente autoriza al personal tecnico a realizar pruebas de manejo, pruebas electricas, desmontajes y verificaciones necesarias para el diagnostico y la reparacion.'
];
const SALIDA_CHECKLIST_LABELS = {
  documentos_entregados: 'Documentos entregados',
  llaves_entregadas: 'Llaves entregadas',
  explicacion_trabajo: 'Trabajo explicado al cliente',
  piezas_mostradas: 'Piezas reemplazadas mostradas/entregadas',
  pago_confirmado: 'Pago confirmado',
  prueba_final: 'Prueba final validada',
  sin_testigos: 'Sale sin testigos criticos',
  cliente_conforme: 'Cliente conforme al recibir'
};
const SEGUIMIENTO_QUALITY_LABELS = {
  prueba_ruta: 'Prueba de ruta realizada',
  sin_fugas: 'Sin fugas ni fallas visibles',
  niveles_ok: 'Niveles y ajustes verificados',
  sin_codigos: 'Sin codigos o testigos criticos'
};
const MODULE_TAB_IDS = ['cotStepCliente', 'cotStepOrden', 'cotStepDiagnostico', 'cotStepServicio', 'cotStepSeguimiento', 'cotStepSalida'];

let configuracionGeneral = {
  nombreEmpresaPrint: 'Mi Taller Mecánico S.R.L.',
  telefonoEmpresa: '',
  emailEmpresa: '',
  direccionEmpresa: '',
  precioBaseHora: DEFAULT_PRECIO_BASE_HORA,
  aplicarItbis: 'si',
  porcentajeItbis: DEFAULT_ITBIS_PERCENT,
  emitidoPor: '[Tu Nombre/Nombre de la Empresa]',
  diasValidezCotizacion: 7,
  diasGarantiaServicio: 30,
  kmGarantiaServicio: 1000,
  diasRecordatorioMantenimiento: 180,
  horasAlertaRetraso: 24,
  themePreference: 'light',
  plantillaImpresion: { ...DEFAULT_PRINT_TEMPLATE_CONFIG },
  notasImportantes: `Esta cotización tiene una validez de 7 días hábiles a partir de la fecha de emisión.\nLos precios de las piezas pueden variar sin previo aviso debido a fluctuaciones del mercado. La cotización final se confirmará al momento de la aprobación del servicio.\nSe requiere un 50% de anticipo para la compra de piezas y/o el inicio de trabajos mayores.\nEl tiempo estimado de trabajo es aproximado y puede variar según la complejidad inesperada o disponibilidad de piezas. Se notificará al cliente de cualquier retraso significativo.\nLa garantía sobre el servicio es de 30 días o 1,000 km (lo que ocurra primero), aplicable únicamente al trabajo realizado. La garantía sobre las piezas se rige por la política del fabricante o proveedor.\nNo nos hacemos responsables por fallas preexistentes en el vehículo no relacionadas con el servicio cotizado.\nCualquier trabajo adicional no contemplado en esta cotización requerirá la aprobación expresa del cliente y se facturará por separado.\nLa entrega del vehículo se realizará una vez el monto total de la factura haya sido saldado.`
};

let appThemeMediaQuery = null;

let piezasCounter = 0;
let piezasActivas = [];
let serviciosCatalogo = [];
let piezasCatalogo = [];
let clientesGuardados = [];
let cotizacionesGuardadas = [];
let ordenesEntradaGuardadas = [];
let facturasGuardadas = [];
let logoBase64 = null;
let logoRemovalPending = false;
let isAppUnlocked = false;
let currentLoadedClientId = null;
let currentLoadedVehicleId = null;
let currentLoadedEntryOrderId = null;
let currentLoadedCotizacionId = null;
let diagnosticoPartes = {};
let currentDiagnosticPartId = null;
let diagnosticClientSignature = null;
let diagnosticSignaturePad = null;
let diagnosticSignatureDrawing = false;
let diagnosticSignatureHasStroke = false;
let diagnosticFilterState = {
  filter: 'all',
  query: ''
};
let entryDamageMarks = [];
let entrySignaturePad = null;
let entryClientSignature = null;
let entrySignatureDrawing = false;
let entrySignatureHasStroke = false;
let salidaSignaturePad = null;
let salidaClientSignature = null;
let salidaSignatureDrawing = false;
let salidaSignatureHasStroke = false;
let moduleStatusListenersReady = false;
let moduleDraftSaveTimeout = null;
let clienteWorkspaceMode = 'detail';
let appNoticeTimeout = null;
let pendingDecisionResolver = null;
let lastFocusedElementBeforeModal = null;
let activeQuoteApprovalContext = null;
let currentCotizacionApprovalConfig = null;
let postventaState = {
  reminders: {},
  generatedAlertDigest: ''
};

function getDefaultCotizacionApprovalConfig() {
  return {
    tipoAprobacion: 'pendiente',
    manoObraAprobada: true,
    piezasAprobadas: [],
    resumen: '',
    notaCliente: '',
    ampliacionDetalle: '',
    updatedAt: '',
    history: []
  };
}

currentCotizacionApprovalConfig = getDefaultCotizacionApprovalConfig();

function loadPostventaState() {
  const parsed = CarsystemStorage.readJson(LOCAL_STORAGE_POSTVENTA_KEY, null);
  if (!parsed) {
    return;
  }

  postventaState = {
    reminders: parsed.reminders || {},
    generatedAlertDigest: parsed.generatedAlertDigest || ''
  };
}

function persistPostventaState() {
  CarsystemStorage.writeJson(LOCAL_STORAGE_POSTVENTA_KEY, postventaState);
}

function normalizeSeguimientoStatus(status = 'en_espera') {
  switch (status) {
    case 'terminado':
      return 'listo_para_entrega';
    case 'en_diagnostico':
    case 'pendiente_aprobacion':
    case 'en_proceso':
    case 'listo_para_entrega':
    case 'entregado':
    case 'en_espera':
      return status;
    default:
      return 'en_espera';
  }
}

function getOperationalStatusMeta(status) {
  switch (normalizeSeguimientoStatus(status)) {
    case 'en_diagnostico':
      return { label: 'En diagnostico', tone: 'info' };
    case 'pendiente_aprobacion':
      return { label: 'Pendiente de aprobacion', tone: 'info' };
    case 'en_proceso':
      return { label: 'En proceso', tone: 'warning' };
    case 'listo_para_entrega':
      return { label: 'Listo para entrega', tone: 'success' };
    case 'entregado':
      return { label: 'Entregado', tone: 'success' };
    default:
      return { label: 'En espera', tone: 'neutral' };
  }
}

function normalizeCommercialStatus(status = 'pendiente') {
  switch (status) {
    case 'aprobada_parcial':
    case 'ampliacion':
    case 'aprobada':
    case 'rechazada':
    case 'pendiente':
      return status;
    default:
      return 'pendiente';
  }
}

function getCommercialStatusMeta(status = 'pendiente') {
  switch (normalizeCommercialStatus(status)) {
    case 'aprobada':
      return { label: 'Aprobada total', tone: 'success' };
    case 'aprobada_parcial':
      return { label: 'Aprobada parcial', tone: 'warning' };
    case 'ampliacion':
      return { label: 'Requiere ampliacion', tone: 'info' };
    case 'rechazada':
      return { label: 'Rechazada', tone: 'danger' };
    default:
      return { label: 'Pendiente', tone: 'warning' };
  }
}

function isCommercialStatusInvoiceable(status = 'pendiente') {
  const normalizedStatus = normalizeCommercialStatus(status);
  return normalizedStatus === 'aprobada' || normalizedStatus === 'aprobada_parcial';
}

const SERVICIO_DOMICILIO_MODES = ['km', 'zona'];
const SERVICIO_DOMICILIO_ZONE_PRESETS = {
  A: { label: 'Zona A', surcharge: 0 },
  B: { label: 'Zona B', surcharge: 300 },
  C: { label: 'Zona C', surcharge: 600 },
  D: { label: 'Zona D', surcharge: 900 }
};

function toNonNegativeNumber(value, fallback = 0) {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) && numericValue >= 0 ? numericValue : fallback;
}

function getCurrentQuoteLaborSubtotal() {
  const subtotalGeneral = Number(document.getElementById('pSubtotal')?.textContent || 0);
  const domicilioSubtotal = getQuoteDomicilioAmount();
  const piezasSubtotal = piezasActivas.reduce((sum, index) => {
    const cantidad = Number(document.getElementById(`piezaCantidad${index}`)?.value || 0);
    const costo = Number(document.getElementById(`piezaCosto${index}`)?.value || 0);
    const margen = Number(document.getElementById(`piezaMargen${index}`)?.value || 0);
    if (!cantidad || Number.isNaN(cantidad) || Number.isNaN(costo) || Number.isNaN(margen)) {
      return sum;
    }
    return sum + (cantidad * costo * margen);
  }, 0);

  return Math.max(subtotalGeneral - piezasSubtotal - domicilioSubtotal, 0);
}

function normalizeServicioDomicilioState(data = {}) {
  const enabled = data.enabled === true || String(data.enabled).toLowerCase() === 'true';
  const description = String(data.description || data.descripcion || 'Servicio a domicilio').trim() || 'Servicio a domicilio';
  const mode = SERVICIO_DOMICILIO_MODES.includes(data.mode) ? data.mode : 'km';
  const legacyAmount = toNonNegativeNumber(data.amount ?? data.monto ?? 0, 0);
  const zoneKey = Object.prototype.hasOwnProperty.call(SERVICIO_DOMICILIO_ZONE_PRESETS, data.zone)
    ? data.zone
    : 'A';
  const zonePreset = SERVICIO_DOMICILIO_ZONE_PRESETS[zoneKey];

  const normalized = {
    enabled,
    description,
    mode,
    kmBaseAmount: toNonNegativeNumber(data.kmBaseAmount ?? data.baseAmount ?? (mode === 'km' ? legacyAmount : 0), 0),
    kmActual: toNonNegativeNumber(data.kmActual ?? data.kilometros ?? 0, 0),
    kmOnlyOneWay: data.kmOnlyOneWay === true || String(data.kmOnlyOneWay).toLowerCase() === 'true' || data.soloIda === true || String(data.soloIda).toLowerCase() === 'true',
    kmIncluded: toNonNegativeNumber(data.kmIncluded ?? data.kilometrosIncluidos ?? 0, 0),
    kmRate: toNonNegativeNumber(data.kmRate ?? data.tarifaPorKm ?? 0, 0),
    kmExtraSurcharge: toNonNegativeNumber(data.kmExtraSurcharge ?? data.recargoKm ?? data.extraSurcharge ?? 0, 0),
    zoneBaseAmount: toNonNegativeNumber(data.zoneBaseAmount ?? data.baseZonaAmount ?? data.baseAmount ?? (mode === 'zona' ? legacyAmount : 0), 0),
    zone: zoneKey,
    zoneSurcharge: toNonNegativeNumber(data.zoneSurcharge ?? data.recargoZona ?? zonePreset.surcharge ?? 0, zonePreset.surcharge),
    zoneExtraSurcharge: toNonNegativeNumber(data.zoneExtraSurcharge ?? data.recargoZonaExtra ?? data.extraSurcharge ?? 0, 0)
  };

  normalized.amount = calculateServicioDomicilioAmount(normalized);

  return normalized;
}

function calculateServicioDomicilioAmount(data = {}) {
  const domicilio = data && typeof data === 'object' ? data : {};

  if (!domicilio.enabled) {
    return 0;
  }

  if (domicilio.mode === 'zona') {
    return domicilio.zoneBaseAmount + domicilio.zoneSurcharge + domicilio.zoneExtraSurcharge;
  }

  const totalTripKm = domicilio.kmActual * (domicilio.kmOnlyOneWay ? 1 : 2);
  const extraKm = Math.max(totalTripKm - domicilio.kmIncluded, 0);
  return domicilio.kmBaseAmount + (extraKm * domicilio.kmRate) + domicilio.kmExtraSurcharge;
}

function formatServicioDomicilioConcept(domicilioData = {}) {
  const domicilio = normalizeServicioDomicilioState(domicilioData);
  if (domicilio.mode === 'zona') {
    const zoneLabel = SERVICIO_DOMICILIO_ZONE_PRESETS[domicilio.zone]?.label || `Zona ${domicilio.zone}`;
    return `${domicilio.description} · ${zoneLabel}`;
  }

  if (domicilio.kmActual > 0) {
    const totalKm = domicilio.kmActual * (domicilio.kmOnlyOneWay ? 1 : 2);
    return domicilio.kmOnlyOneWay
      ? `${domicilio.description} · ${domicilio.kmActual} km solo ida`
      : `${domicilio.description} · ${domicilio.kmActual} km ida / ${totalKm} km total`;
  }

  return domicilio.description;
}

function getServicioDomicilioPayload() {
  return normalizeServicioDomicilioState({
    enabled: document.getElementById('toggleServicioDomicilioBtn')?.dataset.enabled === 'true',
    description: document.getElementById('servicioDomicilioDescripcion')?.value || 'Servicio a domicilio',
    mode: document.getElementById('servicioDomicilioModo')?.value || 'km',
    kmBaseAmount: document.getElementById('servicioDomicilioKmBase')?.value || 0,
    kmActual: document.getElementById('servicioDomicilioKmRecorrido')?.value || 0,
    kmOnlyOneWay: document.getElementById('servicioDomicilioSoloIda')?.checked === true,
    kmIncluded: document.getElementById('servicioDomicilioKmIncluidos')?.value || 0,
    kmRate: document.getElementById('servicioDomicilioTarifaKm')?.value || 0,
    kmExtraSurcharge: document.getElementById('servicioDomicilioRecargoKm')?.value || 0,
    zoneBaseAmount: document.getElementById('servicioDomicilioZonaBase')?.value || 0,
    zone: document.getElementById('servicioDomicilioZona')?.value || 'A',
    zoneSurcharge: document.getElementById('servicioDomicilioRecargoZona')?.value || 0,
    zoneExtraSurcharge: document.getElementById('servicioDomicilioRecargoZonaExtra')?.value || 0
  });
}

function updateServicioDomicilioUI(data = {}) {
  const domicilio = normalizeServicioDomicilioState(data);
  const toggleButton = document.getElementById('toggleServicioDomicilioBtn');
  const fields = document.getElementById('servicioDomicilioFields');
  const descriptionInput = document.getElementById('servicioDomicilioDescripcion');
  const modeSelect = document.getElementById('servicioDomicilioModo');
  const kmFields = document.getElementById('servicioDomicilioKmFields');
  const zoneFields = document.getElementById('servicioDomicilioZonaFields');
  const amountInput = document.getElementById('servicioDomicilioMonto');
  const kmBaseInput = document.getElementById('servicioDomicilioKmBase');
  const kmActualInput = document.getElementById('servicioDomicilioKmRecorrido');
  const kmOnlyOneWayInput = document.getElementById('servicioDomicilioSoloIda');
  const kmIncludedLabel = document.getElementById('servicioDomicilioKmIncluidosLabel');
  const kmIncludedInput = document.getElementById('servicioDomicilioKmIncluidos');
  const kmRateInput = document.getElementById('servicioDomicilioTarifaKm');
  const kmExtraInput = document.getElementById('servicioDomicilioRecargoKm');
  const zoneBaseInput = document.getElementById('servicioDomicilioZonaBase');
  const zoneSelect = document.getElementById('servicioDomicilioZona');
  const zoneSurchargeInput = document.getElementById('servicioDomicilioRecargoZona');
  const zoneExtraInput = document.getElementById('servicioDomicilioRecargoZonaExtra');

  if (!toggleButton || !fields || !descriptionInput || !modeSelect || !kmFields || !zoneFields || !amountInput) {
    return domicilio;
  }

  toggleButton.dataset.enabled = domicilio.enabled ? 'true' : 'false';
  toggleButton.classList.toggle('is-active', domicilio.enabled);
  toggleButton.setAttribute('aria-pressed', domicilio.enabled ? 'true' : 'false');
  toggleButton.textContent = domicilio.enabled ? 'Domicilio activado' : 'Domicilio desactivado';

  fields.classList.toggle('is-disabled', !domicilio.enabled);
  fields.setAttribute('aria-hidden', domicilio.enabled ? 'false' : 'true');
  descriptionInput.disabled = !domicilio.enabled;
  modeSelect.disabled = !domicilio.enabled;
  amountInput.disabled = !domicilio.enabled;

  kmFields.classList.toggle('hidden', domicilio.mode !== 'km');
  zoneFields.classList.toggle('hidden', domicilio.mode !== 'zona');

  descriptionInput.value = domicilio.description;
  modeSelect.value = domicilio.mode;
  amountInput.value = domicilio.amount.toFixed(2).replace(/\.00$/, '');

  if (kmBaseInput) {
    kmBaseInput.disabled = !domicilio.enabled || domicilio.mode !== 'km';
    kmBaseInput.value = domicilio.kmBaseAmount.toFixed(2).replace(/\.00$/, '');
  }
  if (kmActualInput) {
    kmActualInput.disabled = !domicilio.enabled || domicilio.mode !== 'km';
    kmActualInput.value = domicilio.kmActual.toFixed(1).replace(/\.0$/, '');
  }
  if (kmOnlyOneWayInput) {
    kmOnlyOneWayInput.disabled = !domicilio.enabled || domicilio.mode !== 'km';
    kmOnlyOneWayInput.checked = domicilio.kmOnlyOneWay;
  }
  if (kmIncludedLabel) {
    kmIncludedLabel.textContent = domicilio.kmOnlyOneWay ? 'Km incluidos' : 'Km incluidos ida y vuelta';
  }
  if (kmIncludedInput) {
    kmIncludedInput.disabled = !domicilio.enabled || domicilio.mode !== 'km';
    kmIncludedInput.value = domicilio.kmIncluded.toFixed(1).replace(/\.0$/, '');
  }
  if (kmRateInput) {
    kmRateInput.disabled = !domicilio.enabled || domicilio.mode !== 'km';
    kmRateInput.value = domicilio.kmRate.toFixed(2).replace(/\.00$/, '');
  }
  if (kmExtraInput) {
    kmExtraInput.disabled = !domicilio.enabled || domicilio.mode !== 'km';
    kmExtraInput.value = domicilio.kmExtraSurcharge.toFixed(2).replace(/\.00$/, '');
  }
  if (zoneBaseInput) {
    zoneBaseInput.disabled = !domicilio.enabled || domicilio.mode !== 'zona';
    zoneBaseInput.value = domicilio.zoneBaseAmount.toFixed(2).replace(/\.00$/, '');
  }
  if (zoneSelect) {
    zoneSelect.disabled = !domicilio.enabled || domicilio.mode !== 'zona';
    zoneSelect.value = domicilio.zone;
  }
  if (zoneSurchargeInput) {
    zoneSurchargeInput.disabled = !domicilio.enabled || domicilio.mode !== 'zona';
    zoneSurchargeInput.value = domicilio.zoneSurcharge.toFixed(2).replace(/\.00$/, '');
  }
  if (zoneExtraInput) {
    zoneExtraInput.disabled = !domicilio.enabled || domicilio.mode !== 'zona';
    zoneExtraInput.value = domicilio.zoneExtraSurcharge.toFixed(2).replace(/\.00$/, '');
  }

  return domicilio;
}

function toggleServicioDomicilio() {
  const currentState = getServicioDomicilioPayload();
  updateServicioDomicilioUI({
    ...currentState,
    enabled: !currentState.enabled
  });
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function syncServicioDomicilioMode() {
  updateServicioDomicilioUI(getServicioDomicilioPayload());
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function handleServicioDomicilioZonaChange() {
  const currentState = getServicioDomicilioPayload();
  const selectedZone = document.getElementById('servicioDomicilioZona')?.value || 'A';
  const zonePreset = SERVICIO_DOMICILIO_ZONE_PRESETS[selectedZone] || SERVICIO_DOMICILIO_ZONE_PRESETS.A;
  updateServicioDomicilioUI({
    ...currentState,
    zone: selectedZone,
    zoneSurcharge: zonePreset.surcharge
  });
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function refreshServicioDomicilioCalculation() {
  updateServicioDomicilioUI(getServicioDomicilioPayload());
  updateModuleCompletionIndicators();
}

function getQuoteDomicilioAmount(source = null) {
  if (source && typeof source === 'object') {
    const domicilio = normalizeServicioDomicilioState(source);
    return domicilio.enabled ? domicilio.amount : 0;
  }

  const domicilio = getServicioDomicilioPayload();
  return domicilio.enabled ? domicilio.amount : 0;
}

function getCurrentQuotePiecesSnapshot() {
  return piezasActivas.map(index => {
    const nombre = document.getElementById(`piezaNombre${index}`)?.value.trim() || '';
    const cantidad = Number(document.getElementById(`piezaCantidad${index}`)?.value || 0);
    const costoUnitario = Number(document.getElementById(`piezaCosto${index}`)?.value || 0);
    const margen = Number(document.getElementById(`piezaMargen${index}`)?.value || 0);
    const precioVentaUnitario = costoUnitario * margen;
    return {
      index,
      nombre,
      cantidad,
      costoUnitario,
      margen,
      precioVentaUnitario,
      subtotalPiezaVenta: cantidad * precioVentaUnitario
    };
  });
}

function normalizeCotizacionApprovalConfig(approval = {}, piezas = [], status = 'pendiente') {
  const normalizedStatus = normalizeCommercialStatus(status || approval.tipoAprobacion || 'pendiente');
  const pieceIndexes = piezas.map((pieza, index) => Number.isFinite(Number(pieza.index)) ? Number(pieza.index) : index);
  const approvedIndexes = Array.isArray(approval.piezasAprobadas)
    ? approval.piezasAprobadas.map(item => Number(item)).filter(item => pieceIndexes.includes(item))
    : [];

  const normalized = {
    ...getDefaultCotizacionApprovalConfig(),
    ...approval,
    tipoAprobacion: normalizedStatus,
    manoObraAprobada: approval.manoObraAprobada !== false,
    piezasAprobadas: approvedIndexes,
    history: Array.isArray(approval.history) ? approval.history : []
  };

  if (normalizedStatus === 'aprobada') {
    normalized.manoObraAprobada = true;
    normalized.piezasAprobadas = pieceIndexes;
  }

  if (normalizedStatus === 'pendiente' || normalizedStatus === 'rechazada' || normalizedStatus === 'ampliacion') {
    normalized.manoObraAprobada = approval.manoObraAprobada !== false;
  }

  return normalized;
}

function getCotizacionApprovedTotals(cotizacion = null) {
  const source = cotizacion || {};
  const piezas = Array.isArray(source.piezas) ? source.piezas : getCurrentQuotePiecesSnapshot();
  const subtotalGeneral = Number(source.subtotal ?? (document.getElementById('pSubtotal')?.textContent || 0));
  const totalGeneral = Number(source.totalFinal ?? (document.getElementById('pTotal')?.textContent || 0));
  const itbisGeneral = Number(source.itbis ?? (document.getElementById('pItbis')?.textContent || 0));
  const domicilioSubtotal = getQuoteDomicilioAmount(source.servicio?.domicilio || null);
  const commercialStatus = normalizeCommercialStatus(source.status || currentCotizacionApprovalConfig?.tipoAprobacion || 'pendiente');
  const approval = normalizeCotizacionApprovalConfig(source.approval || currentCotizacionApprovalConfig || {}, piezas, commercialStatus);

  if (commercialStatus === 'aprobada') {
    return {
      subtotal: subtotalGeneral,
      itbis: itbisGeneral,
      totalFinal: totalGeneral,
      manoObraSubtotal: Math.max(subtotalGeneral - piezas.reduce((sum, pieza) => sum + Number(pieza.subtotalPiezaVenta || 0), 0) - domicilioSubtotal, 0),
      domicilioSubtotal,
      piezasAprobadas: piezas,
      laborApproved: true,
      isPartial: false
    };
  }

  const piezasAprobadas = piezas.filter((pieza, index) => approval.piezasAprobadas.includes(Number(pieza.index ?? index)));
  const subtotalPiezas = piezasAprobadas.reduce((sum, pieza) => sum + Number(pieza.subtotalPiezaVenta || 0), 0);
  const manoObraSubtotal = cotizacion
    ? Math.max(subtotalGeneral - (Array.isArray(source.piezas) ? source.piezas.reduce((sum, pieza) => sum + Number(pieza.subtotalPiezaVenta || 0), 0) : subtotalPiezas) - domicilioSubtotal, 0)
    : getCurrentQuoteLaborSubtotal();
  const subtotal = (approval.manoObraAprobada ? manoObraSubtotal + domicilioSubtotal : 0) + subtotalPiezas;
  const itbis = subtotalGeneral > 0 ? (subtotal * (itbisGeneral / subtotalGeneral)) : 0;
  return {
    subtotal,
    itbis,
    totalFinal: subtotal + itbis,
    manoObraSubtotal,
    domicilioSubtotal,
    piezasAprobadas,
    laborApproved: approval.manoObraAprobada,
    isPartial: commercialStatus === 'aprobada_parcial'
  };
}

function getConfiguredPrintLogo() {
  if (logoRemovalPending) {
    return null;
  }

  if (logoBase64) {
    return logoBase64;
  }

  try {
    const datosLogo = localStorage.getItem(LOCAL_STORAGE_EMPRESA_KEY);
    if (!datosLogo) {
      return null;
    }

    const parsedLogo = JSON.parse(datosLogo);
    logoBase64 = parsedLogo?.logo || null;
    return logoBase64;
  } catch {
    return null;
  }
}

function hasConfiguredPrintLogo() {
  return Boolean(getConfiguredPrintLogo());
}

function notifyMissingPrintLogo(documentLabel) {
  if (hasConfiguredPrintLogo()) {
    return;
  }

  showAppNotice({
    title: 'Impresion sin logo',
    message: `${documentLabel} se imprimira sin logo porque no hay uno configurado en Datos del Taller.`,
    kicker: 'Impresion',
    tone: 'info',
    autoHideMs: 5200
  });
}

function getCollectionStatusMeta(status = 'pendiente_pago') {
  switch (status) {
    case 'pagada':
      return { label: 'Pagada', tone: 'success' };
    case 'abono':
      return { label: 'Abono parcial', tone: 'warning' };
    default:
      return { label: 'Pendiente', tone: 'danger' };
  }
}

function getBadgeClass(tone = 'neutral') {
  switch (tone) {
    case 'success':
      return 'badge badge-success';
    case 'warning':
      return 'badge badge-warning';
    case 'danger':
      return 'badge badge-danger';
    case 'info':
      return 'badge badge-info';
    default:
      return 'badge badge-neutral';
  }
}

function getSelectedSeguimientoQualityChecklist() {
  return Array.from(document.querySelectorAll('.seguimientoQualityItem:checked')).map(item => item.value);
}

function getSeguimientoQualityPayload() {
  return {
    checklist: getSelectedSeguimientoQualityChecklist(),
    validadoPor: document.getElementById('calidadValidadoPor')?.value.trim() || '',
    fecha: document.getElementById('calidadFecha')?.value || '',
    observaciones: document.getElementById('calidadObservaciones')?.value.trim() || ''
  };
}

function isSeguimientoQualityApproved(seguimientoData = null) {
  const calidad = seguimientoData?.controlCalidad || getSeguimientoQualityPayload();
  const checklist = Array.isArray(calidad.checklist) ? calidad.checklist : [];
  return Boolean(checklist.length >= Object.keys(SEGUIMIENTO_QUALITY_LABELS).length && calidad.validadoPor && calidad.fecha);
}

function updateSeguimientoQualityStatus() {
  const statusElement = document.getElementById('seguimientoQualityStatus');
  if (!statusElement) {
    return;
  }

  const calidad = getSeguimientoQualityPayload();
  statusElement.textContent = isSeguimientoQualityApproved({ controlCalidad: calidad })
    ? `Control de calidad completo · ${calidad.validadoPor} · ${calidad.fecha}`
    : `Control de calidad pendiente · ${calidad.checklist.length}/${Object.keys(SEGUIMIENTO_QUALITY_LABELS).length} puntos confirmados.`;
}

function loadSeguimientoQualityState(data = {}) {
  const selectedItems = new Set(Array.isArray(data.checklist) ? data.checklist : []);
  document.querySelectorAll('.seguimientoQualityItem').forEach(item => {
    item.checked = selectedItems.has(item.value);
  });
  const validadoPorInput = document.getElementById('calidadValidadoPor');
  const fechaInput = document.getElementById('calidadFecha');
  const observacionesInput = document.getElementById('calidadObservaciones');
  if (validadoPorInput) {
    validadoPorInput.value = data.validadoPor || '';
  }
  if (fechaInput) {
    fechaInput.value = data.fecha || '';
  }
  if (observacionesInput) {
    observacionesInput.value = data.observaciones || '';
  }
  updateSeguimientoQualityStatus();
}

function setSeguimientoStatus(value) {
  const statusSelect = document.getElementById('estatusTrabajo');
  if (!statusSelect) {
    return;
  }

  statusSelect.value = normalizeSeguimientoStatus(value);
  statusSelect.dataset.previousStatus = statusSelect.value;
}

function handleSeguimientoStatusChange() {
  const statusSelect = document.getElementById('estatusTrabajo');
  if (!statusSelect) {
    return;
  }

  const nextStatus = normalizeSeguimientoStatus(statusSelect.value);
  const previousStatus = normalizeSeguimientoStatus(statusSelect.dataset.previousStatus || 'en_espera');

  if ((nextStatus === 'listo_para_entrega' || nextStatus === 'entregado') && !isSeguimientoQualityApproved()) {
    alert('Debes completar el control de calidad antes de marcar el vehículo como listo para entrega o entregado.');
    statusSelect.value = previousStatus === nextStatus ? 'en_proceso' : previousStatus;
    return;
  }

  statusSelect.dataset.previousStatus = nextStatus;
  updateSeguimientoQualityStatus();
}

function isOperationalStatusReadyForBilling(status) {
  const normalizedStatus = normalizeSeguimientoStatus(status);
  return normalizedStatus === 'listo_para_entrega' || normalizedStatus === 'entregado';
}

function isOperationalStatusReadyForSalida(status) {
  return isOperationalStatusReadyForBilling(status);
}

function getFacturaByCotizacionId(cotizacionId) {
  return facturasGuardadas.find(factura => factura && factura.cotizacionId === cotizacionId) || null;
}

function normalizePagoRegistro(pago = {}) {
  return {
    fecha: pago.fecha || getCurrentDateISO(),
    monto: Number(pago.monto || 0),
    metodo: pago.metodo || 'efectivo',
    referencia: pago.referencia || '',
    nota: pago.nota || ''
  };
}

function normalizeFacturaRecord(factura) {
  const facturaBase = factura && typeof factura === 'object' ? factura : {};
  const pagos = Array.isArray(facturaBase.pagos)
    ? facturaBase.pagos.map(normalizePagoRegistro).filter(pago => pago.monto > 0)
    : [];
  const totalFinal = Number(facturaBase.totalFinal || 0);
  const totalPagado = Number((facturaBase.totalPagado ?? pagos.reduce((sum, pago) => sum + Number(pago.monto || 0), 0)) || 0);
  const saldoPendiente = Math.max(totalFinal - totalPagado, 0);
  const estadoCobro = saldoPendiente <= 0 && totalFinal > 0
    ? 'pagada'
    : totalPagado > 0
      ? 'abono'
      : 'pendiente_pago';

  return {
    ...facturaBase,
    fecha: facturaBase.fecha || getCurrentDateISO(),
    subtotal: Number(facturaBase.subtotal || 0),
    itbis: Number(facturaBase.itbis || 0),
    totalFinal,
    pagos,
    totalPagado,
    saldoPendiente,
    estadoCobro
  };
}

function getCotizacionCommercialStatus(cotizacion = {}) {
  return normalizeCommercialStatus(cotizacion.status || cotizacion.approval?.tipoAprobacion || 'pendiente');
}

function getCotizacionOperationalStatus(cotizacion = {}) {
  return normalizeSeguimientoStatus(cotizacion.seguimiento?.estatusTrabajo || 'en_espera');
}

function canInvoiceCotizacion(cotizacion) {
  if (!cotizacion) {
    return { allowed: false, reason: 'La cotizacion no existe.' };
  }

  const commercialStatus = getCotizacionCommercialStatus(cotizacion);
  if (!isCommercialStatusInvoiceable(commercialStatus)) {
    return { allowed: false, reason: 'Solo se pueden facturar cotizaciones con aprobacion total o parcial.' };
  }

  if (commercialStatus === 'aprobada_parcial' && getCotizacionApprovedTotals(cotizacion).totalFinal <= 0) {
    return { allowed: false, reason: 'La aprobacion parcial debe incluir al menos mano de obra o una pieza aprobada.' };
  }

  if (!isOperationalStatusReadyForBilling(getCotizacionOperationalStatus(cotizacion))) {
    return {
      allowed: false,
      reason: 'La facturacion se habilita cuando el estado operativo esta en Listo para entrega o Entregado.'
    };
  }

  if (!isSeguimientoQualityApproved({ controlCalidad: cotizacion.seguimiento?.controlCalidad })) {
    return {
      allowed: false,
      reason: 'Debes completar y aprobar el control de calidad antes de facturar.'
    };
  }

  const facturaExistente = getFacturaByCotizacionId(cotizacion.id);
  if (facturaExistente) {
    return { allowed: false, reason: `La cotizacion ya fue facturada como ${facturaExistente.id}.` };
  }

  return { allowed: true };
}

function getSalidaGuardState() {
  if (!isSeguimientoModuleComplete()) {
    return {
      allowed: false,
      fallback: 'cotStepSeguimiento',
      message: 'La orden de salida depende de Seguimiento. Registra antes el trabajo realizado y la fecha de entrega.'
    };
  }

  const seguimientoStatus = normalizeSeguimientoStatus(document.getElementById('estatusTrabajo')?.value || 'en_espera');
  if (!isOperationalStatusReadyForSalida(seguimientoStatus)) {
    return {
      allowed: false,
      fallback: 'cotStepSeguimiento',
      message: 'La salida solo se habilita cuando el expediente operativo esta Listo para entrega o Entregado.'
    };
  }

  if (!isSeguimientoQualityApproved()) {
    return {
      allowed: false,
      fallback: 'cotStepSeguimiento',
      message: 'Debes completar y aprobar el control de calidad antes de generar la orden de salida.'
    };
  }

  if (!currentLoadedCotizacionId) {
    return {
      allowed: false,
      fallback: 'cotStepServicio',
      message: 'Guarda primero la cotizacion activa para poder emitir factura y habilitar la orden de salida.'
    };
  }

  const factura = getFacturaByCotizacionId(currentLoadedCotizacionId);
  if (!factura) {
    return {
      allowed: false,
      fallback: 'facturacion',
      message: 'La orden de salida requiere una factura emitida para la cotizacion activa.'
    };
  }

  const facturaNormalizada = normalizeFacturaRecord(factura);
  if (facturaNormalizada.estadoCobro !== 'pagada') {
    return {
      allowed: false,
      fallback: 'facturacion',
      message: 'La orden de salida solo se habilita cuando la factura esta completamente pagada.'
    };
  }

  return { allowed: true };
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadModulePartials();
  } catch (error) {
    console.error('No se pudieron cargar los parciales HTML de los modulos.', error);
    const message = window.location.protocol === 'file:'
      ? 'No se pudieron cargar los módulos HTML porque el navegador está abriendo la aplicación desde file://. Usa Live Server, un servidor local o GitHub Pages para trabajar con parciales independientes.'
      : 'No se pudieron cargar los módulos HTML de la aplicación.';
    alert(message);
    return;
  }

  const todayIso = getCurrentDateISO();
  const [year, month, day] = todayIso.split('-');
  document.getElementById('fecha').value = todayIso;
  const fechaSalidaInput = document.getElementById('fechaSalida');
  if (fechaSalidaInput) {
    fechaSalidaInput.value = todayIso;
  }
  const pagoFechaInput = document.getElementById('pagoFecha');
  if (pagoFechaInput) {
    pagoFechaInput.value = todayIso;
  }
  const calidadFechaInput = document.getElementById('calidadFecha');
  if (calidadFechaInput) {
    calidadFechaInput.value = todayIso;
  }
  document.getElementById('pFechaPrintHeader').textContent = `${day}/${month}/${year}`;

  agregarPieza();
  initializeAppThemePreference();
  cargarConfiguracionGeneral();
  cargarClientesGuardados();
  cargarCotizacionesGuardadas();
  cargarOrdenesEntradaGuardadas();
  cargarServiciosCatalogo();
  cargarPiezasCatalogo();
  cargarFacturasGuardadas();
  loadPostventaState();
  actualizarListaServiciosCatalogoEnNuevaCotizacion();
  actualizarListaPiezasCatalogoEnNuevaCotizacion();
  diagnosticoPartes = crearEstadoDiagnostico();
  initOrdenEntradaModule();
  renderDiagnosticPartsGrid();
  initDiagnosticSignaturePad();
  initSalidaSignaturePad();
  initAppAccessibility();
  updateDraftRecoveryActions();
  checkUnlockStatus();
  updateUnlockUI();
  initializeShellRouting();
  setupValidationListeners();
  setupModuleStatusListeners();
  updateModuleCompletionIndicators();
  document.addEventListener('keydown', handleDiagnosticEscape);
  document.addEventListener('keydown', handleAppAccessibilityKeydown);
  window.addEventListener('resize', syncMainTabAccessibility);
});

async function loadModulePartials() {
  const containers = Array.from(document.querySelectorAll('[data-partial]'));
  await Promise.all(containers.map(async container => {
    const partialPath = container.dataset.partial;
    const markup = await loadPartialMarkup(partialPath);
    container.innerHTML = markup;
  }));
}

async function loadPartialMarkup(path) {
  try {
    const response = await fetch(path, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Error ${response.status} al cargar ${path}`);
    }
    return response.text();
  } catch (fetchError) {
    return loadPartialMarkupWithXhr(path, fetchError);
  }
}

function loadPartialMarkupWithXhr(path, originalError) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', path, true);
    request.onreadystatechange = () => {
      if (request.readyState !== 4) {
        return;
      }
      if ((request.status >= 200 && request.status < 300) || request.status === 0) {
        resolve(request.responseText);
        return;
      }
      reject(originalError || new Error(`No se pudo cargar ${path}`));
    };
    request.onerror = () => reject(originalError || new Error(`No se pudo cargar ${path}`));
    request.send();
  });
}

function crearEstadoDiagnostico() {
  return DIAGNOSTIC_PARTS.reduce((acc, part) => {
    acc[part.id] = {
      id: part.id,
      nombre: part.nombre,
      estado: 'pendiente',
      hallazgo: '',
      recomendacion: '',
      visibleCliente: true,
      fotos: []
    };
    return acc;
  }, {});
}

function mezclarEstadoDiagnostico(data = {}) {
  const base = crearEstadoDiagnostico();
  DIAGNOSTIC_PARTS.forEach(part => {
    if (data[part.id]) {
      base[part.id] = {
        ...base[part.id],
        ...data[part.id],
        nombre: part.nombre
      };
    }
  });
  return base;
}

function getDiagnosticStateMeta(estado) {
  switch (estado) {
    case 'ok':
      return { label: 'Sin novedad', className: 'status-ok' };
    case 'atencion':
      return { label: 'Requiere atencion', className: 'status-atencion' };
    case 'critico':
      return { label: 'Critico', className: 'status-critico' };
    default:
      return { label: 'Pendiente', className: 'status-pendiente' };
  }
}

function isDiagnosticLocked() {
  return Boolean(diagnosticClientSignature);
}

function getVehicleDiagnosticSummary() {
  const partes = Object.values(diagnosticoPartes);
  const counts = {
    pendiente: 0,
    ok: 0,
    atencion: 0,
    critico: 0
  };

  partes.forEach(part => {
    counts[part.estado] = (counts[part.estado] || 0) + 1;
  });

  let estadoGeneral = 'pendiente';
  let descripcion = 'Inspeccion pendiente';

  if (counts.critico > 0) {
    estadoGeneral = 'critico';
    descripcion = 'Se detectaron hallazgos criticos que requieren accion inmediata.';
  } else if (counts.atencion > 0) {
    estadoGeneral = 'atencion';
    descripcion = 'El vehiculo presenta puntos que requieren atencion y aprobacion.';
  } else if (counts.ok > 0) {
    estadoGeneral = 'ok';
    descripcion = 'Los hallazgos visibles no muestran fallas criticas en este momento.';
  }

  return {
    meta: getDiagnosticStateMeta(estadoGeneral),
    estadoGeneral,
    descripcion,
    counts
  };
}

function getDiagnosticPartSnapshot(partDefinition) {
  return diagnosticoPartes[partDefinition.id] || {
    ...partDefinition,
    estado: 'pendiente',
    hallazgo: '',
    recomendacion: '',
    visibleCliente: true,
    fotos: []
  };
}

function doesDiagnosticPartMatchFilter(part, activeFilter) {
  switch (activeFilter) {
    case 'critico':
    case 'atencion':
    case 'ok':
    case 'pendiente':
      return part.estado === activeFilter;
    case 'visible':
      return Boolean(part.visibleCliente && (part.hallazgo || part.recomendacion || part.estado !== 'pendiente'));
    case 'photos':
      return Boolean(part.fotos && part.fotos.length);
    default:
      return true;
  }
}

function getFilteredDiagnosticParts() {
  const activeFilter = diagnosticFilterState.filter || 'all';
  const normalizedQuery = (diagnosticFilterState.query || '').trim().toLowerCase();

  return DIAGNOSTIC_PARTS.map(partDefinition => getDiagnosticPartSnapshot(partDefinition)).filter(part => {
    if (!doesDiagnosticPartMatchFilter(part, activeFilter)) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchableText = [part.nombre, part.hallazgo, part.recomendacion]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return searchableText.includes(normalizedQuery);
  });
}

function renderDiagnosticToolbarState() {
  document.querySelectorAll('[data-diagnostic-filter]').forEach(button => {
    button.classList.toggle('is-active', button.dataset.diagnosticFilter === diagnosticFilterState.filter);
  });

  const toolbarMeta = document.getElementById('diagnosticToolbarMeta');
  if (!toolbarMeta) {
    return;
  }

  const visibleCount = getFilteredDiagnosticParts().length;
  const totalCount = DIAGNOSTIC_PARTS.length;
  const queryLabel = diagnosticFilterState.query ? ` · búsqueda: "${diagnosticFilterState.query.trim()}"` : '';
  const filterLabels = {
    all: 'todos los sistemas',
    critico: 'sistemas críticos',
    atencion: 'sistemas con atención',
    ok: 'sistemas sin novedad',
    pendiente: 'sistemas pendientes',
    visible: 'hallazgos visibles al cliente',
    photos: 'sistemas con fotos'
  };
  const filterLabel = filterLabels[diagnosticFilterState.filter] || filterLabels.all;
  toolbarMeta.textContent = `Mostrando ${visibleCount} de ${totalCount} sistemas · filtro: ${filterLabel}${queryLabel}`;
}

function renderDiagnosticOverview() {
  const overviewPanel = document.getElementById('diagnosticOverviewPanel');
  const overviewHero = document.getElementById('diagnosticOverviewHero');
  const stateTitle = document.getElementById('diagnosticOverviewStateTitle');
  const stateMeta = document.getElementById('diagnosticOverviewStateMeta');
  const counters = document.getElementById('diagnosticOverviewCounters');
  const clientTitle = document.getElementById('diagnosticOverviewClientTitle');
  const clientMeta = document.getElementById('diagnosticOverviewClientMeta');
  const workTitle = document.getElementById('diagnosticOverviewWorkTitle');
  const workMeta = document.getElementById('diagnosticOverviewWorkMeta');
  const evidenceTitle = document.getElementById('diagnosticOverviewEvidenceTitle');
  const evidenceMeta = document.getElementById('diagnosticOverviewEvidenceMeta');
  const completion = document.getElementById('diagnosticOverviewCompletion');

  const summary = getVehicleDiagnosticSummary();
  const diagnostico = getDiagnosticoPayload();
  const visibleFindings = Object.values(diagnosticoPartes).filter(part => part.visibleCliente && (part.hallazgo || part.recomendacion || part.estado !== 'pendiente'));
  const photoCount = Object.values(diagnosticoPartes).reduce((total, part) => total + ((part.fotos || []).length), 0);
  const reviewedCount = summary.counts.ok + summary.counts.atencion + summary.counts.critico;
  const completedSteps = [
    Boolean(currentLoadedClientId && currentLoadedVehicleId),
    isEntryDataReady(),
    Boolean(diagnostico.sintomasReportados || diagnostico.pruebasRealizadas || diagnostico.causaProbable || diagnostico.diagnosticoInicial),
    reviewedCount > 0,
    Boolean(diagnostico.trabajo)
  ].filter(Boolean).length;
  const completionPercent = Math.round((completedSteps / 5) * 100);
  const statusClassNames = ['status-pendiente', 'status-ok', 'status-atencion', 'status-critico'];

  if (overviewPanel) {
    overviewPanel.classList.remove(...statusClassNames);
    overviewPanel.classList.add(summary.meta.className);
  }

  if (overviewHero) {
    overviewHero.classList.remove(...statusClassNames);
    overviewHero.classList.add(summary.meta.className);
  }

  if (stateTitle) {
    stateTitle.textContent = summary.meta.label;
  }
  if (stateMeta) {
    stateMeta.textContent = `Prioridad ${getDiagnosticoPriorityLabel(diagnostico.prioridad)} · ${summary.descripcion}`;
  }
  if (counters) {
    counters.innerHTML = `
      <span class="diagnostic-counter-chip status-critico ${summary.counts.critico ? 'is-active' : ''}">
        <strong>${summary.counts.critico}</strong>
        <span>Críticos</span>
      </span>
      <span class="diagnostic-counter-chip status-atencion ${summary.counts.atencion ? 'is-active' : ''}">
        <strong>${summary.counts.atencion}</strong>
        <span>Atención</span>
      </span>
      <span class="diagnostic-counter-chip status-ok ${summary.counts.ok ? 'is-active' : ''}">
        <strong>${summary.counts.ok}</strong>
        <span>OK</span>
      </span>
      <span class="diagnostic-counter-chip status-pendiente ${summary.counts.pendiente ? 'is-active' : ''}">
        <strong>${summary.counts.pendiente}</strong>
        <span>Pendientes</span>
      </span>
    `;
  }

  if (clientTitle) {
    clientTitle.textContent = `${visibleFindings.length} hallazgo(s)`;
  }
  if (clientMeta) {
    clientMeta.textContent = visibleFindings.length
      ? `${visibleFindings.length} sistema(s) se mostrarán al cliente y ${photoCount} foto(s) respaldan la revisión.`
      : 'Todavía no hay hallazgos marcados como visibles para el cliente.';
  }

  if (workTitle) {
    workTitle.textContent = diagnostico.trabajo || 'Pendiente';
  }
  if (workMeta) {
    workMeta.textContent = diagnostico.trabajo
      ? `${diagnostico.causaProbable || 'Sin causa probable detallada'} · listo para pasar a cotización.`
      : 'Define el servicio u orden de trabajo recomendada para completar el flujo.';
  }

  if (evidenceTitle) {
    evidenceTitle.textContent = `${reviewedCount} sistema(s) revisados`;
  }
  if (evidenceMeta) {
    evidenceMeta.textContent = reviewedCount
      ? `${photoCount} foto(s) adjuntas · ${summary.counts.pendiente} sistema(s) siguen pendientes de revisión.`
      : 'Aún no se han marcado sistemas revisados ni se han adjuntado evidencias.';
  }

  if (completion) {
    completion.textContent = `${completionPercent}% completo`;
    completion.dataset.level = completionPercent >= 80 ? 'high' : completionPercent >= 40 ? 'medium' : 'low';
  }
}

function setDiagnosticFilter(filter) {
  diagnosticFilterState.filter = filter || 'all';
  renderDiagnosticToolbarState();
  renderDiagnosticPartsGrid();
}

function handleDiagnosticSearchInput(event) {
  diagnosticFilterState.query = event.target.value || '';
  renderDiagnosticToolbarState();
  renderDiagnosticPartsGrid();
}

function initDiagnosticWorkspace() {
  const searchInput = document.getElementById('diagnosticSearchInput');
  if (searchInput && !searchInput.dataset.bound) {
    searchInput.addEventListener('input', handleDiagnosticSearchInput);
    searchInput.dataset.bound = 'true';
  }
  if (searchInput) {
    searchInput.value = diagnosticFilterState.query || '';
  }

  document.querySelectorAll('[data-diagnostic-filter]').forEach(button => {
    if (button.dataset.bound) {
      return;
    }
    button.addEventListener('click', () => setDiagnosticFilter(button.dataset.diagnosticFilter || 'all'));
    button.dataset.bound = 'true';
  });

  ['sintomasReportados', 'pruebasRealizadas', 'causaProbable', 'prioridadDiagnostico', 'diagnosticoInicial', 'trabajo'].forEach(id => {
    const field = document.getElementById(id);
    if (!field || field.dataset.diagnosticSummaryBound) {
      return;
    }

    const refresh = () => {
      renderDiagnosticOverview();
      renderDiagnosticModuleContext();
    };
    field.addEventListener('input', refresh);
    field.addEventListener('change', refresh);
    field.dataset.diagnosticSummaryBound = 'true';
  });

  renderDiagnosticToolbarState();
  renderDiagnosticOverview();
}

function renderDiagnosticPartsGrid() {
  const grid = document.getElementById('diagnosticPartsGrid');
  if (!grid) {
    return;
  }

  grid.innerHTML = '';
  const filteredParts = getFilteredDiagnosticParts();

  if (!filteredParts.length) {
    grid.innerHTML = '<article class="diagnostic-empty-state">No hay sistemas que coincidan con el filtro o la búsqueda actual.</article>';
    renderDiagnosticToolbarState();
    renderDiagnosticOverview();
    updateModuleCompletionIndicators();
    return;
  }

  filteredParts.forEach(current => {
    const meta = getDiagnosticStateMeta(current.estado);
    const fotoPrincipal = Array.isArray(current.fotos) && current.fotos.length > 0
      ? `<img class="diagnostic-card-photo" src="${current.fotos[0]}" alt="Foto de ${current.nombre}">`
      : '';
    const card = document.createElement('article');
    card.className = 'diagnostic-card';
    card.innerHTML = `
      <div class="diagnostic-card-header">
        <h4>${current.nombre}</h4>
        <span class="diagnostic-badge ${meta.className}">${meta.label}</span>
      </div>
      ${fotoPrincipal}
      <p class="diagnostic-snippet">${current.hallazgo ? current.hallazgo : 'Sin hallazgos registrados todavia.'}</p>
      <p class="diagnostic-recommendation">${current.recomendacion ? current.recomendacion : 'Sin recomendacion registrada.'}</p>
      <div class="diagnostic-card-footer">
        <span class="diagnostic-visibility ${current.visibleCliente ? 'is-visible' : 'is-hidden'}">${current.visibleCliente ? 'Visible al cliente' : 'Solo interno'}${current.fotos?.length ? ` | ${current.fotos.length} foto(s)` : ''}</span>
        <button type="button" ${isDiagnosticLocked() ? 'disabled' : ''} data-action="diagnostico-abrir-parte" data-part-id="${current.id}">${isDiagnosticLocked() ? 'Bloqueado' : 'Editar'}</button>
      </div>
    `;
    grid.appendChild(card);
  });

  renderDiagnosticToolbarState();
  renderDiagnosticOverview();
  updateModuleCompletionIndicators();
}

function openDiagnosticPartModal(partId) {
  if (isDiagnosticLocked()) {
    alert('Los hallazgos ya fueron firmados por el cliente y la edición está bloqueada.');
    return;
  }

  const part = diagnosticoPartes[partId];
  if (!part) {
    return;
  }

  currentDiagnosticPartId = partId;
  document.getElementById('diagnosticModalTitle').textContent = part.nombre;
  document.getElementById('diagnosticModalEstado').value = part.estado || 'pendiente';
  document.getElementById('diagnosticModalHallazgo').value = part.hallazgo || '';
  document.getElementById('diagnosticModalRecomendacion').value = part.recomendacion || '';
  document.getElementById('diagnosticModalVisibleCliente').checked = part.visibleCliente !== false;
  document.getElementById('diagnosticModalPhotos').value = '';
  document.getElementById('diagnosticCameraPhoto').value = '';
  renderDiagnosticPhotoPreview('diagnosticModalPhotosPreview', part.fotos || [], true);
  document.getElementById('diagnosticLockNotice').classList.add('hidden');
  openAccessibleModal('diagnosticPartModal', '#diagnosticModalEstado');
}

function renderDiagnosticPhotoPreview(containerId, photos = [], removable = false) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  if (!photos.length) {
    container.innerHTML = '<div class="diagnostic-photo-empty">No hay fotos agregadas.</div>';
    return;
  }

  container.innerHTML = photos.map((photo, index) => `
    <div class="diagnostic-photo-item">
      <img src="${photo}" alt="Foto del hallazgo ${index + 1}">
      ${removable ? `<button type="button" class="diagnostic-photo-remove" data-action="diagnostico-eliminar-foto" data-photo-index="${index}">✕</button>` : ''}
    </div>
  `).join('');
}

function handleDiagnosticPhotoUpload(event) {
  if (!currentDiagnosticPartId || !diagnosticoPartes[currentDiagnosticPartId] || isDiagnosticLocked()) {
    return;
  }

  const files = Array.from(event.target.files || []);
  if (!files.length) {
    return;
  }

  const readers = files.map(file => new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.target.result);
    reader.readAsDataURL(file);
  }));

  Promise.all(readers).then(images => {
    const actuales = diagnosticoPartes[currentDiagnosticPartId].fotos || [];
    diagnosticoPartes[currentDiagnosticPartId].fotos = [...actuales, ...images];
    renderDiagnosticPhotoPreview('diagnosticModalPhotosPreview', diagnosticoPartes[currentDiagnosticPartId].fotos, true);
    renderDiagnosticPartsGrid();
  });
}

function removeDiagnosticPhoto(index) {
  if (!currentDiagnosticPartId || !diagnosticoPartes[currentDiagnosticPartId] || isDiagnosticLocked()) {
    return;
  }

  diagnosticoPartes[currentDiagnosticPartId].fotos = (diagnosticoPartes[currentDiagnosticPartId].fotos || []).filter((_, currentIndex) => currentIndex !== index);
  renderDiagnosticPhotoPreview('diagnosticModalPhotosPreview', diagnosticoPartes[currentDiagnosticPartId].fotos, true);
  renderDiagnosticPartsGrid();
  scheduleModuleDraftSave();
}

function initDiagnosticSignaturePad() {
  const canvas = document.getElementById('diagnosticSignatureCanvas');
  if (!canvas) {
    return;
  }

  diagnosticSignaturePad = canvas;
  const context = canvas.getContext('2d');
  context.lineWidth = 2.5;
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = '#1e293b';

  const start = event => {
    diagnosticSignatureDrawing = true;
    diagnosticSignatureHasStroke = true;
    const point = getCanvasPoint(canvas, event);
    context.beginPath();
    context.moveTo(point.x, point.y);
  };

  const move = event => {
    if (!diagnosticSignatureDrawing) {
      return;
    }
    event.preventDefault();
    const point = getCanvasPoint(canvas, event);
    context.lineTo(point.x, point.y);
    context.stroke();
  };

  const end = () => {
    diagnosticSignatureDrawing = false;
  };

  canvas.addEventListener('pointerdown', start);
  canvas.addEventListener('pointermove', move);
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointerleave', end);

  updateDiagnosticSignatureStatus();
}

function getCanvasPoint(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * canvas.width,
    y: ((event.clientY - rect.top) / rect.height) * canvas.height
  };
}

function initOrdenEntradaModule() {
  document.querySelectorAll('[data-workflow-selector]').forEach(panel => {
    const visitSearch = panel.querySelector('[data-workflow-visit-search]');
    const visitSelect = panel.querySelector('[data-workflow-visit-select]');

    if (visitSearch && !visitSearch.dataset.bound) {
      visitSearch.addEventListener('input', handleWorkflowVisitSearch);
      visitSearch.dataset.bound = 'true';
    }

    if (visitSelect && !visitSelect.dataset.bound) {
      visitSelect.addEventListener('change', handleWorkflowVisitSelection);
      visitSelect.dataset.bound = 'true';
    }
  });

  updateCombustibleVisual();
  syncWarningLightCards();
  syncEntryClientVehicleSelectors();
  renderOrdenEntradaContext();
  renderEntryDamageMarkers();
  initEntrySignaturePad();
  initDiagnosticWorkspace();
}

function getFuelLabel(value) {
  const numericValue = Number(value) || 0;
  let selectedStop = ENTRY_FUEL_STOPS[0];

  ENTRY_FUEL_STOPS.forEach(stop => {
    if (numericValue >= stop.value) {
      selectedStop = stop;
    }
  });

  return `${selectedStop.label} (${numericValue}%)`;
}

function resolveVehicleColorSwatch(value) {
  const rawValue = String(value || '').trim();
  if (!rawValue) {
    return null;
  }

  const normalizedValue = rawValue
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '');

  if (VEHICLE_COLOR_SWATCH_MAP[normalizedValue]) {
    return VEHICLE_COLOR_SWATCH_MAP[normalizedValue];
  }

  if (/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(rawValue)) {
    return rawValue;
  }

  if (/^rgba?\([\d\s.,%]+\)$/i.test(rawValue) || /^hsla?\([\d\s.,%]+\)$/i.test(rawValue)) {
    return rawValue;
  }

  return null;
}

function updateCombustibleVisual() {
  const input = document.getElementById('combustibleActual');
  const label = document.getElementById('combustibleActualLabel');
  const bar = document.getElementById('combustibleActualBar');
  if (!input) {
    return;
  }

  const value = Number(input.value) || 0;
  if (label) {
    label.textContent = getFuelLabel(value);
  }
  if (bar) {
    bar.style.width = `${value}%`;
    bar.dataset.level = value >= 75 ? 'high' : value >= 40 ? 'medium' : 'low';
  }
}

function getWorkflowContextSelection() {
  const orden = getCurrentEntryOrderRecord() || resolveEntryOrderRecordForSelection();
  const clienteDesdeOrden = orden
    ? (findClientByRecordId(orden.cliente?.clientId) || findClientByIdentification(orden.cliente?.identificacion))
    : null;
  const vehiculoDesdeOrden = clienteDesdeOrden?.vehiculos?.find(vehiculo => getVehicleRecordId(vehiculo) === (orden?.vehiculo?.vehicleId || ''))
    || clienteDesdeOrden?.vehiculos?.find(vehiculo => vehiculo.chasis === orden?.vehiculo?.chasis || vehiculo.placa === orden?.vehiculo?.placa)
    || null;
  const clienteActual = findClientByRecordId(currentLoadedClientId);
  const vehiculoActual = clienteActual?.vehiculos?.find(item => getVehicleRecordId(item) === currentLoadedVehicleId) || null;

  return {
    orden,
    cliente: clienteDesdeOrden || clienteActual || null,
    vehiculo: vehiculoDesdeOrden || vehiculoActual || null
  };
}

function renderOrdenEntradaContext() {
  const clienteNombre = document.getElementById('ordenEntradaClienteNombre');
  const clienteMeta = document.getElementById('ordenEntradaClienteMeta');
  const vehiculoNombre = document.getElementById('ordenEntradaVehiculoNombre');
  const vehiculoMeta = document.getElementById('ordenEntradaVehiculoMeta');
  const workflowContext = getWorkflowContextSelection();
  const cliente = workflowContext.cliente;
  const clienteNombreFormulario = document.getElementById('tipoIdentificacion')?.value === 'rnc'
    ? document.getElementById('nombreEmpresa')?.value.trim()
    : document.getElementById('nombreCliente')?.value.trim();
  const identificacionFormulario = document.getElementById('identificacion')?.value.trim();
  const telefonoFormulario = document.getElementById('telefonoCliente')?.value.trim();
  const whatsappFormulario = document.getElementById('whatsappCliente')?.value.trim();
  const vehiculoModeloFormulario = [document.getElementById('vehiculoMarca')?.value.trim(), document.getElementById('vehiculoModelo')?.value.trim()].filter(Boolean).join(' ');
  const vehiculoPlacaFormulario = document.getElementById('vehiculoPlaca')?.value.trim();
  const vehiculoChasisFormulario = document.getElementById('vehiculoChasis')?.value.trim();
  const vehiculoAnioFormulario = document.getElementById('vehiculoAnio')?.value.trim();

  if (clienteNombre) {
    clienteNombre.textContent = cliente
      ? (getClientDisplayName(cliente) || 'Cliente no seleccionado')
      : (clienteNombreFormulario || 'Cliente no seleccionado');
  }

  if (clienteMeta) {
    if (cliente) {
      clienteMeta.textContent = `${cliente.id || 'Sin identificacion'} · ${cliente.telefono || 'Sin telefono'}${cliente.whatsapp ? ` · WhatsApp ${cliente.whatsapp}` : ''}`;
    } else {
      clienteMeta.textContent = identificacionFormulario || telefonoFormulario || whatsappFormulario
        ? `${identificacionFormulario || 'Sin identificacion'} · ${telefonoFormulario || 'Sin telefono'}${whatsappFormulario ? ` · WhatsApp ${whatsappFormulario}` : ''}`
        : 'Selecciona un cliente guardado para cargar su información.';
    }
  }

  const vehiculo = workflowContext.vehiculo || (cliente?.vehiculos?.length ? cliente.vehiculos[cliente.vehiculos.length - 1] : null);

  if (vehiculoNombre) {
    vehiculoNombre.textContent = vehiculo ? getVehicleFullLabel(vehiculo) : (vehiculoModeloFormulario || 'Vehículo no seleccionado');
  }

  if (vehiculoMeta) {
    if (vehiculo) {
      vehiculoMeta.textContent = `${vehiculo.placa || 'Sin placa'} · ${vehiculo.chasis || 'Sin chasis'} · ${vehiculo.anio || 'Año no indicado'}`;
    } else {
      vehiculoMeta.textContent = vehiculoPlacaFormulario || vehiculoChasisFormulario || vehiculoAnioFormulario
        ? `${vehiculoPlacaFormulario || 'Sin placa'} · ${vehiculoChasisFormulario || 'Sin chasis'} · ${vehiculoAnioFormulario || 'Año no indicado'}`
        : 'Selecciona un vehículo guardado para preparar la orden de entrada.';
    }
  }
}

function getDiagnosticoPriorityLabel(priority) {
  switch (priority) {
    case 'baja':
      return 'Baja';
    case 'alta':
      return 'Alta';
    case 'critica':
      return 'Critica';
    default:
      return 'Media';
  }
}

function getDiagnosticoPayload() {
  return {
    sintomasReportados: document.getElementById('sintomasReportados')?.value.trim() || '',
    pruebasRealizadas: document.getElementById('pruebasRealizadas')?.value.trim() || '',
    causaProbable: document.getElementById('causaProbable')?.value.trim() || '',
    prioridad: document.getElementById('prioridadDiagnostico')?.value || 'media',
    diagnosticoInicial: document.getElementById('diagnosticoInicial')?.value.trim() || '',
    trabajo: document.getElementById('trabajo')?.value.trim() || '',
    partes: diagnosticoPartes,
    firmaCliente: diagnosticClientSignature
  };
}

function diagnosticoTieneContenidoGuardado(diagnostico = {}) {
  const diagnosticoBase = diagnostico && typeof diagnostico === 'object' ? diagnostico : {};
  const partes = diagnosticoBase.partes || {};
  const hayHallazgos = Object.values(partes).some(part => part && (part.estado !== 'pendiente' || part.hallazgo || part.recomendacion || (part.fotos && part.fotos.length)));

  return Boolean(
    diagnosticoBase.sintomasReportados
    || diagnosticoBase.pruebasRealizadas
    || diagnosticoBase.causaProbable
    || diagnosticoBase.diagnosticoInicial
    || diagnosticoBase.trabajo
    || hayHallazgos
  );
}

function loadDiagnosticoState(data = {}, options = {}) {
  const { trabajoFallback = '' } = options;

  document.getElementById('sintomasReportados').value = data.sintomasReportados || '';
  document.getElementById('pruebasRealizadas').value = data.pruebasRealizadas || '';
  document.getElementById('causaProbable').value = data.causaProbable || '';
  document.getElementById('prioridadDiagnostico').value = data.prioridad || 'media';
  document.getElementById('diagnosticoInicial').value = data.diagnosticoInicial || '';
  document.getElementById('trabajo').value = data.trabajo || trabajoFallback || '';
  diagnosticoPartes = mezclarEstadoDiagnostico(data.partes || {});
  diagnosticClientSignature = data.firmaCliente || null;

  renderDiagnosticPartsGrid();
  loadDiagnosticSignatureToCanvas();
  updateDiagnosticSignatureStatus();
  syncDiagnosticLockUI();
}

function normalizeServicioCotizacionState(data = {}) {
  const horasInput = document.getElementById('horas');
  const dificultadSelect = document.getElementById('dificultad');
  const experienciaSelect = document.getElementById('experiencia');

  if (!horasInput || !dificultadSelect || !experienciaSelect) {
    return;
  }

  const horas = Number(data.horas ?? horasInput.value);
  horasInput.value = Number.isFinite(horas) && horas > 0 ? String(horas) : '2';

  const dificultad = String(data.dificultad ?? dificultadSelect.value ?? '1.2');
  dificultadSelect.value = Array.from(dificultadSelect.options).some(option => option.value === dificultad) ? dificultad : '1.2';

  const experiencia = String(data.experiencia ?? experienciaSelect.value ?? '1.0');
  experienciaSelect.value = Array.from(experienciaSelect.options).some(option => option.value === experiencia) ? experiencia : '1.0';

  updateServicioDomicilioUI(data.domicilio || {});
}

function getSelectedSalidaChecklist() {
  return Array.from(document.querySelectorAll('.salidaChecklistItem:checked')).map(item => item.value);
}

function loadSalidaState(data = {}) {
  const fechaSalidaInput = document.getElementById('fechaSalida');
  if (fechaSalidaInput) {
    fechaSalidaInput.value = data.fechaSalida || fechaSalidaInput.value || '';
  }
  document.getElementById('entregadoPorTaller').value = data.entregadoPorTaller || '';
  document.getElementById('recibidoPorCliente').value = data.recibidoPorCliente || '';
  document.getElementById('estadoSalidaVehiculo').value = data.estadoSalidaVehiculo || 'listo_entregado';
  document.getElementById('observacionesSalida').value = data.observacionesSalida || '';
  document.getElementById('pendientesNoAutorizados').value = data.pendientesNoAutorizados || '';

  const selectedChecklist = new Set(Array.isArray(data.checklistSalida) ? data.checklistSalida : []);
  document.querySelectorAll('.salidaChecklistItem').forEach(item => {
    item.checked = selectedChecklist.has(item.value);
  });

  salidaClientSignature = data.firmaClienteSalida || null;
  loadSalidaSignatureToCanvas();
  updateSalidaSignatureStatus();
}

function getSalidaPayload() {
  return {
    fechaSalida: document.getElementById('fechaSalida')?.value || '',
    entregadoPorTaller: document.getElementById('entregadoPorTaller')?.value.trim() || '',
    recibidoPorCliente: document.getElementById('recibidoPorCliente')?.value.trim() || '',
    estadoSalidaVehiculo: document.getElementById('estadoSalidaVehiculo')?.value || 'listo_entregado',
    observacionesSalida: document.getElementById('observacionesSalida')?.value.trim() || '',
    pendientesNoAutorizados: document.getElementById('pendientesNoAutorizados')?.value.trim() || '',
    checklistSalida: getSelectedSalidaChecklist(),
    firmaClienteSalida: salidaClientSignature
  };
}

function hasStoredModuleDraft() {
  return Boolean(localStorage.getItem(LOCAL_STORAGE_MODULE_DRAFT_KEY));
}

function updateDraftRecoveryActions() {
  const restoreButton = document.getElementById('restoreWorkflowDraftBtn');
  if (!restoreButton) {
    return;
  }

  restoreButton.classList.toggle('hidden', !hasStoredModuleDraft());
}

function hasActiveWorkflowData() {
  const trabajo = document.getElementById('trabajo')?.value.trim() || '';
  const horas = document.getElementById('horas')?.value || '2';
  const dificultad = document.getElementById('dificultad')?.value || '1.2';
  const experiencia = document.getElementById('experiencia')?.value || '1.0';
  const domicilio = getServicioDomicilioPayload();
  const seguimientoStatus = document.getElementById('estatusTrabajo')?.value || 'en_espera';
  const trabajoProceso = document.getElementById('trabajoProceso')?.value.trim() || '';
  const trabajoRealizado = document.getElementById('trabajoRealizado')?.value.trim() || '';
  const tecnicoResponsable = document.getElementById('tecnicoResponsable')?.value.trim() || '';
  const fechaEntregaEstimada = document.getElementById('fechaEntregaEstimada')?.value || '';
  const fechaEntregaReal = document.getElementById('fechaEntregaReal')?.value || '';
  const calidadChecklist = getSelectedSeguimientoQualityChecklist().length;
  const calidadValidadoPor = document.getElementById('calidadValidadoPor')?.value.trim() || '';
  const calidadFecha = document.getElementById('calidadFecha')?.value || '';
  const calidadObservaciones = document.getElementById('calidadObservaciones')?.value.trim() || '';
  const fechaSalida = document.getElementById('fechaSalida')?.value || '';
  const entregadoPor = document.getElementById('entregadoPorTaller')?.value.trim() || '';
  const recibidoPor = document.getElementById('recibidoPorCliente')?.value.trim() || '';
  const observacionesSalida = document.getElementById('observacionesSalida')?.value.trim() || '';
  const pendientesNoAutorizados = document.getElementById('pendientesNoAutorizados')?.value.trim() || '';
  const checklistSalida = getSelectedSalidaChecklist().length;

  const piezasConDatos = piezasActivas.some(index => {
    const nombre = document.getElementById(`piezaNombre${index}`)?.value.trim() || '';
    const cantidad = document.getElementById(`piezaCantidad${index}`)?.value || '1';
    const costo = document.getElementById(`piezaCosto${index}`)?.value || '0';
    const margen = document.getElementById(`piezaMargen${index}`)?.value || '1.3';
    return Boolean(nombre || cantidad !== '1' || costo !== '0' || margen !== '1.3');
  });

  return Boolean(
    currentLoadedEntryOrderId
    || isOrdenModuleComplete()
    || isDiagnosticoModuleComplete()
    || trabajo
    || horas !== '2'
    || dificultad !== '1.2'
    || experiencia !== '1.0'
    || domicilio.enabled
    || domicilio.kmBaseAmount > 0
    || domicilio.kmActual > 0
    || domicilio.kmIncluded > 0
    || domicilio.kmRate > 0
    || domicilio.kmExtraSurcharge > 0
    || domicilio.zoneBaseAmount > 0
    || domicilio.zone !== 'A'
    || domicilio.zoneSurcharge > 0
    || domicilio.zoneExtraSurcharge > 0
    || domicilio.description !== 'Servicio a domicilio'
    || piezasConDatos
    || seguimientoStatus !== 'en_espera'
    || trabajoProceso
    || trabajoRealizado
    || tecnicoResponsable
    || fechaEntregaEstimada
    || fechaEntregaReal
    || calidadChecklist
    || calidadValidadoPor
    || calidadFecha
    || calidadObservaciones
    || fechaSalida
    || entregadoPor
    || recibidoPor
    || observacionesSalida
    || pendientesNoAutorizados
    || checklistSalida
    || salidaClientSignature
  );
}

function confirmWorkflowReset(targetLabel) {
  return openAppDecisionModalPromise({
    title: 'Cambiar contexto activo',
    message: `Se limpiarán Entrada, Diagnóstico, Cotización y Seguimiento del flujo actual.${targetLabel ? `\n\n¿Deseas continuar con ${targetLabel}?` : ''}`,
    kicker: 'Expediente activo',
    confirmText: 'Continuar',
    cancelText: 'Mantener contexto'
  });
}

function resetWorkflowModules(options = {}) {
  const { persistDraft = true } = options;

  currentLoadedEntryOrderId = null;
  currentLoadedCotizacionId = null;
  loadOrdenEntradaState({});

  document.getElementById('sintomasReportados').value = '';
  document.getElementById('pruebasRealizadas').value = '';
  document.getElementById('causaProbable').value = '';
  document.getElementById('prioridadDiagnostico').value = 'media';
  document.getElementById('diagnosticoInicial').value = '';
  document.getElementById('trabajo').value = '';
  diagnosticoPartes = crearEstadoDiagnostico();
  currentDiagnosticPartId = null;
  diagnosticClientSignature = null;
  diagnosticFilterState = {
    filter: 'all',
    query: ''
  };
  const diagnosticSearchInput = document.getElementById('diagnosticSearchInput');
  if (diagnosticSearchInput) {
    diagnosticSearchInput.value = '';
  }
  renderDiagnosticPartsGrid();
  updateDiagnosticSignatureStatus();
  syncDiagnosticLockUI();
  renderPrintableDiagnosticFindings();

  document.getElementById('selectServicioCatalogoNuevaCotizacion').value = '';
  document.getElementById('horas').value = '2';
  document.getElementById('dificultad').value = '1.2';
  document.getElementById('experiencia').value = '1.0';
  updateServicioDomicilioUI({
    enabled: false,
    description: 'Servicio a domicilio',
    mode: 'km',
    kmBaseAmount: 0,
    kmActual: 0,
    kmIncluded: 0,
    kmRate: 0,
    kmExtraSurcharge: 0,
    zoneBaseAmount: 0,
    zone: 'A',
    zoneSurcharge: 0,
    zoneExtraSurcharge: 0
  });

  document.getElementById('selectPiezaCatalogoNuevaCotizacion').value = '';
  setCotizacionStatusUI('pendiente');
  currentCotizacionApprovalConfig = getDefaultCotizacionApprovalConfig();
  piezasActivas = [];
  document.getElementById('piezasContainer').innerHTML = '';
  agregarPieza();

  setSeguimientoStatus('en_espera');
  document.getElementById('trabajoProceso').value = '';
  document.getElementById('trabajoRealizado').value = '';
  document.getElementById('tecnicoResponsable').value = '';
  document.getElementById('fechaEntregaEstimada').value = '';
  document.getElementById('fechaEntregaReal').value = '';
  loadSeguimientoQualityState({ fecha: getCurrentDateISO() });

  const fechaSalidaInput = document.getElementById('fechaSalida');
  if (fechaSalidaInput) {
    fechaSalidaInput.value = '';
  }
  document.getElementById('entregadoPorTaller').value = '';
  document.getElementById('recibidoPorCliente').value = '';
  document.getElementById('estadoSalidaVehiculo').value = 'listo_entregado';
  document.getElementById('observacionesSalida').value = '';
  document.getElementById('pendientesNoAutorizados').value = '';
  document.querySelectorAll('.salidaChecklistItem').forEach(item => {
    item.checked = false;
  });
  salidaClientSignature = null;
  loadSalidaSignatureToCanvas();
  updateSalidaSignatureStatus();

  document.getElementById('resultado').textContent = 'Total: RD$ 0.00';
  document.getElementById('piezasPrint').innerHTML = '';
  document.getElementById('pSubtotal').textContent = '0.00';
  document.getElementById('pItbis').textContent = '0.00';
  document.getElementById('pTotal').textContent = '0.00';
  document.getElementById('pItbisContainer').classList.add('hidden');

  renderOrdenEntradaContext();
  renderDiagnosticModuleContext();
  renderServicioContext();
  updateModuleCompletionIndicators();

  if (persistDraft) {
    scheduleModuleDraftSave();
  }
}

async function liberarContextoOperativo() {
  if ((currentLoadedClientId || currentLoadedVehicleId || hasActiveWorkflowData()) && !await confirmWorkflowReset('sin un cliente activo')) {
    return;
  }

  clearModuleDraft();
  resetWorkflowModules({ persistDraft: false });
  limpiarCamposCliente(true);
  currentLoadedClientId = null;
  currentLoadedVehicleId = null;
  currentLoadedEntryOrderId = null;
  syncEntryClientVehicleSelectors();
  actualizarIndicadoresClienteVehiculo();
  renderClienteWorkspace();
  updateDraftRecoveryActions();
}

function hasSelectedClientAndVehicle() {
  return Boolean(currentLoadedClientId && currentLoadedVehicleId);
}

function isEntryDataReady() {
  return Boolean(hasSelectedClientAndVehicle() && (isOrdenModuleComplete() || resolveEntryOrderRecordForSelection()));
}

function isDiagnosticDataReady() {
  return Boolean(isEntryDataReady() && isDiagnosticoModuleComplete());
}

function getModuleDependencyGuard(moduleId) {
  if (moduleId === 'cotStepSalida') {
    return getSalidaGuardState();
  }

  return { allowed: true };
}

function syncDiagnosticoFromEntrada(force = false) {
  const sintomasInput = document.getElementById('sintomasReportados');
  const motivoEntrada = document.getElementById('motivoEntrada')?.value.trim() || '';
  if (!sintomasInput || !motivoEntrada) {
    return;
  }

  if (force || !sintomasInput.value.trim()) {
    sintomasInput.value = motivoEntrada;
  }
}

function renderDiagnosticModuleContext() {
  const title = document.getElementById('diagnosticContextTitle');
  const meta = document.getElementById('diagnosticContextMeta');
  const entryTitle = document.getElementById('diagnosticEntryTitle');
  const entryMeta = document.getElementById('diagnosticEntryMeta');
  const flowTitle = document.getElementById('diagnosticFlowTitle');
  const flowMeta = document.getElementById('diagnosticFlowMeta');
  const workflowContext = getWorkflowContextSelection();
  const cliente = workflowContext.cliente;
  const vehiculo = workflowContext.vehiculo;
  const ordenEntrada = getOrdenEntradaPayload();

  syncDiagnosticoFromEntrada();
  renderDiagnosticOverview();

  if (title) {
    title.textContent = cliente && vehiculo
      ? `${getClientDisplayName(cliente) || 'Cliente sin nombre'} · ${vehiculo.modelo || 'Vehiculo sin modelo'}`
      : 'Sin cliente seleccionado';
  }

  if (meta) {
    meta.textContent = cliente && vehiculo
      ? `${cliente.id || 'Sin identificacion'} · ${vehiculo.placa || 'Sin placa'} · ${vehiculo.chasis || 'Sin chasis'}`
      : 'La revision tecnica se alimenta del cliente y vehiculo seleccionados.';
  }

  if (entryTitle) {
    entryTitle.textContent = isEntryDataReady()
      ? (ordenEntrada.motivoEntrada || 'Entrada cargada')
      : 'Entrada pendiente';
  }

  if (entryMeta) {
    entryMeta.textContent = isEntryDataReady()
      ? `${ordenEntrada.millajeEntrada || 'Sin millaje'} km · ${ordenEntrada.combustibleLabel || 'Combustible N/D'} · ${(ordenEntrada.lucesTablero || []).length} testigo(s)`
      : 'Completa la orden de entrada para traer motivo, millaje, testigos y observaciones.';
  }

  if (flowTitle) {
    flowTitle.textContent = isDiagnosticDataReady()
      ? 'Diagnostico listo para cotizar'
      : (isEntryDataReady() ? 'Diagnostico en proceso' : 'Esperando recepcion');
  }

  if (flowMeta) {
    flowMeta.textContent = isDiagnosticDataReady()
      ? `Prioridad ${getDiagnosticoPriorityLabel(document.getElementById('prioridadDiagnostico')?.value || 'media')} · ${getVehicleDiagnosticSummary().meta.label}`
      : 'Cliente/Vehiculo → Entrada → Diagnostico → Cotizacion → Facturacion';
  }
}

function diagnosticoTieneContenidoRegistrado() {
  return diagnosticoTieneContenidoGuardado(getDiagnosticoPayload());
}

function guardarDiagnostico(options = {}) {
  const { silent = false } = options;

  if (!hasSelectedClientAndVehicle()) {
    notifyValidation('Contexto incompleto', 'Selecciona primero un cliente y un vehículo antes de guardar el diagnóstico.', { kicker: 'Diagnóstico' });
    return false;
  }

  if (!isEntryDataReady()) {
    notifyValidation('Orden de entrada pendiente', 'Completa y guarda la orden de entrada antes de consolidar el diagnóstico.', { kicker: 'Diagnóstico' });
    return false;
  }

  if (!diagnosticoTieneContenidoRegistrado()) {
    notifyValidation('Información insuficiente', 'Registra síntomas, pruebas, causa probable, diagnóstico inicial, trabajo recomendado o hallazgos por sistema antes de guardar.', { kicker: 'Diagnóstico', autoHideMs: 6200 });
    return false;
  }

  const estatusTrabajo = document.getElementById('estatusTrabajo');
  if (estatusTrabajo && normalizeSeguimientoStatus(estatusTrabajo.value) === 'en_espera') {
    estatusTrabajo.value = 'en_diagnostico';
  }

  const diagnosticoPayload = getDiagnosticoPayload();
  const ordenIndex = ordenesEntradaGuardadas.findIndex(orden => orden.id === currentLoadedEntryOrderId);
  if (ordenIndex < 0) {
    notifyError('OT no disponible', 'No se encontró la orden de trabajo activa para guardar el diagnóstico. Guarda primero la orden de entrada nuevamente.', { kicker: 'Diagnóstico' });
    return false;
  }

  ordenesEntradaGuardadas.splice(ordenIndex, 1, {
    ...ordenesEntradaGuardadas[ordenIndex],
    diagnostico: diagnosticoPayload,
    updatedAt: new Date().toISOString()
  });
  persistOrdenesEntradaGuardadas();
  actualizarListaOrdenesEntradaHistorial();

  persistModuleDraft();
  renderDiagnosticModuleContext();
  renderServicioContext();
  updateDashboard();
  updateModuleCompletionIndicators();

  if (!silent) {
    notifySuccess('Diagnóstico guardado', 'El diagnóstico quedó consolidado correctamente en el expediente activo.', { kicker: 'Diagnóstico' });
  }

  return true;
}

function concluirDiagnostico() {
  if (!guardarDiagnostico({ silent: true })) {
    return;
  }

  if (!isDiagnosticoModuleComplete()) {
    notifyValidation('Diagnóstico incompleto', 'Para concluir el diagnóstico debes completar el trabajo recomendado y registrar hallazgos o notas técnicas suficientes.', { kicker: 'Diagnóstico', autoHideMs: 6200 });
    return;
  }

  const estatusTrabajo = document.getElementById('estatusTrabajo');
  if (estatusTrabajo) {
    const estatusActual = normalizeSeguimientoStatus(estatusTrabajo.value);
    if (estatusActual === 'en_espera' || estatusActual === 'en_diagnostico') {
      estatusTrabajo.value = 'pendiente_aprobacion';
    }
  }

  persistModuleDraft();
  renderDiagnosticModuleContext();
  updateModuleCompletionIndicators();
  openCotStep(null, 'cotStepServicio');
  notifySuccess('Diagnóstico concluido', 'El expediente pasa a Cotización y el estado operativo quedó actualizado.', { kicker: 'Diagnóstico' });
}

function renderServicioContext() {
  const title = document.getElementById('servicioContextTitle');
  const meta = document.getElementById('servicioContextMeta');
  const ordenTitle = document.getElementById('servicioOrdenTitle');
  const ordenMeta = document.getElementById('servicioOrdenMeta');
  const diagnosticoTitle = document.getElementById('servicioDiagnosticoTitle');
  const diagnosticoMeta = document.getElementById('servicioDiagnosticoMeta');
  const workflowContext = getWorkflowContextSelection();
  const cliente = workflowContext.cliente;
  const vehiculo = workflowContext.vehiculo;
  const ordenEntrada = getOrdenEntradaPayload();
  const diagnostico = getDiagnosticoPayload();
  const diagnosticoSummary = getVehicleDiagnosticSummary();

  if (title) {
    title.textContent = cliente && vehiculo
      ? `${getClientDisplayName(cliente) || 'Cliente sin nombre'} · ${vehiculo.modelo || 'Vehiculo sin modelo'}`
      : 'Sin cliente cargado';
  }

  if (meta) {
    meta.textContent = cliente && vehiculo
      ? `${vehiculo.placa || 'Sin placa'} · ${vehiculo.anio || 'Ano N/D'} · ${cliente.telefono || 'Sin telefono'}`
      : 'La cotizacion se construye sobre el cliente y vehiculo activos.';
  }

  if (ordenTitle) {
    ordenTitle.textContent = isEntryDataReady() ? (ordenEntrada.motivoEntrada || 'Entrada registrada') : 'Entrada pendiente';
  }

  if (ordenMeta) {
    ordenMeta.textContent = isEntryDataReady()
      ? `${ordenEntrada.modoLlegada || 'N/D'} · ${ordenEntrada.observacionesEntrada || 'Sin observaciones de recepcion'}`
      : 'Aqui se mostrara el motivo de entrada y datos clave de recepcion.';
  }

  if (diagnosticoTitle) {
    diagnosticoTitle.textContent = isDiagnosticDataReady()
      ? (diagnostico.trabajo || 'Trabajo recomendado listo')
      : 'Diagnostico pendiente';
  }

  if (diagnosticoMeta) {
    diagnosticoMeta.textContent = isDiagnosticDataReady()
      ? `${diagnosticoSummary.meta.label} · Prioridad ${getDiagnosticoPriorityLabel(diagnostico.prioridad)} · ${diagnostico.causaProbable || 'Sin causa probable detallada'}`
      : 'La cotizacion hereda hallazgos, prioridad y trabajo recomendado del diagnostico.';
  }
}

function getSalidaEstadoLabel(value) {
  switch (value) {
    case 'entregado_observaciones':
      return 'Entregado con observaciones';
    case 'pendiente_entrega':
      return 'Pendiente de entrega';
    default:
      return 'Entregado conforme';
  }
}

function renderSalidaContext() {
  const title = document.getElementById('salidaContextTitle');
  const meta = document.getElementById('salidaContextMeta');
  const seguimientoTitle = document.getElementById('salidaSeguimientoTitle');
  const seguimientoMeta = document.getElementById('salidaSeguimientoMeta');
  const estadoTitle = document.getElementById('salidaEstadoTitle');
  const estadoMeta = document.getElementById('salidaEstadoMeta');
  const workflowContext = getWorkflowContextSelection();
  const cliente = workflowContext.cliente;
  const vehiculo = workflowContext.vehiculo;
  const salida = getSalidaPayload();

  if (title) {
    title.textContent = cliente && vehiculo
      ? `${getClientDisplayName(cliente) || 'Cliente sin nombre'} · ${vehiculo.modelo || 'Vehiculo sin modelo'}`
      : 'Sin expediente activo';
  }

  if (meta) {
    meta.textContent = cliente && vehiculo
      ? `${vehiculo.placa || 'Sin placa'} · ${vehiculo.chasis || 'Sin chasis'} · ${cliente.telefono || 'Sin telefono'}`
      : 'La orden de salida se emite sobre el cliente y vehiculo seleccionados.';
  }

  if (seguimientoTitle) {
    seguimientoTitle.textContent = isSeguimientoModuleComplete()
      ? ((document.getElementById('trabajoRealizado')?.value || '').trim() || 'Seguimiento completado')
      : 'Seguimiento pendiente';
  }

  if (seguimientoMeta) {
    const estatus = normalizeSeguimientoStatus(document.getElementById('estatusTrabajo')?.value || 'en_espera');
    const estadoOperativo = getOperationalStatusMeta(estatus);
    const entregaReal = document.getElementById('fechaEntregaReal')?.value || 'Sin fecha real';
    seguimientoMeta.textContent = isSeguimientoModuleComplete()
      ? `${estadoOperativo.label} · Entrega ${entregaReal}`
      : 'Completa el seguimiento para registrar trabajo realizado y fecha de entrega.';
  }

  if (estadoTitle) {
    estadoTitle.textContent = isSalidaModuleComplete()
      ? getSalidaEstadoLabel(salida.estadoSalidaVehiculo)
      : 'Preparando cierre';
  }

  if (estadoMeta) {
    estadoMeta.textContent = isSalidaModuleComplete()
      ? `${getSelectedSalidaChecklist().length} punto(s) confirmados · ${salida.recibidoPorCliente || 'Sin receptor indicado'}`
      : 'Checklist, notas finales y firma del cliente para cerrar el expediente.';
  }
}

function getCotizacionForOrderId(orderId = currentLoadedEntryOrderId) {
  if (!orderId) {
    return currentLoadedCotizacionId
      ? cotizacionesGuardadas.find(cotizacion => cotizacion.id === currentLoadedCotizacionId) || null
      : null;
  }

  if (currentLoadedCotizacionId) {
    const currentCotizacion = cotizacionesGuardadas.find(cotizacion => cotizacion.id === currentLoadedCotizacionId) || null;
    if (currentCotizacion?.ordenEntradaId === orderId) {
      return currentCotizacion;
    }
  }

  return cotizacionesGuardadas
    .filter(cotizacion => cotizacion.ordenEntradaId === orderId)
    .slice()
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))[0] || null;
}

function renderActiveWorkflowHeader() {
  const header = document.getElementById('activeWorkflowHeader');
  const mobileStrip = document.getElementById('mobileWorkflowStrip');
  if (!header) {
    return;
  }

  const activeMainTab = document.querySelector('[data-main-tab-target].active')?.dataset.mainTabTarget || 'dashboard';
  const shouldShowDesktopHeader = activeMainTab === 'dashboard';
  const shouldShowMobileStrip = activeMainTab === 'dashboard';

  const context = getWorkflowContextSelection();
  const cliente = context.cliente;
  const vehiculo = context.vehiculo;
  const orden = context.orden;
  const cotizacion = getCotizacionForOrderId(orden?.id || currentLoadedEntryOrderId);
  const factura = cotizacion ? normalizeFacturaRecord(getFacturaByCotizacionId(cotizacion.id) || {}) : null;
  const snapshot = orden ? getOrdenWorkflowSnapshot(orden) : null;
  const progress = orden ? getWorkflowProgressMeta(orden, cotizacion) : getCurrentWorkflowProgressMeta();

  if (!cliente && !vehiculo && !orden && !hasActiveWorkflowData()) {
    header.classList.add('hidden');
    mobileStrip?.classList.add('hidden');
    return;
  }

  header.classList.toggle('hidden', !shouldShowDesktopHeader);
  mobileStrip?.classList.toggle('hidden', !shouldShowMobileStrip);

  const commercialStatus = cotizacion ? getCommercialStatusMeta(getCotizacionCommercialStatus(cotizacion)) : { label: 'Sin cotizacion', tone: 'neutral' };
  const operationalStatus = cotizacion ? getOperationalStatusMeta(cotizacion.seguimiento?.estatusTrabajo) : { label: 'Sin seguimiento', tone: 'neutral' };
  const collectionStatus = factura?.id ? getCollectionStatusMeta(factura.estadoCobro) : { label: 'Sin factura', tone: 'neutral' };
  const approvedTotals = cotizacion ? getCotizacionApprovedTotals(cotizacion) : { totalFinal: 0 };
  const invoiceAmount = factura?.id ? factura.totalFinal : approvedTotals.totalFinal;
  const operationalPill = document.getElementById('activeWorkflowOperationalPill');
  const commercialPill = document.getElementById('activeWorkflowCommercialPill');
  const collectionPill = document.getElementById('activeWorkflowCollectionPill');

  document.getElementById('activeWorkflowTitle').textContent = orden
    ? `${orden.id} · ${snapshot?.title || 'Expediente activo'}`
    : 'Expediente en preparación';
  document.getElementById('activeWorkflowMeta').textContent = orden
    ? `${snapshot?.detail || 'Revisa el flujo actual'} · ${commercialStatus.label} · ${operationalStatus.label}`
    : 'Todavía no hay una visita guardada, pero ya existe contexto cargado en el formulario.';

  document.getElementById('activeWorkflowClient').textContent = cliente ? (getClientDisplayName(cliente) || 'Cliente sin nombre') : 'No seleccionado';
  document.getElementById('activeWorkflowClientMeta').textContent = cliente
    ? `${cliente.id || 'Sin identificacion'} · ${cliente.telefono || cliente.whatsapp || 'Sin telefono'}`
    : 'Sin telefono o identificacion.';
  document.getElementById('activeWorkflowVehicle').textContent = vehiculo ? getVehicleFullLabel(vehiculo) : 'No seleccionado';
  document.getElementById('activeWorkflowVehicleMeta').textContent = vehiculo
    ? `${vehiculo.placa || 'Sin placa'} · ${vehiculo.chasis || 'Sin chasis'} · ${vehiculo.anio || 'Ano N/D'}`
    : 'Sin placa ni chasis.';
  document.getElementById('activeWorkflowOrder').textContent = orden?.id || 'Sin OT';
  document.getElementById('activeWorkflowOrderMeta').textContent = orden
    ? `${orden.ordenEntrada?.motivoEntrada || 'Sin motivo registrado'} · ${formatDisplayDateTime(orden.updatedAt || orden.savedAt || orden.fecha)}`
    : 'Todavia no hay orden de entrada vinculada.';
  if (operationalPill) {
    operationalPill.className = `dashboard-module-chip is-${operationalStatus.tone === 'success' ? 'complete' : 'pending'}`;
    operationalPill.textContent = `Operativo: ${operationalStatus.label}`;
  }
  if (commercialPill) {
    commercialPill.className = `dashboard-module-chip is-${commercialStatus.tone === 'success' ? 'complete' : 'pending'}`;
    commercialPill.textContent = `Comercial: ${commercialStatus.label}`;
  }
  if (collectionPill) {
    collectionPill.className = `dashboard-module-chip is-${collectionStatus.tone === 'success' ? 'complete' : 'pending'}`;
    collectionPill.textContent = `Cobro: ${collectionStatus.label}`;
  }

  document.getElementById('activeWorkflowOperationalStatus').textContent = operationalStatus.label;
  document.getElementById('activeWorkflowOperationalMeta').textContent = cotizacion?.seguimiento?.trabajoProceso
    || cotizacion?.seguimiento?.trabajoRealizado
    || snapshot?.detail
    || 'Pendiente de iniciar flujo operativo.';
  document.getElementById('activeWorkflowCommercialStatus').textContent = commercialStatus.label;
  document.getElementById('activeWorkflowCommercialMeta').textContent = cotizacion?.id
    ? `Cotizacion ${cotizacion.id} · RD$ ${Number(cotizacion.totalFinal || 0).toFixed(2)}`
    : 'Aun no existe decision comercial sobre la visita.';
  document.getElementById('activeWorkflowCollectionStatus').textContent = collectionStatus.label;
  document.getElementById('activeWorkflowCollectionMeta').textContent = factura?.id
    ? `${factura.id} · Total RD$ ${Number(factura.totalFinal || 0).toFixed(2)}`
    : 'La visita todavia no entra a facturacion.';
  document.getElementById('activeWorkflowBalance').textContent = `RD$ ${Number(factura?.saldoPendiente ?? invoiceAmount).toFixed(2)}`;
  document.getElementById('activeWorkflowBalanceMeta').textContent = factura?.id
    ? `Total RD$ ${Number(factura.totalFinal || 0).toFixed(2)} · ${collectionStatus.label}`
    : cotizacion
      ? `Monto ${isCommercialStatusInvoiceable(getCotizacionCommercialStatus(cotizacion)) ? 'aprobado' : 'cotizado'}: RD$ ${Number(invoiceAmount || cotizacion.totalFinal || 0).toFixed(2)}`
      : 'Sin factura asociada.';
  document.getElementById('activeWorkflowNextAction').textContent = snapshot?.actionLabel || 'Abrir recepción';
  document.getElementById('activeWorkflowNextActionMeta').textContent = snapshot?.detail || 'Continua el flujo desde Cliente y Entrada.';

  const compactTitle = document.getElementById('activeWorkflowCompactTitle');
  const compactMeta = document.getElementById('activeWorkflowCompactMeta');
  if (compactTitle) {
    compactTitle.textContent = orden
      ? `${orden.id} · ${getClientDisplayName(cliente || {}) || 'Expediente activo'}`
      : 'Expediente en preparación';
  }
  if (compactMeta) {
    compactMeta.textContent = orden
      ? `${vehiculo ? getVehicleFullLabel(vehiculo) : 'Vehículo pendiente'} · RD$ ${Number(factura?.saldoPendiente ?? invoiceAmount).toFixed(2)} · ${snapshot?.actionLabel || 'Abrir recepción'}`
      : 'Sin OT · RD$ 0.00 · Abrir recepción';
  }

  const mobileTitle = document.getElementById('mobileWorkflowTitle');
  const mobileMeta = document.getElementById('mobileWorkflowMeta');
  const mobileBalance = document.getElementById('mobileWorkflowBalance');
  const mobileNext = document.getElementById('mobileWorkflowNext');

  if (mobileTitle) {
    mobileTitle.textContent = orden ? `${orden.id} · ${getClientDisplayName(cliente || {}) || 'Expediente activo'}` : 'Expediente en preparación';
  }
  if (mobileMeta) {
    mobileMeta.textContent = vehiculo
      ? `${getVehicleFullLabel(vehiculo)} · ${operationalStatus.label}`
      : (snapshot?.detail || 'Selecciona una visita para continuar.');
  }
  if (mobileBalance) {
    mobileBalance.textContent = `Saldo ${Number(factura?.saldoPendiente ?? invoiceAmount).toFixed(2)}`;
  }
  if (mobileNext) {
    mobileNext.textContent = snapshot?.actionLabel || 'Abrir recepción';
  }

  const progressBar = document.getElementById('activeWorkflowProgressBar');
  const progressValue = document.getElementById('activeWorkflowProgressValue');
  const progressMeta = document.getElementById('activeWorkflowProgressMeta');
  const mobileProgressBar = document.getElementById('mobileWorkflowProgressBar');
  const mobileProgressMeta = document.getElementById('mobileWorkflowProgressMeta');

  if (progressBar) {
    progressBar.style.width = `${progress.percentage}%`;
  }
  if (progressValue) {
    progressValue.textContent = `${progress.percentage}%`;
  }
  if (progressMeta) {
    progressMeta.textContent = `${progress.completed} de ${progress.total} módulos listos`;
  }
  if (mobileProgressBar) {
    mobileProgressBar.style.width = `${progress.percentage}%`;
  }
  if (mobileProgressMeta) {
    mobileProgressMeta.textContent = `${progress.completed} de ${progress.total} módulos listos`;
  }

  const primaryButton = document.getElementById('activeWorkflowPrimaryAction');
  const mobilePrimaryButton = document.getElementById('mobileWorkflowPrimaryAction');
  const toggleButton = document.getElementById('activeWorkflowToggleBtn');
  const detailsPanel = document.getElementById('activeWorkflowDetails');

  const targetTab = snapshot?.targetTab || 'cotStepOrden';
  const runPrimaryAction = () => {
    if (targetTab === 'facturacion' && orden?.id) {
      openWorkflowVisitFacturacion(orden.id);
      return;
    }

    if (orden?.id) {
      openWorkflowVisit(orden.id, targetTab);
      return;
    }

    openTab(null, targetTab, null, true);
  };

  [primaryButton, mobilePrimaryButton].forEach(button => {
    if (!button) {
      return;
    }

    button.classList.remove('hidden');
    button.textContent = snapshot?.actionLabel ? `Abrir: ${snapshot.actionLabel}` : 'Abrir siguiente acción';
    button.onclick = runPrimaryAction;
  });

  if (toggleButton && detailsPanel) {
    const isExpanded = header.dataset.expanded === 'true';
    detailsPanel.classList.toggle('hidden', !isExpanded);
    toggleButton.textContent = isExpanded ? 'Ocultar detalle' : 'Ver detalle';
    toggleButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  }
}

function toggleActiveWorkflowHeaderDetails(forceExpanded = null) {
  const header = document.getElementById('activeWorkflowHeader');
  const detailsPanel = document.getElementById('activeWorkflowDetails');
  const toggleButton = document.getElementById('activeWorkflowToggleBtn');
  if (!header || !detailsPanel || !toggleButton) {
    return;
  }

  const nextExpanded = typeof forceExpanded === 'boolean'
    ? forceExpanded
    : header.dataset.expanded !== 'true';

  header.dataset.expanded = nextExpanded ? 'true' : 'false';
  detailsPanel.classList.toggle('hidden', !nextExpanded);
  toggleButton.textContent = nextExpanded ? 'Ocultar detalle' : 'Ver detalle';
  toggleButton.setAttribute('aria-expanded', nextExpanded ? 'true' : 'false');
}

function getClientDisplayName(cliente = {}) {
  return cliente.tipo === 'rnc' && cliente.empresa ? cliente.empresa : cliente.nombre;
}

function getEntryClientSearchText(cliente = {}) {
  return [
    getClientDisplayName(cliente),
    getClientRecordId(cliente),
    cliente.id,
    cliente.telefono,
    cliente.whatsapp
  ].join(' ').toLowerCase();
}

function syncEntryClientVehicleSelectors() {
  const selectorPanels = Array.from(document.querySelectorAll('[data-workflow-selector]'));
  if (!selectorPanels.length) {
    return;
  }

  const selectedVisitId = currentLoadedEntryOrderId || resolveEntryOrderRecordForSelection()?.id || '';
  selectorPanels.forEach(panel => {
    const visitSelect = panel.querySelector('[data-workflow-visit-select]');
    const visitSearch = panel.querySelector('[data-workflow-visit-search]');
    if (!visitSelect) {
      return;
    }

    const searchQuery = (visitSearch?.value || '').trim().toLowerCase();
    const filteredVisits = ordenesEntradaGuardadas
      .filter(orden => getOrdenEntradaSearchText(orden).includes(searchQuery))
      .sort((a, b) => new Date(b.updatedAt || b.savedAt || b.fecha) - new Date(a.updatedAt || a.savedAt || a.fecha));

    visitSelect.innerHTML = filteredVisits.length
      ? '<option value="">-- Selecciona una visita --</option>'
      : '<option value="">-- No hay visitas que coincidan --</option>';

    filteredVisits.forEach(orden => {
      const option = document.createElement('option');
      option.value = orden.id;
      option.textContent = `${orden.id} · ${getStoredClientDisplayName(orden.cliente || {}) || 'Cliente sin nombre'} · ${orden.vehiculo?.placa || 'Sin placa'} · ${orden.ordenEntrada?.motivoEntrada?.trim() || 'Sin motivo'}`;
      visitSelect.appendChild(option);
    });

    visitSelect.value = filteredVisits.some(orden => orden.id === selectedVisitId)
      ? selectedVisitId
      : '';
  });
}

function handleWorkflowVisitSearch() {
  syncEntryClientVehicleSelectors();
}

function handleWorkflowVisitSelection(event) {
  const workflowVisitSelect = (event?.target || event)?.closest?.('[data-workflow-selector]')?.querySelector('[data-workflow-visit-select]')
    || document.getElementById('entryVisitSelect');
  if (!workflowVisitSelect || !workflowVisitSelect.value) {
    return;
  }

  cargarOrdenEntradaById(workflowVisitSelect.value);
  syncEntryClientVehicleSelectors();
  scheduleModuleDraftSave();
}

function toggleWarningLight(lightName) {
  const checkbox = Array.from(document.querySelectorAll('.luzTablero')).find(element => element.value === lightName);
  if (!checkbox) {
    return;
  }

  checkbox.checked = !checkbox.checked;
  syncWarningLightCards();
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function normalizeEntryChecklistValue(value = '') {
  if (value === true || String(value).toLowerCase() === 'si' || String(value).toLowerCase() === 'sí') {
    return 'si';
  }
  if (value === false || String(value).toLowerCase() === 'no') {
    return 'no';
  }
  return '';
}

function getEntryChecklistControl(itemKey) {
  return document.querySelector(`[data-entry-check-item="${itemKey}"]`);
}

function setEntryChecklistControlState(control, value = '') {
  if (!control) {
    return;
  }

  const normalizedValue = normalizeEntryChecklistValue(value);
  const stateMeta = normalizedValue === 'si'
    ? { label: '✓', className: 'is-si', ariaSuffix: 'Sí' }
    : normalizedValue === 'no'
      ? { label: 'X', className: 'is-no', ariaSuffix: 'No' }
      : { label: '', className: 'is-empty', ariaSuffix: 'En blanco' };

  control.dataset.checklistState = normalizedValue;
  control.textContent = stateMeta.label;
  control.classList.remove('is-si', 'is-no', 'is-empty');
  control.classList.add(stateMeta.className);

  const rowLabel = control.closest('.entry-checklist-item')?.querySelector('span')?.textContent?.trim()
    || control.closest('tr')?.querySelector('td')?.textContent?.trim()
    || 'Elemento';
  control.setAttribute('aria-label', `${rowLabel}: ${stateMeta.ariaSuffix}`);
}

function cycleEntryChecklistState(itemKey) {
  const control = getEntryChecklistControl(itemKey);
  if (!control) {
    return;
  }

  const currentValue = normalizeEntryChecklistValue(control.dataset.checklistState || '');
  const nextValue = currentValue === '' ? 'si' : currentValue === 'si' ? 'no' : '';
  setEntryChecklistControlState(control, nextValue);
  control.dispatchEvent(new Event('change', { bubbles: true }));
}

function buildLegacyEntryChecklist(accesorios = []) {
  const selectedAccessories = new Set(
    (Array.isArray(accesorios) ? accesorios : String(accesorios || '').split(','))
      .map(item => String(item).trim().toLowerCase())
      .filter(Boolean)
  );
  const checklist = {};

  ENTRY_CHECKLIST_ITEMS.forEach(item => {
    const hasLegacyValue = (item.legacyValues || []).some(legacyValue => selectedAccessories.has(legacyValue.toLowerCase()));
    checklist[item.key] = hasLegacyValue ? 'si' : '';
  });

  return checklist;
}

function getEntryChecklistState(sourceData = null) {
  if (sourceData && sourceData.checklist && typeof sourceData.checklist === 'object') {
    return ENTRY_CHECKLIST_ITEMS.reduce((accumulator, item) => {
      accumulator[item.key] = normalizeEntryChecklistValue(sourceData.checklist[item.key]);
      return accumulator;
    }, {});
  }

  if (sourceData) {
    return buildLegacyEntryChecklist(sourceData.accesorios || []);
  }

  return ENTRY_CHECKLIST_ITEMS.reduce((accumulator, item) => {
    const input = getEntryChecklistControl(item.key);
    accumulator[item.key] = normalizeEntryChecklistValue(input?.dataset.checklistState || input?.value || '');
    return accumulator;
  }, {});
}

function applyEntryChecklistState(checklist = {}) {
  ENTRY_CHECKLIST_ITEMS.forEach(item => {
    const input = getEntryChecklistControl(item.key);
    if (input) {
      setEntryChecklistControlState(input, checklist[item.key]);
    }
  });
}

function getEntryChecklistSelectionsCount() {
  return Object.values(getEntryChecklistState()).filter(Boolean).length;
}

function getChecklistPrintableRows(checklist = {}) {
  return ENTRY_CHECKLIST_ITEMS.map(item => ({
    label: item.label,
    value: normalizeEntryChecklistValue(checklist[item.key])
  }));
}

function getSelectedEntryAccessories() {
  const accessoryCheckboxes = Array.from(document.querySelectorAll('.entryAccessory:checked')).map(element => element.value);
  if (accessoryCheckboxes.length || document.querySelectorAll('.entryAccessory').length) {
    return accessoryCheckboxes;
  }

  const checklist = getEntryChecklistState();
  return ENTRY_CHECKLIST_ITEMS
    .filter(item => checklist[item.key] === 'si')
    .map(item => item.label);
}

function toggleEntryAccessory(accessoryName) {
  const checkbox = Array.from(document.querySelectorAll('.entryAccessory')).find(element => element.value === accessoryName);
  if (!checkbox) {
    return;
  }

  checkbox.checked = !checkbox.checked;
  syncEntryAccessoryCards();
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function syncEntryAccessoryCards() {
  document.querySelectorAll('[data-entry-accessory]').forEach(card => {
    const accessoryName = card.dataset.entryAccessory;
    const checkbox = Array.from(document.querySelectorAll('.entryAccessory')).find(element => element.value === accessoryName);
    card.classList.toggle('is-active', Boolean(checkbox?.checked));
  });
}

function syncWarningLightCards() {
  document.querySelectorAll('[data-warning-light]').forEach(card => {
    const lightName = card.dataset.warningLight;
    const checkbox = Array.from(document.querySelectorAll('.luzTablero')).find(element => element.value === lightName);
    card.classList.toggle('is-active', Boolean(checkbox?.checked));
  });
}

function renderEntryDamageMarkers() {
  const container = document.getElementById('entryDamageMarkers');
  const summary = document.getElementById('entryDamageSummary');
  if (!container) {
    return;
  }

  entryDamageMarks = normalizeEntryDamageMarks(entryDamageMarks);

  container.innerHTML = entryDamageMarks.map((mark, index) => `
    <button
      type="button"
      class="entry-damage-marker"
      style="left: ${mark.x}%; top: ${mark.y}%;"
      data-action="entrada-eliminar-marca"
      data-mark-index="${index}"
      title="Marca ${index + 1}: ${mark.x.toFixed(1)}%, ${mark.y.toFixed(1)}%"
    >${index + 1}</button>
  `).join('');

  if (summary) {
    summary.textContent = entryDamageMarks.length
      ? `${entryDamageMarks.length} marca(s) registrada(s) en el diagrama.`
      : 'No hay marcas registradas.';
  }
}

function handleEntryDiagramClick(event) {
  const stage = document.getElementById('entryDamageDiagram');
  if (!stage || event.target.closest('.entry-damage-marker')) {
    return;
  }

  const image = stage.querySelector('img');
  if (!image) {
    return;
  }

  const rect = image.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;

  if (x < 0 || x > 100 || y < 0 || y > 100) {
    return;
  }

  entryDamageMarks.push({
    x: Number(x.toFixed(2)),
    y: Number(y.toFixed(2))
  });
  renderEntryDamageMarkers();
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function removeEntryDamageMark(index, event) {
  if (event) {
    event.stopPropagation();
  }

  entryDamageMarks = entryDamageMarks.filter((_, currentIndex) => currentIndex !== index);
  renderEntryDamageMarkers();
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function clearEntryDamageMarks() {
  entryDamageMarks = [];
  renderEntryDamageMarkers();
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function normalizeEntryDamageMarks(marks = []) {
  if (!Array.isArray(marks)) {
    return [];
  }

  return marks
    .map(mark => {
      const x = Number(mark?.x);
      const y = Number(mark?.y);
      if (!Number.isFinite(x) || !Number.isFinite(y)) {
        return null;
      }

      return {
        x: Number(Math.min(Math.max(x, 0), 100).toFixed(2)),
        y: Number(Math.min(Math.max(y, 0), 100).toFixed(2))
      };
    })
    .filter(Boolean);
}

function initEntrySignaturePad() {
  const canvas = document.getElementById('entrySignatureCanvas');
  if (!canvas) {
    return;
  }

  entrySignaturePad = canvas;
  const context = canvas.getContext('2d');
  context.lineWidth = 2.5;
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = '#1e293b';

  const start = event => {
    entrySignatureDrawing = true;
    entrySignatureHasStroke = true;
    const point = getCanvasPoint(canvas, event);
    context.beginPath();
    context.moveTo(point.x, point.y);
  };

  const move = event => {
    if (!entrySignatureDrawing) {
      return;
    }
    event.preventDefault();
    const point = getCanvasPoint(canvas, event);
    context.lineTo(point.x, point.y);
    context.stroke();
  };

  const end = () => {
    entrySignatureDrawing = false;
  };

  canvas.addEventListener('pointerdown', start);
  canvas.addEventListener('pointermove', move);
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointerleave', end);
  loadEntrySignatureToCanvas();
}

function loadEntrySignatureToCanvas() {
  const canvas = entrySignaturePad;
  if (!canvas) {
    return;
  }

  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  entrySignatureHasStroke = false;

  if (!entryClientSignature) {
    updateEntrySignatureStatus();
    return;
  }

  const image = new Image();
  image.onload = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    entrySignatureHasStroke = true;
    updateEntrySignatureStatus();
  };
  image.src = entryClientSignature;
}

function clearEntrySignature() {
  const canvas = entrySignaturePad;
  if (!canvas) {
    return;
  }

  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  entryClientSignature = null;
  entrySignatureHasStroke = false;
  updateEntrySignatureStatus();
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function saveEntrySignature() {
  const canvas = entrySignaturePad;
  if (!canvas) {
    return;
  }

  if (!entrySignatureHasStroke) {
    alert('Agrega una firma antes de guardarla.');
    return;
  }

  entryClientSignature = canvas.toDataURL('image/png');
  updateEntrySignatureStatus();
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function updateEntrySignatureStatus() {
  const status = document.getElementById('entrySignatureStatus');
  if (!status) {
    return;
  }

  if (entryClientSignature) {
    status.textContent = 'Firma guardada';
    status.classList.add('is-signed');
  } else {
    status.textContent = 'Sin firma guardada';
    status.classList.remove('is-signed');
  }
}

function initSalidaSignaturePad() {
  const canvas = document.getElementById('salidaSignatureCanvas');
  if (!canvas) {
    return;
  }

  salidaSignaturePad = canvas;
  const context = canvas.getContext('2d');
  context.lineWidth = 2.5;
  context.lineCap = 'round';
  context.lineJoin = 'round';
  context.strokeStyle = '#1e293b';

  const start = event => {
    salidaSignatureDrawing = true;
    salidaSignatureHasStroke = true;
    const point = getCanvasPoint(canvas, event);
    context.beginPath();
    context.moveTo(point.x, point.y);
  };

  const move = event => {
    if (!salidaSignatureDrawing) {
      return;
    }
    event.preventDefault();
    const point = getCanvasPoint(canvas, event);
    context.lineTo(point.x, point.y);
    context.stroke();
  };

  const end = () => {
    salidaSignatureDrawing = false;
  };

  canvas.addEventListener('pointerdown', start);
  canvas.addEventListener('pointermove', move);
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointerleave', end);
  loadSalidaSignatureToCanvas();
}

function loadSalidaSignatureToCanvas() {
  const canvas = salidaSignaturePad;
  if (!canvas) {
    return;
  }

  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  salidaSignatureHasStroke = false;

  if (!salidaClientSignature) {
    updateSalidaSignatureStatus();
    return;
  }

  const image = new Image();
  image.onload = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    salidaSignatureHasStroke = true;
    updateSalidaSignatureStatus();
  };
  image.src = salidaClientSignature;
}

function clearSalidaSignature() {
  const canvas = salidaSignaturePad;
  if (!canvas) {
    return;
  }

  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  salidaClientSignature = null;
  salidaSignatureHasStroke = false;
  updateSalidaSignatureStatus();
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function saveSalidaSignature() {
  const canvas = salidaSignaturePad;
  if (!canvas) {
    return;
  }

  if (!salidaSignatureHasStroke) {
    alert('Agrega una firma antes de guardarla.');
    return;
  }

  salidaClientSignature = canvas.toDataURL('image/png');
  updateSalidaSignatureStatus();
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
}

function updateSalidaSignatureStatus() {
  const status = document.getElementById('salidaSignatureStatus');
  if (!status) {
    return;
  }

  if (salidaClientSignature) {
    status.textContent = 'Firma guardada';
    status.classList.add('is-signed');
  } else {
    status.textContent = 'Sin firma guardada';
    status.classList.remove('is-signed');
  }
}

function getOrdenEntradaPayload() {
  return {
    combustibleActual: Number(document.getElementById('combustibleActual')?.value || 50),
    combustibleLabel: getFuelLabel(document.getElementById('combustibleActual')?.value || 50),
    millajeEntrada: document.getElementById('millajeEntrada')?.value || '',
    enciende: document.querySelector('input[name="enciende"]:checked')?.value || 'Sí',
    modoLlegada: document.querySelector('input[name="modoLlegada"]:checked')?.value || 'Conduciendo',
    lucesTablero: Array.from(document.querySelectorAll('.luzTablero:checked')).map(element => element.value),
    checklist: getEntryChecklistState(),
    accesorios: getSelectedEntryAccessories(),
    observacionesEntrada: document.getElementById('observacionesEntrada')?.value || '',
    motivoEntrada: document.getElementById('motivoEntrada')?.value || '',
    damageMarks: entryDamageMarks,
    firmaClienteEntrada: entryClientSignature
  };
}

function loadOrdenEntradaState(data = {}) {
  const combustibleInput = document.getElementById('combustibleActual');
  if (combustibleInput) {
    combustibleInput.value = Number(data.combustibleActual ?? 50);
  }
  document.getElementById('millajeEntrada').value = data.millajeEntrada || '';
  document.getElementById('motivoEntrada').value = data.motivoEntrada || '';
  document.querySelectorAll('input[name="enciende"]').forEach(radio => {
    radio.checked = radio.value === (data.enciende || 'Sí');
  });
  document.querySelectorAll('input[name="modoLlegada"]').forEach(radio => {
    radio.checked = radio.value === (data.modoLlegada || 'Conduciendo');
  });
  document.querySelectorAll('.luzTablero').forEach(checkbox => {
    checkbox.checked = (data.lucesTablero || []).includes(checkbox.value);
  });
  const accesoriosSeleccionados = Array.isArray(data.accesorios)
    ? data.accesorios
    : typeof data.accesorios === 'string'
      ? data.accesorios.split(',').map(item => item.trim()).filter(Boolean)
      : [];
  document.querySelectorAll('.entryAccessory').forEach(checkbox => {
    checkbox.checked = accesoriosSeleccionados.includes(checkbox.value);
  });
  applyEntryChecklistState(getEntryChecklistState(data));
  document.getElementById('observacionesEntrada').value = data.observacionesEntrada || '';
  entryDamageMarks = normalizeEntryDamageMarks(data.damageMarks);
  entryClientSignature = data.firmaClienteEntrada || null;
  updateCombustibleVisual();
  syncWarningLightCards();
  syncEntryAccessoryCards();
  renderEntryDamageMarkers();
  loadEntrySignatureToCanvas();
}

function renderPrintableOrdenEntrada(ordenEntrada = getOrdenEntradaPayload()) {
  const lightsContainer = document.getElementById('pLucesTableroList');
  const accessoriesContainer = document.getElementById('pAccesoriosList');
  const motivoElement = document.getElementById('pMotivoEntrada');
  const fuelBar = document.getElementById('pCombustibleActualBar');
  const fuelLabel = document.getElementById('pCombustibleActual');
  const damageFigure = document.getElementById('pEntradaDamageFigure');
  const damageMarkers = document.getElementById('pEntradaDamageMarkers');
  const damageSummary = document.getElementById('pEntradaDamageSummary');
  const signatureBlock = document.getElementById('pFirmaClienteEntradaBlock');
  const signatureImage = document.getElementById('pFirmaClienteEntrada');
  const damageFigureImage = damageFigure?.querySelector('img');

  if (fuelLabel) {
    fuelLabel.textContent = ordenEntrada.combustibleLabel || getFuelLabel(ordenEntrada.combustibleActual || 0);
  }
  if (fuelBar) {
    fuelBar.style.width = `${Number(ordenEntrada.combustibleActual || 0)}%`;
  }
  if (motivoElement) {
    motivoElement.textContent = (ordenEntrada.motivoEntrada || '').trim() || 'N/D';
  }

  if (lightsContainer) {
    const luces = Array.isArray(ordenEntrada.lucesTablero) ? ordenEntrada.lucesTablero : [];
    lightsContainer.innerHTML = luces.length
      ? luces.map(light => `<span class="print-chip">${light}</span>`).join('')
      : '<span class="print-chip is-empty">Ninguna</span>';
  }

  const accesorios = Array.isArray(ordenEntrada.accesorios)
    ? ordenEntrada.accesorios
    : typeof ordenEntrada.accesorios === 'string'
      ? ordenEntrada.accesorios.split(',').map(item => item.trim()).filter(Boolean)
      : [];
  if (accessoriesContainer) {
    accessoriesContainer.innerHTML = accesorios.length
      ? accesorios.map(item => `<span class="print-chip">${item}</span>`).join('')
      : '<span class="print-chip is-empty">Ninguno</span>';
  }

  document.getElementById('pObservacionesEntrada').textContent = (ordenEntrada.observacionesEntrada || '').trim() || 'Sin observaciones registradas.';

  if (damageFigure && damageMarkers && damageSummary) {
    const marks = normalizeEntryDamageMarks(ordenEntrada.damageMarks);
    damageFigure.classList.remove('hidden');
    if (damageFigureImage) {
      damageFigureImage.src = getEntryDiagramImageSrc();
    }
    damageMarkers.innerHTML = marks.map((mark, index) => `
      <span class="entry-damage-marker print-marker" style="left: ${mark.x}%; top: ${mark.y}%;">${index + 1}</span>
    `).join('');
    damageSummary.textContent = marks.length
      ? `${marks.length} marca(s) visibles registradas sobre el diagrama.`
      : 'Sin marcas registradas. Se muestra el diagrama base del vehículo.';
  }

  if (signatureBlock && signatureImage) {
    if (ordenEntrada.firmaClienteEntrada) {
      signatureImage.src = ordenEntrada.firmaClienteEntrada;
      signatureBlock.classList.remove('hidden');
    } else {
      signatureImage.src = '';
      signatureBlock.classList.add('hidden');
    }
  }
}

function guardarOrdenEntrada(showAlert = true) {
  if (!hasSelectedClientAndVehicle()) {
    notifyValidation('Cliente y vehículo requeridos', 'Primero debes seleccionar un cliente y uno de sus vehículos antes de guardar la orden de entrada.', { kicker: 'Recepción' });
    openTab(null, 'cotStepCliente', null, true);
    return false;
  }

  const ordenGuardada = guardarOrdenEntradaEnHistorial();
  if (!ordenGuardada) {
    return false;
  }

  persistModuleDraft();
  renderOrdenEntradaContext();
  renderDiagnosticModuleContext();
  renderServicioContext();
  updateModuleCompletionIndicators();

  if (showAlert) {
    notifySuccess('Orden de entrada guardada', `La OT ${ordenGuardada.id} quedó registrada y ya puedes continuar con Diagnóstico.`, { kicker: 'Recepción' });
  }

  return true;
}

function buildOrdenEntradaRecord() {
  return {
    fecha: document.getElementById('fecha')?.value || '',
    cliente: {
      clientId: currentLoadedClientId,
      tipoIdentificacion: document.getElementById('tipoIdentificacion')?.value || 'cedula',
      identificacion: document.getElementById('identificacion')?.value.trim() || '',
      nombreCliente: document.getElementById('nombreCliente')?.value.trim() || '',
      nombreEmpresa: document.getElementById('nombreEmpresa')?.value.trim() || '',
      telefono: document.getElementById('telefonoCliente')?.value.trim() || '',
      telefonoOficina: document.getElementById('telefonoOficinaCliente')?.value.trim() || '',
      whatsapp: document.getElementById('whatsappCliente')?.value.trim() || '',
      email: document.getElementById('emailCliente')?.value.trim() || ''
    },
    vehiculo: {
      vehicleId: currentLoadedVehicleId,
      marca: document.getElementById('vehiculoMarca')?.value.trim() || '',
      modelo: document.getElementById('vehiculoModelo')?.value.trim() || '',
      anio: document.getElementById('vehiculoAnio')?.value || '',
      combustible: document.getElementById('vehiculoCombustible')?.value || 'Gasolina',
      chasis: document.getElementById('vehiculoChasis')?.value.trim() || '',
      placa: document.getElementById('vehiculoPlaca')?.value.trim() || '',
      color: document.getElementById('vehiculoColor')?.value.trim() || ''
    },
    ordenEntrada: getOrdenEntradaPayload(),
    diagnostico: diagnosticoTieneContenidoRegistrado()
      ? getDiagnosticoPayload()
      : (getCurrentEntryOrderRecord()?.diagnostico || null)
  };
}

function isSameOrdenEntradaOwner(existingRecord = {}, nextRecord = {}) {
  const existingClient = existingRecord.cliente || {};
  const nextClient = nextRecord.cliente || {};
  const existingVehicle = existingRecord.vehiculo || {};
  const nextVehicle = nextRecord.vehiculo || {};

  const sameClient = (existingClient.clientId && nextClient.clientId && existingClient.clientId === nextClient.clientId)
    || (existingClient.identificacion && nextClient.identificacion && existingClient.identificacion === nextClient.identificacion);

  const sameVehicle = (existingVehicle.vehicleId && nextVehicle.vehicleId && existingVehicle.vehicleId === nextVehicle.vehicleId)
    || (existingVehicle.chasis && nextVehicle.chasis && existingVehicle.chasis === nextVehicle.chasis)
    || (existingVehicle.placa && nextVehicle.placa && existingVehicle.placa === nextVehicle.placa);

  return Boolean(sameClient && sameVehicle);
}

function persistOrdenesEntradaGuardadas() {
  localStorage.setItem(LOCAL_STORAGE_ORDENES_ENTRADA_KEY, JSON.stringify(ordenesEntradaGuardadas));
}

function guardarOrdenEntradaEnHistorial() {
  const baseRecord = buildOrdenEntradaRecord();
  const now = new Date().toISOString();
  const existingIndex = ordenesEntradaGuardadas.findIndex(orden => orden.id === currentLoadedEntryOrderId);
  const existingRecord = existingIndex >= 0 ? ordenesEntradaGuardadas[existingIndex] : null;
  const shouldUpdateExisting = Boolean(existingRecord);

  const ordenRecord = {
    ...baseRecord,
    id: shouldUpdateExisting ? existingRecord.id : `ENT-${Date.now()}`,
    savedAt: shouldUpdateExisting ? (existingRecord.savedAt || now) : now,
    updatedAt: now
  };

  if (shouldUpdateExisting) {
    ordenesEntradaGuardadas.splice(existingIndex, 1, ordenRecord);
  } else {
    ordenesEntradaGuardadas.push(ordenRecord);
  }

  currentLoadedEntryOrderId = ordenRecord.id;
  persistOrdenesEntradaGuardadas();
  actualizarListaOrdenesEntradaHistorial();
  return ordenRecord;
}

function cargarOrdenesEntradaGuardadas() {
  const ordenesGuardadasStr = localStorage.getItem(LOCAL_STORAGE_ORDENES_ENTRADA_KEY);
  if (ordenesGuardadasStr) {
    ordenesEntradaGuardadas = JSON.parse(ordenesGuardadasStr);
  }
  actualizarListaOrdenesEntradaHistorial();
}

function getStoredClientDisplayName(cliente = {}) {
  return cliente.tipoIdentificacion === 'rnc' && cliente.nombreEmpresa ? cliente.nombreEmpresa : cliente.nombreCliente;
}

function getVehicleFullLabel(vehiculo = {}) {
  return [vehiculo.marca, vehiculo.modelo].filter(Boolean).join(' ').trim() || vehiculo.modelo || vehiculo.marca || 'Vehículo sin modelo';
}

function getOrdenEntradaSearchText(orden = {}) {
  return [
    orden.id,
    orden.fecha,
    getStoredClientDisplayName(orden.cliente || {}),
    orden.cliente?.identificacion,
    orden.vehiculo?.modelo,
    orden.vehiculo?.placa,
    orden.vehiculo?.chasis,
    orden.ordenEntrada?.motivoEntrada,
    orden.ordenEntrada?.observacionesEntrada
  ].filter(Boolean).join(' ').toLowerCase();
}

function isOrdenEntradaLinkedToSelection(orden = {}, clientId = currentLoadedClientId, vehicleId = currentLoadedVehicleId) {
  if (!orden) {
    return false;
  }

  const selectedClient = findClientByRecordId(clientId);
  const selectedVehicle = selectedClient?.vehiculos?.find(vehiculo => getVehicleRecordId(vehiculo) === vehicleId) || null;
  const ordenCliente = orden.cliente || {};
  const ordenVehiculo = orden.vehiculo || {};

  const sameClient = (clientId && ordenCliente.clientId && ordenCliente.clientId === clientId)
    || (selectedClient && ordenCliente.identificacion && ordenCliente.identificacion === selectedClient.id);

  const sameVehicle = (vehicleId && ordenVehiculo.vehicleId && ordenVehiculo.vehicleId === vehicleId)
    || (selectedVehicle && ordenVehiculo.chasis && ordenVehiculo.chasis === selectedVehicle.chasis)
    || (selectedVehicle && ordenVehiculo.placa && ordenVehiculo.placa === selectedVehicle.placa);

  return Boolean(sameClient && sameVehicle);
}

function getCurrentEntryOrderRecord() {
  if (!currentLoadedEntryOrderId) {
    return null;
  }

  const orden = ordenesEntradaGuardadas.find(item => item.id === currentLoadedEntryOrderId) || null;
  return isOrdenEntradaLinkedToSelection(orden) ? orden : null;
}

function getLatestOrdenEntradaRecordForSelection() {
  if (!hasSelectedClientAndVehicle()) {
    return null;
  }

  return ordenesEntradaGuardadas
    .filter(orden => isOrdenEntradaLinkedToSelection(orden))
    .sort((a, b) => new Date(b.updatedAt || b.savedAt || b.fecha) - new Date(a.updatedAt || a.savedAt || a.fecha))[0] || null;
}

function resolveEntryOrderRecordForSelection() {
  return getCurrentEntryOrderRecord() || getLatestOrdenEntradaRecordForSelection();
}

function hydrateLatestOrdenEntradaForSelection(options = {}) {
  const { overwriteForm = false } = options;
  const orden = resolveEntryOrderRecordForSelection();
  if (!orden) {
    return null;
  }

  currentLoadedEntryOrderId = orden.id;
  if (overwriteForm || !isOrdenModuleComplete()) {
    loadOrdenEntradaState(orden.ordenEntrada || {});
  }
  if (orden.diagnostico && (overwriteForm || !diagnosticoTieneContenidoRegistrado())) {
    loadDiagnosticoState(orden.diagnostico);
  }

  return orden;
}

function getLatestCotizacionForOrden(ordenId) {
  return cotizacionesGuardadas
    .filter(cotizacion => cotizacion.ordenEntradaId === ordenId)
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))[0] || null;
}

function getFacturaForOrden(ordenId) {
  const cotizacion = getLatestCotizacionForOrden(ordenId);
  return cotizacion ? getFacturaByCotizacionId(cotizacion.id) : null;
}

function getOrdenWorkflowSnapshot(orden = {}) {
  const cotizacion = getLatestCotizacionForOrden(orden.id);
  const factura = cotizacion ? normalizeFacturaRecord(getFacturaByCotizacionId(cotizacion.id) || null) : null;
  const diagnosticoOrden = orden?.diagnostico || null;
  const seguimientoStatus = normalizeSeguimientoStatus(cotizacion?.seguimiento?.estatusTrabajo || 'en_espera');
  const salidaCompleta = Boolean(cotizacion?.salida?.fechaSalida && cotizacion?.salida?.recibidoPorCliente && cotizacion?.salida?.firmaClienteSalida);

  if (!cotizacion) {
    if (diagnosticoTieneContenidoGuardado(diagnosticoOrden)) {
      return {
        stage: 'cotizacion',
        title: 'Diagnostico listo para cotizar',
        detail: diagnosticoOrden.trabajo || diagnosticoOrden.diagnosticoInicial || 'Diagnostico consolidado en la orden de trabajo',
        targetTab: 'cotStepServicio',
        actionLabel: 'Cotizar'
      };
    }

    return {
      stage: 'diagnostico',
      title: 'Pendiente de diagnostico',
      detail: orden.ordenEntrada?.motivoEntrada || 'Entrada registrada sin diagnostico/cotizacion',
      targetTab: 'cotStepDiagnostico',
      actionLabel: 'Diagnosticar'
    };
  }

  const commercialStatus = getCotizacionCommercialStatus(cotizacion);

  if (commercialStatus === 'pendiente' || commercialStatus === 'ampliacion') {
    return {
      stage: 'cotizacion',
      title: commercialStatus === 'ampliacion' ? 'Ampliacion pendiente' : 'Pendiente de aprobacion',
      detail: `Cotizacion ${cotizacion.id} · RD$ ${Number(cotizacion.totalFinal || 0).toFixed(2)}`,
      targetTab: 'cotStepServicio',
      actionLabel: 'Cotizar'
    };
  }

  if (commercialStatus === 'rechazada') {
    return {
      stage: 'cotizacion',
      title: 'Cotizacion rechazada',
      detail: `Cotizacion ${cotizacion.id} rechazada`,
      targetTab: 'cotStepServicio',
      actionLabel: 'Revisar'
    };
  }

  if (!isOperationalStatusReadyForBilling(seguimientoStatus)) {
    return {
      stage: 'taller',
      title: getOperationalStatusMeta(seguimientoStatus).label,
      detail: cotizacion.seguimiento?.trabajoProceso || cotizacion.servicio?.trabajo || 'Expediente en taller',
      targetTab: 'cotStepSeguimiento',
      actionLabel: 'Seguimiento'
    };
  }

  if (!factura) {
    return {
      stage: 'cobro',
      title: 'Lista para facturar',
      detail: `Cotizacion ${cotizacion.id} aprobada y lista para cobro`,
      targetTab: 'facturacion',
      actionLabel: 'Facturar'
    };
  }

  if (factura.estadoCobro !== 'pagada') {
    return {
      stage: 'cobro',
      title: getCollectionStatusMeta(factura.estadoCobro).label,
      detail: `Factura ${factura.id} · Saldo RD$ ${factura.saldoPendiente.toFixed(2)}`,
      targetTab: 'facturacion',
      actionLabel: 'Cobrar'
    };
  }

  if (!salidaCompleta) {
    return {
      stage: 'taller',
      title: 'Pendiente de salida',
      detail: `Factura ${factura.id} pagada · falta cierre de entrega`,
      targetTab: 'cotStepSalida',
      actionLabel: 'Entregar'
    };
  }

  return {
    stage: 'cerrado',
    title: 'Expediente cerrado',
    detail: `Salida completada · ${orden.id}`,
    targetTab: 'cotStepSalida',
    actionLabel: 'Ver'
  };
}

function openWorkflowVisit(orderId, targetTab = 'cotStepDiagnostico') {
  cargarOrdenEntradaById(orderId);
  if (targetTab !== 'cotStepOrden') {
    openTab(null, targetTab, null, true);
  }
}

function openWorkflowVisitFacturacion(orderId) {
  const cotizacion = getLatestCotizacionForOrden(orderId);
  if (cotizacion) {
    cargarCotizacionById(cotizacion.id);
  } else {
    cargarOrdenEntradaById(orderId);
  }
  openTab(null, 'facturacion');
}

function renderDashboardQueueList(listId, items, emptyMessage) {
  const list = document.getElementById(listId);
  if (!list) {
    return;
  }

  list.innerHTML = '';
  if (!items.length) {
    list.innerHTML = `<li>${emptyMessage}</li>`;
    return;
  }

  items.slice(0, 6).forEach(item => {
    const li = document.createElement('li');
    li.className = 'dashboard-visit-item';

    const progress = item.progress || { completed: 0, total: 6, percentage: 0 };
    const details = document.createElement('div');
    details.className = 'dashboard-visit-feed';
    details.innerHTML = `
      <div class="dashboard-visit-feed-header">
        <strong>${item.primary}</strong>
        <span class="dashboard-visit-progress-pill">${progress.percentage}%</span>
      </div>
      <div class="dashboard-visit-feed-copy">${item.secondary}</div>
      <div class="dashboard-visit-feed-meta">
        <span class="dashboard-module-chip ${item.stage === 'cerrado' ? 'is-complete' : 'is-pending'}">${item.stageLabel || 'En curso'}</span>
        <span class="dashboard-visit-progress-text">${progress.completed} de ${progress.total} módulos</span>
      </div>
      <div class="dashboard-progress-track dashboard-visit-progress-track">
        <div class="dashboard-progress-fill" style="width: ${progress.percentage}%;"></div>
      </div>
    `;

    const action = document.createElement('button');
    action.type = 'button';
    action.textContent = item.actionLabel;
    action.className = 'btn-secondary dashboard-visit-action';
    action.addEventListener('click', () => {
      item.onClick();
    });

    li.appendChild(details);
    li.appendChild(action);
    list.appendChild(li);
  });
}

function renderDashboardVisitQueues() {
  const visitas = ordenesEntradaGuardadas
    .slice()
    .sort((a, b) => new Date(b.updatedAt || b.savedAt || b.fecha) - new Date(a.updatedAt || a.savedAt || a.fecha));

  const diagnosticoQueue = [];
  const cotizacionQueue = [];
  const tallerQueue = [];
  const cobroQueue = [];

  visitas.forEach(orden => {
    const clienteNombre = getStoredClientDisplayName(orden.cliente || {}) || 'Cliente sin nombre';
    const vehiculoLabel = `${orden.vehiculo?.modelo || 'Vehículo'} (${orden.vehiculo?.placa || 'Sin placa'})`;
    const snapshot = getOrdenWorkflowSnapshot(orden);
    const progress = getWorkflowProgressMeta(orden);
    const item = {
      primary: `${clienteNombre} · ${vehiculoLabel}`,
      secondary: `${orden.id} · ${snapshot.title} · ${snapshot.detail}`,
      stage: snapshot.stage,
      stageLabel: snapshot.title,
      progress,
      actionLabel: snapshot.actionLabel,
      onClick: () => {
        if (snapshot.targetTab === 'facturacion') {
          openWorkflowVisitFacturacion(orden.id);
          return;
        }
        openWorkflowVisit(orden.id, snapshot.targetTab);
      }
    };

    if (snapshot.stage === 'diagnostico') {
      diagnosticoQueue.push(item);
    } else if (snapshot.stage === 'cotizacion') {
      cotizacionQueue.push(item);
    } else if (snapshot.stage === 'taller') {
      tallerQueue.push(item);
    } else if (snapshot.stage === 'cobro') {
      cobroQueue.push(item);
    }
  });

  renderDashboardQueueList('dashboardQueueDiagnosticoList', diagnosticoQueue, 'No hay visitas pendientes de diagnóstico.');
  renderDashboardQueueList('dashboardQueueCotizacionList', cotizacionQueue, 'No hay expedientes pendientes de cotización/aprobación.');
  renderDashboardQueueList('dashboardQueueTallerList', tallerQueue, 'No hay vehículos en taller o pendientes de entrega.');
  renderDashboardQueueList('dashboardQueueCobroList', cobroQueue, 'No hay expedientes pendientes de facturación/cobro.');
}

function actualizarListaOrdenesEntradaHistorial() {
  const tableBody = document.getElementById('listaOrdenesEntradaTable');
  if (!tableBody) {
    return;
  }

  tableBody.innerHTML = '';
  const filtro = (document.getElementById('filtroOrdenesEntrada')?.value || '').toLowerCase().trim();

  if (ordenesEntradaGuardadas.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="7" class="text-center">No hay órdenes de entrada guardadas.</td></tr>';
    return;
  }

  const ordenesFiltradas = ordenesEntradaGuardadas
    .filter(orden => getOrdenEntradaSearchText(orden).includes(filtro))
    .sort((a, b) => new Date(b.updatedAt || b.savedAt || b.fecha) - new Date(a.updatedAt || a.savedAt || a.fecha));

  if (!ordenesFiltradas.length) {
    tableBody.innerHTML = '<tr><td colspan="7" class="text-center">No se encontraron órdenes de entrada con ese filtro.</td></tr>';
    return;
  }

  ordenesFiltradas.forEach(orden => {
    const row = tableBody.insertRow();
    row.dataset.entryOrderId = orden.id;

    row.insertCell().textContent = orden.id;
    row.insertCell().textContent = formatDisplayDate(orden.fecha || orden.savedAt);
    row.insertCell().textContent = getStoredClientDisplayName(orden.cliente || {}) || 'Cliente sin nombre';
    row.insertCell().textContent = `${orden.vehiculo?.modelo || 'Vehículo sin modelo'} (${orden.vehiculo?.placa || 'Sin placa'})`;
    row.insertCell().textContent = orden.ordenEntrada?.motivoEntrada?.trim() || 'N/D';
    row.insertCell().textContent = formatDisplayDate(orden.updatedAt || orden.savedAt);

    const actionsCell = row.insertCell();
    actionsCell.className = 'action-buttons';

    const loadBtn = document.createElement('button');
    loadBtn.type = 'button';
    loadBtn.textContent = 'Cargar';
    loadBtn.className = 'btn-primary';
    loadBtn.onclick = event => {
      event.stopPropagation();
      cargarOrdenEntradaById(orden.id);
    };
    actionsCell.appendChild(loadBtn);

    const printBtn = document.createElement('button');
    printBtn.type = 'button';
    printBtn.textContent = 'Imprimir';
    printBtn.className = 'btn-warning';
    printBtn.onclick = event => {
      event.stopPropagation();
      imprimirOrdenEntrada(orden.id);
    };
    actionsCell.appendChild(printBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'btn-danger';
    deleteBtn.onclick = event => {
      event.stopPropagation();
      eliminarOrdenEntradaHistorial(orden.id);
    };
    actionsCell.appendChild(deleteBtn);

    row.onclick = () => cargarOrdenEntradaById(orden.id);
  });
}

function filtrarOrdenesEntrada() {
  actualizarListaOrdenesEntradaHistorial();
}

function cargarOrdenEntradaById(idOrdenEntrada) {
  const orden = ordenesEntradaGuardadas.find(item => item.id === idOrdenEntrada);
  if (!orden) {
    alert('No se pudo encontrar la orden de entrada seleccionada.');
    return;
  }

  openTab(null, 'cotStepCliente');
  document.getElementById('fecha').value = orden.fecha || document.getElementById('fecha').value;
  document.getElementById('tipoIdentificacion').value = orden.cliente?.tipoIdentificacion || 'cedula';
  mostrarOcultarCampos();
  document.getElementById('identificacion').value = orden.cliente?.identificacion || '';
  document.getElementById('nombreCliente').value = orden.cliente?.nombreCliente || '';
  document.getElementById('nombreEmpresa').value = orden.cliente?.nombreEmpresa || '';
  document.getElementById('telefonoCliente').value = orden.cliente?.telefono || '';
  document.getElementById('telefonoOficinaCliente').value = orden.cliente?.telefonoOficina || '';
  document.getElementById('whatsappCliente').value = orden.cliente?.whatsapp || '';
  document.getElementById('emailCliente').value = orden.cliente?.email || '';

  const clienteRelacionado = findClientByRecordId(orden.cliente?.clientId) || findClientByIdentification(orden.cliente?.identificacion);
  cargarCamposVehiculo(orden.vehiculo || {});
  currentLoadedClientId = clienteRelacionado ? getClientRecordId(clienteRelacionado) : (orden.cliente?.clientId || null);
  actualizarListaVehiculosClienteActual(currentLoadedClientId);
  currentLoadedVehicleId = orden.vehiculo?.vehicleId || null;

  if (!currentLoadedVehicleId && clienteRelacionado) {
    const vehiculoRelacionado = clienteRelacionado.vehiculos.find(vehiculo => vehiculo.chasis === orden.vehiculo?.chasis || vehiculo.placa === orden.vehiculo?.placa);
    currentLoadedVehicleId = vehiculoRelacionado ? getVehicleRecordId(vehiculoRelacionado) : null;
  }

  currentLoadedEntryOrderId = orden.id;
  document.getElementById('cargarVehiculoClienteSelect').value = currentLoadedVehicleId || '';
  document.getElementById('cargarClienteSelect').value = currentLoadedClientId || '';
  actualizarIndicadoresClienteVehiculo();
  renderClienteWorkspace();

  if (orden.ordenEntrada) {
    loadOrdenEntradaState(orden.ordenEntrada);
  }

  loadDiagnosticoState(orden.diagnostico || {});

  renderOrdenEntradaContext();
  renderDiagnosticModuleContext();
  renderServicioContext();
  persistModuleDraft();
  updateModuleCompletionIndicators();
  openTab(null, 'cotStepOrden', null, true);
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getEntryDiagramImageSrc() {
  const liveDiagramImage = document.querySelector('#entryDamageDiagram img');
  if (liveDiagramImage?.src) {
    return liveDiagramImage.src;
  }

  const printDiagramImage = document.querySelector('#pEntradaDamageFigure img');
  if (printDiagramImage?.src) {
    return printDiagramImage.src;
  }

  return new URL('img/diagramas/car.jpg', window.location.href).href;
}

function buildOrdenEntradaPrintMeta(orden, printDate, savedDateTime) {
  return [
    { label: 'No. orden', value: orden?.id || 'N/D' },
    { label: 'Fecha', value: printDate || 'N/D' },
    { label: 'Actualizado', value: savedDateTime || 'N/D' }
  ];
}

function generarHTMLImpresionOrdenEntrada(orden) {
  const cliente = orden.cliente || {};
  const vehiculo = orden.vehiculo || {};
  const entrada = orden.ordenEntrada || {};
  const damageMarks = normalizeEntryDamageMarks(entrada.damageMarks);
  const nombreCliente = getStoredClientDisplayName(cliente) || 'Cliente sin nombre';
  const printDate = formatDisplayDate(orden.fecha || orden.savedAt);
  const savedDateTime = formatDisplayDateTime(orden.updatedAt || orden.savedAt || orden.fecha);
  const fuelLabel = entrada.combustibleLabel || getFuelLabel(entrada.combustibleActual || 0);
  const fuelPercent = Math.max(0, Math.min(100, Number(entrada.combustibleActual) || 0));
  const vehicleColorSwatch = resolveVehicleColorSwatch(vehiculo.color);
  const vehicleColorHtml = vehicleColorSwatch
    ? `<span class="entry-print-color-chip" title="${escapeHtml(vehiculo.color || '')}" aria-label="Color ${escapeHtml(vehiculo.color || '')}"><span class="entry-print-color-swatch" style="background:${escapeHtml(vehicleColorSwatch)};"></span></span>`
    : escapeHtml(vehiculo.color || 'N/D');
  const checklistRows = getChecklistPrintableRows(getEntryChecklistState(entrada));
  const observacionesExtra = damageMarks.length
    ? `\nMarcas visibles registradas en diagrama: ${damageMarks.length}.`
    : '';
  const damageDiagramSrc = escapeHtml(getEntryDiagramImageSrc());
  const activeWarningLights = new Set(Array.isArray(entrada.lucesTablero) ? entrada.lucesTablero : []);
  const damageCoordinatesHtml = damageMarks.length
    ? damageMarks.map((mark, index) => `<li><strong>M${index + 1}</strong> · X ${mark.x.toFixed(1)}% / Y ${mark.y.toFixed(1)}%</li>`).join('')
    : '<li>Sin coordenadas registradas.</li>';
  const warningLightsHtml = ENTRY_WARNING_LIGHTS.map(light => {
    const iconSrc = new URL(`img/testigos/${light.file}`, window.location.href).href;
    const isActive = activeWarningLights.has(light.label);
    return `
      <article class="entry-print-light-card ${isActive ? 'is-active' : 'is-inactive'}">
        <img src="${escapeHtml(iconSrc)}" alt="${escapeHtml(light.label)}">
        <div>
          <span class="entry-print-light-label">${escapeHtml(light.label)}</span>
          <span class="entry-print-light-state">${isActive ? 'Encendido' : 'Apagado'}</span>
        </div>
      </article>
    `;
  }).join('');
  const checklistCompactHtml = checklistRows.map(row => {
    const symbol = row.value === 'si' ? '✓' : row.value === 'no' ? 'X' : '';
    const stateClass = row.value === 'si' ? 'is-si' : row.value === 'no' ? 'is-no' : 'is-empty';
    return `
      <article class="entry-print-check-card">
        <span class="entry-print-check-label">${escapeHtml(row.label)}</span>
        <span class="entry-print-check-box ${stateClass}">${symbol}</span>
      </article>
    `;
  }).join('');
  const signatureSectionHtml = entrada.firmaClienteEntrada ? `
        <aside class="entry-print-signature-panel">
          <div class="entry-print-section-title">Firma del Cliente</div>
          <div class="entry-print-signature-box"><img src="${entrada.firmaClienteEntrada}" alt="Firma del cliente"></div>
        </aside>
      ` : '';
  const entryStyles = `
    .entry-print-sheet { border: 1px solid var(--print-primary); padding: 8px 10px 12px; }
    .entry-print-section { margin-top: 6px; }
    .entry-print-section-title { font-size: 0.76rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; border-bottom: 1px solid #cbd5e1; padding-bottom: 2px; margin-bottom: 4px; color: var(--print-primary); }
    .entry-print-top-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 10px; }
    .entry-print-mid-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 10px; }
    .entry-print-panel { border: none; border-radius: 0; padding: 0; background: transparent; min-width: 0; }
    .entry-print-info-list { display: grid; gap: 2px; }
    .entry-print-info-row { display: grid; grid-template-columns: 92px minmax(0, 1fr); gap: 6px; align-items: start; font-size: 0.76rem; line-height: 1.18; }
    .entry-print-info-row strong { color: var(--print-primary); }
    .entry-print-color-chip { display: inline-flex; align-items: center; min-height: 16px; }
    .entry-print-color-swatch { display: inline-block; width: 18px; height: 18px; border-radius: 999px; border: 1px solid #94a3b8; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.45); }
    .entry-print-table { width: 100%; border-collapse: collapse; margin-top: 0; }
    .entry-print-table td, .entry-print-table th { border: 1px solid var(--print-primary); padding: 5px 7px; font-size: 0.78rem; vertical-align: top; }
    .entry-print-table th { background: #f3f4f6; text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.5px; }
    .entry-print-label { width: 22%; font-weight: 700; background: #f9fafb; }
    .entry-print-wide-field { min-height: 42px; border: 1px solid #cbd5e1; padding: 6px 8px; white-space: pre-wrap; font-size: 0.76rem; line-height: 1.22; border-radius: 8px; background: #fff; }
    .entry-print-meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .entry-print-check-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 4px 6px; }
    .entry-print-check-card { display: grid; grid-template-columns: minmax(0, 1fr) 16px; gap: 5px; align-items: center; border: none; border-radius: 0; padding: 1px 0; background: transparent; min-width: 0; }
    .entry-print-check-label { display: block; font-size: 0.69rem; font-weight: 700; color: var(--print-primary); line-height: 1.05; word-break: break-word; }
    .entry-print-check-box { display: inline-flex; align-items: center; justify-content: center; width: 15px; height: 15px; border: 1px solid var(--print-primary); border-radius: 2px; background: #fff; font-size: 0.64rem; font-weight: 800; color: var(--print-primary); }
    .entry-print-check-box.is-si { background: #e2e8f0; }
    .entry-print-check-box.is-no { background: #fff; }
    .entry-print-check-box.is-empty { color: transparent; }
    .entry-print-bottom-grid { display: grid; grid-template-columns: minmax(0, 1fr) 150px; gap: 10px; align-items: start; }
    .entry-print-terms { margin: 0; padding-left: 16px; font-size: 0.72rem; line-height: 1.24; columns: 2; column-gap: 18px; }
    .entry-print-terms li { margin-bottom: 3px; }
    .entry-print-diagram-grid { display: grid; grid-template-columns: minmax(0, 1.18fr) minmax(220px, 0.82fr); gap: 8px; align-items: start; }
    .entry-print-diagram-frame { position: relative; border: 1px solid #cbd5e1; border-radius: 10px; overflow: hidden; background: #fff; min-height: 160px; }
    .entry-print-diagram-frame img { display: block; width: 100%; height: auto; }
    .entry-print-diagram-markers { position: absolute; inset: 0; }
    .entry-print-diagram-marker { position: absolute; width: 24px; height: 24px; border-radius: 999px; transform: translate(-50%, -50%); display: flex; align-items: center; justify-content: center; background: #dc2626; color: #fff; font-size: 0.7rem; font-weight: 700; border: 2px solid #fff; box-shadow: 0 4px 10px rgba(220, 38, 38, 0.24); }
    .entry-print-diagram-empty { padding: 10px 0 0; font-size: 0.82rem; color: #4b5563; text-align: center; }
    .entry-print-diagram-side { display: grid; gap: 6px; }
    .entry-print-diagram-aside { border: none; border-radius: 0; padding: 0; }
    .entry-print-diagram-aside h4 { margin: 0 0 4px; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.35px; color: var(--print-primary); }
    .entry-print-diagram-aside ol { margin: 0; padding-left: 16px; font-size: 0.7rem; line-height: 1.18; }
    .entry-print-diagram-aside li { margin-bottom: 3px; }
    .entry-print-lights-panel { border: none; border-radius: 0; padding: 0; background: transparent; }
    .entry-print-lights-panel h4 { margin: 0 0 4px; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.35px; color: var(--print-primary); }
    .entry-print-lights-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px 6px; }
    .entry-print-light-card { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 5px; align-items: center; border: none; border-radius: 0; padding: 1px 0; min-width: 0; }
    .entry-print-light-card img { width: 18px; height: 18px; object-fit: contain; }
    .entry-print-light-card.is-inactive img { opacity: 0.28; filter: grayscale(1); }
    .entry-print-light-label { display: block; font-size: 0.68rem; font-weight: 700; color: var(--print-primary); line-height: 1.05; }
    .entry-print-light-state { display: block; margin-top: 0; font-size: 0.62rem; color: #64748b; }
    .entry-print-light-card.is-active { background: transparent; }
    .entry-print-light-card.is-active .entry-print-light-state { color: #b91c1c; font-weight: 700; }
    .entry-print-fuel-panel { display: grid; gap: 4px; padding-top: 2px; }
    .entry-print-fuel-panel h4 { margin: 0; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.35px; color: var(--print-primary); }
    .entry-print-fuel-bar-wrap { position: relative; height: 10px; border: 1px solid #cbd5e1; border-radius: 999px; overflow: hidden; background: #f8fafc; }
    .entry-print-fuel-bar { height: 100%; border-radius: 999px; background: linear-gradient(90deg, #f59e0b 0%, #facc15 45%, #16a34a 100%); }
    .entry-print-fuel-scale { display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px; font-size: 0.58rem; color: #64748b; text-transform: uppercase; }
    .entry-print-fuel-scale span:nth-child(1) { text-align: left; }
    .entry-print-fuel-scale span:not(:first-child):not(:last-child) { text-align: center; }
    .entry-print-fuel-scale span:last-child { text-align: right; }
    .entry-print-fuel-summary { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; font-size: 0.68rem; color: var(--print-primary); }
    .entry-print-fuel-summary strong { font-size: 0.72rem; }
    .entry-print-fuel-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 8px; font-size: 0.64rem; line-height: 1.15; }
    .entry-print-fuel-meta span { color: #64748b; }
    .entry-print-fuel-meta strong { color: var(--print-primary); }
    .entry-print-signature-panel { min-width: 0; }
    .entry-print-signature-box { min-height: 48px; border: 1px solid #cbd5e1; display: flex; align-items: center; justify-content: center; padding: 3px; border-radius: 8px; background: #fff; }
    .entry-print-signature-box img { max-width: 100%; max-height: 44px; object-fit: contain; }
    @media print {
      .entry-print-sheet { border: none; padding: 0; }
      .entry-print-diagram-grid { gap: 6px; }
      .entry-print-diagram-marker { width: 22px; height: 22px; font-size: 0.66rem; }
    }
  `;

  const bodyHtml = `
    <div class="entry-print-sheet">
      <section class="entry-print-section entry-print-top-grid">
        <article class="entry-print-panel">
          <div class="entry-print-section-title">Datos del Cliente</div>
          <div class="entry-print-info-list">
            <div class="entry-print-info-row"><strong>Nombre</strong><span>${escapeHtml(nombreCliente)}</span></div>
            <div class="entry-print-info-row"><strong>Cedula/RNC</strong><span>${escapeHtml(cliente.identificacion || 'N/D')}</span></div>
            <div class="entry-print-info-row"><strong>Celular</strong><span>${escapeHtml(cliente.telefono || cliente.whatsapp || 'N/D')}</span></div>
            <div class="entry-print-info-row"><strong>Oficina</strong><span>${escapeHtml(cliente.telefonoOficina || 'N/D')}</span></div>
            <div class="entry-print-info-row"><strong>Email</strong><span>${escapeHtml(cliente.email || 'N/D')}</span></div>
          </div>
        </article>
        <article class="entry-print-panel">
          <div class="entry-print-section-title">Datos del Vehículo</div>
          <div class="entry-print-info-list">
            <div class="entry-print-info-row"><strong>Marca</strong><span>${escapeHtml(vehiculo.marca || 'N/D')}</span></div>
            <div class="entry-print-info-row"><strong>Modelo</strong><span>${escapeHtml(vehiculo.modelo || 'N/D')}</span></div>
            <div class="entry-print-info-row"><strong>Año</strong><span>${escapeHtml(vehiculo.anio || 'N/D')}</span></div>
            <div class="entry-print-info-row"><strong>Placa</strong><span>${escapeHtml(vehiculo.placa || 'N/D')}</span></div>
            <div class="entry-print-info-row"><strong>Kilometraje</strong><span>${escapeHtml(entrada.millajeEntrada || 'N/D')}</span></div>
            <div class="entry-print-info-row"><strong>Color</strong><span>${vehicleColorHtml}</span></div>
            <div class="entry-print-info-row"><strong>Chasis (VIN)</strong><span>${escapeHtml(vehiculo.chasis || 'N/D')}</span></div>
          </div>
        </article>
      </section>

      <section class="entry-print-section">
        <div class="entry-print-section-title">Checklist de Condiciones del Vehículo</div>
        <div class="entry-print-check-grid">${checklistCompactHtml}</div>
      </section>

      <section class="entry-print-section">
        <div class="entry-print-section-title">Diagrama de Daños Visibles</div>
        <div class="entry-print-diagram-grid">
          <div class="entry-print-diagram-frame">
            <img src="${damageDiagramSrc}" alt="Diagrama del vehículo con daños visibles">
            <div class="entry-print-diagram-markers">
              ${damageMarks.map((mark, index) => `<span class="entry-print-diagram-marker" style="left: ${mark.x}%; top: ${mark.y}%">${index + 1}</span>`).join('')}
            </div>
          </div>
          <div class="entry-print-diagram-side">
            <aside class="entry-print-lights-panel">
              <h4>Luces en el tablero</h4>
              <div class="entry-print-lights-grid">${warningLightsHtml}</div>
            </aside>
            <aside class="entry-print-fuel-panel">
              <h4>Combustible</h4>
              <div class="entry-print-fuel-summary">
                <strong>${escapeHtml(fuelLabel)}</strong>
                <span>${fuelPercent}%</span>
              </div>
              <div class="entry-print-fuel-bar-wrap">
                <div class="entry-print-fuel-bar" style="width: ${fuelPercent}%;"></div>
              </div>
              <div class="entry-print-fuel-scale">
                <span>E</span>
                <span>1/4</span>
                <span>1/2</span>
                <span>3/4</span>
                <span>F</span>
              </div>
              <div class="entry-print-fuel-meta">
                <div><span>Enciende</span> <strong>${escapeHtml(entrada.enciende || 'N/D')}</strong></div>
                <div><span>Ingreso</span> <strong>${escapeHtml(entrada.modoLlegada || 'N/D')}</strong></div>
              </div>
            </aside>
            ${damageMarks.length ? `
              <aside class="entry-print-diagram-aside">
                <h4>Coordenadas registradas</h4>
                <ol>
                  ${damageCoordinatesHtml}
                </ol>
              </aside>
            ` : ''}
          </div>
        </div>
      </section>

      <section class="entry-print-section entry-print-mid-grid">
        <article class="entry-print-panel">
          <div class="entry-print-section-title">Trabajos Solicitados</div>
          <div class="entry-print-wide-field">${escapeHtml(entrada.motivoEntrada || 'Sin trabajo solicitado registrado.')}</div>
        </article>
        <article class="entry-print-panel">
          <div class="entry-print-section-title">Notas / Observaciones</div>
          <div class="entry-print-wide-field">${escapeHtml((entrada.observacionesEntrada || 'Sin observaciones registradas.') + observacionesExtra)}</div>
        </article>
      </section>

      <section class="entry-print-section">
        <div class="entry-print-bottom-grid">
          <div>
            <div class="entry-print-section-title">Términos y Condiciones</div>
            <ol class="entry-print-terms">
              ${ENTRY_PRINT_TERMS.map(term => `<li>${escapeHtml(term)}</li>`).join('')}
            </ol>
          </div>
          ${signatureSectionHtml}
        </div>
      </section>
    </div>
  `;

  return buildConfigurablePrintHtml({
    windowTitle: `Orden de Entrada ${escapeHtml(orden.id)}`,
    kicker: 'Recepción de taller',
    documentTitle: 'Orden de Entrada',
    subtitle: 'Documento operativo de recepción, condiciones y autorización inicial.',
    meta: buildOrdenEntradaPrintMeta(orden, printDate, savedDateTime),
    bodyHtml,
    extraStyles: entryStyles,
    footerText: ''
  });
}

function imprimirOrdenEntrada(idOrdenEntrada) {
  const orden = ordenesEntradaGuardadas.find(item => item.id === idOrdenEntrada);
  if (!orden) {
    alert('No se encontró la orden de entrada seleccionada.');
    return;
  }

  notifyMissingPrintLogo('La orden de entrada');

  const win = window.open('', '', 'width=900,height=760');
  win.document.write(generarHTMLImpresionOrdenEntrada(orden));
  win.document.close();
  printWindowWhenReady(win);
}

function eliminarOrdenEntradaHistorial(idOrdenEntrada) {
  openAppDecisionModal({
    title: 'Eliminar orden de entrada',
    message: `Se eliminará la OT ${idOrdenEntrada} del historial operativo. Esta acción no se puede deshacer.`,
    confirmText: 'Eliminar OT',
    onConfirm: () => {
      ordenesEntradaGuardadas = ordenesEntradaGuardadas.filter(orden => orden.id !== idOrdenEntrada);
      if (currentLoadedEntryOrderId === idOrdenEntrada) {
        currentLoadedEntryOrderId = null;
        persistModuleDraft();
      }
      persistOrdenesEntradaGuardadas();
      actualizarListaOrdenesEntradaHistorial();
      updateDashboard();
      showAppNotice({ title: 'OT eliminada', message: `La orden ${idOrdenEntrada} fue retirada del historial.`, kicker: 'Gestión' });
    }
  });
}

function loadDiagnosticSignatureToCanvas() {
  const canvas = diagnosticSignaturePad;
  if (!canvas) {
    return;
  }

  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  diagnosticSignatureHasStroke = false;

  if (!diagnosticClientSignature) {
    updateDiagnosticSignatureStatus();
    return;
  }

  const image = new Image();
  image.onload = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    diagnosticSignatureHasStroke = true;
    updateDiagnosticSignatureStatus();
  };
  image.src = diagnosticClientSignature;
}

function clearDiagnosticSignature() {
  if (isDiagnosticLocked()) {
    return;
  }

  const canvas = diagnosticSignaturePad;
  if (!canvas) {
    return;
  }
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  diagnosticClientSignature = null;
  diagnosticSignatureHasStroke = false;
  updateDiagnosticSignatureStatus();
  renderPrintableDiagnosticFindings();
  scheduleModuleDraftSave();
}

function saveDiagnosticSignature() {
  const canvas = diagnosticSignaturePad;
  if (!canvas) {
    return;
  }
  if (isDiagnosticLocked()) {
    return;
  }
  if (!diagnosticSignatureHasStroke) {
    alert('Agrega una firma antes de guardarla.');
    return;
  }

  diagnosticClientSignature = canvas.toDataURL('image/png');
  updateDiagnosticSignatureStatus();
  syncDiagnosticLockUI();
  renderDiagnosticPartsGrid();
  renderPrintableDiagnosticFindings();
  scheduleModuleDraftSave();
}

function updateDiagnosticSignatureStatus() {
  const status = document.getElementById('diagnosticSignatureStatus');
  if (!status) {
    return;
  }

  if (diagnosticClientSignature) {
    status.textContent = 'Firma guardada - edición bloqueada';
    status.classList.add('is-signed');
  } else {
    status.textContent = 'Sin firma guardada';
    status.classList.remove('is-signed');
  }
}

function buildGuidedEmptyState(title, message, actionLabel = '', actionAttributes = '') {
  const actionHtml = actionLabel
    ? `<button type="button" class="btn-secondary dashboard-empty-action" ${actionAttributes}>${actionLabel}</button>`
    : '';

  return `
    <div class="ui-empty-state dashboard-empty-state">
      <strong>${title}</strong>
      <p>${message}</p>
      ${actionHtml}
    </div>
  `;
}

function syncDiagnosticLockUI() {
  const clearButton = document.querySelector('.diagnostic-signature-actions button.btn-secondary');
  const saveButton = document.querySelector('.diagnostic-signature-actions button.btn-primary');
  const canvas = document.getElementById('diagnosticSignatureCanvas');
  const locked = isDiagnosticLocked();

  if (clearButton) {
    clearButton.disabled = locked;
  }
  if (saveButton) {
    saveButton.disabled = locked;
  }
  if (canvas) {
    canvas.classList.toggle('is-locked', locked);
  }
}

function closeDiagnosticPartModal() {
  currentDiagnosticPartId = null;
  closeAccessibleModal('diagnosticPartModal');
}

function saveDiagnosticPart() {
  if (!currentDiagnosticPartId || !diagnosticoPartes[currentDiagnosticPartId]) {
    return;
  }

  diagnosticoPartes[currentDiagnosticPartId] = {
    ...diagnosticoPartes[currentDiagnosticPartId],
    estado: document.getElementById('diagnosticModalEstado').value,
    hallazgo: document.getElementById('diagnosticModalHallazgo').value.trim(),
    recomendacion: document.getElementById('diagnosticModalRecomendacion').value.trim(),
    visibleCliente: document.getElementById('diagnosticModalVisibleCliente').checked
  };

  renderDiagnosticPartsGrid();
  renderDiagnosticSummaryContent();
  renderDiagnosticModuleContext();
  scheduleModuleDraftSave();
  closeDiagnosticPartModal();
}

function renderDiagnosticSummaryContent() {
  const container = document.getElementById('diagnosticSummaryContent');
  const signalContainer = document.getElementById('diagnosticVehicleSignal');
  if (!container) {
    return;
  }

  const diagnosticoPayload = getDiagnosticoPayload();
  const diagnosticoInicial = document.getElementById('diagnosticoInicial')?.value.trim() || '';
  const summary = getVehicleDiagnosticSummary();
  if (signalContainer) {
    signalContainer.innerHTML = `
      <div class="vehicle-signal-card ${summary.meta.className}">
        <div class="vehicle-signal-light"></div>
        <div class="vehicle-signal-content">
          <p class="vehicle-signal-kicker">Semaforo general del vehiculo</p>
          <h4>${summary.meta.label}</h4>
          <p>${summary.descripcion}</p>
          <div class="vehicle-signal-stats">
            <span>OK: ${summary.counts.ok}</span>
            <span>Atencion: ${summary.counts.atencion}</span>
            <span>Critico: ${summary.counts.critico}</span>
            <span>Pendiente: ${summary.counts.pendiente}</span>
          </div>
        </div>
      </div>
    `;
  }

  const visibles = Object.values(diagnosticoPartes).filter(part => part.visibleCliente && (part.hallazgo || part.recomendacion || part.estado !== 'pendiente'));
  if (visibles.length === 0 && !diagnosticoInicial && !diagnosticoPayload.sintomasReportados && !diagnosticoPayload.causaProbable && !diagnosticoPayload.pruebasRealizadas) {
    container.innerHTML = '<div class="diagnostic-summary-empty">No hay hallazgos visibles para mostrar al cliente todavia.</div>';
    return;
  }

  const diagnosticoContextHtml = `
    <article class="diagnostic-summary-card diagnostic-summary-card-featured">
      <div class="diagnostic-card-header">
        <h4>Resumen técnico general</h4>
        <span class="diagnostic-badge ${summary.meta.className}">${getDiagnosticoPriorityLabel(diagnosticoPayload.prioridad)}</span>
      </div>
      <p><strong>Sintomas reportados:</strong> ${diagnosticoPayload.sintomasReportados || 'Sin sintomas reportados.'}</p>
      <p><strong>Pruebas realizadas:</strong> ${diagnosticoPayload.pruebasRealizadas || 'Sin pruebas documentadas.'}</p>
      <p><strong>Causa probable:</strong> ${diagnosticoPayload.causaProbable || 'Sin causa probable registrada.'}</p>
    </article>
  `;

  const diagnosticoGeneralHtml = diagnosticoInicial ? `
    <article class="diagnostic-summary-card diagnostic-summary-card-featured">
      <div class="diagnostic-card-header">
        <h4>Diagnostico inicial general</h4>
        <span class="diagnostic-badge status-pendiente">Resumen</span>
      </div>
      <p>${diagnosticoInicial}</p>
    </article>
  ` : '';

  container.innerHTML = diagnosticoContextHtml + diagnosticoGeneralHtml + visibles.map(part => {
    const meta = getDiagnosticStateMeta(part.estado);
    const fotosHtml = (part.fotos || []).length ? `
      <div class="diagnostic-summary-photos">
        ${(part.fotos || []).map(photo => `<img src="${photo}" alt="Foto de ${part.nombre}">`).join('')}
      </div>
    ` : '';
    return `
      <article class="diagnostic-summary-card">
        <div class="diagnostic-card-header">
          <h4>${part.nombre}</h4>
          <span class="diagnostic-badge ${meta.className}">${meta.label}</span>
        </div>
        <p><strong>Hallazgo:</strong> ${part.hallazgo || 'Sin observaciones.'}</p>
        <p><strong>Recomendacion:</strong> ${part.recomendacion || 'Sin recomendacion.'}</p>
        ${fotosHtml}
      </article>
    `;
  }).join('');
}

function openDiagnosticSummaryModal() {
  renderDiagnosticSummaryContent();
  loadDiagnosticSignatureToCanvas();
  syncDiagnosticLockUI();
  openAccessibleModal('diagnosticSummaryModal', '.diagnostic-signature-actions .btn-primary');
}

function closeDiagnosticSummaryModal() {
  closeAccessibleModal('diagnosticSummaryModal');
}

function handleDiagnosticModalBackdrop(event, modalId) {
  if (event.target.id !== modalId) {
    return;
  }

  if (modalId === 'diagnosticPartModal') {
    closeDiagnosticPartModal();
  } else if (modalId === 'diagnosticSummaryModal') {
    closeDiagnosticSummaryModal();
  }
}

function handleDiagnosticEscape(event) {
  if (event.key !== 'Escape') {
    return;
  }

  if (!document.getElementById('clienteFormModal')?.classList.contains('hidden') || !document.getElementById('vehiculoFormModal')?.classList.contains('hidden')) {
    cancelarEdicionClienteWorkspace();
    return;
  }

  if (!document.getElementById('diagnosticPartModal').classList.contains('hidden')) {
    closeDiagnosticPartModal();
  }
  if (!document.getElementById('diagnosticSummaryModal').classList.contains('hidden')) {
    closeDiagnosticSummaryModal();
  }
}

function renderPrintableDiagnosticFindings() {
  const container = document.getElementById('pDiagnosticoDetalle');
  const semaforo = document.getElementById('pSemaforoVehiculo');
  const firmaBlock = document.getElementById('pFirmaClienteDiagnosticoBlock');
  const firmaImage = document.getElementById('pFirmaClienteDiagnostico');
  if (!container) {
    return;
  }

  const diagnosticoPayload = getDiagnosticoPayload();

  const summary = getVehicleDiagnosticSummary();
  if (semaforo) {
    semaforo.innerHTML = `
      <div class="vehicle-signal-card printable-signal printable-signal-compact ${summary.meta.className}">
        <div class="vehicle-signal-light"></div>
        <div class="vehicle-signal-content">
          <p class="vehicle-signal-kicker">Estado general del vehiculo</p>
          <h4>${summary.meta.label}</h4>
          <p>${summary.descripcion}</p>
        </div>
      </div>
    `;
  }

  const visibles = Object.values(diagnosticoPartes).filter(part => part.visibleCliente && (part.hallazgo || part.recomendacion || part.estado !== 'pendiente'));
  if (visibles.length === 0) {
    container.innerHTML = '<p class="text-tip">No se registraron hallazgos adicionales por sistema.</p>';
  } else {
    container.innerHTML = visibles.map(part => {
      const meta = getDiagnosticStateMeta(part.estado);
      const hallazgo = part.hallazgo || 'Sin observaciones.';
      const recomendacion = part.recomendacion || 'Sin recomendacion.';
      const fotosHtml = (part.fotos || []).length ? `
        <div class="diagnostic-print-photos">
          ${(part.fotos || []).map(photo => `<img src="${photo}" alt="Foto de ${part.nombre}">`).join('')}
        </div>
      ` : '';
      return `
        <article class="diagnostic-print-card diagnostic-print-card-compact ${meta.className}">
          <div class="diagnostic-print-card-header">
            <strong>${part.nombre}</strong>
            <span class="diagnostic-print-status">${meta.label}</span>
          </div>
          <div class="diagnostic-print-card-body">
            <div class="diagnostic-print-copy">
              <span class="diagnostic-print-label">Hallazgo</span>
              <p>${hallazgo}</p>
            </div>
            <div class="diagnostic-print-copy">
              <span class="diagnostic-print-label">Acción</span>
              <p>${recomendacion}</p>
            </div>
          </div>
          ${fotosHtml}
        </article>
      `;
    }).join('');
  }

  document.getElementById('pSintomasReportados').textContent = diagnosticoPayload.sintomasReportados || 'N/D';
  document.getElementById('pPruebasRealizadas').textContent = diagnosticoPayload.pruebasRealizadas || 'N/D';
  document.getElementById('pCausaProbable').textContent = diagnosticoPayload.causaProbable || 'N/D';
  document.getElementById('pPrioridadDiagnostico').textContent = getDiagnosticoPriorityLabel(diagnosticoPayload.prioridad);

  if (firmaBlock && firmaImage) {
    if (diagnosticClientSignature) {
      firmaImage.src = diagnosticClientSignature;
      firmaBlock.classList.remove('hidden');
    } else {
      firmaImage.removeAttribute('src');
      firmaBlock.classList.add('hidden');
    }
  }
}

function generarHTMLReporteDiagnostico() {
  const summary = getVehicleDiagnosticSummary();
  const diagnosticoPayload = getDiagnosticoPayload();
  const totalPartes = Object.keys(diagnosticoPartes).length;
  const visibles = Object.values(diagnosticoPartes).filter(part => part.visibleCliente && (part.hallazgo || part.recomendacion || part.estado !== 'pendiente'));
  const reviewedParts = Object.values(diagnosticoPartes).filter(part => part.estado && part.estado !== 'pendiente').length;
  const statusCounts = Object.values(diagnosticoPartes).reduce((accumulator, part) => {
    const estado = part.estado || 'pendiente';
    accumulator[estado] = (accumulator[estado] || 0) + 1;
    return accumulator;
  }, { pendiente: 0, ok: 0, atencion: 0, critico: 0 });
  const clienteNombre = document.getElementById('tipoIdentificacion').value === 'rnc' && document.getElementById('nombreEmpresa').value.trim()
    ? document.getElementById('nombreEmpresa').value.trim()
    : document.getElementById('nombreCliente').value.trim();
  const fecha = document.getElementById('fecha').value;
  const diagnosticoInicial = document.getElementById('diagnosticoInicial').value.trim() || 'Sin diagnostico inicial registrado.';
  const printLogoSrc = getConfiguredPrintLogo();
  const logoHtml = printLogoSrc ? `<img class="report-cover-logo" src="${printLogoSrc}" alt="Logo">` : '';

  const hallazgosHtml = visibles.length ? visibles.map(part => {
    const meta = getDiagnosticStateMeta(part.estado);
    const fotos = (part.fotos || []).map(photo => `<img src="${photo}" alt="Foto de ${part.nombre}">`).join('');
    return `
      <section class="report-card report-card-finding">
        <div class="report-card-header">
          <h3>${part.nombre}</h3>
          <span class="report-badge ${meta.className}">${meta.label}</span>
        </div>
        <div class="report-copy-grid">
          <div>
            <span class="report-mini-label">Hallazgo</span>
            <p>${part.hallazgo || 'Sin observaciones.'}</p>
          </div>
          <div>
            <span class="report-mini-label">Acción recomendada</span>
            <p>${part.recomendacion || 'Sin recomendacion.'}</p>
          </div>
        </div>
        ${fotos ? `<div class="report-photos">${fotos}</div>` : ''}
      </section>
    `;
  }).join('') : '<p>No hay hallazgos visibles registrados por sistema.</p>';

  const firmaHtml = diagnosticClientSignature ? `
    <section class="report-signature-section">
      <h3>Firma del Cliente</h3>
      <img class="report-signature-image" src="${diagnosticClientSignature}" alt="Firma del cliente">
      <p>El cliente confirma que visualizo los hallazgos del diagnostico.</p>
    </section>
  ` : '';

  return `
    <html>
      <head>
        <title>Reporte de Diagnostico</title>
        <style>
          body { font-family: Arial, sans-serif; color: #1e293b; margin: 0; background: #eef3f9; }
          .page { padding: 24px 28px 28px; }
          .report-shell { background: #ffffff; border: 1px solid #dbe4ef; border-radius: 22px; padding: 22px; box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08); }
          .report-header { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 16px; align-items: center; border-bottom: 2px solid #dbe4ef; padding-bottom: 14px; margin-bottom: 16px; }
          .report-cover-logo { max-height: 72px; max-width: 110px; }
          .report-header-copy h1 { margin: 0; font-size: 1.9em; color: #0f172a; }
          .report-header-copy h2 { margin: 4px 0 0; font-size: 0.98em; color: #475569; font-weight: normal; }
          .report-header-meta { min-width: 220px; display: grid; gap: 6px; font-size: 0.9em; }
          .report-kicker { text-transform: uppercase; letter-spacing: 1px; font-size: 0.76em; color: #ea580c; font-weight: 700; }
          .report-summary-grid { display: grid; grid-template-columns: minmax(260px, 0.95fr) minmax(0, 1.4fr); gap: 14px; margin-bottom: 14px; }
          .report-card, .report-signal, .report-signature-section { background: #fff; border: 1px solid #dbe4ef; border-radius: 16px; padding: 16px; }
          .report-card { margin-bottom: 14px; }
          .report-card-header { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 12px; }
          .report-card-header h3 { margin: 0; font-size: 1em; }
          .report-badge { padding: 6px 12px; border-radius: 999px; font-size: 0.78em; font-weight: 700; text-transform: uppercase; }
          .status-ok { background: #dcfce7; color: #166534; }
          .status-atencion { background: #fef3c7; color: #92400e; }
          .status-critico { background: #fee2e2; color: #991b1b; }
          .status-pendiente { background: #e2e8f0; color: #475569; }
          .report-signal { display: flex; gap: 14px; align-items: center; margin-bottom: 0; }
          .report-signal-light { width: 62px; height: 62px; border-radius: 999px; flex-shrink: 0; }
          .report-signal.status-ok .report-signal-light { background: radial-gradient(circle at 30% 30%, #86efac, #16a34a); }
          .report-signal.status-atencion .report-signal-light { background: radial-gradient(circle at 30% 30%, #fde68a, #d97706); }
          .report-signal.status-critico .report-signal-light { background: radial-gradient(circle at 30% 30%, #fca5a5, #dc2626); }
          .report-signal.status-pendiente .report-signal-light { background: radial-gradient(circle at 30% 30%, #e2e8f0, #64748b); }
          .report-signal h3 { margin: 0 0 4px; }
          .report-signal p { margin: 0; }
          .report-stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; margin-top: 12px; }
          .report-stat { border: 1px solid #dbe4ef; border-radius: 12px; padding: 10px 12px; background: #f8fbff; }
          .report-stat strong { display: block; font-size: 1.2em; color: #0f172a; }
          .report-stat span { font-size: 0.78em; color: #475569; text-transform: uppercase; letter-spacing: 0.4px; }
          .report-meta-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
          .report-mini-label { display: inline-block; margin-bottom: 4px; font-size: 0.72em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: #ea580c; }
          .report-copy-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
          .report-copy-grid p, .report-card p { margin: 0; line-height: 1.38; }
          .report-findings-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .report-card-finding { break-inside: avoid; margin-bottom: 0; }
          .report-photos { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-top: 12px; }
          .report-photos img { width: 100%; height: 110px; object-fit: cover; border-radius: 10px; border: 1px solid #dbe4ef; }
          .report-signature-image { display: block; max-width: 260px; max-height: 100px; margin: 12px 0 6px; border-bottom: 2px solid #cbd5e1; }
          .report-findings-title { margin: 0 0 12px; font-size: 1.1em; color: #0f172a; }
          @media print {
            @page { size: letter portrait; margin: 8mm; }
            body { background: #ffffff; }
            .page { padding: 0; }
            .report-shell { border: none; border-radius: 0; padding: 0; box-shadow: none; }
          }
        </style>
      </head>
      <body>
        <section class="page">
          <div class="report-shell">
            <header class="report-header">
              ${logoHtml || '<div></div>'}
              <div class="report-header-copy">
                <p class="report-kicker">CarsystemRD</p>
                <h1>Reporte de Diagnostico</h1>
                <h2>Resumen tecnico y visual para revision con el cliente</h2>
              </div>
              <div class="report-header-meta">
                <div><strong>Fecha:</strong> ${fecha || 'N/D'}</div>
                <div><strong>Cliente:</strong> ${clienteNombre || 'N/D'}</div>
                <div><strong>Vehiculo:</strong> ${document.getElementById('vehiculoModelo').value.trim() || 'N/D'}</div>
                <div><strong>Placa:</strong> ${document.getElementById('vehiculoPlaca').value.trim() || 'N/D'}</div>
                <div><strong>Chasis:</strong> ${document.getElementById('vehiculoChasis').value.trim() || 'N/D'}</div>
                <div><strong>Emitido por:</strong> ${configuracionGeneral.emitidoPor}</div>
              </div>
            </header>

            <section class="report-summary-grid">
              <div>
                <div class="report-signal ${summary.meta.className}">
                  <div class="report-signal-light"></div>
                  <div>
                    <p class="report-kicker">Semaforo general</p>
                    <h3>${summary.meta.label}</h3>
                    <p>${summary.descripcion}</p>
                  </div>
                </div>
                <div class="report-stats">
                  <div class="report-stat"><strong>${statusCounts.critico}</strong><span>Critico</span></div>
                  <div class="report-stat"><strong>${statusCounts.atencion}</strong><span>Atencion</span></div>
                  <div class="report-stat"><strong>${statusCounts.ok}</strong><span>OK</span></div>
                  <div class="report-stat"><strong>${reviewedParts}/${totalPartes}</strong><span>Revisados</span></div>
                </div>
              </div>

              <div class="report-card">
                <div class="report-copy-grid">
                  <div>
                    <span class="report-mini-label">Diagnostico inicial</span>
                    <p>${diagnosticoInicial}</p>
                  </div>
                  <div>
                    <span class="report-mini-label">Prioridad</span>
                    <p>${getDiagnosticoPriorityLabel(diagnosticoPayload.prioridad)}</p>
                  </div>
                </div>
                <div class="report-meta-grid" style="margin-top: 12px;">
                  <div>
                    <span class="report-mini-label">Sintomas reportados</span>
                    <p>${diagnosticoPayload.sintomasReportados || 'N/D'}</p>
                  </div>
                  <div>
                    <span class="report-mini-label">Pruebas realizadas</span>
                    <p>${diagnosticoPayload.pruebasRealizadas || 'N/D'}</p>
                  </div>
                  <div>
                    <span class="report-mini-label">Causa probable</span>
                    <p>${diagnosticoPayload.causaProbable || 'N/D'}</p>
                  </div>
                  <div>
                    <span class="report-mini-label">Hallazgos visibles</span>
                    <p>${visibles.length} sistema(s) compartido(s) con el cliente.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="report-findings-title">Hallazgos por sistema</h3>
              <div class="report-findings-grid">
                ${hallazgosHtml}
              </div>
            </section>
            ${firmaHtml}
          </div>
        </section>
      </body>
    </html>
  `;
}

function imprimirDiagnosticoPDF() {
  notifyMissingPrintLogo('El reporte de diagnostico');

  const win = window.open('', '', 'width=1100,height=900');
  if (!win) {
    alert('No se pudo abrir la ventana de impresión del diagnóstico.');
    return;
  }

  win.document.write(generarHTMLReporteDiagnostico());
  win.document.close();
  printWindowWhenReady(win);
}

function setupValidationListeners() {
  const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
  inputs.forEach(input => {
    input.addEventListener('input', () => validateField(input));
    input.addEventListener('change', () => validateField(input));
    input.addEventListener('blur', () => validateField(input));
  });
}

function validateField(field) {
  if (field.closest('.hidden')) {
    field.classList.remove('invalid-field');
    if (field.nextElementSibling && field.nextElementSibling.classList.contains('error-message')) {
      field.nextElementSibling.style.display = 'none';
    }
    return true;
  }

  if (field.checkValidity()) {
    field.classList.remove('invalid-field');
    if (field.nextElementSibling && field.nextElementSibling.classList.contains('error-message')) {
      field.nextElementSibling.style.display = 'none';
    }
  } else {
    field.classList.add('invalid-field');
    if (field.nextElementSibling && field.nextElementSibling.classList.contains('error-message')) {
      field.nextElementSibling.style.display = 'block';
    }
  }
}

function validateAllFields(tabId = null) {
  let allValid = true;
  let selector = 'input[required], select[required], textarea[required]';
  if (tabId) {
    selector = `#${tabId} ${selector}`;
  }

  const inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    if (input.closest('.hidden')) {
      validateField(input);
      return;
    }

    if (!input.checkValidity()) {
      validateField(input);
      allValid = false;
    } else {
      validateField(input);
    }
  });
  return allValid;
}

function validateSections(sectionIds) {
  return sectionIds.every(sectionId => validateAllFields(sectionId));
}

function validateFieldsByIds(fieldIds) {
  let allValid = true;

  fieldIds.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (!field) {
      return;
    }

    if (field.closest('.hidden')) {
      validateField(field);
      return;
    }

    validateField(field);
    if (!field.checkValidity()) {
      allValid = false;
    }
  });

  return allValid;
}

function hasValidFieldValues(fieldIds) {
  return fieldIds.every(fieldId => {
    const field = document.getElementById(fieldId);
    if (!field) {
      return false;
    }

    if (field.closest('.hidden')) {
      return true;
    }

    return field.checkValidity();
  });
}

function hasValidRequiredFields(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    return false;
  }

  const requiredFields = Array.from(section.querySelectorAll('input[required], select[required], textarea[required]'));
  if (!requiredFields.length) {
    return false;
  }

  return requiredFields.every(field => field.closest('.hidden') || field.checkValidity());
}

function isClienteModuleComplete() {
  return Boolean(currentLoadedClientId) && hasValidFieldValues(['identificacion', 'nombreCliente']);
}

function isVehiculoModuleComplete() {
  return Boolean(currentLoadedClientId && currentLoadedVehicleId) && hasValidFieldValues(['vehiculoModelo', 'vehiculoAnio', 'vehiculoCombustible', 'vehiculoChasis', 'vehiculoPlaca']);
}

function isOrdenModuleComplete() {
  const motivoEntrada = document.getElementById('motivoEntrada')?.value.trim();
  const millaje = document.getElementById('millajeEntrada')?.value.trim();
  const checklistSelections = getEntryChecklistSelectionsCount();
  const observaciones = document.getElementById('observacionesEntrada')?.value.trim();
  const lucesSeleccionadas = document.querySelectorAll('.luzTablero:checked').length;
  return Boolean(millaje || checklistSelections || observaciones || lucesSeleccionadas || motivoEntrada || entryDamageMarks.length || entryClientSignature);
}

function isDiagnosticoModuleComplete() {
  if (!isEntryDataReady()) {
    return false;
  }

  const sintomas = document.getElementById('sintomasReportados')?.value.trim();
  const pruebas = document.getElementById('pruebasRealizadas')?.value.trim();
  const causa = document.getElementById('causaProbable')?.value.trim();
  const diagnosticoInicial = document.getElementById('diagnosticoInicial')?.value.trim();
  const trabajoValido = hasValidRequiredFields('cotStepDiagnostico');
  const hayHallazgos = Object.values(diagnosticoPartes || {}).some(part => part.estado !== 'pendiente' || part.hallazgo || part.recomendacion || (part.fotos && part.fotos.length));
  return Boolean(trabajoValido && (diagnosticoInicial || sintomas || pruebas || causa || hayHallazgos));
}

function isServicioModuleComplete() {
  const tienePiezasValidas = piezasActivas.some(index => {
    const nombre = document.getElementById(`piezaNombre${index}`)?.value.trim();
    const cantidad = parseFloat(document.getElementById(`piezaCantidad${index}`)?.value);
    const costo = parseFloat(document.getElementById(`piezaCosto${index}`)?.value);
    const margen = parseFloat(document.getElementById(`piezaMargen${index}`)?.value);
    return Boolean(nombre && !Number.isNaN(cantidad) && cantidad > 0 && !Number.isNaN(costo) && costo >= 0 && !Number.isNaN(margen) && margen >= 1);
  });
  const total = parseFloat(document.getElementById('pTotal')?.textContent || '0');
  return Boolean(isDiagnosticDataReady() && hasValidRequiredFields('cotStepServicio') && (tienePiezasValidas || total > 0));
}

function isSeguimientoModuleComplete() {
  const estatus = normalizeSeguimientoStatus(document.getElementById('estatusTrabajo')?.value);
  const trabajoProceso = document.getElementById('trabajoProceso')?.value.trim();
  const trabajoRealizado = document.getElementById('trabajoRealizado')?.value.trim();
  const entregaEstimada = document.getElementById('fechaEntregaEstimada')?.value;
  const entregaReal = document.getElementById('fechaEntregaReal')?.value;

  if (!((estatus && estatus !== 'en_espera') || trabajoProceso || trabajoRealizado || entregaEstimada || entregaReal)) {
    return false;
  }

  if ((estatus === 'listo_para_entrega' || estatus === 'entregado') && !isSeguimientoQualityApproved()) {
    return false;
  }

  return true;
}

function isSalidaModuleComplete() {
  const salida = getSalidaPayload();
  return Boolean(
    salida.fechaSalida
    && salida.entregadoPorTaller
    && salida.recibidoPorCliente
    && salida.checklistSalida.length
    && salida.firmaClienteSalida
  );
}

function isModuleComplete(moduleId) {
  switch (moduleId) {
    case 'cotStepCliente':
      return isClienteModuleComplete();
    case 'cotStepOrden':
      return isOrdenModuleComplete();
    case 'cotStepDiagnostico':
      return isDiagnosticoModuleComplete();
    case 'cotStepServicio':
      return isServicioModuleComplete();
    case 'cotStepSeguimiento':
      return isSeguimientoModuleComplete();
    case 'cotStepSalida':
      return isSalidaModuleComplete();
    default:
      return false;
  }
}

function updateModuleIndicator(moduleId, isComplete) {
  const label = isComplete ? 'Completo' : 'Pendiente';
  document.querySelectorAll(`[data-module-status-badge="${moduleId}"], [data-module-status-pill="${moduleId}"]`).forEach(element => {
    element.textContent = label;
    element.classList.toggle('is-complete', isComplete);
    element.classList.toggle('is-pending', !isComplete);
  });
}

function updateModuleCompletionIndicators() {
  MODULE_TAB_IDS.forEach(moduleId => {
    updateModuleIndicator(moduleId, isModuleComplete(moduleId));
  });
  updateDashboardModuleSummary();
  renderDiagnosticModuleContext();
  renderServicioContext();
  renderSalidaContext();
  renderActiveWorkflowHeader();
}

function getModuleDisplayName(moduleId) {
  switch (moduleId) {
    case 'cotStepCliente':
      return 'Clientes';
    case 'cotStepOrden':
      return 'Entrada';
    case 'cotStepDiagnostico':
      return 'Diagnóstico';
    case 'cotStepServicio':
      return 'Cotización';
    case 'cotStepSeguimiento':
      return 'Seguimiento';
    case 'cotStepSalida':
      return 'Salida';
    default:
      return moduleId;
  }
}

function getWorkflowProgressMeta(orden = null, cotizacion = null) {
  const currentCotizacion = cotizacion || (orden?.id ? getLatestCotizacionForOrden(orden.id) : null);
  const stepStates = [
    Boolean(orden?.cliente && orden?.vehiculo),
    Boolean(orden?.id && orden?.ordenEntrada),
    diagnosticoTieneContenidoGuardado(orden?.diagnostico || null),
    Boolean(currentCotizacion?.id),
    Boolean(currentCotizacion?.seguimiento && (
      currentCotizacion.seguimiento.estatusTrabajo
      || currentCotizacion.seguimiento.trabajoProceso
      || currentCotizacion.seguimiento.trabajoRealizado
    )),
    Boolean(currentCotizacion && isSalidaRecordComplete(currentCotizacion.salida || {}))
  ];
  const completed = stepStates.filter(Boolean).length;
  const total = stepStates.length;
  const percentage = Math.round((completed / total) * 100);

  return { completed, total, percentage };
}

function getCurrentWorkflowProgressMeta() {
  const completed = MODULE_TAB_IDS.filter(moduleId => isModuleComplete(moduleId)).length;
  const total = MODULE_TAB_IDS.length;
  const percentage = Math.round((completed / total) * 100);

  return { completed, total, percentage };
}

function updateDashboardModuleSummary() {
  const progressBar = document.getElementById('dashboardModuleProgressBar');
  const progressText = document.getElementById('dashboardModuleProgressText');
  const statusList = document.getElementById('dashboardModuleStatusList');
  if (!progressBar || !progressText || !statusList) {
    return;
  }

  const statuses = MODULE_TAB_IDS.map(moduleId => ({
    id: moduleId,
    name: getModuleDisplayName(moduleId),
    complete: isModuleComplete(moduleId)
  }));
  const completed = statuses.filter(status => status.complete).length;
  const percentage = Math.round((completed / MODULE_TAB_IDS.length) * 100);

  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${completed} de ${MODULE_TAB_IDS.length} módulos completos`;
  statusList.innerHTML = statuses.map(status => `
    <span class="dashboard-module-chip ${status.complete ? 'is-complete' : 'is-pending'}">${status.name}: ${status.complete ? 'Completo' : 'Pendiente'}</span>
  `).join('');
}

function updateDashboardOverviewStats() {
  const snapshots = ordenesEntradaGuardadas.map(orden => ({
    orden,
    snapshot: getOrdenWorkflowSnapshot(orden)
  }));
  const activeVisits = snapshots.filter(item => item.snapshot.stage !== 'cerrado').length;
  const readyBilling = snapshots.filter(item => item.snapshot.stage === 'cobro').length;
  const readyDelivery = cotizacionesGuardadas.filter(cotizacion => {
    const operationalStatus = normalizeSeguimientoStatus(cotizacion?.seguimiento?.estatusTrabajo || 'en_espera');
    return operationalStatus === 'listo_para_entrega' || operationalStatus === 'entregado';
  }).length;
  const pendingCollectionTotal = facturasGuardadas.reduce((sum, factura) => sum + Number(normalizeFacturaRecord(factura).saldoPendiente || 0), 0);
  const alertsCount = buildAutomaticAlerts().length;

  const assignments = [
    ['dashboardVisitsCount', String(activeVisits)],
    ['dashboardMobileVisitsCount', String(activeVisits)],
    ['sidebarActiveVisitsCount', String(activeVisits)],
    ['headerActiveVisitsCount', String(activeVisits)],
    ['dashboardReadyBillingCount', String(readyBilling)],
    ['dashboardMobileReadyBillingCount', String(readyBilling)],
    ['sidebarReadyBillingCount', String(readyBilling)],
    ['dashboardReadyDeliveryCount', String(readyDelivery)],
    ['dashboardMobileReadyDeliveryCount', String(readyDelivery)],
    ['dashboardPendingCollectionTotal', `RD$ ${pendingCollectionTotal.toFixed(2)}`],
    ['headerPendingCollectionTotal', `RD$ ${pendingCollectionTotal.toFixed(2)}`],
    ['headerAlertsCount', String(alertsCount)],
    ['dashboardMobileAlertsCount', String(alertsCount)]
  ];

  assignments.forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  });

  const alertsBadge = document.getElementById('dashboardAlertsCountBadge');
  if (alertsBadge) {
    alertsBadge.className = `dashboard-module-chip ${alertsCount ? 'is-pending' : 'is-complete'}`;
    alertsBadge.textContent = alertsCount ? `${alertsCount} activas` : 'Sin alertas';
  }
}

function buildModuleDraftPayload() {
  const diagnosticoPayload = getDiagnosticoPayload();
  return {
    currentLoadedClientId,
    currentLoadedVehicleId,
    currentLoadedEntryOrderId,
    currentLoadedCotizacionId,
    cliente: {
      fecha: document.getElementById('fecha')?.value || '',
      tipoIdentificacion: document.getElementById('tipoIdentificacion')?.value || 'cedula',
      identificacion: document.getElementById('identificacion')?.value.trim() || '',
      nombreCliente: document.getElementById('nombreCliente')?.value.trim() || '',
      nombreEmpresa: document.getElementById('nombreEmpresa')?.value.trim() || '',
      telefono: document.getElementById('telefonoCliente')?.value.trim() || '',
      telefonoOficina: document.getElementById('telefonoOficinaCliente')?.value.trim() || '',
      whatsapp: document.getElementById('whatsappCliente')?.value.trim() || '',
      email: document.getElementById('emailCliente')?.value.trim() || ''
    },
    vehiculo: {
      marca: document.getElementById('vehiculoMarca')?.value.trim() || '',
      modelo: document.getElementById('vehiculoModelo')?.value.trim() || '',
      anio: document.getElementById('vehiculoAnio')?.value || '',
      combustible: document.getElementById('vehiculoCombustible')?.value || 'Gasolina',
      chasis: document.getElementById('vehiculoChasis')?.value.trim() || '',
      placa: document.getElementById('vehiculoPlaca')?.value.trim() || '',
      color: document.getElementById('vehiculoColor')?.value.trim() || '',
      selectedVehicleId: document.getElementById('cargarVehiculoClienteSelect')?.value || ''
    },
    clienteSeleccionado: document.getElementById('cargarClienteSelect')?.value || '',
    ordenEntrada: getOrdenEntradaPayload(),
    diagnostico: diagnosticoPayload,
    servicio: {
      servicioCatalogo: document.getElementById('selectServicioCatalogoNuevaCotizacion')?.value || '',
      horas: document.getElementById('horas')?.value || '2',
      dificultad: document.getElementById('dificultad')?.value || '1.2',
      experiencia: document.getElementById('experiencia')?.value || '1.0',
      domicilio: getServicioDomicilioPayload()
    },
    piezas: {
      piezaCatalogo: document.getElementById('selectPiezaCatalogoNuevaCotizacion')?.value || '',
      estadoCotizacion: getCurrentCotizacionStatusUI(),
      approval: currentCotizacionApprovalConfig,
      items: piezasActivas.map(index => ({
        index,
        nombre: document.getElementById(`piezaNombre${index}`)?.value.trim() || '',
        cantidad: document.getElementById(`piezaCantidad${index}`)?.value || '1',
        costoUnitario: document.getElementById(`piezaCosto${index}`)?.value || '0',
        margen: document.getElementById(`piezaMargen${index}`)?.value || '1.3'
      }))
    },
    seguimiento: {
      estatusTrabajo: normalizeSeguimientoStatus(document.getElementById('estatusTrabajo')?.value || 'en_espera'),
      trabajoProceso: document.getElementById('trabajoProceso')?.value || '',
      trabajoRealizado: document.getElementById('trabajoRealizado')?.value || '',
      tecnicoResponsable: document.getElementById('tecnicoResponsable')?.value || '',
      fechaEntregaEstimada: document.getElementById('fechaEntregaEstimada')?.value || '',
      fechaEntregaReal: document.getElementById('fechaEntregaReal')?.value || '',
      controlCalidad: getSeguimientoQualityPayload()
    },
    salida: getSalidaPayload(),
    savedAt: new Date().toISOString()
  };
}

function persistModuleDraft() {
  try {
    CarsystemStorage.writeJson(LOCAL_STORAGE_MODULE_DRAFT_KEY, buildModuleDraftPayload());
  } catch (error) {
    if (error.name !== 'QuotaExceededError') {
      console.error('No se pudo guardar el borrador de módulos.', error);
    }
  }
}

function scheduleModuleDraftSave() {
  clearTimeout(moduleDraftSaveTimeout);
  moduleDraftSaveTimeout = setTimeout(() => {
    persistModuleDraft();
  }, 350);
}

function clearModuleDraft() {
  clearTimeout(moduleDraftSaveTimeout);
  CarsystemStorage.remove(LOCAL_STORAGE_MODULE_DRAFT_KEY);
  updateDraftRecoveryActions();
}

function loadModuleDraft() {
  const draft = CarsystemStorage.readJson(LOCAL_STORAGE_MODULE_DRAFT_KEY, null);
  if (!draft) {
    return;
  }

  try {
    currentLoadedClientId = draft.currentLoadedClientId || null;
    currentLoadedVehicleId = draft.currentLoadedVehicleId || null;
    currentLoadedEntryOrderId = draft.currentLoadedEntryOrderId || null;
    currentLoadedCotizacionId = draft.currentLoadedCotizacionId || null;

    if (draft.cliente) {
      document.getElementById('fecha').value = draft.cliente.fecha || document.getElementById('fecha').value;
      document.getElementById('tipoIdentificacion').value = draft.cliente.tipoIdentificacion || 'cedula';
      mostrarOcultarCampos();
      document.getElementById('identificacion').value = draft.cliente.identificacion || '';
      document.getElementById('nombreCliente').value = draft.cliente.nombreCliente || '';
      document.getElementById('nombreEmpresa').value = draft.cliente.nombreEmpresa || '';
      document.getElementById('telefonoCliente').value = draft.cliente.telefono || '';
      document.getElementById('telefonoOficinaCliente').value = draft.cliente.telefonoOficina || '';
      document.getElementById('whatsappCliente').value = draft.cliente.whatsapp || '';
      document.getElementById('emailCliente').value = draft.cliente.email || '';
      document.getElementById('cargarClienteSelect').value = draft.clienteSeleccionado || draft.cliente.identificacion || '';
    }

    if (currentLoadedClientId) {
      actualizarListaVehiculosClienteActual(currentLoadedClientId);
    }

    if (draft.vehiculo) {
      document.getElementById('vehiculoMarca').value = draft.vehiculo.marca || '';
      document.getElementById('vehiculoModelo').value = draft.vehiculo.modelo || '';
      document.getElementById('vehiculoAnio').value = draft.vehiculo.anio || '';
      document.getElementById('vehiculoCombustible').value = draft.vehiculo.combustible || 'Gasolina';
      document.getElementById('vehiculoChasis').value = draft.vehiculo.chasis || '';
      document.getElementById('vehiculoPlaca').value = draft.vehiculo.placa || '';
      document.getElementById('vehiculoColor').value = draft.vehiculo.color || '';
      document.getElementById('cargarVehiculoClienteSelect').value = draft.vehiculo.selectedVehicleId || draft.vehiculo.selectedChasis || '';
    }

    actualizarIndicadoresClienteVehiculo();

    if (draft.ordenEntrada) {
      loadOrdenEntradaState(draft.ordenEntrada);
    }

    if (draft.diagnostico) {
      loadDiagnosticoState(draft.diagnostico);
    }

    if (draft.servicio) {
      document.getElementById('selectServicioCatalogoNuevaCotizacion').value = draft.servicio.servicioCatalogo || '';
      normalizeServicioCotizacionState(draft.servicio);
    }

    if (draft.piezas) {
      document.getElementById('selectPiezaCatalogoNuevaCotizacion').value = draft.piezas.piezaCatalogo || '';
      currentCotizacionApprovalConfig = normalizeCotizacionApprovalConfig(draft.piezas.approval || {}, draft.piezas.items || [], draft.piezas.estadoCotizacion || 'pendiente');
      setCotizacionStatusUI(draft.piezas.estadoCotizacion || currentCotizacionApprovalConfig.tipoAprobacion || 'pendiente');
      piezasActivas = [];
      document.getElementById('piezasContainer').innerHTML = '';
      const items = Array.isArray(draft.piezas.items) && draft.piezas.items.length ? draft.piezas.items : [null];
      items.forEach(item => agregarPieza(item));
    } else {
      currentCotizacionApprovalConfig = getDefaultCotizacionApprovalConfig();
      setCotizacionStatusUI('pendiente');
    }

    if (draft.seguimiento) {
      setSeguimientoStatus(draft.seguimiento.estatusTrabajo || 'en_espera');
      document.getElementById('trabajoProceso').value = draft.seguimiento.trabajoProceso || '';
      document.getElementById('trabajoRealizado').value = draft.seguimiento.trabajoRealizado || '';
      document.getElementById('tecnicoResponsable').value = draft.seguimiento.tecnicoResponsable || '';
      document.getElementById('fechaEntregaEstimada').value = draft.seguimiento.fechaEntregaEstimada || '';
      document.getElementById('fechaEntregaReal').value = draft.seguimiento.fechaEntregaReal || '';
      loadSeguimientoQualityState(draft.seguimiento.controlCalidad || { fecha: getCurrentDateISO() });
    }

    if (draft.salida) {
      loadSalidaState(draft.salida);
    }

    renderOrdenEntradaContext();
    renderDiagnosticModuleContext();
    renderServicioContext();
    renderSalidaContext();
    syncEntryClientVehicleSelectors();
    updateModuleCompletionIndicators();
    updateDraftRecoveryActions();
  } catch (error) {
    console.error('No se pudo restaurar el borrador de módulos.', error);
    clearModuleDraft();
  }
}

function setupModuleStatusListeners() {
  if (moduleStatusListenersReady) {
    return;
  }

  const refreshIndicators = event => {
    if (event.target.closest('.module-tab-content') || event.target.closest('#diagnosticPartModal') || event.target.closest('#diagnosticSummaryModal')) {
      if (event.target.closest('.seguimiento-quality-card')) {
        updateSeguimientoQualityStatus();
      }
      updateModuleCompletionIndicators();
      scheduleModuleDraftSave();
    }
  };

  document.addEventListener('input', refreshIndicators);
  document.addEventListener('change', refreshIndicators);
  moduleStatusListenersReady = true;
}

function updateDashboard() {
  const clientesList = document.getElementById('clientesRecientesList');
  const cotizacionesPendientesList = document.getElementById('cotizacionesPendientesList');
  const cotizacionesAprobadasList = document.getElementById('cotizacionesAprobadasList');
  const facturasRecientesList = document.getElementById('facturasRecientesList');

  clientesList.innerHTML = '';
  cotizacionesPendientesList.innerHTML = '';
  cotizacionesAprobadasList.innerHTML = '';
  if (facturasRecientesList) {
    facturasRecientesList.innerHTML = '';
  }

  if (clientesGuardados.length === 0) {
    clientesList.innerHTML = `<li>${buildGuidedEmptyState('Sin clientes recientes', 'Crea un expediente nuevo para empezar a cargar clientes y vehículos en el taller.', 'Crear expediente', 'data-action="shell-open-tab" data-tab="cotStepCliente"')}</li>`;
  } else {
    const recentClients = clientesGuardados.slice().sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified)).slice(0, 5);
    recentClients.forEach(cliente => {
      const li = document.createElement('li');
      const displayNombre = cliente.tipo === 'rnc' && cliente.empresa ? cliente.empresa : cliente.nombre;
      li.innerHTML = `<span>${displayNombre}</span> <a href="#" data-action="clientes-cotizar-reciente" data-client-id="${getClientRecordId(cliente)}">Cotizar</a>`;
      clientesList.appendChild(li);
    });
  }

  const pendientes = cotizacionesGuardadas.filter(cot => {
    const status = getCotizacionCommercialStatus(cot);
    return status === 'pendiente' || status === 'ampliacion';
  }).slice().sort((a, b) => new Date(b.fecha) - new Date(a.fecha)).slice(0, 5);
  if (pendientes.length === 0) {
    cotizacionesPendientesList.innerHTML = `<li>${buildGuidedEmptyState('Sin cotizaciones pendientes', 'Cuando un diagnóstico quede listo para aprobación, aparecerá aquí con acceso directo.', 'Abrir diagnóstico', 'data-action="shell-open-tab" data-tab="cotStepDiagnostico"')}</li>`;
  } else {
    pendientes.forEach(cot => {
      const nombreCliente = cot.cliente.tipoIdentificacion === 'rnc' && cot.cliente.nombreEmpresa ? cot.cliente.nombreEmpresa : cot.cliente.nombreCliente;
      const li = document.createElement('li');
      li.innerHTML = `<span>${nombreCliente} (${cot.vehiculo.placa})</span> <a href="#" data-action="shell-abrir-cotizacion-edicion" data-cotizacion-id="${cot.id}">Ver</a>`;
      cotizacionesPendientesList.appendChild(li);
    });
  }

  const aprobadas = cotizacionesGuardadas.filter(cot => isCommercialStatusInvoiceable(getCotizacionCommercialStatus(cot))).slice().sort((a, b) => new Date(b.fecha) - new Date(a.fecha)).slice(0, 5);
  if (aprobadas.length === 0) {
    cotizacionesAprobadasList.innerHTML = `<li>${buildGuidedEmptyState('Sin aprobaciones recientes', 'Las cotizaciones aprobadas aparecerán aquí para ayudarte a pasar rápido a cobro o entrega.', 'Ir a cotización', 'data-action="shell-open-tab" data-tab="cotStepServicio"')}</li>`;
  } else {
    aprobadas.forEach(cot => {
      const nombreCliente = cot.cliente.tipoIdentificacion === 'rnc' && cot.cliente.nombreEmpresa ? cot.cliente.nombreEmpresa : cot.cliente.nombreCliente;
      const li = document.createElement('li');
      li.innerHTML = `<span>${nombreCliente} (${cot.vehiculo.placa})</span> <a href="#" data-action="shell-abrir-cotizacion-edicion" data-cotizacion-id="${cot.id}">Ver</a>`;
      cotizacionesAprobadasList.appendChild(li);
    });
  }

  if (facturasRecientesList) {
    const facturasRecientes = facturasGuardadas.slice().sort((a, b) => new Date(b.fecha) - new Date(a.fecha)).slice(0, 5);
    if (facturasRecientes.length === 0) {
      facturasRecientesList.innerHTML = `<li>${buildGuidedEmptyState('Sin facturas emitidas', 'Cuando una visita esté lista para cobro, podrás emitir y revisar sus facturas desde este panel.', 'Ir a cobros', 'data-action="shell-open-tab" data-tab="facturacion"')}</li>`;
    } else {
      facturasRecientes.forEach(factura => {
        const nombreCliente = factura.cliente.tipoIdentificacion === 'rnc' && factura.cliente.nombreEmpresa ? factura.cliente.nombreEmpresa : factura.cliente.nombreCliente;
        const li = document.createElement('li');
        li.innerHTML = `<span>${factura.id} · ${nombreCliente}</span> <a href="#" data-action="facturacion-imprimir" data-factura-id="${factura.id}">Imprimir</a>`;
        facturasRecientesList.appendChild(li);
      });
    }
  }

  renderDashboardVisitQueues();
  renderDashboardAlerts();
  updateDashboardOverviewStats();
  updateDashboardModuleSummary();
  actualizarModuloFacturacion();
  renderPostventaModule();
  renderActiveWorkflowHeader();
}

function obtenerNombreClienteDisplay(dataCliente = {}) {
  return dataCliente.tipoIdentificacion === 'rnc' && dataCliente.nombreEmpresa
    ? dataCliente.nombreEmpresa
    : dataCliente.nombreCliente;
}

function isSalidaRecordComplete(salida = {}) {
  return Boolean(
    salida.fechaSalida
    && salida.entregadoPorTaller
    && salida.recibidoPorCliente
    && Array.isArray(salida.checklistSalida)
    && salida.checklistSalida.length
    && salida.firmaClienteSalida
  );
}

function getCotizacionDeliveryDate(cotizacion = {}) {
  return cotizacion.salida?.fechaSalida || cotizacion.seguimiento?.fechaEntregaReal || '';
}

function getReminderKey(type, cotizacionId) {
  return `${type}:${cotizacionId}`;
}

function getReminderState(type, cotizacionId) {
  return postventaState.reminders[getReminderKey(type, cotizacionId)] || {};
}

function setReminderState(type, cotizacionId, nextState = {}) {
  postventaState.reminders[getReminderKey(type, cotizacionId)] = {
    ...(getReminderState(type, cotizacionId)),
    ...nextState,
    updatedAt: new Date().toISOString()
  };
  persistPostventaState();
}

function getDeliveredCotizaciones() {
  return cotizacionesGuardadas.filter(cotizacion => Boolean(getCotizacionDeliveryDate(cotizacion)));
}

function buildPostventaReminders() {
  const todayIso = getCurrentDateISO();
  const warrantyDays = Number(configuracionGeneral.diasGarantiaServicio) || 30;
  const maintenanceDays = Number(configuracionGeneral.diasRecordatorioMantenimiento) || 180;

  return getDeliveredCotizaciones().flatMap(cotizacion => {
    const deliveryDate = getCotizacionDeliveryDate(cotizacion);
    const factura = getFacturaByCotizacionId(cotizacion.id);
    const clienteNombre = obtenerNombreClienteDisplay(cotizacion.cliente || {});
    const vehiculoLabel = `${cotizacion.vehiculo?.modelo || 'Vehículo'} (${cotizacion.vehiculo?.placa || 'Sin placa'})`;

    const warrantyDueDate = addDaysToISO(deliveryDate, warrantyDays);
    const maintenanceDueDate = addDaysToISO(deliveryDate, maintenanceDays);
    const warrantyState = getReminderState('garantia', cotizacion.id);
    const maintenanceState = getReminderState('mantenimiento', cotizacion.id);
    const warrantyDiff = getDiffDays(todayIso, warrantyDueDate);
    const maintenanceDiff = getDiffDays(todayIso, maintenanceDueDate);

    return [
      {
        id: getReminderKey('garantia', cotizacion.id),
        type: 'garantia',
        cotizacionId: cotizacion.id,
        facturaId: factura?.id || '',
        title: `Garantía · ${cotizacion.id}`,
        clienteNombre,
        vehiculoLabel,
        deliveryDate,
        dueDate: warrantyDueDate,
        daysToDue: warrantyDiff,
        estado: warrantyState.estado || 'pendiente',
        reentryOrderId: warrantyState.reentryOrderId || '',
        detail: `Garantía de ${warrantyDays} día(s) / ${Number(configuracionGeneral.kmGarantiaServicio) || 1000} km.`
      },
      {
        id: getReminderKey('mantenimiento', cotizacion.id),
        type: 'mantenimiento',
        cotizacionId: cotizacion.id,
        facturaId: factura?.id || '',
        title: `Mantenimiento · ${cotizacion.id}`,
        clienteNombre,
        vehiculoLabel,
        deliveryDate,
        dueDate: maintenanceDueDate,
        daysToDue: maintenanceDiff,
        estado: maintenanceState.estado || 'pendiente',
        reentryOrderId: '',
        detail: `Recordatorio programado a ${maintenanceDays} día(s) de la entrega.`
      }
    ];
  }).sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
}

function getReminderTone(reminder) {
  if (reminder.estado === 'atendido') {
    return 'success';
  }
  if ((reminder.daysToDue ?? 999) < 0) {
    return 'danger';
  }
  if ((reminder.daysToDue ?? 999) <= 7) {
    return 'warning';
  }
  return 'info';
}

function getReminderLabel(reminder) {
  if (reminder.estado === 'atendido') {
    return 'Atendido';
  }
  if ((reminder.daysToDue ?? 999) < 0) {
    return `Vencido hace ${Math.abs(reminder.daysToDue)} día(s)`;
  }
  if ((reminder.daysToDue ?? 999) === 0) {
    return 'Vence hoy';
  }
  return `Faltan ${reminder.daysToDue} día(s)`;
}

function markReminderHandled(type, cotizacionId, handled = true) {
  setReminderState(type, cotizacionId, { estado: handled ? 'atendido' : 'pendiente' });
  renderPostventaModule();
  updateDashboard();
}

function crearReingresoGarantiaDesdeFactura(facturaId, cotizacionId = '') {
  const factura = facturasGuardadas.find(item => item.id === facturaId) || null;
  const cotizacion = cotizacionesGuardadas.find(item => item.id === (factura?.cotizacionId || cotizacionId)) || null;
  if (!cotizacion && !factura) {
    showAppNotice({ title: 'Documento no encontrado', message: 'No se pudo crear el reingreso porque el expediente original no existe.', kicker: 'Garantía' });
    return;
  }

  const ordenOriginal = cotizacion?.ordenEntradaId ? (ordenesEntradaGuardadas.find(item => item.id === cotizacion.ordenEntradaId) || null) : null;
  const now = new Date().toISOString();
  const deliveryDate = getCotizacionDeliveryDate(cotizacion || {});
  const nuevaOrden = {
    id: `ENT-${Date.now()}`,
    fecha: getCurrentDateISO(),
    cliente: { ...(factura.cliente || {}) },
    vehiculo: { ...(factura.vehiculo || {}) },
    ordenEntrada: {
      ...(ordenOriginal?.ordenEntrada || {}),
      motivoEntrada: `Reingreso por garantía · ${cotizacion?.servicio?.trabajo || factura?.servicio?.trabajo || 'Revisión postventa'}`,
      observacionesEntrada: `Generado desde postventa por garantía de ${factura?.id || cotizacion?.id || 'expediente previo'}.`
    },
    postventa: {
      tipo: 'garantia_reingreso',
      origenFacturaId: factura?.id || '',
      origenCotizacionId: cotizacion?.id || '',
      garantiaHasta: deliveryDate ? addDaysToISO(deliveryDate, Number(configuracionGeneral.diasGarantiaServicio) || 30) : '',
      creadoDesdePostventa: true
    },
    savedAt: now,
    updatedAt: now
  };

  ordenesEntradaGuardadas.push(nuevaOrden);
  persistOrdenesEntradaGuardadas();
  setReminderState('garantia', cotizacion?.id || cotizacionId, { estado: 'atendido', reentryOrderId: nuevaOrden.id });
  actualizarListaOrdenesEntradaHistorial();
  updateDashboard();
  renderPostventaModule();
  cargarOrdenEntradaById(nuevaOrden.id);
  showAppNotice({ title: 'Reingreso creado', message: `Se abrió la OT ${nuevaOrden.id} como reingreso por garantía.`, kicker: 'Garantía' });
}

function buildAutomaticAlerts() {
  const delayHoursThreshold = Number(configuracionGeneral.horasAlertaRetraso) || 24;
  const alerts = [];

  cotizacionesGuardadas.forEach(cotizacion => {
    const seguimiento = cotizacion.seguimiento || {};
    const operationalStatus = normalizeSeguimientoStatus(seguimiento.estatusTrabajo || 'en_espera');
    const estimatedDate = seguimiento.fechaEntregaEstimada || '';
    const factura = getFacturaByCotizacionId(cotizacion.id);
    const saldoPendiente = factura ? normalizeFacturaRecord(factura).saldoPendiente : 0;

    if (estimatedDate && !['listo_para_entrega', 'entregado'].includes(operationalStatus)) {
      const diffHours = getDiffHoursFromNow(estimatedDate);
      if (diffHours !== null && diffHours >= delayHoursThreshold) {
        alerts.push({
          id: `delay:${cotizacion.id}`,
          tone: 'danger',
          title: `Retraso detectado en ${cotizacion.id}`,
          detail: `${obtenerNombreClienteDisplay(cotizacion.cliente || {})} · ${cotizacion.vehiculo?.placa || 'Sin placa'} · venció ${estimatedDate}.`,
          actionLabel: 'Abrir seguimiento',
          action: () => openWorkflowVisit(cotizacion.ordenEntradaId || currentLoadedEntryOrderId, 'cotStepSeguimiento')
        });
      }
    }

    if (operationalStatus === 'listo_para_entrega' && !isSalidaRecordComplete(cotizacion.salida || {})) {
      alerts.push({
        id: `ready:${cotizacion.id}`,
        tone: saldoPendiente > 0 ? 'warning' : 'info',
        title: `Vehículo listo para entrega · ${cotizacion.id}`,
        detail: `${obtenerNombreClienteDisplay(cotizacion.cliente || {})} · saldo pendiente RD$ ${Number(saldoPendiente || 0).toFixed(2)}.`,
          actionLabel: saldoPendiente > 0 ? 'Revisar cobro' : 'Abrir salida',
        action: () => openWorkflowVisit(cotizacion.ordenEntradaId || currentLoadedEntryOrderId, 'cotStepSalida')
      });
    }
  });

  return alerts;
}

function renderDashboardAlerts() {
  const list = document.getElementById('dashboardAlertsList');
  const rail = document.getElementById('dashboardAlertRail');
  if (!list) {
    return;
  }

  const alerts = buildAutomaticAlerts();
  if (!alerts.length) {
    list.innerHTML = `<li>${buildGuidedEmptyState('Operación sin alertas críticas', 'No hay retrasos ni vehículos listos pendientes de revisión en este momento.', 'Abrir dashboard', 'data-action="shell-open-tab" data-tab="dashboard"')}</li>`;
    if (rail) {
      rail.classList.add('hidden');
      rail.innerHTML = '';
    }
    return;
  }

  list.innerHTML = '';
  if (rail) {
    rail.classList.remove('hidden');
    rail.innerHTML = alerts.slice(0, 2).map(alertItem => `
      <article class="dashboard-alert-banner is-${alertItem.tone}">
        <div class="dashboard-alert-banner-copy">
          <span class="dashboard-alert-banner-kicker">Alerta operativa</span>
          <strong>${alertItem.title}</strong>
          <p>${alertItem.detail}</p>
        </div>
        <button type="button" class="btn-primary dashboard-alert-banner-action" data-alert-id="${alertItem.id}">${alertItem.actionLabel || 'Abrir expediente'}</button>
      </article>
    `).join('');

    rail.querySelectorAll('[data-alert-id]').forEach(button => {
      const alertItem = alerts.find(item => item.id === button.dataset.alertId);
      if (!alertItem?.action) {
        return;
      }
      button.addEventListener('click', alertItem.action);
    });
  }

  alerts.slice(0, 8).forEach(alertItem => {
    const item = document.createElement('li');
    item.className = `is-${alertItem.tone}`;
    item.innerHTML = `<strong>${alertItem.title}</strong><span>${alertItem.detail}</span>`;
    if (alertItem.action) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'btn-secondary';
      button.textContent = alertItem.actionLabel || 'Abrir expediente';
      button.onclick = alertItem.action;
      item.appendChild(button);
    }
    list.appendChild(item);
  });

  const digest = alerts.map(item => item.id).join('|');
  if (digest && digest !== postventaState.generatedAlertDigest) {
    postventaState.generatedAlertDigest = digest;
    persistPostventaState();
    showAppNotice({ title: 'Alertas automáticas actualizadas', message: `${alerts.length} alerta(s) requieren seguimiento.`, kicker: 'Operación' });
  }
}

function buildPostventaAnalytics() {
  const delivered = getDeliveredCotizaciones();
  const technicianMap = new Map();
  const failureMap = new Map();
  let cycleAccumulator = 0;
  let cycleCount = 0;
  let marginAccumulator = 0;
  let marginCount = 0;

  delivered.forEach(cotizacion => {
    const technician = cotizacion.seguimiento?.tecnicoResponsable || 'Sin asignar';
    const orderDate = cotizacion.fecha || ordenesEntradaGuardadas.find(item => item.id === cotizacion.ordenEntradaId)?.fecha || '';
    const deliveryDate = getCotizacionDeliveryDate(cotizacion);
    const cycleDays = getDiffDays(orderDate, deliveryDate);
    const subtotal = Number(cotizacion.subtotal || 0);
    const pieceCost = (cotizacion.piezas || []).reduce((sum, pieza) => sum + (Number(pieza.costoUnitario || 0) * Number(pieza.cantidad || 0)), 0);
    const grossMargin = Math.max(subtotal - pieceCost, 0);
    const grossMarginPct = subtotal > 0 ? (grossMargin / subtotal) * 100 : 0;

    if (cycleDays !== null) {
      cycleAccumulator += cycleDays;
      cycleCount += 1;
    }
    if (subtotal > 0) {
      marginAccumulator += grossMarginPct;
      marginCount += 1;
    }

    const currentTech = technicianMap.get(technician) || { expedientes: 0, totalDays: 0, totalRevenue: 0, totalMargin: 0 };
    currentTech.expedientes += 1;
    currentTech.totalDays += Math.max(cycleDays || 0, 0);
    currentTech.totalRevenue += Number(cotizacion.totalFinal || 0);
    currentTech.totalMargin += grossMargin;
    technicianMap.set(technician, currentTech);

    Object.entries(cotizacion.diagnostico?.partes || {}).forEach(([partId, part]) => {
      if (part?.estado === 'atencion' || part?.estado === 'critico') {
        const label = DIAGNOSTIC_PARTS.find(item => item.id === partId)?.nombre || partId;
        failureMap.set(label, (failureMap.get(label) || 0) + 1);
      }
    });
  });

  return {
    reminderCount: buildPostventaReminders().filter(item => item.estado !== 'atendido').length,
    warrantyReentryCount: ordenesEntradaGuardadas.filter(item => item.postventa?.tipo === 'garantia_reingreso').length,
    averageCycleDays: cycleCount ? (cycleAccumulator / cycleCount) : 0,
    averageMarginPct: marginCount ? (marginAccumulator / marginCount) : 0,
    technicians: Array.from(technicianMap.entries()).map(([name, stats]) => ({
      name,
      expedientes: stats.expedientes,
      averageDays: stats.expedientes ? (stats.totalDays / stats.expedientes) : 0,
      totalRevenue: stats.totalRevenue,
      totalMargin: stats.totalMargin
    })).sort((a, b) => b.expedientes - a.expedientes),
    failures: Array.from(failureMap.entries()).map(([label, count]) => ({ label, count })).sort((a, b) => b.count - a.count)
  };
}

function renderPostventaModule() {
  const reminderList = document.getElementById('postventaReminderList');
  const analyticsPanel = document.getElementById('postventaAnalyticsPanel');
  if (!reminderList || !analyticsPanel) {
    return;
  }

  const reminders = buildPostventaReminders();
  const analytics = buildPostventaAnalytics();

  document.getElementById('postventaReminderCount').textContent = String(analytics.reminderCount);
  document.getElementById('postventaWarrantyReentryCount').textContent = String(analytics.warrantyReentryCount);
  document.getElementById('postventaAverageCycle').textContent = `${analytics.averageCycleDays.toFixed(1)} d`;
  document.getElementById('postventaAverageMargin').textContent = `${analytics.averageMarginPct.toFixed(1)}%`;

  if (!reminders.length) {
    reminderList.innerHTML = '<p class="text-tip">Todavía no hay entregas cerradas con recordatorios de postventa.</p>';
  } else {
    reminderList.innerHTML = reminders.map(reminder => `
      <article class="postventa-item">
        <div class="postventa-item-header">
          <div>
            <strong>${reminder.title}</strong>
            <span class="${getBadgeClass(getReminderTone(reminder))}">${getReminderLabel(reminder)}</span>
          </div>
          <span class="${getBadgeClass(reminder.type === 'garantia' ? 'info' : 'neutral')}">${reminder.type === 'garantia' ? 'Garantía' : 'Mantenimiento'}</span>
        </div>
        <div class="postventa-item-meta">
          <div>
            <strong>${reminder.clienteNombre}</strong>
            <span>${reminder.vehiculoLabel}</span>
          </div>
          <div>
            <span>Entrega: ${reminder.deliveryDate}</span>
            <span>Vence: ${reminder.dueDate}</span>
          </div>
        </div>
        <p class="text-tip">${reminder.detail}</p>
        <div class="postventa-item-actions">
          <button type="button" class="btn-secondary" data-action="gestion-recordatorio-toggle" data-type="${reminder.type}" data-cotizacion-id="${reminder.cotizacionId}" data-reopen="${String(reminder.estado !== 'atendido')}">${reminder.estado === 'atendido' ? 'Reabrir' : 'Marcar atendido'}</button>
          ${reminder.facturaId ? `<button type="button" class="btn-primary" data-action="facturacion-imprimir" data-factura-id="${reminder.facturaId}">Abrir factura</button>` : ''}
          ${reminder.type === 'garantia' ? `<button type="button" class="btn-warning" data-action="gestion-crear-reingreso" data-factura-id="${reminder.facturaId}" data-cotizacion-id="${reminder.cotizacionId}" ${reminder.reentryOrderId ? 'disabled' : ''}>${reminder.reentryOrderId ? 'Reingreso creado' : 'Crear reingreso garantía'}</button>` : ''}
        </div>
      </article>
    `).join('');
  }

  const technicianHtml = analytics.technicians.length
    ? analytics.technicians.slice(0, 6).map(item => `
        <li>
          <div class="postventa-analytics-row"><strong>${item.name}</strong><span>${item.expedientes} expediente(s)</span></div>
          <div class="postventa-analytics-row"><span>Tiempo promedio</span><span>${item.averageDays.toFixed(1)} d</span></div>
          <div class="postventa-analytics-row"><span>Facturación</span><span>RD$ ${item.totalRevenue.toFixed(2)}</span></div>
          <div class="postventa-analytics-row"><span>Margen bruto</span><span>RD$ ${item.totalMargin.toFixed(2)}</span></div>
        </li>
      `).join('')
    : '<li><span>No hay entregas suficientes para medir técnicos todavía.</span></li>';

  const failureHtml = analytics.failures.length
    ? analytics.failures.slice(0, 8).map(item => `
        <li>
          <div class="postventa-analytics-row"><strong>${item.label}</strong><span>${item.count} caso(s)</span></div>
        </li>
      `).join('')
    : '<li><span>No hay fallas clasificadas todavía.</span></li>';

  analyticsPanel.innerHTML = `
    <section class="postventa-analytics-card">
      <h5>Desempeño por técnico</h5>
      <ul class="postventa-analytics-list">${technicianHtml}</ul>
    </section>
    <section class="postventa-analytics-card">
      <h5>Tipos de fallas más frecuentes</h5>
      <ul class="postventa-analytics-list">${failureHtml}</ul>
    </section>
  `;
}

function getCotizacionesPendientesDeFacturar() {
  return cotizacionesGuardadas
    .filter(cot => canInvoiceCotizacion(cot).allowed)
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
}

function getCurrentCotizacionStatusUI() {
  return normalizeCommercialStatus(document.querySelector('input[name="cotizacionStatus"]:checked')?.value || 'pendiente');
}

function setCotizacionStatusUI(value = 'pendiente') {
  const normalizedValue = normalizeCommercialStatus(value);
  document.querySelectorAll('input[name="cotizacionStatus"]').forEach(radio => {
    radio.checked = radio.value === normalizedValue;
  });
}

function renderQuoteApprovalPieces(items = getCurrentQuotePiecesSnapshot(), approvalConfig = currentCotizacionApprovalConfig) {
  const piecesList = document.getElementById('quoteApprovalPiecesList');
  if (!piecesList) {
    return;
  }

  if (!items.length) {
    piecesList.innerHTML = '<p class="text-tip">No hay piezas registradas en la cotización actual. La aprobación puede centrarse solo en mano de obra.</p>';
    return;
  }

  const approvedIndexes = new Set((approvalConfig?.piezasAprobadas || []).map(item => Number(item)));
  piecesList.innerHTML = items.map((pieza, index) => {
    const pieceIndex = Number(pieza.index ?? index);
    return `
      <div class="quote-approval-piece-item">
        <label>
          <input type="checkbox" class="quoteApprovalPieceItem" value="${pieceIndex}" ${approvedIndexes.has(pieceIndex) ? 'checked' : ''} data-change-action="shell-quote-piece-toggle">
          <span>
            <strong>${pieza.nombre || 'Pieza sin nombre'}</strong><br>
            ${Number(pieza.cantidad || 0)} x RD$ ${Number(pieza.precioVentaUnitario || 0).toFixed(2)}
          </span>
        </label>
        <span>RD$ ${Number(pieza.subtotalPiezaVenta || 0).toFixed(2)}</span>
      </div>
    `;
  }).join('');
}

function handleQuoteApprovalStatusChange() {
  const status = normalizeCommercialStatus(document.getElementById('quoteApprovalStatus')?.value || 'pendiente');
  const scopeBlock = document.getElementById('quoteApprovalScopeBlock');
  const ampliacionBlock = document.getElementById('quoteApprovalAmpliacionBlock');
  if (scopeBlock) {
    scopeBlock.classList.toggle('hidden', status === 'rechazada' || status === 'pendiente');
  }
  if (ampliacionBlock) {
    ampliacionBlock.classList.toggle('hidden', status !== 'ampliacion');
  }

  const laborCheckbox = document.getElementById('quoteApprovalLabor');
  const pieceCheckboxes = Array.from(document.querySelectorAll('.quoteApprovalPieceItem'));
  if (status === 'aprobada') {
    if (laborCheckbox) {
      laborCheckbox.checked = true;
    }
    pieceCheckboxes.forEach(item => {
      item.checked = true;
    });
  }

  refreshQuoteApprovalTotals();
}

function refreshQuoteApprovalTotals() {
  const totalsElement = document.getElementById('quoteApprovalTotals');
  if (!totalsElement) {
    return;
  }

  const status = normalizeCommercialStatus(document.getElementById('quoteApprovalStatus')?.value || 'pendiente');
  const pieceIndexes = Array.from(document.querySelectorAll('.quoteApprovalPieceItem:checked')).map(item => Number(item.value));
  const pieces = getCurrentQuotePiecesSnapshot();
  const approvalPreview = normalizeCotizacionApprovalConfig({
    ...currentCotizacionApprovalConfig,
    tipoAprobacion: status,
    manoObraAprobada: document.getElementById('quoteApprovalLabor')?.checked !== false,
    piezasAprobadas: pieceIndexes
  }, pieces, status);
  const totals = getCotizacionApprovedTotals({
    subtotal: Number(document.getElementById('pSubtotal')?.textContent || 0),
    itbis: Number(document.getElementById('pItbis')?.textContent || 0),
    totalFinal: Number(document.getElementById('pTotal')?.textContent || 0),
    piezas,
    status,
    approval: approvalPreview
  });

  const amountLabel = status === 'aprobada_parcial'
    ? 'Total parcialmente aprobado'
    : status === 'aprobada'
      ? 'Total aprobado'
      : status === 'ampliacion'
        ? 'Monto actual a revisar'
        : 'Monto de referencia';

  totalsElement.innerHTML = `
    <strong>${amountLabel}</strong>
    <div class="quote-approval-summary-line"><span>Mano de obra incluida</span><span>${approvalPreview.manoObraAprobada ? 'Sí' : 'No'}</span></div>
    <div class="quote-approval-summary-line"><span>Piezas aprobadas</span><span>${totals.piezasAprobadas.length} / ${pieces.length}</span></div>
    <div class="quote-approval-summary-line"><span>Subtotal</span><span>RD$ ${Number(totals.subtotal || 0).toFixed(2)}</span></div>
    <div class="quote-approval-summary-line"><span>Impuesto</span><span>RD$ ${Number(totals.itbis || 0).toFixed(2)}</span></div>
    <div class="quote-approval-summary-line"><span>Total</span><span>RD$ ${Number(totals.totalFinal || 0).toFixed(2)}</span></div>
  `;
}

function openQuoteApprovalModal(cotizacionId = null) {
  if (!cotizacionId && !calcularTotal()) {
    showAppNotice({ title: 'Cotización incompleta', message: 'Corrige los datos de la cotización antes de registrar una respuesta comercial.', kicker: 'Validación' });
    return;
  }

  const modal = document.getElementById('quoteApprovalModal');
  if (!modal) {
    return;
  }

  const cotizacion = cotizacionId ? cotizacionesGuardadas.find(item => item.id === cotizacionId) || null : null;
  const pieces = cotizacion?.piezas || getCurrentQuotePiecesSnapshot();
  const baseStatus = cotizacion ? getCotizacionCommercialStatus(cotizacion) : getCurrentCotizacionStatusUI();
  currentCotizacionApprovalConfig = normalizeCotizacionApprovalConfig(cotizacion?.approval || currentCotizacionApprovalConfig || {}, pieces, baseStatus);
  activeQuoteApprovalContext = { cotizacionId, pieces };

  document.getElementById('quoteApprovalModalTitle').textContent = cotizacion
    ? `Definir respuesta comercial para ${cotizacion.id}`
    : 'Definir respuesta comercial del expediente activo';
  document.getElementById('quoteApprovalModalSummary').textContent = cotizacion
    ? `${obtenerNombreClienteDisplay(cotizacion.cliente || {})} · ${cotizacion.vehiculo?.placa || 'Sin placa'} · Total RD$ ${Number(cotizacion.totalFinal || 0).toFixed(2)}`
    : 'Selecciona qué parte fue aprobada por el cliente y si el expediente necesita ampliación.';
  document.getElementById('quoteApprovalStatus').value = baseStatus;
  document.getElementById('quoteApprovalLabor').checked = currentCotizacionApprovalConfig.manoObraAprobada !== false;
  document.getElementById('quoteApprovalResumen').value = currentCotizacionApprovalConfig.resumen || '';
  document.getElementById('quoteApprovalClientNote').value = currentCotizacionApprovalConfig.notaCliente || '';
  document.getElementById('quoteApprovalAmpliacionDetalle').value = currentCotizacionApprovalConfig.ampliacionDetalle || '';
  renderQuoteApprovalPieces(pieces, currentCotizacionApprovalConfig);
  handleQuoteApprovalStatusChange();
  openAccessibleModal('quoteApprovalModal', '#quoteApprovalStatus');
}

function closeQuoteApprovalModal() {
  closeAccessibleModal('quoteApprovalModal');
  activeQuoteApprovalContext = null;
}

function handleQuoteApprovalModalBackdrop(event) {
  if (event.target.id === 'quoteApprovalModal') {
    closeQuoteApprovalModal();
  }
}

function applyQuoteApprovalConfig() {
  const status = normalizeCommercialStatus(document.getElementById('quoteApprovalStatus')?.value || 'pendiente');
  const pieceIndexes = Array.from(document.querySelectorAll('.quoteApprovalPieceItem:checked')).map(item => Number(item.value));
  const pieces = activeQuoteApprovalContext?.pieces || getCurrentQuotePiecesSnapshot();
  const nextConfig = normalizeCotizacionApprovalConfig({
    ...currentCotizacionApprovalConfig,
    tipoAprobacion: status,
    manoObraAprobada: document.getElementById('quoteApprovalLabor')?.checked !== false,
    piezasAprobadas: pieceIndexes,
    resumen: document.getElementById('quoteApprovalResumen')?.value.trim() || '',
    notaCliente: document.getElementById('quoteApprovalClientNote')?.value.trim() || '',
    ampliacionDetalle: document.getElementById('quoteApprovalAmpliacionDetalle')?.value.trim() || '',
    updatedAt: new Date().toISOString(),
    history: [
      ...(currentCotizacionApprovalConfig?.history || []),
      {
        fecha: new Date().toISOString(),
        estado: status,
        resumen: document.getElementById('quoteApprovalResumen')?.value.trim() || '',
        notaCliente: document.getElementById('quoteApprovalClientNote')?.value.trim() || '',
        ampliacionDetalle: document.getElementById('quoteApprovalAmpliacionDetalle')?.value.trim() || ''
      }
    ].slice(-12)
  }, pieces, status);

  if (status === 'aprobada_parcial' && !nextConfig.manoObraAprobada && !nextConfig.piezasAprobadas.length) {
    showAppNotice({ title: 'Aprobación parcial vacía', message: 'Selecciona mano de obra o al menos una pieza aprobada para registrar una aprobación parcial.', kicker: 'Validación' });
    return;
  }

  if (status === 'ampliacion' && !nextConfig.ampliacionDetalle) {
    showAppNotice({ title: 'Detalle requerido', message: 'Describe qué ampliación o trabajo adicional debe ser aprobado por el cliente.', kicker: 'Ampliación' });
    return;
  }

  currentCotizacionApprovalConfig = nextConfig;
  setCotizacionStatusUI(status);

  if (activeQuoteApprovalContext?.cotizacionId) {
    const cotizacionIndex = cotizacionesGuardadas.findIndex(item => item.id === activeQuoteApprovalContext.cotizacionId);
    if (cotizacionIndex > -1) {
      cotizacionesGuardadas[cotizacionIndex] = {
        ...cotizacionesGuardadas[cotizacionIndex],
        status,
        approval: nextConfig
      };
      localStorage.setItem(LOCAL_STORAGE_COTIZACIONES_KEY, JSON.stringify(cotizacionesGuardadas));
      actualizarListaCotizacionesHistorial();
      actualizarModuloFacturacion();
      updateDashboard();
    }
  }

  closeQuoteApprovalModal();
  scheduleModuleDraftSave();
  updateModuleCompletionIndicators();
  showAppNotice({ title: 'Respuesta comercial aplicada', message: `La cotización quedó en estado ${getCommercialStatusMeta(status).label.toLowerCase()}.`, kicker: 'Cotización' });
}

function renderFacturaPagoOptions(selectedFacturaId = '') {
  const facturaSelect = document.getElementById('facturaPagoSelect');
  if (!facturaSelect) {
    return;
  }

  const previousValue = selectedFacturaId || facturaSelect.value;
  facturaSelect.innerHTML = '<option value="">-- Selecciona una factura --</option>';

  facturasGuardadas
    .slice()
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    .forEach(factura => {
      const normalizedFactura = normalizeFacturaRecord(factura);
      const option = document.createElement('option');
      option.value = factura.id;
      option.textContent = `${factura.id} · ${obtenerNombreClienteDisplay(factura.cliente || {})} · Saldo RD$ ${normalizedFactura.saldoPendiente.toFixed(2)}`;
      facturaSelect.appendChild(option);
    });

  if (previousValue && facturasGuardadas.some(factura => factura.id === previousValue)) {
    facturaSelect.value = previousValue;
  }
}

function actualizarResumenPagoFactura() {
  const facturaSelect = document.getElementById('facturaPagoSelect');
  const summary = document.getElementById('facturacionPagoResumen');
  const pagoMonto = document.getElementById('pagoMonto');
  if (!facturaSelect || !summary || !pagoMonto) {
    return;
  }

  const factura = facturasGuardadas.find(item => item.id === facturaSelect.value);
  if (!factura) {
    summary.textContent = 'Selecciona una factura para ver su saldo y registrar pagos.';
    pagoMonto.value = '';
    return;
  }

  const normalizedFactura = normalizeFacturaRecord(factura);
  const estadoCobro = getCollectionStatusMeta(normalizedFactura.estadoCobro);
  summary.innerHTML = `
    <div><strong>${factura.id}</strong> · ${obtenerNombreClienteDisplay(factura.cliente || {})}</div>
    <div class="billing-inline-status"><span class="${getBadgeClass(estadoCobro.tone)}">${estadoCobro.label}</span><span>Total RD$ ${normalizedFactura.totalFinal.toFixed(2)} · Pagado RD$ ${normalizedFactura.totalPagado.toFixed(2)} · Saldo RD$ ${normalizedFactura.saldoPendiente.toFixed(2)}</span></div>
  `;

  if (!pagoMonto.value || Number(pagoMonto.value) > normalizedFactura.saldoPendiente) {
    pagoMonto.value = normalizedFactura.saldoPendiente > 0 ? normalizedFactura.saldoPendiente.toFixed(2) : '';
  }
}

function limpiarFormularioPagoFactura(keepSelectedFactura = false) {
  const todayIso = getCurrentDateISO();
  const facturaSelect = document.getElementById('facturaPagoSelect');
  if (facturaSelect && !keepSelectedFactura) {
    facturaSelect.value = '';
  }
  if (document.getElementById('pagoFecha')) {
    document.getElementById('pagoFecha').value = todayIso;
  }
  if (document.getElementById('pagoMonto')) {
    document.getElementById('pagoMonto').value = '';
  }
  if (document.getElementById('pagoMetodo')) {
    document.getElementById('pagoMetodo').value = 'efectivo';
  }
  if (document.getElementById('pagoReferencia')) {
    document.getElementById('pagoReferencia').value = '';
  }
  if (document.getElementById('pagoNota')) {
    document.getElementById('pagoNota').value = '';
  }
  actualizarResumenPagoFactura();
}

function abrirRegistroPagoFactura(idFactura) {
  openTab(null, 'facturacion');
  renderFacturaPagoOptions(idFactura);
  const facturaSelect = document.getElementById('facturaPagoSelect');
  if (facturaSelect) {
    facturaSelect.value = idFactura;
  }
  actualizarResumenPagoFactura();
}

function registrarPagoFactura() {
  const facturaId = document.getElementById('facturaPagoSelect')?.value || '';
  const fecha = document.getElementById('pagoFecha')?.value || getCurrentDateISO();
  const monto = Number(document.getElementById('pagoMonto')?.value || 0);
  const metodo = document.getElementById('pagoMetodo')?.value || 'efectivo';
  const referencia = document.getElementById('pagoReferencia')?.value.trim() || '';
  const nota = document.getElementById('pagoNota')?.value.trim() || '';

  if (!facturaId) {
    notifyValidation('Factura requerida', 'Selecciona una factura antes de registrar un pago.', { kicker: 'Cobros' });
    return;
  }

  const facturaIndex = facturasGuardadas.findIndex(item => item.id === facturaId);
  if (facturaIndex < 0) {
    notifyError('Factura no encontrada', 'No se encontró la factura seleccionada.', { kicker: 'Cobros' });
    return;
  }

  const factura = normalizeFacturaRecord(facturasGuardadas[facturaIndex]);
  if (factura.saldoPendiente <= 0) {
    notifyValidation('Factura saldada', 'La factura seleccionada ya está totalmente pagada.', { kicker: 'Cobros' });
    return;
  }

  if (!(monto > 0)) {
    notifyValidation('Monto inválido', 'Introduce un monto de pago mayor que cero.', { kicker: 'Cobros' });
    return;
  }

  if (monto - factura.saldoPendiente > 0.0001) {
    notifyValidation('Monto excedido', `El pago no puede exceder el saldo pendiente de RD$ ${factura.saldoPendiente.toFixed(2)}.`, { kicker: 'Cobros' });
    return;
  }

  factura.pagos.push({ fecha, monto, metodo, referencia, nota });
  facturasGuardadas.splice(facturaIndex, 1, normalizeFacturaRecord(factura));
  localStorage.setItem(LOCAL_STORAGE_FACTURAS_KEY, JSON.stringify(facturasGuardadas));
  actualizarModuloFacturacion();
  actualizarListaCotizacionesHistorial();
  updateDashboard();
  renderFacturaPagoOptions(facturaId);
  limpiarFormularioPagoFactura(true);
  notifySuccess('Pago registrado', `El pago quedó aplicado correctamente en la factura ${facturaId}.`, { kicker: 'Cobros' });
}

function renderFacturasTable(tableBodyId, filterInputId) {
  const tableBody = document.getElementById(tableBodyId);
  if (!tableBody) {
    return;
  }

  tableBody.innerHTML = '';
  const filtro = (document.getElementById(filterInputId)?.value || '').toLowerCase();

  const facturasFiltradas = facturasGuardadas.filter(factura => {
    const nombreCliente = obtenerNombreClienteDisplay(factura.cliente || {});
    return (
      factura.id.toLowerCase().includes(filtro) ||
      factura.cotizacionId.toLowerCase().includes(filtro) ||
      (nombreCliente || '').toLowerCase().includes(filtro) ||
      (factura.vehiculo.placa || '').toLowerCase().includes(filtro) ||
      (factura.vehiculo.modelo || '').toLowerCase().includes(filtro)
    );
  }).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  if (facturasFiltradas.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="9" class="text-center">No hay facturas emitidas.</td></tr>';
    return;
  }

  facturasFiltradas.forEach(factura => {
    const row = tableBody.insertRow();
    const nombreCliente = obtenerNombreClienteDisplay(factura.cliente || {});
    const normalizedFactura = normalizeFacturaRecord(factura);
    const estadoCobro = getCollectionStatusMeta(normalizedFactura.estadoCobro);

    row.insertCell().textContent = factura.id;
    row.insertCell().textContent = factura.fecha;
    row.insertCell().textContent = nombreCliente || '';
    row.insertCell().textContent = `${factura.vehiculo.modelo || ''} (${factura.vehiculo.placa || ''})`;
    row.insertCell().innerHTML = `<span class="${getBadgeClass(estadoCobro.tone)}">${estadoCobro.label}</span>`;
    row.insertCell().textContent = `RD$ ${normalizedFactura.saldoPendiente.toFixed(2)}`;
    row.insertCell().textContent = `RD$ ${Number(factura.totalFinal || 0).toFixed(2)}`;
    row.insertCell().textContent = factura.cotizacionId;

    const actionsCell = row.insertCell();
    actionsCell.className = 'action-buttons';

    const printBtn = document.createElement('button');
    printBtn.textContent = 'Imprimir';
    printBtn.className = 'btn-primary';
    printBtn.onclick = () => imprimirFactura(factura.id);
    actionsCell.appendChild(printBtn);

    const paymentBtn = document.createElement('button');
    paymentBtn.textContent = normalizedFactura.estadoCobro === 'pagada' ? 'Pagada' : 'Registrar pago';
    paymentBtn.className = normalizedFactura.estadoCobro === 'pagada' ? 'btn-secondary' : 'btn-success';
    paymentBtn.disabled = normalizedFactura.estadoCobro === 'pagada';
    paymentBtn.onclick = () => abrirRegistroPagoFactura(factura.id);
    actionsCell.appendChild(paymentBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'btn-danger';
    deleteBtn.onclick = () => eliminarFacturaHistorial(factura.id);
    actionsCell.appendChild(deleteBtn);
  });
}

function actualizarModuloFacturacion() {
  const totalFacturasElement = document.getElementById('facturacionTotalEmitidas');
  const montoFacturadoElement = document.getElementById('facturacionMontoTotal');
  const montoCobradoElement = document.getElementById('facturacionMontoCobrado');
  const saldoPendienteElement = document.getElementById('facturacionSaldoPendiente');
  const pendientesElement = document.getElementById('facturacionPendientesCount');
  const pendientesList = document.getElementById('facturacionPendientesList');

  const cotizacionesPendientes = getCotizacionesPendientesDeFacturar();
  const totalFacturado = facturasGuardadas.reduce((sum, factura) => sum + Number(factura.totalFinal || 0), 0);
  const totalCobrado = facturasGuardadas.reduce((sum, factura) => sum + Number(normalizeFacturaRecord(factura).totalPagado || 0), 0);
  const totalSaldoPendiente = facturasGuardadas.reduce((sum, factura) => sum + Number(normalizeFacturaRecord(factura).saldoPendiente || 0), 0);

  if (totalFacturasElement) {
    totalFacturasElement.textContent = String(facturasGuardadas.length);
  }
  if (montoFacturadoElement) {
    montoFacturadoElement.textContent = `RD$ ${totalFacturado.toFixed(2)}`;
  }
  if (montoCobradoElement) {
    montoCobradoElement.textContent = `RD$ ${totalCobrado.toFixed(2)}`;
  }
  if (saldoPendienteElement) {
    saldoPendienteElement.textContent = `RD$ ${totalSaldoPendiente.toFixed(2)}`;
  }
  if (pendientesElement) {
    pendientesElement.textContent = String(cotizacionesPendientes.length);
  }

  if (pendientesList) {
    if (cotizacionesPendientes.length === 0) {
      pendientesList.innerHTML = '<p class="text-tip">No hay cotizaciones aprobadas y listas para facturar.</p>';
    } else {
      pendientesList.innerHTML = '';
      cotizacionesPendientes.slice(0, 8).forEach(cotizacion => {
        const item = document.createElement('article');
        item.className = 'billing-pending-item';
        const estadoOperativo = getOperationalStatusMeta(cotizacion.seguimiento?.estatusTrabajo);
        const nombreCliente = obtenerNombreClienteDisplay(cotizacion.cliente || {});
        const approvedTotals = getCotizacionApprovedTotals(cotizacion);
        const estadoComercial = getCommercialStatusMeta(getCotizacionCommercialStatus(cotizacion));
        item.innerHTML = `
          <div>
            <strong>${nombreCliente || 'Cliente sin nombre'}</strong>
            <span>${cotizacion.id} · ${cotizacion.vehiculo.modelo || 'Vehículo'} (${cotizacion.vehiculo.placa || 'Sin placa'})</span>
            <span>Total aprobado: RD$ ${Number(approvedTotals.totalFinal || cotizacion.totalFinal || 0).toFixed(2)}</span>
            <span>Estado comercial: ${estadoComercial.label} · Estado operativo: ${estadoOperativo.label}</span>
          </div>
        `;

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn-facturar';
        button.textContent = '🧾 Facturar';
        button.onclick = () => convertirAFactura(cotizacion.id);
        item.appendChild(button);
        pendientesList.appendChild(item);
      });
    }
  }

  renderFacturaPagoOptions();
  actualizarResumenPagoFactura();
  renderFacturasTable('listaFacturasTable', 'filtroFacturas');
  renderFacturasTable('listaFacturacionTable', 'filtroFacturacion');
}

function cargarClienteYCotizar(clientId) {
  const cliente = findClientByRecordId(clientId) || findClientByIdentification(clientId);
  if (!cliente) {
    return;
  }
  openTab(null, 'cotStepCliente');
  const selectCliente = document.getElementById('cargarClienteSelect');
  selectCliente.value = getClientRecordId(cliente);
  cargarClienteSeleccionado();
}

function cargarCotizacionParaEditar(cotId) {
  openTab(null, 'cotStepCliente');
  cargarCotizacionById(cotId);
}

function handleLogoUpload() {
  const fileInput = document.getElementById('logoFile');
  const file = fileInput.files[0];

  if (!file) {
    refreshConfiguredLogoPreview();
    return;
  }

  if (file.type !== 'image/png') {
    alert('Por favor, selecciona un archivo PNG.');
    fileInput.value = '';
    refreshConfiguredLogoPreview();
    return;
  }

  const reader = new FileReader();
  reader.onload = e => {
    logoRemovalPending = false;
    logoBase64 = e.target.result;
    refreshConfiguredLogoPreview();
    alert('Logo cargado exitosamente. Recuerda Guardar Configuración.');
  };
  reader.readAsDataURL(file);
}

function clearConfiguredLogo() {
  logoRemovalPending = true;
  logoBase64 = null;
  const fileInput = document.getElementById('logoFile');
  if (fileInput) {
    fileInput.value = '';
  }
  refreshConfiguredLogoPreview();
  showAppNotice({
    title: 'Logo eliminado del formulario',
    message: 'Guarda la configuración para eliminar también el logo persistido.',
    kicker: 'Impresión',
    autoHideMs: 3600
  });
}

function refreshSystemHeaderLogo() {
  const headerLogoWrap = document.getElementById('systemHeaderLogoWrap');
  const headerLogo = document.getElementById('systemHeaderLogo');
  const logoSrc = getConfiguredPrintLogo();

  if (!headerLogoWrap || !headerLogo) {
    return;
  }

  if (logoSrc) {
    headerLogo.src = logoSrc;
    headerLogoWrap.classList.remove('hidden');
  } else {
    headerLogo.removeAttribute('src');
    headerLogoWrap.classList.add('hidden');
  }
}

function refreshConfiguredLogoPreview() {
  const previewContainer = document.getElementById('logoPreviewContainer');
  const previewImage = document.getElementById('logoPreviewImage');
  const previewStatus = document.getElementById('logoPreviewStatus');
  const logoSrc = getConfiguredPrintLogo();

  refreshSystemHeaderLogo();

  if (!previewContainer || !previewImage || !previewStatus) {
    return;
  }

  if (logoSrc) {
    previewImage.src = logoSrc;
    previewContainer.classList.remove('hidden');
    previewStatus.textContent = 'Logo listo. Se usará en las impresiones configuradas y persistirá al guardar la configuración.';
  } else {
    previewImage.removeAttribute('src');
    previewContainer.classList.add('hidden');
    previewStatus.textContent = '*No hay logo guardado actualmente. Carga un PNG y guarda la configuración para persistirlo.';
  }
}

function guardarDatosConfiguracion() {
  configuracionGeneral.nombreEmpresaPrint = document.getElementById('nombreEmpresaPrint').value.trim();
  configuracionGeneral.telefonoEmpresa = document.getElementById('telefonoEmpresa').value.trim();
  configuracionGeneral.emailEmpresa = document.getElementById('emailEmpresa').value.trim();
  configuracionGeneral.direccionEmpresa = document.getElementById('direccionEmpresa').value.trim();
  configuracionGeneral.precioBaseHora = Number(document.getElementById('precioBaseHora').value) || DEFAULT_PRECIO_BASE_HORA;
  configuracionGeneral.aplicarItbis = document.getElementById('aplicarItbis').value;
  configuracionGeneral.porcentajeItbis = Number(document.getElementById('porcentajeItbis').value) || DEFAULT_ITBIS_PERCENT;
  configuracionGeneral.emitidoPor = document.getElementById('emitidoPor').value.trim();
  configuracionGeneral.diasValidezCotizacion = Number(document.getElementById('diasValidezCotizacion').value) || 7;
  configuracionGeneral.diasGarantiaServicio = Number(document.getElementById('diasGarantiaServicio').value) || 30;
  configuracionGeneral.kmGarantiaServicio = Number(document.getElementById('kmGarantiaServicio').value) || 1000;
  configuracionGeneral.diasRecordatorioMantenimiento = Number(document.getElementById('diasRecordatorioMantenimiento').value) || 180;
  configuracionGeneral.horasAlertaRetraso = Number(document.getElementById('horasAlertaRetraso').value) || 24;
  configuracionGeneral.themePreference = normalizeAppThemePreference(document.getElementById('appThemePreference').value);
  configuracionGeneral.plantillaImpresion = readPrintTemplateConfigFromForm();
  configuracionGeneral.notasImportantes = document.getElementById('notasImportantes').value;
  applyAppThemePreference(configuracionGeneral.themePreference);

  try {
    const persistedLogo = getConfiguredPrintLogo();
    localStorage.setItem(LOCAL_STORAGE_CONFIG_KEY, JSON.stringify(configuracionGeneral));
    localStorage.setItem(LOCAL_STORAGE_EMPRESA_KEY, JSON.stringify({ logo: persistedLogo }));
    logoBase64 = persistedLogo;
    logoRemovalPending = false;
    refreshConfiguredLogoPreview();
    alert('Configuración y notas guardadas exitosamente.');
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      alert('No se pudo guardar el logo o la configuración. Es demasiado grande para el almacenamiento local. Intenta con un logo más pequeño (menos de 5MB).');
    } else {
      alert(`Error al guardar la configuración: ${e.message}`);
    }
  }
}

function cargarConfiguracionGeneral() {
  const configGuardada = localStorage.getItem(LOCAL_STORAGE_CONFIG_KEY);
  if (configGuardada) {
    Object.assign(configuracionGeneral, JSON.parse(configGuardada));
  }
  configuracionGeneral.plantillaImpresion = normalizePrintTemplateConfig(configuracionGeneral.plantillaImpresion);
  document.getElementById('nombreEmpresaPrint').value = configuracionGeneral.nombreEmpresaPrint;
  document.getElementById('telefonoEmpresa').value = configuracionGeneral.telefonoEmpresa || '';
  document.getElementById('emailEmpresa').value = configuracionGeneral.emailEmpresa || '';
  document.getElementById('direccionEmpresa').value = configuracionGeneral.direccionEmpresa || '';
  document.getElementById('precioBaseHora').value = Number(configuracionGeneral.precioBaseHora) || DEFAULT_PRECIO_BASE_HORA;
  document.getElementById('aplicarItbis').value = configuracionGeneral.aplicarItbis;
  document.getElementById('porcentajeItbis').value = Number(configuracionGeneral.porcentajeItbis) || DEFAULT_ITBIS_PERCENT;
  document.getElementById('emitidoPor').value = configuracionGeneral.emitidoPor;
  document.getElementById('diasValidezCotizacion').value = Number(configuracionGeneral.diasValidezCotizacion) || 7;
  document.getElementById('diasGarantiaServicio').value = Number(configuracionGeneral.diasGarantiaServicio) || 30;
  document.getElementById('kmGarantiaServicio').value = Number(configuracionGeneral.kmGarantiaServicio) || 1000;
  document.getElementById('diasRecordatorioMantenimiento').value = Number(configuracionGeneral.diasRecordatorioMantenimiento) || 180;
  document.getElementById('horasAlertaRetraso').value = Number(configuracionGeneral.horasAlertaRetraso) || 24;
  configuracionGeneral.themePreference = normalizeAppThemePreference(configuracionGeneral.themePreference);
  document.getElementById('appThemePreference').value = configuracionGeneral.themePreference;
  applyAppThemePreference(configuracionGeneral.themePreference);
  populatePrintTemplateConfigForm(configuracionGeneral.plantillaImpresion);
  document.getElementById('notasImportantes').value = configuracionGeneral.notasImportantes;

  const datosLogo = localStorage.getItem(LOCAL_STORAGE_EMPRESA_KEY);
  if (datosLogo) {
    try {
      const parsedLogo = JSON.parse(datosLogo);
      logoBase64 = parsedLogo?.logo || null;
      logoRemovalPending = false;
    } catch {
      logoBase64 = null;
      logoRemovalPending = false;
    }
  }

  refreshConfiguredLogoPreview();
}

function cargarDatosEmpresa() {
  const datosLogo = localStorage.getItem(LOCAL_STORAGE_EMPRESA_KEY);
  if (!datosLogo) {
    logoBase64 = null;
    return;
  }

  try {
    const parsedLogo = JSON.parse(datosLogo);
    logoBase64 = parsedLogo.logo || null;
    logoRemovalPending = false;
  } catch {
    logoBase64 = null;
    logoRemovalPending = false;
  }

  refreshConfiguredLogoPreview();
}

function obtenerLineaContactoEmpresa() {
  const partes = [configuracionGeneral.telefonoEmpresa, configuracionGeneral.emailEmpresa].filter(Boolean);
  return partes.join(' | ');
}

function isHexColor(value = '') {
  return /^#[0-9a-f]{6}$/i.test(String(value || '').trim());
}

function normalizePrintTemplateConfig(config = {}) {
  const source = config && typeof config === 'object' ? config : {};
  const baseFontSize = Number(source.baseFontSize);
  const pageMarginMm = Number(source.pageMarginMm);
  const borderRadius = Number(source.borderRadius);
  return {
    primaryColor: isHexColor(source.primaryColor) ? source.primaryColor : DEFAULT_PRINT_TEMPLATE_CONFIG.primaryColor,
    accentColor: isHexColor(source.accentColor) ? source.accentColor : DEFAULT_PRINT_TEMPLATE_CONFIG.accentColor,
    paperSize: source.paperSize === 'a4' ? 'a4' : DEFAULT_PRINT_TEMPLATE_CONFIG.paperSize,
    density: source.density === 'comfortable' ? 'comfortable' : DEFAULT_PRINT_TEMPLATE_CONFIG.density,
    fontFamily: ['inter', 'system', 'serif'].includes(source.fontFamily) ? source.fontFamily : DEFAULT_PRINT_TEMPLATE_CONFIG.fontFamily,
    headerLayout: source.headerLayout === 'stacked' ? 'stacked' : DEFAULT_PRINT_TEMPLATE_CONFIG.headerLayout,
    footerAlign: ['left', 'center', 'right'].includes(source.footerAlign) ? source.footerAlign : DEFAULT_PRINT_TEMPLATE_CONFIG.footerAlign,
    sectionTitleStyle: ['line', 'filled', 'minimal'].includes(source.sectionTitleStyle) ? source.sectionTitleStyle : DEFAULT_PRINT_TEMPLATE_CONFIG.sectionTitleStyle,
    baseFontSize: Number.isFinite(baseFontSize) ? Math.min(Math.max(baseFontSize, 12), 18) : DEFAULT_PRINT_TEMPLATE_CONFIG.baseFontSize,
    pageMarginMm: Number.isFinite(pageMarginMm) ? Math.min(Math.max(pageMarginMm, 4), 20) : DEFAULT_PRINT_TEMPLATE_CONFIG.pageMarginMm,
    borderRadius: Number.isFinite(borderRadius) ? Math.min(Math.max(borderRadius, 0), 24) : DEFAULT_PRINT_TEMPLATE_CONFIG.borderRadius,
    showLogo: source.showLogo !== false,
    showContact: source.showContact !== false,
    showAddress: source.showAddress !== false,
    showHeaderMeta: source.showHeaderMeta !== false,
    showKicker: source.showKicker !== false,
    footerText: String(source.footerText || DEFAULT_PRINT_TEMPLATE_CONFIG.footerText).trim() || DEFAULT_PRINT_TEMPLATE_CONFIG.footerText
  };
}

function normalizeAppThemePreference(value = 'light') {
  return APP_THEME_OPTIONS.includes(value) ? value : 'light';
}

function resolveAppTheme(preference = 'light') {
  const normalizedPreference = normalizeAppThemePreference(preference);
  if (normalizedPreference === 'system' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return normalizedPreference;
}

function applyAppThemePreference(preference = configuracionGeneral.themePreference) {
  const normalizedPreference = normalizeAppThemePreference(preference);
  const resolvedTheme = resolveAppTheme(normalizedPreference);
  configuracionGeneral.themePreference = normalizedPreference;
  document.documentElement.dataset.appThemePreference = normalizedPreference;
  document.documentElement.dataset.appTheme = resolvedTheme;
}

function initializeAppThemePreference() {
  if (!window.matchMedia) {
    return;
  }

  appThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleThemeChange = () => {
    if (normalizeAppThemePreference(configuracionGeneral.themePreference) === 'system') {
      applyAppThemePreference('system');
    }
  };

  if (typeof appThemeMediaQuery.addEventListener === 'function') {
    appThemeMediaQuery.addEventListener('change', handleThemeChange);
  } else if (typeof appThemeMediaQuery.addListener === 'function') {
    appThemeMediaQuery.addListener(handleThemeChange);
  }
}

function populatePrintTemplateConfigForm(config) {
  const templateConfig = normalizePrintTemplateConfig(config);
  document.getElementById('printPrimaryColor').value = templateConfig.primaryColor;
  document.getElementById('printAccentColor').value = templateConfig.accentColor;
  document.getElementById('printPaperSize').value = templateConfig.paperSize;
  document.getElementById('printDensity').value = templateConfig.density;
  document.getElementById('printFontFamily').value = templateConfig.fontFamily;
  document.getElementById('printHeaderLayout').value = templateConfig.headerLayout;
  document.getElementById('printFooterAlign').value = templateConfig.footerAlign;
  document.getElementById('printSectionTitleStyle').value = templateConfig.sectionTitleStyle;
  document.getElementById('printBaseFontSize').value = templateConfig.baseFontSize;
  document.getElementById('printPageMarginMm').value = templateConfig.pageMarginMm;
  document.getElementById('printBorderRadius').value = templateConfig.borderRadius;
  document.getElementById('printTemplateFooterText').value = templateConfig.footerText;
  document.getElementById('printShowLogo').checked = templateConfig.showLogo;
  document.getElementById('printShowContact').checked = templateConfig.showContact;
  document.getElementById('printShowAddress').checked = templateConfig.showAddress;
  document.getElementById('printShowHeaderMeta').checked = templateConfig.showHeaderMeta;
  document.getElementById('printShowKicker').checked = templateConfig.showKicker;
}

function readPrintTemplateConfigFromForm() {
  return normalizePrintTemplateConfig({
    primaryColor: document.getElementById('printPrimaryColor').value,
    accentColor: document.getElementById('printAccentColor').value,
    paperSize: document.getElementById('printPaperSize').value,
    density: document.getElementById('printDensity').value,
    fontFamily: document.getElementById('printFontFamily').value,
    headerLayout: document.getElementById('printHeaderLayout').value,
    footerAlign: document.getElementById('printFooterAlign').value,
    sectionTitleStyle: document.getElementById('printSectionTitleStyle').value,
    baseFontSize: document.getElementById('printBaseFontSize').value,
    pageMarginMm: document.getElementById('printPageMarginMm').value,
    borderRadius: document.getElementById('printBorderRadius').value,
    footerText: document.getElementById('printTemplateFooterText').value,
    showLogo: document.getElementById('printShowLogo').checked,
    showContact: document.getElementById('printShowContact').checked,
    showAddress: document.getElementById('printShowAddress').checked,
    showHeaderMeta: document.getElementById('printShowHeaderMeta').checked,
    showKicker: document.getElementById('printShowKicker').checked
  });
}

function getPrintFontStack(fontFamily = DEFAULT_PRINT_TEMPLATE_CONFIG.fontFamily) {
  switch (fontFamily) {
    case 'system':
      return 'system-ui, sans-serif';
    case 'serif':
      return 'Georgia, serif';
    default:
      return 'Inter, Arial, sans-serif';
  }
}

function getPrintTemplatePresets() {
  return {
    clasico: {
      ...DEFAULT_PRINT_TEMPLATE_CONFIG,
      primaryColor: '#1f2937',
      accentColor: '#b45309',
      density: 'comfortable',
      fontFamily: 'serif',
      headerLayout: 'stacked',
      footerAlign: 'left',
      sectionTitleStyle: 'line',
      baseFontSize: 15,
      pageMarginMm: 9,
      borderRadius: 8,
      showKicker: true,
      footerText: 'Formato clásico de taller para recepción y entrega documental.'
    },
    compacto: {
      ...DEFAULT_PRINT_TEMPLATE_CONFIG,
      primaryColor: '#0f172a',
      accentColor: '#ea580c',
      density: 'compact',
      fontFamily: 'inter',
      headerLayout: 'inline',
      footerAlign: 'right',
      sectionTitleStyle: 'minimal',
      baseFontSize: 14,
      pageMarginMm: 6,
      borderRadius: 10,
      showKicker: true,
      footerText: 'Diseño compacto para reducir espacio y acelerar revisión comercial.'
    },
    institucional: {
      ...DEFAULT_PRINT_TEMPLATE_CONFIG,
      primaryColor: '#0b3a53',
      accentColor: '#0f766e',
      density: 'comfortable',
      fontFamily: 'system',
      headerLayout: 'inline',
      footerAlign: 'center',
      sectionTitleStyle: 'filled',
      baseFontSize: 15,
      pageMarginMm: 10,
      borderRadius: 14,
      showKicker: false,
      footerText: 'Documento emitido bajo plantilla institucional configurable de CarsystemRD.'
    }
  };
}

function aplicarPresetPlantillaImpresion(presetId) {
  const preset = getPrintTemplatePresets()[presetId];
  if (!preset) {
    return;
  }

  populatePrintTemplateConfigForm(preset);
  showAppNotice({
    title: 'Preset aplicado',
    message: 'La configuración visual de la plantilla fue cargada en el formulario. Guarda si deseas dejarla persistida.',
    kicker: 'Impresión',
    autoHideMs: 3600
  });
}

function actualizarDatosEmpresaEnImpresion() {
  const contacto = obtenerLineaContactoEmpresa();
  const direccion = configuracionGeneral.direccionEmpresa || '';

  const contactoCot = document.getElementById('pEmpresaContacto');
  const direccionCot = document.getElementById('pEmpresaDireccion');
  const contactoFac = document.getElementById('fEmpresaContacto');
  const direccionFac = document.getElementById('fEmpresaDireccion');
  const contactoSalida = document.getElementById('sEmpresaContacto');
  const direccionSalida = document.getElementById('sEmpresaDireccion');

  if (contactoCot) {
    contactoCot.textContent = contacto;
    contactoCot.classList.toggle('hidden', !contacto);
  }
  if (direccionCot) {
    direccionCot.textContent = direccion;
    direccionCot.classList.toggle('hidden', !direccion);
  }
  if (contactoFac) {
    contactoFac.textContent = contacto;
    contactoFac.classList.toggle('hidden', !contacto);
  }
  if (direccionFac) {
    direccionFac.textContent = direccion;
    direccionFac.classList.toggle('hidden', !direccion);
  }
  if (contactoSalida) {
    contactoSalida.textContent = contacto;
    contactoSalida.classList.toggle('hidden', !contacto);
  }
  if (direccionSalida) {
    direccionSalida.textContent = direccion;
    direccionSalida.classList.toggle('hidden', !direccion);
  }
}

function obtenerEtiquetaItbis() {
  const porcentaje = Number(configuracionGeneral.porcentajeItbis) || DEFAULT_ITBIS_PERCENT;
  return `ITBIS (${porcentaje}%)`;
}

function generarEntidadId(prefix) {
  const randomChunk = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${prefix}-${Date.now()}-${randomChunk}`;
}

function getClientRecordId(cliente = {}) {
  return cliente.clienteId || cliente.id || '';
}

function getVehicleRecordId(vehiculo = {}) {
  return vehiculo.vehicleId || vehiculo.chasis || '';
}

function normalizeVehicleIdentifier(value = '') {
  return String(value || '').trim().toUpperCase();
}

function findVehicleOwnershipConflict(vehicleData = {}, excludedClientId = null, excludedVehicleId = null) {
  const normalizedPlate = normalizeVehicleIdentifier(vehicleData.placa);
  const normalizedChassis = normalizeVehicleIdentifier(vehicleData.chasis);

  if (!normalizedPlate && !normalizedChassis) {
    return null;
  }

  for (const cliente of clientesGuardados) {
    const clientId = getClientRecordId(cliente);
    for (const vehiculo of cliente.vehiculos || []) {
      const vehicleId = getVehicleRecordId(vehiculo);
      if (excludedClientId && excludedVehicleId && clientId === excludedClientId && vehicleId === excludedVehicleId) {
        continue;
      }

      const samePlate = normalizedPlate && normalizeVehicleIdentifier(vehiculo.placa) === normalizedPlate;
      const sameChassis = normalizedChassis && normalizeVehicleIdentifier(vehiculo.chasis) === normalizedChassis;

      if (samePlate || sameChassis) {
        return {
          cliente,
          vehiculo,
          samePlate,
          sameChassis
        };
      }
    }
  }

  return null;
}

function findClientByRecordId(clientId) {
  return clientesGuardados.find(cliente => getClientRecordId(cliente) === clientId);
}

function findClientByIdentification(identificacion) {
  return clientesGuardados.find(cliente => (cliente.id || '').trim() === (identificacion || '').trim());
}

function normalizarVehiculoRegistro(vehiculo = {}) {
  return {
    ...vehiculo,
    vehicleId: getVehicleRecordId(vehiculo) || generarEntidadId('VEH'),
    marca: vehiculo.marca || '',
    modelo: vehiculo.modelo || '',
    anio: vehiculo.anio || '',
    combustible: vehiculo.combustible || 'Gasolina',
    chasis: vehiculo.chasis || '',
    placa: vehiculo.placa || '',
    color: vehiculo.color || '',
    lastModified: vehiculo.lastModified || new Date().toISOString()
  };
}

function normalizarClienteRegistro(cliente = {}) {
  const clienteNormalizado = {
    ...cliente,
    clienteId: getClientRecordId(cliente) || generarEntidadId('CLI'),
    id: cliente.id || cliente.identificacion || '',
    tipo: cliente.tipo || cliente.tipoIdentificacion || 'cedula',
    nombre: cliente.nombre || cliente.nombreCliente || '',
    empresa: cliente.empresa || cliente.nombreEmpresa || '',
    telefono: cliente.telefono || '',
    telefonoOficina: cliente.telefonoOficina || '',
    whatsapp: cliente.whatsapp || '',
    email: cliente.email || '',
    vehiculos: Array.isArray(cliente.vehiculos) ? cliente.vehiculos.map(normalizarVehiculoRegistro) : [],
    lastModified: cliente.lastModified || new Date().toISOString()
  };

  return clienteNormalizado;
}

function sincronizarClientesGuardados() {
  clientesGuardados = clientesGuardados.map(normalizarClienteRegistro);
}

function actualizarIndicadoresClienteVehiculo() {
  const clienteIdElement = document.getElementById('clienteRecordIdDisplay');
  const vehiculoIdElement = document.getElementById('vehiculoRecordIdDisplay');

  if (clienteIdElement) {
    clienteIdElement.textContent = currentLoadedClientId || 'Se genera al guardar';
  }
  if (vehiculoIdElement) {
    vehiculoIdElement.textContent = currentLoadedVehicleId || 'Se genera al guardar';
  }
}

function getClienteRelacionadoCotizaciones(cliente = {}) {
  const clientId = getClientRecordId(cliente);
  return cotizacionesGuardadas
    .filter(cot => cot.cliente?.clientId === clientId || cot.cliente?.identificacion === cliente.id)
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
}

function getClienteRelacionadoFacturas(cliente = {}) {
  const clientId = getClientRecordId(cliente);
  return facturasGuardadas
    .filter(factura => factura.cliente?.clientId === clientId || factura.cliente?.identificacion === cliente.id)
    .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
}

function getClienteHistorial(cliente = {}) {
  const cotizaciones = getClienteRelacionadoCotizaciones(cliente).map(cotizacion => ({
    fecha: cotizacion.fecha,
    tipo: 'Cotización',
    detalle: `${cotizacion.id} · ${cotizacion.vehiculo?.modelo || 'Vehículo'} (${cotizacion.vehiculo?.placa || 'Sin placa'})`,
    accion: `<button type="button" class="btn-secondary" data-action="clientes-abrir-cotizacion" data-cotizacion-id="${cotizacion.id}">Abrir</button>`
  }));
  const facturas = getClienteRelacionadoFacturas(cliente).map(factura => ({
    fecha: factura.fecha,
    tipo: 'Factura',
    detalle: `${factura.id} · ${factura.vehiculo?.modelo || 'Vehículo'} (${factura.vehiculo?.placa || 'Sin placa'})`,
    accion: `<button type="button" class="btn-primary" data-action="facturacion-imprimir" data-factura-id="${factura.id}">Imprimir</button>`
  }));

  return [...cotizaciones, ...facturas].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
}

function isVehicleRecordMatch(recordVehicle = {}, targetVehicle = {}, targetVehicleId = '') {
  if (!recordVehicle || !targetVehicle) {
    return false;
  }

  return Boolean(
    (targetVehicleId && recordVehicle.vehicleId && recordVehicle.vehicleId === targetVehicleId)
    || (recordVehicle.chasis && targetVehicle.chasis && recordVehicle.chasis === targetVehicle.chasis)
    || (recordVehicle.placa && targetVehicle.placa && recordVehicle.placa === targetVehicle.placa)
  );
}

function getVehiculoHistorialDetalle(cliente = {}, vehiculo = null) {
  if (!vehiculo) {
    return {
      ordenes: [],
      cotizaciones: [],
      facturas: [],
      timeline: [],
      reingresos: 0,
      totalFacturado: 0,
      totalCobrado: 0,
      saldoPendiente: 0
    };
  }

  const clientId = getClientRecordId(cliente);
  const vehicleId = getVehicleRecordId(vehiculo);
  const ordenes = ordenesEntradaGuardadas.filter(orden => {
    const sameClient = orden.cliente?.clientId === clientId || orden.cliente?.identificacion === cliente.id;
    return sameClient && isVehicleRecordMatch(orden.vehiculo || {}, vehiculo, vehicleId);
  }).sort((a, b) => new Date(b.fecha || b.savedAt) - new Date(a.fecha || a.savedAt));

  const cotizaciones = getClienteRelacionadoCotizaciones(cliente).filter(cotizacion => isVehicleRecordMatch(cotizacion.vehiculo || {}, vehiculo, vehicleId));
  const facturas = getClienteRelacionadoFacturas(cliente).filter(factura => isVehicleRecordMatch(factura.vehiculo || {}, vehiculo, vehicleId)).map(normalizeFacturaRecord);

  const timeline = [
    ...ordenes.map(orden => ({
      fecha: orden.fecha || orden.savedAt,
      tipo: orden.postventa?.tipo === 'garantia_reingreso'
        ? 'Reingreso por garantía'
        : (ordenes.length > 1 && orden.id !== ordenes[ordenes.length - 1].id ? 'Reingreso / OT' : 'Orden de entrada'),
      detalle: `${orden.id} · ${orden.ordenEntrada?.motivoEntrada || 'Sin motivo'} · ${orden.ordenEntrada?.millajeEntrada || 'Sin millaje'} km`,
      accion: `<button type="button" class="btn-secondary" data-action="shell-abrir-ot" data-orden-id="${orden.id}">Abrir OT</button>`
    })),
    ...cotizaciones.map(cotizacion => ({
      fecha: cotizacion.fecha,
      tipo: 'Cotización',
      detalle: `${cotizacion.id} · ${getCommercialStatusMeta(getCotizacionCommercialStatus(cotizacion)).label} · RD$ ${Number(cotizacion.totalFinal || 0).toFixed(2)}`,
      accion: `<button type="button" class="btn-secondary" data-action="clientes-abrir-cotizacion" data-cotizacion-id="${cotizacion.id}">Abrir cotización</button>`
    })),
    ...facturas.map(factura => ({
      fecha: factura.fecha,
      tipo: 'Factura',
      detalle: `${factura.id} · ${getCollectionStatusMeta(factura.estadoCobro).label} · Saldo RD$ ${Number(factura.saldoPendiente || 0).toFixed(2)}`,
      accion: `<button type="button" class="btn-primary" data-action="facturacion-imprimir" data-factura-id="${factura.id}">Imprimir</button>`
    }))
  ].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  return {
    ordenes,
    cotizaciones,
    facturas,
    timeline,
    reingresos: Math.max(ordenes.length - 1, 0),
    totalFacturado: facturas.reduce((sum, factura) => sum + Number(factura.totalFinal || 0), 0),
    totalCobrado: facturas.reduce((sum, factura) => sum + Number(factura.totalPagado || 0), 0),
    saldoPendiente: facturas.reduce((sum, factura) => sum + Number(factura.saldoPendiente || 0), 0)
  };
}

function renderClienteWorkspaceList() {
  const listElement = document.getElementById('clienteWorkspaceList');
  if (!listElement) {
    return;
  }

  const filtro = (document.getElementById('clienteWorkspaceFilter')?.value || '').toLowerCase();
  const clientesFiltrados = clientesGuardados.filter(cliente => {
    const clientId = getClientRecordId(cliente);
    return (
      (cliente.nombre || '').toLowerCase().includes(filtro) ||
      (cliente.empresa || '').toLowerCase().includes(filtro) ||
      (cliente.id || '').toLowerCase().includes(filtro) ||
      (clientId || '').toLowerCase().includes(filtro) ||
      (cliente.telefono || '').toLowerCase().includes(filtro)
    );
  }).sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));

  if (clientesFiltrados.length === 0) {
    const emptyMessage = clientesGuardados.length === 0
      ? 'Todavía no hay clientes registrados. Usa "Agregar Nuevo Cliente" para crear el primero.'
      : 'No hay clientes que coincidan con la búsqueda.';
    listElement.innerHTML = `<div class="client-empty-state">${emptyMessage}</div>`;
    return;
  }

  listElement.innerHTML = clientesFiltrados.map(cliente => {
    const clientId = getClientRecordId(cliente);
    const displayNombre = cliente.tipo === 'rnc' && cliente.empresa ? cliente.empresa : cliente.nombre;
    return `
      <article class="client-workspace-card ${clientId === currentLoadedClientId ? 'active' : ''}" data-action="clientes-seleccionar-workspace" data-client-id="${clientId}">
        <h4>${displayNombre || 'Cliente sin nombre'}</h4>
        <div class="client-workspace-meta">
          <p><strong>ID interno:</strong> ${clientId}</p>
          <p><strong>Identificación:</strong> ${cliente.id || 'N/D'}</p>
          <p><strong>Vehículos:</strong> ${cliente.vehiculos?.length || 0}</p>
        </div>
      </article>
    `;
  }).join('');
}

function renderClienteWorkspaceDetail(clientId = currentLoadedClientId) {
  const detailElement = document.getElementById('clienteWorkspaceDetail');
  const hintElement = document.getElementById('clienteWorkspaceDetailHint');
  const titleElement = document.getElementById('clienteWorkspaceMainTitle');
  if (!detailElement) {
    return;
  }

  const cliente = findClientByRecordId(clientId);
  if (!cliente) {
    detailElement.innerHTML = '<div class="client-empty-state">Todavía no hay un cliente seleccionado.</div>';
    if (titleElement && clienteWorkspaceMode === 'detail') {
      titleElement.textContent = 'Detalle del Cliente Seleccionado';
    }
    if (hintElement) {
      hintElement.textContent = 'Selecciona un cliente de la lista para ver sus datos, vehículos, historial, cotizaciones y facturas.';
    }
    updateClienteWorkspaceEditorState();
    return;
  }

  const displayNombre = cliente.tipo === 'rnc' && cliente.empresa ? cliente.empresa : cliente.nombre;
  const cotizaciones = getClienteRelacionadoCotizaciones(cliente);
  const facturas = getClienteRelacionadoFacturas(cliente);
  const historial = getClienteHistorial(cliente);
  const vehiculoSeleccionado = cliente.vehiculos?.find(vehiculo => getVehicleRecordId(vehiculo) === currentLoadedVehicleId)
    || cliente.vehiculos?.[0]
    || null;
  const historialVehiculo = getVehiculoHistorialDetalle(cliente, vehiculoSeleccionado);
  const vehiculosHtml = cliente.vehiculos?.length
    ? cliente.vehiculos.map(vehiculo => `
        <li>
          <strong>${getVehicleFullLabel(vehiculo)}</strong>
          <p>ID: ${getVehicleRecordId(vehiculo)} · Placa: ${vehiculo.placa || 'N/D'} · Chasis: ${vehiculo.chasis || 'N/D'}</p>
          <div class="client-item-actions">
            <button type="button" class="btn-secondary" data-action="clientes-seleccionar-vehiculo" data-client-id="${getClientRecordId(cliente)}" data-vehicle-id="${getVehicleRecordId(vehiculo)}">Editar vehículo</button>
            <button type="button" class="btn-danger" data-action="clientes-eliminar-vehiculo" data-client-id="${getClientRecordId(cliente)}" data-vehicle-id="${getVehicleRecordId(vehiculo)}">Eliminar vehículo</button>
          </div>
        </li>
      `).join('')
    : '<li>No hay vehículos asociados.</li>';

  const cotizacionesHtml = cotizaciones.length
    ? cotizaciones.slice(0, 8).map(cotizacion => `
        <li>
          <strong>${cotizacion.id}</strong>
          <p>${cotizacion.fecha} · ${cotizacion.vehiculo?.modelo || 'Vehículo'} (${cotizacion.vehiculo?.placa || 'Sin placa'}) · RD$ ${Number(cotizacion.totalFinal || 0).toFixed(2)}</p>
          <button type="button" class="btn-secondary" data-action="clientes-abrir-cotizacion" data-cotizacion-id="${cotizacion.id}">Abrir cotización</button>
        </li>
      `).join('')
    : '<li>No hay cotizaciones registradas para este cliente.</li>';

  const facturasHtml = facturas.length
    ? facturas.slice(0, 8).map(factura => `
        <li>
          <strong>${factura.id}</strong>
          <p>${factura.fecha} · ${factura.vehiculo?.modelo || 'Vehículo'} (${factura.vehiculo?.placa || 'Sin placa'}) · RD$ ${Number(factura.totalFinal || 0).toFixed(2)}</p>
          <button type="button" class="btn-primary" data-action="facturacion-imprimir" data-factura-id="${factura.id}">Imprimir factura</button>
        </li>
      `).join('')
    : '<li>No hay facturas registradas para este cliente.</li>';

  const historialHtml = historial.length
    ? historial.slice(0, 10).map(item => `
        <li>
          <div>
            <strong>${item.tipo}</strong>
            <p>${item.fecha} · ${item.detalle}</p>
          </div>
          ${item.accion}
        </li>
      `).join('')
    : '<li>No hay historial operativo para este cliente.</li>';

  detailElement.innerHTML = `
    <div class="client-detail-grid">
      <section class="client-detail-section">
        <h4>Datos del Cliente</h4>
        <p><strong>Nombre:</strong> ${displayNombre || 'N/D'}</p>
        <p><strong>ID interno:</strong> ${getClientRecordId(cliente)}</p>
        <p><strong>Identificación:</strong> ${cliente.id || 'N/D'}</p>
        <p><strong>Teléfono:</strong> ${cliente.telefono || 'N/D'}</p>
        <p><strong>WhatsApp:</strong> ${cliente.whatsapp || 'N/D'}</p>
      </section>
      <section class="client-detail-section">
        <h4>Resumen</h4>
        <p><strong>Vehículos asociados:</strong> ${cliente.vehiculos?.length || 0}</p>
        <p><strong>Cotizaciones:</strong> ${cotizaciones.length}</p>
        <p><strong>Facturas:</strong> ${facturas.length}</p>
        <p><strong>Última actualización:</strong> ${new Date(cliente.lastModified).toLocaleString('es-DO')}</p>
      </section>
      <section class="client-detail-section is-wide">
        <h4>Vehículos</h4>
        <ul class="client-detail-list">${vehiculosHtml}</ul>
      </section>
      <section class="client-detail-section is-wide">
        <h4>Historial del Vehículo Seleccionado</h4>
        ${vehiculoSeleccionado ? `
          <div class="client-vehicle-history-grid">
            <div class="client-vehicle-summary">
              <strong>${getVehicleFullLabel(vehiculoSeleccionado)}</strong>
              <p>${vehiculoSeleccionado.placa || 'Sin placa'} · ${vehiculoSeleccionado.chasis || 'Sin chasis'} · ${vehiculoSeleccionado.anio || 'Ano N/D'}</p>
              <div class="client-vehicle-summary-grid">
                <div class="client-vehicle-summary-item"><span>Entradas / OT</span><strong>${historialVehiculo.ordenes.length}</strong></div>
                <div class="client-vehicle-summary-item"><span>Reingresos</span><strong>${historialVehiculo.reingresos}</strong></div>
                <div class="client-vehicle-summary-item"><span>Cotizaciones</span><strong>${historialVehiculo.cotizaciones.length}</strong></div>
                <div class="client-vehicle-summary-item"><span>Facturas</span><strong>${historialVehiculo.facturas.length}</strong></div>
                <div class="client-vehicle-summary-item"><span>Total facturado</span><strong>RD$ ${historialVehiculo.totalFacturado.toFixed(2)}</strong></div>
                <div class="client-vehicle-summary-item"><span>Saldo pendiente</span><strong>RD$ ${historialVehiculo.saldoPendiente.toFixed(2)}</strong></div>
              </div>
            </div>
            <ul class="client-vehicle-timeline">
              ${historialVehiculo.timeline.length
                ? historialVehiculo.timeline.map(item => `
                    <li>
                      <strong>${item.tipo}</strong>
                      <p>${formatDisplayDate(item.fecha)} · ${item.detalle}</p>
                      ${item.accion}
                    </li>
                  `).join('')
                : '<li><strong>Sin historial</strong><p>Este vehículo todavía no tiene entradas, cotizaciones ni facturas registradas.</p></li>'}
            </ul>
          </div>
        ` : '<div class="client-empty-state">Selecciona o registra un vehículo para ver su historial completo.</div>'}
      </section>
      <section class="client-detail-section">
        <h4>Cotizaciones</h4>
        <ul class="client-detail-list">${cotizacionesHtml}</ul>
      </section>
      <section class="client-detail-section">
        <h4>Facturas</h4>
        <ul class="client-detail-list">${facturasHtml}</ul>
      </section>
      <section class="client-detail-section is-wide">
        <h4>Historial</h4>
        <ul class="client-history-list">${historialHtml}</ul>
      </section>
    </div>
  `;

  if (hintElement) {
    hintElement.textContent = `Detalle cargado para ${displayNombre || 'cliente seleccionado'}.`;
  }
  if (titleElement && clienteWorkspaceMode === 'detail') {
    titleElement.textContent = displayNombre || 'Detalle del Cliente';
  }
  updateClienteWorkspaceEditorState();
}

function renderClienteWorkspace() {
  renderClienteWorkspaceList();
  renderClienteWorkspaceDetail();
  updateClienteWorkspaceEditorState();
}

function openClienteWorkspaceModal() {
  const modal = document.getElementById('clienteFormModal');
  if (!modal) {
    return;
  }

  openAccessibleModal('clienteFormModal', '#nombreCliente');
}

function closeClienteWorkspaceModal() {
  const modal = document.getElementById('clienteFormModal');
  if (!modal) {
    return;
  }

  closeAccessibleModal('clienteFormModal');
}

function openVehiculoWorkspaceModal() {
  const modal = document.getElementById('vehiculoFormModal');
  if (!modal) {
    return;
  }

  openAccessibleModal('vehiculoFormModal', '#cargarVehiculoClienteSelect');
}

function closeVehiculoWorkspaceModal() {
  const modal = document.getElementById('vehiculoFormModal');
  if (!modal) {
    return;
  }

  closeAccessibleModal('vehiculoFormModal');
}

function handleClientFormModalBackdrop(event) {
  if (event.target.id !== 'clienteFormModal') {
    return;
  }

  cancelarEdicionClienteWorkspace();
}

function handleVehiculoFormModalBackdrop(event) {
  if (event.target.id !== 'vehiculoFormModal') {
    return;
  }

  cancelarEdicionClienteWorkspace();
}

function setClienteWorkspaceMode(mode = 'detail') {
  clienteWorkspaceMode = mode;

  const titleElement = document.getElementById('clienteWorkspaceMainTitle');
  const hintElement = document.getElementById('clienteWorkspaceDetailHint');
  const editButton = document.getElementById('clienteWorkspaceEditBtn');
  const newVehicleButton = document.getElementById('clienteWorkspaceNewVehicleBtn');
  const hasClient = Boolean(findClientByRecordId(currentLoadedClientId));
  const isEditing = mode !== 'detail';

  if (editButton) {
    editButton.classList.toggle('hidden', !hasClient);
  }
  if (newVehicleButton) {
    newVehicleButton.classList.toggle('hidden', !hasClient);
  }

  if (!isEditing && titleElement) {
    const cliente = findClientByRecordId(currentLoadedClientId);
    const displayNombre = cliente ? (cliente.tipo === 'rnc' && cliente.empresa ? cliente.empresa : cliente.nombre) : '';
    titleElement.textContent = displayNombre || 'Detalle del Cliente Seleccionado';
  }

  if (!isEditing && hintElement && !findClientByRecordId(currentLoadedClientId)) {
    hintElement.textContent = 'Selecciona un cliente de la lista para ver sus datos, vehículos, historial, cotizaciones y facturas.';
  }

  if (isEditing) {
    if (mode === 'new-client' || mode === 'edit-client') {
      openClienteWorkspaceModal();
      closeVehiculoWorkspaceModal();
    } else {
      closeClienteWorkspaceModal();
      openVehiculoWorkspaceModal();
    }
  } else {
    closeClienteWorkspaceModal();
    closeVehiculoWorkspaceModal();
  }

  updateClienteWorkspaceEditorState();
}

function updateClienteWorkspaceEditorState() {
  const clientModalTitle = document.getElementById('clienteFormModalTitle');
  const vehicleModalTitle = document.getElementById('vehiculoFormModalTitle');
  const clienteTitle = document.getElementById('clientEditorClienteTitle');
  const vehiculoTitle = document.getElementById('clientEditorVehiculoTitle');
  const vehicleContext = document.getElementById('vehicleModalClientSummary');
  const hasClient = Boolean(findClientByRecordId(currentLoadedClientId));
  const cliente = findClientByRecordId(currentLoadedClientId);
  const displayNombre = cliente ? (cliente.tipo === 'rnc' && cliente.empresa ? cliente.empresa : cliente.nombre) : '';

  if (clienteTitle) {
    clienteTitle.textContent = currentLoadedClientId ? 'Editar Cliente' : 'Agregar Cliente';
  }
  if (clientModalTitle) {
    clientModalTitle.textContent = currentLoadedClientId && clienteWorkspaceMode === 'edit-client' ? 'Editar Cliente' : 'Nuevo Cliente';
  }

  if (vehiculoTitle) {
    vehiculoTitle.textContent = currentLoadedVehicleId ? 'Editar Vehículo' : 'Agregar Vehículo';
  }
  if (vehicleModalTitle) {
    vehicleModalTitle.textContent = currentLoadedVehicleId ? 'Editar Vehículo' : 'Agregar Vehículo';
  }

  if (vehicleContext) {
    vehicleContext.textContent = hasClient
      ? `Cliente seleccionado: ${displayNombre || 'Cliente sin nombre'}${currentLoadedClientId ? ` · ${currentLoadedClientId}` : ''}`
      : 'Selecciona un cliente antes de registrar un vehículo.';
  }
}

function abrirNuevoClienteWorkspace() {
  limpiarCamposCliente(true);
  setClienteWorkspaceMode('new-client');
}

function editarClienteWorkspaceActual() {
  if (!findClientByRecordId(currentLoadedClientId)) {
    alert('Selecciona primero un cliente de la lista para editarlo.');
    return;
  }

  setClienteWorkspaceMode('edit-client');
}

function prepararNuevoVehiculoClienteActual() {
  if (!findClientByRecordId(currentLoadedClientId)) {
    alert('Selecciona primero un cliente para agregarle un vehículo.');
    return;
  }

  limpiarCamposVehiculo(true);
  setClienteWorkspaceMode('new-vehicle');
}

function cancelarEdicionClienteWorkspace() {
  if (currentLoadedClientId) {
    const selectCliente = document.getElementById('cargarClienteSelect');
    if (selectCliente) {
      selectCliente.value = currentLoadedClientId;
    }
    cargarClienteSeleccionado();
    return;
  }

  limpiarCamposCliente(true);
  setClienteWorkspaceMode('detail');
}

function seleccionarClienteWorkspace(clientId) {
  const selectCliente = document.getElementById('cargarClienteSelect');
  if (selectCliente) {
    selectCliente.value = clientId;
  }
  cargarClienteSeleccionado();
}

function seleccionarVehiculoDelCliente(clientId, vehicleId) {
  const selectCliente = document.getElementById('cargarClienteSelect');
  if (selectCliente) {
    selectCliente.value = clientId;
  }
  cargarClienteSeleccionado();
  const selectVehiculo = document.getElementById('cargarVehiculoClienteSelect');
  if (selectVehiculo) {
    selectVehiculo.value = vehicleId;
  }
  cargarVehiculoSeleccionadoCliente();
  setClienteWorkspaceMode('new-vehicle');
}

function eliminarVehiculoDelCliente(clientId, vehicleId) {
  const cliente = findClientByRecordId(clientId);
  if (!cliente) {
    return;
  }

  const vehiculo = cliente.vehiculos.find(item => getVehicleRecordId(item) === vehicleId);
  if (!vehiculo) {
    return;
  }

  const confirmacion = confirm(`¿Eliminar el vehículo ${vehiculo.modelo || 'sin modelo'} (${vehiculo.placa || 'sin placa'}) del cliente ${cliente.nombre || cliente.empresa}?`);
  if (!confirmacion) {
    return;
  }

  cliente.vehiculos = cliente.vehiculos.filter(item => getVehicleRecordId(item) !== vehicleId);
  cliente.lastModified = new Date().toISOString();
  localStorage.setItem(LOCAL_STORAGE_CLIENTES_KEY, JSON.stringify(clientesGuardados));

  if (currentLoadedClientId === clientId) {
    actualizarListaVehiculosClienteActual(clientId);
    if (currentLoadedVehicleId === vehicleId) {
      const ultimoVehiculo = cliente.vehiculos[cliente.vehiculos.length - 1];
      if (ultimoVehiculo) {
        cargarCamposVehiculo(ultimoVehiculo);
        document.getElementById('cargarVehiculoClienteSelect').value = getVehicleRecordId(ultimoVehiculo);
      } else {
        limpiarCamposVehiculo(true);
      }
    }
  }

  actualizarIndicadoresClienteVehiculo();
  renderOrdenEntradaContext();
  renderClienteWorkspace();
  updateDashboard();
}

function mostrarOcultarCampos() {
  const tipoIdentificacion = document.getElementById('tipoIdentificacion').value;
  const campoNombreEmpresa = document.getElementById('campoNombreEmpresa');
  const identificacionInput = document.getElementById('identificacion');
  const nombreEmpresaInput = document.getElementById('nombreEmpresa');

  if (tipoIdentificacion === 'rnc') {
    campoNombreEmpresa.classList.remove('hidden');
    nombreEmpresaInput.setAttribute('required', 'required');
    identificacionInput.setAttribute('placeholder', 'Ej: 000-00000-0');
    if (identificacionInput.value === '000-0000000-0' || identificacionInput.value === '') {
      identificacionInput.value = '';
    }
  } else {
    campoNombreEmpresa.classList.add('hidden');
    nombreEmpresaInput.removeAttribute('required');
    identificacionInput.setAttribute('placeholder', 'Ej: 000-0000000-0');
    if (identificacionInput.value === '000-00000-0' || identificacionInput.value === '') {
      identificacionInput.value = '';
    }
  }
  validateField(identificacionInput);
  validateField(nombreEmpresaInput);
  updateModuleCompletionIndicators();
}

function obtenerDatosClienteActual() {
  return {
    clienteId: currentLoadedClientId || '',
    tipo: document.getElementById('tipoIdentificacion').value,
    identificacion: document.getElementById('identificacion').value.trim(),
    nombre: document.getElementById('nombreCliente').value.trim(),
    empresa: document.getElementById('tipoIdentificacion').value === 'rnc' ? document.getElementById('nombreEmpresa').value.trim() : '',
    telefono: document.getElementById('telefonoCliente').value.trim(),
    telefonoOficina: document.getElementById('telefonoOficinaCliente').value.trim(),
    whatsapp: document.getElementById('whatsappCliente').value.trim(),
    email: document.getElementById('emailCliente').value.trim(),
    lastModified: new Date().toISOString()
  };
}

function obtenerDatosVehiculoActual() {
  return {
    vehicleId: currentLoadedVehicleId || '',
    marca: document.getElementById('vehiculoMarca').value.trim(),
    modelo: document.getElementById('vehiculoModelo').value.trim(),
    anio: document.getElementById('vehiculoAnio').value.trim(),
    combustible: document.getElementById('vehiculoCombustible').value.trim(),
    chasis: document.getElementById('vehiculoChasis').value.trim(),
    placa: document.getElementById('vehiculoPlaca').value.trim(),
    color: document.getElementById('vehiculoColor').value.trim(),
    lastModified: new Date().toISOString()
  };
}

function cargarCamposVehiculo(vehiculo) {
  if (!vehiculo) {
    return;
  }
  currentLoadedVehicleId = getVehicleRecordId(vehiculo);
  document.getElementById('vehiculoMarca').value = vehiculo.marca || '';
  document.getElementById('vehiculoModelo').value = vehiculo.modelo || '';
  document.getElementById('vehiculoAnio').value = vehiculo.anio || '';
  document.getElementById('vehiculoCombustible').value = vehiculo.combustible || 'Gasolina';
  document.getElementById('vehiculoChasis').value = vehiculo.chasis || '';
  document.getElementById('vehiculoPlaca').value = vehiculo.placa || '';
  document.getElementById('vehiculoColor').value = vehiculo.color || '';
  actualizarIndicadoresClienteVehiculo();
  renderOrdenEntradaContext();
  updateModuleCompletionIndicators();
}

function limpiarCamposCliente(resetVehicle = false) {
  document.getElementById('identificacion').value = '';
  document.getElementById('nombreCliente').value = '';
  document.getElementById('nombreEmpresa').value = '';
  document.getElementById('telefonoCliente').value = '';
  document.getElementById('telefonoOficinaCliente').value = '';
  document.getElementById('whatsappCliente').value = '';
  document.getElementById('emailCliente').value = '';
  document.getElementById('tipoIdentificacion').value = 'cedula';
  mostrarOcultarCampos();
  document.getElementById('cargarClienteSelect').value = '';
  currentLoadedClientId = null;
  if (resetVehicle) {
    limpiarCamposVehiculo(true);
  }
  document.getElementById('identificacion').classList.remove('invalid-field');
  document.getElementById('nombreCliente').classList.remove('invalid-field');
  document.getElementById('nombreEmpresa').classList.remove('invalid-field');
  actualizarIndicadoresClienteVehiculo();
  renderOrdenEntradaContext();
  renderClienteWorkspace();
  updateClienteWorkspaceEditorState();
  updateModuleCompletionIndicators();
}

function limpiarCamposVehiculo(forceResetSelect = false) {
  document.getElementById('vehiculoMarca').value = '';
  document.getElementById('vehiculoModelo').value = '';
  document.getElementById('vehiculoAnio').value = '';
  document.getElementById('vehiculoCombustible').value = 'Gasolina';
  document.getElementById('vehiculoChasis').value = '';
  document.getElementById('vehiculoPlaca').value = '';
  document.getElementById('vehiculoColor').value = '';
  if (forceResetSelect) {
    document.getElementById('cargarVehiculoClienteSelect').value = '';
  }
  currentLoadedVehicleId = null;
  document.getElementById('vehiculoModelo').classList.remove('invalid-field');
  document.getElementById('vehiculoAnio').classList.remove('invalid-field');
  document.getElementById('vehiculoCombustible').classList.remove('invalid-field');
  document.getElementById('vehiculoChasis').classList.remove('invalid-field');
  document.getElementById('vehiculoPlaca').classList.remove('invalid-field');
  actualizarIndicadoresClienteVehiculo();
  renderOrdenEntradaContext();
  updateClienteWorkspaceEditorState();
  updateModuleCompletionIndicators();
}

function persistirClientesGuardados() {
  sincronizarClientesGuardados();
  localStorage.setItem(LOCAL_STORAGE_CLIENTES_KEY, JSON.stringify(clientesGuardados));
  actualizarListaClientes();
  actualizarTablaClientes();
  renderClienteWorkspace();
  updateDashboard();
}

function guardarCliente(showAlert = true) {
  if (!validateFieldsByIds(['identificacion', 'nombreCliente'])) {
    alert('Por favor, corrige los campos marcados del cliente antes de guardar.');
    return null;
  }

  const clienteData = obtenerDatosClienteActual();
  let existingCliente = findClientByRecordId(currentLoadedClientId) || findClientByIdentification(clienteData.identificacion);
  const isNewClient = !existingCliente;
  const clientRecordId = existingCliente ? getClientRecordId(existingCliente) : generarEntidadId('CLI');

  if (!existingCliente) {
    if (!isAppUnlocked && clientesGuardados.length >= MAX_CLIENTES_DEMO) {
      alert(`¡Límite de Clientes Alcanzado! Esta es una versión demo y solo puede guardar hasta ${MAX_CLIENTES_DEMO} clientes. Elimina un cliente existente para guardar uno nuevo.`);
      return null;
    }

    existingCliente = {
      clienteId: clientRecordId,
      id: clienteData.identificacion,
      tipo: clienteData.tipo,
      nombre: clienteData.nombre,
      empresa: clienteData.empresa,
      telefono: clienteData.telefono,
      telefonoOficina: clienteData.telefonoOficina,
      whatsapp: clienteData.whatsapp,
      email: clienteData.email,
      vehiculos: [],
      lastModified: new Date().toISOString()
    };
    clientesGuardados.push(existingCliente);
  } else {
    existingCliente.tipo = clienteData.tipo;
    existingCliente.clienteId = clientRecordId;
    existingCliente.id = clienteData.identificacion;
    existingCliente.nombre = clienteData.nombre;
    existingCliente.empresa = clienteData.empresa;
    existingCliente.telefono = clienteData.telefono;
    existingCliente.telefonoOficina = clienteData.telefonoOficina;
    existingCliente.whatsapp = clienteData.whatsapp;
    existingCliente.email = clienteData.email;
    existingCliente.lastModified = new Date().toISOString();
  }

  currentLoadedClientId = clientRecordId;
  persistirClientesGuardados();
  actualizarListaVehiculosClienteActual(clientRecordId);

  const clienteSelect = document.getElementById('cargarClienteSelect');
  if (clienteSelect) {
    clienteSelect.value = clientRecordId;
  }

  actualizarIndicadoresClienteVehiculo();
  renderOrdenEntradaContext();
  setClienteWorkspaceMode('detail');
  renderClienteWorkspaceDetail(currentLoadedClientId);
  updateModuleCompletionIndicators();

  if (showAlert) {
    alert(isNewClient ? `Cliente ${clientRecordId} guardado correctamente.` : `Cliente ${clientRecordId} actualizado.`);
  }

  return existingCliente;
}

function guardarVehiculoClienteActual(showAlert = true) {
  if (!currentLoadedClientId) {
    alert('Guarda o selecciona primero un cliente antes de registrar un vehículo.');
    return null;
  }

  if (!validateFieldsByIds(['vehiculoModelo', 'vehiculoAnio', 'vehiculoCombustible', 'vehiculoChasis', 'vehiculoPlaca'])) {
    alert('Por favor, corrige los campos marcados del vehículo antes de guardar.');
    return null;
  }

  const cliente = findClientByRecordId(currentLoadedClientId);
  if (!cliente) {
    alert('No se encontró el cliente seleccionado para asociar el vehículo.');
    return null;
  }

  const vehiculoData = obtenerDatosVehiculoActual();
  const vehicleRecordId = currentLoadedVehicleId || generarEntidadId('VEH');
  const conflictoVehiculo = findVehicleOwnershipConflict(vehiculoData, currentLoadedClientId, vehicleRecordId);
  if (conflictoVehiculo) {
    const clientLabel = conflictoVehiculo.cliente.tipo === 'rnc' && conflictoVehiculo.cliente.empresa
      ? conflictoVehiculo.cliente.empresa
      : conflictoVehiculo.cliente.nombre;
    const conflictReason = conflictoVehiculo.samePlate && conflictoVehiculo.sameChassis
      ? 'placa y chasis/VIN'
      : conflictoVehiculo.samePlate
        ? 'placa'
        : 'chasis/VIN';
    alert(`Ya existe un vehículo registrado con la misma ${conflictReason} en el cliente ${clientLabel || getClientRecordId(conflictoVehiculo.cliente)}. Revisa el expediente existente antes de crear o mover este vehículo.`);
    return null;
  }

  const vehiculoNormalizado = normalizarVehiculoRegistro({
    ...vehiculoData,
    vehicleId: vehicleRecordId
  });

  const existingVehicleIndex = cliente.vehiculos.findIndex(vehiculo => getVehicleRecordId(vehiculo) === vehicleRecordId || (vehiculo.chasis && vehiculo.chasis === vehiculoData.chasis));
  if (existingVehicleIndex > -1) {
    cliente.vehiculos[existingVehicleIndex] = vehiculoNormalizado;
  } else {
    cliente.vehiculos.push(vehiculoNormalizado);
  }

  cliente.lastModified = new Date().toISOString();
  currentLoadedVehicleId = vehicleRecordId;
  persistirClientesGuardados();
  actualizarListaVehiculosClienteActual(currentLoadedClientId);

  const clienteSelect = document.getElementById('cargarClienteSelect');
  const vehiculoSelect = document.getElementById('cargarVehiculoClienteSelect');
  if (clienteSelect) {
    clienteSelect.value = currentLoadedClientId;
  }
  if (vehiculoSelect) {
    vehiculoSelect.value = vehicleRecordId;
  }

  actualizarIndicadoresClienteVehiculo();
  renderOrdenEntradaContext();
  setClienteWorkspaceMode('detail');
  renderClienteWorkspaceDetail(currentLoadedClientId);
  updateModuleCompletionIndicators();

  if (showAlert) {
    alert(existingVehicleIndex > -1 ? `Vehículo ${vehicleRecordId} actualizado correctamente.` : `Vehículo ${vehicleRecordId} guardado correctamente.`);
  }

  return vehiculoNormalizado;
}

function guardarClienteYVehiculo() {
  const clienteGuardado = guardarCliente(false);
  if (!clienteGuardado) {
    return;
  }

  guardarVehiculoClienteActual(true);
}

function cargarClientesGuardados() {
  const clientesGuardadosStr = localStorage.getItem(LOCAL_STORAGE_CLIENTES_KEY);
  if (clientesGuardadosStr) {
    clientesGuardados = JSON.parse(clientesGuardadosStr);
  }
  sincronizarClientesGuardados();
  localStorage.setItem(LOCAL_STORAGE_CLIENTES_KEY, JSON.stringify(clientesGuardados));
  actualizarListaClientes();
  renderClienteWorkspace();
  setClienteWorkspaceMode('detail');
}

function actualizarListaClientes() {
  const selectClientes = document.getElementById('cargarClienteSelect');
  if (!selectClientes) {
    return;
  }
  selectClientes.innerHTML = '<option value="">-- Seleccionar o Crear Nuevo Cliente --</option>';

  clientesGuardados.forEach(cliente => {
    const option = document.createElement('option');
    const displayNombre = getClientDisplayName(cliente);
    option.value = getClientRecordId(cliente);
    option.textContent = `${displayNombre || 'Cliente sin nombre'} (${getClientRecordId(cliente)})`;
    selectClientes.appendChild(option);
  });

  syncEntryClientVehicleSelectors();
}

async function cargarClienteSeleccionado() {
  const clienteSeleccionadoId = document.getElementById('cargarClienteSelect').value;
  const previousClientId = currentLoadedClientId;
  const previousVehicleId = currentLoadedVehicleId;
  const clientChanged = Boolean(previousClientId && clienteSeleccionadoId && previousClientId !== clienteSeleccionadoId);
  const clientCleared = Boolean(previousClientId && !clienteSeleccionadoId);

  if ((clientChanged || clientCleared) && hasActiveWorkflowData()) {
    const clienteObjetivo = clienteSeleccionadoId ? findClientByRecordId(clienteSeleccionadoId) : null;
    const targetLabel = clienteObjetivo
      ? `${getClientDisplayName(clienteObjetivo) || 'el cliente seleccionado'}`
      : 'sin un cliente seleccionado';

    if (!await confirmWorkflowReset(targetLabel)) {
      document.getElementById('cargarClienteSelect').value = previousClientId || '';
      return;
    }
  }

  if (!clienteSeleccionadoId) {
    resetWorkflowModules();
    limpiarCamposCliente(false);
    limpiarCamposVehiculo(true);
    actualizarListaVehiculosClienteActual('');
    currentLoadedClientId = null;
    currentLoadedVehicleId = null;
    actualizarIndicadoresClienteVehiculo();
    renderOrdenEntradaContext();
    syncEntryClientVehicleSelectors();
    setClienteWorkspaceMode('detail');
    renderClienteWorkspace();
    updateDraftRecoveryActions();
    return;
  }

  const cliente = findClientByRecordId(clienteSeleccionadoId);
  if (cliente) {
    document.getElementById('tipoIdentificacion').value = cliente.tipo;
    mostrarOcultarCampos();
    document.getElementById('identificacion').value = cliente.id;
    document.getElementById('nombreCliente').value = cliente.nombre;
    document.getElementById('nombreEmpresa').value = cliente.empresa || '';
    document.getElementById('telefonoCliente').value = cliente.telefono || '';
    document.getElementById('telefonoOficinaCliente').value = cliente.telefonoOficina || '';
    document.getElementById('whatsappCliente').value = cliente.whatsapp || '';
    document.getElementById('emailCliente').value = cliente.email || '';

    currentLoadedClientId = getClientRecordId(cliente);
    if (clientChanged || clientCleared) {
      currentLoadedVehicleId = null;
      resetWorkflowModules();
    }
    actualizarListaVehiculosClienteActual(currentLoadedClientId);

    const shouldKeepCurrentVehicle = Boolean(previousVehicleId && previousClientId === currentLoadedClientId && cliente.vehiculos?.some(vehiculo => getVehicleRecordId(vehiculo) === previousVehicleId));

    if (shouldKeepCurrentVehicle) {
      document.getElementById('cargarVehiculoClienteSelect').value = previousVehicleId;
      cargarVehiculoSeleccionadoCliente();
    } else if (cliente.vehiculos && cliente.vehiculos.length === 1) {
      const ultimoVehiculo = cliente.vehiculos[cliente.vehiculos.length - 1];
      cargarCamposVehiculo(ultimoVehiculo);
      document.getElementById('cargarVehiculoClienteSelect').value = getVehicleRecordId(ultimoVehiculo);
    } else {
      limpiarCamposVehiculo(true);
    }
    actualizarIndicadoresClienteVehiculo();
    syncEntryClientVehicleSelectors();
    setClienteWorkspaceMode('detail');
    renderClienteWorkspace();
    scheduleModuleDraftSave();
    updateDraftRecoveryActions();
    updateModuleCompletionIndicators();
  }
}

function actualizarListaVehiculosClienteActual(clienteId) {
  const selectVehiculos = document.getElementById('cargarVehiculoClienteSelect');
  if (!selectVehiculos) {
    return;
  }
  selectVehiculos.innerHTML = '<option value="">-- Seleccionar o Crear Nuevo Vehículo --</option>';

  const cliente = findClientByRecordId(clienteId);
  if (cliente && cliente.vehiculos) {
    cliente.vehiculos.forEach(vehiculo => {
      const option = document.createElement('option');
      option.value = getVehicleRecordId(vehiculo);
      option.textContent = `${vehiculo.modelo} (${vehiculo.placa}) · ${getVehicleRecordId(vehiculo)}`;
      selectVehiculos.appendChild(option);
    });
  }

  syncEntryClientVehicleSelectors();
}

async function cargarVehiculoSeleccionadoCliente() {
  const vehiculoSeleccionadoId = document.getElementById('cargarVehiculoClienteSelect').value;
  const previousVehicleId = currentLoadedVehicleId;
  const vehicleChanged = Boolean(previousVehicleId && vehiculoSeleccionadoId && previousVehicleId !== vehiculoSeleccionadoId);
  const vehicleCleared = Boolean(previousVehicleId && !vehiculoSeleccionadoId);

  if ((vehicleChanged || vehicleCleared) && hasActiveWorkflowData()) {
    const cliente = findClientByRecordId(currentLoadedClientId);
    const vehiculoObjetivo = cliente?.vehiculos?.find(v => getVehicleRecordId(v) === vehiculoSeleccionadoId);
    const targetLabel = vehiculoObjetivo
      ? `${vehiculoObjetivo.modelo || 'el vehículo seleccionado'}${vehiculoObjetivo.placa ? ` (${vehiculoObjetivo.placa})` : ''}`
      : 'sin un vehículo seleccionado';

    if (!await confirmWorkflowReset(targetLabel)) {
      document.getElementById('cargarVehiculoClienteSelect').value = previousVehicleId || '';
      return;
    }
  }

  if (!vehiculoSeleccionadoId || !currentLoadedClientId) {
    if (vehicleChanged || vehicleCleared) {
      resetWorkflowModules();
    }
    limpiarCamposVehiculo(false);
    scheduleModuleDraftSave();
    return;
  }

  const cliente = findClientByRecordId(currentLoadedClientId);
  if (cliente && cliente.vehiculos) {
    const vehiculo = cliente.vehiculos.find(v => getVehicleRecordId(v) === vehiculoSeleccionadoId);
    if (vehiculo) {
      cargarCamposVehiculo(vehiculo);
      currentLoadedVehicleId = getVehicleRecordId(vehiculo);
      if (vehicleChanged) {
        resetWorkflowModules();
      }
      const activeMainTab = document.querySelector('[data-main-tab-target].active')?.dataset.mainTabTarget || '';
      if (['cotStepOrden', 'cotStepDiagnostico', 'cotStepServicio', 'cotStepSeguimiento'].includes(activeMainTab)) {
        hydrateLatestOrdenEntradaForSelection();
      }
      actualizarIndicadoresClienteVehiculo();
      syncEntryClientVehicleSelectors();
      renderClienteWorkspaceDetail(currentLoadedClientId);
      updateClienteWorkspaceEditorState();
      scheduleModuleDraftSave();
      updateModuleCompletionIndicators();
    }
  }
}

function actualizarTablaClientes() {
  const tableBody = document.getElementById('listaClientesTable');
  if (!tableBody) {
    return;
  }
  tableBody.innerHTML = '';
  const filtro = document.getElementById('filtroClientes').value.toLowerCase();

  if (clientesGuardados.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6" class="text-center">No hay clientes registrados.</td></tr>';
    return;
  }

  const clientesFiltrados = clientesGuardados.filter(cliente =>
    (cliente.nombre && cliente.nombre.toLowerCase().includes(filtro)) ||
    (cliente.empresa && cliente.empresa.toLowerCase().includes(filtro)) ||
    (cliente.clienteId && cliente.clienteId.toLowerCase().includes(filtro)) ||
    (cliente.id && cliente.id.toLowerCase().includes(filtro)) ||
    (cliente.telefono && cliente.telefono.toLowerCase().includes(filtro)) ||
    (cliente.whatsapp && cliente.whatsapp.toLowerCase().includes(filtro))
  );

  if (clientesFiltrados.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="6" class="text-center">No se encontraron clientes con ese filtro.</td></tr>';
    return;
  }

  clientesFiltrados.forEach(cliente => {
    const row = tableBody.insertRow();
    row.dataset.clientId = getClientRecordId(cliente);
    row.onclick = () => cargarClienteEnGestion(getClientRecordId(cliente));

    const displayNombre = cliente.tipo === 'rnc' && cliente.empresa ? cliente.empresa : cliente.nombre;
    const vehiculosDisplay = cliente.vehiculos.map(v => `${v.modelo} (${v.placa})`).join('; ');

    row.insertCell().textContent = getClientRecordId(cliente);
    row.insertCell().textContent = displayNombre;
    row.insertCell().textContent = cliente.telefono || 'N/A';
    row.insertCell().textContent = cliente.whatsapp || 'N/A';
    row.insertCell().textContent = vehiculosDisplay || 'Ninguno';
    const actionsCell = row.insertCell();
    actionsCell.className = 'action-buttons';
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'btn-danger';
    deleteBtn.onclick = e => {
      e.stopPropagation();
      eliminarClienteDesdeTabla(getClientRecordId(cliente));
    };
    actionsCell.appendChild(deleteBtn);
  });
}

function filtrarClientes() {
  actualizarTablaClientes();
}

function cargarClienteEnGestion(clientId) {
  openAppDecisionModal({
    title: 'Cargar cliente en el flujo',
    message: 'Se cargará este cliente y su último vehículo en los módulos operativos para continuar el expediente.',
    confirmText: 'Cargar cliente',
    onConfirm: () => {
      openTab(null, 'cotStepCliente');
      const selectCliente = document.getElementById('cargarClienteSelect');
      selectCliente.value = clientId;
      cargarClienteSeleccionado();
    }
  });
}

function eliminarClienteDesdeTabla(clientId) {
  const cliente = findClientByRecordId(clientId);
  openAppDecisionModal({
    title: 'Eliminar cliente y documentos',
    message: `Se eliminará el cliente ${clientId} junto con sus vehículos, cotizaciones y facturas asociadas.`,
    confirmText: 'Eliminar cliente',
    onConfirm: () => {
      clientesGuardados = clientesGuardados.filter(c => getClientRecordId(c) !== clientId);
      cotizacionesGuardadas = cotizacionesGuardadas.filter(cot => cot.cliente.clientId !== clientId && cot.cliente.identificacion !== cliente?.id);
      facturasGuardadas = facturasGuardadas.filter(factura => factura.cliente.clientId !== clientId && factura.cliente.identificacion !== cliente?.id);
      localStorage.setItem(LOCAL_STORAGE_CLIENTES_KEY, JSON.stringify(clientesGuardados));
      localStorage.setItem(LOCAL_STORAGE_COTIZACIONES_KEY, JSON.stringify(cotizacionesGuardadas));
      localStorage.setItem(LOCAL_STORAGE_FACTURAS_KEY, JSON.stringify(facturasGuardadas));
      actualizarTablaClientes();
      actualizarListaClientes();
      actualizarListaCotizacionesHistorial();
      actualizarListaFacturasHistorial();
      renderClienteWorkspace();
      updateDashboard();
      showAppNotice({ title: 'Cliente eliminado', message: 'El cliente y sus documentos asociados fueron eliminados.', kicker: 'Gestión' });
    }
  });
}

function agregarPieza(piezaData = null) {
  const container = document.getElementById('piezasContainer');
  const currentIndex = piezasCounter += 1;

  const nombreVal = piezaData ? piezaData.nombre : '';
  const cantidadVal = piezaData ? piezaData.cantidad : '1';
  const costoVal = piezaData ? piezaData.costoUnitario : '0';
  const margenVal = piezaData ? piezaData.margen : '1.3';

  const html = `
    <div id="pieza-${currentIndex}">
      <label for="piezaNombre${currentIndex}">Nombre de la pieza</label>
      <input type="text" id="piezaNombre${currentIndex}" value="${nombreVal}" required>
      <span class="error-message">Este campo es obligatorio.</span>
      <label for="piezaCantidad${currentIndex}">Cantidad</label>
      <input type="number" id="piezaCantidad${currentIndex}" value="${cantidadVal}" min="1" required>
      <span class="error-message">Ingrese un número positivo.</span>
      <label for="piezaCosto${currentIndex}">Costo unitario (RD$)</label>
      <input type="number" id="piezaCosto${currentIndex}" value="${costoVal}" min="0" step="0.01" required>
      <span class="error-message">Ingrese un número positivo o cero.</span>
      <label for="piezaMargen${currentIndex}">Margen de Ganancia (Ej: 1.3 para 30%)</label>
      <input type="number" id="piezaMargen${currentIndex}" value="${margenVal}" min="1.0" step="0.01" required>
      <span class="error-message">Margen debe ser 1.0 o mayor.</span>
      <button type="button" class="btn-danger" data-action="cotizacion-eliminar-pieza" data-pieza-index="${currentIndex}">Eliminar</button>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', html);
  piezasActivas.push(currentIndex);
  setupValidationListeners();
  updateModuleCompletionIndicators();
}

function eliminarPieza(indexAEliminar) {
  const piezaDiv = document.getElementById(`pieza-${indexAEliminar}`);
  if (piezaDiv) {
    piezaDiv.remove();
    piezasActivas = piezasActivas.filter(id => id !== indexAEliminar);
  }
  calcularTotal();
  updateModuleCompletionIndicators();
}

function guardarServicioCatalogo() {
  const nombre = document.getElementById('nombreServicioCatalogo').value.trim();
  const horas = parseFloat(document.getElementById('horasServicioCatalogo').value);
  const dificultad = parseFloat(document.getElementById('dificultadServicioCatalogo').value);
  const experiencia = parseFloat(document.getElementById('experienciaServicioCatalogo').value);

  if (!nombre || Number.isNaN(horas) || horas <= 0 || Number.isNaN(dificultad) || Number.isNaN(experiencia)) {
    alert('Por favor, completa todos los campos del servicio válidamente.');
    return;
  }

  const servicio = { nombre, horas, dificultad, experiencia };
  const existingIndex = serviciosCatalogo.findIndex(s => s.nombre.toLowerCase() === nombre.toLowerCase());
  if (existingIndex > -1) {
    serviciosCatalogo[existingIndex] = servicio;
    alert(`Servicio "${nombre}" actualizado en el catálogo.`);
  } else {
    if (!isAppUnlocked && serviciosCatalogo.length >= MAX_SERVICIOS_DEMO) {
      alert(`¡Límite de Servicios en Catálogo Alcanzado! Esta es una versión demo y solo puede guardar hasta ${MAX_SERVICIOS_DEMO} servicios.`);
      return;
    }
    serviciosCatalogo.push(servicio);
    alert(`Servicio "${nombre}" guardado en el catálogo.`);
  }
  localStorage.setItem(LOCAL_STORAGE_SERVICIOS_CATALOGO_KEY, JSON.stringify(serviciosCatalogo));
  actualizarListaServiciosCatalogo();
  actualizarListaServiciosCatalogoEnNuevaCotizacion();
}

function cargarServiciosCatalogo() {
  const serviciosGuardadosStr = localStorage.getItem(LOCAL_STORAGE_SERVICIOS_CATALOGO_KEY);
  if (serviciosGuardadosStr) {
    serviciosCatalogo = JSON.parse(serviciosGuardadosStr);
    actualizarListaServiciosCatalogo();
  }
}

function actualizarListaServiciosCatalogo() {
  const selectServicioGestion = document.getElementById('selectServicioCatalogoGestion');
  selectServicioGestion.innerHTML = '<option value="">-- Seleccionar un servicio guardado --</option>';
  serviciosCatalogo.forEach(s => {
    const option = document.createElement('option');
    option.value = s.nombre;
    option.textContent = s.nombre;
    selectServicioGestion.appendChild(option);
  });
}

function actualizarListaServiciosCatalogoEnNuevaCotizacion() {
  const selectServicioNuevaCotizacion = document.getElementById('selectServicioCatalogoNuevaCotizacion');
  selectServicioNuevaCotizacion.innerHTML = '<option value="">-- Seleccionar un servicio --</option>';
  serviciosCatalogo.forEach(s => {
    const option = document.createElement('option');
    option.value = s.nombre;
    option.textContent = s.nombre;
    selectServicioNuevaCotizacion.appendChild(option);
  });
}

function previewServicioCatalogo() {
  const nombreSeleccionado = document.getElementById('selectServicioCatalogoGestion').value;
  const servicio = serviciosCatalogo.find(s => s.nombre === nombreSeleccionado);
  if (servicio) {
    document.getElementById('nombreServicioCatalogo').value = servicio.nombre;
    document.getElementById('horasServicioCatalogo').value = servicio.horas;
    document.getElementById('dificultadServicioCatalogo').value = servicio.dificultad;
    document.getElementById('experienciaServicioCatalogo').value = servicio.experiencia;
  } else {
    document.getElementById('nombreServicioCatalogo').value = '';
    document.getElementById('horasServicioCatalogo').value = '1';
    document.getElementById('dificultadServicioCatalogo').value = '1.2';
    document.getElementById('experienciaServicioCatalogo').value = '1.0';
  }
}

function cargarServicioCatalogoNuevaCotizacion() {
  const nombreSeleccionado = document.getElementById('selectServicioCatalogoNuevaCotizacion').value;
  const servicio = serviciosCatalogo.find(s => s.nombre === nombreSeleccionado);
  if (servicio) {
    document.getElementById('trabajo').value = servicio.nombre;
    normalizeServicioCotizacionState(servicio);
    alert(`Servicio "${servicio.nombre}" cargado en la cotización.`);
  } else {
    document.getElementById('trabajo').value = '';
    normalizeServicioCotizacionState();
  }
}

function eliminarServicioCatalogo() {
  const nombreSeleccionado = document.getElementById('selectServicioCatalogoGestion').value;
  if (!nombreSeleccionado) {
    alert('Por favor, selecciona un servicio para eliminar.');
    return;
  }
  const confirmacion = confirm(`¿Estás seguro de que quieres eliminar el servicio "${nombreSeleccionado}" del catálogo?`);
  if (confirmacion) {
    serviciosCatalogo = serviciosCatalogo.filter(s => s.nombre !== nombreSeleccionado);
    localStorage.setItem(LOCAL_STORAGE_SERVICIOS_CATALOGO_KEY, JSON.stringify(serviciosCatalogo));
    actualizarListaServiciosCatalogo();
    actualizarListaServiciosCatalogoEnNuevaCotizacion();
    previewServicioCatalogo();
    alert('Servicio eliminado exitosamente.');
  }
}

function guardarPiezaCatalogo() {
  const nombre = document.getElementById('nombrePiezaCatalogo').value.trim();
  const costo = parseFloat(document.getElementById('costoPiezaCatalogo').value);
  const margen = parseFloat(document.getElementById('margenPiezaCatalogo').value);

  if (!nombre || Number.isNaN(costo) || costo < 0 || Number.isNaN(margen) || margen < 1) {
    alert('Por favor, completa todos los campos de la pieza válidamente.');
    return;
  }

  const pieza = { nombre, costo, margen };
  const existingIndex = piezasCatalogo.findIndex(p => p.nombre.toLowerCase() === nombre.toLowerCase());
  if (existingIndex > -1) {
    piezasCatalogo[existingIndex] = pieza;
    alert(`Pieza "${nombre}" actualizada en el catálogo.`);
  } else {
    if (!isAppUnlocked && piezasCatalogo.length >= MAX_PIEZAS_DEMO) {
      alert(`¡Límite de Piezas en Catálogo Alcanzado! Esta es una versión demo y solo puede guardar hasta ${MAX_PIEZAS_DEMO} piezas.`);
      return;
    }
    piezasCatalogo.push(pieza);
    alert(`Pieza "${nombre}" guardada en el catálogo.`);
  }
  localStorage.setItem(LOCAL_STORAGE_PIEZAS_CATALOGO_KEY, JSON.stringify(piezasCatalogo));
  actualizarListaPiezasCatalogo();
  actualizarListaPiezasCatalogoEnNuevaCotizacion();
}

function cargarPiezasCatalogo() {
  const piezasGuardadasStr = localStorage.getItem(LOCAL_STORAGE_PIEZAS_CATALOGO_KEY);
  if (piezasGuardadasStr) {
    piezasCatalogo = JSON.parse(piezasGuardadasStr);
    actualizarListaPiezasCatalogo();
  }
}

function actualizarListaPiezasCatalogo() {
  const selectPiezaGestion = document.getElementById('selectPiezaCatalogoGestion');
  selectPiezaGestion.innerHTML = '<option value="">-- Seleccionar una pieza guardada --</option>';
  piezasCatalogo.forEach(p => {
    const option = document.createElement('option');
    option.value = p.nombre;
    option.textContent = p.nombre;
    selectPiezaGestion.appendChild(option);
  });
}

function actualizarListaPiezasCatalogoEnNuevaCotizacion() {
  const selectPiezaNuevaCotizacion = document.getElementById('selectPiezaCatalogoNuevaCotizacion');
  selectPiezaNuevaCotizacion.innerHTML = '<option value="">-- Seleccionar una pieza --</option>';
  piezasCatalogo.forEach(p => {
    const option = document.createElement('option');
    option.value = p.nombre;
    option.textContent = p.nombre;
    selectPiezaNuevaCotizacion.appendChild(option);
  });
}

function previewPiezaCatalogo() {
  const nombreSeleccionado = document.getElementById('selectPiezaCatalogoGestion').value;
  const pieza = piezasCatalogo.find(p => p.nombre === nombreSeleccionado);
  if (pieza) {
    document.getElementById('nombrePiezaCatalogo').value = pieza.nombre;
    document.getElementById('costoPiezaCatalogo').value = pieza.costo;
    document.getElementById('margenPiezaCatalogo').value = pieza.margen;
  } else {
    document.getElementById('nombrePiezaCatalogo').value = '';
    document.getElementById('costoPiezaCatalogo').value = '0';
    document.getElementById('margenPiezaCatalogo').value = '1.3';
  }
}

function cargarPiezaCatalogoNuevaCotizacion() {
  const nombreSeleccionado = document.getElementById('selectPiezaCatalogoNuevaCotizacion').value;
  const pieza = piezasCatalogo.find(p => p.nombre === nombreSeleccionado);
  if (pieza) {
    agregarPieza(pieza);
    alert(`Pieza "${pieza.nombre}" cargada en la cotización.`);
  } else if (nombreSeleccionado !== '') {
    alert('Por favor, selecciona una pieza del catálogo para cargar.');
  }
}

function eliminarPiezaCatalogo() {
  const nombreSeleccionado = document.getElementById('selectPiezaCatalogoGestion').value;
  if (!nombreSeleccionado) {
    alert('Por favor, selecciona una pieza para eliminar.');
    return;
  }
  const confirmacion = confirm(`¿Estás seguro de que quieres eliminar la pieza "${nombreSeleccionado}" del catálogo?`);
  if (confirmacion) {
    piezasCatalogo = piezasCatalogo.filter(p => p.nombre !== nombreSeleccionado);
    localStorage.setItem(LOCAL_STORAGE_PIEZAS_CATALOGO_KEY, JSON.stringify(piezasCatalogo));
    actualizarListaPiezasCatalogo();
    actualizarListaPiezasCatalogoEnNuevaCotizacion();
    previewPiezaCatalogo();
    alert('Pieza eliminada exitosamente.');
  }
}

function calcularTotal() {
  if (!hasSelectedClientAndVehicle() || !isClienteModuleComplete() || !isVehiculoModuleComplete()) {
    alert('Debes tener un cliente y un vehiculo validos cargados antes de calcular la cotizacion.');
    openTab(null, 'cotStepCliente', null, true);
    return false;
  }

  if (!isEntryDataReady()) {
    alert('La cotizacion depende de una Orden de Entrada completa. Completa recepcion antes de calcular.');
    openTab(null, 'cotStepOrden', null, true);
    return false;
  }

  if (!isDiagnosticoModuleComplete()) {
    alert('Completa el diagnostico antes de calcular la cotizacion. Debes registrar el trabajo recomendado y suficiente detalle tecnico.');
    openTab(null, 'cotStepDiagnostico', null, true);
    return false;
  }

  normalizeServicioCotizacionState();

  if (!hasValidRequiredFields('cotStepServicio')) {
    alert('Completa horas estimadas, dificultad y experiencia antes de calcular la cotizacion.');
    openTab(null, 'cotStepServicio', null, true);
    return false;
  }

  const horas = parseFloat(document.getElementById('horas').value);
  const dificultadVal = parseFloat(document.getElementById('dificultad').value);
  const experienciaVal = parseFloat(document.getElementById('experiencia').value);
  const domicilioPayload = getServicioDomicilioPayload();
  const domicilioMonto = domicilioPayload.enabled ? Number(domicilioPayload.amount || 0) : 0;
  const aplicarItbis = configuracionGeneral.aplicarItbis;
  const precioBaseHora = Number(configuracionGeneral.precioBaseHora) || DEFAULT_PRECIO_BASE_HORA;
  const itbisRate = (Number(configuracionGeneral.porcentajeItbis) || DEFAULT_ITBIS_PERCENT) / 100;
  const precioManoObra = horas * precioBaseHora * dificultadVal * experienciaVal;
  let totalPiezasVenta = 0;
  const piezasPrintBody = document.getElementById('piezasPrint');
  piezasPrintBody.innerHTML = '';

  document.getElementById('pHorasServicio').textContent = `${horas} hrs`;
  document.getElementById('pPrecioManoObraUnit').textContent = `RD$ ${(precioManoObra / horas).toFixed(2)}`;
  document.getElementById('pPrecioServicio').textContent = `RD$ ${precioManoObra.toFixed(2)}`;

  let allPiecesValid = true;
  piezasActivas.forEach(i => {
    const nombreInput = document.getElementById(`piezaNombre${i}`);
    const cantidadInput = document.getElementById(`piezaCantidad${i}`);
    const costoInput = document.getElementById(`piezaCosto${i}`);
    const margenInput = document.getElementById(`piezaMargen${i}`);

    if (!nombreInput || !cantidadInput || !costoInput || !margenInput) {
      allPiecesValid = false;
      return;
    }

    const nombre = nombreInput.value.trim();
    const cantidad = parseFloat(cantidadInput.value);
    const costoUnitario = parseFloat(costoInput.value);
    const margen = parseFloat(margenInput.value);

    if (!nombre || Number.isNaN(cantidad) || cantidad <= 0 || Number.isNaN(costoUnitario) || costoUnitario < 0 || Number.isNaN(margen) || margen < 1) {
      alert(`Por favor, ingresa valores válidos (nombre, cantidad > 0, costo >= 0, margen >= 1.0) para la pieza "${nombre || 'sin nombre'}".`);
      allPiecesValid = false;
      return;
    }

    const precioVentaUnitario = costoUnitario * margen;
    const subtotalPiezaVenta = cantidad * precioVentaUnitario;

    totalPiezasVenta += subtotalPiezaVenta;

    const fila = `<tr>
      <td>${nombre}</td>
      <td>${cantidad}</td>
      <td>RD$ ${precioVentaUnitario.toFixed(2)}</td>
      <td>RD$ ${subtotalPiezaVenta.toFixed(2)}</td>
    </tr>`;
    piezasPrintBody.insertAdjacentHTML('beforeend', fila);
  });

  if (!allPiecesValid) {
    return false;
  }

  if (domicilioPayload.enabled && domicilioMonto > 0) {
    const filaDomicilio = `<tr>
      <td>${formatServicioDomicilioConcept(domicilioPayload)}</td>
      <td>1</td>
      <td>RD$ ${domicilioMonto.toFixed(2)}</td>
      <td>RD$ ${domicilioMonto.toFixed(2)}</td>
    </tr>`;
    piezasPrintBody.insertAdjacentHTML('beforeend', filaDomicilio);
  }

  const subtotalGeneral = precioManoObra + domicilioMonto + totalPiezasVenta;
  let itbis = 0;
  let totalConItbis = subtotalGeneral;

  if (aplicarItbis === 'si') {
    itbis = subtotalGeneral * itbisRate;
    totalConItbis = subtotalGeneral + itbis;
    document.getElementById('pItbisContainer').classList.remove('hidden');
  } else {
    document.getElementById('pItbisContainer').classList.add('hidden');
  }

  document.getElementById('resultado').textContent = `Total: RD$ ${totalConItbis.toFixed(2)}`;
  document.getElementById('pNombreCliente').textContent = document.getElementById('nombreCliente').value.trim();
  document.getElementById('pTipoIdentificacion').textContent = document.getElementById('tipoIdentificacion').value === 'rnc' ? 'RNC' : 'Cédula';
  document.getElementById('pIdentificacion').textContent = document.getElementById('identificacion').value.trim();
  document.getElementById('pTelefonoCliente').textContent = document.getElementById('telefonoCliente').value.trim();
  document.getElementById('pWhatsappCliente').textContent = document.getElementById('whatsappCliente').value.trim();

  const pNombreEmpresaContainer = document.getElementById('pNombreEmpresaContainer');
  if (document.getElementById('tipoIdentificacion').value === 'rnc') {
    document.getElementById('pNombreEmpresa').textContent = document.getElementById('nombreEmpresa').value.trim();
    pNombreEmpresaContainer.classList.remove('hidden');
  } else {
    pNombreEmpresaContainer.classList.add('hidden');
  }

  document.getElementById('pTrabajo').textContent = document.getElementById('trabajo').value.trim();
  document.getElementById('pVehiculoModelo').textContent = document.getElementById('vehiculoModelo').value.trim();
  document.getElementById('pVehiculoAnio').textContent = document.getElementById('vehiculoAnio').value.trim();
  document.getElementById('pVehiculoCombustible').textContent = document.getElementById('vehiculoCombustible').value.trim();
  document.getElementById('pVehiculoChasis').textContent = document.getElementById('vehiculoChasis').value.trim();
  document.getElementById('pVehiculoPlaca').textContent = document.getElementById('vehiculoPlaca').value.trim();

  const ordenEntradaPayload = getOrdenEntradaPayload();
  document.getElementById('pCombustibleActual').textContent = ordenEntradaPayload.combustibleLabel;
  document.getElementById('pMillajeEntrada').textContent = document.getElementById('millajeEntrada').value.trim() || 'N/D';
  document.getElementById('pEnciende').textContent = document.querySelector('input[name="enciende"]:checked')?.value || 'N/D';
  document.getElementById('pModoLlegada').textContent = document.querySelector('input[name="modoLlegada"]:checked')?.value || 'N/D';
  document.getElementById('pObservacionesEntrada').textContent = document.getElementById('observacionesEntrada').value.trim() || 'N/D';
  document.getElementById('pMotivoEntrada').textContent = document.getElementById('motivoEntrada').value.trim() || 'N/D';
  renderPrintableOrdenEntrada(ordenEntradaPayload);
  document.getElementById('pDiagnosticoInicial').textContent = document.getElementById('diagnosticoInicial').value.trim() || 'Pendiente de diagnostico';
  document.getElementById('pSintomasReportados').textContent = document.getElementById('sintomasReportados').value.trim() || 'N/D';
  document.getElementById('pPruebasRealizadas').textContent = document.getElementById('pruebasRealizadas').value.trim() || 'N/D';
  document.getElementById('pCausaProbable').textContent = document.getElementById('causaProbable').value.trim() || 'N/D';
  document.getElementById('pPrioridadDiagnostico').textContent = getDiagnosticoPriorityLabel(document.getElementById('prioridadDiagnostico').value || 'media');
  renderPrintableDiagnosticFindings();

  document.getElementById('pSubtotal').textContent = subtotalGeneral.toFixed(2);
  document.getElementById('pItbis').textContent = itbis.toFixed(2);
  document.getElementById('pTotal').textContent = totalConItbis.toFixed(2);
  document.getElementById('pItbisLabel').textContent = obtenerEtiquetaItbis();
  document.getElementById('fItbisLabel').textContent = obtenerEtiquetaItbis();
  document.getElementById('pEmitidoPor').textContent = configuracionGeneral.emitidoPor;
  document.getElementById('pFechaPrintHeader').textContent = new Date(document.getElementById('fecha').value).toLocaleDateString('es-DO', { day: '2-digit', month: '2-digit', year: 'numeric' });
  document.getElementById('pValidezCotizacion').textContent = `${Number(configuracionGeneral.diasValidezCotizacion) || 7} días`;
  actualizarDatosEmpresaEnImpresion();

  const printNotesList = document.getElementById('printNotesList');
  printNotesList.innerHTML = '';
  const notasTexto = configuracionGeneral.notasImportantes;
  const ulNotas = generarListaNotasParaImpresion(notasTexto);
  Array.from(ulNotas.children).forEach(li => printNotesList.appendChild(li.cloneNode(true)));

  const printLogo = document.getElementById('printLogo');
  const printLogoSrc = getConfiguredPrintLogo();
  if (printLogoSrc) {
    printLogo.src = printLogoSrc;
    printLogo.style.display = 'block';
  } else {
    printLogo.removeAttribute('src');
    printLogo.style.display = 'none';
  }

  updateModuleCompletionIndicators();
  return true;
}

function guardarCotizacion() {
  if (!calcularTotal()) {
    alert('No se puede guardar la cotización. Por favor, corrige los errores.');
    return;
  }

  if (!isDiagnosticDataReady()) {
    alert('La cotizacion solo se puede guardar cuando Cliente/Vehiculo, Entrada y Diagnostico esten completos.');
    return;
  }

  const existingCotizacionIndex = currentLoadedCotizacionId
    ? cotizacionesGuardadas.findIndex(cotizacion => cotizacion.id === currentLoadedCotizacionId)
    : -1;
  const isEditingExistingCotizacion = existingCotizacionIndex >= 0;

  if (!isEditingExistingCotizacion && !isAppUnlocked && cotizacionesGuardadas.length >= MAX_COTIZACIONES_DEMO) {
    alert(`¡Límite de Cotizaciones Alcanzado! Esta es una versión demo y solo puede guardar hasta ${MAX_COTIZACIONES_DEMO} cotizaciones. Elimina una cotización existente para guardar una nueva.`);
    return;
  }

  const diagnosticoPayload = getDiagnosticoPayload();
  const currentStatus = getCurrentCotizacionStatusUI();
  currentCotizacionApprovalConfig = normalizeCotizacionApprovalConfig(currentCotizacionApprovalConfig, getCurrentQuotePiecesSnapshot(), currentStatus);
  const cotizacionId = isEditingExistingCotizacion ? cotizacionesGuardadas[existingCotizacionIndex].id : `COT-${Date.now()}`;
  const cotizacion = {
    id: cotizacionId,
    fecha: document.getElementById('fecha').value,
    ordenEntradaId: currentLoadedEntryOrderId,
    cliente: {
      clientId: currentLoadedClientId,
      tipoIdentificacion: document.getElementById('tipoIdentificacion').value,
      identificacion: document.getElementById('identificacion').value.trim(),
      nombreCliente: document.getElementById('nombreCliente').value.trim(),
      nombreEmpresa: document.getElementById('nombreEmpresa').value.trim(),
      telefono: document.getElementById('telefonoCliente').value.trim(),
      telefonoOficina: document.getElementById('telefonoOficinaCliente').value.trim(),
      whatsapp: document.getElementById('whatsappCliente').value.trim(),
      email: document.getElementById('emailCliente').value.trim()
    },
    vehiculo: {
      vehicleId: currentLoadedVehicleId,
      marca: document.getElementById('vehiculoMarca').value.trim(),
      modelo: document.getElementById('vehiculoModelo').value.trim(),
      anio: document.getElementById('vehiculoAnio').value.trim(),
      combustible: document.getElementById('vehiculoCombustible').value.trim(),
      chasis: document.getElementById('vehiculoChasis').value.trim(),
      placa: document.getElementById('vehiculoPlaca').value.trim(),
      color: document.getElementById('vehiculoColor').value.trim()
    },
    servicio: {
      trabajo: document.getElementById('trabajo').value.trim(),
      horas: parseFloat(document.getElementById('horas').value),
      dificultad: parseFloat(document.getElementById('dificultad').value),
      experiencia: parseFloat(document.getElementById('experiencia').value),
      domicilio: getServicioDomicilioPayload()
    },
    ordenEntrada: getOrdenEntradaPayload(),
    diagnostico: diagnosticoPayload,
    seguimiento: {
      estatusTrabajo: normalizeSeguimientoStatus(document.getElementById('estatusTrabajo').value),
      trabajoProceso: document.getElementById('trabajoProceso').value.trim(),
      trabajoRealizado: document.getElementById('trabajoRealizado').value.trim(),
      tecnicoResponsable: document.getElementById('tecnicoResponsable').value.trim(),
      fechaEntregaEstimada: document.getElementById('fechaEntregaEstimada').value,
      fechaEntregaReal: document.getElementById('fechaEntregaReal').value,
      controlCalidad: getSeguimientoQualityPayload()
    },
    salida: getSalidaPayload(),
    piezas: piezasActivas.map(i => {
      const nombre = document.getElementById(`piezaNombre${i}`).value.trim();
      const cantidad = parseFloat(document.getElementById(`piezaCantidad${i}`).value);
      const costoUnitario = parseFloat(document.getElementById(`piezaCosto${i}`).value);
      const margen = parseFloat(document.getElementById(`piezaMargen${i}`).value);
      const precioVentaUnitario = costoUnitario * margen;
      const subtotalPiezaVenta = cantidad * precioVentaUnitario;

      return {
        index: i,
        nombre,
        cantidad,
        costoUnitario,
        margen,
        precioVentaUnitario,
        subtotalPiezaVenta
      };
    }),
    opcionesFacturacion: {
      aplicarItbis: configuracionGeneral.aplicarItbis,
      emitidoPor: configuracionGeneral.emitidoPor,
      notasImportantes: configuracionGeneral.notasImportantes
    },
    subtotal: parseFloat(document.getElementById('pSubtotal').textContent),
    itbis: parseFloat(document.getElementById('pItbis').textContent),
    totalFinal: parseFloat(document.getElementById('pTotal').textContent),
    status: currentStatus,
    approval: currentCotizacionApprovalConfig
  };

  if (isEditingExistingCotizacion) {
    cotizacionesGuardadas.splice(existingCotizacionIndex, 1, cotizacion);
  } else {
    cotizacionesGuardadas.push(cotizacion);
  }
  currentLoadedCotizacionId = cotizacion.id;
  localStorage.setItem(LOCAL_STORAGE_COTIZACIONES_KEY, JSON.stringify(cotizacionesGuardadas));
  clearModuleDraft();
  actualizarListaCotizacionesHistorial();
  updateDashboard();
  showAppNotice({
    title: isEditingExistingCotizacion ? 'Cotización actualizada' : 'Cotización guardada',
    message: `Expediente ${cotizacion.id} listo. Total de cotizaciones guardadas: ${cotizacionesGuardadas.length}.`,
    kicker: 'Cotización'
  });
}

function cargarCotizacionesGuardadas() {
  const cotizacionesGuardadasStr = localStorage.getItem(LOCAL_STORAGE_COTIZACIONES_KEY);
  if (cotizacionesGuardadasStr) {
    cotizacionesGuardadas = JSON.parse(cotizacionesGuardadasStr);
    actualizarListaCotizacionesHistorial();
  }
}

function actualizarListaCotizacionesHistorial() {
  const tableBody = document.getElementById('listaCotizacionesTable');
  tableBody.innerHTML = '';
  const filtro = document.getElementById('filtroCotizaciones').value.toLowerCase();
  const estadoFiltro = document.getElementById('filtroEstadoCotizacion').value;

  if (cotizacionesGuardadas.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="7" class="text-center">No hay cotizaciones guardadas.</td></tr>';
    return;
  }

  const cotizacionesFiltradas = cotizacionesGuardadas.filter(cot => {
    const matchesFilter = (
      cot.id.toLowerCase().includes(filtro) ||
      (cot.cliente.nombreCliente || '').toLowerCase().includes(filtro) ||
      (cot.cliente.nombreEmpresa && cot.cliente.nombreEmpresa.toLowerCase().includes(filtro)) ||
      cot.vehiculo.placa.toLowerCase().includes(filtro) ||
      cot.vehiculo.modelo.toLowerCase().includes(filtro)
    );
    const matchesStatus = estadoFiltro === 'todos' || cot.status === estadoFiltro;
    return matchesFilter && matchesStatus;
  }).sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

  if (cotizacionesFiltradas.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="7" class="text-center">No se encontraron cotizaciones con ese filtro y estado.</td></tr>';
    return;
  }

  cotizacionesFiltradas.forEach(cot => {
    const row = tableBody.insertRow();
    row.dataset.cotId = cot.id;

    const displayNombreCliente = cot.cliente.tipoIdentificacion === 'rnc' && cot.cliente.nombreEmpresa ? cot.cliente.nombreEmpresa : cot.cliente.nombreCliente;
    const normalizedCommercialStatus = getCotizacionCommercialStatus(cot);
    const commercialStatus = getCommercialStatusMeta(normalizedCommercialStatus);
    const approvedTotals = getCotizacionApprovedTotals(cot);

    row.insertCell().textContent = cot.id;
    row.insertCell().textContent = cot.fecha;
    row.insertCell().textContent = displayNombreCliente;
    row.insertCell().textContent = `${cot.vehiculo.modelo} (${cot.vehiculo.placa})`;
    row.insertCell().textContent = `RD$ ${(isCommercialStatusInvoiceable(normalizedCommercialStatus) ? approvedTotals.totalFinal : cot.totalFinal).toFixed(2)}`;
    const statusCell = row.insertCell();
    statusCell.innerHTML = `<span class="${getBadgeClass(commercialStatus.tone)}">${commercialStatus.label}</span>`;

    const actionsCell = row.insertCell();
    actionsCell.className = 'action-buttons';

    const loadBtn = document.createElement('button');
    loadBtn.textContent = 'Cargar';
    loadBtn.className = 'btn-primary';
    loadBtn.onclick = e => {
      e.stopPropagation();
      cargarCotizacionById(cot.id);
    };
    actionsCell.appendChild(loadBtn);

    const statusBtn = document.createElement('button');
    statusBtn.textContent = 'Cambiar Estado';
    statusBtn.className = 'btn-warning';
    statusBtn.onclick = e => {
      e.stopPropagation();
      cambiarEstadoCotizacion(cot.id);
    };
    actionsCell.appendChild(statusBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'btn-danger';
    deleteBtn.onclick = e => {
      e.stopPropagation();
      eliminarCotizacionHistorial(cot.id);
    };
    actionsCell.appendChild(deleteBtn);

    if (isCommercialStatusInvoiceable(normalizedCommercialStatus)) {
      const facturaExistente = getFacturaByCotizacionId(cot.id);
      const invoiceState = canInvoiceCotizacion(cot);
      const facturarBtn = document.createElement('button');
      facturarBtn.textContent = facturaExistente ? '✅ Facturada' : (invoiceState.allowed ? '🧾 Facturar' : '⛔ Bloqueada');
      facturarBtn.className = facturaExistente ? 'btn-secondary' : (invoiceState.allowed ? 'btn-facturar' : 'btn-warning');
      facturarBtn.disabled = Boolean(facturaExistente) || !invoiceState.allowed;
      facturarBtn.title = facturaExistente ? `Facturada como ${facturaExistente.id}` : (invoiceState.reason || 'Lista para facturar');
      facturarBtn.onclick = e => {
        e.stopPropagation();
        convertirAFactura(cot.id);
      };
      actionsCell.appendChild(facturarBtn);
    }
  });
}

function filtrarCotizaciones() {
  actualizarListaCotizacionesHistorial();
}

function cargarCotizacionById(idCotizacion) {
  const cotizacion = cotizacionesGuardadas.find(c => c.id === idCotizacion);
  if (!cotizacion) {
    alert('No se pudo encontrar la cotización seleccionada.');
    return;
  }

  currentLoadedCotizacionId = cotizacion.id;

  openTab(null, 'cotStepCliente');
  document.getElementById('tipoIdentificacion').value = cotizacion.cliente.tipoIdentificacion;
  mostrarOcultarCampos();
  document.getElementById('identificacion').value = cotizacion.cliente.identificacion;
  document.getElementById('nombreCliente').value = cotizacion.cliente.nombreCliente;
  document.getElementById('nombreEmpresa').value = cotizacion.cliente.nombreEmpresa || '';
  document.getElementById('telefonoCliente').value = cotizacion.cliente.telefono || '';
  document.getElementById('telefonoOficinaCliente').value = cotizacion.cliente.telefonoOficina || '';
  document.getElementById('whatsappCliente').value = cotizacion.cliente.whatsapp || '';
  document.getElementById('emailCliente').value = cotizacion.cliente.email || '';

  const clienteRelacionado = findClientByRecordId(cotizacion.cliente.clientId) || findClientByIdentification(cotizacion.cliente.identificacion);
  cargarCamposVehiculo(cotizacion.vehiculo);
  currentLoadedClientId = clienteRelacionado ? getClientRecordId(clienteRelacionado) : (cotizacion.cliente.clientId || null);
  actualizarListaVehiculosClienteActual(currentLoadedClientId);
  currentLoadedVehicleId = cotizacion.vehiculo.vehicleId || null;
  if (!currentLoadedVehicleId && clienteRelacionado) {
    const vehiculoRelacionado = clienteRelacionado.vehiculos.find(vehiculo => vehiculo.chasis === cotizacion.vehiculo.chasis || vehiculo.placa === cotizacion.vehiculo.placa);
    currentLoadedVehicleId = vehiculoRelacionado ? getVehicleRecordId(vehiculoRelacionado) : null;
  }
  currentLoadedEntryOrderId = cotizacion.ordenEntradaId || null;
  document.getElementById('cargarVehiculoClienteSelect').value = currentLoadedVehicleId || '';
  document.getElementById('cargarClienteSelect').value = currentLoadedClientId || '';
  actualizarIndicadoresClienteVehiculo();
  renderOrdenEntradaContext();
  renderClienteWorkspace();

  document.getElementById('trabajo').value = cotizacion.servicio.trabajo;
  normalizeServicioCotizacionState(cotizacion.servicio);

  piezasActivas = [];
  document.getElementById('piezasContainer').innerHTML = '';
  cotizacion.piezas.forEach(pieza => agregarPieza(pieza));

  if (cotizacion.ordenEntrada) {
    loadOrdenEntradaState(cotizacion.ordenEntrada);
  }

  if (cotizacion.diagnostico) {
    loadDiagnosticoState(cotizacion.diagnostico, { trabajoFallback: cotizacion.servicio.trabajo });
  } else {
    loadDiagnosticoState({});
  }

  if (cotizacion.seguimiento) {
    setSeguimientoStatus(cotizacion.seguimiento.estatusTrabajo || 'en_espera');
    document.getElementById('trabajoProceso').value = cotizacion.seguimiento.trabajoProceso || '';
    document.getElementById('trabajoRealizado').value = cotizacion.seguimiento.trabajoRealizado || '';
    document.getElementById('tecnicoResponsable').value = cotizacion.seguimiento.tecnicoResponsable || '';
    document.getElementById('fechaEntregaEstimada').value = cotizacion.seguimiento.fechaEntregaEstimada || '';
    document.getElementById('fechaEntregaReal').value = cotizacion.seguimiento.fechaEntregaReal || '';
    loadSeguimientoQualityState(cotizacion.seguimiento.controlCalidad || { fecha: getCurrentDateISO() });
  } else {
    setSeguimientoStatus('en_espera');
    document.getElementById('tecnicoResponsable').value = '';
    loadSeguimientoQualityState({ fecha: getCurrentDateISO() });
  }

  if (cotizacion.salida) {
    loadSalidaState(cotizacion.salida);
  } else {
    loadSalidaState({});
  }

  document.getElementById('fecha').value = cotizacion.fecha;
  currentCotizacionApprovalConfig = normalizeCotizacionApprovalConfig(cotizacion.approval || {}, cotizacion.piezas || [], cotizacion.status || 'pendiente');
  setCotizacionStatusUI(cotizacion.status || 'pendiente');

  persistModuleDraft();
  calcularTotal();
  openCotStep(null, 'cotStepCliente');
  updateModuleCompletionIndicators();
  showAppNotice({ title: 'Cotización cargada', message: `El expediente ${cotizacion.id} fue cargado en los módulos operativos.`, kicker: 'Expediente' });
}

function cambiarEstadoCotizacion(idCotizacion) {
  const cotizacion = cotizacionesGuardadas.find(c => c.id === idCotizacion);
  if (!cotizacion) {
    showAppNotice({ title: 'Cotización no encontrada', message: 'No se pudo encontrar la cotización seleccionada.', kicker: 'Error' });
    return;
  }

  currentCotizacionApprovalConfig = normalizeCotizacionApprovalConfig(cotizacion.approval || {}, cotizacion.piezas || [], cotizacion.status || 'pendiente');
  openQuoteApprovalModal(idCotizacion);
}

function eliminarCotizacionHistorial(idCotizacion) {
  openAppDecisionModal({
    title: 'Eliminar cotización',
    message: `La cotización ${idCotizacion} saldrá del historial y no podrá recuperarse.`,
    confirmText: 'Eliminar cotización',
    onConfirm: () => {
      cotizacionesGuardadas = cotizacionesGuardadas.filter(cot => cot.id !== idCotizacion);
      if (currentLoadedCotizacionId === idCotizacion) {
        currentLoadedCotizacionId = null;
      }
      localStorage.setItem(LOCAL_STORAGE_COTIZACIONES_KEY, JSON.stringify(cotizacionesGuardadas));
      actualizarListaCotizacionesHistorial();
      updateDashboard();
      showAppNotice({ title: 'Cotización eliminada', message: `La cotización ${idCotizacion} fue retirada del historial.`, kicker: 'Gestión' });
    }
  });
}

function imprimirCotizacion() {
  if (!calcularTotal()) {
    alert('No se puede imprimir. Por favor, corrige los errores en la cotización.');
    return;
  }

  if (shouldWarnForMissingPrintLogo()) {
    notifyMissingPrintLogo('La cotizacion');
  }

  const tempDiv = prepareCotizacionPrintableClone();
  if (!tempDiv) {
    return;
  }

  const html = buildConfigurablePrintHtml({
    windowTitle: 'Cotización de Servicio',
    kicker: 'CarsystemRD',
    documentTitle: 'Cotizacion de Servicio',
    subtitle: 'Resumen comercial para aprobacion del cliente.',
    meta: buildCotizacionPrintMeta(document.getElementById('pFechaPrintHeader')?.textContent || 'N/D'),
    bodyHtml: tempDiv.innerHTML
  });

  openPrintPreviewWindow({ title: 'Cotización de Servicio', html, width: 980, height: 760 });
}

function shouldWarnForMissingPrintLogo() {
  const templateConfig = normalizePrintTemplateConfig(configuracionGeneral.plantillaImpresion);
  return templateConfig.showLogo;
}

function replaceTemplateTokens(templateHtml, replacements) {
  return Object.entries(replacements).reduce((html, [token, value]) => html.replaceAll(token, value), templateHtml);
}

function buildPrintMetaHtml(meta = [], showMeta = true) {
  if (!showMeta || !Array.isArray(meta) || meta.length === 0) {
    return '<div></div>';
  }

  return `
    <aside class="print-shell-meta">
      ${meta.map(item => `
        <div class="print-shell-meta-row">
          <span>${escapeHtml(item.label || '')}</span>
          <strong>${escapeHtml(item.value || 'N/D')}</strong>
        </div>
      `).join('')}
    </aside>
  `;
}

function buildConfigurablePrintHtml({ windowTitle, kicker = 'CarsystemRD', documentTitle, subtitle = '', meta = [], bodyHtml = '', footerText = '', companyName = configuracionGeneral.nombreEmpresaPrint, extraStyles = '' } = {}) {
  const template = document.getElementById('configurablePrintShellTemplate');
  const templateConfig = normalizePrintTemplateConfig(configuracionGeneral.plantillaImpresion);
  const templateHtml = template?.innerHTML || '<html><head><title>__PRINT_WINDOW_TITLE__</title></head><body>__PRINT_BODY_HTML__</body></html>';
  const logoSrc = templateConfig.showLogo ? getConfiguredPrintLogo() : null;
  const contactLine = templateConfig.showContact ? obtenerLineaContactoEmpresa() : '';
  const addressLine = templateConfig.showAddress ? configuracionGeneral.direccionEmpresa : '';
  const footerContent = String(footerText || templateConfig.footerText || '').trim();
  const composedBodyHtml = `${extraStyles ? `<style>${extraStyles}</style>` : ''}${bodyHtml}`;

  return replaceTemplateTokens(templateHtml, {
    '__PRINT_WINDOW_TITLE__': escapeHtml(windowTitle || documentTitle || 'Documento'),
    '__PRINT_PAGE_SIZE__': escapeHtml(templateConfig.paperSize),
    '__PRINT_PAGE_MARGIN_MM__': String(templateConfig.pageMarginMm),
    '__PRINT_PRIMARY_COLOR__': escapeHtml(templateConfig.primaryColor),
    '__PRINT_ACCENT_COLOR__': escapeHtml(templateConfig.accentColor),
    '__PRINT_FONT_STACK__': getPrintFontStack(templateConfig.fontFamily),
    '__PRINT_BASE_FONT_SIZE_PX__': String(templateConfig.baseFontSize),
    '__PRINT_BORDER_RADIUS_PX__': String(templateConfig.borderRadius),
    '__PRINT_DENSITY_CLASS__': templateConfig.density === 'comfortable' ? 'density-comfortable' : 'density-compact',
    '__PRINT_HEADER_LAYOUT_CLASS__': templateConfig.headerLayout === 'stacked' ? 'header-layout-stacked' : 'header-layout-inline',
    '__PRINT_FOOTER_ALIGN_CLASS__': `footer-align-${templateConfig.footerAlign}`,
    '__PRINT_SECTION_TITLE_CLASS__': `section-title-style-${templateConfig.sectionTitleStyle}`,
    '__PRINT_KICKER_CLASS__': templateConfig.showKicker ? 'kicker-visible' : 'kicker-hidden',
    '__PRINT_LOGO_HTML__': logoSrc ? `<img src="${logoSrc}" alt="Logo de la Empresa">` : '',
    '__PRINT_KICKER__': escapeHtml(kicker || 'CarsystemRD'),
    '__PRINT_COMPANY_NAME__': escapeHtml(companyName || 'CarsystemRD'),
    '__PRINT_DOCUMENT_TITLE__': escapeHtml(documentTitle || 'Documento'),
    '__PRINT_SUBTITLE_HTML__': subtitle ? `<p>${escapeHtml(subtitle)}</p>` : '',
    '__PRINT_CONTACT_HTML__': contactLine ? `<p>${escapeHtml(contactLine)}</p>` : '',
    '__PRINT_ADDRESS_HTML__': addressLine ? `<p>${escapeHtml(addressLine)}</p>` : '',
    '__PRINT_META_HTML__': buildPrintMetaHtml(meta, templateConfig.showHeaderMeta),
    '__PRINT_BODY_HTML__': composedBodyHtml,
    '__PRINT_FOOTER_HTML__': footerContent ? `<footer class="print-shell-footer">${escapeHtml(footerContent)}</footer>` : ''
  });
}

function buildPrintableBodyClone(elementId, sectionsToRemove = []) {
  const root = document.getElementById(elementId);
  if (!root) {
    return null;
  }

  const tempDiv = root.cloneNode(true);
  sectionsToRemove.forEach(selector => {
    const node = tempDiv.querySelector(selector);
    if (node) {
      node.remove();
    }
  });
  return tempDiv;
}

function prepareCotizacionPrintableClone(root = null) {
  const tempDiv = root || document.getElementById('printableArea')?.cloneNode(true);
  if (!tempDiv) {
    return null;
  }

  ['.print-header', 'hr', '#printCotizacionEntradaSection', '#printCotizacionDiagnosticoSection'].forEach(selector => {
    const node = tempDiv.querySelector(selector);
    if (node) {
      node.remove();
    }
  });

  const clonedPrintNotesList = tempDiv.querySelector('#printNotesList');
  if (clonedPrintNotesList) {
    clonedPrintNotesList.innerHTML = '';
    const ulNotas = generarListaNotasParaImpresion(configuracionGeneral.notasImportantes);
    Array.from(ulNotas.children).forEach(li => clonedPrintNotesList.appendChild(li.cloneNode(true)));
  }

  return tempDiv;
}

function prepareFacturaPrintableClone(root = null) {
  const tempDiv = root || buildPrintableBodyClone('printableFacturaArea', ['.print-header', 'hr']);
  if (!tempDiv) {
    return null;
  }
  ['.print-header', 'hr'].forEach(selector => {
    const node = tempDiv.querySelector(selector);
    if (node) {
      node.remove();
    }
  });
  const titleNode = tempDiv.querySelector('#fNombreEmpresaPrint');
  if (titleNode) {
    titleNode.textContent = configuracionGeneral.nombreEmpresaPrint;
  }
  return tempDiv;
}

function prepareSalidaPrintableClone(root = null) {
  const tempDiv = root || buildPrintableBodyClone('printableSalidaArea', ['.print-header', 'hr']);
  if (!tempDiv) {
    return null;
  }
  ['.print-header', 'hr'].forEach(selector => {
    const node = tempDiv.querySelector(selector);
    if (node) {
      node.remove();
    }
  });
  return tempDiv;
}

function buildCotizacionPrintMeta(fechaDisplay) {
  return [
    { label: 'Fecha', value: fechaDisplay || 'N/D' },
    { label: 'Validez', value: `${Number(configuracionGeneral.diasValidezCotizacion) || 7} dias` },
    { label: 'Emitido por', value: configuracionGeneral.emitidoPor || 'N/D' }
  ];
}

function buildFacturaPrintMeta(factura) {
  return [
    { label: 'Factura', value: factura?.id || 'N/D' },
    { label: 'Fecha', value: factura?.fecha || 'N/D' },
    { label: 'Emitido por', value: factura?.opcionesFacturacion?.emitidoPor || configuracionGeneral.emitidoPor || 'N/D' }
  ];
}

function buildSalidaPrintMeta(salida) {
  return [
    { label: 'Entrega', value: salida?.fechaSalida || 'N/D' },
    { label: 'Entregado por', value: salida?.entregadoPorTaller || 'N/D' },
    { label: 'Recibido por', value: salida?.recibidoPorCliente || 'N/D' }
  ];
}

function generarListaNotasParaImpresion(notasTexto) {
  const ul = document.createElement('ul');
  const notasArray = (notasTexto || '').split('\n').filter(line => line.trim() !== '');
  notasArray.forEach(nota => {
    const li = document.createElement('li');
    li.textContent = nota.trim();
    ul.appendChild(li);
  });
  return ul;
}

function openPrintPreviewWindow({ title, html, width = 900, height = 700 }) {
  const win = window.open('', '', `width=${width},height=${height}`);
  if (!win) {
    alert('No se pudo abrir la ventana de impresión.');
    return;
  }

  win.document.write(html);
  win.document.close();
  printWindowWhenReady(win);
}

function printWindowWhenReady(win) {
  if (!win) {
    return;
  }

  let alreadyPrinted = false;
  const triggerPrint = () => {
    if (alreadyPrinted || win.closed) {
      return;
    }

    alreadyPrinted = true;
    win.focus();
    win.print();
  };

  const imagePromises = Array.from(win.document.images || []).map(image => {
    if (image.complete) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
    });
  });

  const fontsPromise = win.document.fonts?.ready
    ? win.document.fonts.ready.catch(() => undefined)
    : Promise.resolve();

  Promise.all([...imagePromises, fontsPromise])
    .then(() => {
      win.requestAnimationFrame(() => {
        win.requestAnimationFrame(triggerPrint);
      });
    })
    .catch(triggerPrint);

  win.addEventListener('load', () => {
    Promise.resolve().then(() => {
      if (!alreadyPrinted) {
        triggerPrint();
      }
    });
  }, { once: true });
}

function getSamplePrintPreviewData() {
  const todayIso = getCurrentDateISO();
  const formattedDate = new Date(todayIso).toLocaleDateString('es-DO', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const subtotal = 12250;
  const itbis = configuracionGeneral.aplicarItbis === 'si'
    ? subtotal * ((Number(configuracionGeneral.porcentajeItbis) || DEFAULT_ITBIS_PERCENT) / 100)
    : 0;
  const total = subtotal + itbis;

  return {
    fechaIso: todayIso,
    fechaDisplay: formattedDate,
    cliente: {
      nombreCliente: 'Jorge Luis Hidalgo',
      tipoIdentificacion: 'Cédula',
      identificacion: '40246815381',
      telefono: '8098909283',
      whatsapp: '8296985143'
    },
    vehiculo: {
      marca: 'Toyota',
      modelo: 'TOYOTA COROLLA',
      anio: '2015',
      combustible: 'Gasolina',
      chasis: 'A12312312312352147',
      placa: 'B1598756',
      color: 'Gris'
    },
    servicio: {
      trabajo: 'Mantenimiento preventivo, cambio de aceite, filtros y revisión general',
      horas: 2,
      precioUnitario: subtotal / 2,
      totalServicio: subtotal
    },
    piezas: [
      { nombre: 'Filtro de aceite', cantidad: 1, precioVentaUnitario: 650, subtotalPiezaVenta: 650 },
      { nombre: 'Aceite sintético 5W-30', cantidad: 4, precioVentaUnitario: 850, subtotalPiezaVenta: 3400 },
      { nombre: 'Filtro de aire', cantidad: 1, precioVentaUnitario: 1200, subtotalPiezaVenta: 1200 }
    ],
    subtotal,
    itbis,
    total,
    factura: {
      id: 'FAC-PRUEBA-001',
      cotizacionId: 'COT-PRUEBA-001'
    },
    entrada: {
      id: 'ENT-PRUEBA-001',
      savedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      fecha: todayIso,
      cliente: {
        tipoIdentificacion: 'cedula',
        identificacion: '40246815381',
        nombreCliente: 'Jorge Luis Hidalgo',
        telefono: '8098909283',
        whatsapp: '8296985143',
        email: 'jorgehidalgo@email.com'
      },
      vehiculo: {
        marca: 'Toyota',
        modelo: 'TOYOTA COROLLA',
        anio: '2015',
        placa: 'B1598756',
        chasis: 'A12312312312352147',
        color: 'Gris'
      },
      ordenEntrada: {
        millajeEntrada: '128450',
        motivoEntrada: 'Mantenimiento preventivo y revisión de ruidos en tren delantero.',
        observacionesEntrada: 'Vehículo recibido en buen estado general. Cliente solicita revisión rápida para viaje.',
        combustibleActual: 50,
        combustibleLabel: '1/2',
        enciende: 'Sí',
        modoLlegada: 'Conduciendo',
        lucesTablero: ['Check Engine'],
        accesorios: ['Radio', 'Documentos'],
        damageMarks: [],
        firmaClienteEntrada: null
      }
    },
    diagnostico: {
      prioridad: 'media',
      diagnosticoInicial: 'Se recomienda mantenimiento preventivo completo y ajuste de componentes de suspensión delantera.',
      sintomasReportados: 'Ruidos leves al pasar desniveles y mantenimiento vencido.',
      pruebasRealizadas: 'Inspección visual, prueba de ruta y verificación de niveles.',
      causaProbable: 'Desgaste normal de consumibles y bujes con juego leve.',
      hallazgos: [
        { nombre: 'Suspensión', estado: 'atencion', hallazgo: 'Bujes delanteros con desgaste visible.', recomendacion: 'Sustituir bujes y alinear.' },
        { nombre: 'Lubricación', estado: 'ok', hallazgo: 'Sin fugas activas.', recomendacion: 'Cambiar aceite y filtro por mantenimiento.' }
      ]
    },
    salida: {
      fechaSalida: todayIso,
      entregadoPorTaller: configuracionGeneral.emitidoPor || 'Asesor de servicio',
      recibidoPorCliente: 'Jorge Luis Hidalgo',
      estadoSalidaVehiculo: 'listo_entregado',
      trabajoRealizado: 'Mantenimiento preventivo completo y revisión final.',
      observacionesSalida: 'Vehículo entregado sin testigos críticos activos.',
      pendientesNoAutorizados: 'Ninguno',
      checklistSalida: ['documentos_entregados', 'llaves_entregadas', 'pago_confirmado', 'cliente_conforme']
    }
  };
}

function setPreviewText(root, id, value) {
  const element = root.querySelector(`#${id}`);
  if (element) {
    element.textContent = value;
  }
}

function imprimirPlantillaHtmlPrueba() {
  if (shouldWarnForMissingPrintLogo()) {
    notifyMissingPrintLogo('La plantilla HTML de prueba');
  }

  const sample = getSamplePrintPreviewData();
  const bodyHtml = `
    <section class="print-info print-entry-top-grid">
      <article class="print-entry-card">
        <span class="print-card-kicker">Cliente</span>
        <h4>Resumen del expediente</h4>
        <p><strong>Nombre:</strong> <span>${escapeHtml(sample.cliente.nombreCliente)}</span></p>
        <p><strong>Identificación:</strong> <span>${escapeHtml(sample.cliente.identificacion)}</span></p>
        <p><strong>Teléfono:</strong> <span>${escapeHtml(sample.cliente.telefono)}</span></p>
      </article>
      <article class="print-entry-card">
        <span class="print-card-kicker">Vehículo</span>
        <h4>Unidad atendida</h4>
        <p><strong>Modelo:</strong> <span>${escapeHtml(sample.vehiculo.modelo)}</span></p>
        <p><strong>Placa:</strong> <span>${escapeHtml(sample.vehiculo.placa)}</span></p>
        <p><strong>Chasis:</strong> <span>${escapeHtml(sample.vehiculo.chasis)}</span></p>
      </article>
    </section>
    <h3 class="print-section-title">Bloque de contenido de prueba</h3>
    <table>
      <thead>
        <tr>
          <th>Concepto</th>
          <th>Detalle</th>
          <th>Monto</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Servicio base</td>
          <td>${escapeHtml(sample.servicio.trabajo)}</td>
          <td>RD$ ${sample.servicio.totalServicio.toFixed(2)}</td>
        </tr>
        ${sample.piezas.map(pieza => `
          <tr>
            <td>${escapeHtml(pieza.nombre)}</td>
            <td>${pieza.cantidad} unidad(es)</td>
            <td>RD$ ${Number(pieza.subtotalPiezaVenta).toFixed(2)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    <div class="print-totals">
      <p><strong>Subtotal:</strong> RD$ ${sample.subtotal.toFixed(2)}</p>
      <p><strong>${escapeHtml(obtenerEtiquetaItbis())}:</strong> RD$ ${sample.itbis.toFixed(2)}</p>
      <p class="print-final-total"><strong>Total:</strong> RD$ ${sample.total.toFixed(2)}</p>
    </div>
  `;

  const html = buildConfigurablePrintHtml({
    windowTitle: 'Plantilla HTML de Impresion',
    kicker: 'Plantilla configurable',
    documentTitle: 'Vista previa base',
    subtitle: 'Prueba estructural del encabezado, colores, metadatos y pie.',
    meta: [
      { label: 'Cliente', value: sample.cliente.nombreCliente },
      { label: 'Documento', value: 'Plantilla base' },
      { label: 'Fecha', value: sample.fechaDisplay }
    ],
    bodyHtml
  });

  openPrintPreviewWindow({ title: 'Plantilla HTML de Impresion', html, width: 980, height: 760 });
}

function imprimirPruebaCotizacion() {
  if (shouldWarnForMissingPrintLogo()) {
    notifyMissingPrintLogo('La cotizacion de prueba');
  }

  const sample = getSamplePrintPreviewData();
  const printableContentElement = document.getElementById('printableArea');
  if (!printableContentElement) {
    return;
  }

  const tempDiv = printableContentElement.cloneNode(true);
  const headerToRemove = tempDiv.querySelector('.print-header');
  const hrToRemove = tempDiv.querySelector('hr');
  const entrySectionToRemove = tempDiv.querySelector('#printCotizacionEntradaSection');
  const diagnosticoSectionToRemove = tempDiv.querySelector('#printCotizacionDiagnosticoSection');
  if (headerToRemove) headerToRemove.remove();
  if (hrToRemove) hrToRemove.remove();
  if (entrySectionToRemove) entrySectionToRemove.remove();
  if (diagnosticoSectionToRemove) diagnosticoSectionToRemove.remove();

  setPreviewText(tempDiv, 'pNombreCliente', sample.cliente.nombreCliente);
  setPreviewText(tempDiv, 'pTipoIdentificacion', sample.cliente.tipoIdentificacion);
  setPreviewText(tempDiv, 'pIdentificacion', sample.cliente.identificacion);
  setPreviewText(tempDiv, 'pTelefonoCliente', sample.cliente.telefono);
  setPreviewText(tempDiv, 'pWhatsappCliente', sample.cliente.whatsapp);
  setPreviewText(tempDiv, 'pVehiculoModelo', sample.vehiculo.modelo);
  setPreviewText(tempDiv, 'pVehiculoAnio', sample.vehiculo.anio);
  setPreviewText(tempDiv, 'pVehiculoCombustible', sample.vehiculo.combustible);
  setPreviewText(tempDiv, 'pVehiculoChasis', sample.vehiculo.chasis);
  setPreviewText(tempDiv, 'pVehiculoPlaca', sample.vehiculo.placa);
  setPreviewText(tempDiv, 'pTrabajo', sample.servicio.trabajo);
  setPreviewText(tempDiv, 'pHorasServicio', `${sample.servicio.horas} hrs`);
  setPreviewText(tempDiv, 'pPrecioManoObraUnit', `RD$ ${Number(sample.servicio.precioUnitario).toFixed(2)}`);
  setPreviewText(tempDiv, 'pPrecioServicio', `RD$ ${Number(sample.servicio.totalServicio).toFixed(2)}`);
  setPreviewText(tempDiv, 'pSubtotal', sample.subtotal.toFixed(2));
  setPreviewText(tempDiv, 'pItbis', sample.itbis.toFixed(2));
  setPreviewText(tempDiv, 'pTotal', sample.total.toFixed(2));
  setPreviewText(tempDiv, 'pItbisLabel', obtenerEtiquetaItbis());

  const piecesBody = tempDiv.querySelector('#piezasPrint');
  if (piecesBody) {
    piecesBody.innerHTML = sample.piezas.map(pieza => `
      <tr>
        <td>${escapeHtml(pieza.nombre)}</td>
        <td>${pieza.cantidad}</td>
        <td>RD$ ${Number(pieza.precioVentaUnitario).toFixed(2)}</td>
        <td>RD$ ${Number(pieza.subtotalPiezaVenta).toFixed(2)}</td>
      </tr>
    `).join('');
  }

  const itbisContainer = tempDiv.querySelector('#pItbisContainer');
  if (itbisContainer) {
    itbisContainer.classList.toggle('hidden', sample.itbis <= 0);
  }

  const companyContainer = tempDiv.querySelector('#pNombreEmpresaContainer');
  if (companyContainer) {
    companyContainer.classList.add('hidden');
  }

  prepareCotizacionPrintableClone(tempDiv);

  const html = buildConfigurablePrintHtml({
    windowTitle: 'Cotización de Prueba',
    kicker: 'Vista de prueba',
    documentTitle: 'Cotizacion de Servicio',
    subtitle: 'Previsualizacion con datos sintéticos y plantilla configurable.',
    meta: buildCotizacionPrintMeta(sample.fechaDisplay),
    bodyHtml: tempDiv.innerHTML
  });

  openPrintPreviewWindow({ title: 'Cotización de Prueba', html });
}

function imprimirPruebaFactura() {
  if (shouldWarnForMissingPrintLogo()) {
    notifyMissingPrintLogo('La factura de prueba');
  }
  const sample = getSamplePrintPreviewData();
  const facturaTemplate = document.getElementById('printableFacturaArea');
  if (!facturaTemplate) {
    return;
  }

  const tempDiv = facturaTemplate.cloneNode(true);
  setPreviewText(tempDiv, 'fNombreEmpresaPrint', configuracionGeneral.nombreEmpresaPrint);
  setPreviewText(tempDiv, 'fTipoComprobante', 'FACTURA');
  setPreviewText(tempDiv, 'fNumeroFactura', sample.factura.id);
  setPreviewText(tempDiv, 'fFechaPrint', sample.fechaIso);
  setPreviewText(tempDiv, 'fEmitidoPor', configuracionGeneral.emitidoPor);
  setPreviewText(tempDiv, 'fRefCotizacion', sample.factura.cotizacionId);
  setPreviewText(tempDiv, 'fNombreCliente', sample.cliente.nombreCliente);
  setPreviewText(tempDiv, 'fIdentificacion', sample.cliente.identificacion);
  setPreviewText(tempDiv, 'fTelefono', sample.cliente.telefono);
  setPreviewText(tempDiv, 'fVehiculoModelo', sample.vehiculo.modelo);
  setPreviewText(tempDiv, 'fVehiculoAnio', sample.vehiculo.anio);
  setPreviewText(tempDiv, 'fVehiculoPlaca', sample.vehiculo.placa);
  setPreviewText(tempDiv, 'fVehiculoChasis', sample.vehiculo.chasis);
  setPreviewText(tempDiv, 'fSubtotal', sample.subtotal.toFixed(2));
  setPreviewText(tempDiv, 'fItbis', sample.itbis.toFixed(2));
  setPreviewText(tempDiv, 'fTotal', sample.total.toFixed(2));
  setPreviewText(tempDiv, 'fItbisLabel', obtenerEtiquetaItbis());

  const contact = tempDiv.querySelector('#fEmpresaContacto');
  if (contact) {
    contact.textContent = obtenerLineaContactoEmpresa();
    contact.classList.toggle('hidden', !obtenerLineaContactoEmpresa());
  }
  const address = tempDiv.querySelector('#fEmpresaDireccion');
  if (address) {
    address.textContent = configuracionGeneral.direccionEmpresa || '';
    address.classList.toggle('hidden', !configuracionGeneral.direccionEmpresa);
  }

  const logo = tempDiv.querySelector('#fPrintLogo');
  const logoSrc = getConfiguredPrintLogo();
  if (logo) {
    if (logoSrc) {
      logo.src = logoSrc;
      logo.style.display = 'block';
    } else {
      logo.removeAttribute('src');
      logo.style.display = 'none';
    }
  }

  const detail = tempDiv.querySelector('#fDetalleFactura');
  if (detail) {
    const piezasHtml = sample.piezas.map(pieza => `
      <tr>
        <td>${escapeHtml(pieza.nombre)}</td>
        <td>${pieza.cantidad}</td>
        <td>RD$ ${Number(pieza.precioVentaUnitario).toFixed(2)}</td>
        <td>RD$ ${Number(pieza.subtotalPiezaVenta).toFixed(2)}</td>
      </tr>
    `).join('');
    detail.innerHTML = `
      <tr>
        <td>${escapeHtml(sample.servicio.trabajo)}</td>
        <td>${sample.servicio.horas}</td>
        <td>RD$ ${Number(sample.servicio.precioUnitario).toFixed(2)}</td>
        <td>RD$ ${Number(sample.servicio.totalServicio).toFixed(2)}</td>
      </tr>
      ${piezasHtml}
    `;
  }

  const itbisContainer = tempDiv.querySelector('#fItbisContainer');
  if (itbisContainer) {
    itbisContainer.classList.toggle('hidden', sample.itbis <= 0);
  }

  const printableClone = prepareFacturaPrintableClone(tempDiv);

  openPrintPreviewWindow({
    title: 'Factura de Prueba',
    html: buildConfigurablePrintHtml({
      windowTitle: 'Factura de Prueba',
      kicker: 'Vista de prueba',
      documentTitle: 'Factura',
      subtitle: 'Previsualizacion comercial con plantilla configurable.',
      meta: buildFacturaPrintMeta(sample.factura),
      bodyHtml: printableClone?.innerHTML || tempDiv.innerHTML
    })
  });
}

function imprimirPruebaOrdenEntrada() {
  notifyMissingPrintLogo('La orden de entrada de prueba');
  const sample = getSamplePrintPreviewData();
  openPrintPreviewWindow({
    title: 'Orden de Entrada de Prueba',
    html: generarHTMLImpresionOrdenEntrada(sample.entrada),
    width: 900,
    height: 760
  });
}

function imprimirPruebaDiagnostico() {
  notifyMissingPrintLogo('El diagnostico de prueba');
  const sample = getSamplePrintPreviewData();
  const logoSrc = getConfiguredPrintLogo();
  const logoHtml = logoSrc ? `<img class="report-cover-logo" src="${logoSrc}" alt="Logo">` : '';
  const hallazgosHtml = sample.diagnostico.hallazgos.map(item => `
    <section class="report-card report-card-finding">
      <div class="report-card-header">
        <h3>${escapeHtml(item.nombre)}</h3>
        <span class="report-badge status-${escapeHtml(item.estado)}">${escapeHtml(getDiagnosticStateMeta(item.estado).label)}</span>
      </div>
      <div class="report-copy-grid">
        <div>
          <span class="report-mini-label">Hallazgo</span>
          <p>${escapeHtml(item.hallazgo)}</p>
        </div>
        <div>
          <span class="report-mini-label">Acción recomendada</span>
          <p>${escapeHtml(item.recomendacion)}</p>
        </div>
      </div>
    </section>
  `).join('');

  const html = `
    <html>
      <head>
        <title>Diagnóstico de Prueba</title>
        <style>
          body { font-family: Arial, sans-serif; color: #1e293b; margin: 0; background: #eef3f9; }
          .page { padding: 24px 28px 28px; }
          .report-shell { background: #ffffff; border: 1px solid #dbe4ef; border-radius: 22px; padding: 22px; }
          .report-header { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 16px; align-items: center; border-bottom: 2px solid #dbe4ef; padding-bottom: 14px; margin-bottom: 16px; }
          .report-cover-logo { max-height: 72px; max-width: 110px; }
          .report-header-copy h1 { margin: 0; font-size: 1.9em; color: #0f172a; }
          .report-header-copy h2 { margin: 4px 0 0; font-size: 0.98em; color: #475569; font-weight: normal; }
          .report-header-meta { min-width: 220px; display: grid; gap: 6px; font-size: 0.9em; }
          .report-kicker { text-transform: uppercase; letter-spacing: 1px; font-size: 0.76em; color: #ea580c; font-weight: 700; }
          .report-summary-grid { display: grid; grid-template-columns: minmax(260px, 0.95fr) minmax(0, 1.4fr); gap: 14px; margin-bottom: 14px; }
          .report-card { background: #fff; border: 1px solid #dbe4ef; border-radius: 16px; padding: 16px; margin-bottom: 14px; }
          .report-card-header { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 12px; }
          .report-card-header h3 { margin: 0; font-size: 1em; }
          .report-badge { padding: 6px 12px; border-radius: 999px; font-size: 0.78em; font-weight: 700; text-transform: uppercase; }
          .status-ok { background: #dcfce7; color: #166534; }
          .status-atencion { background: #fef3c7; color: #92400e; }
          .status-critico { background: #fee2e2; color: #991b1b; }
          .report-meta-grid, .report-copy-grid, .report-findings-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
          .report-mini-label { display: inline-block; margin-bottom: 4px; font-size: 0.72em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: #ea580c; }
          .report-findings-title { margin: 0 0 12px; font-size: 1.1em; color: #0f172a; }
        </style>
      </head>
      <body>
        <section class="page">
          <div class="report-shell">
            <header class="report-header">
              ${logoHtml || '<div></div>'}
              <div class="report-header-copy">
                <p class="report-kicker">${escapeHtml(configuracionGeneral.nombreEmpresaPrint || 'CarsystemRD')}</p>
                <h1>Reporte de Diagnóstico</h1>
                <h2>Vista de prueba para validación de impresión</h2>
              </div>
              <div class="report-header-meta">
                <div><strong>Fecha:</strong> ${sample.fechaIso}</div>
                <div><strong>Cliente:</strong> ${escapeHtml(sample.cliente.nombreCliente)}</div>
                <div><strong>Vehículo:</strong> ${escapeHtml(sample.vehiculo.modelo)}</div>
                <div><strong>Placa:</strong> ${escapeHtml(sample.vehiculo.placa)}</div>
                <div><strong>Emitido por:</strong> ${escapeHtml(configuracionGeneral.emitidoPor)}</div>
              </div>
            </header>
            <section class="report-summary-grid">
              <div class="report-card">
                <div class="report-meta-grid">
                  <div><span class="report-mini-label">Diagnóstico inicial</span><p>${escapeHtml(sample.diagnostico.diagnosticoInicial)}</p></div>
                  <div><span class="report-mini-label">Prioridad</span><p>${escapeHtml(getDiagnosticoPriorityLabel(sample.diagnostico.prioridad))}</p></div>
                  <div><span class="report-mini-label">Síntomas</span><p>${escapeHtml(sample.diagnostico.sintomasReportados)}</p></div>
                  <div><span class="report-mini-label">Pruebas</span><p>${escapeHtml(sample.diagnostico.pruebasRealizadas)}</p></div>
                </div>
              </div>
              <div class="report-card">
                <span class="report-mini-label">Causa probable</span>
                <p>${escapeHtml(sample.diagnostico.causaProbable)}</p>
              </div>
            </section>
            <section>
              <h3 class="report-findings-title">Hallazgos por sistema</h3>
              <div class="report-findings-grid">${hallazgosHtml}</div>
            </section>
          </div>
        </section>
      </body>
    </html>
  `;

  openPrintPreviewWindow({ title: 'Diagnóstico de Prueba', html, width: 1100, height: 900 });
}

function imprimirPruebaOrdenSalida() {
  if (shouldWarnForMissingPrintLogo()) {
    notifyMissingPrintLogo('La orden de salida de prueba');
  }
  const sample = getSamplePrintPreviewData();
  const salidaTemplate = document.getElementById('printableSalidaArea');
  if (!salidaTemplate) {
    return;
  }

  const tempDiv = salidaTemplate.cloneNode(true);
  setPreviewText(tempDiv, 'sNombreEmpresaPrint', configuracionGeneral.nombreEmpresaPrint);
  setPreviewText(tempDiv, 'sFechaSalida', sample.salida.fechaSalida);
  setPreviewText(tempDiv, 'sEntregadoPor', sample.salida.entregadoPorTaller);
  setPreviewText(tempDiv, 'sRecibidoPor', sample.salida.recibidoPorCliente);
  setPreviewText(tempDiv, 'sNombreCliente', sample.cliente.nombreCliente);
  setPreviewText(tempDiv, 'sIdentificacion', sample.cliente.identificacion);
  setPreviewText(tempDiv, 'sTelefono', sample.cliente.telefono);
  setPreviewText(tempDiv, 'sVehiculoModelo', sample.vehiculo.modelo);
  setPreviewText(tempDiv, 'sVehiculoAnio', sample.vehiculo.anio);
  setPreviewText(tempDiv, 'sVehiculoPlaca', sample.vehiculo.placa);
  setPreviewText(tempDiv, 'sVehiculoChasis', sample.vehiculo.chasis);
  setPreviewText(tempDiv, 'sEstadoSalida', getSalidaEstadoLabel(sample.salida.estadoSalidaVehiculo));
  setPreviewText(tempDiv, 'sTrabajoRealizado', sample.salida.trabajoRealizado);
  setPreviewText(tempDiv, 'sObservacionesSalida', sample.salida.observacionesSalida);
  setPreviewText(tempDiv, 'sPendientesNoAutorizados', sample.salida.pendientesNoAutorizados);

  const contacto = tempDiv.querySelector('#sEmpresaContacto');
  if (contacto) {
    contacto.textContent = obtenerLineaContactoEmpresa();
    contacto.classList.toggle('hidden', !obtenerLineaContactoEmpresa());
  }
  const direccion = tempDiv.querySelector('#sEmpresaDireccion');
  if (direccion) {
    direccion.textContent = configuracionGeneral.direccionEmpresa || '';
    direccion.classList.toggle('hidden', !configuracionGeneral.direccionEmpresa);
  }

  const checklist = tempDiv.querySelector('#sChecklistSalida');
  if (checklist) {
    checklist.innerHTML = sample.salida.checklistSalida.map(item => `<li>${escapeHtml(SALIDA_CHECKLIST_LABELS[item] || item)}</li>`).join('');
  }

  const logo = tempDiv.querySelector('#sPrintLogo');
  const logoSrc = getConfiguredPrintLogo();
  if (logo) {
    if (logoSrc) {
      logo.src = logoSrc;
      logo.style.display = 'block';
    } else {
      logo.removeAttribute('src');
      logo.style.display = 'none';
    }
  }

  const printableClone = prepareSalidaPrintableClone(tempDiv);

  openPrintPreviewWindow({
    title: 'Orden de Salida de Prueba',
    html: buildConfigurablePrintHtml({
      windowTitle: 'Orden de Salida de Prueba',
      kicker: 'Vista de prueba',
      documentTitle: 'Orden de Salida',
      subtitle: 'Previsualizacion operativa con plantilla configurable.',
      meta: buildSalidaPrintMeta(sample.salida),
      bodyHtml: printableClone?.innerHTML || tempDiv.innerHTML
    })
  });
}

function convertirAFactura(cotizacionId) {
  const cotizacion = cotizacionesGuardadas.find(cot => cot.id === cotizacionId);
  if (!cotizacion) {
    alert('No se encontró la cotización seleccionada.');
    return;
  }
  const invoiceState = canInvoiceCotizacion(cotizacion);
  if (!invoiceState.allowed) {
    alert(invoiceState.reason);
    return;
  }

  const facturaExistente = getFacturaByCotizacionId(cotizacionId);
  if (facturaExistente) {
    alert(`La cotización ${cotizacionId} ya tiene la factura ${facturaExistente.id}.`);
    return;
  }

  if (!isAppUnlocked && facturasGuardadas.length >= MAX_FACTURAS_DEMO) {
    alert(`¡Límite de Facturas Alcanzado! Esta versión demo solo permite ${MAX_FACTURAS_DEMO} facturas.`);
    return;
  }

  const approvedTotals = getCotizacionApprovedTotals(cotizacion);
  const approvedPieces = approvedTotals.isPartial ? approvedTotals.piezasAprobadas : (Array.isArray(cotizacion.piezas) ? cotizacion.piezas : []);
  const approvedDomicilio = approvedTotals.laborApproved
    ? normalizeServicioDomicilioState(cotizacion.servicio?.domicilio || {})
    : normalizeServicioDomicilioState({ enabled: false, amount: 0, description: cotizacion.servicio?.domicilio?.description || 'Servicio a domicilio' });

  const factura = {
    id: `FAC-${Date.now()}`,
    fecha: new Date().toISOString().split('T')[0],
    cotizacionId: cotizacion.id,
    cliente: { ...cotizacion.cliente },
    vehiculo: { ...cotizacion.vehiculo },
    servicio: {
      ...cotizacion.servicio,
      domicilio: approvedDomicilio
    },
    ordenEntrada: { ...(cotizacion.ordenEntrada || {}) },
    salida: { ...(cotizacion.salida || {}) },
    diagnostico: {
      ...(cotizacion.diagnostico || {}),
      partes: mezclarEstadoDiagnostico(cotizacion.diagnostico?.partes || {})
    },
    piezas: approvedPieces.map(pieza => ({ ...pieza })),
    subtotal: Number(approvedTotals.subtotal || 0),
    itbis: Number(approvedTotals.itbis || 0),
    totalFinal: Number(approvedTotals.totalFinal || 0),
    pagos: [],
    totalPagado: 0,
    saldoPendiente: Number(approvedTotals.totalFinal || 0),
    estadoCobro: 'pendiente_pago',
    approval: cotizacion.approval || null,
    opcionesFacturacion: {
      aplicarItbis: cotizacion.opcionesFacturacion?.aplicarItbis || configuracionGeneral.aplicarItbis,
      emitidoPor: cotizacion.opcionesFacturacion?.emitidoPor || configuracionGeneral.emitidoPor,
      notasImportantes: cotizacion.opcionesFacturacion?.notasImportantes || configuracionGeneral.notasImportantes
    }
  };

  facturasGuardadas.push(normalizeFacturaRecord(factura));
  localStorage.setItem(LOCAL_STORAGE_FACTURAS_KEY, JSON.stringify(facturasGuardadas));
  actualizarListaFacturasHistorial();
  actualizarListaCotizacionesHistorial();
  updateDashboard();
  alert(`Factura ${factura.id} generada exitosamente.`);
}

function cargarFacturasGuardadas() {
  const facturasGuardadasStr = localStorage.getItem(LOCAL_STORAGE_FACTURAS_KEY);
  if (facturasGuardadasStr) {
    try {
      const parsedFacturas = JSON.parse(facturasGuardadasStr);
      facturasGuardadas = (Array.isArray(parsedFacturas) ? parsedFacturas : [])
        .filter(factura => factura && typeof factura === 'object')
        .map(normalizeFacturaRecord);
      localStorage.setItem(LOCAL_STORAGE_FACTURAS_KEY, JSON.stringify(facturasGuardadas));
    } catch (error) {
      console.error('No se pudieron cargar las facturas guardadas.', error);
      facturasGuardadas = [];
    }
  }
  actualizarModuloFacturacion();
}

function actualizarListaFacturasHistorial() {
  renderFacturasTable('listaFacturasTable', 'filtroFacturas');
}

function filtrarFacturas() {
  actualizarListaFacturasHistorial();
}

function filtrarFacturacionModulo() {
  renderFacturasTable('listaFacturacionTable', 'filtroFacturacion');
}

function prepararFacturaParaImpresion(factura) {
  actualizarDatosEmpresaEnImpresion();
  document.getElementById('fNombreEmpresaPrint').textContent = configuracionGeneral.nombreEmpresaPrint;
  document.getElementById('fNumeroFactura').textContent = factura.id;
  document.getElementById('fFechaPrint').textContent = factura.fecha;
  document.getElementById('fEmitidoPor').textContent = factura.opcionesFacturacion?.emitidoPor || configuracionGeneral.emitidoPor;
  document.getElementById('fRefCotizacion').textContent = factura.cotizacionId;

  const nombreCliente = factura.cliente.tipoIdentificacion === 'rnc' && factura.cliente.nombreEmpresa ? factura.cliente.nombreEmpresa : factura.cliente.nombreCliente;
  document.getElementById('fNombreCliente').textContent = nombreCliente || '';
  document.getElementById('fIdentificacion').textContent = factura.cliente.identificacion || '';
  document.getElementById('fTelefono').textContent = factura.cliente.telefono || '';
  document.getElementById('fVehiculoModelo').textContent = factura.vehiculo.modelo || '';
  document.getElementById('fVehiculoAnio').textContent = factura.vehiculo.anio || '';
  document.getElementById('fVehiculoPlaca').textContent = factura.vehiculo.placa || '';
  document.getElementById('fVehiculoChasis').textContent = factura.vehiculo.chasis || '';

  const empresaContainer = document.getElementById('fNombreEmpresaContainer');
  if (factura.cliente.tipoIdentificacion === 'rnc' && factura.cliente.nombreEmpresa) {
    document.getElementById('fNombreEmpresa').textContent = factura.cliente.nombreEmpresa;
    empresaContainer.classList.remove('hidden');
  } else {
    document.getElementById('fNombreEmpresa').textContent = '';
    empresaContainer.classList.add('hidden');
  }

  const detalleFactura = document.getElementById('fDetalleFactura');
  detalleFactura.innerHTML = '';

  const servicioRow = detalleFactura.insertRow();
  const servicioHoras = Number(factura.servicio.horas || 0);
  const domicilio = normalizeServicioDomicilioState(factura.servicio?.domicilio || {});
  const totalPiezas = Array.isArray(factura.piezas)
    ? factura.piezas.reduce((total, pieza) => total + Number(pieza.subtotalPiezaVenta || 0), 0)
    : 0;
  const totalServicio = Math.max(Number(factura.subtotal || 0) - totalPiezas - (domicilio.enabled ? domicilio.amount : 0), 0);
  const precioServicioUnitario = servicioHoras > 0 ? totalServicio / servicioHoras : totalServicio;
  servicioRow.insertCell().textContent = factura.servicio.trabajo || 'Mano de Obra';
  servicioRow.insertCell().textContent = servicioHoras || 0;
  servicioRow.insertCell().textContent = `RD$ ${precioServicioUnitario.toFixed(2)}`;
  servicioRow.insertCell().textContent = `RD$ ${totalServicio.toFixed(2)}`;

  if (domicilio.enabled && domicilio.amount > 0) {
    const domicilioRow = detalleFactura.insertRow();
    domicilioRow.insertCell().textContent = formatServicioDomicilioConcept(domicilio);
    domicilioRow.insertCell().textContent = 1;
    domicilioRow.insertCell().textContent = `RD$ ${Number(domicilio.amount || 0).toFixed(2)}`;
    domicilioRow.insertCell().textContent = `RD$ ${Number(domicilio.amount || 0).toFixed(2)}`;
  }

  (factura.piezas || []).forEach(pieza => {
    const row = detalleFactura.insertRow();
    row.insertCell().textContent = pieza.nombre || '';
    row.insertCell().textContent = pieza.cantidad || 0;
    row.insertCell().textContent = `RD$ ${Number(pieza.precioVentaUnitario || 0).toFixed(2)}`;
    row.insertCell().textContent = `RD$ ${Number(pieza.subtotalPiezaVenta || 0).toFixed(2)}`;
  });

  document.getElementById('fSubtotal').textContent = Number(factura.subtotal || 0).toFixed(2);
  document.getElementById('fItbis').textContent = Number(factura.itbis || 0).toFixed(2);
  document.getElementById('fTotal').textContent = Number(factura.totalFinal || 0).toFixed(2);
  document.getElementById('fItbisLabel').textContent = obtenerEtiquetaItbis();

  const itbisContainer = document.getElementById('fItbisContainer');
  if (Number(factura.itbis || 0) > 0) {
    itbisContainer.classList.remove('hidden');
  } else {
    itbisContainer.classList.add('hidden');
  }

  document.getElementById('fComprobanteNota').textContent = 'Esta factura constituye comprobante de los servicios prestados.';
  const printLogo = document.getElementById('fPrintLogo');
  const printLogoSrc = getConfiguredPrintLogo();
  if (printLogoSrc) {
    printLogo.src = printLogoSrc;
    printLogo.style.display = 'block';
  } else {
    printLogo.removeAttribute('src');
    printLogo.style.display = 'none';
  }
}

function prepararOrdenSalidaParaImpresion() {
  if (!hasSelectedClientAndVehicle()) {
    alert('Debes seleccionar un cliente y un vehículo antes de imprimir la orden de salida.');
    return false;
  }

  const salida = getSalidaPayload();
  const salidaGuard = getSalidaGuardState();
  if (!salidaGuard.allowed) {
    alert(salidaGuard.message);
    return false;
  }

  actualizarDatosEmpresaEnImpresion();
  document.getElementById('sNombreEmpresaPrint').textContent = configuracionGeneral.nombreEmpresaPrint;
  document.getElementById('sFechaSalida').textContent = salida.fechaSalida || 'N/D';
  document.getElementById('sEntregadoPor').textContent = salida.entregadoPorTaller || 'N/D';
  document.getElementById('sRecibidoPor').textContent = salida.recibidoPorCliente || 'N/D';

  const nombreCliente = document.getElementById('tipoIdentificacion').value === 'rnc' && document.getElementById('nombreEmpresa').value.trim()
    ? document.getElementById('nombreEmpresa').value.trim()
    : document.getElementById('nombreCliente').value.trim();

  document.getElementById('sNombreCliente').textContent = nombreCliente || 'N/D';
  document.getElementById('sIdentificacion').textContent = document.getElementById('identificacion').value.trim() || 'N/D';
  document.getElementById('sTelefono').textContent = document.getElementById('telefonoCliente').value.trim() || 'N/D';
  document.getElementById('sVehiculoModelo').textContent = document.getElementById('vehiculoModelo').value.trim() || 'N/D';
  document.getElementById('sVehiculoAnio').textContent = document.getElementById('vehiculoAnio').value.trim() || 'N/D';
  document.getElementById('sVehiculoPlaca').textContent = document.getElementById('vehiculoPlaca').value.trim() || 'N/D';
  document.getElementById('sVehiculoChasis').textContent = document.getElementById('vehiculoChasis').value.trim() || 'N/D';
  document.getElementById('sEstadoSalida').textContent = getSalidaEstadoLabel(salida.estadoSalidaVehiculo);
  document.getElementById('sTrabajoRealizado').textContent = document.getElementById('trabajoRealizado').value.trim() || 'N/D';
  document.getElementById('sObservacionesSalida').textContent = salida.observacionesSalida || 'N/D';
  document.getElementById('sPendientesNoAutorizados').textContent = salida.pendientesNoAutorizados || 'Ninguno';

  const checklist = document.getElementById('sChecklistSalida');
  checklist.innerHTML = '';
  const checklistItems = salida.checklistSalida.length ? salida.checklistSalida : ['sin_registros'];
  checklistItems.forEach(itemKey => {
    const li = document.createElement('li');
    li.textContent = SALIDA_CHECKLIST_LABELS[itemKey] || 'Sin checklist registrado';
    checklist.appendChild(li);
  });

  const firmaBlock = document.getElementById('sFirmaClienteSalidaBlock');
  const firmaImage = document.getElementById('sFirmaClienteSalida');
  if (salida.firmaClienteSalida) {
    firmaImage.src = salida.firmaClienteSalida;
    firmaBlock.classList.remove('hidden');
  } else {
    firmaImage.removeAttribute('src');
    firmaBlock.classList.add('hidden');
  }

  const printLogo = document.getElementById('sPrintLogo');
  const printLogoSrc = getConfiguredPrintLogo();
  if (printLogoSrc) {
    printLogo.src = printLogoSrc;
    printLogo.style.display = 'block';
  } else {
    printLogo.removeAttribute('src');
    printLogo.style.display = 'none';
  }

  return true;
}

function imprimirOrdenSalida() {
  if (!prepararOrdenSalidaParaImpresion()) {
    return;
  }

  if (shouldWarnForMissingPrintLogo()) {
    notifyMissingPrintLogo('La orden de salida');
  }

  const bodyClone = prepareSalidaPrintableClone();
  if (!bodyClone) {
    return;
  }

  const salida = getSalidaPayload();
  const html = buildConfigurablePrintHtml({
    windowTitle: 'Orden de Salida',
    kicker: 'CarsystemRD',
    documentTitle: 'Orden de Salida',
    subtitle: 'Documento de entrega y conformidad del cliente.',
    meta: buildSalidaPrintMeta(salida),
    bodyHtml: bodyClone.innerHTML
  });

  openPrintPreviewWindow({ title: 'Orden de Salida', html, width: 980, height: 760 });
}

function imprimirFactura(idFactura) {
  const factura = facturasGuardadas.find(item => item.id === idFactura);
  if (!factura) {
    alert('No se encontró la factura seleccionada.');
    return;
  }

  prepararFacturaParaImpresion(factura);
  if (shouldWarnForMissingPrintLogo()) {
    notifyMissingPrintLogo('La factura');
  }

  const bodyClone = prepareFacturaPrintableClone();
  if (!bodyClone) {
    return;
  }

  const html = buildConfigurablePrintHtml({
    windowTitle: `Factura ${factura.id}`,
    kicker: 'CarsystemRD',
    documentTitle: 'Factura',
    subtitle: 'Comprobante de servicios y piezas facturados.',
    meta: buildFacturaPrintMeta(factura),
    bodyHtml: bodyClone.innerHTML
  });

  openPrintPreviewWindow({ title: `Factura ${factura.id}`, html, width: 980, height: 760 });
}

function eliminarFacturaHistorial(idFactura) {
  openAppDecisionModal({
    title: 'Eliminar factura',
    message: `Se eliminará la factura ${idFactura} y se actualizarán los saldos del expediente relacionado.`,
    confirmText: 'Eliminar factura',
    onConfirm: () => {
      facturasGuardadas = facturasGuardadas.filter(factura => factura.id !== idFactura);
      localStorage.setItem(LOCAL_STORAGE_FACTURAS_KEY, JSON.stringify(facturasGuardadas));
      actualizarListaFacturasHistorial();
      actualizarListaCotizacionesHistorial();
      updateDashboard();
      showAppNotice({ title: 'Factura eliminada', message: `La factura ${idFactura} fue eliminada del historial.`, kicker: 'Gestión' });
    }
  });
}

function checkUnlockStatus() {
  const unlocked = localStorage.getItem(LOCAL_STORAGE_UNLOCKED_KEY);
  if (unlocked === 'true') {
    isAppUnlocked = true;
  }
}

function unlockApp() {
  const enteredKey = prompt('Por favor, introduce la clave de desbloqueo:');
  if (enteredKey && MASTER_KEYS.includes(enteredKey.toUpperCase())) {
    isAppUnlocked = true;
    localStorage.setItem(LOCAL_STORAGE_UNLOCKED_KEY, 'true');
    alert('¡Felicidades! La aplicación ha sido desbloqueada a la versión completa. Los límites de clientes, cotizaciones, servicios, piezas y facturas han sido removidos.');
    updateUnlockUI();
  } else if (enteredKey !== null) {
    alert('Clave incorrecta. La aplicación permanece en modo demo.');
  }
}

function updateUnlockUI() {
  const unlockStatusElement = document.getElementById('unlockStatus');
  const unlockButton = document.getElementById('unlockAppBtn');
  if (!unlockStatusElement) {
    return;
  }

  if (isAppUnlocked) {
    unlockStatusElement.textContent = 'Estado: Versión COMPLETA (Límites removidos)';
    unlockStatusElement.style.color = '#28a745';
    if (unlockButton) {
      unlockButton.style.display = 'none';
    }
  } else {
    unlockStatusElement.textContent = `Estado: Versión DEMO (Máx. ${MAX_CLIENTES_DEMO} clientes, ${MAX_COTIZACIONES_DEMO} cotizaciones, ${MAX_FACTURAS_DEMO} facturas, ${MAX_SERVICIOS_DEMO} servicios, ${MAX_PIEZAS_DEMO} piezas)`;
    unlockStatusElement.style.color = '#dc3545';
    if (unlockButton) {
      unlockButton.style.display = 'block';
    }
  }
}
