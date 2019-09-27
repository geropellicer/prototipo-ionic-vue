<template>
    <ion-content>
                <ion-list>
                    <tarjeta v-for="(card, index) in posts" :key="index" :datos="card"/>
                </ion-list>



        <ion-infinite-scroll threshold="100px" id="infinite-scroll" >
            <ion-infinite-scroll-content>
        
            </ion-infinite-scroll-content>
        </ion-infinite-scroll>
    </ion-content> 

</template>

<script>
import IonInfiniteScroll from '@ionic/vue';
import TarjetaVue from './Tarjeta.vue';
import { apiService } from "@/common/api.service.js";

export default {
    name: 'ScrollInifinito',
    components: {
        'tarjeta': TarjetaVue,
    },
    props: {
        data: {type: Number, default: 1},
        disabled: {type: Boolean, default: true},
        infiniteScroll: {
            default: () => IonInfiniteScroll,
        }
    },
    data(){
        return{
            paginaActual: 0,
            cantidadArticulosDescargados: 0,
            porPaginaActual: 30,
            posts: [], 
        }
    },
    methods: {
        toggleInfiniteScroll() {
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
        },
        bajarData(event) {
            // make a GET Request to the questions list endpoint and populate the questions array
            let endpoint = this.crearEndpoint();
            if (this.next) {
                endpoint = this.next;
            }
            // this.loadingQuestions = true;
            apiService(endpoint).then(data => {
                this.posts.push(...data);
                if(event != null){
                    event.target.complete();
                }
            })
        },
        crearEndpoint(){
            this.paginaActual = this.paginaActual + 1;
            this.cantidadArticulosDescargados = this.paginaActual * this.porPaginaActual;
            return "https://api.punkapi.com/v2/beers?page=" + this.paginaActual + "&per_page=" + this.porPaginaActual;
        }
    },
    mounted: function(){
        let $vm = this;
        $vm.bajarData(null);
        const infiniteScroll = document.getElementById('infinite-scroll');
        infiniteScroll.addEventListener('ionInfinite', function(event) {
            setTimeout(function() {
                $vm.bajarData(event);
                console.log("Hay: " + $vm.posts.length);
                console.log("Deberian haber: " + $vm.cantidadArticulosDescargados);
                console.log("Pagina actual: " + $vm.paginaActual);
                console.log("Cant por pagina: " + $vm.porPaginaActual);
                // event.target.complete();

                // App logic to determine if all data is loaded
                // and disable the infinite scroll
                if ($vm.posts.length == $vm.cantidadArticulosDescargados) {
                    event.target.disabled = true;
                }
            }, 500);
        });
    }
}

</script>

<style>

</style>