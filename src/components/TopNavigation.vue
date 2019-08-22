<template>
    <div class="top-navbar">
        <span>{{ hideHeader }}</span>
        <span style="float: right">&#9776;</span>
        <span style="float: right">&#9776;</span>
    </div>
</template>

<script>
export default {
  mounted() {
    // this.navName = this.$store.commit('setHideHeader', '');
  },
  data() {
    return {
      navName: '',
    };
  },
  methods: {
  },
};
</script>

<style scoped>
    .top-navbar {
        margin-left: 250px;
        padding: 22px;
        background-color: #F0F0F0;
        color: #606060;
    }
</style>
