<script>

import { getRandomInt } from "../../util.js"
import RoundedTriangle from "../elements/RoundedTriangle.vue";
import RoundedSquare from "../elements/RoundedSquare.vue";


export default {

    components: {
        RoundedSquare, RoundedTriangle
    },

    mounted() {
        this.startTyping();
    },

    data() {

        return {
            currentTextName: "",
            finalTextName: "Nik Schadowsky",
            currentTextTitle: "",
            finalTextTitle: "Dualer Student",
            isTyping: false,
            fullyTyped: false,
            typingSpeed: 90,
            nameTitleDelay: 2000,
            startDelay: 1000,
            buttonDelay: 500

        }


    }, methods: {
        typeCharacterOfName() {
            if (this.currentTextName === this.finalTextName) {


                // classlist
                document.getElementById("name").classList.remove("caret-blink");
                document.getElementById("title").classList.add("caret-blink");

                setTimeout(this.typeCharacterOfTitle, this.nameTitleDelay);


            } else {

                this.currentTextName += this.finalTextName.charAt(this.currentTextName.length);
                setTimeout(this.typeCharacterOfName, this.typingSpeed + getRandomInt(50));
            }
        },
        typeCharacterOfTitle() {
            if (this.currentTextTitle === this.finalTextTitle) {
                setTimeout(this.afterTyping(), this.buttonDelay);
                this.isTyping = false;
                this.fullyTyped = true;



            } else {
                this.currentTextTitle += this.finalTextTitle.charAt(this.currentTextTitle.length);
                setTimeout(this.typeCharacterOfTitle, this.typingSpeed + getRandomInt(50));
            }
        },

        startTyping() {

            if (!this.isTyping && !this.fullyTyped) {
                this.isTyping = true;

                // initial waiting time
                setTimeout(() => {

                    this.typeCharacterOfName()
                }, this.startDelay)
            }

        },
        afterTyping() {
            // should be executed after the Text was typed out fully

            document.getElementById("go-button").classList.add("visible")

        },
        activateRestOfPage() {
            // set the visibility of the rest of the webpage
            this.$emit('pageActivationEvent');

            setTimeout(() => {

                document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }, 200)
        },

        startPolygonAnimation() {

            let squares = document.getElementsByClassName("intro animated-square");


        }



    }

}

</script>

<template>
    <div id="sup-flex">
        <div id="intro" class="section">

            <p>
                <span id="name" class="caret-blink">{{ currentTextName }}</span> <br>
                <span id="title">{{ currentTextTitle }} </span>
            </p>

            <button id="go-button" @click="activateRestOfPage" @mouseover="startPolygonAnimation">

                <p id="go-text">Meet Me!</p>

            </button>

            <div id="polygon-container" class="intro">
                <RoundedSquare class="intro animated-square" v-for="i in 10" />
                <RoundedTriangle />
            </div>

        </div>

    </div>
</template>

<style scoped>
#intro.section {
    position: relative;
    overflow-y: clip;
}

#sup-flex {
    display: flex;
    justify-content: center;


}

#name {
    font-size: 40pt;
    font-weight: 600;
}

#title {
    font-size: 18pt;
    font-weight: 500;

    color: var(--comment-text-color-dark-bg);
}

#go-text {
    position: relative;
    z-index: 3;
    color: inherit;
}

#go-button {
    font-size: 16pt;
    padding: 5px 18px;
    margin-top: 18px;

    background-color: var(--background-color);
    border: 2px var(--accent-color) solid;
    border-radius: 10px;
    color: var(--text-color-dark-bg);

    opacity: 0;

    z-index: 2;

    cursor: pointer;
}

#go-button.visible {
    position: relative;
    opacity: 1;
    transition: color .5s ease;

    transition: opacity 1s ease 1s;
}

#go-button.visible:hover {
    color: var(--background-color);
    transition: color .5s ease;
}

#go-button.visible:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;

    z-index: 2;
    border-radius: 4px;

    width: 0;
    height: 100%;

    background-color: var(--accent-color);

    transition: width .5s ease;

}

#go-button.visible:hover:after {
    width: 100%;
}

.polygon-container {
    position: relative;

}


.intro.animated-square {
    fill: var(--polygon-gray-4);

    position: absolute;

    bottom: -100px;
    top: auto;

    animation: rotate 10s infinite linear, fadeOutToTop 2s infinite linear;
    transform-origin: center;
    scale: .5;
}
</style>