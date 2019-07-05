<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
         <v-btn
          :style="{ color: warnaprops, 'background-color': bgcolorprops }"
          dark
          v-on="on"
        >
          Login
        </v-btn>

        

       
          <!-- <a class="clink"  v-on="on" >Login</a>  -->
        <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
      </template>
      <v-card>
        <v-card-title >
          <span class="headline text-xs-center">login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field  v-model="email" label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          <small class="red--text">{{errMesssage}}</small>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-layout column justify-center>
          <v-flex  xs12>
          <v-btn block @click="login()" small color="black" dark>Login</v-btn>
          </v-flex>
          <f-fxle xs12 class="mt-1">
            <v-btn block @click="dialog = false" small color="black" dark>Cancel</v-btn>
          </f-fxle>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>

  export default {
    props:['warnaprops', 'bgcolorprops'],
    data: () => ({
      dialog: false,
      errMesssage : "",
      email : "",
      password : ""
    }),
    methods : {
      googleLogin(){
        this.$gAuth
        .signIn()
        .then(googleUser => {
          //on success
          // console.log("authCode", googleUser.Zi.id_token);
          this.$store.dispatch('googlelogin', googleUser.Zi.id_token)
        })
        .catch(error => {
          //on fail do something
        });
      },
      login(){
        this.axios({
        method: 'post',
        url: '/user/login',
        responseType: 'json',
        data : {
          email : this.email,
          password : this.password
        },
        
      })
      .then( ({data}) => {
        // console.log(data);
        this.$store.commit('fetchUserProfile', data)
        this.$store.dispatch("getUserCart")
        this.dialog = false
        this.$router.push('/products')
        })
        .catch((err)=>{
          console.log(err);
          
            // console.log(err.response,"<<<<<<<<<<<<<");
            this.errMesssage = err.response.data.message
            
        })

      }
    }
  }
  
</script>


<style scoped>
  
</style>

