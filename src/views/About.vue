<template>
  <div class="ion-page">
    <top-bar/>
    <div class="about">
      <h1>This is an about page</h1>
      <button>
              Hola
          </button>
    </div>
  </div>
</template>

<script>
import TopBarVue from '../components/TopBar.vue';
export default {
  name: 'about',
  components: {
    'top-bar': TopBarVue,
  }
}
</script>
