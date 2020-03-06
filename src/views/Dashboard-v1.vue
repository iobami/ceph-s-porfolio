<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-row>
        <!--left side images-->
        <v-col
                cols="12"
                md="6"
        >

            <v-dialog v-model="dialog" width="600px">
                <template v-slot:activator="{ on }">
                    <v-card fluid v-on="on" class="overlay-fade-custom">
                        <v-img
                                src="../../src/assets/images/background-1.jpg"
                                lazy-src="../../src/assets/images/background-1.jpg"
                                aspect-ratio="1"
                                class="grey lighten-2"
                                max-height="300"
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
                <v-carousel hide-delimiters>
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
                                max-height="350"
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
                <v-carousel hide-delimiters>
                    <v-carousel-item
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
            </v-dialog>

        </v-col>

        <!--right side images-->
        <v-col
                cols="12"
                md="6"
        >
            <v-dialog v-model="dialog" width="600px">
                <template v-slot:activator="{ on }">
                    <v-card fluid v-on="on" class="overlay-fade-custom">
                        <v-img
                                src="../../src/assets/images/nastuh.jpg"
                                lazy-src="../../src/assets/images/nastuh.jpg"
                                aspect-ratio="1"
                                class="grey lighten-2"
                                max-height="450"
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
                <v-carousel hide-delimiters>
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
                                max-height="300"
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
                        progress="true"
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
        </v-col>
    </v-row>
</template>

<script>

export default {
  name: 'overview',
  mounted() {
    // this.carouselDirections();
  },
  data() {
    return {
      overlay: false,
      hover: false,
      dialog: false,
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
    carouselDirections() {
      const nextButton = document.querySelector('.v-window__next button');
      const prevButton = document.querySelector('.v-window__prev button');

      nextButton.click();
      prevButton.click();
    },
  },
};
</script>
