<template>
  <v-hover>
    <v-card  slot-scope="{ hover }" class="mx-auto" color="white" max-width="300">
      <v-img @click="moveToDetail(pd._id)" :aspect-ratio="12/9" :src="pd.photo">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal headline text-md-center  white--text"
            style="height: 100%;"
          ><h6>Rp {{formatNumber(pd.price)}}</h6></div>
        </v-expand-transition>
      </v-img>
      <v-card-text class="pt-4" style="position: relative;">
        <v-btn z-index="0" @click="addToCart(pd)" absolute color="black" class="white--text" fab small right top>
          <v-icon>shopping_cart</v-icon>
        </v-btn>
        <h5 class="font-weight-bold black--text  mb-1">{{pd.name}}</h5>
        <h6 class="font-weight-light black--text ">{{pd.category}},  stock :{{pd.qty}}</h6>

      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
    props:['pd'],
    data(){
      return {
        price : null
      }
    },
    methods : {
      addToCart(products){
        if(!localStorage.getItem('token')){
            this.$swal('you must login for add item to cart')
        } else {
            this.$swal({
          title: `Add ${products.name} to cart?`,
          icon: products.photo,
          buttons: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal(`${products.name} Success added to cart`, {
                icon: "success",
                
              });
              this.$store.dispatch('addUserCart', products._id)
            }
          })
        }
        
      },
       formatNumber(num) {
          return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        },
      moveToDetail(prodName){
          this.$router.push(`/products/${prodName}`)
      }
    }
}
</script>


<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>