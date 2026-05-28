/**
 * ============================================================
 *  I18N.JS — Sistema de idiomas (internacionalización)
 * ============================================================
 *
 *  Contiene todas las traducciones del sistema en 4 idiomas:
 *  Inglés (en), Español (es), Francés (fr), Chino (zh)
 *
 *  CÓMO USAR EN UNA PÁGINA:
 *  1. Carga los scripts en el <head>:
 *     <script src="../../config.js"></script>
 *     <script src="../../_shared/i18n.js"></script>
 *
 *  2. Agrega el atributo data-i18n a tus elementos HTML:
 *     <h1 data-i18n="portal.titulo"></h1>
 *     <input data-i18n-placeholder="portal.usuario">
 *
 *  3. Llama aplicarIdioma() cuando cargue la página:
 *     document.addEventListener('DOMContentLoaded', aplicarIdioma);
 *
 *  CÓMO AGREGAR UN IDIOMA NUEVO:
 *  1. Agrega su código en config.js → idiomas.disponibles
 *  2. Copia el bloque 'en' completo aquí abajo
 *  3. Cambia la clave 'en' por el nuevo código
 *  4. Traduce cada valor
 *
 *  CÓMO AGREGAR TEXTOS NUEVOS:
 *  1. Agrega la clave y valor en el bloque 'en'
 *  2. Agrega la traducción en los otros 3 idiomas
 *
 *  Proyecto: School System
 *  Repo:     https://github.com/MrPonc3/school-system
 * ============================================================
 */

