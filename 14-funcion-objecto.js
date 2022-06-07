// metodos o funciones en un objeto

const persona = {
 nombre: 'Paula',
 trabajo: 'medica veterinaria ',
 edad: 30,
 musicaRock: true,
 mostratInformacion() {
  console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
 },
}

persona.mostratInformacion()
