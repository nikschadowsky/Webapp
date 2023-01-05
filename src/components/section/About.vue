<script>

import MainSection from "../structure/MainSection.vue";
import HeaderSection from "../structure/HeaderSection.vue";

export default {
    data() {
        return {

        }
    }, components: {
        MainSection,
        HeaderSection
    }
}

</script>
<template>
    <HeaderSection>
        Über mich
    </HeaderSection>
    <MainSection>
        <span class="cursive comment">
            <br>
            &lt;comment&gt;<br>
            <br>
            <span class="indented">
                Heyho! <br> 
                <br>Ich bin Nik Schadowsky.
                Seit August 2022 Dualer Student für Angewandte Informatik bei <a class="colored link"
                    href="https://www.tk.de/" target="_blank" rel="noopener noreferrer">@Techniker Krankenkasse</a>. <br><br>

                Bei meinen freizeitlichen Programming-Journeys arbeite ich hauptsächlich mit Java, aber auch mit Python, HTML, JavaScript und CSS.
            </span><br>
            <br>
            &lt;/comment&gt;

        </span>
    </MainSection>

</template>

<style scoped>
  
</style>