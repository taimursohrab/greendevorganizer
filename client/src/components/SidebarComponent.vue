<template>
  <aside class="menu">
    <p class="menu-label">
      Menu
    </p>
    <ul class="menu-list">
      <li><a v-for="(item, index) in menuItems" v-bind:class="{'is-active': item.isActive}" v-bind:key="index" v-on:click="setActive(index)">{{ item.name }}</a></li>
    </ul>
  </aside>
</template>

<script>

export default {
  name: 'SidebarComponent',
  data(){
    return{
      menuItems: [
        {name: 'Home', isActive: true},
        {name: 'Projects', isActive: false},
        {name: 'Contracts', isActive: false},
        {name: 'Invoices', isActive: false},
        {name: 'Incomes', isActive: false},
        {name: 'Expenses', isActive: false},
        {name: 'Checks', isActive: false},
        {name: 'People', isActive: false},
        {name: 'Companies', isActive: false},
        {name: 'Financial Roadmap', isActive: false}
      ]
    }
  },
  methods: {
    setActive(i){
      this.$parent.screen = i;
      let items = this.menuItems.entries();
      for (const [index,item] of items){
        if (i === index){
          item.isActive = true;
        } 
        else item.isActive = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
