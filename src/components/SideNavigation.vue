<template>
  <div id="mySidenav" class="sidenav">
    <div class="profile">
      <img src="../assets/images/qui-logo.jpeg" alt="qui logo">&nbsp;
      <span>Qui</span>
    </div>
      <span id="closeButton" class="closeButton" @click="()=>this.$emit('hide-side-nav')"
      style="display: none;">&times;
      </span>
      <hr>
      <div class="nav-button">
          <div v-for="(routes, routesKey) in navRoute" :key="routesKey">
              <!--<router-link :to="routes.route">-->
              <!--</router-link>-->
              <button @click="goToRoute(routes.route)"
                      v-ripple class="btn" :id="`nav-button_${routesKey}`">
                  <span class="nav-route-name" >{{ routes.name }}</span>
                  <span class="nav-icon">
                          <i :class="routes.className"></i>
                  </span>
              </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavigation',
  mounted() {
    /* eslint-env jquery */
    $('#nav-button_0').addClass('badge-info');
    $('.nav-button button').click((e) => {
      $('.nav-button button').removeClass('badge-info');
      // $(".tab").addClass("active"); // instead of this do the below
      const currentId = e.currentTarget.id.split('_');
      $(`#nav-button_${currentId[1]}`).addClass('badge-info');
    });
  },
  data() {
    return {
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
  methods: {
    goToRoute(route) {
      this.$emit('hide-side-nav');
      this.$router.push(route);
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
    margin: auto auto 52px auto;
    text-align: center;
    padding: 10px;
    font-size: 24px;
    width: 45%;
  }
  .profile img {
    width: 60px;
    height: 62px;
    border-radius: 50%;
    float: left;
  }
  .profile span {
    float: right;
    margin-top: -10px;
  }
  .sidenav {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5))
      ,url('../../src/assets/images/background-1.jpg');
      background-size: cover;
    background-color: #333333;
    color: #f3f3f3;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 20px;
    box-shadow: 0 2px 8px 3px #606060;
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

  /*.sidenav a:hover {*/
    /*color: #f1f1f1;*/
  /*}*/

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
