<script>

import Timeline from "../elements/timeline.vue"

export default {

    data() {
        return {
            currentSemester: 0,
            semesterArray: [],
            semesterTimespanArray:  []

        }
    },

    mounted() {

        fetch("roadmap-state")
            .then(response => {
                if (!response.ok) throw Error("Error fetching data!")
                return response.json()
            }).then(data => {
                this.currentSemester = data.semester
                this.semesterArray = data.all_semesters
                this.semesterTimespanArray = data.timespans

                console.log("Roadmap-Data loaded")
            }).catch(error => {
                console.log(error)
            })

    },
    components: {
        Timeline
    }

}

</script>

<template>

    <div id="roadmap" class="section">
        <div id="timeline-holder">

            <div id="initial-dot" class="dot"></div>

            <div id="timeline-short"></div>

            <div class="dot-section" v-for="(sem, i) in semesterArray" >

                <div class="dot "></div>
                <div class="dashed-line " :class="{comment: currentSemester < i+1}"></div>
                <div class="semester-text " :class="{comment: currentSemester < i+1}">{{currentSemester < i+1? this.semesterTimespanArray[i] : "timespans[i]"}}</div>
            </div>

            <div id="timeline-short"></div>

            <div id="arrow"></div>

        </div>
    </div>
</template>

<style scoped>
#timeline-holder {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 200px;
}

#timeline {
    width: 5px;
    height: 70px;
    background-color: var(--comment-text-color-dark-bg);


}

#timeline-long {
    width: 5px;
    height: 90px;
    background-color: var(--comment-text-color-dark-bg);


}

#timeline-short {
    width: 5px;
    height: 40px;
    background-color: var(--comment-text-color-dark-bg);


}



.dot {
    position: relative;
    width: 9px;
    height: 9px;

    border: 4px solid var(--accent-color);
    border-radius: 100%;

    background-color: var(--background-color);

}

#initial-dot {
    background: var(--comment-text-color-dark-bg);
    border: 2px solid var(--comment-text-color-dark-bg);

    margin-left: 3px;
}

#arrow {
    position: relative;

    width: 13px;
    height: 13px;
    border: solid var(--accent-color);
    border-width: 0 4px 4px 0;

    rotate: 45deg;

    top: -15px;

}

.dot-section {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;


    width: 300px;

    margin-bottom: 40px;
}

.semester-text {}

.dashed-line {
    width: 100px;
    border-top: 1px dashed var(--accent-color);
}
</style> 