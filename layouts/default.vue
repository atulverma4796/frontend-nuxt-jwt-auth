<template>
<div>
<TopNav/>
  <Nuxt />
</div>
</template>
<script>
import TopNav from "./partials/TopNav.vue";
export default{
    components:{
    TopNav,
    }
}
</script>