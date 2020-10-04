import Vue from 'vue';

export default {
  methods: {
    errorNotification: (text, title = 'Error!') => {
      Vue.notify({ type: 'error', title, text });
    },
    successNotification: (text, title = 'Successful') => {
      Vue.notify({
        type: 'success', title, text,
      });
    },
    resizeImage(url, size) {
      const [baseUrl, imagePath] = url.split('upload');
      return `${baseUrl}${size ? `upload/${size}` : 'upload'}${imagePath}`;
    },
  },
  computed: {
    hideHeader: function isBusy() {
      return this.$store.getters.getHideHeader;
    },
    errorMessage: function errorMessage() {
      return this.$store.getters.getErrorMessage;
    },
    successMessage: function successMessage() {
      return this.$store.getters.getSuccessMessage;
    },
  },
};
