<template>
    <div class="ion-page">
        <topbar/>
    </div>
</template>

<script>
import TopBarVue from '../components/TopBar.vue';
export default {
  name: 'notificaciones',
  components: {
      'topbar': TopBarVue,
  },
  mounted(){
      console.log("notificaciones montadas");
  }
}
</script>

<style>

</style>