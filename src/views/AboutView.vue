<template>
  <div class="about">
    <h1>已填写完毕</h1>
    <van-button plain type="info" @click="back">返回</van-button>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
