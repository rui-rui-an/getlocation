<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-button type="primary"> element的按钮 </el-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'HomeView',
  computed: {
    ...mapState('user', {
      name: 'name'
    })
  },
  created () {
    console.log(this.name)
    this.setName('李四')
  },
  methods: {
    ...mapMutations('user', {
      setName: 'SET_NAME'
    })
  },
  components: {
    HelloWorld
  }
}
</script>
