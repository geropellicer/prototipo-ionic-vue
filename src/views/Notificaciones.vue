<template>
    <div class="ion-page">
        <topbar/>
        <ion-content>
            <ion-button @dblclick="megusta()">
                Click me
            </ion-button>

           <ion-button v-if="megustad" @dblclick="megusta()">
                Click me
            </ion-button>

            <ion-icon class="mielemento oculto animated bounceIn" name="heart"></ion-icon>
        </ion-content>
    </div>
</template>

<script>
import TopBarVue from '../components/TopBar.vue';
export default {
  name: 'notificaciones',
  components: {
      'topbar': TopBarVue,
  },
  mounted(){
      console.log("notificaciones montadas");
  },
  data(){
      return{
          megustad: false,
      }
  },
  methods: {
      megusta: function(){
        this.megustad = !this.megustad;
        console.log("gero");
        const element =  document.querySelector('.mielemento');
        element.classList.remove('oculto');
      }
  }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
.oculto{
    display: none;
}
</style>