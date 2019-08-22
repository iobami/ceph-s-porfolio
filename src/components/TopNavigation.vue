<template>
    <div class="top-navbar">
        <span>{{ navName }}</span>
        <span style="float: right">&#9776;</span>
        <span style="float: right">&#9776;</span>
    </div>
</template>

<script>
export default {
  mounted() {
  },
  data() {
    return {
      navName: 'Upload Questions',
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
