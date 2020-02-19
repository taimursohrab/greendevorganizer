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
          <HomeComponent v-if="viewConfig.screen === 0"/>
          <ProjectComponent v-if="viewConfig.screen === 1"/>
          <ContractsComponent v-if="viewConfig.screen === 2"/>
          <InvoicesComponent v-if="viewConfig.screen === 3"/>
          <IncomesComponent v-if="viewConfig.screen === 4"/>
          <ExpensesComponent v-if="viewConfig.screen === 5"/>
          <ChecksComponent v-if="viewConfig.screen === 6"/>
          <PeopleComponent v-if="viewConfig.screen === 7"/>
          <CompaniesComponent v-if="viewConfig.screen === 8"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import ContractsComponent from './components/ContractsComponent.vue'
import InvoicesComponent from './components/InvoicesComponent.vue'
import IncomesComponent from './components/IncomesComponent.vue'
import ExpensesComponent from './components/ExpensesComponent.vue'
import ChecksComponent from './components/ChecksComponent.vue'
import PeopleComponent from './components/PeopleComponent.vue'
import CompaniesComponent from './components/CompaniesComponent.vue'
import FinancialRoadmapComponent from './components/FinancialRoadmapComponent.vue'

export default {
  name: 'App',
  components: {
    SidebarComponent,
    HomeComponent,
    ProjectsComponent,
    ContractsComponent,
    InvoicesComponent,
    IncomesComponent,
    ExpensesComponent,
    ChecksComponent,
    PeopleComponent,
    CompaniesComponent,
    FinancialRoadmapComponent
  },
  data(){
    return {
      viewConfig: {screen: '', tab: '', activeProjectId: 0};
    }
  },
  methods: {
    changeView(screen, tab, id){
      this.viewConfig.screen = screen;
      this.viewConfig.tab = tab;
      this.viewConfig.activeProjectId = id;
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

