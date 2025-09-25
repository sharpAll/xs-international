<template>
  <div class="block">
    <el-divider>
      <div class="divider-title">全面覆盖的安保服务版图</div>
    </el-divider>
    <div class="center-box">
      <div class="left-box">
        <div class="title">企业设施与资产保护</div>
        <div class="item-box">
          <p>
            <span class="key_txt">描述：</span>
            为写字楼、工厂、仓库、数据中心等提供全方位的物理安全守护，包括门禁管理、巡逻勤务、视频监控系统集成与值守。
          </p>
          <p>
            <span class="key_txt">关键词： </span>
            固定岗哨、周界安防、访问控制
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-1.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">高端活动与临时护卫</div>
        <div class="item-box">
          <p>
            <span class="key_txt">描述：</span>
            为新闻发布会、大型展会、明星贵宾到访等高端活动提供定制化的短期安保方案，确保活动万无一失。
          </p>
          <p>
            <span class="key_txt">关键词： </span>
            贴身随卫、人群控制、应急计划
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-2.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">商业调查与风险管理</div>
        <div class="item-box">
          <p>
            <span class="key_txt">描述：</span>
            提供尽职调查、内部舞弊调查、网络安全威胁评估等服务，帮助企业识别并规避潜在商业风险。
          </p>
          <p>
            <span class="key_txt">关键词： </span>
            背景核实、合规咨询、风险缓解
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-3.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">技术与智能安防解决方案</div>
        <div class="item-box">
          <p>
            <span class="key_txt">描述：</span>
            设计、安装并维护先进的安防系统，如AI智能监控、入侵报警系统、中央控制室集成，实现技防与人防的完美结合。
          </p>
          <p>
            <span class="key_txt">关键词： </span>
            系统集成、远程监控、数据分析
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-4.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">咨询与培训服务</div>
        <div class="item-box">
          <p>
            <span class="key_txt">描述：</span>
            为企业安保团队提供专业培训，并为企业定制业务连续性计划、危机管理预案等。
          </p>
          <p>
            <span class="key_txt">关键词： </span>
            安全意识培训、应急预案、演练指导
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
