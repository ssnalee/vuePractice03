import axios from 'axios';
import {createStore} from 'vuex';
const store = createStore({
    state(){
        return{
            name : 'kim',
            age : 20,
            likes : [1,1,1,1,1,1,1,],
            isLikes : false, 
            more : {},
        }
    },
    mutations :{
      
        addLikes(state,value){
            console.log(value);
            if(state.isLikes[value]){
                state.likes[value]--;
                // state.isLikes = false;
            }else{
                state.likes[value]++;
                // state.isLikes = true;
            }
        },
        setMore(state,data){
            state.more = data
        }
  
    },
    actions : {
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a)=>{
                context.commit('setMore',a.data);
            })
        }
    }
});

export default store; 