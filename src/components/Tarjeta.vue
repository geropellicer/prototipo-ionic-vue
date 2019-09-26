<template>
  <ion-item>
    <div class="cabecera">
      <div class="perfil">
        <img class="imgPerfil" :src="datos.image_url" />
      </div>
      <div class="author">
        <h1> {{ datos.name }} </h1>
        <h2> {{ datos.tagline }} </h2>
      </div>
      <div class="contextMenu">
        <ion-icon name="more"></ion-icon>
      </div>
    </div>
    <div class="imagen">
      <img class="imgPrincipal" :src="datos.image_url" />
    </div>
    <div class="bottom">
      <div class="bottom-left">
          <img v-if="!megusteado" src="../assets/icons/ig-like-outline.png"/>
          <img v-if="megusteado" src="../assets/icons/ig-like-fill.png"/>
          <img src="../assets/icons/ig-comments.png"/>
          <img src="../assets/icons/ig-share.png"/>
      </div>
      <div class="bottom-right">
          <img v-if="!guardado" src="../assets/icons/ig-save-outline.png"/>
          <img v-if="guardado" src="../assets/icons/ig-save-fill.png"/>
      </div>
    </div>
    <div class="footer">
      <div class="megustas">
        <span> {{ datos.ibu }} Me gusta </span>
      </div>
      <div class="post-description">
        <p>
          <span> {{ datos.contributed_by }} </span>
          {{ datos.description }}
        </p>
      </div>
    </div>
   
        <ion-card-header>
          <ion-card-subtitle>{{ datos.name }}</ion-card-subtitle>
          <ion-card-title>{{ datos.tagline }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ datos.description }}
        </ion-card-content>
    </ion-item>
</template>
<script>
export default {
    name: 'Tarjeta',
    props: {
      datos: Object,
    },
    data: function(){
      return{
        megusteado: false,
        guardado: false,
      }
    },
    mounted: function() {
      console.log(this.datos);
    }
}
</script>

<style>
  img.imgPrincipal{
   height: 350px; 
   width: auto;
   margin: 0 auto;
   padding: 20px;
   padding-top: 40px;
  }
</style>