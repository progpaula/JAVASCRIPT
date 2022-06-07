// Métodos en arreglos

const personas = [
 { nombre: 'Paula', edad: 16, aprendiendo: 'JavaScript' },
 { nombre: 'Nathaly', edad: 19, aprendiendo: 'JavaScript' },
 { nombre: 'Stefanny', edad: 21, aprendiendo: 'JavaScript' },
 { nombre: 'Edilma', edad: 42, aprendiendo: 'JavaScript' },
 { nombre: 'Juan', edad: 50, aprendiendo: 'JavaScript' },
]

console.log(personas)

// mayores de 28 años
const mayores = personas.filter((persona) => {
 return persona.edad > 28
})
// console.log(mayores);

// que aprende Stefanny y su edad
const Stefanny = personas.find((persona) => {
 return persona.nombre === 'Juan'
})
// console.log('Stefanny esta aprendiendo: ' + Stefanny.aprendiendo);)

let total = personas.reduce((edadTotal, persona) => {
 return edadTotal + persona.edad
}, 0)

console.log(total)
