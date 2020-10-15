//instancia principal de vue
var vm=new Vue({
    el: '#app', //el es el padre root

    data: { //en data son las variables que se enlazan con el DOM
        mensaje1:'',
        mensaje2:'',
        checked: false,
        nombresSeleccionados:[],
        seleccionado: '',
        selected: '',
        options: [
            { text: 'Uno', value: 'A' },
            { text: 'Dos', value: 'B' },
            { text: 'Tres', value: 'C' }
          ]

    },
    
    methods: { //en methods se ponen funciones que se enlazan a eventos del DOM
       alternar: function (){
        if (this.loginType==='username') {
            this.loginType='';
        } else {
            this.loginType='username';
        }
       }
    },
    computed: { //aqui se ponen expresiones computadas, la diferencia con un metodo es que esta se almacena en cache si no hay cambio en sus dependencias
        
    }
})

