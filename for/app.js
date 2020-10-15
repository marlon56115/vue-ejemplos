//instancia principal de vue
var vm=new Vue({
    el: '#app', //el es el padre root

    data: { //en data son las variables que se enlazan con el DOM
        mensajePadre: 'Padre',
        elementos: [
            { mensaje: 'Foo' },
            { mensaje: 'Bar' }
          ],
        objeto: {
            primerNombre: 'Marlon',
            apellido: 'Guerra',
            edad: 22
         },
         numeros: [ 1, 2, 3, 4, 5 ]
    },
    
    
    methods: { //en methods se ponen funciones que se enlazan a eventos del DOM
       
    },
    computed: { //aqui se ponen expresiones computadas, la diferencia con un metodo es que esta se almacena en cache si no hay cambio en sus dependencias
        numerosImpares: function () { //devuelve numeros pares
            return this.numeros.filter(function (numero) {
              return numero % 2 === 0
            })
          }
    }
})

