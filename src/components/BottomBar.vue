<template>
 <!-- Listen to before and after tab change events -->
  <!-- <ion-tabs @IonTabsWillChange="beforeTabChange" @IonTabsDidChange="afterTabChange"> -->
  <ion-tabs>
    <ion-tab tab="scroll">
      <scroll/>
    </ion-tab>

    <ion-tab tab="notificaciones">
     <notificaciones/>
    </ion-tab>

    <ion-tab tab="map">
      <mapa/>
    </ion-tab>

    <ion-tab tab="about">
      <about/>
    </ion-tab>

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <template slot="bottom">
      <ion-tab-bar>
        <ion-tab-button tab="scroll" @click="$router.push('/scroll')">
          <ion-icon name="list"></ion-icon>
          <ion-label>Scroll</ion-label>
          <ion-badge>0</ion-badge>
        </ion-tab-button>

        <!-- Provide a custom route to navigate to -->
        <ion-tab-button tab="notificaciones" @click="$router.push('/notificaciones')">
          <ion-icon name="notifications"></ion-icon>
          <ion-label>Notificaciones</ion-label>
        </ion-tab-button>

        <!-- Provide extra data to route -->
        <ion-tab-button tab="map">
          <ion-icon name="map"></ion-icon>
          <ion-label>Map</ion-label>
        </ion-tab-button>

        <!-- Provide custom click handler -->
        <ion-tab-button tab="about">
          <ion-icon name="information-circle"></ion-icon>
          <ion-label>About</ion-label>
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

</style>