<template>
  <div id="home">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <zh-header>
      <zh-nav hhhclass="color2"></zh-nav>
      <zh-nav-button message="登录" class="btn btn-default"></zh-nav-button>
      <div class="swiper margin-t">
        <transition name="donghua">
          <zh-swiper v-show="show[0]" class="swiper0 four_left_start"  
            title="客回头" 
            message1="精准会员管理："
            message2="人工与AI技术相辅而行，事半功倍"
            button="查看详情"
            links="/huitouke"
          ></zh-swiper>
        </transition>
        <transition name="donghua" >
          <zh-swiper v-show="show[1]" class="swiper1 four_left_start"  
          title="智汇新" 
          message1="一键式拉新："
          message2="让会员的好友，成为你的会员"
          button="查看详情"
           links="/zhihuixin"
          ></zh-swiper>
         </transition>
        <transition name="donghua" >
          <zh-swiper v-show="show[2]" class="swiper2 four_left_start"  
          title="聚客付" 
          message1="支付即入会："
          message2="收钱拓客，双管齐下"
          button="查看详情"
           links="/jukefu"
          ></zh-swiper>
          </transition>
        <transition name="donghua">
          <zh-swiper v-show="show[3]" class="swiper3 four_left_start"  
          title="魔数师" 
          message1="智能数据分析："
          message2="营销效果，了如指掌"
          button="查看详情"
           links="/moshushi"
          ></zh-swiper>
          </transition>
        <transition name="donghua" >
          <zh-swiper v-show="show[4]" class="swiper4 four_left_start"  
          title="品牌服务" 
          message1="一站式营销："
          message2="实现每个商户的品牌梦想"
          button="查看详情"
           links="/brand"
          ></zh-swiper>
          </transition>
      </div>
      <div class="tubiao">
        <div @click="clickSwiper(0)" :class="{bgcolor:show[0]}" class="yuan"></div>
        <div @click="clickSwiper(1)" :class="{bgcolor:show[1]}" class="yuan"></div>
        <div @click="clickSwiper(2)" :class="{bgcolor:show[2]}" class="yuan"></div>
        <div @click="clickSwiper(3)" :class="{bgcolor:show[3]}" class="yuan"></div>
        <div @click="clickSwiper(4)" :class="{bgcolor:show[4]}" class="yuan"></div>
      </div>
      <zh-bg>
         <transition name="donghua2">
           <img v-show="show[0]" class="swiper-image" width="369" height="271" src="../assets/images/bg/swiper1.png" alt="">
         </transition>
         <transition name="donghua2">
           <img v-show="show[1]" class="swiper-image" width="369" height="271" src="../assets/images/bg/swiper2.png" alt="">
         </transition>
         <transition name="donghua2">
           <img v-show="show[2]" class="swiper-image" width="369" height="271" src="../assets/images/bg/swiper3.png" alt="">
         </transition>
         <transition name="donghua2">
           <img v-show="show[3]" class="swiper-image" width="369" height="271" src="../assets/images/bg/swiper4.png" alt="">
         </transition>
         <transition name="donghua2">
           <img v-show="show[4]" class="swiper-image" width="369" height="271" src="../assets/images/bg/swiper5.png" alt="">
         </transition>
      </zh-bg>
    </zh-header>
    <zh-detail>
      <div class="bg1"></div>
      <div class="bg2"></div>
      <div class="bg3"></div>
      <zh-jumbotron class="margin-t-75 model1" zhTitle="商户痛点" >
        <zh-image-text></zh-image-text>
      </zh-jumbotron>
      <zh-jumbotron class="margin-t-100 model2" zhTitle="核心价值" >
        <h4>商户AI营销解决方案：让交易连接友谊</h4>
        <p>再惠采用大数据和机器学习技术收集及分析消费者行为数据，细致到SKU量级的颗粒度，全方位地为商户定制一站式会员忠诚度管理与营销解决方案，帮助商户提升会员忠诚度，提高复购率，优化品牌形象，增加营收。每一笔支付都是生活的温度，每一次交易都连接着友谊</p>
      </zh-jumbotron>
      <zh-jumbotron class="model3" zhTitle="核心优势" >
        <div style="margin-top:72px;" class="imagetext">
          <div class="imagetext-left">
            <h4>国际领先的AI技术</h4>
            <p>应用Kotlin、Koa2、Hawk等国际领先技术，<br>
              与世界著名CRM软件公司Salesforce以及<br>
              自动化营销软件巨头Marketo和<br>
              Oracle Eloqua并驾齐驱；<br>
              自主研发一系列大数据和人工智能算法，<br>
              属国内外首创技术；<br>
              强大的数据处理能力，可智能实现<br>
              在合适的时间让正确的会员回头消费。</p>
          </div>
          <div class="imagetext-right">
            <img width="217" height="193" src="../assets/images/1Bitmap@2x.png" alt="">
          </div>
        </div>
        <div style="margin-top:48px;" class="imagetext">
          <div class="imagetext-left2">
            <img width="187" height="190" src="../assets/images/2Bitmap@2x.png" alt="">
          </div>
          <div class="imagetext-right2">
            <h4>一站式营销解决方案</h4>
            <p>覆盖拓客、入会、留客、支付、品牌策划等<br>
               商户所需的会员管理和营销方案,<br>
               用专业的技术和一站式服务让商户更省心.<br>
               “让开店成为一种享受”<br>
               盈利只是我们使命的附加值.</p>
          </div>
        </div>
        <div style="margin-top:38px;" class="imagetext">
          <div class="imagetext-left3">
            <h4>金牌售后服务</h4>
            <p>避免购买后出现故障求助无门的困境，<br>
              售后由客户成功部门全程跟进。<br>
              来自星巴克、肯德基、王品牛排、呷哺呷哺、<br>
              巴黎贝甜等餐饮巨头的客户成功经理，<br>
              基于每一个客户的具体情况订制<br>
              会员营销方案和门店运营方案。<br>
              每一个认真经营的客户，都值得我们认真对待。</p>
          </div>
          <div class="imagetext-right3">
            <img width="221" height="190" src="../assets/images/3Bitmap@2x.png" alt="">
          </div>
        </div>
      </zh-jumbotron>
      <zh-jumbotron class="margin-t-100 model2" zhTitle="他们都信任再惠" >
        <div id="brand" class="brand-logo">
          <div :class="logo.logo1" class="logo-style"></div>
          <div :class="logo.logo2" class="logo-style"></div>
          <div :class="logo.logo3" class="logo-style"></div>
          <div :class="logo.logo4" class="logo-style"></div>
          <div :class="logo.logo5" class="logo-style"></div>
          <div :class="logo.logo6" class="logo-style"></div>
          <div :class="logo.logo7" class="logo-style"></div>
          <div :class="logo.logo8" class="logo-style"></div>
        </div>
      </zh-jumbotron>
    </zh-detail>
    <zh-footer></zh-footer>
  </div>
