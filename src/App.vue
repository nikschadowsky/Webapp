


<script>
import Navigation from "./components/page-navigation/Navigation.vue";
import Wrapper from "./components/Wrapper.vue"

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
    color: #000000;
}


</style>

