<template>
    <div>
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
                    <textarea class="textarea" type="text" v-model="project.desc"/>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-fifth">
                    <p>Project Owner: </p>
                </div>
                <div class="column">
                    <div class="select is-pulled-left">
                        <select v-model="selectedPersonId">
                            <option v-bind:value="null" selected> None </option>
                            <option v-for="(person) in people" v-bind:key="person._id" v-bind:value="person._id"> {{person.name}}</option>
                        </select>
                    </div>
                </div>
            </div>

            <button class="button" v-on:click="createNewProject()">Create Project </button>
        </div>
    </div>
</template>

<script>
    import ProjectService from '../../services/ProjectService';
    import PersonService from '../../services/PersonService';
    
    export default {
        name: 'CreateNewProjectComponent',
        data() {
            return {
                project: {},
                people: [],
                selectedPersonId : null,
                updateSuccess: false
            }
        },
        methods: {
            async createNewProject(){
                if(this.selectedPersonId) this.project.owner = this.selectedPersonId;
                await ProjectService.insertProject(this.project)
                this.$emit('changeTab',0);
            }
        },
        async created() {
            this.people = await PersonService.getPeople();
        }
    }
</script>