<script>

import Container from "./Container.vue";
import Intro from "./section/Intro.vue";
import Projects from "./section/Projects.vue";


export default{

    data() {
        return{
            
        }
    },
    components:{
    Container,
    Intro,
    Projects,
    
},
    methods:{
        
    }

}

</script>

<template >
    <div id="wrapper">
        <Container>
            <Intro></Intro>
        </Container>
        <Container>
            <Projects></Projects>
        </Container>

    </div>

</template>

<style scoped>

#wrapper {


    height: 8000px;
    
    max-width: var(--max-site-width);
    margin: var(--header-height) auto 0;

}
</style>