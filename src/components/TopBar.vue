<template>
  <ion-header>
    <ion-toolbar>
      <div class="cabecera">
        <div class="cabecera-left">
          <ion-button fill="clear" shape="undefined" size="small">
            <ion-img :src="require(`@/assets/icons/ig-camera.png`)" class="icon-topbar"/>
          </ion-button>
        </div>
        <div class="cabecera-center">
          <img src="../assets/icons/ig_logo.png" class="logo"/>
        </div>
        <div class="cabecera-right">
          <ion-button fill="clear" shape="undefined" size="small">
            <ion-img :src="require(`@/assets/icons/IGTV_logo.png`)" class="icon-topbar igtv"/>
          </ion-button>
          <ion-button fill="clear" shape="undefined" size="small">
            <ion-img :src="require(`@/assets/icons/ig-share.png`)" class="icon-topbar"/>
          </ion-button>
        </div>
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
    padding: 12px;
  }
  .ios .cabecera{
    padding: 18px 12px 6px 12px;
  }
  .cabecera-right,
  .cabecera-left,
  .cabecera-center{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .cabecera-center{
    flex-grow: 1;
    width: 100%;
  }
  .cabecera-right > :first-child{
    margin-right: 15px;
  }
  .icon-topbar{
    width: 22px;
    display: block; 
    margin: 0;
  }
  .icon-topbar.igtv{
    width: 27px;
  }
  .logo{
    width: auto;
    height: 25px;
        margin-bottom: -10px;
  }
</style>
