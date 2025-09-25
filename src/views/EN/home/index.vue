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
      <span class="divider-title">Guarding the entire territory, empowering with wisdom</span>
    </el-divider>
    <div class="divider-info">
      <p>
        Xceed Security Asia Group is based in Hong Kong and Macau, deeply rooted in Asia,
      </p>
      <p>Provide top-notch and compliant comprehensive security solutions for your enterprise and assets.</p>
      <p>
        No matter where you are in Asia or what security challenges you face, we are ready.
      </p>
      <p>
        Please contact our team to tailor a security solution for you:
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
          <div class="title">Asian perspective, local experience</div>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Regional Network and Collaboration
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Cross cultural risk insights
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Best Practice Sharing
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Integrate into the community and intelligence network
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
          <div class="title">Technology driven, proactive defense</div>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Intelligent monitoring and analysis
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Data based decision support
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Big data threat warning
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Regular vulnerability assessment
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
          <div class="title">Elite team, professional certification</div>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Strict background check
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Diversified elite background
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Compulsory certification for employment
          </p>
          <p>
            <i
              class="el-icon-check"
              style="color:#606ecd;font-size:20px;margin-right:10px"
            ></i
            >Customized professional training
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
