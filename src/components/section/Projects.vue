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
            Projekte
        </HeaderSection>
        <MainSection>
            <Gallery :items="[
                
                {
                    path:'src/webapp_project.png',
                    description:'Mein WebApp-Projekt',
                    href:'https://github.com/nikschadowsky/webapp'
                }
            ]">
            </Gallery>
        </MainSection>
    </div>
</template>

<style scoped>
.projects {
    max-width: var(--max-content-width);
    

}
</style>