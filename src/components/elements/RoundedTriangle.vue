<script>
export default {
    props: {
        objectID: String,
        objectClass: String
    }
}
</script>
<template>
    <svg fill="#000000" width="120" height="120" viewport="0 0 100 100">
        <path id="path"
             d="M20 0 h60
              A 20 20 0 0 1 97.321 30
              l-30 51.961
              a 20 20 120 0 1 -34.642 0
              L 2.679 30
              A 20 20 240 0 1 20 0">
         </path>
    </svg>
</template>

<style scoped>
#path{
    translate: 10px 17px;
    
}

svg{
    transform-origin: 50% calc(33% + 16px);
}
</style>