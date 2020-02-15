<template>
  <div id="app">
    <NavbarComponent/>
    <div class="container">
      <div class="columns">
        <div class="column is-one-quarter">
          <SidebarComponent />
        </div>
        <div class="column">
          <ProjectComponent />
          <ProjectComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectComponent from './components/ProjectComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'

export default {
  name: 'App',
  components: {
    ProjectComponent,
    NavbarComponent,
    SidebarComponent,
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
</style>

