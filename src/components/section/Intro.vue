<script>

import MainSection from "../structure/MainSection.vue"
import HeaderSection from "../structure/HeaderSection.vue"

export default {



    data() {
        return {

        }
    },

    

    components: {
        MainSection,
        HeaderSection
    }
}

</script>

<template>
    <HeaderSection>DAS ist der Titel</HeaderSection>
    <MainSection>DAS ist der Test <br />
        DAS ist der Test <br />
        DAS ist der Test<br />
        DAS ist der Test
    </MainSection>
</template>

<style>

</style>