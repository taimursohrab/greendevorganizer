<template>
    <div>
        <h1>This is the project details component </h1>
        <div v-if="activeProjectId">
            <div v-for="(value, name) in project" v-bind:key="name">
                {{ name }}: {{ value }}
            </div>
        </div>
    </div>
</template>

<script>
    import ProjectService from '../../ProjectService';
    import PeopleService from '../../PersonService';

    export default {
        name: 'ProjectDetailsComponent',
        async created(){
            try{
                this.project = await ProjectService.getProject(this.activeProjectId);
                this.people = await PeopleService.getPeople();
            } catch(err){
                this.error = err.message;
            }
        },
        props: [
            'activeProjectId'
        ],
        data() {
            return {
                project: {},
                people: [],
                selectedPersonId : '',
                updateSuccess: false
            }
        },
    }
</script>