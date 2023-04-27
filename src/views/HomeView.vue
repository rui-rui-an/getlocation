<template>
  <div class="home">
    <div>
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="姓名" label="姓名" placeholder="姓名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field readonly clickable name="picker" :value="value" label="性别" placeholder="点击选择性别" @click="showPicker = true" />
        <van-field v-model="userphone" name="手机" label="手机" placeholder="手机" :rules="[{ required: true, message: '请填写手机' }]" />
        <van-field v-model="password" type="password" name="身份证" label="身份证" placeholder="身份证" :rules="[{ required: true, message: '请填写身份证' }]" />
        <van-field name="uploader" label="头像上传">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
        <van-field name="uploader" label="位置信息">
          <template #input>
            <div class="get_user_postion" @click="getUserPostion">获取位置信息</div>
            <div v-if="location.length">
              {{ location }}
            </div>
          </template>
        </van-field>

        <van-popup v-model="showPicker" position="bottom">
          <van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
        </van-popup>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      userphone: '',
      password: '',
      switchChecked: false,
      checkbox: false,
      checkboxGroup: [],
      rate: 3,
      slider: 50,
      uploader: [],
      value: '',
      columns: ['男', '女'],
      showPicker: false,
      location: []
    };
  },
  created() {},
  methods: {
    getUserPostion() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          location[0] = position.coords.longitude;
          location[1] = position.coords.latitude;
          console.log(location);
        });
      } else {
        alert('您的设备不支持定位功能');
      }
    },
    onSubmit(values) {
      console.log('submit', values);
      this.$dialog
        .alert({
          // title: '标题',
          message: '填写成功',
          theme: 'round-button'
        })
        .then(() => {
          this.$router.push('/about');
        });
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  .get_user_postion {
    border: 1px solid #0094ff;
  }
}
</style>
