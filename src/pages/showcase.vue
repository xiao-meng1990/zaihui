<template>
  <div id="showcase">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <div class="headerTop" style="position:relative;">
      <div class="bg14"></div>
      <div class="bg15"></div>
      <div>
        <router-link to="/">
          <div class="logo"></div>
        </router-link>
        <zh-nav class="font-color"></zh-nav>
        <zh-nav-button message="登录" class="btn btn-white"></zh-nav-button>
      </div>
      <div class="headText">
        <h1>成功案例</h1>
        <p>通过专业的团队服务，帮助商户制定营销策略，配合视觉优化和海量曝光，</p>
        <p>实现营销佳绩，提升品牌形象。</p>
      </div>
    </div>
    
    <zh-detail class="box">
      <div>
        <div v-on:mouseover="getInfo(1)" class="list">
          <div class="case1"></div>
          <div style="margin-top:15px;">山崎面包</div> 
        </div>
        <div v-on:mouseover="getInfo(2)" class="list">
          <div class="case2"></div>
          <div style="margin-top:15px;">宽窄巷子</div>
        </div>
        <div v-on:mouseover="getInfo(3)" class="list">
          <div class="case3"></div> 
          <div>天辣绿色<br>时尚餐厅</div>
        </div>
        <div v-on:mouseover="getInfo(4)" class="list">
          <div class="case4"></div> 
          <div style="margin-top:15px;">掌柜的店</div>
        </div>
        <div v-on:mouseover="getInfo(5)" class="list">
          <div class="case5"></div> 
          <div>阿吾罗<br>日本料理</div>
        </div>
        <div v-on:mouseover="getInfo(6)" class="list">
          <div class="case6"></div> 
          <div>盆鱼宴<br>秘制酸菜鱼</div>
        </div>
        <div v-on:mouseover="getInfo(7)" class="list">
          <div class="case7"></div> 
          <div style="margin-top:15px;">胖小萌肉蟹煲</div>
        </div>
        <div v-on:mouseover="getInfo(8)" class="list">
          <div class="case8"></div> 
          <div>第三杯<br>创意餐·吧</div>
        </div>
        <div v-on:mouseover="getInfo(9)" class="list">
          <div class="case9"></div> 
          <div style="margin-top:15px;">一品粤珍轩</div>
        </div>
        <div v-on:mouseover="getInfo(10)" class="list">
          <div class="case10"></div> 
          <div style="margin-top:15px;">遇上西雅图</div>
        </div>
      </div>
      <div class="content">{{info}}</div>
    </zh-detail>
    <zh-footer class="foot-box2"></zh-footer>
  </div>
</template>

<script>
import zhDetail from '@/components/detail.vue'
import zhFooter from '@/components/footer.vue'
import zhNav from '@/components/zhNav.vue'
import zhNavButton from '@/components/zhNavButton.vue'

