<template>
  <div>
    <input class="input" placeholder="search..." type="text"/>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="(project, index) in projects" v-bind:item="project" v-bind:index="index" v-bind:key="project._id">
        <div class="card is-clickable has-background-white-bis" v-on:click="viewProject(project._id)">
          <div class="card-content">
            <p class="title is-6">
              {{project.name}}
            </p>
            <hr>
            <div class= "has-text-centered">
              <p class="is-size-6">Owner:</p>
              <p class="is-size-7" v-if="project.owner">{{project.owner.name}}</p> <p class="is-size-7 is-italic" v-else> None </p>
            </div>
            <div class= "has-text-centered">
              <p class="is-size-6">Address:</p>
              <p class="is-size-7" v-if="project.address">{{project.address}}</p> <p class="is-size-7 is-italic" v-else> None </p>
            </div>
            <div class= "has-text-centered">
              <p class="is-size-6">Description:</p>
              <p class="is-size-7" v-if="project.desc">{{project.desc}}</p> <p class="is-size-7 is-italic" v-else> None </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- 
    <table class="table is-bordered is-fullwidth is-hoverable is-narrow is-size-6">
      <thead>
        <th><p class="has-text-centered">Project</p></th>
        <th><p class="has-text-centered">Owner</p></th>
        <th><p class="has-text-centered">Address</p></th>
        <th><p class="has-text-centered">Description</p></th>
      </thead>
      <tbody class="is-clickable is-size-7">
        <tr v-for="(project, index) in projects" v-bind:item="project" v-bind:index="index" v-bind:key="project._id" v-on:click="viewProject(project._id)">
          <td>{{project.name}}</td>
          <td v-if="project.owner">{{project.owner.name}}</td>
          <td v-else>No Owner</td>
          <td>{{project.address}}</td>
          <td>{{project.desc}}</td>
        </tr>
      </tbody>

    </table> -->

</template>

<script>
import ProjectService from '../../ProjectService';

export default {
  name: 'AllProjectsComponent',
  data() {
    return {
      projects: [],
      error : ''
    }
  },
  async created(){
    try{
      this.projects = await ProjectService.getProjects();
    } catch(err){
      this.error = err.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    margin-top:10px;
  }
  .input{
    margin-bottom:20px;
  }
  .has-text-centered{
    margin-bottom:10px;
  }
</style>
