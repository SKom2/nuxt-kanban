<script>
import Main from '../components/Main.vue'
export default {
  middleware: 'auth',
  components: {
    Main,
  }
}
</script>

<template>
  <Main />
</template>

<style scoped>

</style>