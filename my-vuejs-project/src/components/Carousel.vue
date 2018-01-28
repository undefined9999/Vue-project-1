<template>
<main>

<h1>你好</h1>
 
</main>
</template>

<script>
    import List_page1 from './List_page1'
     
	import axios from 'axios';

  
export default {
  name: 'commom-carousel',
  data () {
    return {
      		 
    }
  },
   components: {
   
  },
    mounted () {
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
       @import '../assets/css/swiper.min.css';
       	main{display: flex;flex: 1;background:#eee;overflow-y: auto;flex-direction: column;}
 .Carousel  a{display:flex;width:100%;height:100%;} 
  .Carousel  a img{height:1.8rem;}
</style>
