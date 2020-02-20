<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{'is-active': tab.isActive}"><a v-on:click="changeTab(index)">{{ tab.name }}</a></li>
            </ul>
        </div>
        <AllIncomesComponent v-if="activeTabIndex === 0"/>
        <IncomeDetailsComponent v-if="activeTabIndex === 1"/>
        <CreateNewIncomeComponent v-if="activeTabIndex === 2"/>
    </div>
</template>

<script>
import AllIncomesComponent from './ListAll.vue'
import IncomeDetailsComponent from './SingleDetails.vue'
import CreateNewIncomeComponent from './CreateNew.vue'

    export default {
        name: 'IncomesComponent',
        data(){
            return{      
                tabs: [
                    {name: 'All Incomes', isActive: true},
                    {name: 'Income Details', isActive: false},
                    {name: 'Create New Income', isActive: false},
                ],
                activeTabIndex: 0
            }
        },
        components:{
            AllIncomesComponent,
            IncomeDetailsComponent,
            CreateNewIncomeComponent
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