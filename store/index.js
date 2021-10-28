export const state=()=>({
    errors:{},
    busy:false,
    loggedIn:false,
    strategy:"local",
    user:false
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
    }
}
export const actions={
setErrors({commit},errors){
    commit('SET_VALIDATION_ERRORS',errors);
},
clearErrors({commit}){
    commit('SET_VALIDATION_ERRORS',{})
}
}