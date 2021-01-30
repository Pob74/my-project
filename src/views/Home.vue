<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon-128.png">
    <Message :msg="message"/>
    <Advice/>
  </div>
</template>
<script>
import Message from '@/components/Message.vue'
import Advice from '@/components/Advice.vue'
export default {
  data(){
    return {
      message: "Welcome to my site it is very basic but I'm just learning, just want to get all the things we need in the project working"
    }
  },
  name: 'Home',
  components: {
    Message,
    Advice
  }
}
</script>




