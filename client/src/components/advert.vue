<template>
  <v-carousel height="350" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>



<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://i.imgur.com/084TEp4.png'
          },
          {
            src: 'https://i.imgur.com/I2tJ1lI.png'
          },
          {
            src: 'https://i.imgur.com/qvYLPZT.png'
          },
          {
            src: 'https://i.imgur.com/XUXhppL.png'
          },
          {
            src: 'https://i.imgur.com/1fz4Kz0.png'
          }
        ]
      }
    }
  }
</script>