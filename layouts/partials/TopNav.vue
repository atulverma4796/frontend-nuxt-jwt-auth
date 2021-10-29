<template>
  <div class="container">
    <div>
      <b-navbar type="light" variant="light">
        <nuxt-link class="navbar-brand" to="/">JWT-AUTH</nuxt-link>
        <b-navbar-nav>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/dashboard">Dashboard</nuxt-link>
          </li>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <template v-if="authenticated">
            <b-nav-item-dropdown slot="button-content">
              <div><b>{{this.$auth.user}}</b></div>
              <div @click.prevent="logout" class="cursor">Sign out</div>
            </b-nav-item-dropdown>
          </template>
          <template v-else>
            <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/auth/register">Register</nuxt-link>
          </li>
          </template>
        
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    logout(){
      this.$auth.logout();
      this.$router.push({name:'login'})
      this.$store.dispatch('redirect')
    }
  }
}
</script>
<style scoped>
.cursor{
  cursor: pointer;
}
</style>