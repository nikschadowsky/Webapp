


<script>
import Navigation from "./components/infrastructure/Navigation.vue";
import Wrapper from "./components/infrastructure/Wrapper.vue"

var darkModeOn;
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    computed: {
       
    },
    components: { Navigation, Wrapper }
}


</script>

<template>

    <main>
        <Navigation />

        <Wrapper />

    </main>

</template>
<style>

body {
    background: var(--background-color);
    color: #ffffff;
    position: relative;
}


</style>

