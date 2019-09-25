<template>
  <div class="ion-page">
      <top-bar/>
      <button @click="clickear">
            Hola
      </button>
  </div>
</template>

<script>
import TopBarVue from '../components/TopBar.vue';
// @ is an alias to /src

export default {
  name: 'notificaciones',
  components: {
    'top-bar': TopBarVue
  },
  methods: {
    clickear: function(){
      console.log("Consoleado");
    }
  }
}
</script>
