<template>
  <div class="ion-page">
    <top-bar/>
    <div class="mapa">
      <h1>This is a map page</h1>
      <button>
              Hola
          </button>
    </div>
  </div>
</template>

<script>
import TopBarVue from '../components/TopBar.vue';
export default {
  name: 'mapa',
  components: {
    'top-bar': TopBarVue,
  }
}
</script>
