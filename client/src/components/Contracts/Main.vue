<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{'is-active': tab.isActive}"><a v-on:click="changeTab(index)">{{ tab.name }}</a></li>
            </ul>
        </div>
        <AllContractsComponent v-if="activeTabIndex === 0"/>
        <ContractDetailsComponent v-if="activeTabIndex === 1"/>
        <CreateNewContractComponent v-if="activeTabIndex === 2"/>
    </div>
</template>

<script>
import AllContractsComponent from './ListAll.vue'
import ContractDetailsComponent from './SingleDetails.vue'
import CreateNewContractComponent from './CreateNew.vue'

    export default {
        name: 'ContractsComponent',
        data(){
            return{      
                tabs: [
                    {name: 'All Contracts', isActive: true},
                    {name: 'Contract Details', isActive: false},
                    {name: 'Create New Contract', isActive: false},
                ],
                activeTabIndex: 0
            }
        },
        components:{
            AllContractsComponent,
            ContractDetailsComponent,
            CreateNewContractComponent
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