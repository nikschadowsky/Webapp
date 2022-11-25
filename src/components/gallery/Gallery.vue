<script>
import GalleryItem from "../gallery/GalleryItem.vue";

import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation, Pagination} from "swiper";

import 'swiper/swiper-bundle.css';



export default {
    data() {
        return {
            currentProject: 0,
        }
        
    },
    
    
    props: {
        
        items: {
            type: Array, required: true
        },

        descriptions:{
            type: Array, required: true
        }
        
    },
    components: {
        Swiper,
        SwiperSlide,
        GalleryItem
    },
    methods: {
        
        goLeft() { }
        
    }, setup() {
    
        return{
        
            
            modules:[ Navigation,Pagination],
        }
    },
   
}

</script>

<template>

    <Swiper :modules="modules" :slides-per-view="1" :pagination="{ clickable: true }"  :navigation="{}" loop>

        <SwiperSlide v-for="n in items.length " ><img :src="items[n-1]" :alt="descriptions[n-1]"></SwiperSlide> 
        

    </Swiper>

</template>

<style>

.swiper-button-next, .swiper-button-prev{
    color: white;
}
</style>