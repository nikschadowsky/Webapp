<script>
import { request } from '@octokit/request';
import GitHubIcon from '../elements/GitHubIcon.vue'

const DESCRIPTION_IMAGE_PATH = "DESCRIPTION_IMAGE.png";


export default {

    data() {
        return {
            repositories: [],
            reposPerPage: 3,
            currentlyVisible: 0,
            maxReached: false,
            username: "nikschadowsky",
            currentPage: 0,
            // while fetching 
            isLoading: false,
            tags: []
        }

    },
    components: {
        GitHubIcon
    },

    mounted() {
        // preload first 3
        this.loadMore(0);
        this.showMore();

    }, methods: {

        showMore() {

            this.currentlyVisible += this.reposPerPage;
            this.loadMore(this.repositories.length);

        },
        loadMore(lastCount) {

            this.isLoading = true;
            this.currentPage++;

            request("GET /users/{username}/repos", {
                username: this.username,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                },
                sort: "pushed",
                direction: "desc",
                per_page: this.reposPerPage,
                page: this.currentPage,


            }).then(res => {

                res.data.forEach((repo) => {
                    this.repositories.push({
                        name: repo.name,
                        htmlURL: repo.html_url,
                        tags: repo.topics,
                        imageData: ""
                    })
                })

                if (lastCount == this.repositories.length) {
                    this.disableLoadMore()
                }

                this.repositories.forEach((repo) => {

                    request("GET /repos/{username}/{repository}/contents/{path}", {
                        headers: {
                            'X-GitHub-Api-Version': '2022-11-28',
                            authorization: 'token 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'
                        },
                        username: this.username,
                        repository: repo.name,
                        path: DESCRIPTION_IMAGE_PATH
                    }).then((resp) => {
                        repo.imageData = resp.data.content
                    })

                })


            }).catch((err) => {
                this.disableLoadMore();
            }).finally(() => {
                this.isLoading = false;
                this.$scrolltrigger.refresh()
            })


        },


        disableLoadMore() {

            this.maxReached = true;
            document.getElementById("load-more-button").disabled = true;
            document.getElementById("load-more-button").classList.remove("visible");
        },
        sortTags(tagList) {

            let newList = tagList.slice();

            if (newList.includes("unfinished")) {
                newList = newList.filter(entry => entry != "unfinished")
                newList.push("unfinished");
            }
            else if (newList.includes("finished")) {
                newList = newList.filter(entry => entry != "finished")
                newList.push("finished");
            }


            return newList.reverse();
        }

    }

}

</script>

<template>
    <div id="projects" class="section">
        <h1 class="colored">Meine Projekte</h1>
        <div class="repo-container">

            <div v-for="(repository, index ) in this.repositories.slice(0, this.currentlyVisible)" class="repo" :id="'repo-' + index">
                <div class="repo-image-wrapper">
                    <img class="repo-desc-image" alt=""
                        :src="repository.imageData != '' ? ('data:image/png;base64, ' + repository.imageData) : 'src/assets/media/DESCRIPTION_IMAGE.png'">
                </div>
                <div class="repo-spacer top"></div>


                <p class="repo-beschreibung">{{ repository.name }}</p>

                <div class="repo-tag-holder">
                    <div v-for="tag in sortTags(repository.tags)">
                        <div class="repo-tag" :class="{ green: tag == 'finished', yellow: tag == 'unfinished' }">
                            <p>{{ tag }}</p>
                        </div>
                    </div>
                </div>

                <div class="repo-spacer bottom"></div>

                <a class="repo-redirect link" :href="repository.htmlURL" target="_blank" rel="noopener noreferrer">
                    <p class="repo-link-text">Mehr erfahren </p>
                    <GitHubIcon class="repo-github-icon" />
                </a>
            </div>
        </div>
        <div id="repo-button-holder">

            <button v-show="!this.isLoading" id="load-more-button" class="visible" @click="this.showMore()">
                <p id="load-more-text">Mehr laden</p>

            </button>

            <div v-show="this.isLoading" class="loading-icon">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    </div>
