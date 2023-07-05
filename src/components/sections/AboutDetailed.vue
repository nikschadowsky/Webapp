<script>
import RoundedTriangle from '../elements/RoundedTriangle.vue';
import PathElement from '../elements/PathElement.vue';

export default {
    components: {
        RoundedTriangle, PathElement
    },
    mounted() {

        const path = document.querySelector(".pathelement#path");

        const pathlength = path.getTotalLength();

        path.style.strokeDashoffset = pathlength;
        path.style.strokeDasharray = pathlength;


        this.$gsap.timeline({
            scrollTrigger: {
                trigger: "#about-detailed",
                start: "top top",
                end: "+=120%",
                pin: true,
                scrub: true
            }
        }).from(".about-detailed#text", {
            rotateY: "90deg",
            duration: 2
        }).to(".pathelement#path", {
            strokeDashoffset: "0px",
            duration: 10,
            ease: "ease"
        }, ">").to(".pathelement#grass-2", {
            opacity: 1,
            duration: 0.5
        }, "<2").to(".pathelement#grass-1", {
            opacity: 1,
            duration: 0.5
        }, "<4")


    }

}

</script>

<template>
    <div class="section" id="about-detailed">

        <div id="text-block" class="about-detailed">

            <div id="text" class="about-detailed">
                <h3 class="about header header-2 colored">Mein Weg bis hier</h3>

                Seit fast 6 Jahren übe ich mich in der Software-Entwicklung und habe auf diesem Wege schon einiges lernen
                können.
                Neben der Programmiersprache Java konnte ich Grundkenntnisse in Python, HTML, JavaScript, CSS und VueJS
                mitnehmen.
                <br><br>
                Mehr dazu findest du in
                <span class="colored link" @click="scrollToProjects">Meine Projekte</span>

                <h3 class="about-detailed header header-2 colored">Art. Music. Knowledge</h3>

                Ich lasse mich gern von Kreativität und bizarren Ideen zu Problemlösungen leiten und versuche stets eine
                klare
                und
                optimale Lösung für ein Problem finden - auch wenn es manchmal bedeutet, oft zu scheitern.
            </div>


        </div>
        <RoundedTriangle class="geometry" id="trig" />
        <PathElement id="pathelement" />
    </div>
</template>

<style>
#about-detailed {
    position: relative;

    overflow-x: hidden;
    overflow-y: clip;
}

.about-detailed#text-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1000px;

    width: 100%;
}

.about-detailed#text {
    transform-origin: left;
    max-width: 500px;
}

#trig {
    left: 0%;
    top: 50%;

    fill: var(--polygon-gray-4);
    transform: scale(5);

    animation: wobble 26s infinite ease-in-out;
}

#pathelement {
    position: absolute;
    top: 20%;
    height: 80%;
    right: -5%;
    z-index: -9;
}

.pathelement#path {
    stroke-dasharray: 140px;
    stroke-dashoffset: 140px;
    stroke: var(--accent-color-shadow);
    stroke-width: 1px;

}

.pathelement#grass {
    fill: none;
    stroke: var(--accent-color-shadow);
}

.pathelement.grass {
    opacity: 0;
    transform-origin: center;
}

@media only screen and (max-width: 600px) {
    .about-detailed#text {
        padding: 0 30px 0 30px;
    }

    #pathelement{
        top: 30%;
        left: 10%;
    }
}
</style>