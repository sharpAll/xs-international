<template>
  <footer class="footer">
    <template v-if="curLanguage == 'CH'">
      <div class="content">
        <div class="logo">
          <img src="../../assets/img/title.png" width="60px" />
        </div>
        <div class="map" style="left: 260px;">
          <div class="title">网站地图</div>
          <ul>
            <li @click="$router.push('/CH/home')">首页</li>
            <li @click="$router.push('/CH/range')">服务范畴</li>
            <li @click="$router.push('/CH/vision')">优势与愿景</li>
            <li @click="$router.push('/CH/aboutUs')">关于我们</li>
          </ul>
        </div>
      </div>
    </template>
    <template v-else-if="curLanguage == 'EN'">
      <div class="content">
        <div class="logo">
          <img src="../../assets/img/title.png" width="60px" />
        </div>
        <div class="map">
          <div class="title">Website Map</div>
          <ul>
            <li @click="$router.push('/EN/home')">Profile</li>
            <li @click="$router.push('/EN/range')">Services Covered</li>
            <li @click="$router.push('/EN/vision')">Vision and Advantages</li>
            <li @click="$router.push('/EN/aboutUs')">About us</li>
          </ul>
        </div>
      </div>
    </template>
    <div class="right">
      Copyright 2020 Xceed Security Asia Group All Rights Reserved.
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    curLanguage() {
      return this.$store.state.language.curLan;
    }
  },
  components: {},

  methods: {}
};
</script>
<style scoped>
.footer {
  background: #eee;
}
.footer .content {
  width: 1200px;
  margin: auto;
  height: 70px;
  position: relative;
  overflow: hidden;
}
.footer .content .logo {
  position: absolute;
  top: 10px;
  left: 0;
}
.footer .content .map {
  position: absolute;
  top: 15px;
  left: 260px;
}
.footer .content .map .title {
  font-size: 14px;
  color: #333;
  padding-left: 20px;
  position: relative;
}
.footer .content .map .title::after {
  position: absolute;
  content: "";
  display: block;
  width: 3px;
  height: 12px;
  background: #666;
  top: 3px;
  left: 0;
}
.footer .content .map ul {
  margin-top: 10px;
}
.footer .content .map ul li {
  float: left;
  margin-right: 20px;
  cursor: pointer;
}
.footer .content .map ul li:hover {
  color: #606ecd;
}
.footer .right {
  color: #aaa;
  text-align: center;
}
</style>