const I18N = {

  // ── INGLÉS — idioma base del sistema ──────────────────────
  en: {

    // Portal y login
    'portal.titulo':            'School Portal',
    'portal.subtitulo':         'Academic management system',
    'portal.bienvenida':        'Welcome back,',
    'portal.usuario':           'Username',
    'portal.password':          'Password',
    'portal.ingresar':          'Sign in',
    'portal.verificando':       'Verifying...',
    'portal.cerrarSesion':      'Sign out',
    'portal.proximamente':      'Coming soon',
    'portal.error.campos':      'Please enter your username and password.',
    'portal.error.credenciales':'Incorrect username or password.',
    'portal.error.conexion':    'Connection error. Please try again.',

    // Módulos — títulos y descripciones en el hub
    'modulo.evaluacion.titulo':   'Teacher Evaluation',
    'modulo.evaluacion.desc':     'Semester evaluation forms',
    'modulo.intervencion.titulo': 'Intervention',
    'modulo.intervencion.desc':   'Tutoring and academic follow-up',
    'modulo.casas.titulo':        'House System',
    'modulo.casas.desc':          'Points, activities and rankings',
    'modulo.faltas.titulo':       'Attendance',
    'modulo.faltas.desc':         'Absences and tardiness',
    'modulo.reportes.titulo':     'Teacher Reports',
    'modulo.reportes.desc':       'Academic reports and comments',

    // Roles
    'rol.admin':      'Administrator',
    'rol.advisor':    'Advisor',
    'rol.maestro':    'Teacher',
    'rol.encargado':  'House Leader',
    'rol.alumno':     'Student',

    // Generales — reutilizados en todo el sistema
    'general.cargando':          'Loading...',
    'general.guardar':           'Save',
    'general.cancelar':          'Cancel',
    'general.eliminar':          'Delete',
    'general.editar':            'Edit',
    'general.agregar':           'Add',
    'general.actualizar':        'Refresh',
    'general.cerrar':            'Close',
    'general.si':                'Yes',
    'general.no':                'No',
    'general.buscar':            'Search',
    'general.filtrar':           'Filter',
    'general.exportar':          'Export',
    'general.anterior':          'Previous',
    'general.siguiente':         'Next',
    'general.sinDatos':          'No data available.',
    'general.exito':             'Saved successfully.',
    'general.error':             'An error occurred. Please try again.',
    'general.confirmarEliminar': 'Are you sure? This action cannot be undone.',

    // Evaluación docente — login
    'eval.titulo':               'Teacher Evaluation',
    'eval.subtitulo':            'High School — Semester',
    'eval.privacidad.titulo':    'Your privacy is protected',
    'eval.privacidad.texto':     'Although you sign in to identify your grade, your name is never saved with your answers. The form is completely anonymous.',

    // Evaluación docente — formulario
    'eval.progreso':             'Subject {actual} of {total}',
    'eval.anonimo':              'Your identity is not stored with your answers. This evaluation is completely anonymous.',
    'eval.stronglyDisagree':     'Strongly Disagree',
    'eval.stronglyAgree':        'Strongly Agree',
    'eval.comentario.label':     'What is one thing your teacher does well, and one thing that could improve? (optional)',
    'eval.comentario.placeholder':'Write your comment here...',
    'eval.responder':            'Answer all questions to continue.',
    'eval.enviar':               'Submit evaluation',
    'eval.enviando':             'Sending...',
    'eval.sinMaterias.titulo':   'No subjects assigned',
    'eval.sinMaterias.texto':    'No subjects were found for grade {grado}. Please contact your advisor.',

    // Evaluación docente — pantalla de éxito
    'eval.exito.titulo':         'Thank you for your feedback!',
    'eval.exito.texto':          'Your evaluation has been submitted. Your responses are anonymous and will help improve teaching quality.',
    'eval.exito.volver':         'Return to portal',

    // Evaluación docente — preguntas
    'eval.q1': 'My teacher explains things clearly.',
    'eval.q2': 'My teacher is knowledgeable about the subject.',
    'eval.q3': 'The feedback I receive helps me improve.',
    'eval.q4': 'I feel respected and valued in this class.',
    'eval.q5': 'I feel comfortable asking questions or sharing my ideas.',
    'eval.q6': 'This class is well organized and focused.',
    'eval.q7': 'My teacher makes the class interesting and engaging.',
    'eval.q8': 'I feel appropriately challenged in this class.',

    // Evaluación docente — categorías
    'eval.cat.claridad':   'Clarity',
    'eval.cat.ambiente':   'Environment',
    'eval.cat.engagement': 'Engagement',

    // Dashboard de resultados
    'resultados.titulo':          'Results — Teacher Evaluation',
    'resultados.misResultados':   'My results',
    'resultados.claridad':        'Clarity index',
    'resultados.ambiente':        'Environment index',
    'resultados.engagement':      'Engagement index',
    'resultados.detalleHint':     'Click for detail ↓',
    'resultados.cerrarDetalle':   'Close detail',
    'resultados.distribucion':    'Response distribution',
    'resultados.porMaestro':      'Results by teacher',
    'resultados.comentarios':     'Student comments',
    'resultados.respuestas':      'responses',
    'resultados.semestre':        'Semester',
    'resultados.todos':           'All',
    'resultados.aplicar':         'Apply filters',
    'resultados.teacher':         'Teacher',
    'resultados.subject':         'Subject',
    'resultados.grade':           'Grade',
    'resultados.overall':         'Overall',
  },


  // ── ESPAÑOL ────────────────────────────────────────────────
  es: {

    'portal.titulo':            'Portal Escolar',
    'portal.subtitulo':         'Sistema de gestión académica',
    'portal.bienvenida':        'Bienvenido/a,',
    'portal.usuario':           'Usuario',
    'portal.password':          'Contraseña',
    'portal.ingresar':          'Ingresar',
    'portal.verificando':       'Verificando...',
    'portal.cerrarSesion':      'Cerrar sesión',
    'portal.proximamente':      'Próximamente',
    'portal.error.campos':      'Por favor ingresa tu usuario y contraseña.',
    'portal.error.credenciales':'Usuario o contraseña incorrectos.',
    'portal.error.conexion':    'Error de conexión. Intenta de nuevo.',

    'modulo.evaluacion.titulo':   'Evaluación Docente',
    'modulo.evaluacion.desc':     'Formularios de evaluación semestral',
    'modulo.intervencion.titulo': 'Intervención',
    'modulo.intervencion.desc':   'Tutorías y seguimiento académico',
    'modulo.casas.titulo':        'Sistema de Casas',
    'modulo.casas.desc':          'Puntos, actividades y rankings',
    'modulo.faltas.titulo':       'Asistencia',
    'modulo.faltas.desc':         'Faltas y retardos',
    'modulo.reportes.titulo':     'Reportes Docentes',
    'modulo.reportes.desc':       'Reportes y comentarios académicos',

    'rol.admin':      'Administrador',
    'rol.advisor':    'Advisor',
    'rol.maestro':    'Maestro',
    'rol.encargado':  'Encargado de Casa',
    'rol.alumno':     'Alumno',

    'general.cargando':          'Cargando...',
    'general.guardar':           'Guardar',
    'general.cancelar':          'Cancelar',
    'general.eliminar':          'Eliminar',
    'general.editar':            'Editar',
    'general.agregar':           'Agregar',
    'general.actualizar':        'Actualizar',
    'general.cerrar':            'Cerrar',
    'general.si':                'Sí',
    'general.no':                'No',
    'general.buscar':            'Buscar',
    'general.filtrar':           'Filtrar',
    'general.exportar':          'Exportar',
    'general.anterior':          'Anterior',
    'general.siguiente':         'Siguiente',
    'general.sinDatos':          'No hay datos disponibles.',
    'general.exito':             'Guardado correctamente.',
    'general.error':             'Ocurrió un error. Intenta de nuevo.',
    'general.confirmarEliminar': '¿Estás seguro? Esta acción no se puede deshacer.',

    'eval.titulo':               'Evaluación Docente',
    'eval.subtitulo':            'High School — Semestral',
    'eval.privacidad.titulo':    'Tu privacidad está protegida',
    'eval.privacidad.texto':     'Aunque inicias sesión para identificar tu grado, tu nombre nunca se guarda con tus respuestas. El formulario es completamente anónimo.',

    'eval.progreso':             'Materia {actual} de {total}',
    'eval.anonimo':              'Tu identidad no se almacena con tus respuestas. Esta evaluación es completamente anónima.',
    'eval.stronglyDisagree':     'Totalmente en desacuerdo',
    'eval.stronglyAgree':        'Totalmente de acuerdo',
    'eval.comentario.label':     '¿Qué hace bien tu maestro y qué podría mejorar? (opcional)',
    'eval.comentario.placeholder':'Escribe tu comentario aquí...',
    'eval.responder':            'Responde todas las preguntas para continuar.',
    'eval.enviar':               'Enviar evaluación',
    'eval.enviando':             'Enviando...',
    'eval.sinMaterias.titulo':   'Sin materias asignadas',
    'eval.sinMaterias.texto':    'No se encontraron materias para el grado {grado}. Contacta a tu advisor.',

    'eval.exito.titulo':         '¡Gracias por tu retroalimentación!',
    'eval.exito.texto':          'Tu evaluación fue enviada correctamente. Tus respuestas son anónimas y ayudarán a mejorar la calidad de la enseñanza.',
    'eval.exito.volver':         'Volver al portal',

    'eval.q1': 'Mi maestro explica las cosas con claridad.',
    'eval.q2': 'Mi maestro conoce bien la materia.',
    'eval.q3': 'La retroalimentación que recibo me ayuda a mejorar.',
    'eval.q4': 'Me siento respetado/a y valorado/a en esta clase.',
    'eval.q5': 'Me siento cómodo/a haciendo preguntas o compartiendo mis ideas.',
    'eval.q6': 'Esta clase está bien organizada y enfocada.',
    'eval.q7': 'Mi maestro hace la clase interesante y atractiva.',
    'eval.q8': 'Me siento apropiadamente retado/a en esta clase.',

    'eval.cat.claridad':   'Claridad',
    'eval.cat.ambiente':   'Ambiente',
    'eval.cat.engagement': 'Participación',

    'resultados.titulo':          'Resultados — Evaluación Docente',
    'resultados.misResultados':   'Mis resultados',
    'resultados.claridad':        'Índice de Claridad',
    'resultados.ambiente':        'Índice de Ambiente',
    'resultados.engagement':      'Índice de Participación',
    'resultados.detalleHint':     'Clic para ver detalle ↓',
    'resultados.cerrarDetalle':   'Cerrar detalle',
    'resultados.distribucion':    'Distribución de respuestas',
    'resultados.porMaestro':      'Resultados por maestro',
    'resultados.comentarios':     'Comentarios de alumnos',
    'resultados.respuestas':      'respuestas',
    'resultados.semestre':        'Semestre',
    'resultados.todos':           'Todos',
    'resultados.aplicar':         'Aplicar filtros',
    'resultados.teacher':         'Maestro',
    'resultados.subject':         'Materia',
    'resultados.grade':           'Grado',
    'resultados.overall':         'General',
  },


  // ── FRANCÉS ────────────────────────────────────────────────
  fr: {

    'portal.titulo':            'Portail Scolaire',
    'portal.subtitulo':         'Système de gestion académique',
    'portal.bienvenida':        'Bon retour,',
    'portal.usuario':           "Nom d'utilisateur",
    'portal.password':          'Mot de passe',
    'portal.ingresar':          'Se connecter',
    'portal.verificando':       'Vérification...',
    'portal.cerrarSesion':      'Se déconnecter',
    'portal.proximamente':      'Bientôt disponible',
    'portal.error.campos':      "Veuillez entrer votre nom d'utilisateur et votre mot de passe.",
    'portal.error.credenciales':"Nom d'utilisateur ou mot de passe incorrect.",
    'portal.error.conexion':    'Erreur de connexion. Veuillez réessayer.',

    'modulo.evaluacion.titulo':   'Évaluation des enseignants',
    'modulo.evaluacion.desc':     'Formulaires d\'évaluation semestrielle',
    'modulo.intervencion.titulo': 'Intervention',
    'modulo.intervencion.desc':   'Tutorat et suivi académique',
    'modulo.casas.titulo':        'Système de maisons',
    'modulo.casas.desc':          'Points, activités et classements',
    'modulo.faltas.titulo':       'Présences',
    'modulo.faltas.desc':         'Absences et retards',
    'modulo.reportes.titulo':     'Rapports des enseignants',
    'modulo.reportes.desc':       'Rapports et commentaires académiques',

    'rol.admin':      'Administrateur',
    'rol.advisor':    'Conseiller',
    'rol.maestro':    'Enseignant',
    'rol.encargado':  'Responsable de maison',
    'rol.alumno':     'Élève',

    'general.cargando':          'Chargement...',
    'general.guardar':           'Enregistrer',
    'general.cancelar':          'Annuler',
    'general.eliminar':          'Supprimer',
    'general.editar':            'Modifier',
    'general.agregar':           'Ajouter',
    'general.actualizar':        'Actualiser',
    'general.cerrar':            'Fermer',
    'general.si':                'Oui',
    'general.no':                'Non',
    'general.buscar':            'Rechercher',
    'general.filtrar':           'Filtrer',
    'general.exportar':          'Exporter',
    'general.anterior':          'Précédent',
    'general.siguiente':         'Suivant',
    'general.sinDatos':          'Aucune donnée disponible.',
    'general.exito':             'Enregistré avec succès.',
    'general.error':             "Une erreur s'est produite. Veuillez réessayer.",
    'general.confirmarEliminar': 'Êtes-vous sûr ? Cette action est irréversible.',

    'eval.titulo':               'Évaluation des enseignants',
    'eval.subtitulo':            'Lycée — Semestrielle',
    'eval.privacidad.titulo':    'Votre vie privée est protégée',
    'eval.privacidad.texto':     "Bien que vous vous connectiez pour identifier votre classe, votre nom n'est jamais enregistré avec vos réponses. Le formulaire est complètement anonyme.",

    'eval.progreso':             'Matière {actual} sur {total}',
    'eval.anonimo':              "Votre identité n'est pas stockée avec vos réponses. Cette évaluation est complètement anonyme.",
    'eval.stronglyDisagree':     "Pas du tout d'accord",
    'eval.stronglyAgree':        "Tout à fait d'accord",
    'eval.comentario.label':     "Qu'est-ce que votre enseignant fait bien et qu'est-ce qui pourrait être amélioré ? (facultatif)",
    'eval.comentario.placeholder':'Écrivez votre commentaire ici...',
    'eval.responder':            'Répondez à toutes les questions pour continuer.',
    'eval.enviar':               "Soumettre l'évaluation",
    'eval.enviando':             'Envoi en cours...',
    'eval.sinMaterias.titulo':   'Aucune matière assignée',
    'eval.sinMaterias.texto':    'Aucune matière trouvée pour la classe {grado}. Contactez votre conseiller.',

    'eval.exito.titulo':         'Merci pour vos commentaires !',
    'eval.exito.texto':          "Votre évaluation a été soumise. Vos réponses sont anonymes et aideront à améliorer la qualité de l'enseignement.",
    'eval.exito.volver':         'Retour au portail',

    'eval.q1': 'Mon enseignant explique les choses clairement.',
    'eval.q2': 'Mon enseignant connaît bien la matière.',
    'eval.q3': 'Les retours que je reçois m\'aident à progresser.',
    'eval.q4': 'Je me sens respecté(e) et valorisé(e) dans cette classe.',
    'eval.q5': "Je me sens à l'aise pour poser des questions ou partager mes idées.",
    'eval.q6': 'Cette classe est bien organisée et concentrée.',
    'eval.q7': 'Mon enseignant rend le cours intéressant et engageant.',
    'eval.q8': 'Je me sens suffisamment mis(e) au défi dans cette classe.',

    'eval.cat.claridad':   'Clarté',
    'eval.cat.ambiente':   'Environnement',
    'eval.cat.engagement': 'Engagement',

    'resultados.titulo':          'Résultats — Évaluation des enseignants',
    'resultados.misResultados':   'Mes résultats',
    'resultados.claridad':        'Indice de clarté',
    'resultados.ambiente':        "Indice d'environnement",
    'resultados.engagement':      "Indice d'engagement",
    'resultados.detalleHint':     'Cliquez pour les détails ↓',
    'resultados.cerrarDetalle':   'Fermer le détail',
    'resultados.distribucion':    'Distribution des réponses',
    'resultados.porMaestro':      'Résultats par enseignant',
    'resultados.comentarios':     'Commentaires des élèves',
    'resultados.respuestas':      'réponses',
    'resultados.semestre':        'Semestre',
    'resultados.todos':           'Tous',
    'resultados.aplicar':         'Appliquer les filtres',
    'resultados.teacher':         'Enseignant',
    'resultados.subject':         'Matière',
    'resultados.grade':           'Classe',
    'resultados.overall':         'Général',
  },


  // ── CHINO SIMPLIFICADO ─────────────────────────────────────
  zh: {

    'portal.titulo':            '学校门户',
    'portal.subtitulo':         '学术管理系统',
    'portal.bienvenida':        '欢迎回来，',
    'portal.usuario':           '用户名',
    'portal.password':          '密码',
    'portal.ingresar':          '登录',
    'portal.verificando':       '验证中...',
    'portal.cerrarSesion':      '退出登录',
    'portal.proximamente':      '即将推出',
    'portal.error.campos':      '请输入您的用户名和密码。',
    'portal.error.credenciales':'用户名或密码不正确。',
    'portal.error.conexion':    '连接错误，请重试。',

    'modulo.evaluacion.titulo':   '教师评估',
    'modulo.evaluacion.desc':     '学期评估表',
    'modulo.intervencion.titulo': '干预系统',
    'modulo.intervencion.desc':   '辅导与学业跟踪',
    'modulo.casas.titulo':        '学院系统',
    'modulo.casas.desc':          '积分、活动与排名',
    'modulo.faltas.titulo':       '出勤管理',
    'modulo.faltas.desc':         '缺勤与迟到',
    'modulo.reportes.titulo':     '教师报告',
    'modulo.reportes.desc':       '学术报告与评语',

    'rol.admin':      '管理员',
    'rol.advisor':    '顾问',
    'rol.maestro':    '教师',
    'rol.encargado':  '学院负责人',
    'rol.alumno':     '学生',

    'general.cargando':          '加载中...',
    'general.guardar':           '保存',
    'general.cancelar':          '取消',
    'general.eliminar':          '删除',
    'general.editar':            '编辑',
    'general.agregar':           '添加',
    'general.actualizar':        '刷新',
    'general.cerrar':            '关闭',
    'general.si':                '是',
    'general.no':                '否',
    'general.buscar':            '搜索',
    'general.filtrar':           '筛选',
    'general.exportar':          '导出',
    'general.anterior':          '上一个',
    'general.siguiente':         '下一个',
    'general.sinDatos':          '暂无数据。',
    'general.exito':             '保存成功。',
    'general.error':             '发生错误，请重试。',
    'general.confirmarEliminar': '确定要删除吗？此操作无法撤销。',

    'eval.titulo':               '教师评估',
    'eval.subtitulo':            '高中 — 学期评估',
    'eval.privacidad.titulo':    '您的隐私受到保护',
    'eval.privacidad.texto':     '虽然您登录是为了识别您的年级，但您的姓名永远不会与您的回答一起保存。表格完全匿名。',

    'eval.progreso':             '科目 {actual} / {total}',
    'eval.anonimo':              '您的身份不会与您的回答一起存储。此评估完全匿名。',
    'eval.stronglyDisagree':     '强烈不同意',
    'eval.stronglyAgree':        '强烈同意',
    'eval.comentario.label':     '您的老师有什么做得好的，有什么可以改进的？（可选）',
    'eval.comentario.placeholder':'在此写下您的评论...',
    'eval.responder':            '请回答所有问题以继续。',
    'eval.enviar':               '提交评估',
    'eval.enviando':             '提交中...',
    'eval.sinMaterias.titulo':   '未分配科目',
    'eval.sinMaterias.texto':    '未找到年级 {grado} 的科目，请联系您的顾问。',

    'eval.exito.titulo':         '感谢您的反馈！',
    'eval.exito.texto':          '您的评估已成功提交。您的回答是匿名的，将有助于提高教学质量。',
    'eval.exito.volver':         '返回门户',

    'eval.q1': '我的老师解释得很清楚。',
    'eval.q2': '我的老师对所教科目有深入了解。',
    'eval.q3': '我收到的反馈帮助我进步。',
    'eval.q4': '我在这个班级感到被尊重和重视。',
    'eval.q5': '我感到可以舒适地提问或分享想法。',
    'eval.q6': '这个班级组织良好，专注有序。',
    'eval.q7': '我的老师让课堂有趣且富有吸引力。',
    'eval.q8': '我在这个班级感到受到了适当的挑战。',

    'eval.cat.claridad':   '清晰度',
    'eval.cat.ambiente':   '课堂环境',
    'eval.cat.engagement': '参与度',

    'resultados.titulo':          '结果 — 教师评估',
    'resultados.misResultados':   '我的结果',
    'resultados.claridad':        '清晰度指数',
    'resultados.ambiente':        '环境指数',
    'resultados.engagement':      '参与度指数',
    'resultados.detalleHint':     '点击查看详情 ↓',
    'resultados.cerrarDetalle':   '关闭详情',
    'resultados.distribucion':    '回答分布',
    'resultados.porMaestro':      '按教师查看结果',
    'resultados.comentarios':     '学生评论',
    'resultados.respuestas':      '条回答',
    'resultados.semestre':        '学期',
    'resultados.todos':           '全部',
    'resultados.aplicar':         '应用筛选',
    'resultados.teacher':         '教师',
    'resultados.subject':         '科目',
    'resultados.grade':           '年级',
    'resultados.overall':         '总体',
  },

};


