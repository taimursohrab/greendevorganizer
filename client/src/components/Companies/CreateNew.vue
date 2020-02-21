<template>
    <div>
        <div class="column">
            <div class="columns">
                <div class="column is-one-fifth">
                    <p>Company Name: </p>
                </div>
                <div class="column">
                    <input type="text" class="input" v-model="company.name"/>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-fifth">
                    <p>Company Address: </p>
                </div>
                <div class="column">
                    <input class="input" type="text" v-model="company.address"/>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-fifth">
                    <p>Company Phone Number: </p>
                </div>
                <div class="column">
                    <input class="input" type="text" v-model="company.phoneNumber"/>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-fifth">
                    <p>Company Description: </p>
                </div>
                <div class="column">
                    <input class="input" type="text" v-model="company.desc"/>
                </div>
            </div>
            <div class="columns">
                <div class="column is-one-fifth">
                    <p>Company Employees </p>
                </div>
                <div class="column">

                    <div v-for="(employee, index) in company.employees" v-bind:key="index">
                        <select v-model="employee.id">
                            <option v-bind:value="null" selected> None </option>
                            <option v-for="(person) in people" v-bind:key="person._id" v-bind:value="person._id"> {{person.name}}</option>
                        </select>
                        <button v-on:click="deleteEmployee(employee)">
                            delete
                        </button>
                    </div>
  
                    <button v-on:click="addEmployee()">
                        New Employee
                    </button>
                </div>
            </div>

            <button class="button" v-on:click="createNewCompany()">Create Company </button>
        </div>
    </div>
</template>

<script>
    import CompanyService from '../../services/CompanyService';
    import PersonService from '../../services/PersonService';
    
    export default {
        name: 'CreateNewCompanyComponent',
        data() {
            return {
                company: {
                    employees: []
                }
            }
        },
        methods: {
            async createNewCompany(){
                await CompanyService.insertCompany(this.company)
                this.$emit('changeTab',0);
            },
            addEmployee: function () {
                this.company.employees.push({id: null});
            },
            deleteEmployee: function (index) {
                this.company.employees.splice(index, 1);
            }
        },
        async created() {
            this.people = await PersonService.getPeople();
        }
    }
</script>