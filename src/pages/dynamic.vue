<template>
  <div id="dongtai">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <div class="bg16"></div>
    <div class="bg19"></div>
    <zh-header-product
      class="headerTop5"
      msgTop="动态"
      msgBottom1="最新新闻报道，带您了解公司发展动向"
    ></zh-header-product>
    <zh-detail>
      <div class="bg17"></div>
      <div class="bg18"></div>
      <zh-jumbotron class="margin-t-100" zhTitle="新闻报道" >
        <div class="news">
          
          <div class="news-list">
            <div class="left-logo news1"></div>
            <a target="_blank" href="http://www.prnasia.com/story/167040-1.shtml" >
            <div class="right-text">
              <p>机器学习：再惠开启会员精准营销新时代</p>
              <div>2016-12-23 17:57</div>
            </div>
            </a>
          </div>
          <div class="news-list">
            <div class="left-logo news2"></div>
            <a target="_blank" href="http://www.ceweekly.cn/2018/0202/218204.shtml" >
            <div class="right-text">
              <p>再惠获2017<br>中国信息化和软件服务业年度影响力企业奖</p>
              <div>2017-06-23 07:15</div>
            </div>
             </a>
          </div>
          <div class="news-list">
            <div class="left-logo news3"></div>
            <a target="_blank" href="http://dy.163.com/v2/article/detail/D8RUURF00511KEO8.html" >
            <div class="right-text">
              <p>11万日均浏览量，小制作的“一碗”是如何做到的？</p>
              <div>2017-12-03 11:27</div>
            </div>
             </a>
          </div>
        </div>
      </zh-jumbotron>
      <zh-jumbotron class="margin-t-100" zhTitle="媒体合作" id="anchor">
        <div class="media">
          <div class="media-list">
            <div class="left-logo media1"></div>
            <a target="_blank" href="https://h5.dianping.com/app/app-video-mobile/index.html?videoId=688895" >
            <div class="m-right-text">
              <p>重口味约饭来不来</p>
              <div>如此猎奇吃鸡大法你肯定还没感受过！ </div>
            </div>
            </a>
          </div>
          <div class="media-list">
            <div class="left-logo media2"></div>
            <a target="_blank" href="https://www.bilibili.com/video/av21072617" >
            <div class="m-right-text">
              <p>拒绝了188元的毛肚之后</p>
              <div>我们免费喝了一杯1000元/斤的石斛榨的汁！</div>
            </div>
            </a>
          </div>
          <div class="media-list">
            <div class="left-logo media3"></div>
            <a target="_blank" href="https://www.miaopai.com/show/DOyCueDRLNB2VZM08OW6ABpvrH~gNdF7wmi01A__.htm" >
            <div class="m-right-text">
              <p>腊八</p>
              <div>上海巷弄里的人情味，在这碗四块五的粥里喝到了</div>
            </div>
            </a>
          </div>
          <div class="media-list">
            <div class="left-logo media4"></div>
            <a target="_blank" href="http://kuaibao.qq.com/s/20171127V0CLOF00" >
            <div class="m-right-text">
              <p>戏精少女的欢乐吃播</p>
              <div>oh, 菠萝包真的令人迷恋！</div>
            </div>
            </a>
          </div>
          <div class="media-list">
            <div class="left-logo media5"></div>
            <a target="_blank" href="https://my.tv.sohu.com/us/327201121/95349682.shtml" >
            <div class="m-right-text">
              <p>蛤？</p>
              <div>螺蛳粉的臭味竟不是来自螺蛳？</div>
            </div>
            </a>
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
import zhJumbotron from '@/components/zhJumbotron.vue'

export default {
  name: 'dongtai',
  components: {
    zhHeaderProduct,
    zhDetail,
    zhFooter,
    zhJumbotron,
  },
  mounted:function(){
    this.meiti();
    
  },
  methods:{
    meiti(){
      if(this.$route.params.num==123){
        window.scrollTo(0,1050);
      }
      
    }
  }
}
</script>
<style scoped>
#dongtai{
  position: relative;
}

.imageText{
  display: inline-block;
  width: 110px;
  height: 150px;
  vertical-align: top;
  margin: 44px 80px;
}
.news{
  margin: 45px;
}
.media{
  margin: 45px;
  margin-bottom: 110px;
}
.news-list{
  width: 610px;
  margin: 0 auto 40px;
  text-align: left;
  font-size: 0;
}
.media-list{
  width: 610px;
  margin: 0 auto 40px;
  text-align: left;
  font-size: 0;
}
.left-logo{
  width: 155px;
  height: 112px;
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center center; 
  margin-right: 35px;
}
.news1{
  background-size: 155px 112px;
  background-image: url("../assets/images/news1.png")
}

.news2{
  background-size: 116px 47px;
  background-image: url("../assets/images/news2.png")
}
.news3{
  background-size: 115px 39px;
  background-image: url("../assets/images/news3.png")
}
.media1{
  background-size: 123px 38px;
  background-image: url("../assets/images/media1.png")
}
.media2{
  background-size: 72px 42px;
  background-image: url("../assets/images/media2.png")
}
.media3{
  background-size: 92px 54px;
  background-image: url("../assets/images/media3.png")
}
.media4{
  background-size: 147px 69px;
  background-image: url("../assets/images/media4.png")
}
.media5{
  background-size: 95px 52px;
  background-image: url("../assets/images/media5.png")
}
.right-text{
  height: 68px;
  width: 410px;
  color: #4f4f4f;
  display: inline-block;
  vertical-align: top;
  margin-top: 22px;
  border-left: 1px solid #cccccc;
  padding-left: 45px;
}
.right-text>p{
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 2px;
  height: 40px;
  margin: 0;
  margin-top: 5px;
}

.m-right-text{
  color: #4f4f4f;
  height: 50px;
  width: 410px;
  display: inline-block;
  vertical-align: top;
  margin-top: 30px;
  border-left: 1px solid #cccccc;
  padding-left: 45px;
}
.m-right-text>p{
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 2px;
  height: 24px;
  margin: 0;
  margin-top: 5px;
}
.m-right-text>div{
  font-size: 12px;
  letter-spacing: 2px;
}
.right-text>div{
  font-size: 12px;
  letter-spacing: 2px;
}
.margin-t-100{
  margin-top: 100px;
}
.bg16{
  position: absolute;
  width: 343px;
  height: 225px;
  background-image: url("../assets/images/bg/bg16.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 1;
  right: 0;
  top: 0px;
}
.bg17{
  position: absolute;
  width: 130px;
  height: 394px;
  background-image: url("../assets/images/bg/bg17.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  right: 0;
  top: 342px;
}
.bg18{
  position: absolute;
  width: 113px;
  height: 275px;
  background-image: url("../assets/images/bg/bg18.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  left: 0;
  bottom: 62px;
}
.bg19{
  position: absolute;
  width: 540px;
  height: 397px;
  background-image: url("../assets/images/bg/bg19.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 1;
  left: 0;
  top: 2px;
}
</style>
