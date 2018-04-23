<template>
  <div id="about">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <zh-header-product
      class="headerTop7"
      msgTop="关于再惠"
      msgBottom1="再惠以专业、领先的科技和及时、温暖的服务，"
      msgBottom2="为天下餐饮创业者打call。"
    ></zh-header-product>
    <zh-detail style="margin-bottom:130px;">
      <zh-jumbotron class="margin-t-100" zhTitle="公司介绍" >
        <div class="introduce">再惠（上海）网络科技有限公司成立于2015年，是一家专注于为中国本地生活服务领域的商户提供一站式营销和顾客忠诚度管理的互联网大数据价值链公司。目前在上海、杭州、宁波、绍兴、南京、苏州、无锡、厦门、福州、武汉、合肥等多个城市设立了直属分公司，员工超过400人。再惠系统采用大数据和机器学习技术收集及分析消费者行为数据，细致到SKU量级的颗粒度，全方位地为商户定制会员忠诚度管理与营销解决方案。</div>
        <div class="introduce">成立两年多以来，再惠以其先进的会员忠诚度管理与营销解决方案，帮助数千家餐饮企业累计增加了超过5亿元营业额。再惠在行业的出色成绩，先后吸引了真格基金、光速中国、DCM、贝塔斯曼亚洲创业基金和蓝湖资本在天使轮、A轮和B轮近3000万美金的融资。</div>
        <div class="introduce">再惠在2017年11月荣获中国财经峰会冬季论坛的“2017年度最具成长性公司奖”，在2018年1月荣获中国信息协会和信息化观测网颁发的“2017中国信息化和软件服务业年度影响力企业奖”。</div>
      </zh-jumbotron>
      <zh-jumbotron class="margin-t-130 story" zhTitle="品牌故事" >
        <h3>再惠：客常谊久, 厚惠有期</h3>
        <div>传达了“优惠”和“再会”的双重含义：<br>每次都能享受优惠，感受到商户的诚意。亲密如友，每一次的分别，都是为了下一次更好的相会。</div>
      </zh-jumbotron>
      <zh-jumbotron class="margin-t-130 story swiper" zhTitle="使命 & 愿景" >
        <transition name="donghua">
        <span v-show="show[0]">
          <h3>让开店成为一种享受</h3>
          <div>通过互联网技术，让每笔交易做到心中有数，让每个会员对你不弃不离。<br>
              每一笔支付都是生活的温度，每一次交易都连接着友谊。<br>
              再惠为所有勤奋、敬业、匠心至诚的餐饮创业者点赞和赋能,每一位认真创业的老板，都值得我们认真对待。</div>
        </span>
        </transition>
        <transition name="donghua">
        <span v-show="show[1]">
          <h3>成为吃喝玩乐的第一信息入口</h3>
          <div>从前，用户在茫茫信息中主动搜索所需；<br>
              如今，通过大数据分析用户画像，精准推送合适的信息。<br>
              从前，消费者努力思考今天吃什么玩什么；<br>
              如今，量身定制的推送信息，让选择变得简单且合乎心意。</div>
        </span>
        </transition>
        <p>
          <span @click="clickSwiper(0)" :class="{bgcolor:show[0]}"></span>
          <span @click="clickSwiper(1)" :class="{bgcolor:show[1]}"></span>
        </p>
      </zh-jumbotron>
      <zh-jumbotron class="margin-t-130 story" zhTitle="发展历程" >
        <div class="time-line-box">
          <div class="line"></div>
          <div class="time-left m-top1">
            <p>2018年1月</p>
            <div class="text">成立合肥、福州分公司</div>
          </div>
          <div class="time-right m-top2">
            <p>2017年11月</p>
            <div class="text">成立无锡、厦门、武汉分公司</div>
          </div>
          <div class="time-left m-top3">
            <p>2017年9月</p>
            <div class="text">获得两千万美元B轮融资
                              蓝湖资本领投，光速中国、
                              真格基金、DCM跟投</div>
          </div>
          <div class="time-right m-top4">
            <p>2017年5月</p>
            <div class="text">成立绍兴分公司</div>
          </div>
          <div class="time-left m-top5">
            <p>2017年3月</p>
            <div class="text">成立杭州、南京分公司</div>
          </div>
          <div class="time-right m-top6">
            <p>2016年10月</p>
            <div class="text">成立宁波分公司</div>
          </div>
          <div class="time-left m-top7">
            <p>2016年8月</p>
            <div class="text">成立苏州分公司</div>
          </div>
          <div class="time-right m-top8">
            <p>2016年5月</p>
            <div class="text">获得近千万美元A轮融资，<br>
                              DCM领投，光速中国、真格基金、<br>
                              贝塔斯曼亚洲创业基金跟投</div>
          </div>
          <div class="time-left m-top9">
            <p>2015年11月</p>
            <div class="text">产品正式上线</div>
          </div>
          <div class="time-right m-top10">
            <p>2015年7月</p>
            <div class="text">获得数百万美元天使轮融资，<br>
                              真格基金和光速中国联合领投</div>
          </div>
        </div>
      </zh-jumbotron>
      <zh-jumbotron class="margin-t-220" zhTitle="努力工作，纵情生活" >
        <div class="boss-list">
          <div class="boss">
            <div class="boss-img1"></div>
          </div><div class="boss">
            <div class="boss-img2"></div>
          </div><div class="boss">
            <div class="boss-img3"></div>
          </div>
        </div>
        <div style="margin-top:47px;">在再惠，我们不仅努力做好产品和业务，更拼命去体验和生活，带着每一位同事多去看世界，不敢有些许怠<br>
        慢，一起跨越壮阔中国，一起走过世界尽头。不负袍泽不负己，不负客户不负卿。</div>
      </zh-jumbotron>
    </zh-detail>
    <zh-footer class="foot-box2"></zh-footer>
  </div>
