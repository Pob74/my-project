<template>
    <div>
        <img alt="Vue logo" src="../assets/icon-128.png">
        <h1>Cities</h1>
    <button @click='onClick' type="button" class="btn btn-primary">Get Cities</button>
    <ul>
        <li :key='citi.id' v-for='citi in cities'><span class="citi-name"> {{citi.name}} </span>  population of:<span class="citi-population"> {{citi.population}}</span></li>
        
    </ul>
    </div>
</template>
<script>
export default {
    methods:{
        onClick(){
            fetch('https://avancera.app/cities/')
        .then((response) => response.json())
        .then((result) => {
            this.cities = result
        })
        }
    },
    data(){
        return {
            cities: null
        }
    },
}
</script>
<style scoped>
.citi-name {
    color: red;
    font-size: x-large;
}
.citi-population {
    color: blue;
    font-size: large;
}
</style>   
    
    
    

    




