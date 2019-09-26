<template>
  <ion-header>
    <ion-toolbar>
      <div class="cabecera">
        <img src="../assets/icons/beer-icon.png" class="icon-xs"/>
        <ion-title text-left>Beergram</ion-title>
      </div>
    </ion-toolbar>
   </ion-header>
</template>

<script>
export default {
  name: 'topbar',
  props: {
    msg: {
      type: String,
      default: "Holanda american"
    }
  },
  methods: {
    imprimir: function(){
      console.log(this.msg);
    },
        clickear: function(){
        console.log("Consoleado");
        }
  },
  mounted: function(){
    this.imprimir();
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
  }
</style>
