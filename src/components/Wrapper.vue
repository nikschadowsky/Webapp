<script>

import Container from "./Container.vue";
import Intro from "./section/Intro.vue";
import Projects from "./section/Projects.vue";
import About from "./section/About.vue";
import Outro from "./section/Outro.vue";

export default{

    data() {
        return{
            
        }
    },
    components:{
    Container,
    Intro,
    About,
    Projects,
    Outro,
},
    methods:{
        test(isVisible, entry){
            //console.log("visible");
        }
    }

}

</script>

<template >
    <div id="wrapper" class="flex">
        <Container :accent="'#00bdff'" :secondary="'#0000ff5A'" >
            <Intro></Intro>
        </Container >
        <Container :accent="'#00bdff'" :secondary="'#0000ff5A'">
            <About></About>
        </Container>
        <Container :accent="'#bb42dd'" :secondary="'#410066'">
            <Projects></Projects>
        </Container>
        <Container id="last" :accent="'#bb42dd'" :secondary="'#410066'">
            <Outro></Outro>
        </Container>
        

    </div>

</template>

<style scoped>

#wrapper {

    flex-direction: column;
    
    max-width: var(--max-site-width);
    margin: var(--header-height) auto 0;

}

#last {
    margin-bottom: 0;
}
</style>