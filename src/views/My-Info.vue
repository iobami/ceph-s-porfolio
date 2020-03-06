<template>
  <div class="info-container">
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
                <hr>
                <br>
                Address
                <br>
                <br>
                About
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
</style>
