<template>
    <div class="top-navbar">
        <span class="nav-name">{{ hideHeader }}</span>
        <span @click="()=>this.$emit('display-side-nav')"
              class="showSideNav">&#9776;</span>
        <div class="qui-dashboard">
            <span v-for="(routes, routesKey) in navRoute" :key="routesKey">
                <span @click="goToRoute(routes.route)"
                      :class="`${routes.className} qui-dashboard-logo`">
                </span>
            </span>
            <!--<span @click="goToDashboard()"-->
                  <!--class="mdi mdi-border-color qui-dashboard-logo"></span>-->
            <!--<span @click="goToDashboard()"-->
                  <!--class="mdi mdi-exit-to-app qui-dashboard-logo"></span>-->
            <!--<span @click="goToDashboard()"-->
                  <!--class="mdi mdi-view-dashboard qui-dashboard-logo"></span>-->
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    // this.navName = this.$store.commit('setHideHeader', '');
  },
  data() {
    return {
      navName: '',
      navRoute: [
        {
          name: 'Dashboard', route: '/dashboard', className: 'mdi mdi-view-dashboard qui-dashboard',
        },
        {
          name: 'Upload Questions', route: '/file-upload', className: 'mdi mdi-exit-to-app',
        },
        {
          name: 'Create Questions', route: '/create-question', className: 'mdi mdi-border-color',
        },
        // {
        //   name: 'Features', route: '/features', className: 'mdi mdi-reorder-vertical',
        // },
      ],
    };
  },
  // props: {
  //   showSideNav: {
  //     Boolean,
  //     required: true,
  //   },
  // },
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
    .top-navbar {
        /*margin-left: 250px;*/
        padding: 18px;
        background-color: #F0F0F0;
        color: #606060;
        box-shadow: 0 2px 8px 2px #B8B8B8;
        /*position: relative;*/
        /*top: 0;*/
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 2;
    }
    .nav-name {
        font-size: 24px;
        float: left;
    }
    .showSideNav {
        display: none;
        float: right;
        font-size: 24px;
        cursor: pointer;
    }
    .qui-dashboard {
        float: right;
        /*font-size: 24px;*/
        width: 34%;
        cursor: pointer;
    }
    .qui-dashboard-logo {
        /*float: right;*/
        font-size: 27px;
        margin-left: 16px;
    }
    @media only screen and (min-width: 584px) and (max-width: 991px) {
        .top-navbar .showSideNav {
            display: block;
        }
        .top-navbar .qui-dashboard {
            display: none;
        }
    }
    @media only screen and (min-width: 304px) and (max-width: 584px) {
        .top-navbar .showSideNav {
            display: block;
        }
        .top-navbar .qui-dashboard {
            display: none;
        }
    }
    @media only screen and (max-width: 384px) {
        .top-navbar span {
            font-size: 20px;
        }
        .top-navbar .showSideNav {
            display: block;
        }
        .top-navbar .qui-dashboard {
            display: none;
        }
    }
    @media only screen and (max-width: 245px) {
        .top-navbar .nav-name {
            font-size: 18px;
        }
    }
</style>
