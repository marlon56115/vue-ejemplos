//creando un componente
Vue.component('mi-componente',{ //alt+96 comillas invertidas
    props: ['mipropiedad'], // los props son para pasar parametros no usar guiones en los nombres
    template: //html 
    ` 
    <div>
    <!--al recibir el objetos se imprime su nombre -->
        <li>componente la lista grosera texto: {{mipropiedad.text}}  id: - {{mipropiedad.id}}</li>
    </div>
    `
})

//instancia principal de vue
var vm=new Vue({
    el: '#app', //el es el padre root

    data: { //en data son las variables que se enlazan con el DOM
        mensaje: 'hola a todo el mundo',
        mensaje2:'este mensaje esta enlazado con el DOM',
        mensaje3: 'mensaje para computar',
        texto:'texto original',
        condicion:true,
        nombre: 'Marlon',
        apellido: 'Gurera',
        elementos: [
            { text: 'Aprender JavaScript',estado:true},
            { text: 'Aprender Vue' ,estado:true},
            { text: 'Construir algo increíble' ,estado:true }
        ],
        listaGrosera: [
            { id: 0, text: 'Vegetales' },
            { id: 1, text: 'Queso' },
            { id: 2, text: 'Cualquier otra cosa que se supone que los humanos coman' }
          ],
        
    },
    
    methods: { //en methods se ponen funciones que se enlazan a eventos del DOM
        revertirTexto: function(mensaje){
            this.mensaje=this.mensaje.split('').reverse().join(''); //se pone this. para indicar que es la data local
        },
         revertirTextoReturn: function(){
           return this.mensaje3.split('').reverse().join(''); //se pone this. para indicar que es la data local
        } 
    },
    computed: { //aqui se ponen expresiones computadas, la diferencia con un metodo es que esta se almacena en cache si no hay cambio en sus dependencias
        CrevertirTexto: function(){ //la propiedad vm.CrevertirTexto será el getter
            return this.mensaje3.split('').reverse().join('');
        },
        nombreCompleto: { //tambien se pueden definir los metodos getter y setter
            // getter
            get: function () {
                return this.nombre + ' ' + this.apellido
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.nombre = names[0]
                this.apellido = names[names.length - 1]
            }
        }
    }
})

//metodos para probar
function probar () {
console.log(vm.nombreCompleto); //aqui usa el getter
vm.nombreCompleto='jose acuña'; //aqui usa el setter
}

