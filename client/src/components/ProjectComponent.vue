<template>

  <table class="table is-striped is-bordered is-fullwidth is-hoverable">
    <thead>
      <th>Project</th>
      <th>Owner</th>
      <th>Address </th>
      <th>Description </th>
    </thead>
    <tbody>
      <tr v-for="(project, index) in projects" v-bind:item="project" v-bind:index="index" v-bind:key="project.id">
        <td>{{project.name}}</td>
        <td>{{project.owner.name}}</td>
        <td>{{project.address}}</td>
        <td>{{project.desc}}</td>
      </tr>
    </tbody>
  </table>


</template>

<script>
import ProjectService from '../ProjectService';

export default {
  name: 'ProjectComponent',
  data() {
    return {
      projects: [],
      error : '',
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
<style>

</style>
