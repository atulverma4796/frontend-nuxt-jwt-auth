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
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Login</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/auth/register">Register</nuxt-link>
          </li>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>
<script>
export default {}
</script>