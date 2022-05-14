<template>
  <div>
    <Navbar/>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style >
  *{
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
