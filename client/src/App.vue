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
          <SidebarComponent v-on:changeView="changeView" />
        </div>
        <div class="column">
          <HomeComponent v-if="screen === 0"/>
          <ProjectsComponent v-else-if="screen === 1"/>
          <ContractsComponent v-else-if="screen === 2"/>
          <InvoicesComponent v-else-if="screen === 3"/>
          <IncomesComponent v-else-if="screen === 4"/>
          <ExpensesComponent v-else-if="screen === 5"/>
          <ChecksComponent v-else-if="screen === 6"/>
          <PeopleComponent v-else-if="screen === 7"/>
          <CompaniesComponent v-else-if="screen === 8"/>
          <financial-roadmap-component v-else/>
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue'
import HomeComponent from './components/HomeComponent.vue'
import ProjectsComponent from './components/Projects/Main.vue'
import ContractsComponent from './components/Contracts/Main.vue'
import InvoicesComponent from './components/Invoices/Main.vue'
import IncomesComponent from './components/Incomes/Main.vue'
import ExpensesComponent from './components/Expenses/Main.vue'
import ChecksComponent from './components/Checks/Main.vue'
import PeopleComponent from './components/People/Main.vue'
import CompaniesComponent from './components/Companies/Main.vue'
import FinancialRoadmapComponent from './components/FinancialRoadmap/Main.vue'
import FooterComponent from './components/FooterComponent.vue'

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
    FinancialRoadmapComponent,
    FooterComponent
  },
  data(){
    return {
      screen : 0
    }
  },
  methods: {
    changeView(screen){
      if (screen != undefined) this.screen = screen;
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

