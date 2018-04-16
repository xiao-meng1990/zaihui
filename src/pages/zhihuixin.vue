<template>
  <div id="zhihuixin">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <zh-header-product
      class="headerTop2"
      msgTop="智汇新"
      msgCenter="精准会员管理：人工与AI技术相辅而行，事半功倍"
      msgBottom1="为会员制定精细化的营销方案，赋予个性化的权益和奖励机制，"
      msgBottom2="采用智能营销和主动营销配合的方式，极大提升会员的到店率和忠诚度。"
      msgBottom3="你可以比会员更了解他们自己。"
    ></zh-header-product>
    <zh-detail style="margin-bottom: 60px;">
      <div class="bg4"></div>
      <div class="bg5"></div>
      <div style="margin-top:92px;" class="imagetext">
        <div class="imagetext-left">
          <h4>趣味的互动游戏</h4>
          <p>多种游戏选择，分享微信群及朋友圈<br>
             邀请好友参与，在互动中帮助商获取新会员，<br>
             同时让品牌有了更多的曝光宣传。</p>
        </div>
        <div class="imagetext-right shouji1"></div>
      </div>
      <div style="margin-top:20px;" class="imagetext">
        <div class="imagetext-left2 shouji2"></div>
        <div class="imagetext-right2">
          <h4>高效转化的软文营销</h4>
          <p>在软文中内置优惠券，针对新老会员<br>
             设计不同的活动，提高老会员的活跃度<br>
             吸引新会员入会，让软文营销发挥致效果</p>
        </div>
      </div>
      <div style="margin-top:92px;margin-bottom: 64px;" class="imagetext">
        <div class="imagetext-left">
          <h4>体面、便捷的礼品卡</h4>
          <p>开卡即入会，可享有丰富的权益，<br>
             自用和送礼都体面过人，<br>
             帮助商户快速获取现金流和新会员</p>
        </div>
        <div class="imagetext-right shouji3"></div>
      </div>
      <div style="margin-top:20px;" class="imagetext">
        <div class="imagetext-left2 shouji4"></div>
        <div class="imagetext-right2">
          <h4>丰富的入会礼</h4>
          <p>可设置优惠、积分等多种入会礼<br>
             配合商户的营销活动<br>
             快速吸引新客入会</p>
        </div>
      </div>
    </zh-detail>
    <zh-footer class="foot-box2"></zh-footer>
  </div>
</template>

<script>
import zhHeaderProduct from '@/components/zhHeaderProduct.vue'
import zhDetail from '@/components/detail.vue'
import zhFooter from '@/components/footer.vue'

export default {
  name: 'home',
  components: {
    zhHeaderProduct,
    zhDetail,
    zhFooter
  }
}
</script>
<style scoped>
#zhihuixin{
  position: relative;
}
.imageText{
  display: inline-block;
  width: 110px;
  height: 150px;
  vertical-align: top;
  margin: 44px 80px;
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
}
.imagetext .imagetext-left{
  display: inline-block;
  width: 342px;
  height: 267px;
  margin-top: 120px;
}
.imagetext .imagetext-left h4{
  text-align: left;
  color: #DB664D;
  font-size: 20px;
  margin-bottom: 22px;
}
.imagetext .imagetext-left p{
  text-align: left;
  font-size: 14px;
  color: #4f4f4f;
  line-height: 2
}
.imagetext .imagetext-right{
  float: right;
  width: 200px;
  height: 400px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  vertical-align: top;
}
.imagetext .imagetext-left2{
  width: 200px;
  height: 400px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  vertical-align: top;
  display: inline-block;
}
.imagetext .imagetext-right2 h4{
  text-align: right;
  color: #DB664D;
  font-size: 20px;
  margin-bottom: 22px;
}
.imagetext .imagetext-right2 p{
  text-align: right;
  font-size: 14px;
  color: #4f4f4f;
  line-height: 2
}
.imagetext .imagetext-right2{
  float: right;
  width: 342px;
  height: 267px;
  margin-top: 120px;
}
.shouji1{
  background-image: url("../assets/images/shouji1.jpg");
  box-shadow: 7px 2px 22px #ddd;
  border-radius: 26px;
}
.shouji2{
  background-image: url("../assets/images/shouji2.jpg");
  box-shadow: 7px 2px 22px #ddd;
  border-radius: 26px;
}
.shouji3{
  background-image: url("../assets/images/shouji3.jpg");
  box-shadow: 7px 2px 22px #ddd;
  border-radius: 26px;
}
.shouji4{
  background-image: url("../assets/images/shouji4.jpg");
  box-shadow: 7px 2px 22px #ddd;
  border-radius: 26px;
}
.bg4{
  position: absolute;
  width: 189px;
  height: 302px;
  background-image: url("../assets/images/bg/bg4.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  right: 0;
  top: 700px;
}
.bg5{
  position: absolute;
  width: 231px;
  height: 417px;
  background-image: url("../assets/images/bg/bg5.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  left: 0;
  bottom: 286px;
}
</style>
