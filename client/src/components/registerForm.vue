<template>
  <v-layout row>
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
       <v-btn small
          :style="{ color: warnaprops, 'background-color': bgcolorprops }"
          dark
          v-on="on"
        >
          Register
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Register</span>
        </v-card-title>
      
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md6>
                <v-text-field v-model="first_name" label="First name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-text-field v-model="last_name" label="Last name*" persistent-hint required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="email" label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="phoneNumber" label="Phone Number*" required></v-text-field>
              </v-flex>

              
                <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                  <img :src="imageUrl" height="150" v-if="imageUrl">
                  <v-text-field
                    label="Select Image"
                    @click="pickFile"
                    v-model="imageName"
                    prepend-icon="attach_file"
                  ></v-text-field>
                  <input
                    type="file"
                    style="display: none"
                    ref="image"
                    accept="image/*"
                    @change="onFilePicked"
                  >
                </v-flex>
              
              <v-flex xs12>
                <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-textarea v-model="address" name="input-7-1" label="Addres"></v-textarea>
            </v-layout>
          </v-container>
          <small class="red--text ml-3">{{errMesssage}}</small>
        </v-card-text>
        <v-card-actions>
          <v-layout column justif-center>

          
          <v-flex xs12>
          <v-btn block @click="register()" small color="black" dark>register</v-btn>
          </v-flex>
          <v-flex xs12 class="mt-1">
            <v-btn block @click="dialog = false" small color="black" dark>Cancel</v-btn>
          </v-flex>
          </v-layout>
          <!-- <v-flex xs12>
              <p>Or</p>
          </v-flex>
          <v-flex xs12>
            <GoogleLogin type="button" class="btn btn-primary mt-2"  :onSuccess="onSuccess" :onFailure="onFailure"> <i class="fab fa-google mr-2"></i> Google SignIn</GoogleLogin>
          </v-flex> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import axios from 'axios';
import GoogleLogin from 'vue-google-login'

export default {
  props:['warnaprops', 'bgcolorprops'],
  data() {
    return {
        dialog: false,
        imageName: '',
        imageUrl: '',
        imageFile: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        avatar : '',
        phoneNumber : '',
        address : '',
        avatar : null,
        errMesssage : ""
    }
  },
  components : {
     GoogleLogin,
  },
  methods: {
    onSuccess(googleUser){
            let id_token = googleUser.getAuthResponse().id_token
           this.axios({
                method: 'post',
                url: '/user/googlelogin',
                responseType: 'json',
                data: {
                    token : id_token
                }
              })
                .then( ({data}) => {
                    this.activePage = 'userLogin'
                    this.activePageInside = 'category'
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('userid', data.id)
                    this.checkLogin()
                    this.getArticle()
                    
                this.article = data
                })
                .catch((err)=>{
                    swal(`${err.response.data.message}`)
                })
        },
        onFailure(err){
            console.log(err)
        },
    register() {
     let formData = new FormData();
     formData.append('first_name', this.first_name)
      formData.append('last_name', this.last_name)
      formData.append('email', this.email)
      formData.append('password', this.password)
      formData.append('avatar', this.avatar)
      formData.append('phoneNumber', this.phoneNumber)
      formData.append('address', this.address)
    
    
    this.axios({
        method: 'post',
        url: '/user/register',
        responseType: 'json',
        data : formData,
        
      })
      .then( ({data}) => {
        this.$store.commit('fetchUserProfile', data)
        this.dialog = false
        this.$router.push('/products')
        })
        .catch( err =>{
          if(err.response.data.message === "Cannot read property 'cloudStoragePublicUrl' of undefined"){
                this.errMesssage = "You Need Upload Photo For Registration"
          } else {
            this.errMesssage = err.response.data.message;

          }

        })  
    },

    pickFile() {
      this.$refs.image.click();
    },

    onFilePicked(e) {

      this.avatar = e.target.files[0]
      console.log(this.avatar, "AAAAAAAAAAAAAAAAAAA");
      
      const files = e.target.files
			if(files[0] !== undefined) {
				this.imageName = files[0].name
				if(this.imageName.lastIndexOf('.') <= 0) {
					return
				}
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
					this.imageUrl = fr.result
					this.imageFile = files[0] // this is an image file that can be sent to server...
				})
			} else {
				this.imageName = ''
				this.imageFile = ''
				this.imageUrl = ''
			}
		}
    }

  
};
</script>

<style scoped>
    
</style>


