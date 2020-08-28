<template>
  <div class="info-container">
    <div class="mobile-view">
      <br>
      <br>
      <br>
    </div>
    <div class="profile-container">

      <div class="profile">
        <div class="row">
          <div class="col-sm-6">
            <div class="card text-center card-profile-height">
              <div class="card-body">
                <div class="profile-image">
                  <img src="../../src/assets/images/ceph.jpg" alt="my profile">
                </div>
                <br>
                <h3 style="color: #202020">
                  <span class="" style="display: inline; width: 5%">
                      <i class="align-middle text-dot"></i>
                  </span>
                  <span class="align-middle" style="display: inline; width: 95%">
                    Cephas
                  </span>
                </h3>
                <hr>
                <h5>
                  <span class="" style="display: inline; width: 5%">
                      <i class="align-middle text-dot"></i>
                  </span>
                  <span class="align-middle" style="display: inline; width: 95%">
                    A passionate photographer
                  </span>
                </h5>
                <h5>
                  <span class="" style="display: inline; width: 5%">
                      <i class="align-middle text-dot"></i>
                  </span>
                  <span class="align-middle" style="display: inline; width: 95%">
                    A designer
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <img
                class="card-img-top"
                style="object-fit: cover"
                src="../../src/assets/images/ga-ceph.jpg"
                alt="Card image cap"
                height="180"
              >
              <div class="card-body">
                <h4 class="card-title" style="color: #202020">Address</h4>
                <hr>
                <p class="card-text">
                  University of Ibadan
                </p>
                <h4 class="card-title" style="color: #202020">About Me</h4>
                <hr>
                <p class="card-text">
                  I am a photographer that has a vision to capture moments in the best
                  way possible so that you can have a feel of re-living these moments whenever
                  you view these pictures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'info',
  mounted() {
    this.$store.commit('setHideHeader', this.$route.meta.breadcrumb);
  },
  data() {
    return {
      uploadingImage: false,
    };
  },
  components: {
  },
  methods: {
  },
};
</script>
<style scoped>
  .text-dot {
    height: 7px;
    width: 7px;
    background-color: #707070;
    /*background-image: linear-gradient(180deg,#0061f2,rgba(105,0,199,.8));*/
    border-radius: 50%;
    display: inline-block;
  }
  .info-container {
    background-color: #F0F0F0;
    position: relative;
    padding: 0 14px;
    min-height: 100vh;
  }
  .profile-container {
    /*margin: 0;*/
    /*position: absolute;*/
    /*top: 50%;*/
    /*-ms-transform: translateY(-50%);*/
    /*transform: translateY(-50%);*/
    /*width: 100%;*/
    /*margin: auto;*/
  }
  .profile {
    width: 88%;
    margin: auto;
  }
  .profile-image {
  }
  .profile-image img {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    object-fit: cover;
  }
  .card-profile-height {
    min-height: 480px;
  }
  @media screen and (max-width: 600px) {
    .profile {
      width: 90%;
      margin: auto;
    }
    .mobile-view {
      display: block;
    }
  }
  @media only screen and (min-width: 695px) and (max-width: 999px) {
    .mobile-view {
      display: block;
    }
    .profile-image img {
      width: 240px;
      height: 240px;
    }
  }
  @media only screen and (min-width: 610px) and (max-width: 695px) {
    .mobile-view {
      display: block;
    }
    .profile-image img {
      width: 210px;
      height: 210px;
    }
  }
  @media only screen and (min-width: 576px) and (max-width: 610px) {
    .mobile-view {
      display: block;
    }
    .profile-image img {
      width: 200px;
      height: 200px;
    }
  }
  @media only screen and (max-width: 575px) {
    .profile-image img {
      width: 260px;
      height: 260px;
    }
  }
  @media only screen and (max-width: 355px) {
    .profile-image img {
      width: 220px;
      height: 220px;
    }
  }
  @media only screen and (max-width: 314px) {
    .profile-image img {
      width: 190px;
      height: 190px;
    }
  }
  @media only screen and (max-width: 283px) {
    .profile-image img {
      width: 170px;
      height: 170px;
    }
  }
  @media only screen and (max-width: 265px) {
    .profile-image img {
      width: 140px;
      height: 140px;
    }
  }
  @media only screen and (max-width: 228px) {
    .profile-image img {
      width: 120px;
      height: 120px;
    }
  }
  @media screen and (max-width: 500px) {
    .mobile-view {
      display: block;
    }
  }
</style>
