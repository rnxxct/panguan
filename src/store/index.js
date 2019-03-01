import  Vue from  'vue'
import  Vuex from  'vuex'

Vue.use(Vuex)

const state={
  count:1,
  token:"",
  loading:false,
}

export default  new Vuex.Store({
  state,
  mutations:{
    set_token(state,token){
      state.token = token
      sessionStorage.token=token
    },
    del_token(state){
      state.token=''
      sessionStorage.removeItem('token')
    }
  }
})
