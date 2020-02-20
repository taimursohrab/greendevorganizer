<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{'is-active': tab.isActive}"><a v-on:click="changeTab(index)">{{ tab.name }}</a></li>
            </ul>
        </div>
        <AllPeopleComponent v-if="activeTabIndex === 0" v-on:changeTab="changeTab"/>
        <PersonDetailsComponent v-if="activeTabIndex === 1" v-bind:activePersonId="activePersonId"/>
        <CreateNewPersonComponent v-if="activeTabIndex === 2" v-on:changeTab="changeTab"/>
    </div>
</template>

<script>
import AllPeopleComponent from './ListAll.vue'
import PersonDetailsComponent from './SingleDetails.vue'
import CreateNewPersonComponent from './CreateNew.vue'

    export default {
        name: 'PeopleComponent',
        data(){
            return{      
                tabs: [
                    {name: 'All People', isActive: true},
                    {name: 'Person Details', isActive: false},
                    {name: 'Create New Person', isActive: false},
                ],
                activeTabIndex: 0,
                activePersonId: 0
            }
        },
        components:{
            AllPeopleComponent,
            PersonDetailsComponent,
            CreateNewPersonComponent
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