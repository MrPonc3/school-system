/**
 * ============================================================
 *  CONFIG.JS — Configuración central del sistema escolar
 * ============================================================
 *
 *  Este es el único archivo que necesitas modificar para
 *  adaptar el sistema a una nueva institución o sección.
 *
 *  EXPORTABILIDAD:
 *  Si deseas usar este sistema en MS, PS u otra escuela,
 *  solo modifica los valores de este archivo.
 *  El resto del sistema se adapta automáticamente.
 *
 *  MANTENIMIENTO:
 *  Proyecto:  School System
 *  Versión:   2.0
 *  Repo:      https://github.com/MrPonc3/school-system
 * ============================================================
 */

const CONFIG = {

  // ----------------------------------------------------------
  //  INSTITUCIÓN
  //  Modifica estos valores para cada escuela o sección
  // ----------------------------------------------------------
  escuela: {
    nombre:      'High School',       // Nombre visible en el portal
    nombreCorto: 'HS',                // Abreviación para encabezados
    nivel:       'HS',                // HS | MS | PS — para reglas futuras
    añoEscolar:  '2025-2026',         // Año escolar actual
    logoPath:    '_shared/logo.svg',  // Reemplazar cuando el logo esté listo
  },

  // ----------------------------------------------------------
  //  API
  //  URL del Google Apps Script (backend gratuito)
  //  Reemplazar 'TU_URL_AQUI' con la URL real del script
  // ----------------------------------------------------------
  api: {
    url: 'TU_URL_AQUI',
  },

  // ----------------------------------------------------------
  //  COLORES INSTITUCIONALES
  //  Valores provisionales — reemplazar con colores reales
  //  cuando el documento de identidad visual esté disponible
  //
  //  Formato: código hexadecimal (#RRGGBB)
  // ----------------------------------------------------------
  colores: {
    primario:        '#1a365d',   // Azul marino — color principal
    primarioClaro:   '#2a4a7f',   // Versión clara del primario
    secundario:      '#c9a84c',   // Dorado — color de acento
    secundarioClaro: '#e2c56d',   // Versión clara del dorado
    fondo:           '#f0f4f8',   // Fondo general
    texto:           '#1a202c',   // Texto principal
    textoSuave:      '#718096',   // Texto secundario
    borde:           '#e2e8f0',   // Bordes
    exito:           '#38a169',   // Verde
    error:           '#e53e3e',   // Rojo
    alerta:          '#ed8936',   // Naranja
    info:            '#3182ce',   // Azul
  },

  // ----------------------------------------------------------
  //  IDIOMAS
  //  Para agregar un idioma nuevo:
  //    1. Agrega su código aquí en 'disponibles'
  //    2. Agrega sus traducciones en _shared/i18n.js
  // ----------------------------------------------------------
  idiomas: {
    disponibles: ['en', 'es', 'fr', 'zh'],
    default:     'en',
    etiquetas: {
      en: 'EN',
      es: 'ES',
      fr: 'FR',
      zh: '中文',
    },
  },

  // ----------------------------------------------------------
  //  MÓDULOS
  //  true  = visible y activo en el portal
  //  false = aparece como "Coming soon" o se oculta
  //  Cambiar este valor no borra el módulo, solo lo desactiva
  // ----------------------------------------------------------
  modulos: {
    evaluacionDocente: true,
    intervencion:      false,   // Activa cuando esté listo
    casas:             false,   // Activa cuando esté listo
    faltasRetardos:    false,   // Próximamente
    teacherReports:    false,   // Próximamente
  },

  // ----------------------------------------------------------
  //  ROLES
  //  Define cómo se ve cada rol en la interfaz
  //  Para agregar un rol nuevo, agrega un bloque aquí
  // ----------------------------------------------------------
  roles: {
    admin: {
      etiqueta:    'Administrator',
      color:       '#276749',
      colorFondo:  '#f0fff4',
      colorBorde:  '#9ae6b4',
    },
    advisor: {
      etiqueta:    'Advisor',
      color:       '#6b46c1',
      colorFondo:  '#faf5ff',
      colorBorde:  '#d6bcfa',
    },
    maestro: {
      etiqueta:    'Teacher',
      color:       '#2b6cb0',
      colorFondo:  '#ebf8ff',
      colorBorde:  '#90cdf4',
    },
    encargado: {
      etiqueta:    'House Leader',
      color:       '#c05621',
      colorFondo:  '#fffaf0',
      colorBorde:  '#fbd38d',
    },
    alumno: {
      etiqueta:    'Student',
      color:       '#2d3748',
      colorFondo:  '#f7fafc',
      colorBorde:  '#e2e8f0',
    },
  },

  // ----------------------------------------------------------
  //  CASAS
  //  Reemplazar con los datos reales cuando estén disponibles:
  //  nombre, color, colorClaro, colorTexto y ruta al escudo
  // ----------------------------------------------------------
  casas: [
    {
      id:          'casa1',
      nombre:      'Casa 1',               // ← Reemplazar
      color:       '#c53030',              // ← Reemplazar
      colorClaro:  '#fff5f5',              // ← Reemplazar
      colorTexto:  '#ffffff',
      escudo:      '_shared/casas/casa1.svg',
      descripcion: 'Descripción de la casa 1',
    },
    {
      id:          'casa2',
      nombre:      'Casa 2',               // ← Reemplazar
      color:       '#2b6cb0',              // ← Reemplazar
      colorClaro:  '#ebf8ff',              // ← Reemplazar
      colorTexto:  '#ffffff',
      escudo:      '_shared/casas/casa2.svg',
      descripcion: 'Descripción de la casa 2',
    },
    {
      id:          'casa3',
      nombre:      'Casa 3',               // ← Reemplazar
      color:       '#276749',              // ← Reemplazar
      colorClaro:  '#f0fff4',              // ← Reemplazar
      colorTexto:  '#ffffff',
      escudo:      '_shared/casas/casa3.svg',
      descripcion: 'Descripción de la casa 3',
    },
    {
      id:          'casa4',
      nombre:      'Casa 4',               // ← Reemplazar
      color:       '#c9a84c',              // ← Reemplazar
      colorClaro:  '#fffff0',              // ← Reemplazar
      colorTexto:  '#1a202c',
      escudo:      '_shared/casas/casa4.svg',
      descripcion: 'Descripción de la casa 4',
    },
  ],

};
