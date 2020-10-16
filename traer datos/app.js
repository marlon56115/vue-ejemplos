//instancia principal de vue
var vm=new Vue({
    el: '#app', //el es el padre root

    data: { //en data son las variables que se enlazan con el DOM
        tareas:[], //array de objetos tareas
        nuevaTarea:'' //aqui se almacena una nueva tarea
    },
    
    
    methods: { //en methods se ponen funciones que se enlazan a eventos del DOM
      
    },
    //se ejecuta despues que se crea
    created: function (){
      
    },
    computed: { //aqui se ponen expresiones computadas, la diferencia con un metodo es que esta se almacena en cache si no hay cambio en sus dependencias
        
    }
})