export default {
  name: 'huitouke',
  components: {
    zhDetail,
    zhFooter,
    zhNav,
    zhNavButton
  },
  data(){
    return {
      info:""
    }
  },
  methods:{
    getInfo: function(ind){
      if(ind==1){
        this.info = "17家知名面包连锁店，合作半年多，商户累计6万多名会员，回头率超过150%，带回超过100万营业额，商户送出近25万积分。面包行业竞争激烈，客单价低，需要高频消费，商户使用智能营销自动发券超过20万，召回老会员，使用率近10%，同时提升了客单价，商户对效果非常认可。"
      }else if(ind==2){
        this.info = "全国连锁火锅店，合作超过半年，商户已累计超过6万名会员，带回营业额超过80万。客户成功团队为商户策划会员日活动，每月18日新开业门店的会员可享菜品68折，单日销券数量近300张。商户评价再惠的售后是同行业里比较少见的，专业且迅速，总能带来有价值的营销建议。"
      }else if(ind==3){
        this.info = "上海知名川菜连锁店，合作1年来，商户累计7万多名会员，回头率达到26%，为商户带回170多万营业额。商户使用了储值功能，不仅增加了会员的忠诚度，更为商户增加了300多万的流动资金，提升了运营效率。商户非常信赖智能营销，优惠券使用率达到3%，在无需人工操作的情况下带回老会员让商户非常省心，放精力放在提升菜品和服务上。"
      }else if(ind==4){
        this.info = "上海老牌中原菜连锁餐厅，合作1年半，商户累计近20万名会员，带回营业额超过300万，商户送出近30万积分。客户成功团队为商户策划周年庆活动，活动期间销券数1200多张，带回30多万营业额。作为十几年的老店，商户很重视老会员，通过再惠的系统，为商户积累了大量会员，提升了会员的活跃度和忠诚度，让商户和会员关系更加紧密。"
      }else if(ind==5){
        this.info = "上海知名中高端日本料理连锁店，合作半年多时间，累计4万多名会员，带回营业额超过1600万。作为高客单低频消费的日料店，客户成功团队帮助商户制定积分好礼活动，共送出近200万积分，兑换率达36%，策划了带动工作日消费的优惠活动，带回100多名客户。配合朋友圈广告推广，帮助商户提升了品牌知名度。商户评价再惠的服务是会员领域专业度和亲和度最高的，对于数据的分析，问题的发掘，营销的建议都带给商家很大的收获。"
      }else if(ind==6){
        this.info = "上海小有名气的酸菜鱼火锅店，合作超过1年半，商户累计超过1万名会员，商户对会员等级进行细分，设置丰富的权益和奖励，累计送出25万多积分，兑换率达到4%。此外，商户为会员量身定制优惠活动，客户回头率高达40%，带回100多万营业额。商户评价产品功能比较全面且好用，数据精细，使用会员管理后带来了巨大收益，客户成功团队非常认真负责，为商户经营出谋划策，定期沟通数据，帮助商户大大提升了运营效率。"
      }else if(ind==7){
        this.info = "与再惠合作1年多，累计近1万名会员，商户专注于餐饮服务，少有精力主动做活动，但通过智能营销功能，无人操作系统24小时精准自动发券，累计超过9万张，使用率近4%，带回营业额70多万。再惠客户成功团队每月会给商户做一些数据分析，相当于外聘的营销策划人员，给商户带来了极大的价值。"
      }else if(ind==8){
        this.info = "与再惠合作10个月，累计近5000名会员，商户通过智能营销以及主动营销，让会员复购率高达80%，带回营业额超过100万，在西餐届取得了傲人的成绩。期间还为商户针对流失会员多次策划了节日活动，帮助商户大大提升了客单价和营业额。"
      }else if(ind==9){
        this.info = "开业10多年的老牌连锁粤菜馆，合作半年多，商户累计超过1.5万名会员，带回近100万营业额。商户送出积分超过250万，兑换率超过16%。地处非核心商业区，依靠口碑留住客户，商户评价再惠的会员管理和自动化营销系统帮助他们积累会员，提供更精准的活动和优质的服务，配合朋友圈广告推广，较好地提升了品牌影响力、会员的满意度和活跃度。"
      }else if(ind==10){
        this.info = "业内知名的海鲜自助餐厅，合作超过1年，商户已累计3万多会员，且会员回头率高达55%，客户成功团队针对商户的运营状况和会员情况，策划了三人同行送半价券或四人同行一人免单类的活动，通过代金券大大提高了会员的复购率，累计给商户带回80多万的营业额，也让商户进一步提升了知名度和美誉度。"
      }

    }
  }
}
</script>
<style scoped>
#showcase{
  position: relative;
}
.font-color{
  color: #ffffff;
}
.box{
  width: 710px;
  margin: 50px auto 80px;
  font-size: 0;
}
.box .content{
  height: 85px;
  width: 650px;
  margin: 0 auto;
  color: #686868;
  font-size: 12px;
  margin-top: 50px;
}
.list{
  display: inline-block;
  margin: 10px 29px;
  height: 100px;
  vertical-align: top;
  cursor: pointer;
}
.box .list>div:first-child{
  width: 80px;
  height: 60px;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 10px 0;
  
}
.box .list>div:last-child{
  color: #686868;
  font-size: 10px;
  text-align: center
}
.case1{
  background-image: url("../assets/images/case1.png");
  background-size: 40px 40px;
}
.case2{
  background-image: url("../assets/images/case2.png");
  background-size: 50px 49px;
}
.case3{
  background-image: url("../assets/images/case3.png");
  background-size: 48px 48px;
}
.case4{
  background-image: url("../assets/images/case4.png");
  background-size: 80px 30px;
}
.case5{
  background-image: url("../assets/images/case5.png");
  background-size: 50px 47px;
}
.case6{
  background-image: url("../assets/images/case6.png");
  background-size: 86px 30px;
}
.case7{
  background-image: url("../assets/images/case7.png");
  background-size: 54px 28px;
}
.case8{
  background-image: url("../assets/images/case8.png");
  background-size: 57px 56px;
}
.case9{
  background-image: url("../assets/images/case9.png");
  background-size: 52px 51px;
}
.case10{
  background-image: url("../assets/images/case10.png");
  background-size: 60px 60px;
}
.logo{
  display: inline-block;
  width: 84px;
  height: 30px;
  margin-left:37px;
  margin-top: 29px;
  background-image: url('../assets/images/logoWhite.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  z-index: 1;
  position: relative;
}
.headerTop{
  height: 400px;
  background: #364FB9;
}
.headText{
  width: 630px;
  margin: 81px auto;
  text-align: center;
}
.headText h1{
  font-size: 40px;
  color: #ffffff;
  font-weight: 300;
}
.headText p{
  font-size: 14px;
  color: #ffffff;
  font-weight: 100;
  margin-bottom: 0
}
.bg14{
  position: absolute;
  width: 274px;
  height: 363px;
  background-image: url("../assets/images/bg/bg14.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 0;
  left: 0;
  bottom: 0;
}
.bg15{
  position: absolute;
  width: 205px;
  height: 243px;
  background-image: url("../assets/images/bg/bg15.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 1;
  right: 0;
  top: 0;
}
</style>
