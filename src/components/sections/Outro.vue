<script>
import GitHubIcon from "../elements/GitHubIcon.vue"
import InstagramIcon from "../elements/InstagramIcon.vue"
import DiscordIcon from "../elements/DiscordIcon.vue"
import SpotifyIcon from "../elements/SpotifyIcon.vue"
import LetterIcon from "../elements/LetterIcon.vue"

export default {
    components: {
        GitHubIcon, InstagramIcon, DiscordIcon, SpotifyIcon, LetterIcon
    }
}

</script>

<template>
    <div class="section" id="outro">

        <div id="quote">
            <p>
                <span class="italicized">„Gott würfelt nicht”</span>
                <span style="white-space: nowrap;"> - <span class="italicized">Albert Einstein </span></span>
            </p>
        </div>

        <div class="flexbox-table">

            <div id="made-with-panel">
                <div id="text-container">
                    <p id="made-with-title" class="colored">Erstellt mit</p>
                    <div class="comment italicized">
                        <p>Vue 3</p>
                        <p>GSAP</p>
                        <p>SVG Repo</p>
                        <p>...</p>
                        <p>und viel Freizeit </p>
                    </div>
                </div>
            </div>

            <div id="spacer">
                <div id="spacer-line"></div>
            </div>

            <div id="contact-panel">
                <div id="mail-contact">
                    <p>Schreib mir doch gerne eine E-Mail:</p>
                    <div id="mail-container">
                        <LetterIcon id="mail-icon" />
                        <a id="mail-link" class="link colored" href="mailto:info@nikschadowsky.de">info@nikschadowsky.de
                        </a>
                    </div>
                </div>
                <div id="other-contact">
                    Check auch das aus:
                    <div id="icon-library">
                        <a href="https://www.github.com/nikschadowsky" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon class=" icon" />
                        </a>
                        <a href="https://www.instagram.com/nikschadowsky/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon class=" icon" />
                        </a>
                        <a href="https://open.spotify.com/playlist/62BbMAkhDxHFhwnBnqH2kJ?si=758383e9a106456c"
                            target="_blank" rel="noopener noreferrer">
                            <SpotifyIcon id="spotify" class="icon" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#quote {
    display: block;
    text-align: center;

    font-size: 22pt;

    margin-bottom: 100px;
    margin-top: 100px;
}

#spacer {
    width: 20px;

    margin-left: 10px;
    margin-right: 10px;

    display: flex;

    justify-content: center;
}


.flexbox-table {
    display: flex;

    max-width: 1000px;

    width: 100%;


    flex-wrap: wrap;

    justify-content: center;
    gap: 20px;

}

#made-with-panel {


    min-width: 400px;

    justify-self: stretch;

    padding-left: 50px;

}

#text-container {
    margin-left: 100px;
}

#made-with-title {
    margin-bottom: 7px;
}

.comment.italicized {
    padding-left: 15px;
}

#contact-panel {

    min-width: 400px;
}

#mail-contact {

    display: flex;
    flex-wrap: wrap;

    flex-direction: column;

    align-items: center;
}

#mail-container {
    display: flex;

    flex-wrap: nowrap;

    align-items: flex-start;

    margin-bottom: 20px;

    margin-top: 10px;
}

#mail-icon {
    width: 30px;
    height: 30px;

    fill: var(--accent-color);


    margin: 0 6px 0 6px;
}

#mail-link {
    padding-top: 2px;

}

#other-contact {

    text-align: center;

    margin-top: 30px;
}

#icon-library {
    margin-top: 10px;
    margin-bottom: 5px;
}


.icon {
    width: 60px;
    height: 60px;
    fill: var(--accent-color);

    scale: 1;

    margin: 0 5px 0 5px;

    transition: .25s ease;
}

.icon:hover {
    cursor: pointer;

    filter: drop-shadow(0px 0px 10px var(--accent-color));

    scale: 1.2;

    transition: .25s ease;
}

#spotify {

    transform: scale(1.1);
}

@media only screen and (max-width: 600px) {
    #mail-icon {
        width: 22px;
        height: 22px;
    }
    #quote {
        margin-bottom: 50px;
    }
}
</style>