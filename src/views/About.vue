<template>
  <div>
    <img alt="Vue logo" src="../assets/icon-128.png">
    <form>
  <div class="form-group">
    <label for="formGroupExampleInput">Enter your name</label>
    <input v-model="message" type="text" class="form-control" id="formGroupExampleInput" placeholder="First and last name">
     <p v-if="message == null">Nothing is writen</p>
     <p v-else>Your name is {{message}}</p>
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">E-mail adress</label>
    <input v-model="message2" type="text" class="form-control" id="formGroupExampleInput2" placeholder="E-mail">
    <p v-if="message2 == null">Nothing is writen</p>
    <p v-else>Your e-mail is {{message2}}</p>
    
  </div>
</form>
  <h2>What is your favorite city in Sweden?</h2>
  <label>
    <input type="radio" value="Göteborg" v-model="favCity" />
    Göteborg
  </label>
  <label>
    <input type="radio" value="Stockholm" v-model="favCity" />
    Stockholm
  </label>
  <label>
    <input type="radio" value="Malmö" v-model="favCity" />
    Malmö
  </label>
  <h3>My favorite city in Sweden is {{favCity}} .</h3>
  <h2>Wy did you come to Sweden?</h2>
  <label>
    <input type="radio" value="Work" v-model="whyVisit" />
    Work
  </label>
  <label>
    <input type="radio" value="Holliday" v-model="whyVisit" />
    Holliday
  </label>
  <label>
    <input type="radio" value="Other" v-model="whyVisit" />
    Other
  </label>
  <h3>My favorite city in Sweden is {{whyVisit}} .</h3>
  <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Submit</b-button>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      message: this.userame,
      message2: this.userEmail,
      favCity: "_______",
      whyVisit: "________"
  };
},
props: ['userName', 'userEmail']
}
</script>
 <style>
 h2 {
   color: blue;
   margin-top: 30px;
 }
 .form-group {
   margin-left: 10vh;
   margin-right: 10vh;
 }
 p {
   color: crimson;
 }
  


     
  

   

 
 
 
 </style> 