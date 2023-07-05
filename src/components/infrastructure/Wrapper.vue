<script>

import Intro from "../sections/Intro.vue"
import About from "../sections/About.vue"
import AboutDetailed from "../sections/AboutDetailed.vue"
import Projects from "../sections/Projects.vue"
import Roadmap from "../sections/Roadmap.vue"
import Outro from "../sections/Outro.vue"
import RoundedSquare from "../elements/RoundedSquare.vue"
import RoundedTriangle from "../elements/RoundedTriangle.vue"


export default {

    data() {
        return {
            pageActive: false

        }
    },
    methods: {
        activatePage() {
            this.pageActive = true;

            let sections = document.getElementsByClassName("wrapper inactive");

            for (let section of sections) {
                section.classList.remove("inactive");
                section.classList.add("active");

            }
            this.$scrolltrigger.refresh()
        }
    },

    mounted() {
        this.$gsap.to("#sq-1-holder", {
            scrollTrigger: {
                trigger: "#intro",
                start: "60% top",
                end: "bottom bottom",
                scrub: 1
            },
            x: "-500px",
            transformOrigin: "0 0",
            ease: "none",
            rotateZ: "+=100%"

        })

        


    },



    components: {
        Intro, About, AboutDetailed, Projects, Roadmap, Outro, RoundedSquare, RoundedTriangle
    },

}

</script>

<template>
    <div id="wrapper">
        <Intro @pageActivationEvent="activatePage" />

        <div class="wrapper inactive">
            <div id="about-scroll-anchor"></div>
            <About />
            <AboutDetailed />
            <Projects />
            <Roadmap />
            <Outro />
        </div>

        <div id="sq-1-holder">
            <RoundedSquare class="geometry" id="sq-1" />
        </div>
        <RoundedTriangle class="geometry" id="trig-2" />

    </div>
</template>

<style>
#wrapper {
    position: relative;
    overflow: hidden;
}

.wrapper {
    position: relative;
}

.wrapper.active {
    display: initial;
}

.wrapper.inactive {
    display: none;
}

#about-scroll-anchor{
    position: absolute;
    top: 50vh;
}

#sq-1 {
    fill: var(--polygon-gray-4);

    scale: 4;
    animation: rotate infinite ease-in-out;
    animation-duration: inherit;

}

#sq-1-holder {
    position: absolute;
    bottom: 0;
    top: 105vh;
    left: -5%;
    animation-duration: 18s;

    z-index: -10;
}

#trig-2 {
    fill: var(--polygon-gray-4);
    top: 0;
    right: 0%;
    scale: 5;

    animation: wobble 26s infinite ease-in-out;
    animation-delay: -10s;

    z-index: -10;
}
</style>