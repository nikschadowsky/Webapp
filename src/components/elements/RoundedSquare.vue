<script>
export default {
    props: {
        imageURL: {
            type: String,
            default: ""
        },
        objectID: String,
        objectClass: String,
    }
}
</script>
<template>
    <svg :class="objectClass" :id="objectID" width="200" height="200" viewBox="0 0 100 100">
        <defs>
            <path id="objPath"
                d="M20 0 L80 0 A 20 20 270 0 1 100 20 L100 80 A 20 20 0 0 1 80 100 L20 100 A 20 20 90 0 1 0 80 L 0 20 A 20 20 180 0 1 20 0z">
            </path>
            <clipPath id="cp" >
                <use href="#objPath"></use>
            </clipPath>
        </defs>
        <use href="#objPath" fill="#fff"/>
        <image v-if="imageURL.length > 0" x="0" y="0" width="100" height="100" :href="imageURL"
            preserveAspectRation="xMidYMid meet" clip-path="url(#cp)"></image>
    </svg>
</template>

<style scoped></style>