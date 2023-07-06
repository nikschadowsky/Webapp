<script></script>

<template>
    <div id="timeline-holder">

        <div id="initial-dot" class="dot"></div>
        <div id="timeline-short"></div>

        <div id="dot1" class="dot"></div>
        <div id="timeline"></div>

        <div id="dot2" class="dot"></div>
        <div id="timeline"></div>

        <div id="dot3" class="dot"></div>
        <div id="timeline"></div>

        <div id="dot4" class="dot"></div>
        <div id="timeline"></div>

        <div id="dot5" class="dot"></div>
        <div id="timeline"></div>

        <div id="dot6" class="dot"></div>
        <div id="timeline"></div>

        <div id="dot7" class="dot"></div>

        <div id="timeline-long"></div>

        <div id="arrow"></div>

    </div>
</template>

<style scoped>
#timeline-holder {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    width: 9px;
    height: 9px;

    border: 4px solid var(--accent-color);
    border-radius: 100%;

}

#initial-dot {
    background: var(--comment-text-color-dark-bg);
    border: 2px solid var(--comment-text-color-dark-bg);


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
</style>