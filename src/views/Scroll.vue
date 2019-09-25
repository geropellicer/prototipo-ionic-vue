<template>
<div class="ion-page">
  <top-bar/>
  <scroll-infinito-vue/>
</div>
</template>

<script>
import ScrollInfinitoVue from '../components/ScrollInfinito.vue';
import TopBarVue from '../components/TopBar.vue';
// @ is an alias to /src

export default {
  name: 'scroll',
  components: {
    'scroll-infinito-vue': ScrollInfinitoVue,
    'top-bar': TopBarVue,
  }
}
</script>
