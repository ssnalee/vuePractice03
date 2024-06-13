<template>
 <div class="header">
  <ul class="header-button-left">
    <li>Cancel</li>
  </ul>
  <ul class="header-button-right">
    <li @click="next">Next</li>
    <li v-if="step ==2" @click="publish">발행</li>
  </ul>
 </div>
 <!-- <p>{{$store.state.more}}</p>
 <button @click="$store.dispatch('getData')">ddd</button> -->
 <TheContainer :list="list" :step ="step" :url="url" @write="writePost = $event"/>
 <button v-if="step==0" @click="more();">더보기</button>
 <div calss="footer">
  <ul class="footer-button-plus">
    <input @change="upload" multiple accept="image/*" type="file" id="file" class="inputfile" />
    <label for="file" class="input-plus">+</label>
  </ul>
 </div>

 <!-- <div v-if="step == 0">내용0</div>
 <div v-if="step == 1">내용1</div>
 <div v-if="step == 2">내용2</div> -->
 <button @click ="step = 0">버튼0</button>
 <button @click ="step = 1">버튼1</button>
 <button @click ="step = 2">버튼2</button>
 <button @click ="step = 3">버튼3</button>
 <div style="margin-top:500px"></div>
</template>

<script>
import axios from 'axios'
import list from './PostList.js'
import TheContainer from './routes/TheContainer.vue'


export default {
  name: 'App',
  components: {
    TheContainer,
  },
  data(){
    return{
      list : list,
      num : 0,
      step :3,
      url : '',
      writePost : '',
      filterNm : '',
    }
  },
  methods : {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.num}.json`)
      .then((result)=>{
        this.list.push(result.data);
        this.num++;
      });
    },
    upload(e){
      let file = e.target.files;
      this.url = URL.createObjectURL(file[0])
      this.step = 1;

    },
    next(){
      this.step++;
      if(this.step == 4){
        this.step = 0;
      }
    },
    publish(){
      console.log(this.writePost)
      let mylist =  {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.url,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.writePost,
        filter: this.filterNm,
      };
      this.list.unshift(mylist); 
      this.step = 0 ;
    }
  },
  mounted(){
    this.emitter.on('filterNm',(a)=>{
      this.filterNm = a;
    })
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
