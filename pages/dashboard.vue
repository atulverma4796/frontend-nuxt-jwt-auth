
  
<template>
    <h3 class="d-flex justify-content-center spacing">Welcome to the dashboard  <b> {{this.$auth.user}}</b></h3>
</template>
<script>
export default {
    middleware:'guest'
}
</script>
<style scoped>
.spacing{
    white-space: pre-wrap;
}
</style>