// Definir un nuevo componente de manera global llamado button-counter
Vue.component('button-counter', { 
    data: function () { // aqui el data se define como una funcion que retorna un objeto
      return {
        count: 0,
        algo:1
      }
    },
    template: 
    `
    <button v-on:click="count++;algo++" class="btn btn-danger">
    Me ha pulsado {{ count }} {{algo}} veces.
    </button>
    ` 
  })

  //ejemplo de props para pasar parametro a traves de atributo
  Vue.component('blog-post', {
    props: ['titulo','post'],
    template: //html 
    `
    <div >
    <p >{{ post.title }}</p>
    <!--aqui se pasa en el evento click un $emit y eso se convierte en un evento del objeto padre, tambien podemos mmandar otro parametro-->
    <button @click="$emit('agrandar-texto',0.2)" class="btn btn-success" >
      Agrandar texto
    </button>
    </div>
    `
  })

  //input personalizado
  Vue.component('custom-input', {
    props: ['value'], //este value se manda a traves del v-model
    template: `
      <input
        class="form-control"
        v-bind:value="value" 
        v-on:input="$emit('input', $event.target.value)"
      >
    `
  })

  //creando un alert-box
  Vue.component('alert-box', {
    template: `
      <div class="alert alert-danger">
        <strong>Error!</strong>
        <slot></slot>
      </div>
    `
  })

//instancia principal de vue
var vm=new Vue({
    el: '#app', //el es el padre root

    data: { //en data son las variables que se enlazan con el DOM
        posts: [
            { id: 1, title: 'Mi viaje con Vue' },
            { id: 2, title: 'Blogging con Vue' },
            { id: 3, title: 'Por qué Vue es tan divertido?' }
          ],
        postFontSize: 1,
        searchText: '',
        currentTabComponent :'sii'
    },
    
    methods: { //en methods se ponen funciones que se enlazan a eventos del DOM
       
    },
    computed: { //aqui se ponen expresiones computadas, la diferencia con un metodo es que esta se almacena en cache si no hay cambio en sus dependencias
        
    }
})

