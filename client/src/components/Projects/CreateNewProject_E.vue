<template>
    <div>
        <div class="tabs">
            <ul>
                <li><a>View All</a></li>
                <li><a>Create New</a></li>
                <li class="is-active"><a>Modify Existing</a></li>
            </ul>
        </div>
        <h1 class="title">Update Project </h1>
        <div class="columns">
            <div class="column is-one-fifth">
                <span class="is-clickable" v-on:click="returnToProjects()"><i  class="fas fa-2x fa-arrow-left"></i></span>
            </div>
            <div class="column">
                <div class="columns">
                    <div class="column is-one-fifth">
                        <p>Project Name: </p>
                    </div>
                    <div class="column">
                        <input type="text" class="input" v-model="project.name"/>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-one-fifth">
                        <p>Project Address: </p>
                    </div>
                    <div class="column">
                        <input class="input" type="text" v-model="project.address"/>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-one-fifth">
                        <p>Project Description: </p>
                    </div>
                    <div class="column">
                        <input class="input" type="text" v-model="project.desc"/>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-one-fifth">
                        <p>Project Owner: </p>
                    </div>
                    <div class="column">
                        <div class="select">
                            <select v-model="selectedPersonId">
                                <option v-bind:value="null"> None </option>
                                <option v-for="(person) in people" v-bind:key="person._id" v-bind:value="person._id"> {{person.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                    
                    <button class="button" v-on:click="updateModel()">Update Project </button>
                    <p class="has-text-primary" v-if="updateSuccess">Update successful!</p>
                
            </div>
        </div>
    </div>
</template>

<script>
import ProjectService from '../ProjectService';
import PeopleService from '../PersonService';

export default {
    name: 'DetailedItemComponent',
    props: [
        'itemID'
    ],
    data() {
        return {
            project: {},
            people: [],
            selectedPersonId : '',
            updateSuccess: false
        }
    },
    methods: {
        async updateModel(){
            try{
                this.project.owner = this.selectedPersonId;
                await ProjectService.updateProject(this.project);
                this.displaySuccess();
            } catch(err){
                this.error = err.message;
            }
        },
        async displaySuccess(){
            try{
                this.updateSuccess = true;
                await this.wait(2000);
                this.updateSuccess = false;
            } catch(err){
                this.error = err.message;
            }
        },
        async wait(ms) {
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            });
        },
        returnToProjects(){
            this.$parent.screen = 1;
        }
    },
    async created(){
        try{
            this.project = await ProjectService.getProject(this.projectID);
            this.people = await PeopleService.getPeople();
        } catch(err){
            this.error = err.message;
        }
    }
}
</script>

<style scoped>

</style>