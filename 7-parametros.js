
// parametros por default en las funciones

const actividad = function (nombre = 'Walter White', actividad = 'Enseñar Química') {
    console.log('La persona Paula, esta realizando la actividad Aprender JavaScript')
    console.log('La persona Andres, esta realizando la actividad Creando un sitio web')
    console.log('La persona Santiago, esta realizando la actividad Enseñar Quimica')
}
 


actividad('Paula', 'Aprender JavaScript')
actividad('Andres', 'Creando un sitio web')
actividad('Santiago')
