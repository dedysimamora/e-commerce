<template>
    <v-app id="motherofmother">
        <v-container style="margin-top:15%;">
            <v-layout row wrap>
              <v-flex xs4 md8 id="landingText">
                <p class="text-xs-left" > 
                 <span class="redSendiri"> &nbsp;MAN</span> with  one <span class="redSendiri">WATCH</span> knows  what time it is, a <span class="redSendiri"> MAN </span> with two Watches is never <span class="redSendiri">QUITE </span> sure
                </p>
               
              </v-flex>
            </v-layout>
            <v-layout  row wrap style="margin-top:-8px;">
              <v-flex xs1 md2>
                <loginForm :warnaprops="'white'" :bgcolorprops="'red'" ></loginForm>
              </v-flex>
              <v-flex xs1 md2 >
                <registerForm/>
              </v-flex>
              <v-flex xs1 md2>
                <v-btn router-link to='/products' dark color="red"> SHOP </v-btn>
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
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    font-weight: 900;
    color: white;
  }
  .redSendiri{
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    font-weight: 900;
    margin-bottom: -30px;
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

