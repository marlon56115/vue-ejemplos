//instancia principal de vue
var vm=new Vue({
    el: '#app', //el es el padre root

    data: { //en data son las variables que se enlazan con el DOM
        matriz1: [''],
        asientos: [{
            id:1,
            fila:1,
            columna:'A',
            butaca: '3d'
        },
        {
            id:2,
            fila:1,
            columna:'B',
            butaca: '4d'
        },
        {
            id:9,
            fila:1,
            columna:'C',
            butaca: 'imax'
        },
        {
            id:3,
            fila:1,
            columna:'D',
            butaca: 'imax'
        },
        {
            id:4,
            fila:2,
            columna:'A',
            butaca: 'bluray'
        },
        {
            id:5,
            fila:2,
            columna:'B',
            butaca: 'dolby'
        },
        {
            id:6,
            fila:2,
            columna:'C',
            butaca: 'atmos'
        },
        {
            id:7,
            fila:3,
            columna:'B',
            butaca: 'atmos'
        }]
    },
    
    methods: { //en methods se ponen funciones que se enlazan a eventos del DOM
       agregarFila: function(){
        this.matriz1.push(['']);
        console.log(this.matriz);
       },
       agregarColumna: function (fila) {
           this.matriz1[fila].push('');
           console.log(this.matriz);
         },
       ultimaColumna: function (fila) {
           return this.matriz1[fila].length-1; //devuelve la ultima columna donde pondra el boton
          }
    },

    computed: { //aqui se ponen expresiones computadas, la diferencia con un metodo es que esta se almacena en cache si no hay cambio en sus dependencias
        asientoOrdenado:function (){ //ordena el array de objetos y un array de array separado por filas
            let filas=0;
            this.asientos.forEach(asiento=>{
                if (asiento.fila>filas) {
                    filas=asiento.fila;
                }
            })
            console.log(filas);
            let asientoOrdenado=[];
            let fila=[];
            for (var i=1;i<=filas;i++){
                this.asientos.forEach(asiento=>{
                    if(asiento.fila===i){
                        fila.push(asiento);
                    }
                });
                asientoOrdenado.push(fila);
                fila=[];
            }
            console.log(asientoOrdenado);
            return asientoOrdenado;
        }
    }
})
