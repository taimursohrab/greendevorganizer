<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{'is-active': tab.isActive}"><a v-on:click="changeTab(index)">{{ tab.name }}</a></li>
            </ul>
        </div>
        <AllPaymentsComponent v-if="activeTabIndex === 0"/>
        <PaymentDetailsComponent v-if="activeTabIndex === 1"/>
        <CreateNewPaymentComponent v-if="activeTabIndex === 2"/>
    </div>
</template>

<script>
import AllPaymentsComponent from './ListAll.vue'
import PaymentDetailsComponent from './SingleDetails.vue'
import CreateNewPaymentComponent from './CreateNew.vue'

    export default {
        name: 'PaymentsComponent',
        data(){
            return{      
                tabs: [
                    {name: 'All Payments', isActive: true},
                    {name: 'Payment Details', isActive: false},
                    {name: 'Create New Payment', isActive: false},
                ],
                activeTabIndex: 0
            }
        },
        components:{
            AllPaymentsComponent,
            PaymentDetailsComponent,
            CreateNewPaymentComponent
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