</template>
<script>
import zhHeader from '@/components/header.vue'
import zhDetail from '@/components/detail.vue'
import zhFooter from '@/components/footer.vue'
import zhNav from '@/components/zhNav.vue'
import zhNavButton from '@/components/zhNavButton.vue'
import zhBg from '@/components/zhBg.vue'
import zhSwiper from '@/components/zhSwiper.vue'
import zhJumbotron from '@/components/zhJumbotron.vue'
import zhImageText from '@/components/zhImageText.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'home',
  components: {
    zhHeader,
    zhDetail,
    zhFooter,
    zhNav,
    zhNavButton,
    zhBg,
    zhSwiper,
    zhJumbotron,
    zhImageText,
    swiper,
    swiperSlide
  },
  data () {
    return {
      logo:{
        logo1:"logo1",
        logo2:"logo4",
        logo3:"logo7",
        logo4:"logo10",
        logo5:"logo13",
        logo6:"logo16",
        logo7:"logo19",
        logo8:"logo22",
      },
      show:[true,false,false,false,false],
      i:1
    }
  },
  mounted:function(){
    this.swiper();
    this.randomlogo();
    this.logodata();
    this.updated();
    
  },
  methods: {
    swiper: function(){
      setInterval(() => {
        var j=(this.i)%5;
        for(var n=0;n<this.show.length;n++){
          if(n==j){
            this.$set(this.show, n, true);
          }else{
            this.$set(this.show, n, false);
          }
        }
        this.i++;
      }, 3000)
    },
    updated: function(){
        window.scrollTo(0,0);
    },
    clickSwiper: function(ind){
      this.i = ind;
      var j=(this.i)%5;
      for(var n=0;n<this.show.length;n++){
        if(n==j){
          this.$set(this.show, n, true);
        }else{
          this.$set(this.show, n, false);
        }
      }
    },
    randomlogo: function(){
      var i = parseInt(Math.random()*3);
      var temp = '';
      var brand = document.getElementById("brand");
      for(var j=0;j<8;j++){
        var n = j*3 +i;
        var node1 = document.createElement('div');
        node1.setAttribute("class","logo"+n);
        // console.log(node1);
        brand.appendChild(node1);
      }
      
    },
    logodata:function(){
      setInterval(() => {
        var i = parseInt(Math.random()*3+1);
        var temp = '';
        this.logo.logo1="logo"+(0*3 +i);
        i = parseInt(Math.random()*3+1);
        this.logo.logo2="logo"+(1*3 +i);
        i = parseInt(Math.random()*3+1);
        this.logo.logo3="logo"+(2*3 +i);
        i = parseInt(Math.random()*3+1);
        this.logo.logo4="logo"+(3*3 +i);
        i = parseInt(Math.random()*3+1);
        this.logo.logo5="logo"+(4*3 +i);
        i = parseInt(Math.random()*3+1);
        this.logo.logo6="logo"+(5*3 +i);
        i = parseInt(Math.random()*3+1);
        this.logo.logo7="logo"+(6*3 +i);
        i = parseInt(Math.random()*4+1);
        this.logo.logo8="logo"+(7*3 +i);
        return this.logo;
      }, 3000)
        
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 1999px) {
  .swiper {
    position: relative;
    width: 400px;
    height: 222px;
  }
  .tubiao{
    margin-left: 77px;
    margin-top: 60px;
  }
  .swiper-image{
    width: 369px;
    height: 271px;
    position: absolute;
  }

}
@media screen and (min-width: 1200px) {
  .swiper {
    position: relative;
    width: 4rem;
    height: 2.22rem;
  }
  .tubiao{
    margin-left: 0.77rem;
    margin-top: 0.6rem;
  }
  .swiper-image{
    width: 3.69rem;
    height: 2.71rem;
    position: absolute;
  }

}
#home{
  position: relative;
}
.hello{
  background: linear-gradient(to left, #AF1C00, #FD8780); 
}
.margin-t{
  margin-top: 110px;
}
.margin-t-75{
  margin-top: 75px;
}
.margin-t-100{
  margin-top: 100px;
}
.model2 p{
  width: 706px;
  color: #4f4f4f;
  margin-top: 14px;
  line-height: 1.8;
  margin: 14px auto 10px;
}
.model2 h4{
  width: 706px;
  font-size: 20px;
  color: #58AFFF;
  padding-top: 6px;
  margin: 10px auto;
}
.model3{
  margin-top: 120px;
}
.imagetext{
  width: 650px;
  text-align: left;
  margin: 0 auto;
  padding-bottom: 35px;
}
.imagetext .imagetext-left{
  display: inline-block;
  width: 330px;
}
.imagetext .imagetext-left h4{
  text-align: left;
  color: #58AFFF;
  font-size: 20px;
  margin-bottom: 22px;
}
.imagetext .imagetext-left p{
  text-align: left;
  font-size: 12px;
  color: #4f4f4f;
}
.imagetext .imagetext-right{
  /* display: inline-block; */
  vertical-align: top;
  float: right;
  margin-top: 20px;
}


.imagetext .imagetext-right2{
  /* display: inline-block; */
  width: 330px;
  float: right;
}
.imagetext .imagetext-right2 h4{
  text-align: right;
  color: #58AFFF;
  font-size: 20px;
  margin-bottom: 22px;
}
.imagetext .imagetext-right2 p{
  text-align: right;
  font-size: 12px;
  color: #4f4f4f;
}
.imagetext .imagetext-left2{
  display: inline-block;
  vertical-align: top;
}

.imagetext .imagetext-left3{
  display: inline-block;
  width: 330px;
}
.imagetext .imagetext-left3 h4{
  text-align: left;
  color: #58AFFF;
  font-size: 20px;
  margin-bottom: 22px;
}
.imagetext .imagetext-left3 p{
  text-align: left;
  font-size: 12px;
  color: #4f4f4f;
}
.imagetext .imagetext-right3{
  /* display: inline-block; */
  vertical-align: top;
  float: right;
  margin-top: 20px;
}
.brand-logo{
  width: 800px;
  height: 212px;
  margin: 72px auto 100px;
  font-size: 0;
}
.brand-logo>div{
  display: inline-block;
  width: 120px;
  height: 80px;
  margin: 12px 36px;
}
.logo-style{
  background-size: 75px 75px;
  background-repeat: no-repeat;
  background-position: center center;
  transition: background-image 1500ms;
  -moz-transition: background-image 1500ms;	
  -webkit-transition: background-image 1500ms;	
  -o-transition: background-image 1500ms;
}
.brand-logo>.logo1{
  background-image: url("../assets/images/brand1.jpg");
}
.brand-logo>.logo2{
  background-image: url("../assets/images/brand2.jpg");
}
.brand-logo>.logo3{
  background-image: url("../assets/images/brand3.jpg");
}
.brand-logo>.logo4{
  background-image: url("../assets/images/brand4.jpg");
}
.brand-logo>.logo5{
  background-image: url("../assets/images/brand5.jpg");
}
.brand-logo>.logo6{
  background-image: url("../assets/images/brand6.jpg");
}
.brand-logo>.logo7{
  background-image: url("../assets/images/brand7.jpg");
}
.brand-logo>.logo8{
  background-image: url("../assets/images/brand8.jpg");
}
.brand-logo>.logo9{
  background-image: url("../assets/images/brand9.jpg");
}
.brand-logo>.logo10{
  background-image: url("../assets/images/brand10.jpg");
}
.brand-logo>.logo11{
  background-image: url("../assets/images/brand11.jpg");
}
.brand-logo>.logo12{
  background-image: url("../assets/images/brand12.jpg");
}
.brand-logo>.logo13{
  background-image: url("../assets/images/brand13.jpg");
}
.brand-logo>.logo14{
  background-image: url("../assets/images/brand14.jpg");
}
.brand-logo>.logo15{
  background-image: url("../assets/images/brand15.jpg");
}
.brand-logo>.logo16{
  background-image: url("../assets/images/brand16.jpg");
}
.brand-logo>.logo17{
  background-image: url("../assets/images/brand17.jpg");
}
.brand-logo>.logo18{
  background-image: url("../assets/images/brand18.jpg");
}
.brand-logo>.logo19{
  background-image: url("../assets/images/brand19.jpg");
}
.brand-logo>.logo20{
  background-image: url("../assets/images/brand20.jpg");
}
.brand-logo>.logo21{
  background-image: url("../assets/images/brand21.jpg");
}
.brand-logo>.logo22{
  background-image: url("../assets/images/brand22.jpg");
}
.brand-logo>.logo23{
  background-image: url("../assets/images/brand23.jpg");
}
.brand-logo>.logo24{
  background-image: url("../assets/images/brand24.jpg");
}
.brand-logo>.logo25{
  background-image: url("../assets/images/brand25.jpg");
}
.bg1{
  position: absolute;
  width: 125px;
  height: 272px;
  background-image: url("../assets/images/bg/bg1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  left: 0;
  top:282px;
}
.bg2{
  position: absolute;
  width: 125px;
  height: 331px;
  background-image: url("../assets/images/bg/bg2.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  right: 0;
  top:562px;
}
.bg3{
  position: absolute;
  width: 94px;
  height: 404px;
  background-image: url("../assets/images/bg/bg3.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  left: 0;
  bottom: 62px;
}

.four_left_start{
  position: absolute;
  top: 0;
  left: 0;
}
.donghua-enter-active{
  transition: 500ms all ease 600ms;
}
.donghua-leave-active{
  transition: 700ms all ease;
}
.donghua-enter-active{
  opacity: 1;
  left: 0px;
}
.donghua-leave-active{
  opacity: 0;
  left: -50px;
}
.donghua-leave{
  opacity: 0;
  left: 0px;
}
.donghua-enter{
  opacity: 0;
  left: -50px;
}
.donghua2-enter-active{
  transition: 1500ms all ease;
}
.donghua2-leave-active{
  transition: 1500ms all ease;
}
.donghua2-enter-active{
  opacity: 1;
}
.donghua2-leave-active{
  opacity: 0;
}
.donghua2-leave{
  opacity: 0;
}
.donghua2-enter{
  opacity: 0;
}
.yuan{
  width: 7px;
  height: 7px;
  background-color: #DEDEDE;
  display: inline-block;
  border-radius: 25px;
}
.bgcolor{
  background-color: #58AFFF!important;
}
</style>
