<template>
  <div>
    <div class="tabs">
      <ul>
        <li class="is-active"><a>View All</a></li>
        <li><a>Create New</a></li>
        <li><a>Modify Existing</a></li>
      </ul>
    </div>
    <h1 class="title is-4"> People </h1>

    <table class="table is-bordered is-fullwidth is-hoverable is-narrow is-size-6">
      <thead>
        <th><p class="has-text-centered">Person</p></th>
        <th><p class="has-text-centered">Companies</p></th>
        <th><p class="has-text-centered">Phone Number</p></th>
      </thead>
      <tbody class="is-clickable is-size-7">
        <tr v-for="(person, index) in people" v-bind:item="person" v-bind:index="index" v-bind:key="person._id" v-on:click="viewPerson(person._id)">
          <td>{{person.name}}</td>
          <td v-if="person.companies.len > 0">
            <ul>
              <li v-for="(company,index) in person.companies" v-bind:key="index">{{company.name}}</li>
            </ul>
          </td>
          <td v-else>No Companies</td>
          <td>{{person.phoneNumber}}</td>
        </tr>
      </tbody>

    </table>
  </div>


</template>

<script>
import PersonService from '../PersonService';

export default {
  name: 'ViewPerson',
  data() {
    return {
      people: [],
      error : '',
    }
  },
  async created(){
    try{
      this.people = await PersonService.getPeople();
    } catch(err){
      this.error = err.message;
    }
  },
  methods: {
    viewPerson(id){
      console.log(id);
      this.$parent.screen = 'viewPerson';
      this.$parent.activeID = id;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
