<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="overview-container">
    <div class="overview-main">
      <template>

          <div class="row-container">
              <div class="column-container">
                  <v-dialog v-model="dialog" width="600px">
                      <template v-slot:activator="{ on }">
                          <v-card fluid v-on="on" class="overlay-fade-custom">
                              <v-img
                                      src="../../src/assets/images/nastuh.jpg"
                                      lazy-src="../../src/assets/images/nastuh.jpg"
                                      aspect-ratio="1"
                                      class="grey lighten-2"
                              >
                                  <template v-slot:placeholder>
                                      <v-row
                                              class="fill-height ma-0"
                                              align="center"
                                              justify="center"
                                      >
                                          <v-progress-circular indeterminate color="grey lighten-5">
                                          </v-progress-circular>
                                      </v-row>
                                  </template>
                              </v-img>

                              <v-fade-transition>
                                  <v-overlay
                                          absolute
                                          color="#036358"
                                          class="show-overlay"
                                  >
                                      <v-text>See more info</v-text>
                                  </v-overlay>
                              </v-fade-transition>

                          </v-card>
                      </template>
                      <v-carousel hide-delimiters
                                  :progress="progressBar"
                                  progress-color="#6a1b9a"
                                  show-arrows-on-hover
                      >
                          <v-carousel-item
                                  v-for="(item,i) in items"
                                  :key="i"
                                  :src="item.src"
                          ></v-carousel-item>
                      </v-carousel>
                  </v-dialog>

                  <v-dialog v-model="dialog" width="600px">
                      <template v-slot:activator="{ on }">
                          <v-card fluid v-on="on" class="overlay-fade-custom">
                              <v-img
                                      src="../../src/assets/images/audi-bright-car.jpg"
                                      lazy-src="../../src/assets/images/audi-bright-car.jpg"
                                      aspect-ratio="1"
                                      class="grey lighten-2"
                              >
                                  <template v-slot:placeholder>
                                      <v-row
                                              class="fill-height ma-0"
                                              align="center"
                                              justify="center"
                                      >
                                          <v-progress-circular indeterminate color="grey lighten-5">
                                          </v-progress-circular>
                                      </v-row>
                                  </template>
                              </v-img>

                              <v-fade-transition>
                                  <v-overlay
                                          absolute
                                          color="#036358"
                                          class="show-overlay"
                                  >
                                      <v-text>See more info</v-text>
                                  </v-overlay>
                              </v-fade-transition>

                          </v-card>
                      </template>
                      <v-carousel
                              hide-delimiters
                              :progress="progressBar"
                              progress-color="#6a1b9a"
                              show-arrows-on-hover
                      >
                          <v-carousel-item
                                  v-for="(item,i) in items"
                                  :key="i"
                                  :src="item.src"
                          ></v-carousel-item>
                      </v-carousel>
                  </v-dialog>
              </div>

              <!--right side galleria-->
              <div class="column-container">
                  <v-dialog v-model="dialog" width="600px">
                      <template v-slot:activator="{ on }">
                          <v-card fluid v-on="on" class="overlay-fade-custom">
                              <v-img
                                      src="../../src/assets/images/background-1.jpg"
                                      lazy-src="../../src/assets/images/background-1.jpg"
                                      aspect-ratio="1"
                                      class="grey lighten-2"
                                      style="width:100%"
                              >
                                  <template v-slot:placeholder>
                                      <v-row
                                              class="fill-height ma-0"
                                              align="center"
                                              justify="center"
                                      >
                                          <v-progress-circular indeterminate color="grey lighten-5">
                                          </v-progress-circular>
                                      </v-row>
                                  </template>
                              </v-img>

                              <v-fade-transition>
                                  <v-overlay
                                          absolute
                                          color="#036358"
                                          class="show-overlay"
                                  >
                                      <v-text>See more info</v-text>
                                  </v-overlay>
                              </v-fade-transition>

                          </v-card>
                      </template>
                      <v-carousel hide-delimiters
                                  :progress="progressBar"
                                  progress-color="#6a1b9a"
                                  show-arrows-on-hover>
                          <v-carousel-item
                                  v-for="(item,i) in items"
                                  :key="i"
                                  :src="item.src"
                          ></v-carousel-item>
                      </v-carousel>
                  </v-dialog>

                  <v-dialog v-model="dialog" width="600px">
                      <template v-slot:activator="{ on }">
                          <v-card fluid v-on="on" class="overlay-fade-custom">
                              <v-img
                                      src="../../src/assets/images/roman.jpg"
                                      lazy-src="../../src/assets/images/roman.jpg"
                                      aspect-ratio="1"
                                      class="grey lighten-2"
                                      style="width:100%"
                              >
                                  <template v-slot:placeholder>
                                      <v-row
                                              class="fill-height ma-0"
                                              align="center"
                                              justify="center"
                                      >
                                          <v-progress-circular indeterminate color="grey lighten-5">
                                          </v-progress-circular>
                                      </v-row>
                                  </template>
                              </v-img>

                              <v-fade-transition>
                                  <v-overlay
                                          absolute
                                          color="#036358"
                                          class="show-overlay"
                                  >
                                      <v-text>See more info</v-text>
                                  </v-overlay>
                              </v-fade-transition>

                          </v-card>
                      </template>
                      <v-carousel hide-delimiters
                                  :progress="progressBar"
                                  progress-color="#6a1b9a"
                                  show-arrows-on-hover
                      >
                          <v-carousel-item
                                  v-for="(item,i) in items"
                                  :key="i"
                                  :src="item.src"
                          ></v-carousel-item>
                      </v-carousel>
                  </v-dialog>
              </div>
          </div>

      </template>
    </div>
  </div>
</template>

<script>

export default {
  name: 'overview',
  mounted() {
    /* eslint-env jquery */
    this.onKeyDownListener();
  },
  data() {
    return {
      overlay: false,
      hover: false,
      dialog: false,
      progressBar: true,
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
  methods: {
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
  @media screen and (max-width: 600px) {
      .column-container {
          -ms-flex: 100%;
          flex: 100%;
          max-width: 100%;
      }
      .column-container .right {
          margin-top: 8px;
      }
  }
</style>
