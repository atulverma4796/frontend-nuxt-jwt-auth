<template>
    <div class="container">
        <div class="col-md-6 offset-md-3">
            <div class="card mt-4">
                <div class="card-header">
                    <p class="mb-0">Register</p>
                </div>
                <div class="card-body">
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label>Name:</label>
                            <input type="text" v-model="form.name" name="" class="form-control"  :class="{'is-invalid': errors.name}" placeholder="Name" id="">
                            <div v-if="errors.name" class="invalid-feedback">
                                {{errors.name[0]}}
                            </div>
                        </div>
                         <div class="form-group">
                            <label>Email:</label>
                            <input type="email" v-model="form.email" name=""  :class="{'is-invalid': errors.email}" class="form-control"  placeholder="Email" id="">
                             <div  v-if="errors.email" class="invalid-feedback" >
                                {{errors.email[0]}}
                            </div>
                        </div>
                         <div class="form-group">
                            <label>Password:</label>
                            <input type="password" v-model="form.password" name=""  :class="{'is-invalid': errors.password}" class="form-control" placeholder="Password" id="">
                             <div v-if="errors.password" class="invalid-feedback" >
                                {{errors.password[0]}}
                            </div>
                        </div>
                          <div class="form-group">
                            <input type="submit" value="Register" class="btn btn-primary w-100" >
                        </div>
                    </form>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
export default{    
    middleware:'guest',
data()
{   return {
    form:{
        name:"",
        email:"",
        password:""
    }
}
},
methods:{
    async register(){
        await this.$axios.post('/auth/register',this.form);
        this.$auth.login({data:this.form});
        this.$router.push({name:'index'});
        
    }
}
}
</script>
<style scoped>
.is-invalid{
    outline:1px red;
}
.invalid-feedback{
    color: red;
}
</style>