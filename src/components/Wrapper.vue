<script>

import * as ScrollMagic from "scrollmagic"
import { ScrollMagicPluginIndicator } from "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

import Container from "./Container.vue";
import Intro from "./section/Intro.vue";
import Projects from "./section/Projects.vue";
import About from "./section/About.vue";
import Outro from "./section/Outro.vue";
import Roadmap from "./section/Roadmap.vue";

export default {

    data() {
        return {
            controller: new ScrollMagic.Controller()
        }
    },
    components: {
        Container,
        Intro,
        About,
        Projects,
        Outro,
        Roadmap
    },
    methods: {
        test(isVisible, entry) {
            //console.log("visible");
        }
    }, mounted() {
        for (let i = 1; i <= 5; i++) {
            let scene = new ScrollMagic.Scene({ triggerElement: "#pin" + i, duration: 600 }).setPin("#pin" + i).addIndicators({ name: "indicator #" + i }).addTo(this.controller)
            scene.triggerHook(0.0)
            console.log("#pin" + i);
        }
    }

}

</script>

<template >
    <div id="wrapper" class="flex">
        <div id="pin1">
            <Container :accent="'#00bdff'" :secondary="'#0000ff5A'">
                <Intro></Intro>
            </Container>
        </div>
        <div id="pin2">
            <Container :accent="'#00bdff'" :secondary="'#0000ff5A'">
                <About></About>
            </Container>
        </div>
        <div id="pin3">
            <Container :accent="'#ff0000'" :secondary="'#ff00005A'">
                <Roadmap></Roadmap>
            </Container>
        </div>
        <div id="pin4">
            <Container :accent="'#bb42dd'" :secondary="'#410066'">
                <Projects></Projects>
            </Container>
        </div>
        <div id="pin5">
            <Container id="last" :accent="'#bb42dd'" :secondary="'#410066'">
                <Outro></Outro>
            </Container>
        </div>


    </div>

</template>

<style scoped>
#wrapper {

    flex-direction: column;

    max-width: var(--max-site-width);
    margin: 0 auto 0;

}

#last {
    margin-bottom: 0;
}
</style>