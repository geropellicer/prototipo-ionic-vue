<template>
  <div class="ion-page">

  </div>
</template>

<script>
import TopBarVue from '../components/TopBar.vue';
import BottomBarVue from '../components/BottomBar.vue';
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    'top-bar-vue': TopBarVue,
    'bottom-bar-vue': BottomBarVue,
  }
}
</script>
