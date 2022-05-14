<template>
  <section class="start-section">
    <div class="container" v-if="!loggedInUser">
      <h1 class="title">Welcome QUWI</h1>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'IndexPage',
  computed:{
    ...mapGetters(['loggedInUser'])
  },
  mounted() {
    if(this.loggedInUser) {
       this.$router.push('/home')
    }
  }
})
</script>

<style lang="scss">
  .start-section{
    .container{
      width: 400px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      margin: 100px auto;
      .title{
        color: rgb(66, 116, 255);
      }
    }
  }
</style>
