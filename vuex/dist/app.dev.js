"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var store = new Vuex.Store({
  state: {
    numero: 0,
    directores: [],
    pokemons: []
  },
  mutations: {
    aumentar: function aumentar() {
      this.state.numero++;
    },
    disminuir: function disminuir(state, n) {
      //para no usar el this
      state.numero -= n;
    },
    llenarDirectores: function llenarDirectores(state, directoresAction) {
      // simpre mandar como parametro el state para evitar problemas:( esta mutacion se llama en los actions pra llenar el array de directores
      state.directores = directoresAction;
      console.log(directoresAction);
    },
    llenarPokemons: function llenarPokemons(state, pokemonsAction) {
      state.pokemons = pokemonsAction.results; //pokemonsAction es un objeto con objetos, solo mandamos el array pokemons
    }
  },
  actions: {
    obtenerDirectores: function obtenerDirectores(_ref) {
      var commit, data, directores;
      return regeneratorRuntime.async(function obtenerDirectores$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.next = 3;
              return regeneratorRuntime.awrap(fetch('data.json'));

            case 3:
              data = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(data.json());

            case 6:
              directores = _context.sent;
              //cuando se cumple la promesa convertimos los directores a objetos y los guardamos
              console.log(directores);
              commit('llenarDirectores', directores); //aqui mandamos a llamar la mutacion y le mandamos como parametro los directores

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    obtenerPokemons: function obtenerPokemons(_ref2) {
      var commit, data, pokemons;
      return regeneratorRuntime.async(function obtenerPokemons$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              _context2.next = 3;
              return regeneratorRuntime.awrap(fetch('https://pokeapi.co/api/v2/pokemon'));

            case 3:
              data = _context2.sent;
              _context2.next = 6;
              return regeneratorRuntime.awrap(data.json());

            case 6:
              pokemons = _context2.sent;
              commit('llenarPokemons', pokemons);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      });
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
}); //instancia principal de vue

var vm = new Vue({
  el: '#app',
  //el es el padre root
  store: store,
  //aqui se declara la store de vuex tambien
  data: {
    //en data son las variables que se enlazan con el DOM
    tareas: [],
    //array de objetos tareas
    nuevaTarea: '' //aqui se almacena una nueva tarea

  },
  methods: _objectSpread({}, Vuex.mapMutations(['aumentar', 'disminuir']), {}, Vuex.mapActions(['obtenerDirectores', 'obtenerPokemons'])),
  computed: _objectSpread({}, Vuex.mapState(['numero', 'directores', 'pokemons']))
});