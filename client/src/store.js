import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile : {
          first_name : "",
          last_name : "",
          email : "",
          id : "",
          money : "",
          role : "",
          avatar : "",
          token : ""
    },
    allProducts : [],
    cart : [],

  },
  mutations: {
    fetchUserProfile(state, gotData){
          state.userProfile.token = gotData.token
          state.userProfile.first_name = gotData.first_name
          state.userProfile.last_name = gotData.last_name
          state.userProfile.email = gotData.email
          state.userProfile.id = gotData.id
          state.userProfile.money = gotData.money
          state.userProfile.role = gotData.role
          state.userProfile.avatar = gotData.avatar
      },
      logout(state){
        state.userProfile.token = ""
        state.userProfile.first_name =""
        state.userProfile.last_name = ""
        state.userProfile.email = ""
        state.userProfile.id = ""
        state.userProfile.money = ""
        state.userProfile.role = ""
        state.userProfile.avatar = ""
      },
      fetchAllProducts(state, gotAlProducts){
            state.allProducts = gotAlProducts
      },
      fetchUserCard(state, userCart){
        state.cart = userCart
      }
  },
  actions: {
      getAllProducts(context){
        axios({
          method: 'get',
          url: 'http://localhost:3000/product',
          responseType: 'json',
          
        })
            .then( ({data}) => {
              context.commit('fetchAllProducts', data)
            })
            .catch((err)=>{
              console.log(err);
            })
      },
      getUserCart(context){
        let {commit, state} = context
        console.log(state.userProfile.id, "userid pas find card")
        console.log(`http://localhost:3000/transaction/${state.userProfile.id}`, "link get find transsacion");
        
        
        axios({
          method : 'get',
          url: `http://localhost:3000/transaction/${state.userProfile.id}`,
          responseType: 'json',
        })
          .then(({data}) =>{
            console.log(data, "balikan data cart")
              commit('fetchUserCard', data)
              
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      addUserCart(context, payload){
        let {state,dispatch} = context
            
            console.log(state.userProfile.token, "Tokennnn pas mau add to cart");
        
        axios({
          method : 'post',
          url: 'http://localhost:3000/transaction/add',
          responseType: 'json',
          data : {
            productId : payload
          },
          headers : {
            token : state.userProfile.token
          }
        })
          .then(() =>{
              dispatch('getUserCart')
              
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      deleteUserCart(context, payload){
        console.log('Masuk delete Card');
        
        let {state,dispatch} = context
        axios({
          method : 'delete',
          url: `http://localhost:3000/transaction/${payload}`,
          responseType: 'json',
          headers : {
            token : state.userProfile.token
          }
        })
          .then(() =>{
              dispatch('getUserCart')
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      checkOutCart(context){
        console.log('Masuk checkout Card');
        
        let {state,dispatch} = context
        axios({
          method : 'post',
          url: `http://localhost:3000/transaction/checkout/${state.userProfile.id}`,
          responseType: 'json',
          headers : {
            token : state.userProfile.token
          }
        })
          .then(() =>{
              dispatch('getUserCart')
          })
          .catch((err)=>{
            console.log(err)
          })
      }

  } 
})
