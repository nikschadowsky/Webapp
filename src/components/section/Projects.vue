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
            ProjectsTitel
        </HeaderSection>
        <MainSection>
            <Gallery :items="['src/projects_test.png','src/projects_test_2.png']" :descriptions="['Test1', 'Test2']">
            </Gallery>
        </MainSection>
    </div>
</template>

<style>
.projects {
    max-width: var(--max-content-width);
    
}
</style>