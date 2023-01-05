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
    <HeaderSection>Nik Schadowsky</HeaderSection>
    <MainSection>
        <p>
            Techniker Krankenkasse 
        </p>
        <p>
            <span class="colored">Dualer Student</span> für Angewandte Informatik
        </p>
        
    </MainSection>
</template>
 
<style scoped>


p {
    padding-bottom: 10px;
}
</style>