<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{'is-active': tab.isActive}"><a v-on:click="changeTab(index)">{{ tab.name }}</a></li>
            </ul>
        </div>
        <AllExpensesComponent v-if="activeTabIndex === 0"/>
        <ExpenseDetailsComponent v-if="activeTabIndex === 1"/>
        <CreateNewExpenseComponent v-if="activeTabIndex === 2"/>
    </div>
</template>

<script>
import AllExpensesComponent from './ListAll.vue'
import ExpenseDetailsComponent from './SingleDetails.vue'
import CreateNewExpenseComponent from './CreateNew.vue'

    export default {
        name: 'ExpensesComponent',
        data(){
            return{      
                tabs: [
                    {name: 'All Expenses', isActive: true},
                    {name: 'Expense Details', isActive: false},
                    {name: 'Create New Expense', isActive: false},
                ],
                activeTabIndex: 0
            }
        },
        components:{
            AllExpensesComponent,
            ExpenseDetailsComponent,
            CreateNewExpenseComponent
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