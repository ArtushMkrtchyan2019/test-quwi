<template>
  <section class="projects-section">
    <div class="pro-container">
      <h2 class="title">My Profile</h2>
      <div class="content" v-for="item of projects.projects" :key="item.id" v-on:click="openModal(item.id,item.name)">
          <div class="logo-title">
            <img :src="item.logo_url" alt="">
            <div class="project-name">
              <span>{{item.name}}</span>
            </div>
          </div>
          <div class="active" v-if="item.is_active">
              <span>Active</span>
          </div>
          <div class="times">
            <span>time this week</span>
            <span>this month</span>
            <span>total {{item.spent_sec_all_time}}</span>
          </div>
      </div>
    </div>
    <div class="modal-redactor" v-if="modalStatus">
        <div class="form-redactor">
            <input type="text" placeholder="Project Name" v-model="projectName">
            <button v-on:click="saveData()">SAVE</button>
        </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['loggedInUser'])
  },
    data: () => ({
      projects: {},
      modalStatus: false,
      projectName: '',
      activeId: 0
    }),
  async asyncData({$axios}) {
    const projects = await $axios.$get(
      'https://api.quwi.com/v2/projects-manage/index?filters[is_active]=1&sort=dta_create'
    )
    console.log(projects, "projects")
    return {
      projects
    }
  },
  methods:{
    openModal(id,name) {
      this.modalStatus = true
      this.activeId = id
      this.projectName = name
    },
    async saveData() {
      console.log(this.projectName);
      const url = 'https://api.quwi.com/v2/projects-manage/update?id=' + this.activeId
      await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': sessionStorage.getItem('auth._token.local')

        },
        body: JSON.stringify({name: this.projectName})
      }).then(res => res.json()).then(res => console.log(res))
      window.location.reload()
      this.modalStatus = false
    }
  }
}
</script>

<style lang="scss">
  .projects-section{
    width: 100%;
    .pro-container{
      cursor: pointer;
      .title{
        padding: 50px;
        color: rgb(41, 75, 226);
      }
      .content{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo-title{
          width: 22%;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 80px;
            height: 80px;
          }
          .project-name{
            padding-right: 20px;
            font-weight:bold ;
          }
        }
        .active{
            font-weight:bold ;
          color:rgba(36, 139, 40,1);
        }
        .times{
          width: 25%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          span{
            width: 50%;
          }
        }
      }
    }
    .modal-redactor{
      width: 100%;
      height: 100vh;
      background: rgba(128, 126, 126,0.6);
      position: fixed;
      top: 0;
      .form-redactor{
        width: 20%;
        height: 200px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        display: flex;
        flex-direction: column;
        padding: 50px;
        background: #fff;
        border-radius: 10px;
        input{
          border: none;
          outline: none;
          width: 80%;
          padding: 5px;
        }
        button{
          margin-top: 20px ;
          border: none;
          outline: none;
          width: 80%;
          padding: 5px;
          background: rgb(13, 119, 219);
          border-radius: 10px;
          cursor: pointer;
          font-weight: bold;
          color: #fff;
        }
      }
    }
  }
</style>
