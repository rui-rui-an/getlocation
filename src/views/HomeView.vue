<template>
  <div class="home">
    <div>
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <van-field name="switch" label="开关">
          <template #input>
            <van-switch v-model="switchChecked" size="20" />
          </template>
        </van-field>
        <van-field name="checkbox" label="复选框">
          <template #input>
            <van-checkbox v-model="checkbox" shape="square" />
          </template>
        </van-field>
        <van-field name="checkboxGroup" label="复选框组">
          <template #input>
            <van-checkbox-group v-model="checkboxGroup" direction="horizontal">
              <van-checkbox name="1" shape="square">复选框 1</van-checkbox>
              <van-checkbox name="2" shape="square">复选框 2</van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
        <van-field name="rate" label="评分">
          <template #input>
            <van-rate v-model="rate" />
          </template>
        </van-field>
        <van-field name="slider" label="滑块">
          <template #input>
            <van-slider v-model="slider" />
          </template>
        </van-field>
        <van-field name="uploader" label="文件上传">
          <template #input>
            <van-uploader v-model="uploader" />
          </template>
        </van-field>
        <van-field readonly clickable name="picker" :value="value" label="选择器" placeholder="点击选择城市" @click="showPicker = true" />
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
      password: '',
      switchChecked: false,
      checkbox: false,
      checkboxGroup: [],
      rate: 3,
      slider: 50,
      uploader: [{ url: 'https://img01.yzcdn.cn/vant/leaf.jpg' }],
      value: '',
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      showPicker: false
    };
  },
  methods: {
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
