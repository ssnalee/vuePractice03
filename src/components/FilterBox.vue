<template>
  <div @click="fire" :class="`${filter} filter-item`" :style="{'backgroundImage' : `url(${url})`}">
    <!-- <slot name="filterBox" :msg="filter"></slot>   -->
    <span>{{filter}}</span>
  </div>  
</template>
<script>
export default {
    name : 'filterBox',
    methods : {
        fire(){
            this.emitter.emit('filterNm',this.filter);
        }
    },
    props : {
        url : String,
        filter : String,
    },
    data(){
        return{
            
        }
    }
}
</script>
<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
</style>