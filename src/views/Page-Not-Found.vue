<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1 style="text-align: center">Opps! Page Not Found bruhh</h1>
    </div>
</template>

<script>
export default {
  // name: 'Home',
  data() {
    return {
      navRoute: [
        {
          name: 'Dashboard', className: ['Create', 'Read', 'Update', 'Delete'],
        },
        {
          name: 'Upload Questions', className: ['Create', 'Read', 'Update', 'Delete'],
        },
        {
          name: 'Create Questions', className: ['Create', 'Read', 'Update', 'Delete'],
        },
        {
          name: 'Features', className: ['Create', 'Read', 'Update', 'Delete'],
        },
      ],
      ifPermission: false,
    };
  },
  methods: {
    showPermissions() {
      this.ifPermission = true;
    },
    submitForm() {
      Object.entries(this.navRoute).forEach((value, key) => {
        if (document.getElementsByClassName(`roles_${key}`)[0].checked === true) {
          console.log(document.getElementsByClassName(`roles_${key}`)[0].value);
          console.log('----------------------------------------------');
          Object.entries(value[1].className).forEach((permission, permissionkey) => {
            if (document.getElementsByClassName(`roles_${key}${permissionkey}`)[0].checked === true) {
              console.log(document.getElementsByClassName(`roles_${key}${permissionkey}`)[0].value);
            }
          });
        }
      });
      // if (document.getElementById('roles').checked === true) {
      //   console.log(document.getElementById('roles').value);
      // } else {
      //   alert('nothing hee');
      // }
    },
    checkBox() {
    },
  },
};
</script>

<style scoped>

</style>
