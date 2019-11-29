<template>
  
</template>

<script>
// @ is an alias to /src
export default {
  created() {
    this.$store.dispatch('destroyToken')
  }
};
</script>
