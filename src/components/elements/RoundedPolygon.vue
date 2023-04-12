<script>
export default {
    props: {
        sides: {
            type: Number,
            required: true,
            validator(value){
                return value>2;
            }
        },
        angle: {
            type: Number,
            default: 0,
            validator(value){
                return 0<=value<=360
            }
        }

    }
}
</script>
<template>
    <svg width="100" height="100" viewport="0 0 100 100">
        <path></path>
    </svg>
</template>

<style scoped></style>