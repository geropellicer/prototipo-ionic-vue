<template>
<div class="ion-page">
  <scroll-infinito-vue/>
</div>
</template>

<script>
import ScrollInfinitoVue from '../components/ScrollInfinito.vue';
// @ is an alias to /src

export default {
  name: 'scroll',
  components: {
    'scroll-infinito-vue': ScrollInfinitoVue,
  }
}
</script>
