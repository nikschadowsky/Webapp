<script>

import Intro from "../sections/Intro.vue"
import About from "../sections/About.vue"
import AboutDetailed from "../sections/AboutDetailed.vue"
import Projects from "../sections/Projects.vue"
import Roadmap from "../sections/Roadmap.vue"
import Outro from "../sections/Outro.vue"

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
        Intro, About, AboutDetailed, Projects, Roadmap, Outro
    },
     
}

</script>

<template>
    <div id="wrapper">
        <Intro @pageActivationEvent="activatePage"/>
        
        <div v-show="pageActive">
            <About />
            <AboutDetailed />
            <Projects />
            <Roadmap />
            <Outro />
        </div>
    </div>

</template>

<style>

</style>