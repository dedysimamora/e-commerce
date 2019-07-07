<template>
  <div id="e3" style="max-width: 700px; margin: auto;" class="grey lighten-3"
  >
    <v-toolbar color="black" dark>
      <v-toolbar-title>Details</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
             <v-img :src="product.photo"></v-img>
            </v-card>
          </v-flex>
        </v-layout>


        <v-layout row wrap>
          <v-flex xs12>
            <v-card  class="black--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{product.name}}</div>
                  <span class="grey--text">Rp {{formatNumber(product.price)}}</span><br>
                  <span>{{product.description}}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn @click="addToCart(product)" block dark color="black">Add To Cart</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
    data(){
        return {

            product : {}
        }
    },
    methods:{
        formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
         },
         addToCart(product){


           if(!localStorage.getItem('token')){
            this.$swal('you must login for add item to cart')
        } else {
            this.$swal({
          title: `Add ${product.name} to cart?`,
          icon: product.photo,
          buttons: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal(`${product.name} Success added to cart`, {
                icon: "success",
                
              });
             this.$store.dispatch('addUserCart', product._id)
            }
          })
        }
         }

    },
    created () {
        let allP = this.$store.state.allProducts
        for (let i = 0; i < allP.length; i++) {
            
            if(allP[i]._id == this.$route.params.productId){
                this.product = allP[i]
            }
            
        }
    }
}
</script>
