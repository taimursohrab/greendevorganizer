<template>
    <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">{{project.name}}</p>
                <button class="delete" aria-label="close" v-on:click="closeModal()"></button>
            </header>
            <section class="modal-card-body">
                <div class="column">
                    <div class="columns">
                    <div class="column is-one-quarter">
                        <p>Project Address: </p>
                    </div>
                    <div class="column">
                        <input class="input" type="text" v-model="project.address"/>
                    </div>
                    </div>
                    <div class="columns">
                    <div class="column is-one-quarter">
                        <p>Project Description: </p>
                    </div>
                    <div class="column">
                        <textarea class="textarea" type="text" v-model="project.desc"/>
                    </div>
                    </div>
                    <div class="columns">
                    <div class="column is-one-quarter">
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
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" v-on:click="updateProject()">Save changes</button>
                <button class="button" v-on:click="closeModal()">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
    import ProjectService from '../../services/ProjectService';
    import PersonService from '../../services/PersonService';
    
    export default {
        name: 'EditProjectComponent',
        props:[
            'activeProjectId',
            'isActive'
        ],
        data() {
            return {
                project: {},
                people: [],
                selectedPersonId : null,
                updateSuccess: false,
            }
        },
        methods: {
            async updateProject(){
                if(this.selectedPersonId) this.project.owner = this.selectedPersonId;
                await ProjectService.updateProject(this.project);
                this.$emit('closeModal');
            },
            closeModal(){
                this.$emit('closeModal');
            }
        },
        async created() {
            this.project = await ProjectService.getProject(this.activeProjectId);
            this.people = await PersonService.getPeople();
        }
    }
</script>