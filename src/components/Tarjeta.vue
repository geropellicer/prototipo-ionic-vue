<template>
  <ion-item no-padding>
    <div :class="'tar' + datos.id" class="tarjeta">
      <div class="cabecera">
        <div class="left">
          <div class="perfil">
            <ion-img class="imgPerfil" :src="datos.image_url"></ion-img>
          </div>
          <div class="author">
            <h1> {{ datos.name }} </h1>
            <h2> {{ datos.tagline }} </h2>
          </div>
        </div>
        <div class="right">
            <ion-button fill="clear" shape="undefined" size="small" class="contextMenu">
              <ion-icon slot="icon-only" name="more"></ion-icon>
            </ion-button>
        </div>
      </div>
      <div class="imWrapper" @dblclick="megustear()">
      <Gesture @onPinch="onPinchMove($event)" @onPinchEnd="onPinchEnd($event)" @onTouchEnd="onTouchEnd()" enablePinch>
        <div class="imagen">
          <ion-img class="imgPrincipal" :src="datos.image_url"></ion-img>
          <ion-icon class="mielemento oculto animated bounceIn" name="heart"></ion-icon>
        </div>
      </Gesture>
      </div>
      <div class="bottom">
        <div class="bottom-left">
          <ion-button fill="clear" shape="undefined" size="small" @click="megustear2()">
            <img v-if="!megusteado" src="../assets/icons/ig-like-outline.png"/>
            <img v-if="megusteado" src="../assets/icons/ig-like-fill.png"/>
          </ion-button>
          <ion-button fill="clear" shape="undefined" size="small">
            <img src="../assets/icons/ig-comments.png"/>
          </ion-button>
          <ion-button fill="clear" shape="undefined" size="small">
            <img src="../assets/icons/ig-share.png"/>
          </ion-button>
        </div>
        <div class="bottom-right">
          <ion-button fill="clear" shape="undefined" size="small" @click="guardar()">
            <img v-if="!guardado" src="../assets/icons/ig-save-outline.png"/>
            <img v-if="guardado" src="../assets/icons/ig-save-fill.png"/>
          </ion-button>
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
        <div class="comentarios">
            <span>Ver los {{ datos.ebc }} comentarios </span>
        </div>
      </div>
    </div>
  </ion-item>
</template>
<script>
import Gesture from 'euv-gesture';


export default {
    name: 'Tarjeta',
    components: {
      Gesture,
    },
    props: {
      datos: Object,
    },
    data: function(){
      return{
        megusteado: false,
        guardado: false,
      }
    },
    methods: {
      guardar() {
        this.guardado = !this.guardado;
      },
      megustear() {
        this.megusteado = true;
        if(this.megusteado){
          var selector = ".tar" + this.datos.id + " .mielemento";
          const element =  document.querySelector(selector);
          element.classList.remove('oculto');
          element.addEventListener('animationend', function() { 
            element.classList.add('oculto');
           })
        } else{
          const element =  document.querySelector('.mielemento');
          element.classList.add('oculto');
        }
      }, 
      megustear2(){
        this.megusteado = !this.megusteado;
      },
      escalar(el, escala){
          el.style.transform = "scale(" + escala + ")";
      },
      onPinchMove(gestureStatus){
         console.log(gestureStatus.scale);
         var selector = ".tar" + this.datos.id + " .imagen";
         this.escalar(document.querySelector(selector), gestureStatus.scale);
      },
      onPinchEnd(gestureStatus){
         console.log(gestureStatus.scale);
          var selector = ".tar" + this.datos.id + " .imagen";
          this.escalar(document.querySelector(selector), 1);
      },
      onTouchEnd(){
          var selector = ".tar" + this.datos.id + " .imagen";
          this.escalar(document.querySelector(selector), 1);
      },
    },
    mounted: function() {
    }
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
.oculto{
    display: none;
}
.mielemento{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: rgba(255,255,255,.85);
  width: 22vw;
  height: 22vw;

}
.mielemento svg{
  opacity: .27 !important;
}

  ion-item {
    --padding-end: 0px;
    --inner-padding-end: 0px;
  }

  .imgPrincipal{
   height: 350px; 
   width: auto;
   margin: auto;
   padding: 20px;
   padding-top: 40px;
  }
  .imgPerfil {
   height: 35px; 
   width: auto;
   margin: auto;
   padding: 3px;
  }

  .tarjeta{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .cabecera{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    padding: 12px;
    padding-right: 4px;
  }
  .cabecera .left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
  }
  .cabecera .perfil{
    border-radius: 50%;
    background: #ccc;
    width: 33px;
    height: 33px;
    display: flex;
    margin-right: 12px;
  }
  .cabecera h1{
    font-size: 12px;
    padding: 0;
    margin: 0;
  }
  .cabecera h2{
    font-size: 11px;
    padding: 0;
    margin: 0;
    color: #333;
    font-weight: 200;
  }
  .cabecera .right{
    display: flex;
    height: 30px;
  }
  .context-menu{
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ion-icon{
    margin: auto;
    height: 32px;
  }

  .imagen, .imWrapper{
    background: #ccc;
    width: 100%;
    display: flex;
  }

  .bottom{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 12px;
  }
  .bottom-left{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
  }
  .bottom-left img{
    margin-right: 12px;
    width: 23px;
    height: auto;
  }
  .bottom-left > *:first-child img{
    width: 26px;
    height: auto;
  }
  .bottom-right img{
    width: 20px;
    height: 26px;
  }

  .footer{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 18px;
    padding-top: 0;
  }
  .footer .megustas{
    font-weight: bold;
    font-size: 12px;
  }
  .footer .post-description span{
    font-weight: bold;
  }
  .footer .post-description p{
    margin: 0;
    padding: 0;
    margin-top: 5px;
    font-size: 11px; 
  }
  .footer .comentarios{
    margin-top: 4px;
  }
  .footer .comentarios span{
    color: #999999;
    font-size: 12px;
  }

  ion-button{
    --color: #000;
    --color-activated: #000;
    --color-hover: #000;
    --padding-end: 0;
    --padding-start: 0;
    --ripple-color: #fff;
  }
</style>