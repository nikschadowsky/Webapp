<script>

export default {
    data() {
        return {

        }
    }, props: {

        accent: {

            Type: String,
            required: true,
        },
        secondary: {

            Type: String,
            required: true
        },

    }, methods: {

        visibilityChanged(isVisible, entry) {

            
            if (isVisible) {
                document.documentElement.style.setProperty("--accent-color", this.accent);
                document.documentElement.style.setProperty("--secondary-color", this.secondary);
            }
        }

    }
}

</script>

<template>
    <div class="container flex">
        <div class="content">
            <div class="spacer" v-observe-visibility="visibilityChanged"></div>
            <slot></slot>
            <div class="spacer" v-observe-visibility="visibilityChanged"></div>

        </div>


    </div>
</template>

<style >
.container {

    height: calc(100vh - var(--header-height));
    height: 100vh;
    width: 100%;

    margin-bottom: 200px;

    align-items: center;
    justify-content: center;

}

.content {
    text-align: left;
    max-width: var(--max-content-width);
    width: 100%;
}

.spacer {
    height: 1px;
}
</style>