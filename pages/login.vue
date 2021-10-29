<template>
  <div class="container">
    <div class="col-md-6 offset-md-3">
      <div class="card mt-4">
        <div class="card-header">
          <p class="mb-0">Login</p>
        </div>
        <div class="card-body">
          <form @submit.prevent="login">
            <div class="form-group">
              <label>Email:</label>
              <input
                type="email"
                v-model="form.email"
                name=""
                required
                class="form-control"
                :class="{ 'is invalid': errors.email }"
                placeholder="Email"
                id=""
              />
              <div class="invalid-feedback" v-if="errors.email">
                {{ errors.email[0] }}
              </div>
            </div>
            <div class="form-group">
              <label>Password:</label>
              <input
                type="password"
                v-model="form.password"
                required
                name=""
                class="form-control"
                placeholder="Password"
                id=""
              />
              <div class="invalid-feedback" v-if="errors.name">
                {{ errors.password[0] }}
              </div>
            </div>
            <div class="form-group">
              <input
                type="submit"
                value="Login"
                class="btn btn-primary w-100"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // middleware:'guest',
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      try {
       this.$auth.login({ data: this.form }).then((response)=>{
           this.$auth.setUser(response.data.data.name)  
          this.$store.dispatch('loginSuccess')
          this.$router.push({ name: "index" });
         })
       
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