// ── FUNCIONES DE IDIOMA ────────────────────────────────────────

/**
 * Devuelve el texto traducido para una clave dada.
 * Si la clave no existe en el idioma activo, usa inglés como fallback.
 * Si tampoco existe en inglés, devuelve la clave misma.
 *
 * @param {string} clave      - clave de traducción, ej: 'portal.titulo'
 * @param {object} variables  - variables a reemplazar, ej: {actual: 1, total: 5}
 * @returns {string}          - texto traducido
 *
 * Ejemplo:
 * t('eval.progreso', { actual: 2, total: 6 })
 * → "Subject 2 of 6"  (en inglés)
 * → "Materia 2 de 6"  (en español)
 */
function t(clave, variables = {}) {
  const idioma = localStorage.getItem('idioma') || CONFIG.idiomas.default;
  const textos = I18N[idioma] || I18N[CONFIG.idiomas.default];
  let texto    = textos[clave] || I18N[CONFIG.idiomas.default][clave] || clave;

  // Reemplazar variables en el texto — {nombre} → valor
  Object.entries(variables).forEach(([k, v]) => {
    texto = texto.replace(`{${k}}`, v);
  });

  return texto;
}

/**
 * Aplica las traducciones a todos los elementos HTML
 * que tengan el atributo data-i18n o data-i18n-placeholder.
 *
 * Llamar después de cargar el DOM:
 * document.addEventListener('DOMContentLoaded', aplicarIdioma);
 *
 * O al cambiar el idioma:
 * cambiarIdioma('es');
 */
function aplicarIdioma() {
  // Textos normales
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  // Placeholders de inputs
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  // Actualizar botones del selector de idioma
  const idiomaActivo = localStorage.getItem('idioma') || CONFIG.idiomas.default;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === idiomaActivo);
  });
}

/**
 * Cambia el idioma activo, lo guarda en localStorage
 * y recarga todas las traducciones de la página.
 *
 * @param {string} codigo - código del idioma: 'en' | 'es' | 'fr' | 'zh'
 */
function cambiarIdioma(codigo) {
  if (!CONFIG.idiomas.disponibles.includes(codigo)) return;
  localStorage.setItem('idioma', codigo);
  aplicarIdioma();
  // Notificar a módulos que escuchen cambios de idioma
  window.dispatchEvent(new CustomEvent('idiomaChanged', { detail: { idioma: codigo } }));
}
