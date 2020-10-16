// //componente
// Vue.component('titulo',{
//     template: /*html*/`
//     <div>
//         <h1>numero: {{numero}}</h1>
//         <hijo></hijo>
//     </div>
//     ` 
//     ,
//     computed: {
//         ...Vuex.mapState(['numero']) //con esto mapeamos el $store.state.numero para usarlo de un solo como numero
//     }
// })

// Vue.component('hijo',{
//     template: /*html*/`
//     <div>
//         <button @click="obtenerDirectores" class="btn btn-success">obtener directores</button>
//         {{directores.id}}
//         <button type="button" @click="aumentar" class="btn btn-primary">+</button>
//         <button type="button" @click="disminuir(3)" class="btn btn-primary">-</button>
//         <h1>numero: {{numero}}</h1>
//     </div>
//     ` 
//     ,
//     computed: {
//         ...Vuex.mapState(['numero','directores']) //con esto mapeamos el $store.state.numero para usarlo de un solo como numero
//     },
//     methods: {
//         ...Vuex.mapActions(['obtenerDirectores']),
//         ...Vuex.mapMutations(['aumentar','disminuir'])//mapeamos las mutaciones para ya no llamar a $store.commit('aumentar') 
//     }
// })


//aqui se pueden almacenar datos globales y metodos globales que se usan en todos los componentes
const store=new Vuex.Store({
    state: {
        numero: 0,
        directores:[],
        pokemons:[]
    },
    mutations: {
        aumentar(){
            this.state.numero++;
        } ,
        disminuir(state,n){ //para no usar el this
            state.numero-=n;
        } ,
        llenarDirectores(state,directoresAction){ // simpre mandar como parametro el state para evitar problemas:( esta mutacion se llama en los actions pra llenar el array de directores
            state.directores=directoresAction;
            console.log(directoresAction);
        },
        llenarPokemons(state, pokemonsAction){
            state.pokemons=pokemonsAction.results; //pokemonsAction es un objeto con objetos, solo mandamos el array pokemons
        }
    },
    actions: {
         obtenerDirectores: async function ({commit}){
            //const data = await fetch('http://localhost:8080/guia07-APIREST/resources/director'); //tenemos la promesa
            const data = await fetch('data.json'); //tenemos la promesa
            const directores= await data.json(); //cuando se cumple la promesa convertimos los directores a objetos y los guardamos
            console.log(directores);
            commit('llenarDirectores',directores); //aqui mandamos a llamar la mutacion y le mandamos como parametro los directores
            
        },
        obtenerPokemons: async function ( {commit} ) {
        const data= await fetch('https://pokeapi.co/api/v2/pokemon');
        const pokemons=await data.json();
        commit('llenarPokemons',pokemons);
        } 
        /* obtenerDirectores: function ({commit}){
            fetch('data.json')
             .then(response => response.json())
            .then(data => {
                console.log(data);
                commit('llenarDirectores',data)
            });
        } */
    }
})

//instancia principal de vue
var vm=new Vue({
    el: '#app', //el es el padre root

    store: store, //aqui se declara la store de vuex tambien

    data: { //en data son las variables que se enlazan con el DOM
        tareas:[], //array de objetos tareas
        nuevaTarea:'' //aqui se almacena una nueva tarea
    },
    
    methods: { //en methods se ponen funciones que se enlazan a eventos del DOM
        ...Vuex.mapMutations(['aumentar','disminuir']), //se pasan las mutaciones del store y seran metodos propios de la instancia para usar
        ...Vuex.mapActions(['obtenerDirectores','obtenerPokemons']) //se pasa las actions de las mutaciones del store y seran metodos propios de la instancia para usar
    },
    computed: { //aqui se ponen expresiones computadas, la diferencia con un metodo es que esta se almacena en cache si no hay cambio en sus dependencias
        ...Vuex.mapState(['numero','directores','pokemons']) //para usarlo dentro del componente grande
    }
})

