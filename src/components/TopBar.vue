<template>
  <ion-header>
    <ion-toolbar>
        <ion-buttons slot="secondary">
            <ion-button fill="solid">
            <ion-icon slot="start" name="contact"></ion-icon>
            Contact
            </ion-button>
        </ion-buttons>
        <ion-title>Solid Buttons</ion-title>
        <ion-buttons slot="primary">
            <ion-button fill="solid" color="secondary">
            Help
            <ion-icon slot="end" name="help-circle"></ion-icon>
            </ion-button>
        </ion-buttons>
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
</style>
