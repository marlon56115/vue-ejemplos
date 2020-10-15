//instancia principal de vue
var vm=new Vue({
    el: '#app', //el es el padre root

    data: { //en data son las variables que se enlazan con el DOM
        tareas:[], //array de objetos tareas
        nuevaTarea:'' //aqui se almacena una nueva tarea
    },
    
    
    methods: { //en methods se ponen funciones que se enlazan a eventos del DOM
      agregarTarea: function(){ //metodo para agregar una nueva tarea 
        if (this.nuevaTarea!==''){
          this.tareas.push({
            nombre: this.nuevaTarea,
            estado: false
          });
          this.nuevaTarea='';
          localStorage.setItem('tareasDB',JSON.stringify(this.tareas)); //para actualziar el local storage en json
        }
      },

      completada: function (indice) { //para cambiar el estado de una funcion segun su indice
        this.tareas[indice].estado=true;
        localStorage.setItem('tareasDB',JSON.stringify(this.tareas)); //para actualziar el local storage en json
      },

      eliminar:function (indice) { //para eliminar una tarea por su indice
        this.tareas.splice(indice,1);
        localStorage.setItem('tareasDB',JSON.stringify(this.tareas)); //para actualziar el local storage en json
        }
    },
    //se ejecuta despues que se crea
    created: function (){
      let datosDB=JSON.parse(localStorage.getItem('tareasDB')); //obtiene los datos del local storage en json
      if (datosDB===null) {
        this.tareas=[];
      } else {
        this.tareas=datosDB;
      }
    },
    computed: { //aqui se ponen expresiones computadas, la diferencia con un metodo es que esta se almacena en cache si no hay cambio en sus dependencias
        
    }
})

