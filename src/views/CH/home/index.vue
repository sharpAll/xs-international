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
      <span class="divider-title">全境守护，智慧赋能</span>
    </el-divider>
    <div class="divider-info">
      <p>
        赛悉达亚洲安全集团（Xceed Security Asia Group）立足港澳，深耕亚洲，
      </p>
      <p>为您的企业与资产提供顶尖、合规的综合安保解决方案。</p>
      <p>
        无论您身在亚洲何处，无论您面临何种安全挑战，我们都已准备就绪。
      </p>
      <p>
        请联系我们的团队，为您量身定制安全方案：
      </p>
      <p>
        <span class="key_txt"
          >peter.liguozhu@protonmail.com | peter_lee@smartfox-hk.com</span
        >
      </p>
    </div>

    <div class="center-box">
      <div class="bg-box">
        <div class="bg-content">
          <div class="title">亚洲视野，本地经验</div>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >区域网络与协同
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >跨文化风险洞察
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >最佳实践共享
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >融入社区与情报网络
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
          <div class="title">科技驱动，主动防御</div>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >智能监控与分析
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >数据化决策支持
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >大数据威胁预警
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >定期漏洞评估
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
          <div class="title">精英团队，专业认证</div>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >严格背景审查
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
            >强制性持证上岗
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >定制化专业培训
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
