<template>
    <footer>
        <p>©︎Copyright 2019 {{ title }}</p>
    </footer>
</template>
<script>
export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
footer{
    background: grey;
    padding: 6px;
    z-index: 9999;
}
p{
        color: white;
        text-align: center;
}
</style>