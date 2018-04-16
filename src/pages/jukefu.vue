<template>
  <div id="jukefu">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <zh-header-product
      class="headerTop3"
      msgTop="聚客付"
      msgCenter="支付即入会：收钱拓客，双管齐下"
      msgBottom1="简单易用，银行卡、微信、支付宝、现金等多种支付方式选择。"
      msgBottom2="一次支付，完成收款和入会，"
      msgBottom3="更可即时查看新增会员、交易数据、销券、积分等详情，生意状况实时掌握。"
    ></zh-header-product>
    <zh-detail>
      <div class="bg8"></div>
      <div style="margin-top:90px;" class="imagetext">
        <div class="imagetext-left">
          <h4>强大的支付功能</h4>
          <p>智能融合支付与会员系统，可自动计算积分、<br>
              储值和优惠券，无需商户手动输入减免金额，<br>
              提升运营效率和收银准确率。</p>
        </div>
        <div class="imagetext-right"></div>
      </div>
      <div style="margin-top:20px;" class="imagetext">
        <div class="imagetext-left2"></div>
        <div class="imagetext-right2">
          <h4>清晰的账单查询</h4>
          <p>可按储值、积分、礼品卡等各种<br>
            分类查询账单，避免对账时出现<br>
            有疑问的款项，影响财务的正确性</p>
        </div>
      </div>
      <div style="margin-top:92px;margin-bottom: 64px;" class="imagetext">
        <div class="imagetext-left3">
          <h4>会员动态，熟记于心</h4>
          <p>可清楚查询会员储值、销券、积分、<br>
            消费等信息，便于开展个性化的营销服务</p>    
        </div>
        <div class="imagetext-right3"></div>
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
  name: 'jukefu',
  components: {
    zhHeaderProduct,
    zhDetail,
    zhFooter
  }
}
</script>
<style scoped>
#jukefu{
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
  width: 350px;
  height: 180px;
  margin-top: 50px;
}
.imagetext .imagetext-left h4{
  text-align: left;
  color: #56AE91;
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
  width: 230px;
  height: 230px;
  background-image: url("../assets/images/jufuke1.png");
  background-position: center center;
  background-size: 213px 186px;
  background-repeat: no-repeat;
  vertical-align: top;
}
.imagetext .imagetext-left2{
  width: 230px;
  height: 230px;
  background-image: url("../assets/images/jufuke2.png");
  background-position: center center;
  background-size: 196px 230px;
  background-repeat: no-repeat;
  vertical-align: top;
  display: inline-block;
}
.imagetext .imagetext-right2 h4{
  text-align: right;
  color: #56AE91;
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
  width: 350px;
  height: 170px;
  margin-top: 60px;
}
.imagetext .imagetext-left3{
  display: inline-block;
  width: 350px;
  height: 170px;
  margin-top: 60px;
}
.imagetext .imagetext-left3 h4{
  text-align: left;
  color: #56AE91;
  font-size: 20px;
  margin-bottom: 22px;
}
.imagetext .imagetext-left3 p{
  text-align: left;
  font-size: 14px;
  color: #4f4f4f;
  line-height: 2
}
.imagetext .imagetext-right3{
  float: right;
  width: 230px;
  height: 230px;
  background-image: url("../assets/images/jufuke3.png");
  background-position: center center;
  background-size: 212px 200px;
  background-repeat: no-repeat;
  vertical-align: top;
}
.bg8{
  position: absolute;
  width: 124px;
  height: 270px;
  background-image: url("../assets/images/bg/bg8.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  left: 0;
  top: 62px;
}
</style>
