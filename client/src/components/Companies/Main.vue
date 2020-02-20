<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{'is-active': tab.isActive}"><a v-on:click="changeTab(index)">{{ tab.name }}</a></li>
            </ul>
        </div>
        <AllCompaniesComponent v-if="activeTabIndex === 0"/>
        <CompanyDetailsComponent v-if="activeTabIndex === 1"/>
        <CreateNewCompanyComponent v-if="activeTabIndex === 2"/>
    </div>
</template>

<script>
import AllCompaniesComponent from './ListAll.vue'
import CompanyDetailsComponent from './SingleDetails.vue'
import CreateNewCompanyComponent from './CreateNew.vue'

    export default {
        name: 'CompaniesComponent',
        data(){
            return{      
                tabs: [
                    {name: 'All Companies', isActive: true},
                    {name: 'Company Details', isActive: false},
                    {name: 'Create New Company', isActive: false},
                ],
                activeTabIndex: 0
            }
        },
        components:{
            AllCompaniesComponent,
            CompanyDetailsComponent,
            CreateNewCompanyComponent
        },
        created(){
            this.activeTabIndex = 0;
        },
        methods: {
            changeTab(i){
                this.tabs[this.activeTabIndex].isActive = false;
                this.tabs[i].isActive = true;
                this.activeTabIndex = i;
            }
        }
    }
</script>