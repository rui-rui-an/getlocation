<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-button type="primary">element的按钮</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'HomeView',
  computed: {
    ...mapState('user', {
      username: 'username'
    })
  },
  created() {
    console.log(this.username);
    console.log(this.$store.state.user.username);
    this.setName('李四');
    this.generateRoutes();
    this.$store.dispatch('permission/generateRoutes');
  },
  methods: {
    ...mapMutations('user', {
      setName: 'setName'
    }),
    ...mapActions('permission', {
      generateRoutes: 'generateRoutes'
    })
  },
  components: {
    HelloWorld
  }
};
</script>
