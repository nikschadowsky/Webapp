<script >

export default {
    data() {
        return {

        }
    }
}

</script>

<template>
    <div class="container">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style >
.container {

    height: calc(100vh - var(--header-height));
    height: 100vh;
    width: 100%;


    display: flex;
    align-items: center;
    justify-content: center;

}

.content {
    text-align: left;
    max-width: var(--max-content-width);
    width: 100%;
}
</style>