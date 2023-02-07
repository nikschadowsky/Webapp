<script>
import { isMobile } from "../../util.js";

export default {
   

    methods: {
        isMobileDevice() {
            
            return (window.innerWidth <= 800);
        },
        scrollToTop(){
            console.log("top");
            window.scrollTo({top: 0, behavior: "smooth"});
        }
    }
}

</script>

<template>
    <div id="navbar">

        <a class="link" @click="scrollToTop">nikschadowsky </a>

        
        <a href="https://www.github.com/nikschadowsky" target="_blank" rel="noopener noreferrer"  class="link">github</a>
        
        <p class="link">kontakt</p>
        
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

    z-index: 4;
}


#navbar> :first-child {
    margin-right: auto;
    margin-left: 40px;
}

#navbar> :last-child {
    margin-right: 40px;
}

.entry{
    position: relative;
}

.entry:hover::after{
    transform-origin: center;
    transform: scaleX(1);
}

.entry::after{
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

</style>