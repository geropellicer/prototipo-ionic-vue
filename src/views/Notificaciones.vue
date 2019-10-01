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

            <h6 class="desaparecer">Haciendo 0:</h6>
            <h5 class="haciendo0">{{ estado }}</h5>
            <Gesture @onTap="onTap($event)">
                <ion-img src="https://preview.redd.it/mkxg6871qup31.jpg?width=640&crop=smart&auto=webp&s=84d0a2d2130efc907fc92779f0b58eaef04ea10c"/>
            </Gesture>
            <h6 class="desaparecer2">Haciendo:</h6>
            <h5 class="haciendo">{{ estado2 }}</h5>
            <Gesture @onPinch="onPinchMove($event)" @onPinchEnd="onPinchEnd($event)" enablePinch>
                <ion-img id="im" src="https://preview.redd.it/ai67b77eprp31.jpg?width=640&crop=smart&auto=webp&s=5ab3e08909ef1fe79652a0df89e443b0d36d4bc9"/>
            </Gesture>
            <ion-button @dblclick="megusta()">
                Click me
            </ion-button>


            <ion-icon class="mielemento oculto animated bounceIn" name="heart"></ion-icon>
        </ion-content>
    </div>
</template>

<script>
import TopBarVue from '../components/TopBar.vue';
import Gesture from 'euv-gesture';


export default {
  name: 'notificaciones',
  components: {
      'topbar': TopBarVue,
      Gesture,
  },
  mounted(){
      console.log("notificaciones montadas");
  },
  data(){
      return{
          megustad: false,
          estado: "",
          estado2: "",
      }
  },
  methods: {
      escalar(el, escala){
          el.style.transform = "scale(" + escala + ")";
      },   
      megusta: function(){
        this.megustad = !this.megustad;
        console.log("gero");
        const element =  document.querySelector('.mielemento');
        element.classList.remove('oculto');
      },
      onTap(gestureStatus) {
         this.estado = String(gestureStatus);
      },
      onPinch(gestureStatus){
         this.estado2 = String(gestureStatus);
         console.log(gestureStatus.scale);
      },
      onPinchMove(gestureStatus){
         this.estado2 = String(gestureStatus);
         console.log(gestureStatus.scale);
         this.escalar(document.querySelector("#im"), gestureStatus.scale);
      },
      onPinchEnd(gestureStatus){
          this.escalar(document.querySelector("#im"), 1);
          console.log(end);
      },       
  }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
.oculto{
    display: none;
}
</style>