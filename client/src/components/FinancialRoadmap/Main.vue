<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{'is-active': tab.isActive}"><a v-on:click="changeTab(index)">{{ tab.name }}</a></li>
            </ul>
        </div>
        <AllRoadmapsComponent v-if="activeTabIndex === 0"/>
        <RoadmapDetailsComponent v-if="activeTabIndex === 1"/>
        <CreateNewRoadmapComponent v-if="activeTabIndex === 2"/>
    </div>
</template>

<script>
import AllRoadmapsComponent from './ListAll.vue'
import RoadmapDetailsComponent from './SingleDetails.vue'
import CreateNewRoadmapComponent from './CreateNew.vue'

    export default {
        name: 'RoadmapsComponent',
        data(){
            return{      
                tabs: [
                    {name: 'All Roadmaps', isActive: true},
                    {name: 'Roadmap Details', isActive: false},
                    {name: 'Create New Roadmap', isActive: false},
                ],
                activeTabIndex: 0
            }
        },
        components:{
            AllRoadmapsComponent,
            RoadmapDetailsComponent,
            CreateNewRoadmapComponent
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