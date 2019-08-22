<template>
  <v-app id="app">
    <SideNavigation/>
    <TopNavigation/>
    <router-view
    id="main"
    />
  </v-app>
</template>

<script>
import SideNavigation from './components/SideNavigation.vue';
import TopNavigation from './components/TopNavigation.vue';

export default {
  name: 'App',
  components: {
    SideNavigation,
    TopNavigation,
  },
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/** {*/
  /*margin: 0;*/
/*}*/
  #main {
    margin-left: 250px;
  }
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #D3D3D3;
  height: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #C8C8C8;
}
</style>
