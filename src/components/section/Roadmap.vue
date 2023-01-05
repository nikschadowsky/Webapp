<script>
import HeaderSection from "../structure/HeaderSection.vue"
import MainSection from "../structure/MainSection.vue"

export default {
    data() {
        return {
            current_semester: 0,
            all_semesters: [],
            isLoading: false,
            hasFailed: false,
        }
    },

    components: {
        HeaderSection, MainSection
    },

    mounted() {
        this.isLoading = true
        this.hasFailed = false
        fetch("roadmap-state")
            .then(response => {
                if (!response.ok)
                    throw Error("Error fetching data!")
                return response.json()
            })
            .then(data => {
                this.current_semester = data.semester
                this.all_semesters = data.all_semesters

                console.log("Semester-Roadmap loaded")
                this.isLoading = false
            })
            .catch(error => {
                this.isLoading = false;
                this.hasFailed = true;
                console.log(error);
            })
    }
}

</script>
<template>
    <HeaderSection>
        Studium-Roadmap
    </HeaderSection>
    <MainSection v-if="!isLoading && !hasFailed">
        <div class="holder">

            <div class="semesters">
                <div class="track"></div>
                <p v-for="i in all_semesters.length" class="semester-entry"
                    :class="{ 'small-text': !(i === current_semester), 'comment-darker': !(i === current_semester), 'active-semester': (i === current_semester) }">
                    {{ all_semesters[i - 1] }}

                <div class="dot" v-show="i === current_semester"></div>
                </p>
            </div>

        </div>
    </MainSection>
    <MainSection v-else-if="!hasFailed">

        <div class="holder loading">Loading</div>

    </MainSection>

    <MainSection v-else>
        Error fetching roadmap data!
    </MainSection>

</template>
<style scoped>
.holder {
    height: 60vh;

    position: relative;

}


.track {
    position: absolute;
    height: 100%;
    width: 2px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, var(--accent-color) 100px, var(--accent-color) 100%);
    opacity: 100%;
    left: -0px;
}

.dot {
    position: absolute;
    border: 3px solid var(--accent-color);
    border-radius: 100%;

background-color: var(--accent-color);

    width: 8px;
    height: 8px;

    margin-top: 6px;

    left: -76px;

}


.semesters {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    margin-left: 70px;


}

.semester-entry {
    position: relative;

    margin-bottom: 7px;
}

.semester-entry:first-of-type {
    margin-top: auto;
}

.semester-entry:last-of-type {
    margin-bottom: auto;
    margin-top: 18px;
}

.active-semester {
    padding-left: 10px;
}
</style> 