</template>

<script>
import zhHeaderProduct from '@/components/zhHeaderProduct.vue'
import zhDetail from '@/components/detail.vue'
import zhFooter from '@/components/footer.vue'
import zhJumbotron from '@/components/zhJumbotron.vue'

export default {
  name: 'dongtai',
  components: {
    zhHeaderProduct,
    zhDetail,
    zhFooter,
    zhJumbotron,
  },
  data(){
    return {
      show:[true,false],
      i:1
    }
  },
  mounted:function(){
    this.textSwiper();
  },
  methods:{
    textSwiper: function(){
      setInterval(() => {
        var j=(this.i)%2;
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
    clickSwiper: function(ind){
      this.i = ind;
      var j=(this.i)%2;
      for(var n=0;n<this.show.length;n++){
        if(n==j){
          this.$set(this.show, n, true);
        }else{
          this.$set(this.show, n, false);
        }
      }
    }
  }
}
</script>
<style scoped>
#dongtai{
  position: relative;
}
.margin-t-100{
  margin-top: 100px;
}
.margin-t-130{
  margin-top: 130px;
}
.margin-t-220{
  margin-top: 220px;
}
.boss-list{
  width: 910px;
  margin: 0 auto;
  font-size: 0;
  margin-top: 70px;
}
.boss-list>div{
  width: 300px;
  display: inline-block;
  text-align: center;
  font-size: 0;
  text-align: center;
  vertical-align: top;
}
.boss-list>.boss>.boss-img1{
  margin: 0 auto;
  width: 115px;
  height: 115px;
  border-radius: 50%;
  border: 2px solid #58afff;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../assets/images/jingying1.png")
}
.boss-list>.boss>.boss-img2{
  margin: 0 auto;
  width: 115px;
  height: 115px;
  border-radius: 50%;
  border: 2px solid #58afff;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../assets/images/jingying2.png")
}
.boss-list>.boss>.boss-img3{
  margin: 0 auto;
  width: 115px;
  height: 115px;
  border-radius: 50%;
  border: 2px solid #58afff;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../assets/images/jingying3.png")
}
.boss>h3{
  color: #58AFFF;
  font-size: 20px;
  margin: 15px 0 5px;
}
.boss>p{
  color: #4f4f4f;
  font-size: 12px;
  font-weight: 400;
}
.boss>.boss-text{
  color: #4f4f4f;
  font-size: 10px;
  line-height: 1.8;
}
.introduce{
  color: #4f4f4f;
  font-size: 14px;
  width: 866px;
  margin: 0 auto;
  letter-spacing: 2px;
  text-align: left;
  margin-top: 25px;
}
.story{
  position: relative;
}
.swiper{
  height: 223px;
}
.story>h3{
  margin: 0 auto;
  width: 800px;
  color: #58AFFF;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 16px;
}
.story>span>h3{
  margin: 0 auto;
  width: 800px;
  color: #58AFFF;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 6px;
}
.story>span{
  display: block;
  height: 140px;
  position: absolute;
  left: 50%;
  margin-left: -400px;
}
.story>span>div{
  color: #4f4f4f;
  font-size: 14px;
  width: 760px;
  margin: 0 auto;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 15px;
  line-height: 1.8;
}
.story>div{
  color: #4f4f4f;
  font-size: 14px;
  width: 760px;
  margin: 0 auto;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 15px;
  line-height: 1.8;
}
.story>p{
  display: block;
  position: absolute;
  text-align: center;
  width: 100px;
  left: 50%;
  margin-left: -50px;
  bottom: 0;
}
.story>p>span{
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 25px;
  background-color: #E0E0E0;
  margin: 0 8px;

}
.time-line-box{
  position: relative;
  width: 500px;
}
.time-line-box .line{
  position: relative;
  height: 691px;
  border-left: 1px solid #979797;
  width: 0;
  margin: 57px auto 100px;
  top: 13px;
}
.time-left{
  position: absolute;
  width: 300px;
  height: 154px;
  left: 45px;
  text-align: right;
}
.time-left>p{
  color: #58AFFF;
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  position: relative;
}
.time-left>p:after{
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 20px;
  background-color: #58AFFF;
  right: -40px;
  top: 11px;
}
.time-left>.text{
  color: #4F4F4F;
  font-size: 14px;
}

.time-right{
  position: absolute;
  width: 300px;
  height: 154px;
  right: 45px;
  text-align: left;
}
.time-right>p{
  color: #58AFFF;
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  position: relative;
}
.time-right>p:after{
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  border-radius: 20px;
  background-color: #58AFFF;
  left: -40px;
  top: 11px;
}
.time-right>.text{
  color: #4F4F4F;
  font-size: 14px;
}
.m-top1{
  top: 0;
}
.m-top2{
  top: 77px;
}
.m-top3{
  top: 154px;
}
.m-top4{
  top: 231px;
}
.m-top5{
  top: 308px;
}
.m-top6{
  top: 385px;
}
.m-top7{
  top: 462px;
}
.m-top8{
  top: 539px;
}
.m-top9{
  top: 616px;
}
.m-top10{
  top: 693px;
}
.bgcolor{
  background-color: #58AFFF!important;
}
.donghua-enter-active{
  transition: 500ms all ease;
}
.donghua-leave-active{
  transition: 500ms all ease;
}
.donghua-enter-active{
  opacity: 1;
}
.donghua-leave-active{
  opacity: 0;
}
.donghua-leave{
  opacity: 0;
}
.donghua-enter{
  opacity: 0;
}
</style>
