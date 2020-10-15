//instancia principal de vue
var vm=new Vue({
    el: '#app', //el es el padre root

    data: { //en data son las variables que se enlazan con el DOM
        type:'C',
        loginType:'username'
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

