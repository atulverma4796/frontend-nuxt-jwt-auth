<template>
  <div class="container-fluid">
    <div class="container">
      {{$route.params.id}}
      <div class="border border-success rounded mt-4">
        <div class="row m-auto p-4 bg-info">
          <div class="col-lg-4 col-md-3 col-sm-6 col-xs-12">
            <img
              :src="`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`"
              :alt="`${movieDetails.title}`"
            />
          </div>
          <div class="col-lg-8 col-md-9 col-sm-6 col-xs-12">
            <h3>{{ movieDetails.title }}</h3>
            <div class="movie-detail">
              <p>{{ movieDetails.overview }}</p>
            </div>
            <div>
              <p class="released">
                <b>Released:</b
                ><span class="mx-2">{{ movieDetails.release_date }}</span>
              </p>
            </div>
            <div>
              <p class="released">
                <b>Runtime:</b
                ><span class="mx-2">{{ movieDetails.runtime }}</span>
              </p>
            </div>
            <div>
              <p class="released">
                <b>Genre:</b
                ><span
                  class="mx-2"
                  v-for="genre in movieDetails.genres"
                  :key="genre.id"
                  >{{ genre.name }},</span
                >
              </p>
            </div>
            <div>
              <p class="released">
                <b>IMDB Rating:</b
                ><span class="mx-2">{{ movieDetails.vote_average }}</span>
              </p>
            </div>
            <div>
              <p class="released">
                <b>Production Company(s):</b
                ><span
                  class="mx-2"
                  v-for="company in movieDetails.production_companies"
                  :key="company.id"
                  >{{ company.name }},</span
                >
              </p>
            </div>
            <div>
              <p class="released">
                <b>Popularity:</b
                ><span class="mx-2">{{ movieDetails.popularity }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movieDetails: {},
    };
  },
  async created() {
    try {
      let response = await this.$axios.get(`/movie/${this.$route.params.id}`);
      let { data } = response;
      this.movieDetails = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
.container-fluid {
  background: black;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100vw;
  height: 100vh;
  color: white;
  position: fixed;
}
h3{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bolder;
  color: yellowgreen;
}
.released > span{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 15px;
  font-weight: lighter;
}
.movie-detail{
   font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 16px;
  font-weight: 600;
  color:black
}
.released > b{
  font-size: .875rem;
  color: brown;
}
</style>
