export const state=()=>({
    errors:{},
    busy:false,
    loggedIn:false,
    strategy:"local",
    user:"",
})
export const getters={
    errors(state){
        return  state.errors;
    },
    authenticated(state){
        return state.loggedIn;
    },
    user(state){
        return state.user;
    }
}
export const mutations={
    SET_VALIDATION_ERRORS(state,errors){
        state.errors=errors;
    },
    LOGIN_STATUS(state,boolean){
        state.loggedIn=boolean
    }
}
export const actions={
setErrors({commit},errors){
    commit('SET_VALIDATION_ERRORS',errors);
},
clearErrors({commit}){
    commit('SET_VALIDATION_ERRORS',{})
},
loginSuccess({commit}){
    commit('LOGIN_STATUS',true)
},
redirect({commit}){
    commit('LOGIN_STATUS',false)
}

}