<template>
  <div class="block">
    <el-divider>
      <div class="divider-title">值得托付的安全伙伴</div>
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
        <span class="key_txt">我们的目标：</span>
        致力于为客户提供全方位的风险管理和安全保障解决方案。
      </p>
      <p>
        <span class="key_txt">我们的角色：</span>
        是您的本土化安全专家，也是您通往亚洲市场的可靠桥梁。
      </p>
      <p><span class="key_txt">请让我们帮到您！</span></p>
    </div>
    <div class="center-box">
      <div class="contact-box">
        <div class="box-item" style="height:170px">
          <div class="icon icon-1"></div>
          <div class="info">
            <div class="info-title">地址</div>
            <p>
              11/F,the Whiteney,183 Wai Yip Street,KwunTong, Hongkong
            </p>
            <p style="margin-top:10px">
              11F,No.13-31,Av.De Almedia Ribeiro,Macao
            </p>
          </div>
        </div>
        <div class="box-item">
          <div class="icon icon-2"></div>
          <div class="info">
            <div class="info-title">电话</div>
            <p>
              <!-- <span style="margin-right:20px">+852 5399 2254</span>
              <span>+852 5393 8508</span> -->
              <span>+852 6367 5529</span>
            </p>
          </div>
        </div>
        <div class="box-item" style="height:400px">
          <div class="icon icon-3"></div>
          <div class="info">
            <div class="info-title">邮箱</div>
            <p>peter_lee@smartfox-hk.com</p>
            <p>（尽职调查、犯罪/恐怖/人口拐卖调查）</p>
            <p style="margin-top:10px">candy_chen@smartfox-hk.com</p>
            <p>（公司/个人欺诈调查）</p>
            <p style="margin-top:10px">wolf_qian@smartfox-hk.com</p>
            <p>（婚姻纠纷调查）</p>
            <p style="margin-top:10px">brown_shun@smartfox-hk.com</p>
            <p>（反洗钱调查）</p>
            <p style="margin-top:10px">sergey_lee@smartfox-hk.com</p>
            <p>（经济纠纷调查）</p>
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
