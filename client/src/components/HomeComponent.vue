<template>
    <div class="container">
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" v-bind:key="index" v-bind:class="{'is-active': tab.isActive}"><a v-on:click="changeTab(index)">{{ tab.name }}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'HomeComponent',
        data(){
            return{      
                tabs: [
                    {name: 'Dashboard', isActive: true},
                    {name: 'Announcements', isActive: false},
                    {name: 'Recent Activity', isActive: false},
                ],
                activeTabIndex: 0
            }
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