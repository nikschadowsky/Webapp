<script>
import RoundedTriangle from '../elements/RoundedTriangle.vue';

export default {
    components: {
        RoundedTriangle
    },


}

</script>

<template>
    <div class="section" id="aboutDetailed">

        <div id="text-block" class="about">
            <p id="text" class="about">

            <h3 class="about header header-2 colored">Mein Weg bis hier</h3>

            Seit fast 6 Jahren übe ich mich in der Software-Entwicklung und habe auf diesem Wege schon einiges lernen
            können.
            Neben der Programmiersprache Java konnte ich Grundkenntnisse in Python, HTML, JavaScript, CSS und VueJS
            mitnehmen.
            <br><br>
            Mehr dazu findest du in
            <span class="colored link" @click="scrollToProjects">Meine Projekte</span>

            <h3 class="about header header-2 colored">Art. Music. Knowledge</h3>

            Ich lasse mich gern von Kreativität und bizarren Ideen zu Problemlösungen leiten und versuche stets eine klare
            und
            optimale Lösung für ein Problem finden - auch wenn es manchmal bedeutet, oft zu scheitern.
            </p>

            <RoundedTriangle id="trig" />

        </div>
    </div>
</template>

<style>

#aboutDetailed{
    position: relative;

    overflow-x: hidden;
    overflow-y: clip;
}
#trig {

    position: absolute;


    right: 0%;


    top: 50%;

    fill: var(--polygon-gray-4);
    transform: scale(5);
    z-index: -10;


    animation: rotate 26s infinite ease-in-out;

}
</style>