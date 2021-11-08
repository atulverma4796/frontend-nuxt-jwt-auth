<template>
  <div class="container-fluid">
    <b-navbar class="header">
    <h4 >Trending Movies</h4>
    </b-navbar>
    <div class="container ">
    <div class="row">
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12  p-2" v-for="movie in moviesList" :key="movie.id">
        <div class="border content" @click="showMovie(movie.id)">
       <div> <img :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`" :alt="`${movie.title}`"/>
       </div>
       <div class="d-flex d-start mx-2 mt-2">
       <p class="movie-title"> {{movie.title}}</p>
       </div>
         <div class="d-flex d-start mx-2 ">
       <p class="movie-release"> {{movie.release_date.substring(0,4)}}</p>
       </div>
      </div>
    </div>
    </div>
    <button class="next-button" @click="changePage(1)">Next</button>
      <button class="back-button" v-if="pageNo>1" @click="changePage(-1)">Previous</button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      moviesList:[],
      pageNo:1
    }
  },
 async created(){
    try {
      let response = await this.$axios.get("/movies/1");
     let {data}= response;
     let {results}=data;
     this.moviesList = results;
    } catch (error) { 
      console.log(error);
    } 
  },
  methods:{
    showMovie(id){
      this.$router.push(`/movie/${id}`)
    },
   async changePage(page){
     try {
       this.pageNo = this.pageNo+page;
     let response = await this.$axios.get(`/movies/${this.pageNo}`);
     let {data}= response;
     let {results}=data;
     this.moviesList = results;
     console.log(this.pageNo,this.moviesList)
     } catch (error) {
       
     }
   }
  }
}
</script>
<style scoped>
.container-fluid{
  background: black;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100vw;
  height: 100vh;
  color: white;
  /* width: fixed; */
  overflow-x: hidden;
  overflow-y: scroll;
}
h4{
  font-family: cursive;
  font-weight: bolder;
  color: brown;
}
.content{
  cursor: pointer;
}
.movie-title{
  font-family: 'Courier New', Courier, monospace;
  font-size: .90rem;
  font-weight: bolder;
  color:yellow;
}
img{
  width: 100%;
}
.movie-release{
  font-family: 'Courier New', Courier, monospace;
  font-size: .90rem;
  font-weight: bolder;
  color: lightgreen;
}
.next-button{
  position: fixed;
  top: 50%;
  right:4%
}
.back-button{
  position: fixed;
  top: 50%;
  left:4%
}
</style>