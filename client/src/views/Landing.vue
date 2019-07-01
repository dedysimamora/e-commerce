<template>
    <v-app id="motherofmother">
        <v-container style="margin-top:15%;">
            <v-layout row wrap>
              <v-flex xs4 md4 id="landingText">
                <p class="text-xs-center" > 
                 <span class="redSendiri"> &nbsp;Man</span> with <br>  one <span class="redSendiri">Watch</span> knows what time it is, a man <br> with two Watches is never <span class="redSendiri">quite </span> sure
                </p>
               
              </v-flex>
            </v-layout>
            <v-layout  row wrap style="margin-top:-8px;">
              <v-flex xs1 md1 style="margin-left:5%;">
                <loginForm ></loginForm>
              </v-flex>
              <v-flex xs1 md1 style="margin-left:-2%">
                <registerForm/>
              </v-flex>
              <v-flex xs1 md1>
                <a class="clink" router-link to="/shop"> Shop</a>
              </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
import loginForm from '../components/loginForm'
import registerForm from '../components/registerForm'
  export default {
    data(){
      return {
        dialog : false
      }
    },
    components: {
      loginForm,
      registerForm
    }
  }
</script>


<style scoped>
  #motherofmother{
    background:linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url('../assets/landingBig.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
  }
  #landingText {
    color: white;
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
  }
  .redSendiri{
    font-family: 'Satisfy', cursive;
    font-size: 20px;
    margin-bottom: -10px;
    color: rgb(255, 38, 38);
    
  }
  g-signin-button {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
  

</style>

