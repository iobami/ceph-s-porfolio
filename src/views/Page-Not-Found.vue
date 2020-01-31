<template>
    <div>
        <h1>Page Not Found bruhh</h1>
        <div style="margin: auto; width: 70%">
            <form v-on:submit.prevent="submitForm()">
                <div v-for="(roles, rolesKey) in navRoute" :key="rolesKey">
                    <input :class="`roles_${rolesKey}`" id="roles"
                           type="checkbox" name="vehicle1" :value="roles.name"
                    @click="showPermissions">&nbsp;{{ roles.name }}<br>
                    <div v-if="ifPermission">
                        <div style="margin-left: 12px"
                             v-for="(permission, permissionKey)
                     in roles.className" :key="permissionKey">
                            <input :class="`roles_${rolesKey}${permissionKey}`" :value="permission"
                                   id="permission" type="checkbox" @change="checkBox">
                            {{ permission }}<br>
                        </div>
                    </div>
                    <hr>
                </div>
                <input type="submit" value="Submit">
            </form>
        </div>
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
