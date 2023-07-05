<script>
import Timeline from "../elements/timeline.vue"

export default {

    data() {
        return {
            currentSemester: 0,
            semesterArray: [],
            semesterTimespanArray: [],
            gsapInitialised: false
        }
    },

    mounted() {
        console.log("mounted");

        fetch("roadmap-state")
            .then(response => {
                if (!response.ok) throw Error("Error fetching data!")
                return response.json()
            }).then(data => {
                this.currentSemester = data.semester
                this.semesterArray = data.all_semesters
                this.semesterTimespanArray = data.timespans

                console.log("Roadmap-Data loaded")

            }).then(() => {
                this.initGSAP();
            })
            .catch(error => {
                console.log(error)

            })

    },
    components: {
        Timeline
    },
    methods: {
        isCurrentSemester(index) {
            return (index + 1) === this.currentSemester
        },
        isSemesterInPast(index) {
            return (index + 1) < this.currentSemester
        },
        isSemesterInFuture(index) {
            return !this.isSemesterInPast(index) && !this.isCurrentSemester(index)
        },
        initGSAP() {
            if (!this.gsapInitialised) {
                this.gsapInitialised = true;

                const tl = this.$gsap.timeline({
                    scrollTrigger: {
                        pin: true,
                        trigger: "#roadmap",
                        start: "top top",
                        end: "+=1000",
                        scrub: true
                    }
                }).from("#roadmap-title", {
                    x: "-170%",
                    opacity: 0,
                    duration: 5
                }).from("#timeline-holder", {
                    x: "170%",
                    opacity: 0,
                    duration: 5
                }, 0)
                
                for (let index = 0; index < this.semesterArray.length; index++) {
                   
                    tl.fromTo("#semester-" + index, {
                        scale: 0
                    }, {
                        scale: 1,
                        duration: 1
                    }, ">")
                }

                tl.to("#roadmap", {duration: 10}, ">")
            }
        }
    }

}

</script>

<template>
    <div id="roadmap" class="section">

        <div id="roadmap-title">
            <h1 class="roadmap colored">Studium-Roadmap</h1>
            <p class="roadmap subtitle">des Informatik-Studiums</p>
        </div>

        <div id="timeline-holder">

            <div id="timeline-content">
                <div id="timeline"></div>
                <div id="initial-dot" class="dot"></div>


                <div class="dot-section" v-for="(sem, i) in semesterArray" :id="'semester-' + i">

                    <div class="dot" :class="{ 'dot-disabled': this.isSemesterInFuture(i) }"></div>
                    <div class="dashed-line" :class="{ 'comment': this.isSemesterInFuture(i) }"></div>
                    <div class="semester-text" :class="{ 'comment': this.isSemesterInFuture(i) }">
                        <p :class="{ 'active-semester': this.isCurrentSemester(i), comment: this.isSemesterInFuture(i) }">
                            {{ this.isSemesterInFuture(i) ? this.semesterTimespanArray[i] : sem }}
                        </p>

                        <li v-show="this.isSemesterInPast(i)" class="semester-status checkmark"></li>

                        <div style="height: 100%; ">
                            <li v-show="this.isCurrentSemester(i)" class="semester-status in-progress"> </li>
                        </div>
                    </div>
                </div>
            </div>


            <div id="arrow"></div>

        </div>

    </div>
</template>

<style scoped>
#roadmap {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 140px;

}

.roadmap.subtitle {
    text-align: center;
}

#timeline-holder {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

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
    background: var(--accent-color);
    border: 4px solid var(--accent-color);

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


    width: 350px;

    margin-bottom: 40px;

    transform-origin: 10px 50%;
}

.semester-text {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 200px;
    text-align: center;

    position: relative;
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

@media only screen and (max-width: 600px) {
    .dot-section{
        margin-bottom: 25px;
    }
    #timeline-holder{
        padding-left: 20px;
    }
    #roadmap{
        gap: 0;
    }
    #roadmap-title{
        margin-top: auto;
    }
    
}

</style> 