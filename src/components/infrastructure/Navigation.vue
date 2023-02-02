<script>
import { isMobile } from "../../util.js";

export default {
    created() {
        console.log(isMobile())
    },
    methods: {
        isMobileDevice() {
            console.log(isMobile);
            return isMobile;
        }
    }
}

</script>

<template>
    <div id="navbar">
        <p class="colored" v-show="isMobileDevice">test </p>
    </div>
</template>

<style>
#navbar {
    width: 100%;
    background-color: #666666;
    height: 50px;
}
</style>