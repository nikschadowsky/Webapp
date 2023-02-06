<script>

import Intro from "../sections/Intro.vue"
import About from "../sections/About.vue"

export default {

    data() {
        return {
            pageActive: false

        }
    },
    methods: {
        activatePage(){
            this.pageActive= true;
        }
    },


    components: {
        Intro, About
    },
     
}

</script>

<template>
    <div id="wrapper">
        <Intro @pageActivationEvent="activatePage"/>
        
        <div v-show="pageActive">
            <About />
        </div>
    </div>

</template>

<style>

</style>