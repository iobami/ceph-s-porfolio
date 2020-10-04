<template>
  <div id="mySidenav" class="sidenav">
    <div class="profile">
      <!--<img src="../assets/images/Upload/logo.png" alt="ceph's logo">-->
      <p>Ceph</p>
      <p>The Great !</p>
    </div>
      <span id="closeButton" class="closeButton" @click="()=>this.$emit('hide-side-nav')"
      style="display: none;">&times;
      </span>
      <hr>
      <div class="nav-button">
          <!--<div v-for="(routes, routesKey) in navRoute" :key="routesKey">-->
              <!--&lt;!&ndash;<router-link :to="routes.route">&ndash;&gt;-->
              <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
              <!--<button @click="goToRoute(routes.route)"-->
                      <!--v-ripple class="btn" :id="`nav-button_${routesKey}`">-->
                  <!--<span class="nav-route-name" >{{ routes.name }}</span>-->
                  <!--<span class="nav-icon">-->
                          <!--<i :class="routes.className"></i>-->
                  <!--</span>-->
              <!--</button>-->
          <!--</div>-->
          <div id="nav-span-id" class="nav-container">
              <span class="nav-span active" id="nav-span_0" @click="goToRoute('/overview', 0)">
                  Overview
              </span>
              <span class="nav-span" v-for="(routes, routesKey) in navRoute"
                    :id="`nav-span_${routesKey + 1}`"
                    @click="goToRoute(routes.route, (routesKey + 1))" :key="routesKey">
                  {{ routes.name }}
              </span>
              <br>
              <br>
              <a href="https://www.instagram.com/ceph_photography" target="_blank"
                 class="nav-span mdi mdi-instagram"
                 style="font-size: 32px; text-decoration: none"></a>
              <a href="https://www.twitter.com/cephas_ine" target="_blank"
                      class="nav-span mdi mdi-twitter"
                      style="font-size: 32px; padding-top: 0; text-decoration: none"></a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavigation',
  mounted() {
    /* eslint-env jquery */
    this.getActiveRoute();
  },
  data() {
    return {
      navRoute: [
        // {
        //   name: 'Dashboard', route: '/dashboard',
        //   className: 'mdi mdi-view-dashboard qui-dashboard',
        // },
        {
          name: 'Projects', route: '/projects', className: 'mdi mdi-view-dashboard qui-dashboard',
        },
        {
          name: 'Info', route: '/info', className: 'mdi mdi-view-dashboard qui-dashboard',
        },
      ],
      bgImage: 'https://res.cloudinary.com/cephasine/image/upload/v1601817858/test/sidenav-img2_hotwq7.jpg',
    };
  },
  methods: {
    goToRoute(route, routeKey) {
      this.$emit('hide-side-nav');
      if (this.$route.path !== route) {
        $('.nav-span').removeClass('active');
        $(`#nav-span_${routeKey}`).addClass('active');
        this.$router.push(route);
      }
    },
    getActiveRoute() {
      if (this.$route.meta.breadcrumb === undefined) {
        this.$router.push('/overview');
        return;
      }
      this.navRoute.forEach((route, routeKey) => {
        if (this.$route.meta.breadcrumb === route.name) {
          $('.nav-span').removeClass('active');
          $(`#nav-span_${routeKey + 1}`).addClass('active');
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    hr {
        border: 1px solid #A9A9A9;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        width: 90%;
        margin: 12px auto;
    }
  .profile {
    text-align: left;
      margin-top: 15px;
    padding: 10px;
    font-size: 34px;
  }
  .profile img {
    width: 60px;
    height: 62px;
    border-radius: 50%;
    float: left;
  }
  .profile p {
      margin-left: 20px;
      line-height: 18px;
  }
  .sidenav {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
      /*background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))*/
      /*,url('../../src/assets/images/sidenav-img2.jpg');*/
      background-image: url('https://res.cloudinary.com/cephasine/image/upload/h_655/v1601817858/test/sidenav-img2_hotwq7.jpg');
      background-size: cover;
    /*background-color: #333333;*/
      background-color: #F0F0F0;
      color: #000000;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 20px;
    box-shadow: 0 2px 8px 3px #909090;
  }
    .nav-button {
        margin: 42px auto;
        width: 88%;
    }
  .nav-button span {
      font-size: 20px;
  }
  .nav-button .nav-icon {
      float: right;
      font-size: 21px;
  }
  .nav-button button {
    /*padding: 8px 8px 8px 32px;*/
      padding: 10px;
      margin: 12px 0 12px 0;
      text-align: left;
    text-decoration: none;
      text-underline: none;
      border: none;
    /*font-size: 25px;*/
      width: 100%;
    /*color: #f3f3f3;*/
    display: block;
    transition: 0.3s;
      font-size: 16px;
  }
    .nav-button button:not(.badge-info) {
        /*color: #f3f3f3;*/
        background-color: Transparent;
        opacity: 0.9;
    }
    .nav-button button:not(.badge-info):hover {
        /*color: #f3f3f3;*/
        background-color: #606060;
        text-underline: none;
        text-decoration: none;
        opacity: 0.8;
    }
    .nav-button button span {
        color: #f3f3f3;
        text-underline: none;
        text-decoration: none;
    }
    *:focus {
        outline: none;
    }
    .nav-container {
        width: 85%;
        margin: auto;
    }
    .nav-span {
        display: block;
        padding: 5px 5px 5px 8px;
        color: #707070;
        font-size: 15px;
        margin-bottom: 2px;
    }
    .active, .nav-span:hover {
        transition-timing-function: ease-in;
        transition: 0.3s;
        cursor: pointer;
        display: block;
        padding: 5px 5px 5px 8px;
        color: #6a1b9a;
        border-left: 2px solid #6a1b9a;
    }

  .sidenav .closeButton {
    position: absolute;
    top: 0;
    right: 10px;
      /*left: 45px;*/
    font-size: 36px;
    margin-left: 50px;
    cursor: pointer;
  }
    .sidenav .closeButton:hover {
        color: #c0c0c0;
        font-size: 37px;
    }
    @media screen and (min-width: 991px) {
        #mySidenav {
            display: block;
        }
        #closeButton {
            display: none;
        }
    }
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
      .sidenav .closeButton {
          display: block;
      }
  }
    /*@media screen and (max-height: 1000px) {*/
        /*.sidenav {*/
            /*padding-top: 15px;*/
            /*!*width: 350px;*!*/
        /*}*/
        /*.sidenav .closeButton {*/
            /*display: block;*/
        /*}*/
    /*}*/
    @media screen and (max-height: 550px) {
        .sidenav {
            width: 350px;
        }
        .sidenav .closeButton {
            display: block;
        }
    }
</style>
