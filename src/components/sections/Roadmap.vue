<script>

import Timeline from "../elements/timeline.vue"

export default {

    data() {
        return {
            currentSemester: 0,
            semesterArray: [],
            semesterTimespanArray: []

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

            <div id="timeline-content">
                <div id="timeline"></div>
                <div id="initial-dot" class="dot"></div>


                <div class="dot-section" v-for="(sem, i) in semesterArray">

                    <div class="dot " :class="{ 'dot-disabled': currentSemester < i + 1 }"></div>
                    <div class="dashed-line " :class="{ comment: currentSemester < i + 1 }"></div>
                    <div class="semester-text " :class="{ comment: currentSemester < i + 1 }">
                        <p 
                            :class="{'underline': currentSemester === i + 1, 'active-semester': currentSemester === i + 1, comment: currentSemester < i + 1 }">
                            {{ currentSemester < i + 1 ? this.semesterTimespanArray[i] : sem }}</p>
                    </div>
                </div>
            </div>


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
    /*margin-right: 200px;*/
}

#timeline {
    position: absolute;
    width: 5px;
    height: 100%;
    background-color: var(--timeline-color);

    left: 6px;
}

#timeline-content {
    position: relative;
}



.dot {
    position: relative;
    width: 9px;
    height: 9px;

    border: 4px solid var(--accent-color);
    border-radius: 100%;

    background-color: var(--background-color);

}

.dot-disabled {
    border-color: var(--comment-text-color-dark-bg);
}

#initial-dot {
    position: relative;
    background: var(--comment-text-color-dark-bg);
    border: 4px solid var(--comment-text-color-dark-bg);

    margin-left: 0px;
    margin-bottom: 30px;

    top: -2px;
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

.semester-text {
    display:flex;
    align-items: center;
    justify-content: center;

    width: 150px;
    text-align: center;
}

.text {
    width: min-content;

}

.dashed-line {
    width: 100px;
    border-top: 1px dashed var(--accent-color);
}

.dashed-line.comment {
    border-color: var(--comment-text-color-dark-bg);
}

.active-semester {

    font-weight: 600;

}
</style> 