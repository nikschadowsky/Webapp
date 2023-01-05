<script>

import MainSection from "../structure/MainSection.vue"
import HeaderSection from "../structure/HeaderSection.vue"


export default {

    components: {
        MainSection,
        HeaderSection
    }

}

</script>

<template>
    
    <MainSection>
        <div class="outro-parent flex">
            <div class="outro-child " >
                <p class="colored">Created with</p>
                <br>
                <p class="">
                      vue 3 <br>
                     vue-observe-visibility
                </p>
                
                
            </div>
            <div class="outro-child">
                <p class="colored">Kontakt</p>
                nikschadowsky@nikschadowsky.de
            </div>
        </div>

    </MainSection>

</template>

<style scoped>
    .outro-parent{
        flex-wrap: wrap;
    }
.outro-child{
    
}

    .outro-child:last-of-type {
       margin-left: auto;
    }
</style>
