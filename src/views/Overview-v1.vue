<template>
    <!-- Photo Grid -->
    <div class="overview-container">

        <div class="mobile-view">
            <br>
            <br>
            <br>
        </div>

        <div v-if="allImages.length">
            <div class="row">
                <div class="column">
                    <div v-for="(image, imageKey) in imageColumn1" :key="imageKey">
                        <img :id="image._id" v-lazy="image.imageUrl" alt="" style="width:100%">
                    </div>
                </div>
                <div class="column">
                    <div v-for="(image2, imageKey2) in imageColumn2" :key="imageKey2">
                        <img :id="image2._id" v-lazy="image2.imageUrl" alt="" style="width:100%">
                    </div>
                </div>
                <div class="column">
                    <div v-for="(image3, imageKey3) in imageColumn3" :key="imageKey3">
                        <img :id="image3._id" v-lazy="image3.imageUrl" alt="" style="width:100%">
                    </div>
                </div>
                <div class="column">
                    <div v-for="(image4, imageKey4) in imageColumn4" :key="imageKey4">
                        <img :id="image4._id" v-lazy="image4.imageUrl" alt="" style="width:100%">
                    </div>
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

    </div>
</template>

<script>
import axios from 'axios';


export default {
  name: 'info',
  mounted() {
    this.$store.commit('setHideHeader', this.$route.meta.breadcrumb);
    this.getAllImages();
  },
  data() {
    return {
      uploadingImage: false,
      allImages: [],
      imageColumn1: [],
      imageColumn2: [],
      imageColumn3: [],
      imageColumn4: [],
    };
  },
  components: {
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
        this.allImages = data;
        if (this.allImages.length) this.splitImagesIntoFourColumns(data);
      }).catch(() => {
      });
    },
    splitImagesIntoFourColumns(data) {
      let index = 0;
      for (index = 0; index < (data.length - 85); index += 1) {
        this.imageColumn1.push(data[index]);
        index += 1;

        if (index === data.length) break;
        this.imageColumn2.push(data[index]);
        index += 1;

        if (index === data.length) break;
        this.imageColumn3.push(data[index]);
        index += 1;

        if (index === data.length) break;
        this.imageColumn4.push(data[index]);
      }
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
        box-sizing: border-box;
    }
    .row {
        display: -ms-flexbox; /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap; /* IE10 */
        flex-wrap: wrap;
        padding: 0 4px;
    }

    /* Create four equal columns that sits next to each other */
    .column {
        -ms-flex: 25%; /* IE10 */
        flex: 25%;
        max-width: 25%;
        padding: 0 4px;
    }

    .column img {
        margin-top: 8px;
        vertical-align: middle;
        width: 100%;
    }

    /* Responsive layout - makes a two column-layout instead of four columns */
    @media screen and (max-width: 800px) {
        .column {
            -ms-flex: 50%;
            flex: 50%;
            max-width: 50%;
        }
    }

    /* Responsive layout - makes the two columns stack on top of each other
     instead of next to each other */
    @media screen and (max-width: 600px) {
        .column {
            -ms-flex: 100%;
            flex: 100%;
            max-width: 100%;
        }
    }
    @media screen and (max-width: 600px) {
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
