/**
 * ============================================
 * CONTENIDO DEL SITIO
 * ============================================
 * Edita estos campos con tu información.
 */

export const site = {
  url: 'https://SoulOfCinderTomas.github.io',
  meta: {
    title: 'Tu Nombre | Portafolio Bases de Datos',
    description: 'Portafolio de evidencias para la asignatura de Bases de Datos: modelado, normalización, SQL y proyecto final.',
  },
  hero: {
    name: 'Tu Nombre',
    role: 'Estudiante de Bases de Datos',
    tagline: 'Escribe aquí una breve presentación sobre ti, tu carrera y qué encontrará el profesor en este portafolio.',
    // Reemplaza por tu foto. Puedes subir la imagen a /public y poner aquí '/tu-foto.jpg'
    avatarSrc: '/favicon.svg',
    avatarAlt: 'Foto de perfil',
  },
  /**
   * Video de presentación.
   * type: 'youtube' -> pega el link normal de YouTube (se convierte a embed automáticamente)
   * type: 'file'    -> sube tu .mp4 a /public y escribe aquí el nombre, ej: 'mi-video.mp4'
   * type: 'link'    -> cualquier otro enlace externo (se muestra como botón)
   * Si dejas src vacío, se muestra un aviso de "aún no hay video".
   */
  video: {
    type: 'youtube' as 'youtube' | 'file' | 'link',
    src: '',
    title: 'Video de presentación',
  },
} as const;
