<template>
  <div id="mySidenav" class="sidenav">
    <div class="profile">
      <img src="../assets/images/qui-logo.jpeg" alt="qui logo">&nbsp;
      <span>Qui</span>
    </div>
      <hr>
    <div class="nav-button">
        <router-link to="/dashboard">
            <button class="active btn badge-info">
                <span>
                    <i class="mdi mdi-view-dashboard"></i>
                </span>
                <span>Dashboard</span>
            </button>
        </router-link>
        <router-link to="/file-upload">
            <button class="btn badge-info">
                <span><i class="fa fa-address-card-o"></i></span>
                <span>Upload Questions</span>
            </button>
        </router-link>
        <router-link to="/about">
            <button class="btn badge-info">
                <span><i class="fa fa-address-card-o"></i></span>
                <span>Clients</span>
            </button>
        </router-link>
        <router-link to="/about">
            <button class="btn badge-info">
                <span><i class="fa fa-address-card-o"></i></span>
                <span>Features</span>
            </button>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNavigation',
  mounted() {
    /* eslint-env jquery */
    // $('.nav-button').click(function () {
    //   // $('.nav-button button').removeClass('active');
    //   // $(".tab").addClass("active"); // instead of this do the below
    //   $(this).addClass('active');
    // });
  },
  methods: {
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
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #333333;
    color: #f3f3f3;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 20px;
    box-shadow: 0 2px 8px 3px #606060;
  }
  .nav-button button {
    /*padding: 8px 8px 8px 32px;*/
      padding: 8px;
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
  }
    .nav-button button:hover {
        background-color: #606060;
        text-underline: none;
        text-decoration: none;
        opacity: 0.9;
    }
    .nav-button button:not(.active) {
        /*color: #f3f3f3;*/
        background-color: Transparent;
        opacity: 0.9;
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
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  .nav-button {
      margin: 42px auto;
      width: 80%;
  }

  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
</style>
