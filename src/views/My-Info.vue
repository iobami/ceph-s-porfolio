<template>
  <div class="info-container">
    <div class="mobile-view">
      <br>
      <br>
      <br>
    </div>
    <ImageContainer
            v-if="uploadingImage"
            v-bind:items="items"
    />
    <div class="profile-container">
      <div class="profile">
        <v-card
                class="mx-auto"
                max-height="500"
        >
          <v-row
                  class="mb-6"
                  no-gutters
          >
            <v-col
                    md="3"
                    offset-md="1"
            >
              <div class="my-info">
                <h1>Ceph</h1>
                <br>
                <br>
                <h4>Address</h4>
                <p style="margin-left: 12px">University of Ibadan</p>
                <v-divider></v-divider>
                <h4>About</h4>
                <p style="margin-left: 12px; text-align: justify; font-size: 14px">
                  Cephas is a photographer that has a vision to capture moments in the best
                  way possible so that you can have a feel of re-living these moments whenever
                  you view these pictures.
                </p>
              </div>
            </v-col>
            <v-col
                    md="3"
                    offset-md="3"
            >
              <div class="profile-image">
                <img src="../../src/assets/images/roman.jpg" alt="">
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import ImageContainer from '../components/ImageContainer.vue';

export default {
  name: 'info',
  mounted() {
    this.$store.commit('setHideHeader', this.$route.meta.breadcrumb);
  },
  data() {
    return {
      uploadingImage: false,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    };
  },
  components: {
    ImageContainer,
  },
  methods: {
  },
};
</script>
<style scoped>
  .info-container {
    background-color: #F0F0F0;
    position: relative;
    min-height: 100vh;
  }
  .profile-container {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%;
    /*margin: auto;*/
  }
  .profile {
    width: 82%;
    margin: auto;
  }
  .profile-image {
  }
  .profile-image img {
    width: 350px;
    height: 400px;
  }
  .my-info {
    margin-top: 22px;
  }
  @media screen and (max-width: 600px) {
    .profile {
      width: 90%;
      margin: auto;
    }
    .profile-image img {
      width: 250px;
      height: 300px;
    }
    .my-info {
      margin: 22px;
    }
    .mobile-view {
      display: block;
    }
  }
  @media only screen and (min-width: 584px) and (max-width: 991px) {
    .mobile-view {
      display: block;
    }
  }
</style>
