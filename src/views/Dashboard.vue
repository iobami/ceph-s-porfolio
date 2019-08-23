<template>
  <div class="qui-dashboard">
    <div class="left-dashboard">
      <div class="dashboard-card-offset">
        <span>
          {{ courses.length }}
        </span>
      </div>
      <div class="dashboard-card">
        <hr>
        <div class="dashboard-card-body">
          <span class="top-span">
            Number of courses currently available on <b>Qui</b>.
          </span>
          <div class="bottom-div">
            <div style="height: 20px;">
              <div>
                <marquee style="" scrollamount="5" scrolldelay="5" direction="left"
                         onmouseover="this.stop()" onmouseout="this.start()">
                  <span v-for="(course, courseKey) in courses" :key="courseKey">
                    {{ course.title }}&nbsp;
                    <span v-if="courseKey < courses.length - 1">|</span> &nbsp;
                  </span>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-dashboard">
      <div class="dashboard-card-offset" style="background-color: #3bd35c">
        <span>
          {{ availableQuestions }}
        </span>
      </div>
      <div class="dashboard-card">
        <hr>
        <div class="dashboard-card-body">
          <span class="top-span">
            Number of questions currently available in
            <b>{{ currentCourse }} ({{ currentCourseCode }})</b>.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import questions from './testData';

export default {
  name: 'dashboard',
  mounted() {
    this.$store.commit('setHideHeader', this.$route.meta.breadcrumb);
    // this.getQuestions();
    this.getCourseIndex();
    this.questionTimer();
  },
  data() {
    return {
      courses: [
        { code: 'ges301', title: 'Entrepreneurship' },
        { code: 'ges102', title: 'African Culture and Civilization' },
        { code: 'csa111', title: 'Neural Network (Pattern Classification)' },
        { code: 'csc312', title: 'Computer Hardware' },
        { code: 'eco472', title: 'Modern Value Theory' },
        { code: 'eco471', title: 'Public Sector Economics' },
      ],
      availableQuestions: 0,
      currentCourse: '',
      currentCourseCode: '',
      courseIndex: 0,
      questionsArray: questions,
      questionCount: 0,
    };
  },
  methods: {
    getQuestions() {
      axios({
        method: 'GET',
        url: process.env.VUE_APP_QUI,
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
      }).then(({ data }) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });
    },
    getQuestionNumber() {
      this.questionCount = 0;
      this.questionsArray.forEach((questionObject) => {
        if (this.courses[this.courseIndex].code === questionObject.course.code) {
          this.questionCount += 1;
        }
        this.currentCourse = this.courses[this.courseIndex].title;
        this.currentCourseCode = this.courses[this.courseIndex].code.toUpperCase();
      });
      this.availableQuestions = this.questionCount;
    },
    getCourseIndex() {
      this.getQuestionNumber();
      this.courseIndex += 1;
      // console.log('counting', this.courseIndex);
      if (this.courseIndex === this.courses.length) {
        this.courseIndex = 0;
      }
    },
    questionTimer() {
      setInterval(this.getCourseIndex, 5000);
    },
  },
};
</script>

<style scoped>
  .qui-dashboard {
    background-color: #F0F0F0;
    padding: 10px;
    min-height: 89vh;
    /*width: 100%;*/
    /*margin: auto;*/
  }
  .qui-dashboard h1 {
    padding: 50px;
  }
  .left-dashboard {
    float: left;
    width: 50%;
  }
  .right-dashboard {
    float: right;
    width: 50%;
  }
  .dashboard-card {
    min-height: 50vh;
    max-height: 50vh;
    background-color: white;
    width: 65%;
    margin: -8em auto;
    border-radius: 5px;
    z-index: 0;
    position: relative;
    box-shadow: 0 2px 8px 2px #B8B8B8;
    padding: 72px 22px 0 22px;
  }
  .dashboard-card hr{
    margin-top: 74px;
    width: 100%;
    border: 0.5px solid #B8B8B8;
  }
  .dashboard-card-offset {
    min-height: 33vh;
    max-height: 33vh;
    background-color: #3C45B0;
    /*background-color: rgba(0,0,0,.87);*/
    width: 33vh;
    margin: 0 auto;
    border-radius: 50%;
    z-index: 1;
    position: relative;
    padding: 14px;
    box-shadow: 0 2px 8px 2px #B8B8B8;
  }
  .dashboard-card-offset span {
    display: block;
    color: #DCDCDC;
    padding: 25px;
    font-size: 94px;
    text-align: center;
    /*margin: auto;*/
  }
  .dashboard-card-body {
    width: 100%;
    margin: 30px auto;
  }
  .dashboard-card-body .top-span {
    display: block;
    padding: 8px;
    text-align: center;
  }
  .dashboard-card-body .bottom-div {
    margin: 24px 22px 4px 22px;
  }
</style>
