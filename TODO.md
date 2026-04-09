# TODO CarsystemRD

## Prioridad 1 - Crítico
- [x] Corregir la actualización de cotizaciones para evitar duplicados al editar una existente.
- [x] Corregir la fecha real de emisión de factura para que no herede la fecha de la cotización.
- [x] Corregir el cálculo e impresión de mano de obra en la factura.
- [x] Validar unicidad global de vehículo por placa y chasis/VIN.
- [x] Corregir el conteo de módulos del dashboard para que coincida con la lógica real.

## Prioridad 2 - Operación de Taller
- [x] Crear módulo de Orden de Salida con checklist de entrega, observaciones, firma y protección legal.
- [x] Crear módulo de pagos con anticipo, abonos, saldo pendiente, método de pago y referencia.
- [x] Separar estados en tres ejes: operativo, comercial y de cobro.
- [x] Convertir la orden de entrada en expediente por visita/OT, no solo por cliente-vehículo.
- [x] Agregar control de calidad antes de marcar un vehículo como listo para entrega.

## Prioridad 3 - UX y Flujo
- [x] Crear cabecera de expediente activo con cliente, vehículo, OT, estado, saldo y próxima acción.
- [x] Reducir uso de alert, confirm y prompt; reemplazar por modales y acciones guiadas.
- [x] Mostrar historial completo del vehículo al seleccionarlo: entradas, diagnósticos, cotizaciones, facturas y reingresos.
- [x] Permitir aprobación total, parcial y ampliaciones de cotización.
- [x] Bloquear entrega si faltan pago, firma o checklist final.

## Prioridad 4 - Escalabilidad
- [ ] Migrar de localStorage a backend con base de datos y respaldo.
- [ ] Agregar usuarios, roles y permisos.
- [ ] Implementar auditoría de cambios por documento y estado.
- [ ] Añadir agenda de citas y recordatorios.
- [ ] Integrar inventario y reserva de repuestos por orden de trabajo.

## Prioridad 5 - Postventa e Inteligencia
- [x] Agregar recordatorios de mantenimiento y garantía.
- [x] Registrar reingresos por garantía.
- [x] Medir tiempos por técnico, márgenes y tipos de fallas.
- [x] Agregar notificaciones automáticas de retrasos y vehículo listo.

## TODO UI V2

### Fase 1 - Base Visual y Navegación
- [x] Definir sistema visual UI V2 con tokens de color, tipografía, espaciado, radios, sombras y estados.
- [x] Sustituir la navegación actual por un shell más claro con sidebar, cabecera contextual y acciones rápidas persistentes.
- [x] Reorganizar el dashboard para priorizar bandejas operativas, métricas de hoy y alertas accionables.
- [x] Convertir la cabecera de expediente activo en un panel fijo de contexto con estado operativo, comercial y de cobro.
- [x] Eliminar o consolidar vistas redundantes como Vehículo para que la navegación represente el flujo real.

### Fase 2 - Experiencia de Módulos
- [x] Rediseñar Clientes y Vehículos como workspace maestro con buscador, detalle, historial y acciones laterales.
- [x] Rediseñar Entrada como flujo por bloques colapsables en lugar de formulario largo lineal.
- [x] Rediseñar Diagnóstico con tarjetas por sistema, filtros más visibles y resumen cliente/técnico mejor separado.
- [x] Rediseñar Cotización con layout de resumen lateral, piezas editables y estado comercial más claro.
- [x] Rediseñar Seguimiento con timeline de visita, control de calidad visible y próximas acciones sugeridas.
- [x] Rediseñar Salida con checklist final compacto, protección legal visible y validaciones previas a entrega.

### Fase 3 - Componentes y Consistencia
- [x] Crear librería interna de componentes UI reutilizables: cards, badges, tabs, modales, tablas, formularios y empty states.
- [x] Unificar los estados visuales del sistema: pendiente, en proceso, aprobado, bloqueado, listo, entregado, pagado.
- [x] Reemplazar tablas densas por listas, chips, tarjetas o grids cuando el contenido sea operativo y no contable.
- [x] Definir patrones consistentes para validaciones, mensajes, confirmaciones y errores sin depender de alert nativos.
- [x] Estandarizar botones primarios, secundarios, peligrosos y contextuales por módulo.

### Fase 4 - Responsive y Accesibilidad
- [x] Corregir y consolidar media queries para evitar reglas duplicadas o frágiles en móvil.
- [x] Adaptar módulos clave para uso táctil real en recepción y taller.
- [x] Mejorar accesibilidad de tabs, modales, foco, jerarquía semántica y navegación por teclado.
- [x] Asegurar contraste, tamaño táctil mínimo y estados de foco visibles en todos los controles.
- [x] Revisar impresión y exportación para que la UI operativa no interfiera con documentos imprimibles.

### Fase 5 - Arquitectura Frontend
- [x] Dividir app.js en módulos por dominio: shell, clientes, entrada, diagnóstico, cotización, seguimiento, salida, facturación.
- [x] Sustituir eventos inline en HTML por delegación con data-action y listeners centralizados por módulo.
- [x] Separar renderizado, estado y persistencia para reducir acoplamiento entre UI y lógica de negocio.
- [x] Crear utilidades compartidas para formateo, badges, fechas, moneda, validación y notificaciones.
- [x] Preparar la UI para deep links, restauración de contexto y navegación más predecible entre módulos.

### Fase 6 - Preparación para Escalabilidad
- [ ] Crear capa de repositorios/adaptadores para desacoplar la UI de localStorage.
- [ ] Preparar soporte visual para usuarios, roles, permisos y auditoría sin rehacer el layout.
- [ ] Diseñar vistas futuras para agenda, inventario, reserva de piezas y trazabilidad de cambios.
- [ ] Definir patrón de timeline por expediente para soportar historial completo, auditoría y postventa.
- [ ] Establecer roadmap de migración visual y técnica para pasar a backend sin interrumpir la operación actual.

### Quick Wins UI V2
- [ ] Reducir densidad vertical en formularios extensos con grids, acordeones y resúmenes contextuales.
- [x] Fijar una barra de acciones por módulo con Guardar, Continuar, Imprimir y Volver al expediente.
- [x] Convertir alertas críticas en banners o modales consistentes con copy accionable.
- [x] Mejorar los empty states del dashboard y módulos para guiar el siguiente paso del usuario.
- [x] Añadir indicadores visuales de progreso por visita para saber qué falta antes de facturar o entregar.
