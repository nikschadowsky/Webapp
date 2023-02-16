<script>

import Intro from "../sections/Intro.vue"
import About from "../sections/About.vue"
import Projects from "../sections/Projects.vue"
import Roadmap from "../sections/Roadmap.vue"

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
        Intro, About, Projects, Roadmap
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
        </div>
    </div>

</template>

<style>

</style>