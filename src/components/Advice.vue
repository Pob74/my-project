<template>
    <div>
    <h2>Here is your daily advice</h2>
    <h3>{{advice}}</h3>
    </div>
</template>
<script>
export default {
    created() {
        fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((result) => {
            this.advice = result.slip.advice
            console.log(result)
        })
        },
    data(){
        return {
            advice: null
        }
    },
}
</script>
<style scoped>
h3 {
        border:1px solid rgb(41, 37, 37);
        background-color: gainsboro;
        padding: 5vh 5vh 5vh 5vh;
}
</style>
        
       


            

    

