<template>
    <div class="top-navbar">
        <span class="nav-name">{{ hideHeader }}</span>
        <span @click="()=>this.$emit('display-side-nav')"
              class="showSideNav">&#9776;</span>
        <span @click="goToDashboard()"
              class="mdi mdi-view-dashboard qui-dashboard"></span>
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
    };
  },
  // props: {
  //   showSideNav: {
  //     Boolean,
  //     required: true,
  //   },
  // },
  methods: {
    goToDashboard() {
      this.$router.push('/dashboard');
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
        z-index: 1;
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
        font-size: 24px;
        width: 22%;
        cursor: pointer;
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
