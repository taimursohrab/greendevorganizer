<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{'is-active': tab.isActive}"><a v-on:click="changeTab(index)">{{ tab.name }}</a></li>
            </ul>
        </div>
        <AllInvoicesComponent v-if="activeTabIndex === 0"/>
        <InvoiceDetailsComponent v-if="activeTabIndex === 1"/>
        <CreateNewInvoiceComponent v-if="activeTabIndex === 2"/>
    </div>
</template>

<script>
import AllInvoicesComponent from './ListAll.vue'
import InvoiceDetailsComponent from './SingleDetails.vue'
import CreateNewInvoiceComponent from './CreateNew.vue'

    export default {
        name: 'InvoicesComponent',
        data(){
            return{      
                tabs: [
                    {name: 'All Invoices', isActive: true},
                    {name: 'Invoice Details', isActive: false},
                    {name: 'Create New Invoice', isActive: false},
                ],
                activeTabIndex: 0
            }
        },
        components:{
            AllInvoicesComponent,
            InvoiceDetailsComponent,
            CreateNewInvoiceComponent
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