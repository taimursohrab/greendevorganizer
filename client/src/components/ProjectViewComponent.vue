<template>
    <div>
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
                        <input class="input" type="text" v-model="project.owner.name"/>
                    </div>
                </div>
                    
                    <button class="button" v-on:click="updateModel()">Update Record </button>
                    <p class="has-text-primary" v-if="updateSuccess">Update successful!</p>
                
            </div>
        </div>
    </div>
</template>

<script>
import ProjectService from '../ProjectService';

export default {
    name: 'ProjectViewComponent',
    props: [
        'projectID'
    ],
    data() {
        return {
            project: {},
            updateSuccess: false
        }
    },
    methods: {
        async updateModel(){
            try{
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
        } catch(err){
            this.error = err.message;
        }
    }
}
</script>

<style scoped>

</style>