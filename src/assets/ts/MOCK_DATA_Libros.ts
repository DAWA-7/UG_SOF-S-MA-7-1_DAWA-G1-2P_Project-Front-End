export const mockDataCategoria = [
  { id_categoria: 1, nombre_categoria: 'Ciencia Ficción' },
  { id_categoria: 2, nombre_categoria: 'Clásicos' },
  { id_categoria: 3, nombre_categoria: 'Histórica' },
  { id_categoria: 4, nombre_categoria: 'Juvenil' },
  { id_categoria: 5, nombre_categoria: 'Romance' },
  { id_categoria: 6, nombre_categoria: 'Terror' },
];
export const mockDataLibros = [
  {
    id_libro: 1,
    autor: 'Federico Moccia',
    editorial: 'Planeta',
    id_categoria: 4 /*Juvenil*/,
    fecha_publicacion: new Date('2020-06-16'),
    num_paginas: 464,
    isbn: '9788408230496',
    descripcion:
      'Tras un paréntesis en Rusia, para Sofia ha llegado el momento de poner orden a su vida sentimental. Ya no puede seguir huyendo de su pasado, de la soledad de su matrimonio, ni de la historia pasional y rota con Tancredi, y decide regresar a Roma. En un viaje a Sicilia para visitar a sus padres, descubrirá un secreto familiar que le afectará profundamente. Mientras tanto, Tancredi sigue todos sus pasos; es un hombre enamorado que nunca se ha rendido a la primera. Pero Sofía no confía en él… ¿Acabarán reencontrándose?',
    titulo: 'Mil noches sin ti',
    cantidad: 5,
    precio: 9.59,
    imagen: 'MilNochesSinTi.webp',
  },
  {
    id_libro: 2,
    autor: 'Juan Carlos Florez',
    editorial: 'Ariel',
    id_categoria: 3 /*Histórica*/,
    fecha_publicacion: new Date('2021-05-24'),
    num_paginas: 356,
    isbn: '9789584294647',
    descripcion:
      'Un análisis profundo, sobre el estado actual de la sociedad humana. Un libro que nos incita a cambiar lo que ahora tenemos, y, desde nosotros mismos, empezar a realizar la verdadera revolución pacífica.' +
      'Recomendado del librero. Qué insólita paradoja define nuestra época, las primeras generaciones globales, las más educadas de la historia, no logran hallar el camino para realizarse. ¿Qué se los impide? ¿Qué poderosas fuerzas tienen el poder de cerrarle el camino a las mayorías y de decidir por ellas su destino? ¿Por qué parecemos avanzar imparables hacia cada vez más grandes catástrofes sin que podamos detener a quienes controlan el mundo? ¿Qué se halla en la raíz del profundo desasosiego y angustia que hoy nos invade en todos los rincones de nuestro frágil planeta?.',
    titulo: 'Los que sobran',
    cantidad: 15,
    precio: 10.59,
    imagen: 'LosQueSobran.webp',
  },
  {
    id_libro: 3,
    autor: 'Jennifer McMahon',
    editorial: 'Planeta',
    id_categoria: 1 /*Ciencia Ficción*/,
    fecha_publicacion: new Date('2021-08-16'),
    num_paginas: 496,
    isbn: '9786070778087',
    descripcion:
      'Helen y Nate dejan atrás la ciudad para mudarse al campo. Quieren construir la casa de sus sueños en un terreno rural a las afueras de un bosque. Cuando descubren que su magnífica propiedad tiene un pasado violento y oscuro, Helen, que era profesora de historia, quedará fascinada por la leyenda local de Hattie Breckenridge, que fue acusada de brujería hace más de cien años. Cuando se sumerge en la historia de Hattie y sus descendientes, descubrirá que ese linaje llega hasta la actualidad. Conforme avance la construcción de la casa, un peligro inesperado acechará a sus dueños y al resto de habitantes del lugar.',
    titulo: 'La Invitada',
    cantidad: 0,
    precio: 19.8,
    imagen: 'LaInvitada.webp',
  },
  {
    id_libro: 4,
    autor: 'Jennifer Lynn Barnes',
    editorial: 'Molino',
    id_categoria: 6 /*Juvenil, Terror*/,
    fecha_publicacion: new Date('2022-03-17'),
    num_paginas: 448,
    isbn: '9788427223622',
    descripcion:
      'Adéntrate en la historia de una cenicienta moderna, repleta de giros inesperados y misterios sin resolver. CUARENTA Y SEIS MIL DOSCIENTOS MILLONES DE DÓLARES. —Pensé. El corazón me retumbaba contra las costillas y tenía la boca tan seca como el papel de lija. Tobias Hawthorne tenía cuarenta y seis mil doscientos millones de dólares. Tobias Hawthorne no se lo había dejado todo a sus nietos. No se lo había dejado todo a sus hijas. Los números de esa ecuación no salían. Pero ni de lejos. Y mi cerebro se paró en seco. Me pitaban los oídos. ¿Por qué a mí? ¿Por qué era yo la principal heredera de su fortuna?' +
      'Uno por uno, todos los presentes se volvieron para mirarme. Atrapada en un mundo de riqueza y privilegios, con el peligro acechando a cada paso, Avery tendrá que ir a por todas y jugar a ese juego... si quiere sobrevivir.',
    titulo: 'Una Herencia En Juego',
    cantidad: 5,
    precio: 17.35,
    imagen: 'UnaHerenciaEnJuego.webp',
  },
  {
    id_libro: 5,
    autor: 'Megan Maxwell',
    editorial: 'Esencia',
    id_categoria: 5 /*Romance*/,
    fecha_publicacion: new Date('2020-10-29'),
    num_paginas: 672,
    isbn: '9788408233350',
    descripcion:
      'Can Drogo, piloto e hijo del dueño de la empresa aeronáutica High Drogo, es un hombre alto, guapo, adinerado, simpático… Puede elegir a la mujer que desee, y aunque disfruta de esa «magia especial» con la que le ha dotado la vida, en su interior siente que todas lo aburren.' +
      'Por su parte, Sonia Becher es la mayor de cuatro hermanas y la propietaria de una empresa de eventos y de una agencia de modelos. Can ve en ella a una chica divertida, atrevida, sin tabúes, con la que se puede hablar de todo, incluido de sexo, pero poco más, pues considera que no es su tipo. Hasta que un día las sonrisas y las miradas de la joven no van dirigidas a él, y eso, sin saber por qué, comienza a molestarlo.' +
      '¿En serio Sonia va a sonreír a otros hombres estando él delante? Sexo. Familia. Diversión. Locura. Todo esto es lo que vas a encontrar en ¿A qué estás esperando?, una novela que te hará ver que, en ocasiones, tu corazón se desboca por quien menos esperas sin que puedas frenarlo.',
    titulo: '¿A qué estás esperando?',
    cantidad: 4,
    precio: 28.88,
    imagen: 'AQueEstasEsperando.webp',
  },
  {
    id_libro: 6,
    autor: 'Alexandre Dumas',
    editorial: 'Plutón',
    id_categoria: 2 /*Clásico*/,
    fecha_publicacion: new Date('2020-08-06'),
    num_paginas: 1188,
    isbn: '9788417928926',
    descripcion:
      '“El Conde de Montecristo” es una de las novelas de aventuras más famosas de todos los tiempos. Escrita por el autor francés Alexandre Dumas (1802-1870) y publicada en 1844. “El Conde de Montecristo” fue un éxito comercial al momento de su publicación, gracias en parte a la acogida de otra novela reciente de Dumas, “Los Tres Mosqueteros” (1844). La novela narra la vida de Edmundo Dantés desde que fue apresado injustamente en el castillo de If por un falso cargo de traición, hasta que regresa años después, convertido en el Conde de Montecristo, para ejercer su venganza sobre aquellos que destruyeron su vida. La historia trata temas como la búsqueda de la justicia, la ceguera aristocrática, la ambición, el honor, los cambios de una época tumultuosa en la historia de Francia, la naturaleza del odio y el peso de la maldad sobre el alma humana. Es una ventana a un momento turbio de manipulaciones sociales y políticas, de intriga cortesana y de fascinación por lo exótico y lo desconocido, y un inmortal ejemplo de lo que estaría dispuesto a hacer un hombre por rehacer su vida.',
    titulo: 'El Conde de Montecristo',
    cantidad: 12,
    precio: 19.23,
    imagen: 'ElCondeDeMontecristo.webp',
  },
];
