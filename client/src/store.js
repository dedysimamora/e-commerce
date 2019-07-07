import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' 
import { resolve } from 'url';
import { rejects } from 'assert';

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
    },
    allProducts : [],
    cart : [],

  },
  mutations: {
    fetchUserProfile(state, gotData){
          state.userProfile.first_name = gotData.first_name
          state.userProfile.last_name = gotData.last_name
          state.userProfile.email = gotData.email
          state.userProfile.id = gotData.id
          state.userProfile.money = gotData.money
          state.userProfile.role = gotData.role
          state.userProfile.avatar = gotData.avatar
      },
      logout(state){
        state.userProfile.first_name =""
        state.userProfile.last_name = ""
        state.userProfile.email = ""
        state.userProfile.id = ""
        state.userProfile.money = ""
        state.userProfile.role = ""
        state.userProfile.avatar = ""
        localStorage.clear()
      },
      fetchAllProducts(state, gotAlProducts){
            state.allProducts = gotAlProducts
      },
      fetchUserCard(state, userCart){
        state.cart = userCart
      },
      addNewProduct(state, singleProd){
        state.allProducts.push(singleProd)
      }
  },
  actions: {
      getAllProducts(context){
        axios({
          method: 'get',
          url: 'http://34.87.113.79:3000/product',
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
        axios({
          method : 'get',
          url: `http://34.87.113.79:3000/transaction/${state.userProfile.id}`,
          responseType: 'json',
        })
          .then(({data}) =>{
              commit('fetchUserCard', data)
              
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      login(context, payload){
        return new Promise((resolve,rejects)=>{
          axios({
            method: 'post',
            url: 'http://34.87.113.79:3000/user/login',
            responseType: 'json',
            data : {
              email : payload.email,
              password : payload.password
            },
            
          })
          .then(({data}) => {
            context.commit('fetchUserProfile', data)
            context.dispatch("getUserCart")
            localStorage.setItem('token', data.token)
            resolve()
            })
            .catch((err)=>{
              console.log(err)
              rejects(err)
            })
        })
        
      },
      getUserData(context, payload){
        axios({
          method: 'get',
          url: 'http://34.87.113.79:3000/user/gotUserData',
          responseType: 'json',
         headers : {
           token : payload
         }
          
        })
        .then(({data}) => {
          context.commit('fetchUserProfile', data)
          context.dispatch("getUserCart")
          })
          .catch((err)=>{
            console.log(err)
          })
      },

      addUserCart(context, payload){
        let {state,dispatch} = context
        axios({
          method : 'post',
          url: 'http://34.87.113.79:3000/transaction/add',
          responseType: 'json',
          data : {
            productId : payload
          },
          headers : {
            token : localStorage.getItem('token')
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
        let {state,dispatch} = context
        axios({
          method : 'delete',
          url: `http://34.87.113.79:3000/transaction/${payload}`,
          responseType: 'json',
          headers : {
            token : localStorage.getItem('token')
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
        let {state,dispatch} = context
        axios({
          method : 'post',
          url: `http://34.87.113.79:3000/transaction/checkout/${state.userProfile.id}`,
          responseType: 'json',
          headers : {
            token : localStorage.getItem('token')
          }
        })
          .then(() =>{
              dispatch('getUserCart')
          })
          .catch((err)=>{
            console.log(err)
          })
      },
      googlelogin(context, payload){
        axios({
          method: 'post',
          url: 'http://34.87.113.79:3000/user/googlelogin',
          responseType: 'json',
          data : {
            token : payload
          },
          
        })
        .then( ({data}) => {
          })
          .catch((err)=>{
            console.log(err);
              this.errMesssage = err.response.data.message
              
          })
      }

  } 
})