</template>

<style scoped>
#projects {
    margin-top: 100px;
    overflow-y: clip;

    margin-bottom: 20%;
}

.repo-container {
    display: flex;

    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;


    flex-wrap: wrap;
    gap: 60px;

    margin-top: 80px;

    max-width: calc(3* 280px + 2*60px);
}

.repo {
    display: flex;
    flex-direction: column;

    width: 280px;
    height: 500px;
    background-color: var(--repository-color);

    border-radius: 35px;
    border: 0px solid var(--accent-color);

    box-shadow: var(--accent-color-shadow) 0px 5px 10px 0px;

    overflow: hidden;

    margin-bottom: 50px;


    transition: scale 0.2s ease-in-out;

}

.repo-image-wrapper {
    width: 100%;

    min-height: 50%;
    max-height: 50%;
    overflow: hidden;

    display: flex;
    justify-content: center;
}

.repo-desc-image {
    display: block;
    height: 100%;
    width: auto;


}


.repo-spacer {
    width: 80%;
    min-height: 2px;
    background-color: whitesmoke;

}

.repo-spacer.top {

    margin: 15px auto 15px auto;

}

.repo-spacer.bottom {

    margin: 0 auto 8px auto;
}


.repo-beschreibung {
    display: inline;
    color: white;
    font-size: var(--font-larger);

    margin-left: 10%;
    margin-bottom: 5px;

}

.repo-tag-holder {

    margin: auto calc(10% - 10px) 0px calc(10% - 10px);

    display: flex;
    flex-wrap: wrap-reverse;
    flex-direction: row-reverse;

    justify-content: flex-end;

    max-height: 25%;

    overflow: scroll;

    gap: 6px;

    padding: 5px 10px;

}

.repo-tag {
    background-color: var(--accent-color);
    height: auto;
    padding: 0px 7px;
    border-radius: 10px;
    border: solid black 0px;
    box-shadow: var(--accent-color-shadow) 0px 2px 5px 0px;

    line-height: 28px;

    width: fit-content;


}

.repo-tag.yellow {
    background: rgb(243, 207, 6);
}

.repo-tag.green {
    background: rgb(4, 190, 4);
}

.repo:hover {
    scale: 1.05;

}

.repo:hover>.repo-redirect {
    opacity: 1;
}

.repo-tag>p {
    color: var(--accent-color-shadow);
    font-size: var(--font-smaller);
    font-weight: 500;

}

.repo-link-text:before {
    content: '_';
    opacity: 0;
}

.repo-redirect {
    display: flex;
    opacity: 0;
    margin: 0 auto 15px auto;

    transition: opacity 0.2s ease-in-out;

    font-size: 14pt;
}

.repo-github-icon {
    display: block;
    width: 1.5em;
    height: 1.5em;
    fill: white;

    padding-left: 5px;
}

#repo-button-holder {
    height: 60px;
}

#load-more-text {
    position: relative;
    z-index: 3;
    color: inherit;
}

#load-more-button {
    font-size: 16pt;
    padding: 5px 18px;
    margin-top: 18px;

    background-color: var(--background-color);
    border: 2px var(--accent-color) solid;
    border-radius: 10px;
    color: var(--text-color-dark-bg);

    opacity: 0;
}

#load-more-button.visible {
    position: relative;
    opacity: 1;
    transition: color .5s ease;

    transition: opacity 1s ease 1s;
    cursor: pointer;
}

#load-more-button.visible:hover {
    color: var(--background-color);
    transition: color .5s ease;
}

#load-more-button.visible:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;

    z-index: 2;
    border-radius: 4px;

    width: 0;
    height: 100%;

    background-color: var(--accent-color);

    transition: width .5s ease;

}

#load-more-button.visible:hover:after {
    width: 100%;
}
</style>