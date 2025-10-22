<template>
  <div class="block">
    <el-divider>
      <div class="divider-title">全面覆蓋的安保服務版圖</div>
    </el-divider>
    <div class="center-box">
      <div class="left-box">
        <div class="title">企業設施與資產保護</div>
        <div class="item-box">
          <p>
            <span class="key_txt">描述：</span>
            為辦公大樓、工廠、倉庫、資料中心等提供全方位的物理安全守護，包括門禁管理、巡邏勤務、視頻監控系統集成與值守。
          </p>
          <p>
            <span class="key_txt">關鍵字： </span>
            固定崗哨、周界安防、存取控制
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-1.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">高端活動與臨時護衛</div>
        <div class="item-box">
          <p>
            <span class="key_txt">描述：</span>
            為新聞發佈會、大型展會、藝員貴賓到訪等高端活動提供定制化的短期安保方案，確保活動萬無一失。
          </p>
          <p>
            <span class="key_txt">關鍵字： </span>
            貼身隨衛、人群控制、應急計畫
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-2.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">商業調查與風險管理</div>
        <div class="item-box">
          <p>
            <span class="key_txt">描述：</span>
            提供盡職調查、內部舞弊調查、網路安全威脅評估等服務，幫助企業識別並規避潜在商業風險。
          </p>
          <p>
            <span class="key_txt">關鍵字： </span>
            背景核實、合規諮詢、風險緩解
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-3.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">科技與智慧安防解決方案</div>
        <div class="item-box">
          <p>
            <span class="key_txt">描述：</span>
            設計、安裝並維護先進的安防系統，如AI智慧監控、入侵報警系統、中央控制室集成，實現技防與人防的完美結合。
          </p>
          <p>
            <span class="key_txt">關鍵字： </span>
            系統集成、遠程監控、資料分析
          </p>
        </div>
      </div>
      <div style="width:500px;position:absolute;right:0;top:0">
        <img width="500px" src="../../../assets/img/range/range-4.png" />
      </div>
    </div>
    <div class="center-box">
      <div class="left-box">
        <div class="title">諮詢與培訓服務</div>
        <div class="item-box">
          <p>
            <span class="key_txt">描述：</span>
            為企業安保團隊提供專業培訓，並為企業定制業務連續性計畫、危機管理預案等。
          </p>
          <p>
            <span class="key_txt">關鍵字： </span>
            安全意識培訓、應急預案、演練指導
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
