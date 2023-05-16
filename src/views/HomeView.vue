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
        <van-field name="uploader" label="js自带获取位置信息">
          <template #input>
            <van-button class="get_user_postion" @click="getUserPostion">js自带获取位置信息</van-button>
          </template>
        </van-field>
        <div v-if="location.length">
          {{ location }}
        </div>
        <van-field name="uploader" label="百度地图获取位置信息">
          <template #input>
            <!-- <van-button type="primary">Primary</van-button> -->
            <van-button class="get_user_postion" @click="getUserPostionFromBaidu">百度地图获取位置信息</van-button>
          </template>
        </van-field>
        <div v-if="Baidulocation.length">{{ currCity }} {{ Baidulocation }}</div>
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
      location: [],
      currCity: '',
      Baidulocation: [],
      isShow: true
    };
  },
  created() {},
  mounted() {},
  methods: {
    getUserPostionFromBaidu() {
      this.$toast.loading({
        duration: 0, // continuous display toast
        message: 'Loading...',
        forbidClick: true
      });
      // 获取当前城市
      const geolocation = new window.BMap.Geolocation();
      geolocation.getCurrentPosition((r) => {
        console.log(r);
        const city = r.address.city; // 返回当前城市
        this.currCity = city;
        this.$set(this.Baidulocation, 0, r.longitude);
        this.$set(this.Baidulocation, 1, r.latitude);
        this.$toast.clear();
      });
    },
    getUserPostion() {
      this.$toast.loading({
        message: 'Loading...',
        forbidClick: true
      });
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            this.location[0] = position.coords.longitude;
            this.location[1] = position.coords.latitude;
            this.$set(this.location, 0, position.coords.longitude);
            this.$set(this.location, 1, position.coords.latitude);
            this.$toast.clear();
          });
          console.log(this.location);
        } else {
          alert('您的设备不支持定位功能');
          this.$toast.clear();
        }
      } catch (error) {
        console.log(error);
        this.$toast.clear();
        this.$toast(error);
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
