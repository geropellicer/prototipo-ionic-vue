<template>
  <div id="app">
    <ion-app>
      <!-- <ion-vue-router /> -->
      <bottom-bar-vue/>
    </ion-app>
  </div>
</template>

<script>
import BottomBarVue from './components/BottomBar.vue';

export default {
  components: {
    'bottom-bar-vue': BottomBarVue,
  },
}
</script>

<style>
html{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}

body{
  max-width: 600px !important;
  margin: 0 auto;
}

@media screen and (min-width: 601px){
  body{
    border: 1px solid #ccc;
    border-top: none;
    border-bottom: none;
  }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.item-native, .item-inner{
  padding: 0 !important;
}

</style>
