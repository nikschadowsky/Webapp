<script>

import Logo from "./Logo.vue";

export default {
    data () {
        return {
            title: "<",
            charIndex: 0,
            currentText: "",
            typingSpeed: 50,
            erasingSpeed: 20,
            finalText: "nikschadowsky.de",
            isTyping: true

        }
    },
    methods: {
        scrollToTop() {

            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        startTyping() {

            setTimeout(() => {
                if (this.isTyping) {

                    setTimeout(this.typeText, 10);
                }
            }, 300);
            this.isTyping = true;


        },
        startErasing() {
            this.isTyping = false;
            setTimeout(this.eraseText, 10);
        },

        typeText() {
            if (this.isTyping) {
                if (this.charIndex < this.finalText.length) {
                    this.currentText += this.finalText[this.charIndex];
                    this.charIndex++;

                    setTimeout(this.typeText, this.typingSpeed);
                }
            }
        },
        eraseText() {
            if (!this.isTyping) {
                if (this.charIndex > 0) {
                    this.currentText = this.currentText.slice(0, -1);
                    this.charIndex--;

                    setTimeout(this.eraseText, this.erasingSpeed);
                }
            }
        },
        testVis(isVisible, entry) {
            console.log("TEST");
        }

    }, components: {
        Logo
    }

}


</script>

<template>

    <nav class="header">
        <ul class="nav-list">

            <li class="nav-element">

                <a  class="link carret-blink-anim" @click="scrollToTop" @mouseenter="startTyping" @mouseout="startErasing">{{ title + currentText
                }}/></a>
            </li>
            <li class="nav-element">
                <a class="link carret-blink-anim" href="https://github.com/nikschadowsky" target="_blank"
                    rel="noopener noreferrer">&lt;github/&gt;</a>
            </li>
            <li class="nav-element">
                <a class="link carret-blink-anim" href="https://twitch.tv/nikschadowsky" target="_blank" rel="noopener noreferrer">&lt;twitch/&gt;</a>
            </li>

        </ul>

    </nav>

</template>



<style>
.header {

    z-index: 12;
    display: inline;
    position: fixed;
    height: var(--header-height);
    width: 100%;
    background-color: var(--background-color);
    text-align: center;
}

.nav-list {

    height: 100%;
    max-width: var(--max-site-width);

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    list-style-type: none;
    margin: auto;

    border-bottom-width: 4px;
    border-bottom-style: solid;
    border-image: var(--color-gradient) 1;


}

.nav-element {
    margin: auto 7px;
    color: var(--accent-color);
}

.nav-element:first-child {
    margin-right: auto;
    margin-left: 15px;
}
.nav-element:last-child {
    margin-right: 15px;

}

</style>