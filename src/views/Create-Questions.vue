<template>
    <div class="new-question-container">
        <div class="new-question-card-offset">
            <span>Create Question</span>
            <span style="color: #D3D3D3; font-size: 11px;">Enter a single question</span>
        </div>
        <div class="new-question-card">
            <hr>
            <div class="new-question-card-body">
                <v-textarea
                        label="Enter Question *"
                        required
                        :value="question"
                        :placeholder="msg"
                        rows="2"
                        row-height="15"
                ></v-textarea>
            </div>
            <div>
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <v-text-field
                                label="Answer *"
                                placeholder="Enter correct answer"
                                required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field
                                label="Course Code"
                                placeholder="Enter course code"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                        <v-text-field
                                label="Course Title"
                                placeholder="Enter course title"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </div>
            <div>
                <span class="add-option-button" @click="addOption">+</span>
                <v-row>
                    <v-col cols="12" sm="6" md="3" v-for="(option, optionKey) in options"
                           :key="optionKey">
                        <span class="add-option-button" style="float: right; margin-top: -7px"
                              @click="removeOption(optionKey)">-</span>
                        <span style="display: inline">
                            <v-text-field
                                    :label="`Option ${option}`"
                                    placeholder="Enter an option"
                                    :value="optionValue"
                            ></v-text-field>
                        </span>
                    </v-col>
                </v-row>
            </div>
            <div style="clear: both; text-align: center">
                <!--<button class="btn badge-info">Upload</button>-->
                <!--<v-btn color="success">Success</v-btn>-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'create-question',
  mounted() {
    this.$store.commit('setHideHeader', this.$route.meta.breadcrumb);
  },
  data() {
    return {
      msg: 'Enter a question',
      question: '',
      options: [],
      optionValue: '',
    };
  },
  methods: {
    addOption() {
      this.options.push(this.optionValue);
    },
    removeOption(optionKey) {
      // for( let i = 0; i < this.options.length; i++){
      //   if ( this.options[i] === this.optionValue) {
      //     this.options.splice(i, 1);
      //   }
      // }
      this.options.splice(optionKey, 1);
      // console.log(this.options);
    },
  },
};
</script>

<style scoped>
    .new-question-container {
        background-color: #F0F0F0;
        min-height: 100vh;
        padding-top: 72px;
    }
    .new-question-card {
        min-height: 50vh;
        /*max-height: 50vh;*/
        background-color: white;
        width: 65%;
        margin: -69px auto;
        border-radius: 5px;
        z-index: 0;
        position: relative;
        box-shadow: 0 2px 8px 2px #B8B8B8;
        padding: 72px 22px 0 22px;
    }
    .new-question-card-offset {
        min-height: 13vh;
        max-height: 13vh;
        background-color: #3C45B0;
        /*background-color: rgba(0,0,0,.87);*/
        width: 63%;
        margin: 0 auto;
        border-radius: 5px;
        z-index: 1;
        position: relative;
        padding: 14px;
        box-shadow: 0 2px 8px 2px #B8B8B8;
    }
    .new-question-card-offset span {
        display: block;
        color: #DCDCDC;
        padding: 4px;
    }
    .add-option-button {
        color: #3C45B0;
        font-size: 21px;
        font-weight: bold;
        cursor: pointer;
    }
    @media only screen and (min-width: 606px) and (max-width: 991px) {
        .new-question-card {
            min-height: 50vh;
            width: 85%;
            margin: -69px auto;
        }
        .new-question-card-offset {
            min-height: 13vh;
            max-height: 13vh;
            background-color: #3C45B0;
            width: 83%;
            margin: 0 auto;
        }
    }
    @media only screen and (min-width: 204px) and (max-width: 606px) {
        .new-question-card {
            min-height: 50vh;
            width: 92%;
            margin: -69px auto;
        }
        .new-question-card-offset {
            min-height: 13vh;
            max-height: 13vh;
            background-color: #3C45B0;
            width: 90%;
            margin: 0 auto;
        }
    }
    @media only screen and (max-width: 482px) {
    }
    @media only screen and (max-width: 384px) {
    }
</style>
