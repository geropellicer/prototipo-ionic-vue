<template>
<ion-card>
    <img class="cabecera" :src="datos.image_url" />
        <ion-card-header>
          <ion-card-subtitle>{{ datos.name }}</ion-card-subtitle>
          <ion-card-title>{{ datos.tagline }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ datos.description }}
        </ion-card-content>
    </ion-card>
</template>
<script>
export default {
    name: 'Tarjeta',
    props: {
      datos: Object,
    },
    mounted: function() {
      console.log(this.datos);
    }
}
</script>

<style>
  img.cabecera{
   height: 350px; 
   width: auto;
   margin: 0 auto;
   padding: 20px;
   padding-top: 40px;
  }
</style>