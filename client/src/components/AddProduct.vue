<template>
  <v-layout row justify-center>

      
      <v-card>
        <v-card-title>
          <span class="headline">Add New Product</span>
        </v-card-title>
      
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="name" label="Product Name" persistent-hint required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="price" type="number" label="Price" required></v-text-field>
              </v-flex>
             
              
                <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                  <img :src="imageUrl" height="150" v-if="imageUrl">
                  <v-text-field
                    label="Product Picture"
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
                <v-textarea v-model="description"
          name="input-7-1"
          label="Product Description"
          value=""
        ></v-textarea>
                  </v-flex>
                 <v-flex xs12>
                 <v-radio-group v-model="type" row>
                    <v-radio label="Casual"    value="casual"></v-radio>
                    <v-radio label="Smartwatch"    value="smartwatch"></v-radio>
                    <v-radio label="Sport"    value="sport"></v-radio>
                    <v-radio label="Formal"    value="formal"></v-radio>
                  </v-radio-group>
              </v-flex>

              
              <v-flex xs12>
                <v-text-field v-model="qty" label="Stock*" type="number" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small class="red--text ml-3">{{errMesssage}}</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-flex xs12>
          <v-btn block @click="submit()"  color="black" dark>Submit New Product</v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
  </v-layout>
</template>




<script>
import axios from 'axios';
import GoogleLogin from 'vue-google-login'

export default {
  data() {
    return {
        
        imageName: '',
        imageUrl: '',
        imageFile: '',
        name: '',
        price: '',
        type: '',
        qty: '',
        description : '',
        proPic : null,
        errMesssage : ""
    }
  },
  methods: {

    submit() {
     let formData = new FormData();
      formData.append('name', this.name)
      formData.append('price', this.price)
      formData.append('type', this.type)
      formData.append('description', this.description)
      formData.append('photo', this.proPic)
      formData.append('qty', this.qty)
    this.axios({
        method: 'post',
        url: '/product/add',
        responseType: 'json',
        data : formData,
        
      })
      .then( ({data}) => {
        this.$store.commit('addNewProduct', data)
        this.$swal('Success Add New Product')
        this.$router.push('/admin')
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
      this.proPic = e.target.files[0]
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


