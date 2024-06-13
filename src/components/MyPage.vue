<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="?" />
    <div class="post-header" v-for="(a,i) in follower" :key="i">
      <div class="profile" :style="`background-image:url(${a.image})`"></div>
      <span class="profile-name">{{a.name}}</span>
    </div>
  </div>
</template>
<script>
import {onMounted, ref} from 'vue';
import axios from 'axios';
export default {
    name : 'myPage',
    setup(){
        let follower = ref([]);
        
        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
            follower.value = a.data;
            console.log(follower);
            });
         
        });
       
        return { follower }
    },
}
</script>
<style>
.post-header {
  height: 30px;
  padding: 10px;
}
.profile {
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
</style>