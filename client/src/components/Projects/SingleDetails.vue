<template>
    <div>
        <h1>This is the project details component </h1>
        <div v-for="(value, name) in project" v-bind:key="name">
            {{ name }}: {{ value }}
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
                this.project = await ProjectService.getProject(this.itemID);
                this.people = await PeopleService.getPeople();
            } catch(err){
                this.error = err.message;
            }
        },
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
    }
</script>