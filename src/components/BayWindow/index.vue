<template>
  <div>
    <div
      id="adbox"
      ref="adbox"
      v-show="showAdbox"
      @mouseenter="enterbox"
      @mouseleave="leavebox"
      @click="dialogVisible = true"
    >
      <div class="content">
        <div class="txt">We're hiring</div>
      </div>
    </div>
    <el-dialog title="We're hiring" :visible.sync="dialogVisible" width="700px">
      <el-scrollbar style="height:400px">
        <div class="dialog-content">
          <p>Job Description: Part-time Investigator</p>
          <p>Location: Europe, Asia and Africa</p>
          <p class="b-title">KEY RESPONSIBILITIES</p>
          <p>
            The part-time investigator will conduct investigations in Europe,
            Asia and Africa. This role will report to headquarters in Hong Kong.
            The investigator will need the creativity, cultural sensitivity and
            a measure of autonomy and judgment necessary to make the
            investigative program effective and successful. She or he will work
            independently and confidentially to promote the investigation
            process. This person will have strong collaborative relationships
            with governments, army, police and other detective organizations in
            the Europe area. The ability to get access to the truth is
            essential.
          </p>
          <p class="b-title">PROFESSIONAL EXPERIENCE / QUALIFICATIONS</p>
          <p>The successful candidate will have:</p>
          <p>(1) Energetic, innovative and self-incentive.</p>
          <p>(2) Work independently and confidentially.</p>
          <p>(3) Local language(s) fluency must be required.</p>
          <p>
            (4) Strong reputation for integrity and ability to balance business
            partnerships with the need to exercise independent judgment.
          </p>
          <p>
            (5) Strong friendly relationships with the local government
            agencies.
          </p>
          <p>
            (6) Former and present detectives and investigative journalists will
            be preferred.
          </p>
          <p class="b-title">EDUCATION</p>
          <p>
            Undergraduate degree from a well-respected institution is required.
          </p>
          <p class="b-title">REWORD</p>
          <p>
            A competitive reword will be provided for each of the investigative
            case. The concrete sum will depend on the hardship and difficulties
            of the investigation.
          </p>
          <p class="b-title">Please note:</p>
          <p>
            Your application may not be considered if you do not provide your
            education and work history, either by: 1) sending a résumé, or 2)
            entering the information into the application fields.
          </p>
          <p>
            The candidate who desires to be a part-time investigator please send
            her (his) résumé to the following email address:
          </p>
          <p class="b-blue">
            peter.liguozhu@protonmail.com | peter_lee@smartfox-hk.com
          </p>
          <!-- <p>
            To promote the communication, please install WeChat on your mobile
            phone and find the following WeChat account to be WeChat friends,
            thus to communicate directly:
          </p>
          <p class="b-blue">wx_13037822739</p> -->
          <p>
            Mobile & WhatsApp:
          </p>
          <p class="b-blue">00852-6367-5529</p>
        </div>
      </el-scrollbar>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">cancel</el-button>
        <el-button type="primary" @click="downloadFile">download</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 50,
      y: 50,
      xin: true,
      yin: true,
      step: 1,
      delay: 10,
      adboxWidth: 0,
      adboxHeight: 0,
      itl: null,
      showAdbox: true,
      dialogVisible: false
    };
  },
  mounted() {
    this.adboxWidth = document.getElementById("adbox").offsetWidth;
    this.adboxHeight = document.getElementById("adbox").offsetHeight;
    this.routeEnterShowAdbox();
  },
  components: {},

  methods: {
    closebox() {
      this.showAdbox = false;
      clearInterval(this.itl);
    },
    leavebox() {
      if (this.showAdbox == false) {
        clearInterval(this.itl);
      } else {
        this.itl = setInterval(this.movebox, this.delay);
      }
    },
    enterbox() {
      clearInterval(this.itl);
    },
    movebox() {
      var L = 0;
      var T = 0;
      var R = document.documentElement.clientWidth - this.adboxWidth; //浏览器显示宽度-adbox宽度，不随滚动条变化而变化
      var B = document.documentElement.clientHeight - this.adboxHeight; //浏览器显示高度-adbox高度，不随滚动条变化而变化
      document.getElementById("adbox").style.left =
        this.x + document.documentElement.scrollLeft + "px"; //adbox初始左+滚动条最左端到浏览器最左端的距离
      document.getElementById("adbox").style.top =
        this.y + document.documentElement.scrollTop + "px"; //adbox初始高+滚动条顶端到浏览器顶端的距离
      this.x = this.x + this.step * (this.xin ? 1 : -1);
      if (this.x < L) {
        this.xin = true;
        this.x = L;
      }
      if (this.x > R) {
        this.xin = false;
        this.x = R;
      }
      this.y = this.y + this.step * (this.yin ? 1 : -1);
      if (this.y < T) {
        this.yin = true;
        this.y = T;
      }
      if (this.y > B) {
        this.yin = false;
        this.y = B;
      }
    },
    routeEnterShowAdbox() {
      this.itl = setInterval(this.movebox, this.delay);
    },
    downloadFile() {
      var link = document.createElement("a");
      link.setAttribute("download", "Candidate profile form.docx");
      link.href = `${process.env.BASE_URL}file/Candidate profile form.docx`;
      link.click();
    }
  }
};
</script>

<style scoped lang="scss">
#adbox {
  width: 150px;
  height: 150px;
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  cursor: pointer;
  border: 1px solid #455098;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  .content {
    margin: 5px;
    height: 140px;
    background: url("../../assets/img/hiring.jpg");
    background-size: cover;
    overflow: hidden;
    .txt {
      font-size: 24px;
      color: #455098;
      text-align: center;
      margin-top: 60px;
      height: 30px;
      line-height: 30px;
      background: #fff;
    }
  }
}
.dialog-content {
  p {
    word-break: normal;
  }
  .b-title {
    font-size: 14px;
    color: #000;
    margin-top: 10px;
  }
  .b-blue {
    color: #455098;
  }
}
</style>
