<template>
  <ion-header>
    <ion-toolbar>
      <div class="cabecera">
        <ion-icon :src="require(`@/assets/icons/beer-logo.svg`)" class="icon-xs"/>
        <ion-title text-left>Beergram</ion-title>
      </div>
    </ion-toolbar>
   </ion-header>
</template>

<script>
export default {
  name: 'topbar',
  props: {
  },
  methods: {
  },
  mounted: function(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cabecera{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .icon-xs{
    width: 33px;
    display: inline-block; 
    margin: 0;
  }
</style>
