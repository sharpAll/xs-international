<template>
  <div class="block">
    <el-divider>
      <div class="divider-title">Comprehensive coverage of security services map</div>
    </el-divider>
    <div class="center-box">
      <div class="left-box">
        <div class="title">Enterprise facilities and asset protection</div>
        <div class="item-box">
          <p>
            <span class="key_txt">Description: </span>
            Provides comprehensive physical security protection for office buildings, factories, warehouses, data centers, etc., including access control management, patrol duty, video surveillance system integration and duty.
          </p>
          <p>
            <span class="key_txt">Keywords: </span>
            fixed sentry post, perimeter security, access control
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-1.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">High end events and temporary guards</div>
        <div class="item-box">
          <p>
            <span class="key_txt">Description: </span>
            We provide customized short-term security solutions for high-end events such as press conferences, large-scale exhibitions, and celebrity VIP visits, ensuring that the events are foolproof.
          </p>
          <p>
            <span class="key_txt">Keywords: </span>
            personal hygiene, crowd control, emergency plan
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-2.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">Business Investigation and Risk Management</div>
        <div class="item-box">
          <p>
            <span class="key_txt">Description: </span>
            We provide services such as due diligence, internal fraud investigation, and cybersecurity threat assessment to help businesses identify and mitigate potential business risks.
          </p>
          <p>
            <span class="key_txt">Keywords: </span>
            background verification, compliance consulting, risk mitigation
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-3.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">Technology and Intelligent Security Solutions</div>
        <div class="item-box">
          <p>
            <span class="key_txt">Description: </span>
            Design, install, and maintain advanced security systems such as AI intelligent monitoring, intrusion alarm systems, and central control room integration to achieve a perfect combination of technical and human defense.
          </p>
          <p>
            <span class="key_txt">Keywords: </span>
            system integration, remote monitoring, data analysis
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-4.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">Consulting and Training Services</div>
        <div class="item-box">
          <p>
            <span class="key_txt">Description: </span>
            Provide professional training for enterprise security teams and customize business continuity plans, crisis management plans, etc. for enterprises.
          </p>
          <p>
            <span class="key_txt">Keywords: </span>
            safety awareness training, emergency plans, drill guidance
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-5.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.title {
  font-size: 22px;
  padding-left: 30px;
  text-align: left;
  position: relative;
  margin-bottom: 20px;
}
.title::after {
  content: "";
  display: block;
  width: 3px;
  height: 20px;
  background: #606ecd;
  left: 0;
  top: 5px;
  position: absolute;
}
.item-box {
  position: relative;
  line-height: 30px;
  margin-bottom: 30px;
  font-size: 18px;
}
.center-box {
  margin-top: 40px;
  background-color: #f9f9f9;
  padding: 70px 60px 0 70px;
  height: 333px;
  position: relative;
}
.center-box .left-box {
  width: 600px;
}
</style>
