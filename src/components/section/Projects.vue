<script>

import HeaderSection from "../structure/HeaderSection.vue";
import MainSection from "../structure/MainSection.vue";
import Gallery from "../gallery/Gallery.vue";

export default {
    components: {
        HeaderSection,
        MainSection,
        Gallery
    }

}

</script>

<template>
    <div class="projects">
        <HeaderSection>
            My Projects
        </HeaderSection>
        <MainSection>
            <Gallery :items="[
                
                {
                    path:'src/projects_test_2.png',
                    description:'This is my Project, where I develope this Website',
                    href:'https://github.com/nikschadowsky/webapp'
                },{
                    path:'src/webapp_project.png',
                    description:'This is my Project, where I develope this Website',
                    href:'https://github.com/nikschadowsky/webapp'
                }
            ]">
            </Gallery>
        </MainSection>
    </div>
</template>

<style>
.projects {
    max-width: var(--max-content-width);
    
}
</style>