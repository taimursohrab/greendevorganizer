<template>
  <div>
    <input class="input" placeholder="search..." v-model="searchText" type="text"/>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="(person, index) in filteredPeople" v-bind:item="person" v-bind:index="index" v-bind:key="person._id">
        <div class="card is-clickable has-background-white-bis" >
          <button class="delete is-small is-pulled-right" v-on:click="deletePerson(person._id)"></button>
          <div class="card-content" v-on:click="setActivePerson(person._id)">
            <p class="title is-5">
              {{person.name}}
            </p>
            <hr>
            <div class= "has-text-centered">
              <p class="is-size-6">Phone Number:</p>
              <p class="is-size-7" v-if="person.phoneNumber">{{person.phoneNumber}}</p> <p class="is-size-7 is-italic" v-else> None </p>
            </div>
            <div class= "has-text-centered">
              <p class="is-size-6">Description:</p>
              <p class="is-size-7" v-if="person.desc">{{person.desc}}</p> <p class="is-size-7 is-italic" v-else> None </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column has-text-centered noResults" v-if="filteredPeople.length == 0">
        <p>No Results Found </p>
      </div>
    </div>
  </div>

</template>

<script>
import PersonService from '../../services/PersonService';

export default {
  name: 'AllPeopleComponent',
  data() {
    return {
      people: [],
      error : '',
      searchText: ''
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
    async deletePerson(id){
      try{
        await PersonService.deletePerson(id);
        this.people = await PersonService.getPeople();
      } catch(err){
        this.error = err.message;
      }
    },
    setActivePerson(id){
      this.$parent.activePersonId = id;
      this.$emit('changeTab',1);
    }
  },
  computed: {
    filteredPeople: function () {
      let regExp = RegExp(this.searchText+ '','i');
      const result = this.people.filter(person => {
        if (person.name.match(regExp)) return true;
        if (person.owner) {
          if(person.owner.name.match(regExp)) return true;
        }
        if (person.address){
          if(person.address.match(regExp)) return true;
        } 
        if (person.desc){
          if(person.desc.match(regExp)) return true;
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
