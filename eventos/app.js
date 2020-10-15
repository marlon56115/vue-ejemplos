//instancia principal de vue
var vm=new Vue({
    el: '#app', //el es el padre root

    data: { //en data son las variables que se enlazan con el DOM
        contador: 0,
        teclaPresionada: ''
    },
    
    
    methods: { //en methods se ponen funciones que se enlazan a eventos del DOM
      saludar: function(evento){
          alert('hola presiono el boton '+evento.target.tagName);
      },
      saludarMensaje: function(mensaje){
          alert('el mensaje es: '+mensaje);
      },
      saludarMensajeEvento: function(mensaje,evento){
        alert('el mensaje es: '+mensaje+' el evento es '+evento.target.tagName);
      }
    },
    computed: { //aqui se ponen expresiones computadas, la diferencia con un metodo es que esta se almacena en cache si no hay cambio en sus dependencias
        
    }
})

