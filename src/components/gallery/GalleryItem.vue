<script>
export default {
    props: {
        source: {
            type: String, required: true
        }
    },
    data() {
        return {

        }
    },

}

</script>

<template>
    <div id="btn-wrapper">
        <div class="button">left</div>
        <img :src="source" class="image">
        <div class="button">right</div>
    </div> 
</template>

<style>
.image {
max-width: 80%;

}

.button:last-child {
    max-width: 50px;
    height: 100%;
}

#btn-wrapper{
    display: flex;
    max-width: var(--max-content-width);
}



</style>