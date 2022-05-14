<template>
  <nav class="navbar is-light">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">QUWI</nuxt-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item" v-if="isAuthenticated">
            <div class="navbar-dropdown">
              <span class="navbar-item">{{ loggedInUser.nick }}</span>
              <span class="navbar-item logout" v-on:click='logout' >Log out</span>
            </div>
          </div>
          <template v-else>
            <nuxt-link class="navbar-item" to="/login">Log In</nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
       await this.$auth.logout('local')
    }
  }

}
</script>

<style lang='scss'>
  .navbar{
    width: 100%;
    padding: 20px 10px;
    .container{
      display: flex;
      justify-content: space-between;
      .navbar-brand{
        width: 70%;
      }
      .navbar-item{
        text-decoration: none;
        font-weight: bold;
        color: #010;
      }
      .navbar-item:hover{
          color: rgb(66, 116, 255);
      }
      .navbar-dropdown{
        display: flex;
        .navbar-item {
          padding: 0 10px;
          font-weight: bold;
        }
        .logout{
          cursor: pointer;
          color: rgb(66, 116, 255);
        }
      }
    }
  }
</style>
