<template>
  <div id="app">
    <div class="container">

      <div class="columns">
        <div class="column is-one-fifth">
          <figure class="image is-96x96 is-centered">
            <img src="./assets/GDlogo.png" />
          </figure>
        </div>
        <div class="column is-one-half">
            <h1 class="title">Green Developers Organizer </h1>
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-fifth">
          <SidebarComponent />
        </div>
        <div class="column">
          <ProjectComponent v-if="screen === 1"/>
          <ProjectViewComponent v-if="screen === 'viewProject'" v-bind:projectID="activeID"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectComponent from './components/ProjectComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'
import ProjectViewComponent from './components/ProjectViewComponent.vue'

export default {
  name: 'App',
  components: {
    ProjectComponent,
    SidebarComponent,
    ProjectViewComponent
  },
  data(){
    return {
      screen: 0,
      activeID : 0
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.is-clickable {
  cursor: pointer;
}
</style>

