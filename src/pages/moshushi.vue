<template>
  <div id="moshushi">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <zh-header-product
      class="headerTop4"
      msgTop="魔数师"
      msgCenter="智能数据分析：营销效果，了如指掌"
      msgBottom1="多维呈现会员增长、回头数据和消费行为，"
      msgBottom2="深度剖析交易金额和营销效果，让商户对每笔交易心中有数，"
      msgBottom3="轻松调整经营策略，实现最佳营收效果。"
    ></zh-header-product>
    <zh-detail class="box">
      <div class="bg9"></div>
      <div class="bg10"></div>
      <div class="top">
        <div class="text-left">
          <p>智能筛选会员模型</p>
          <div class="font-size12">通过科学的算法，呈现会员消费力和消费频次，<br>
              智能评估会员价值，指引商户定制专属活动，<br>
              让超级会员为商户创造更大价值。</div>
        </div>
        <div class="text-right">
          <p>营销成效，一目了然</p>
          <div class="font-size12">展示优惠券、积分、软文，礼品卡、入会礼等<br>
              营销工具的使用状况，供商户评估活动效果，<br>
              制定精准的营销方案。</div>
        </div>
      </div>
      <div class="center">
        <div class="swiper-img">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide><img src="../assets/images/pad1.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/pad2.png" alt=""></swiper-slide>
            <swiper-slide><img src="../assets/images/pad3.png" alt=""></swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="bottom">
        <div class="text-left">
          <p>实时了解会员动态变化</p>
          <div class="font-size12">随时查看会员增长数、回头数以及未来变化趋势，<br>
            有效检验活动的吸引力和转化率。</div>
        </div>
        <div class="text-right">
          <p>掌握即时交易数据</p>
          <div class="font-size12">迅速获悉营业额、交易笔数以及未来收益趋势等<br>
              关键数据，让商户轻松掌握经营状况，<br>
              调整从容不慌。</div>
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'jukefu',
  components: {
    zhHeaderProduct,
    zhDetail,
    zhFooter
  },
  data(){
    return{
      swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        loop : true,
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: true,
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
}
</script>
<style scoped>
#moshushi{
  position: relative;
}
.box{
  height:700px;
  margin-top: 91px;
  margin-bottom: 81px;
}
.top{
  width: 850px;
  height: 80px;
  margin: 0 auto;
}
.top>.text-left{
  text-align: left;
  float: left;
  width: 50%;
}
p{
  font-size: 14px;
  color: #76B6E4;
  position: relative;
}
p:before{
  content: "";
  position: absolute;
  width: 7px;
  height: 7px;
  background-color: #76B6E4;
  border-radius: 20px;
  left: -13px;
  top: 6px;
}
.font-size12{
  font-size: 12px;
}
.top>.text-right{
  text-align: left;
  float: left;
  width: 50%;
  padding-left: 100px;
}
.center{
  width: 681px;
  height: 398px;
  background-image: url("../assets/images/pad.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 575px 394px;
  margin: 50px auto;
  position: relative;
}
.swiper-img{
  position: relative;
  width: 456px;
  height: 338px;
  top: 34px;
  left: 116px;
}
.center>.swiper-img img{
  width: 450px;
  height: 331px;
}
.bottom{
  width: 850px;
  height: 100px;
  margin: 0 auto;
}
.bottom>.text-left{
  text-align: left;
  float: left;
  width: 50%;
}
.bottom>.text-right{
  text-align: left;
  float: left;
  width: 50%;
  padding-left: 100px;
}
.bg9{
  position: absolute;
  width: 115px;
  height: 152px;
  background-image: url("../assets/images/bg/bg9.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  left: 0;
  top: 102px;
}
.bg10{
  position: absolute;
  width: 126px;
  height: 260px;
  background-image: url("../assets/images/bg/bg10.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  right: 0;
  bottom: 62px;
}
</style>
