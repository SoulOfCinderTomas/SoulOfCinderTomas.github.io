/**
 * ============================================
 * CONTENIDO DEL SITIO
 * ============================================
 */

export const site = {
  url: 'https://SoulOfCinderTomas.github.io',
  meta: {
    title: 'Tomás Triana Galvis | Portafolio Bases de Datos',
    description: 'Portafolio de evidencias para la asignatura de Bases de Datos: modelado, normalización, SQL y proyecto final.',
  },
  hero: {
    name: 'Tomás Triana Galvis',
    role: 'Estudiante de Bases de Datos',
    tagline: 'Soy un estudiante de la Universidad El Bosque, estoy cursando cuarto semestre de Ingeniería de Sistemas y tercero de Matemátematicas. Soy muy apasionado por las cosas que me hacen pensar, los videojuegos y la música. Siempre busco aprender cosas nuevas e interiorizarlas en mi vida. Este espacio estará dedicado a mi aprendizaje en la materia de Bases de Datos',

    avatarSrc: '/Foto.jpg',
    avatarAlt: 'Foto de perfil',
  },

  video: {
    type: 'youtube' as 'youtube' | 'file' | 'link',
    src: '/Portafolio.mp4',
    title: 'Video de presentación',
  },
} as const;
