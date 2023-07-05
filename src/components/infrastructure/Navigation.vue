<script>
export default {

    data() {
        return {
            isMobile: window.innerWidth <= 600,
            isNavOpen: false,
            timeline: null
        }
    },
    mounted() {

        window.addEventListener("resize", () => { this.isMobile = window.innerWidth <= 600 });

        this.timeline = this.$gsap.timeline().fromTo(".open-nav#list", { background: "#0F0F0F00" }, { background: "#0F0F0FCF", duration: .7, ease: "ease" }).fromTo(".open-nav.link", { translateX: "300px" }, { translateX: 0, duration: .5, ease: "ease" })
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
            this.closeMobileNavigation();
        },


        toggleMobileNavigation() {

            this.isNavOpen ^= true;


            if (this.isNavOpen) {
                this.enableNoScroll()
                this.timeline.restart()
                console.log("open");
            } else { this.disableNoScroll() }

        },
        closeMobileNavigation() {
            this.isNavOpen = false;

            this.disableNoScroll();
        },

        enableNoScroll() {
            document.body.classList.add("noscroll")
        },
        disableNoScroll() {
            document.body.classList.remove("noscroll")
        }
    }
}

</script>

<template>
    <div id="navbar" v-if="!isMobile">
        <a class="link" @click="scrollToTop">nikschadowsky</a>

        <a class="link" href="https://www.github.com/nikschadowsky" target="_blank" rel="noopener noreferrer">github</a>

        <a class="link" :href="this.$contact">kontakt</a>
    </div>
    <div id="open-nav" v-else @click="toggleMobileNavigation">
        <span class="open-nav line" id="line-1"></span>
        <span class="open-nav line" id="line-2"></span>
        <span class="open-nav line" id="line-3"></span>


    </div>
    <div class="open-nav" id="list" v-show="isNavOpen">
        <a class="open-nav link colored" @click="scrollToTop">zum Anfang</a>

        <a class="open-nav link colored" href="https://www.github.com/nikschadowsky" target="_blank"
            rel="noopener noreferrer">github</a>

        <a class="open-nav link colored" :href="this.$contact">kontakt</a>
    </div>
</template>

<style scoped>
#navbar {
    position: fixed;
    display: flex;
    width: 100%;
    height: 55px;

    align-items: center;
    gap: 35px;

    border-bottom: var(--accent-color) solid 2px;
    box-shadow: 0 3px 10px var(--accent-color-shadow);
    background-color: var(--background-color);

    z-index: 9999;
}


#navbar> :first-child {
    margin-right: auto;
    margin-left: 40px;
}

#navbar> :last-child {
    margin-right: 40px;
}

.entry {
    position: relative;
}

.entry:hover::after {
    transform-origin: center;
    transform: scaleX(1);
}

.entry::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: darksalmon;
    transform: scaleX(0);

    transition: transform 250ms;
}

#open-nav {
    position: fixed;

    width: 40px;
    height: 40px;

    margin: 7px 10px;

    right: 0%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;

    z-index: 999;

}

.open-nav.line {
    display: inline;
    width: 80%;
    border-top: 3px solid var(--accent-color);
}

.open-nav#list {
    position: fixed;

    width: 100vw;
    height: 100vh;


    background-color: #0F0F0FCF;

    z-index: 888;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end
}

.open-nav.link {
    font-size: 24pt;
    font-weight: 600;
    margin-bottom: 30px;
    margin-right: 30px;
}

</style>
