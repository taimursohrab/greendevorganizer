<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="container">
      <div class="columns">
        <div class="column is-one-quarter">
          <aside class="menu">
            <p class="menu-label">
              General
            </p>
            <ul class="menu-list">
              <li><a>Home</a></li>
              <li><a class="is-active">Projects</a></li>
            </ul>
          </aside>
        </div>
        <div class="column">
          <project-component />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectComponent from './components/ProjectComponent.vue'

export default {
  name: 'App',
  components: {
    ProjectComponent
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

