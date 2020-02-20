<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{'is-active': tab.isActive}"><a v-on:click="changeTab(index)">{{ tab.name }}</a></li>
            </ul>
        </div>
        <AllProjectsComponent v-if="activeTabIndex === 0" v-on:changeTab="changeTab"/>
        <ProjectDetailsComponent v-if="activeTabIndex === 1" v-bind:activeProjectId="activeProjectId"/>
        <CreateNewProjectComponent v-if="activeTabIndex === 2" v-on:changeTab="changeTab"/>
    </div>
</template>

<script>
import AllProjectsComponent from './ListAll.vue'
import ProjectDetailsComponent from './SingleDetails.vue'
import CreateNewProjectComponent from './CreateNew.vue'

    export default {
        name: 'ProjectsComponent',
        data(){
            return{      
                tabs: [
                    {name: 'All Projects', isActive: true},
                    {name: 'Project Details', isActive: false},
                    {name: 'Create New Project', isActive: false},
                ],
                activeTabIndex: 0,
                activeProjectId: 0
            }
        },
        components:{
            AllProjectsComponent,
            ProjectDetailsComponent,
            CreateNewProjectComponent
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