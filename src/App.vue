<template>
  <v-app id="app">
    <notifications />
    <SideNavigation
    class="side-nav"
    v-on:hide-side-nav="hideSideNav"
    />
    <TopNavigation
            class="top-nav"
            v-on:display-side-nav="displaySideNav"
    />
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
        if ($(window).width() > 993) {
          document.getElementById('mySidenav').style.display = 'block';
          document.getElementById('closeButton').style.display = 'none';
          document.getElementById('top-navbar').style.display = 'none';
        } else {
          document.getElementById('mySidenav').style.display = 'none';
          document.getElementById('top-navbar').style.display = 'block';
        }
      });
    },
    displaySideNav() {
      // document.getElementById('mySidenav').style.display = 'block';
      $('#mySidenav').slideToggle();
      document.getElementById('closeButton').style.display = 'block';
    },
    hideSideNav() {
      if ($(window).width() < 1000) {
        // document.getElementById('mySidenav').style.display = 'none';
        $('#mySidenav').slideToggle();
      }
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
  }
.top-nav{
  margin-left: 250px;
}
/*.side-nav {*/
  /*width: 250px;*/
/*}*/
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: grey;
  height: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: darkgrey;
}
@media only screen and (min-width: 992px) {
    #main {
        margin-left: 250px;
    }
    #mySidenav {
        display: block;
    }
    .top-nav {
        margin-left: 250px;
      display: none;

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
