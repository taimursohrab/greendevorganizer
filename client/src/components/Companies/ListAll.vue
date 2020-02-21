<template>
  <div>
    <input class="input" placeholder="search..." v-model="searchText" type="text"/>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="(company, index) in filteredCompanies" v-bind:item="company" v-bind:index="index" v-bind:key="company._id">
        <div class="card is-clickable has-background-white-bis" >
          <button class="delete is-small is-pulled-right" v-on:click="deleteCompany(company._id)"></button>
          <div class="card-content" v-on:click="setActiveCompany(company._id)">
            <p class="title is-5">
              {{company.name}}
            </p>
            <hr>
            <div class= "has-text-centered">
              <p class="is-size-6">Phone Number:</p>
              <p class="is-size-7" v-if="company.phoneNumber">{{company.phoneNumber}}</p> <p class="is-size-7 is-italic" v-else> None </p>
            </div>
            <div class= "has-text-centered">
              <p class="is-size-6">Description:</p>
              <p class="is-size-7" v-if="company.desc">{{company.desc}}</p> <p class="is-size-7 is-italic" v-else> None </p>
            </div>
            <div class= "has-text-centered">
                <p class="is-size-6">Employees:</p>
                <p class="is-size-7" v-if="company.employees">
                  <span v-for="(employee,index) in company.employees" v-bind:key="index">
                      {{employee.name}}
                  </span>
                </p> 
                <p class="is-size-7 is-italic" v-else> None </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column has-text-centered noResults" v-if="filteredCompanies.length == 0">
        <p>No Results Found </p>
      </div>
    </div>
  </div>

</template>

<script>
import CompanyService from '../../services/CompanyService';

export default {
  name: 'AllCompaniesComponent',
  data() {
    return {
      companies: [],
      error : '',
      searchText: ''
    }
  },
  async created(){
    try{
      this.companies = await CompanyService.getCompanies();
    } catch(err){
      this.error = err.message;
    }
  },
  methods: {
    async deleteCompany(id){
      try{
        await CompanyService.deleteCompany(id);
        this.companies = await CompanyService.getCompanies();
      } catch(err){
        this.error = err.message;
      }
    },
    setActiveCompany(id){
      this.$parent.activeCompanyId = id;
      this.$emit('changeTab',1);
    }
  },
  computed: {
    filteredCompanies: function () {
      let regExp = RegExp(this.searchText+ '','i');
      const result = this.companies.filter(company => {
        if (company.name.match(regExp)) return true;
        if (company.owner) {
          if(company.owner.name.match(regExp)) return true;
        }
        if (company.address){
          if(company.address.match(regExp)) return true;
        } 
        if (company.desc){
          if(company.desc.match(regExp)) return true;
        } 
        if (company.phoneNumber){
          if(company.phoneNumber.match(regExp)) return true;
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
