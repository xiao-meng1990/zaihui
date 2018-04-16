<template>
  <div id="huitouke">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <zh-header-product
      class="headerTop1"
      msgTop="客回头"
      msgCenter="精准会员管理：人工与AI技术相辅而行，事半功倍"
      msgBottom1="为会员制定精细化的营销方案，赋予个性化的权益和奖励机制，"
      msgBottom2="采用智能营销和主动营销配合的方式，极大提升会员的到店率和忠诚度。"
      msgBottom3="你可以比会员更了解他们自己。"
    ></zh-header-product>
    <zh-detail style="margin-top:90px;">
      <div class="bg6"></div>
      <div class="bg7"></div>
      <zh-jumbotron class="margin-t-75 model1" zhTitle="独步业内的智能营销" >
        <h4>无人操作，客自回头</h4>
        <div>
          <div class="imageText">
            <img :src="img[0].imgSrc" class="img1" alt="拓客难">
            <div>应用国际领先的AI技术<br>可真正实现无人操作<br>系统自主发券的智能营销</div>
          </div>
          <div class="imageText">
            <img :src="img[1].imgSrc" class="img2" alt="入会繁">
            <div>全方位获取数据<br>进行深度分析和智能判定<br>给合适的会员推送精准的活动</div>
          </div>
          <div class="imageText">
            <img :src="img[2].imgSrc" class="img3" alt="留客累">
            <div>机器学习<br>自动化调整推送周期和营销力度<br>实现最优效果</div>
          </div>
        </div>
      </zh-jumbotron>
      <zh-jumbotron class="margin-t-75 model2" zhTitle="独步业内的智能营销" >
        <h4>科学管理，打动内心，触发行动</h4>
        <div class="liuchengtu"></div>
      </zh-jumbotron>
      <zh-jumbotron class="margin-t-75 model3" zhTitle="主动营销" >
        <h4>在每个重要的日子，让会员形影相随</h4>
        <div style="margin-top:72px;" class="imagetext">
          <div class="imagetext-left">
            <img width="221" height="153" src="../assets/images/huitouke4.png" alt="">
          </div>
          <div class="imagetext-right">
            <p>针对不同的活动，个性化筛选合适的会员，<br>
               提升参与度和活动效果</p>
          </div>
        </div>
        <div style="margin-top:48px;" class="imagetext">
          <div class="imagetext-left2">
            <p>多种优惠模板，简单、高效，帮助商户玩转营销</p>
          </div>
          <div class="imagetext-right2">
            <img width="208" height="219" src="../assets/images/huitouke5.png" alt="">
          </div>
        </div>
      </zh-jumbotron>
    </zh-detail>
    <zh-footer class="foot-box2"></zh-footer>
  </div>
</template>

<script>
import zhHeaderProduct from '@/components/zhHeaderProduct.vue'
import zhDetail from '@/components/detail.vue'
import zhFooter from '@/components/footer.vue'
import zhNav from '@/components/zhNav.vue'
import zhNavButton from '@/components/zhNavButton.vue'
import zhJumbotron from '@/components/zhJumbotron.vue'
import zhImageText from '@/components/zhImageText.vue'

export default {
  name: 'huitouke',
  components: {
    zhHeaderProduct,
    zhDetail,
    zhFooter,
    zhNav,
    zhNavButton,
    zhJumbotron,
    zhImageText
  },
  data(){
    return {
      img:[{
        imgSrc: require("../assets/images/huitouke1.png") 
      },{
        imgSrc: require("../assets/images/huitouke2.png") 
      },{
        imgSrc: require("../assets/images/huitouke3.png") 
      }]
      
    }
  }
}
</script>
<style scoped>
#huitouke{
  position: relative;
}
.model1>h4{
  width: 706px;
  font-size: 20px;
  color: #827EEF;
  padding-top: 6px;
  margin: 10px auto;
}
.model2>h4{
  width: 706px;
  font-size: 20px;
  color: #827EEF;
  padding-top: 6px;
  margin: 10px auto;
}
.model3>h4{
  width: 706px;
  font-size: 20px;
  color: #827EEF;
  padding-top: 6px;
  margin: 10px auto;
}
.imageText{
  display: inline-block;
  width: 200px;
  height: 150px;
  vertical-align: top;
  margin: 44px 40px;
}
.imageText p{
  font-weight: 400;
  font-size: 18px;
}
.imageText div{
  font-size: 10px;
  color: #4F4F4F;
}
.imageText .img1{
  width: 43px;
  height: 55px;
  margin-bottom: 15px;
}
.imageText .img2{
  width: 67px;
  height: 50px;
  margin-bottom: 20px;
}
.imageText .img3{
  width: 49px;
  height: 55px;
  margin-bottom: 15px;
}
.liuchengtu{
  background-image: url("../assets/images/liucheng.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 652px;
  height: 594px;
  margin: 42px auto 120px;
}
.imagetext{
  width: 650px;
  text-align: left;
  margin: 0 auto;
  padding-bottom: 35px;
  border-bottom: 1px solid #F0F0F0;
}
.imagetext .imagetext-left{
  display: inline-block;
  width: 292px;
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
  margin-top: 50px;
  margin-right: 30px;
}


.imagetext .imagetext-right2{
  /* display: inline-block; */
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
  height: 230px;
  line-height: 230px;
  margin-left: 30px;
}
.bg6{
  position: absolute;
  width: 135px;
  height: 290px;
  background-image: url("../assets/images/bg/bg6.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  right: 0;
  top:262px;
}
.bg7{
  position: absolute;
  width: 243px;
  height: 297px;
  background-image: url("../assets/images/bg/bg7.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  left: 0;
  bottom: 570px;
}
</style>
