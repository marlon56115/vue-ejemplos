//instancia principal de vue
var vm=new Vue({
    el: '#app', //el es el padre root

    data: { //en data son las variables que se enlazan con el DOM
        esActivo: true,
        tieneError: true,
        arrayDeClases: ['text-danger','h4'],
        estilo1: {
            color: 'black',
            fontSize: '30px'
        },
        estilo2: {
            color: 'pink',
            fontSize: '30px'
        },
        tamanioFuente: 30
    },
    
    methods: { //en methods se ponen funciones que se enlazan a eventos del DOM
       cambiar1: function(){
           this.esActivo=!this.esActivo;
           this.tieneError=!this.tieneError;
       }
    },
    computed: { //aqui se ponen expresiones computadas, la diferencia con un metodo es que esta se almacena en cache si no hay cambio en sus dependencias
        objetoDeClases: function () { //devuelve el objeto para aplicar las clases, tambien se puede poner en la data
            return {
              'h3': this.esActivo,
              'text-danger': this.tieneError
            }
          },
          objetoEstilos: function(){//devuelve un objeto con los estilos a aplicar
              return {
                color: 'red',
                fontSize: '25px'
              }
          }  
    }
})

