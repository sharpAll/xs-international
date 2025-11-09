<template>
  <div class="block">
    <el-divider>
      <div class="divider-title">A trustworthy security partner</div>
    </el-divider>
    <div class="center-box">
      <img
        style="margin:auto"
        width="100%"
        src="../../../assets/img/aboutUs/contact-1.png"
      />
    </div>
    <div class="contact-info" style="text-align:center">
      <p>
        <span class="key_txt">Our goal: </span>
        to provide customers with comprehensive risk management and security solutions.
      </p>
      <p>
        <span class="key_txt">Our role: </span>
        to be your local security expert and a reliable bridge to the Asian market.
      </p>
      <p><span class="key_txt">Please let us help you!</span></p>
    </div>
    <div class="center-box">
      <div class="contact-box">
        <div class="box-item" style="height:170px">
          <div class="icon icon-1"></div>
          <div class="info">
            <div class="info-title">address</div>
            <p>
              11/F,the Whiteney,183 Wai Yip Street,KwunTong, Hongkong
            </p>
            <p style="margin-top:10px">
              11F,No.13-31,Av.De Almedia Ribeiro,Macao
            </p>
          </div>
        </div>
        <!-- <div class="box-item">
          <div class="icon icon-2"></div>
          <div class="info">
            <div class="info-title">telephone</div>
            <p>
              <span style="margin-right:20px">+852 5399 2254</span>
              <span>+852 5393 8508</span>
              <span>+852 6367 5529</span>
            </p>
          </div>
        </div> -->
        <div class="box-item" style="height:400px">
          <div class="icon icon-3"></div>
          <div class="info">
            <div class="info-title">Email</div>
            <p>wanida_lim@xceedsecurity.com</p>
            <p>(Enterprise facilities and asset protection)</p>
            <p style="margin-top:10px">christine_lau@xceedsecurity.com</p>
            <p>(High end events and temporary guards)</p>
            <p style="margin-top:10px">anna_lim_su_en@xceedsecurity.com</p>
            <p>(Business Investigation and Risk Management)</p>
            <p style="margin-top:10px">rosara_tseung@xceedsecurity.com</p>
            <p>(Technology and Intelligent Security Solutions)</p>
            <p style="margin-top:10px">oscar_leong_cheong@xceedsecurity.com</p>
            <p>(Consulting and Training Services)</p>
          </div>
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
.contact-info {
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  margin: 20px;
  color: #666;
}
.contact-box {
  margin: auto;
  width: 660px;
}
.contact-box .box-item {
  position: relative;
  background-color: #f9f9f9;
  height: 120px;
  margin-bottom: 30px;
}
.contact-box .box-item .info {
  padding-left: 220px;
  padding-right: 50px;
  color: #455098;
  font-size: 17px;
}
.contact-box .box-item .info .info-title {
  padding: 30px 0 5px;
  font-size: 20px;
  color: #18181a;
}
.contact-box .box-item .icon {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 20px;
  left: 100px;
}
.contact-box .box-item .icon.icon-1 {
  background: url("../../../assets/img/aboutUs/定位.svg");
  background-size: cover;
}
.contact-box .box-item .icon.icon-2 {
  background: url("../../../assets/img/aboutUs/电话.svg");
  background-size: cover;
}
.contact-box .box-item .icon.icon-3 {
  background: url("../../../assets/img/aboutUs/短信.svg");
  background-size: cover;
}
.center-box {
  margin-top: 40px;
}
</style>
