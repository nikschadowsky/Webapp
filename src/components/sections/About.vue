<script>
import RoundedSquare from "../elements/RoundedSquare.vue"


export default {

    methods: {
        scrollToProjects() {
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        }
    }, components: {
        RoundedSquare
    }



}

</script>

<template>
    <div id="about" class="section">

        <div id="text-block" class="about">
            <RoundedSquare id="svgImg" imageURL="src/assets/media/profil_sq.webp"></RoundedSquare>
            <div>
                <p id="text" class="about">
                <h1 class="about header header-1 colored">Hey!</h1>
                Ich bin Nik Schadowsky. Seit August 2022 bin ich als Dualer Student für Angewandte Informatik bei
                <a class="link colored" href="https://www.tk.de/" target="_blank" rel="noopener noreferrer">@Techniker</a>
                und
                <a class="link colored" href="https://www.nordakademie.de/" target="_blank"
                    rel="noopener noreferrer">@Nordakademie</a>
                tätig.

                </p>

            </div>
        </div>
    </div>
</template>
<style scoped>
#picture {
    height: 100%;
    width: 100%;
    display: block;

    border: 1px solid rgba(104, 131, 59, .5);
    box-shadow: 0 0 2px var(--accent-color-shadow);

    margin: 0;
}

#svgImg {
    min-width: 300px;
    height: 300px;

    margin-right: 100px;
    border: solid white 2px;
    border-radius: 20%;

}

#svgImg:hover{
    animation: rock 5s ease-in-out infinite;
    animation-delay: -1.25s;

}
</style>