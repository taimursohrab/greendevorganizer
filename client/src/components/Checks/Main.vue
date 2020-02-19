<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{'is-active': tab.isActive}"><a v-on:click="changeTab(index)">{{ tab.name }}</a></li>
            </ul>
        </div>
        <AllChecksComponent v-if="activeTabIndex === 0"/>
        <CheckDetailsComponent v-if="activeTabIndex === 1"/>
        <CreateNewCheckComponent v-if="activeTabIndex === 2"/>
    </div>
</template>

<script>
import AllChecksComponent from './AllChecks.vue'
import CheckDetailsComponent from './CheckDetails.vue'
import CreateNewCheckComponent from './CreateNewCheck.vue'

    export default {
        name: 'ChecksComponent',
        data(){
            return{      
                tabs: [
                    {name: 'All Checks', isActive: true},
                    {name: 'Check Details', isActive: false},
                    {name: 'Create New Check', isActive: false},
                ],
                activeTabIndex: 0
            }
        },
        components:{
            AllChecksComponent,
            CheckDetailsComponent,
            CreateNewCheckComponent
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