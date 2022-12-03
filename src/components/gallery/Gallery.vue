<script>
import GalleryItem from "../gallery/GalleryItem.vue";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from "swiper";

import 'swiper/swiper-bundle.css';



export default {
    data() {
        return {
            currentProject: 0,

            Item: {
                path: String,
                description: String,
                href: String
            }
        }

    },


    props: {

        items: {
            type: Array, required: false
        }



    },
    components: {
        Swiper,
        SwiperSlide,
        GalleryItem
    },
    methods: {

    },
     setup() {

        return {
            modules: [Navigation, Pagination],
        }
    },

}

</script>

<template>

    <Swiper :modules="modules" :slides-per-view="1" :pagination="{ clickable: true }" :navigation="{}" loop
        :allow-touch-move="false" :initial-slide="items.length/2">

        <SwiperSlide v-for="n in items.length">


            <img class="image" :src="items[n - 1].path" :alt="items[n - 1].description" draggable="false">


            <div class="current-project-desc">
                My Webapp Project <a :href="items[n - 1].href" target="_blank" rel="noopener noreferrer"
                    draggable="false" class="learn-more-ref">&lt;learn more/&gt;</a>
            </div>

        </SwiperSlide>


    </Swiper>


</template>

<style>
.current-project-desc {
    display: flex;

    padding: 10px;
    border-top: 1px solid gray;
}

.learn-more-ref {
    margin-left: auto;
    color: var(--accent-color);
    text-decoration: none;
    cursor: pointer;
    transition: var(--default-hover-transition);

}.learn-more-ref:hover{
    color: var(--default-hover);
}
.learn-more-ref::after{
    content: "_";
    opacity: 0;
}
.learn-more-ref:hover::after{
    color: var(--default-hover);
    opacity: 100%;
    animation: var(--blink-animation);
}

.image {
    display: block;
    max-width: var(--max-galery-width);
    width: 100%;

    height: var(--max-galery-height);
    object-fit: cover;
    object-position: 0 50%;

    
}

/** overwriting default swiper behaviour  */
.swiper-button-next,
.swiper-button-prev {
    transition: var(--default-hover-transition);
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    color: var(--swiper-theme-color-hover);

}

.swiper-pagination-bullet {
    pointer-events: initial;
    transition: background 0.3s ease;

    margin-top: auto !important;
    margin-bottom: 45px !important;
    border: 1px solid white;
    border-radius: 10px;

}

.swiper-pagination-bullet-active {

    border-color: #ffffff80;
    /*border-color: rgb(182, 182, 182);*/

}

.swiper-pagination-bullet:hover:not(.swiper-pagination-bullet-active) {
    background: var(--swiper-theme-color-hover);
}

.swiper-pagination {
    pointer-events: none;

    display: flex;
    justify-content: center;
}

.swiper {
    border: 1px solid grey;
}

</style>