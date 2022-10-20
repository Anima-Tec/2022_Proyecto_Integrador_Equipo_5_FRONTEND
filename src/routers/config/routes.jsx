const ROUTES = {

  // auth pages
  login: '/login',
  register: '/register',

  // public pages
  home: '/',
  nuestrapropuesta: '/nuestra-propuesta',
  infoPracticas: '/info-practicas',
  infoPracticantes: '/info-practicantes',
  infoEmpresas: '/info-empresas',
  sobreEquipo: '/sobre-equipo',
  apoyanos: '/apoyanos',

  // private pages
  perfil: '/perfil',

  // student pages
  homeStudent: '/home-student',
  estadoInscripcion: '/estado-inscripcion',
  misPostulaciones: '/mis-postulaciones',
  oportunidadesPracticas: '/oportunidades-practicas',
  oportunidadPractica: '/oportunidad-practica/:id',
  empresas: '/empresas',
  practicasPracticantes: '/practicas-practicantes',
  recursos: '/recursos',

  empresaPage: '/empresa/:id',

  // company pages
  homeCompany: '/home-company',
  misPublicaciones: '/mis-publicaciones',
  practicantes: '/practicantes',
  practicasEmpresas: '/practicas-empresas',
};

export default ROUTES;
