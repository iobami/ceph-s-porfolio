<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="overview-container">
    <div class="overview-main">
      <template>

          <div class="mobile-view">
              <br>
              <br>
              <br>
          </div>
          <div class="row-container" v-if="allImages.length">
              <div class="column-container">

                  <div v-if="allImages.length">
                      <ImageContainer
                              v-for="(item,itemKey) in uploadsArray[0]"
                              :key="itemKey"
                              v-bind:imageSource="item"
                              v-bind:items="uploadsArray[0][itemKey]"
                      />
                  </div>

              </div>

              <!--right side galleria-->
              <div class="column-container">

                  <div v-if="allImages.length">
                      <ImageContainer
                              v-for="(item1,itemKey1) in uploadsArray[1]"
                              :key="itemKey1"
                              v-bind:imageSource="item1"
                              v-bind:items="uploadsArray[1][itemKey1]"
                      />
                  </div>

              </div>
          </div>

          <div v-else>
              <v-row
                      align="center"
                      justify="center"
                      class="grey lighten-5"
                      style="min-height: 600px;"
              >
                  <v-progress-circular
                          :size="150"
                          :width="5"
                          indeterminate
                          color="purple"
                  ></v-progress-circular>
              </v-row>
          </div>

      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ImageContainer from '../components/ImageContainer.vue';
// import uploads from './getUploads';
// import arrayOfImages from './getUploads';


export default {
  name: 'overview',
  mounted() {
    /* eslint-env jquery */
    this.$store.commit('setHideHeader', this.$route.meta.breadcrumb);
    this.getAllImages();
    this.onKeyDownListener();
  },
  data() {
    return {
      overlay: false,
      hover: false,
      dialog: false,
      progressBar: true,
      imageCara: '../assets/images/Upload/DSC00981.jpg',
      // uploadsArray: arrayOfImages,
      uploadsArray: [],
      allImages: [],
      imgSrc: '',
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
      images: [
        'https://i.ibb.co/F6KSQJS/ceph-photography-20200307-075213-0.jpg',
        'https://i.ibb.co/ZX2DGt6/ceph-photography-20200307-075135-0.jpg',
        'https://i.ibb.co/2W7Kpwk/Cara-2.jpg',
        'https://i.ibb.co/bg5K29c/Cara-1.jpg',
        'https://i.ibb.co/JRY8G5N/cara-4.jpg',
        'https://i.ibb.co/bmvQsMs/cara-3.jpg',
      ],
    };
  },
  components: {
    ImageContainer,
  },
  methods: {
    getAllImages() {
      axios({
        method: 'GET',
        url: process.env.VUE_APP_ALL_IMAGES,
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
      }).then(({ data }) => {
        console.log(data);
        this.allImages = data;
        this.uploadsArray[1] = this.allImages.splice(Math.ceil(data.length / 2));
        this.uploadsArray[0] = this.allImages;
      }).catch(() => {
      });
    },
    onKeyDownListener() {
      document.onkeydown = function checkKeyCode(e) {
        switch (e.keyCode) {
          case 37:
            $('.v-window__prev button').click();
            break;
          case 39:
            $('.v-window__next button').click();
            break;
          default:
            break;
        }
      };
    },
  },
};
</script>

<style scoped>
    .mobile-view {
        display: none;
    }
  .overview-container {
    background-color: #F0F0F0;
    /*height: 100vh;*/
    padding: 24px;
  }
  .overview-main {
  }
  .show-overlay {
    visibility: hidden;
  }
  .overlay-fade-custom:hover .show-overlay {
    transition-timing-function: ease-in-out;
    transition-delay: 2ms;
    transition: visible 4s;
    visibility: visible;
  }
  .row-container {
      display: -ms-flexbox; /* IE10 */
      display: flex;
      -ms-flex-wrap: wrap; /* IE10 */
      flex-wrap: wrap;
      /*padding: 0 4px;*/
  }
  .column-container {
      -ms-flex: 50%; /* IE10 */
      flex: 50%;
      max-width: 50%;
      padding: 10px 10px;
  }

  .column-container img {
      margin-top: 8px;
      vertical-align: middle;
      width: 100%;
  }
  .v-progress-circular {
      margin: 1rem;
  }

  @media screen and (max-width: 600px) {
      .column-container {
          -ms-flex: 100%;
          flex: 100%;
          max-width: 100%;
      }
      .column-container .right {
          margin-top: 8px;
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
