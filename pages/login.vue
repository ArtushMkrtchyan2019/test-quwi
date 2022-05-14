<template>
  <section class="login-section">
    <div class="container">
      <h2 class="title">QUWI</h2>
      <form class="login-form" method="post" @submit.prevent="login">
        <div class="field">
            <input
              type="email"
              class="input"
              name="email"
              placeholder="password"
              v-model="email"
            />
        </div>
        <div class="field">
            <input
              type="password"
              class="input"
              name="password"
              placeholder="password"
              v-model="password"
            />
        </div>
        <div class="control">
          <button type="submit" class="button">Login</button>
        </div>
      </form>
      <div class="forgot">
          <nuxt-link class="link" to="/">Forgot Password ?</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
        let data = await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          }
        })
        console.log(data);
        const token = localStorage.getItem('auth._token.local')
        sessionStorage.setItem('auth._token.local',token)
        this.$router.push('/')


    }
  }
}
</script>

<style lang="scss" >
  .login-section{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgb(124, 124, 124,0.7);
    .container{
      position: fixed;
      top: 100px;
      right: 0;
      bottom: 0;
      left: 0;
      margin:auto;
      width: 410px;
      height: 350px;
      background: #fff;
      padding: 20px 10px;
      border-radius: 11px;
      display: flex;
      flex-direction: column;
      .title{
        color: #000;
        font-size: 30px;
        font-weight: 700;
      }
      .login-form{
        margin-top: 20px;
      }
      .field{
        width: 340px;
        .input{
          width: 100%;
          border: none;
          padding: 10px;
          margin-top: 10px;
          outline: none;
        }
        .input::placeholder{
          color: rgba(173, 173, 173,0.6);
          font-weight: bold;
        }
      }
      .control{
        width: 340px;
        .button{
          width: 100%;
          border: none;
          background: rgb(41, 75, 226);
          color: #fff;
          font-size: 22px;
          margin-top: 10px;
          padding: 10px;
          border-radius: 10px;
          text-align: center;
          outline: none;
          cursor: pointer;
        }
      }
    }
    .forgot{
      margin-top: 50px;
      .link{
        color: rgb(7, 115, 187);
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
</style>
