<template>
  <div class="step0" v-if="step == 0">
    <ThePost v-for="(post,i) in list" :key="post"  :index=i :content="post"/>
  </div>
  <!-- 필터선택페이지 -->
  <div class="step1" v-if="step == 1">
    <div :class="`${filterNm} upload-image`" :style="{'backgroundImage' : `url(${url})`}"></div>
    <div class="filters">
      <FilterBox :url = url v-for="a in filterNames" :key="a" :filter = a>
        <!-- <template v-slot="filterb">{{filterb.msg}}</template> -->
      </FilterBox>
    </div>
  </div>
  <!-- 글작성페이지 -->
  <div class="step2" v-if="step == 2">
    <div :class="`${filterNm} upload-image`" :style="{'backgroundImage' : `url(${url})`}" ></div>
    <div class="write">
      <textarea class="write-box" @input="$emit('write',$event.target.value)">write!</textarea>
    </div>
  </div>
  <div v-if="step == 3">
    <MyPage/>
  </div>


</template>
<script>
import ThePost from '../components/ThePost.vue';
import FilterBox from '../components/FilterBox.vue';
import MyPage from '../components/MyPage.vue';
export default {
 
    name: 'TheContainer',
    components: {
       ThePost,
       FilterBox,
       MyPage,
    },
    data(){
        return{
            filterNames : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
            filterNm : '',
        }
    },
    props : {
      list : Array,
      step : Number,
      url : String,
    },
    methods : {

    },
    mounted(){
        this.emitter.on('filterNm',(a)=>{
            this.filterNm = a;
        })
    }
    
}
</script>
<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}

</style>