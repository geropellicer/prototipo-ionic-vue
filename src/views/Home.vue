<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="primary">
          <ion-button color="secondary">
            <ion-icon slot="icon-only" name="more"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Hello World</ion-title>
        <ion-buttons slot="secondary">
            <ion-button>
              <ion-icon slot="icon-only" name="contact"></ion-icon>
            </ion-button>
            <ion-button>
              <ion-icon slot="icon-only" name="search"></ion-icon>
            </ion-button>
          </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
      <img alt="Vue logo" src="../assets/logo.png">

    </ion-content>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
}
</script>
