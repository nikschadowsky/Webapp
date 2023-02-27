<script>

import Intro from "../sections/Intro.vue"
import About from "../sections/About.vue"
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
        Intro, About, Projects, Roadmap, Outro
    },
     
}

</script>

<template>
    <div id="wrapper">
        <Intro @pageActivationEvent="activatePage"/>
        
        <div v-show="pageActive">
            <About />
            <Projects />
            <Roadmap />
            <Outro />
        </div>
    </div>

</template>

<style>

</style>