<script>

import Intro from "../sections/Intro.vue"
import About from "../sections/About.vue"
import Projects from "../sections/Projects.vue"

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
        Intro, About, Projects
    },
     
}

</script>

<template>
    <div id="wrapper">
        <Intro @pageActivationEvent="activatePage"/>
        
        <div v-show="pageActive">
            <About />
            <Projects />
        </div>
    </div>

</template>

<style>

</style>