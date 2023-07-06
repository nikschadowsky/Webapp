<script>
import RoundedSquare from "../elements/RoundedSquare.vue"

export default {

    methods: {
        scrollToProjects() {
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
        }
    }, components: {
        RoundedSquare
    }, mounted() {

        this.$gsap.timeline(
            {
                scrollTrigger: {
                    trigger: "#about",
                    start: "top top",
                    end: "+=100%",
                    pin: true,
                    scrub: true
                }
            }).from("#svgImg", {
                y: "300%",
                duration: 4,
                ease: "ease"
            }, 0).to("#svgImg", {
                y: "-300%",
                duration: 4,
                ease: "ease"
            }, 8).from(".about#text", {
                rotateX: "-90deg",
                ease: "ease",
                duration: 2
            }, 2).to(".about#text", {
                rotateX: "90deg",
                ease: "ease",
                duration: 2
            }, 8)

    }



}

</script>

<template>
    <div id="about" class="section">
        <div id="text-block" class="about">

            <div id="text" class="about">
                <h1 class="about header header-1 colored">Hey!</h1>
                Ich bin Nik Schadowsky. Seit August 2022 bin ich als Dualer Student für Angewandte Informatik bei
                <a class="link colored" href="https://www.tk.de/" target="_blank" rel="noopener noreferrer">@Techniker</a>
                und
                <a class="link colored" href="https://www.nordakademie.de/" target="_blank"
                    rel="noopener noreferrer">@Nordakademie</a>
                tätig.

            </div>
            <RoundedSquare id="svgImg" imageURL="assets/media/profil_sq.webp"></RoundedSquare>


        </div>
    </div>
</template>
<style scoped>
#about {
    overflow-y: hidden;
    position: relative;
}

.about.header-1 {
    padding-top: 0;
}

.about#text-block {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    transform-origin: top;
    position: relative;

    flex-direction: row-reverse;

    gap: 40px;
}

.about#text {
    transform-origin: top;
    max-width: 500px;
}


#svgImg {
    min-width: 300px;
    height: 300px;

    border: solid white 2px;
    border-radius: 20%;

}


#svgImg:hover {
    animation: rock 5s ease-in-out infinite;
    animation-delay: -1.25s;

}


@media only screen and (max-width: 600px) {
    .about#text {
        padding: 0 30px 0 30px;
    }

    #svgImg {
        min-width: 200px;
        height: 200px;
    }
}
</style>