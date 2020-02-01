<template>
    <div class="new-question-container">
        <!--<v-alert type="success">-->
            <!--I'm a success alert.-->
        <!--</v-alert>-->
        <div class="new-question-card-offset">
            <span>Create Question</span>
            <span style="color: #D3D3D3; font-size: 11px;">Enter a single question</span>
        </div>
        <div class="new-question-card">
            <hr>
            <form v-on:submit.prevent="submitForm()">
                <div class="new-question-card-body">
                    <v-textarea
                            :disabled="loading"
                            label="Enter Question *"
                            required
                            v-model="question"
                            :placeholder="msg"
                            rows="2"
                            row-height="15"
                    ></v-textarea>
                </div>
                <div>
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field
                                    :disabled="loading"
                                    label="Answer *"
                                    v-model="answer"
                                    placeholder="Enter correct answer"
                                    required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                    :disabled="loading"
                                    v-model="courseCode"
                                    label="Course Code"
                                    placeholder="Enter course code"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="3">
                            <v-text-field
                                    :disabled="loading"
                                    v-model="courseTitle"
                                    label="Course Title"
                                    placeholder="Enter course title"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </div>
                <div>
                    <!--<span class="add-option-button" @click="addOption">+</span>-->
                    <v-btn
                            color="#820cc7"
                            dark
                            small
                            bottom
                            left
                            fab
                            @click="addOption"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-row id="optionContainer">
                        <v-col cols="12" sm="6" md="3" v-for="(option, optionKey) in options"
                               :key="optionKey" :id="`optionBox_${optionKey}`">
                            <div>
                                <span class="add-option-button"
                                      style="float: right; margin-top: -7px"
                                      @click="removeOption(optionKey)">-</span>
                                <span style="display: inline">
                                    <v-text-field
                                            :disabled="loading"
                                            label="Option"
                                            placeholder="Enter an option"
                                            :id="`option_${optionKey + 1}`"
                                            required
                                    ></v-text-field>
                                </span>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <div class="submit-btn">
                    <v-btn
                            :loading="loading"
                            :disabled="loading"
                            color="#07118c"
                            class="ma-2"
                            type="submit"
                            outlined
                    >
                        Upload
                        <v-icon right dark>mdi-cloud-upload</v-icon>
                    </v-btn>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'create-question',
  mounted() {
    /* eslint-env jquery */
    this.$store.commit('setHideHeader', this.$route.meta.breadcrumb);
  },
  data() {
    return {
      msg: 'Enter a question',
      question: '',
      answer: '',
      courseCode: '',
      courseTitle: '',
      options: [],
      optionValue: '',
      statusMessage: 'Testing message',
      loading: false,
    };
  },
  methods: {
    addOption() {
      // this.options.push(this.optionValue);
      this.options.push('');
    },
    removeOption(optionKey) {
      $(`#optionBox_${optionKey}`).remove();
    },
    submitForm() {
      this.loading = true;
      const arrayOfOption = [];
      this.options.forEach((option, optionIndex) => {
        const optValue = $(`#option_${optionIndex + 1}`).val();
        if (optValue) {
          arrayOfOption.push(optValue.toLowerCase());
        }
      });
      const courseBody = {
        code: this.courseCode.toLowerCase(),
        title: this.courseTitle.toLowerCase(),
      };
      const questionsBody = {
        question: this.question.toLowerCase(),
        options: arrayOfOption,
        answer: this.answer.toLowerCase(),
        course: courseBody,
      };
      const addQuestionUrl = '/question/add';
      axios({
        method: 'POST',
        url: process.env.VUE_APP_QUI + addQuestionUrl,
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        data: JSON.stringify(questionsBody),
      }).then(({ data }) => {
        if (data.status) {
          this.question = '';
          this.answer = '';
          this.options = [];
          this.successNotification(data.message);
        } else {
          this.errorNotification(data.message);
        }
      }).catch(() => {
        this.errorNotification('Please check your network and try again');
      })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
    .new-question-container {
        background-color: #F0F0F0;
        min-height: 100vh;
        padding-top: 72px;
        z-index: 0;
        /*padding-bottom: 72px;*/
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
        background-image: linear-gradient(to bottom right, #07118c, #5f68d4);
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
    .submit-btn {
        padding: 6px 0;
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
