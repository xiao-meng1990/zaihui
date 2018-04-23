<template> 
  <div :class="headerTop">
    <div style="position: relative;z-index: 10;">
      <router-link to="/">
        <div class="logo"></div>
      </router-link>
      <zh-nav class="font-color"></zh-nav>
      <zh-nav-button message="登录" class="btn btn-white"></zh-nav-button>
    </div>
    <div class="headText">
      <h1>{{msgTop}}</h1>
      <h3>{{msgCenter}}</h3>
      <p>{{msgBottom1}}</p>
      <p>{{msgBottom2}}</p>
      <p>{{msgBottom3}}</p>
    </div>
    
    <!-- <div>这个地方在渲染后不会被占用</div> -->
  </div>
</template>

<script>
import zhNav from '@/components/zhNav.vue'
import zhNavButton from '@/components/zhNavButton.vue'
export default {
  name: 'zh-header-product',
  components: {
    zhNav,
    zhNavButton
  },
  // props:["msgTop","msgCenter","msgBottom1","msgBottom2","msgBottom3"]
  props:{
    headerTop:{
      type: String,
      default: ""
    },
    msgTop:{
      type: String,
      default: ""
    },
    msgCenter:{
      type: String,
      default: ""
    },
    msgBottom1:{
      type: String,
      default: ""
    },
    msgBottom2:{
      type: String,
      default: ""
    },
    msgBottom3:{
      type: String,
      default: ""
    },
  }
}
</script>
<style scoped>
.logo{
  cursor: pointer;
  display: inline-block;
  width: 84px;
  height: 30px;
  margin-left:37px;
  margin-top: 29px;
  background-image: url('../assets/images/logoWhite.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.headerTop1{
  height: 400px;
  background: linear-gradient(to left, #9498F3, #3E30C9);
}
.headerTop2{
  height: 400px;
  background: linear-gradient(to left, #FD8780, #AF1C00);
}
.headerTop3{
  height: 400px;
  background: linear-gradient(to left, #5FC7A0, #035446);
}
.headerTop4{
  height: 400px;
  background: linear-gradient(to left, #5BB0EC, #1F3C76);
}
.headerTop5{
  height: 400px;
  background: linear-gradient(to left, #2593FC, #C474FF);
}
.headerTop6{
  height: 400px;
  background: linear-gradient(to left, #FB7B91, #99013D);
}
.headerTop7{
  height: 400px;
  background-image: url('../assets/images/bg/bg20.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: top;
}

.headText{
  width: 580px;
  margin: 59px auto;
  text-align: center;
  
}
.headText h1{
  font-size: 40px;
  color: #ffffff;
  font-weight: 300;
}
.headText h3{
  font-size: 20px;
  color: #ffffff;
  font-weight: 300;
  margin-top: 14px;
  margin-bottom: 30px;
}
.headText p{
  font-size: 14px;
  color: #ffffff;
  font-weight: 100;
  margin-bottom: 0;
  line-height: 25px;
  letter-spacing: 1.5px;
}
</style>