<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform" id="image-container">

    <v-dialog v-model="dialog" width="600px">
        <template v-slot:activator="{ on }">
            <v-card fluid v-on="on" class="overlay-fade-custom">
                <v-img
                        :src="imageSource.imageUrl"
                        :lazy-src="imageSource.imageUrl"
                        class="grey lighten-2"
                        style="width:100%"
                        contain
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
                        <p>See more info</p>
                    </v-overlay>
                </v-fade-transition>

            </v-card>
        </template>
        <v-carousel hide-delimiters
                    :progress="progressBar"
                    progress-color="#6a1b9a"
                    show-arrows-on-hover
                    :show-arrows="!progressBar"
                    active-class
        >
            <!--<v-carousel-item-->
                    <!--v-for="(item,i) in items"-->
                    <!--:key="i"-->
                    <!--:src="item.imageUrl"-->
            <!--&gt;</v-carousel-item>-->

            <v-carousel-item
                    :src="items.imageUrl"
            ></v-carousel-item>
        </v-carousel>
    </v-dialog>
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
    };
  },
  props: [
    'items', 'imageSource',
  ],
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
    .show-overlay {
        visibility: hidden;
    }
    .overlay-fade-custom:hover .show-overlay {
        transition-timing-function: ease-in-out;
        transition-delay: 2ms;
        transition: visible 4s;
        visibility: visible;
    }
</style>
