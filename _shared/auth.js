/**
 * ============================================================
 *  AUTH.JS — Sistema de autenticación y sesión
 * ============================================================
 *
 *  Maneja todo lo relacionado con sesiones de usuario:
 *  - Guardar y recuperar datos de sesión
 *  - Verificar permisos por rol
 *  - Proteger páginas que requieren autenticación
 *  - Cerrar sesión
 *
 *  CÓMO CARGAR EN CUALQUIER PÁGINA:
 *  <script src="../../config.js"></script>
 *  <script src="../../_shared/auth.js"></script>
 *
 *  NOTA SOBRE PROFUNDIDAD DE RUTA:
 *  Páginas en la raíz:       src="_shared/auth.js"
 *  Páginas en una carpeta:   src="../_shared/auth.js"
 *  Páginas en dos carpetas:  src="../../_shared/auth.js"
 *
 *  CÓMO PROTEGER UNA PÁGINA:
 *  Al inicio del script de la página escribe:
 *
 *  // Solo maestros y advisors pueden ver esta página
 *  Auth.requerirRol(['maestro', 'advisor']);
 *
 *  // Solo admins, con ruta personalizada al portal
 *  Auth.requerirRol(['admin'], '../index.html');
 *
 *  CÓMO OBTENER DATOS DEL USUARIO ACTUAL:
 *  const usuario = Auth.obtenerUsuario();
 *  console.log(usuario.nombre);  // "Juan Pérez"
 *  console.log(usuario.rol);     // "maestro"
 *
 *  Proyecto: School System
 *  Repo:     https://github.com/MrPonc3/school-system
 * ============================================================
 */

const Auth = {

  // ----------------------------------------------------------
  //  Claves de sessionStorage
  //
  //  sessionStorage guarda datos SOLO mientras el navegador
  //  está abierto. Al cerrar el navegador o la pestaña,
  //  la sesión se limpia automáticamente.
  //
  //  Esto es diferente a localStorage, que persiste
  //  indefinidamente. Usamos sessionStorage por seguridad.
  // ----------------------------------------------------------
  CLAVES: {
    usuario:    'auth_usuario',
    rol:        'auth_rol',
    nombre:     'auth_nombre',
    // Datos de evaluación docente
    // IMPORTANTE: solo guardamos el grado, nunca el nombre
    // del alumno, para mantener el anonimato del formulario
    evalGrado:  'eval_grado',
  },

  // ----------------------------------------------------------
  //  iniciarSesion()
  //  Guarda los datos del usuario después de un login exitoso.
  //  Llamar desde el portal después de verificar credenciales.
  // ----------------------------------------------------------
  iniciarSesion(usuario, rol, nombre) {
    sessionStorage.setItem(this.CLAVES.usuario, usuario);
    sessionStorage.setItem(this.CLAVES.rol,     rol);
    sessionStorage.setItem(this.CLAVES.nombre,  nombre);
  },

  // ----------------------------------------------------------
  //  obtenerUsuario()
  //  Devuelve los datos del usuario actualmente autenticado.
  //  Retorna null si no hay sesión activa.
  // ----------------------------------------------------------
  obtenerUsuario() {
    const usuario = sessionStorage.getItem(this.CLAVES.usuario);
    if (!usuario) return null;
    return {
      usuario,
      rol:    sessionStorage.getItem(this.CLAVES.rol),
      nombre: sessionStorage.getItem(this.CLAVES.nombre),
    };
  },

  // ----------------------------------------------------------
  //  estaAutenticado()
  //  Verifica si hay una sesión activa.
  //  Retorna true o false.
  // ----------------------------------------------------------
  estaAutenticado() {
    return !!sessionStorage.getItem(this.CLAVES.usuario);
  },

  // ----------------------------------------------------------
  //  tieneRol()
  //  Verifica si el usuario actual tiene uno de los roles
  //  especificados en el array.
  //
  //  Ejemplo:
  //  Auth.tieneRol(['maestro', 'advisor']) → true o false
  // ----------------------------------------------------------
  tieneRol(roles) {
    const rolActual = sessionStorage.getItem(this.CLAVES.rol);
    return roles.includes(rolActual);
  },

  // ----------------------------------------------------------
  //  requerirRol()
  //  Protege una página verificando autenticación y rol.
  //  Si el usuario no cumple los requisitos, lo redirige
  //  automáticamente al portal.
  //
  //  IMPORTANTE: llamar al inicio del script de cada página
  //  protegida, antes de cualquier otra lógica.
  //
  //  @param roles  - array de roles permitidos
  //  @param ruta   - ruta al portal (ajustar según profundidad)
  //
  //  Profundidades comunes:
  //  Carpeta nivel 1: '../index.html'
  //  Carpeta nivel 2: '../../index.html'
  // ----------------------------------------------------------
  requerirRol(roles, ruta = '../../index.html') {
    if (!this.estaAutenticado() || !this.tieneRol(roles)) {
      window.location.href = ruta;
      return false;
    }
    return true;
  },

  // ----------------------------------------------------------
  //  cerrarSesion()
  //  Limpia todos los datos de sesión y redirige al portal.
  //  Llamar desde el botón "Cerrar sesión" de cada página.
  //
  //  @param ruta - ruta al portal
  // ----------------------------------------------------------
  cerrarSesion(ruta = '../../index.html') {
    sessionStorage.clear();
    window.location.href = ruta;
  },

  // ----------------------------------------------------------
  //  guardarGradoEval()
  //  Guarda el grado del alumno para el formulario de
  //  evaluación docente.
  //
  //  PRIVACIDAD: solo guardamos el GRADO, nunca el nombre
  //  ni el usuario. Esto garantiza el anonimato completo
  //  de las respuestas del formulario.
  //
  //  @param grado - grado del alumno, ej: '11th'
  // ----------------------------------------------------------
  guardarGradoEval(grado) {
    sessionStorage.setItem(this.CLAVES.evalGrado, grado);
  },

  // ----------------------------------------------------------
  //  obtenerGradoEval()
  //  Recupera el grado guardado para la evaluación.
  //  Retorna null si no hay grado guardado.
  // ----------------------------------------------------------
  obtenerGradoEval() {
    return sessionStorage.getItem(this.CLAVES.evalGrado);
  },

  // ----------------------------------------------------------
  //  renderizarBadgeRol()
  //  Genera el HTML del badge visual del rol del usuario.
  //  Útil para mostrar el rol en el header de cada página.
  //
  //  @param rol - rol del usuario
  //  @returns   - string HTML del badge
  // ----------------------------------------------------------
  renderizarBadgeRol(rol) {
    const config = CONFIG.roles[rol];
    if (!config) return '';
    return `<span class="badge-rol ${rol}">${config.etiqueta}</span>`;
  },

  // ----------------------------------------------------------
  //  inicializarHeader()
  //  Rellena automáticamente los elementos del header
  //  que tengan los IDs estándar del sistema.
  //
  //  Elementos que busca y rellena:
  //  #header-nombre  → nombre del usuario
  //  #header-rol     → badge del rol
  //
  //  Llamar después de requerirRol() en cada página.
  // ----------------------------------------------------------
  inicializarHeader() {
    const usuario = this.obtenerUsuario();
    if (!usuario) return;

    const elNombre = document.getElementById('header-nombre');
    const elRol    = document.getElementById('header-rol');

    if (elNombre) elNombre.textContent = usuario.nombre || usuario.usuario;
    if (elRol)    elRol.innerHTML      = this.renderizarBadgeRol(usuario.rol);
  },

};
