<template>
  <div class="block">
    <el-carousel height="400px">
      <el-carousel-item>
        <div class="carousel-bg bg-1"></div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="carousel-bg bg-2"></div>
      </el-carousel-item>
    </el-carousel>
    <el-divider>
      <span class="divider-title">全境守護，智慧賦能</span>
    </el-divider>
    <div class="divider-info">
      <p>
        賽悉達亞洲安全集團（Xceed Security Asia Group）立足港澳，深耕亞洲，
      </p>
      <p>為您的企業與資產提供頂尖、合規的綜合安保解決方案。</p>
      <p>
        無論您身在亞洲何處，無論您面臨何種安全挑戰，我們都已準備就緒。
      </p>
      <p>
        請聯繫我們的團隊，為您量身定制安全方案：
      </p>
      <p>
        <span class="key_txt"
          >wanida_lim@xceedsecurity.com | christine_lau@xceedsecurity.com</span
        >
      </p>
    </div>

    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">亞洲視野，本地經驗</div>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >區域網絡與協同
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >跨文化風險洞察
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >最佳實踐共亯
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >融入社區與情報網絡
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/home/home-1.png" />
        </div>
      </div>
    </div>

    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content right">
          <div class="title">科技驅動，主動防禦</div>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >智慧監控與分析
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >數據化決策支援
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >大數據威脅預警
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >定期漏洞評估
          </p>
        </div>
        <div style="width:500px;position:absolute;left:0;top:0">
          <img width="500px" src="../../../assets/img/home/home-2.png" />
        </div>
      </div>
    </div>

    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">精英團隊，專業認證</div>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >嚴格背景審查
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >多元化的精英背景
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >強制性持證上崗
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >定制化專業培訓
          </p>
        </div>
        <div style="width:500px;position:absolute;right:0;top:0">
          <img width="500px" src="../../../assets/img/home/home-3.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.carousel-bg {
  width: 100%;
  height: 100%;
}
.carousel-bg.bg-1 {
  background: center url(../../../assets/img/1.png) no-repeat;
  background-size: cover;
}
.carousel-bg.bg-2 {
  background: center url(../../../assets/img/2.png) no-repeat;
  background-size: cover;
}

.bg-box {
  background-color: #f9f9f9;
  position: relative;
  margin-top: 40px;
}
.bg-box .title {
  font-size: 22px;
  padding-left: 30px;
  text-align: left;
  position: relative;
  margin-bottom: 30px;
}
.bg-box .title::after {
  content: "";
  display: block;
  width: 3px;
  height: 20px;
  background: #455098;
  left: 0;
  top: 5px;
  position: absolute;
}
.bg-box .bg-content {
  margin-right: 500px;
  padding: 70px 60px 0 120px;
  height: 333px;
}
.bg-box .bg-content.right {
  margin-right: 0;
  margin-left: 500px;
}
.bg-box .bg-content p {
  line-height: 32px;
  color: #888;
  font-size: 18px;
}
</style>
