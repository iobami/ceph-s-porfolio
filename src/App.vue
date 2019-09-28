<template>
  <v-app id="app">
    <SideNavigation
    class="side-nav"
    v-on:hide-side-nav="hideSideNav"
    />
    <TopNavigation
    class="top-nav"
    v-on:display-side-nav="displaySideNav"
    />
    <router-view
    v-on:hide-side-nav="hideSideNav"
    @click="hideSideNav"
    id="main"
    />
  </v-app>
</template>

<script>
import SideNavigation from './components/SideNavigation.vue';
import TopNavigation from './components/TopNavigation.vue';

export default {
  name: 'App',
  mounted() {
    /* eslint-env jquery */
    this.onResize();
  },
  data() {
    return {
      // showSideNav: true,
    };
  },
  components: {
    SideNavigation,
    TopNavigation,
  },
  methods: {
    onResize() {
      $(window).on('resize', () => {
        if ($(window).width() > 990) {
          document.getElementById('mySidenav').style.display = 'block';
          document.getElementById('closeButton').style.display = 'none';
        } else {
          document.getElementById('mySidenav').style.display = 'none';
        }
      });
    },
    displaySideNav() {
      document.getElementById('mySidenav').style.display = 'block';
      document.getElementById('closeButton').style.display = 'block';
      // document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    },
    hideSideNav() {
      // if ($('#statusBar').is(':visible')) {
      //   $('.form_login').css('margin-top', '-80px');
      // }
      if ($(window).width() < 990) {
        document.getElementById('mySidenav').style.display = 'none';
      }
      // document.body.style.backgroundColor = 'white';
    },
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
    padding-top: 9em;
    padding-bottom: 8em;
  }
.top-nav{
  margin-left: 250px;
}
/*.side-nav {*/
  /*width: 250px;*/
/*}*/
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
@media only screen and (min-width: 991px) {
    #main {
        margin-left: 250px;
    }
    #mySidenav {
        display: block;
    }
    .top-nav {
        margin-left: 250px;
    }
}
@media only screen and (min-width: 584px) and (max-width: 991px) {
  #main {
    margin-left: 0;
  }
  .side-nav {
    display: none;
  }
  .top-nav {
    margin-left: 0;
  }
}
@media only screen and (min-width: 204px) and (max-width: 584px) {
  #main {
    margin-left: 0;
  }
  .side-nav {
    display: none;
  }
  .top-nav {
    margin-left: 0;
  }
}
@media only screen and (max-width: 204px) {
  #main {
    margin-left: 0;
  }
  .side-nav {
    display: none;
  }
  .top-nav {
    margin-left: 0;
  }
}
</style>
