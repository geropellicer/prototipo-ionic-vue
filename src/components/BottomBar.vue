<template>
 <!-- Listen to before and after tab change events -->
  <!-- <ion-tabs @IonTabsWillChange="beforeTabChange" @IonTabsDidChange="afterTabChange"> -->
  <ion-tabs>
    <ion-tab tab="scroll">
      <scroll/>
    </ion-tab>

    <ion-tab tab="notificaciones">
     <!-- <virtualscroll/> -->
     <notificaciones/>
    </ion-tab>

    <ion-tab tab="map">
      <mapa/>
    </ion-tab>

    <ion-tab tab="about">
      <about/>
    </ion-tab>

    <ion-tab tab="likes">
    </ion-tab>

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <template slot="bottom">
      <ion-tab-bar>
        <ion-tab-button tab="scroll">
          <ion-icon name="home"></ion-icon>
          <!-- <ion-badge>0</ion-badge> -->
        </ion-tab-button>

        <!-- Provide a custom route to navigate to -->
        <ion-tab-button tab="notificaciones">
          <ion-icon name="search"></ion-icon>
        </ion-tab-button>

        <!-- Provide extra data to route -->
        <ion-tab-button tab="map">
          <ion-icon name="add-circle-outline"></ion-icon>
        </ion-tab-button>

        <ion-tab-button tab="likes">
          <ion-icon name="heart-empty"></ion-icon>
        </ion-tab-button>

        <!-- Provide custom click handler -->
        <ion-tab-button tab="about">
          <ion-icon name="contact"></ion-icon>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<script>

import NotificacionesVue from '../views/Notificaciones.vue';
import ScrollVue from '../views/Scroll.vue';
import AboutVue from '../views/About.vue';
import MapaVue from '../views/Mapa.vue';

export default {
    name: 'bottombar',
    components: {
      'notificaciones': NotificacionesVue,
      'scroll': ScrollVue,
      'about': AboutVue,
      'mapa': MapaVue,
    }
}
</script>

<style>
ion-tab-button{
  --color: #000;
  --color-activated: #000;
}
ion-icon{
  color: #000;
}
.tab-selected ion-icon{
  color: #222;
}
</style>