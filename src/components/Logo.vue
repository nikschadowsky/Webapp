<script>

export default {
    
    props: {
        size: {
            type: String,
            required: true
        }
    },


}

</script>

<template>
    <svg viewBox="0 0 700 700" :width=size :height=size  xmlns="http://www.w3.org/2000/svg">

        <g>
            <title>Layer 1</title>
            <ellipse stroke="#ffffff" stroke-width="0" ry="31" rx="31" id="svg_5" cy="479.49999" cx="228.4444"
                fill="#ffffff" />
            <ellipse stroke="#ffffff" stroke-width="0" ry="31" rx="31" id="svg_2" cy="219.49999" cx="228.4444"
                fill="#ffffff" />
            <ellipse stroke="#ffffff" stroke-width="0" ry="31" rx="31" id="svg_6" cy="219.49999" cx="456.4444"
                fill="#ffffff" />
            <ellipse stroke="#ffffff" stroke-width="0" ry="31" rx="31" id="svg_7" cy="479.99999" cx="456.4444"
                fill="#ffffff" />
            <line stroke="#ffffff" stroke-width="19" id="svg_8" y2="479.99999" x2="229.4444" y1="217.99999"
                x1="228.4444" fill="none" />
            <line stroke="#ffffff" stroke-width="19" id="svg_9" y2="479.99999" x2="456.4444" y1="219.99999"
                x1="228.4444" fill="none" />
            <line stroke="#ffffff" id="svg_10" y2="479.99999" x2="456.4444" y1="219.99999" x1="456.4444"
                stroke-width="19" fill="none" />
            <line stroke="#ffffff" id="svg_14" y2="350" x2="0" y1="0" x1="350" stroke-width="15" fill="none" />
            <line stroke="#ffffff" id="svg_15" y2="350" x2="0" y1="700" x1="350" stroke-width="16" fill="none" />
            <line stroke="#ffffff" id="svg_16" y2="350" x2="700" y1="700" x1="350" stroke-width="15" fill="none" />
            <line stroke="#ffffff" id="svg_17" y2="350" x2="700" y1="0" x1="350" stroke-width="15" fill="none" />
        </g>
    </svg>
</template>

<style>
</style>