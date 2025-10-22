<template>
  <header class="header">
    <template v-if="curLanguage == 'CHT'">
      <div class="logo">
        <div class="container u-cb">
          <a href="#" class="u-fl">
            <img src="../../assets/img/title.png" width="60px" alt />
            <span class="title-1">賽悉達亞洲安全集團</span>
          </a>
          <div class="Language u-fr">
            <a class="active" @click="switchLanguage('CHT')">中文</a>
            <a @click="switchLanguage('EN')">English</a>
          </div>
        </div>
      </div>
      <nav class="nav">
        <ul class="container menu-box u-cb">
          <router-link to="/CHT/home" tag="li">
            <span class="menu-item">首頁</span>
          </router-link>

          <router-link to="/CHT/range" tag="li">
            <span class="menu-item">服務範疇</span>
          </router-link>

          <router-link to="/CHT/vision" tag="li">
            <span class="menu-item">優勢與願景</span>
          </router-link>

          <router-link to="/CHT/aboutUs" tag="li">
            <span class="menu-item">關於我們</span>
          </router-link>
        </ul>
      </nav>
    </template>
    <template v-else-if="curLanguage == 'EN'">
      <div class="logo">
        <div class="container u-cb">
          <a href="#" class="u-fl">
            <img src="../../assets/img/title.png" width="60px" alt />
            <span class="title-1">Xceed Security Asia Group</span>
          </a>
          <div class="Language u-fr">
            <a @click="switchLanguage('CHT')">中文</a>
            <a class="active" @click="switchLanguage('EN')">English</a>
          </div>
        </div>
      </div>
      <nav class="nav">
        <ul class="container menu-box u-cb">
          <router-link to="/EN/home" tag="li">
            <span class="menu-item">Profile</span>
          </router-link>

          <router-link to="/EN/range" tag="li">
            <span class="menu-item">Services Covered</span>
          </router-link>

          <router-link to="/EN/vision" tag="li">
            <span class="menu-item">Vision and Advantages</span>
          </router-link>

          <router-link to="/EN/aboutUs" tag="li">
            <span class="menu-item">About us</span>
          </router-link>
        </ul>
      </nav>
    </template>
  </header>
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

  methods: {
    switchLanguage(language) {
      if (this.curLanguage !== language) {
        this.$store.dispatch("setLanguage", language);
        let path = this.$router.currentRoute.path;
        let pathArray = path.split("/");
        pathArray[1] = language;
        this.$router.push(pathArray.join("/"));
      }
    }
  }
};
</script>

<style scoped>
.logo {
  padding-top: 20px;
}
.container {
  width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.container .title-1 {
  color: #333;
  font-size: 28px;
  vertical-align: 22px;
  margin-left: 10px;
}
.logo .Language {
  font-family: arial;
  margin-top: 10px;
}
.logo .Language a.en {
  margin-left: -1px;
}
.logo .Language a {
  border: 1px solid #dcdfe6;
  float: left;
  padding: 5px 10px;
  font-size: 14px;
  color: #343c48;
  transition: 0.5s;
}
.logo .Language a.active {
  border: 1px solid #455098;
  background: #455098;
  color: #fff;
  position: relative;
  z-index: 2;
}
.nav {
  border-bottom: 4px solid #e4e8ea;
  margin-top: 12px;
}
.nav ul.menu-box li {
  float: left;
  list-style: none;
  width: 25%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-left: 1px solid #d1d3d5;
  color: #312d2d;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
}
.nav ul.menu-box li:last-child {
  border-right: 1px solid #d1d3d5;
}
.nav ul.menu-box li.cur {
  background: #455098;
  color: #fff;
}
.nav ul.menu-box li:not(.cur):hover {
  background: rgba(96, 110, 205, 0.2);
}
.nav ul.menu-box li span.menu-item {
  height: 49.5px;
  display: inline-block;
  font-size: 17px;
  letter-spacing: 1.5px;
  position: relative;
}
</style>
