<template>
    <div>
        <div class="column">
            <div class="columns">
                <div class="column is-one-fifth">
                    <p>Person Name: </p>
                </div>
                <div class="column">
                    <input type="text" class="input" v-model="person.name"/>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-fifth">
                    <p>Person Phone Number: </p>
                </div>
                <div class="column">
                    <input class="input" type="text" v-model="person.phoneNumber"/>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-fifth">
                    <p>Person Description: </p>
                </div>
                <div class="column">
                    <input class="input" type="text" v-model="person.desc"/>
                </div>
            </div>

            <button class="button" v-on:click="createNewPerson()">Create Person </button>
        </div>
    </div>
</template>

<script>
    import PersonService from '../../services/PersonService';
    
    export default {
        name: 'CreateNewPersonComponent',
        data() {
            return {
                person: {}
            }
        },
        methods: {
            async createNewPerson(){
                await PersonService.insertPerson(this.person)
                this.$emit('changeTab',0);
            }
        },
    }
</script>