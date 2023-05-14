<script>
import RoundedSquare from "../elements/RoundedSquare.vue"

export default {

    methods: {
        scrollToProjects() {
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        }
    }, components:{
        RoundedSquare
    }



}

</script>

<template>
    <div id="about" class="section">
        
        <div id="text-block">
            <RoundedSquare objectID="svgImg" imageURL="src/assets/media/profil_sq.webp"></RoundedSquare>
            <div >
                <p id="text">
                    <h1 class="about-header about-header-1 colored">Hey!</h1>
                    Ich bin Nik Schadowsky. Seit August 2022 bin ich als Dualer Student für Angewandte Informatik bei
                    <a class="link colored"
                        href="https://www.tk.de/" target="_blank" rel="noopener noreferrer">@Techniker</a>
                    und 
                    <a class="link colored" href="https://www.nordakademie.de/" target="_blank" rel="noopener noreferrer">@Nordakademie</a>
                    tätig.

                    <h3 class="about-header about-header-2 colored">Mein Weg bis hier</h3>

                    Seit fast 6 Jahren übe ich mich in der Software-Entwicklung und habe auf diesem Wege schon einiges lernen können. Neben der Programmiersprache Java konnte ich Grundkenntnisse in Python, HTML, JavaScript, CSS und VueJS mitnehmen.
                    <br><br>
                    Mehr dazu findest du in
                        <span class="colored link" @click="scrollToProjects">Meine Projekte</span>

                    <h3 class="about-header about-header-2 colored">Kunst. Musik. Wissen</h3>
                    
                    Ich lasse mich gern von Kreativität und bizarren Ideen zu Problemlösungen leiten und versuche stets eine klare und optimale Lösung für ein Problem finden - auch wenn es manchmal bedeutet, oft zu scheitern.
                </p>
                
            </div>
        </div>
    </div>
</template>
<style scoped>
#text-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 1000px;
    max-height: 5 00px
}

#text {
    height: 100%;
    font-size: 16pt;
    text-align: start;
}

#img-holder {
    
    border: 1px var(--accent-color) solid;
    box-shadow: 0 0 6px var(--accent-color-shadow);

    padding: 10px;

    margin: 0 50px ;
}

#picture {
    height: 100%;
    width: 100%;
    display: block;

    border: 1px solid rgba(104, 131, 59, .5);
    box-shadow: 0 0 2px var(--accent-color-shadow);

    margin: 0;
}

#svgImg{
    min-width: 400px;
    height: 400px;

    margin-right: 100px;
    border: solid white 2px;
    border-radius: 20%;
}

.about-header{
    padding-bottom: 20px;
    padding-top: 40px;
}
.about-header-1{
    padding-top: 0;
}
.about-header-2{}
.about-header-3{}

</style>