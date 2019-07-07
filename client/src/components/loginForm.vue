<template>
  <v-layout row >
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
         <v-btn small
          :style="{ color: warnaprops, 'background-color': bgcolorprops }"
          dark
          v-on="on"
        >
          Login
        </v-btn>
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
          <v-flex xs12 class="mt-1">
            <v-btn block @click="dialog = false" small color="black" dark>Cancel</v-btn>
          </v-flex>
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
       this.$store.dispatch('login',{
         email : this.email,
         password : this.password
       })
       .then(()=>{
         this.dialog = false
          this.$router.push('/products')
       })
       .catch((gotErrorData)=>{
         if(gotErrorData.response){
           this.errMesssage = gotErrorData.response.data.message
         } else {
           console.log(gotErrorData);
           
           this.errMesssage = "Opps, Something wrong in the server, sorry!"
         }
       })

      }
    }
  }
  
</script>


<style scoped>
  
</style>

