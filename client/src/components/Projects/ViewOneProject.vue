<template>
  <div>
    <div class="tabs">
      <ul>
        <li class="is-active"><a>View All</a></li>
        <li><a>Create New</a></li>
        <li><a>Modify Existing</a></li>
      </ul>
    </div>
    <h1 class="title is-4"> Projects </h1>

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

    </table>
  </div>


</template>

<script>
import ProjectService from '../ProjectService';

export default {
  name: 'ProjectComponent',
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
  },
  methods: {
    viewProject(id){
      console.log(id);
      this.$parent.screen = 'viewProject';
      this.$parent.activeID = id;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
