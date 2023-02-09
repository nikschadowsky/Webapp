<script>

export default {

    methods: {
        scrollToProjects() {
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        }
    }



}

</script>

<template>
    <div id="about" class="section">

        <div id="text-block">
            <div id="text">
                <p>
                    Hi! <br>
                    <br>Ich bin Nik Schadowsky. <br>
                    Seit August 2022 bin ich Dualer Student für Angewandte Informatik bei <a class="link colored"
                        href="https://www.tk.de/" target="_blank" rel="noopener noreferrer">@Techniker Krankenkasse</a>.
                    <br><br>

                    In meiner Freizeit arbeite ich viel mit Java, aber auch mit HTML, JavaScript, CSS und gelegentlich
                    Python.
                    Mehr dazu in meinen <span class="colored link" @click="scrollToProjects"> Projekten</span>.
                </p>
                <div id="img-holder">
                    <img id="picture" src="../../image_about.png" alt="image of Nik Schadowsky">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#text-block {
    display: flex;
    flex-direction: row;


    max-width: 1000px;
    max-height: 500px
}

#text {
    height: 100%;
    display: flex;
    align-items: center;
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
</style>