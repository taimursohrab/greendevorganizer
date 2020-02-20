<template>
  <div>
    <input class="input" placeholder="search..." v-model="searchText" type="text"/>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="(project, index) in filteredProjects" v-bind:item="project" v-bind:index="index" v-bind:key="project._id">
        <div class="card is-clickable has-background-white-bis" >
          <button class="delete is-small is-pulled-right" v-on:click="deleteProject(project._id)"></button>
          <div class="card-content" v-on:click="setActiveProject(project._id)">
            <p class="title is-5">
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
      <div class="column has-text-centered noResults" v-if="filteredProjects.length == 0">
        <p>No Results Found </p>
      </div>
    </div>
  </div>

</template>

<script>
import ProjectService from '../../services/ProjectService';

export default {
  name: 'AllProjectsComponent',
  data() {
    return {
      projects: [],
      error : '',
      searchText: ''
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
    async deleteProject(id){
      try{
        await ProjectService.deleteProject(id);
        this.projects = await ProjectService.getProjects();
      } catch(err){
        this.error = err.message;
      }
    },
    setActiveProject(id){
      this.$parent.activeProjectId = id;
      this.$emit('changeTab',1);
    }
  },
  computed: {
    filteredProjects: function () {
      let regExp = RegExp(this.searchText+ '','i');
      const result = this.projects.filter(project => {
        if (project.name.match(regExp)) return true;
        if (project.owner) {
          if(project.owner.name.match(regExp)) return true;
        }
        if (project.address){
          if(project.address.match(regExp)) return true;
        } 
        if (project.desc){
          if(project.desc.match(regExp)) return true;
        } 
        return false;
      });
      return result;
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
  .noResults{
    margin-top:30px;
  }
  .delete{
    margin-top:5px;
    margin-right:5px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear 300ms, opacity 300ms;
  }
  .card:hover .delete{
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 300ms;
  }
</style>
