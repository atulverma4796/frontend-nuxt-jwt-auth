import Vue from "vue"
import {mapGetters} from "vuex";

const Validation={
    install(Vue,options){
        Vue.mixin({
            computed:{
                ...mapGetters({
                    errors:'errors',
                    user:'user',
                    authenticated:'authenticated'
                })
            }
        })
    }
}
Vue.use(Validation)