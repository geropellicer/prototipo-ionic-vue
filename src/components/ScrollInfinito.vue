<template>
    <ion-content>
        <h1>Holanda</h1>
        <ion-button v-on:click="console.log('esteban')">
            <ion-icon slot="start" name="star"></ion-icon>
            Left Icon
        </ion-button>
        <ion-button @click="toggleInfiniteScroll" expand="block"> -->
        <!-- <ion-button expand="block"> -->
            Toggle Infinite Scroll
        </ion-button>

        <ion-list>
            <tarjeta/>
            <tarjeta/>
        </ion-list>

        <ion-infinite-scroll threshold="100px" id="infinite-scroll">
            <ion-infinite-scroll-content
            loading-spinner="bubbles"
            loading-text="Loading more data...">
            </ion-infinite-scroll-content>
        </ion-infinite-scroll>
    </ion-content> 

</template>

<script>
import IonInfiniteScroll from '@ionic/vue';
import TarjetaVue from './Tarjeta.vue';

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
    methods: {
        loadData(event) {
            setTimeout(() => {
                console.log('Done');
                event.target.complete();

                // App logic to determine if all data is loaded
                // and disable the infinite scroll
                if (this.data.length == 1000) {
                    event.target.disabled = true;
                }
            }, 500);
        },
        toggleInfiniteScroll() {
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
            console.log("llego la fruia");
        },
        imprimir(){
            console.log("dale gato");
        },
    },
    mounted: function(){
        console.log("montaod");
    }
}

</script>

<style>

</style>