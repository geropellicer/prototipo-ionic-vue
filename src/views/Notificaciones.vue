<template>
  <div class="ion-page">
      <button @click="clickear">
            Hola
      </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'notificaciones',
  components: {
  },
  methods: {
    clickear: function(){
      console.log("Consoleado");
    }
  }
}
</script>
