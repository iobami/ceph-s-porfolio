<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1 style="text-align: center">Opps! Coming through soon</h1>
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
  },
};
</script>

<style scoped>

</style>
