<template>
<div>



    <v-app  v-if="$mq === 'mobile'" id="motherofmother">
        <v-container fluid style="margin-top:10px;">
          <v-layout column justify-start>
              <v-flex xs12 md12>
                <p class="text-xs-left landingTextHp"> 
                 <span class="redSendiriHp">MAN</span> with  one   
                </p>
                <p class="text-xs-left landingTextHp">
                  <span class="redSendiriHp">WATCH</span> knows  what time it is
                </p>
                <p class="text-xs-left landingTextHp">
                 <span class="redSendiriHp">  MAN </span> with two Watches is never 
                </p>
                <p class="text-xs-left landingTextHp">
                    <span class="redSendiriHp">QUITE </span> sure
                </p>
              </v-flex>
          </v-layout>
           <v-layout row wrap class="mt-3">

            <v-flex xs4 md2>
                <loginForm :warnaprops="'white'" :bgcolorprops="'red'" ></loginForm>
            </v-flex>
            <v-flex xs4 md2>
               <registerForm :warnaprops="'white'" :bgcolorprops="'red'"></registerForm>
            </v-flex>
            <v-flex xs4 md2>
              <v-btn small router-link to='/products' dark color="red"> SHOP </v-btn>
            </v-flex>

          </v-layout>
        </v-container>
    </v-app>

  <v-app  v-if="$mq === 'laptop'" id="motherofmotherlalptop">
        <v-container fluid style="margin-top:12%;">
          <v-layout column justify-start>
              <v-flex xs12 md12>
                <p class="text-xs-left landingTextLaptop"> 
                 <span class="redSendiriLaptop">MAN</span> with  one   
                </p>
                <p class="text-xs-left landingTextLaptop">
                  <span class="redSendiriLaptop">WATCH</span> knows  what time it is
                </p>
                <p class="text-xs-left landingTextLaptop">
                 <span class="redSendiriLaptop">  MAN </span> with two Watches is never 
                </p>
                <p class="text-xs-left landingTextLaptop">
                    <span class="redSendiriLaptop">QUITE </span> sure
                </p>
              </v-flex>
               
          </v-layout>

          <v-layout row wrap class="mt-3">

            <v-flex xs2 md2>
                <loginForm :warnaprops="'white'" :bgcolorprops="'red'" ></loginForm>
            </v-flex>
            <v-flex xs2 md2>
               <registerForm :warnaprops="'white'" :bgcolorprops="'red'"></registerForm>
            </v-flex>
            <v-flex xs2 md2>
              <v-btn small router-link to='/products' dark color="red"> SHOP </v-btn>
            </v-flex>

          </v-layout>
        </v-container>
    </v-app>

</div>
</template>

<script>
import loginForm from '../components/loginForm'
import registerForm from '../components/registerForm'
  export default {
    data(){
      return {
        dialog: false,
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
    background:linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url('../assets/landingSmall.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    }

    #motherofmotherlalptop{
    background:linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url('../assets/landingBig.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
    }


  
  .landingTextLaptop {
    font-family: 'Roboto', sans-serif;
    font-size:35px;
    font-weight: 900;
    color: white;
    margin-bottom: -20px;
  }
  .redSendiriLaptop{
    font-family: 'Roboto', sans-serif;
    font-size: 35px;
    font-weight: 900;
    margin-bottom: -30px;
    color: rgb(255, 38, 38);
    
  }

  .landingTextHp {
    font-family: 'Roboto', sans-serif;
    font-size:23px;
    font-weight: 900;
    color: white;
    margin-bottom: -12px;
  }
  .redSendiriHp{
    font-family: 'Roboto', sans-serif;
    font-size: 23px;
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

