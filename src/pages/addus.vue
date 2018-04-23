<template>
  <div id="addus">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <div class="handle">
      <router-link to="/">
        <div class="logo"></div>
      </router-link>
      <zh-nav class="font-color"></zh-nav>
      <zh-nav-button message="登录" class="btn btn-white"></zh-nav-button>
    </div>
<swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide> <div class="bg1"></div></swiper-slide>
    <swiper-slide> <div class="bg2"></div></swiper-slide>
    <swiper-slide> <div class="bg3"></div></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
   
    <zh-detail class="box">
      <div class="list">
        <h2>再惠做什么</h2>
        <div class="text1">再惠是一家专注于为中国本地生活服务领域的商户提供一站式营销和顾客忠诚度管理的互联网大数据价值链公司。<br>
            简而言之就是：用科技让商户和消费者互惠互利，爱到天荒地老永不分离。</div>
      </div>
      <div class="list">
        <h2>为什么要做这些</h2>
        <div class="text2">在他人看来，交易不过是冰冷的消费收费，<br>
                      在我们眼中，交易却是一段缘份的开始，一份专属关怀的延续。</div>
      </div>
      <div class="list">
        <h2>这是一群什么样的人</h2>
        <div class="text3">再惠是一个齐心高效的团队，认定一份事业，付出千万热情。成员都来自于人工智能、大数据、SaaS、本地生活服务等领域的精英，毕业于加州大学伯克利分校、斯坦福大学、波士顿学院、复旦大学、上海交通大学、香港中文大学等国内外知名学府，服务过携程、Microsoft、甲骨文、SAP、阿里巴巴、滴滴、美团点评、饿了么、星巴克、必胜客等著名公司。一个S级热情、逗逼、勤奋的大咖群体，互相学习、碰撞、帮助对方，成就彼此。</div>
        <div class="text3">两年多来我们投入百分百精力专注于产品，追求极致，几乎没有新闻，低调地不像一家互联网公司。我们一直在努力改写顾商交互模式，打造消费大数据平台，但我们深知创业路漫漫，我们需要更多志同道合的小伙伴，与我们风雨同行并肩作战，打造成为一家为中国生活服务领域提供自动化营销和顾客忠诚度管理的伟大的SaaS公司的奇迹。</div>
        <div class="friend2">入职两周年的小伙伴</div>
        <div class="photo-list">
          <div v-for="item in 26">
            <img @mouseover="showImg1(item-1)" @mouseout="showImg2(item-1)" :src="pic3[item-1]">
          </div>
        </div>
        <div class="friend">每一位入职满两年的小伙伴，我们都会把TA放上官网</div>
        <div class="label">
          <div>
            <div class="label1 shake1">据说我们销售是同行里薪资最高的</div>
          </div>
           <div>
            <div class="label2">硅谷公司文化氛围，开放、自由，鼓励我们试错和创新</div>
          </div>
           <div>
            <div class="label3">仰望技术大佬们年终奖拿到手软</div>
          </div>
          <div>
            <div class="label4">努力跟公司一起成长，坐等期权变现</div>
          </div>
           <div>
            <div class="label5">每天睡到自然醒</div>
          </div>
          <div>
            <div class="label6">在市中心高大上的办公楼上班，地铁方便，每天好心情</div>
          </div>
           <div>
            <div class="label7">全球旅行，我们在海岛沙滩等你哦</div>
          </div>
           <div>
            <div class="label8">定期更换午饭和晚饭菜单，选择困难症怎么办？</div>
          </div>
          <div>
            <div class="label9">小弟很荣幸跟大佬手把手带领，成长飞速</div>
          </div>
           <div>
            <div class="label10">旅行、回家不发愁，假期够多，说走就走</div>
          </div>
        </div>
      </div>
      <div class="list">
        <h2>我们希望遇见谁</h2>
        <div class="text4">如果你与我们有相同的情怀和梦想；如果你身怀绝技，希望通过努力为世界创造价值；<br>
如果你有有趣的经历、中毒级的爱好并长久坚持、喜欢互联网科技，快到碗里来！风里雨里，我们在这里等你！</div>
        <div class="text5">再惠曾在2016、2017年荣获智联招聘和北京大学社会调研研究中心共同颁发的“中国年度最佳雇主提名奖”。</div>
        <div class="button-list">
          <button 
          v-for="cell in button" 
          :class="{ 'btn-select': cell.type == selected }" 
          @click="getjob(cell.type)" 
          class="btn">{{cell.name}}</button>
          
        </div>
        <div class="job-list"  v-for="todo in showjob">
          <div class="job">
            <div class="job-name">{{todo.name}}</div>
            <div class="job-site">{{todo.site}}</div>
          </div>
          
        </div>
        <div @click="goLagou" class="all-job">查看具体招聘信息</div>
      </div>
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
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'huitouke',
  components: {
    zhDetail,
    zhFooter,
    zhNav,
    zhNavButton,
    swiper,
    swiperSlide
  },
  data(){
    return {
      pic1:[
        "../static/images/a1.jpg",
        "../static/images/b1.jpg",
        "../static/images/c1.jpg",
        "../static/images/d1.jpg",
        "../static/images/e1.jpg",
        "../static/images/f1.jpg",
        "../static/images/g1.jpg",
        "../static/images/h1.jpg",
        "../static/images/i1.jpg",
        "../static/images/j1.jpg",
        "../static/images/k1.jpg",
        "../static/images/l1.jpg",
        "../static/images/m1.jpg",
        "../static/images/n1.jpg",
        "../static/images/o1.jpg",
        "../static/images/p1.jpg",
        "../static/images/q1.jpg",
        "../static/images/r1.jpg",
        "../static/images/s1.jpg",
        "../static/images/t1.jpg",
        "../static/images/u1.jpg",
        "../static/images/v1.jpg",
        "../static/images/w1.jpg",
        "../static/images/x1.jpg",
        "../static/images/y1.jpg",
        "../static/images/z1.jpg"
      ],
      pic2:[
        "../static/images/a2.jpg",
        "../static/images/b2.jpg",
        "../static/images/c2.jpg",
        "../static/images/d2.jpg",
        "../static/images/e2.jpg",
        "../static/images/f2.jpg",
        "../static/images/g2.jpg",
        "../static/images/h2.jpg",
        "../static/images/i2.jpg",
        "../static/images/j2.jpg",
        "../static/images/k2.jpg",
        "../static/images/l2.jpg",
        "../static/images/m2.jpg",
        "../static/images/n2.jpg",
        "../static/images/o2.jpg",
        "../static/images/p2.jpg",
        "../static/images/q2.jpg",
        "../static/images/r2.jpg",
        "../static/images/s2.jpg",
        "../static/images/t2.jpg",
        "../static/images/u2.jpg",
        "../static/images/v2.jpg",
        "../static/images/w2.jpg",
        "../static/images/x2.jpg",
        "../static/images/y2.jpg",
        "../static/images/z2.jpg"
      ],
      pic3:[
        "../static/images/a1.jpg",
        "../static/images/b1.jpg",
        "../static/images/c1.jpg",
        "../static/images/d1.jpg",
        "../static/images/e1.jpg",
        "../static/images/f1.jpg",
        "../static/images/g1.jpg",
        "../static/images/h1.jpg",
        "../static/images/i1.jpg",
        "../static/images/j1.jpg",
        "../static/images/k1.jpg",
        "../static/images/l1.jpg",
        "../static/images/m1.jpg",
        "../static/images/n1.jpg",
        "../static/images/o1.jpg",
        "../static/images/p1.jpg",
        "../static/images/q1.jpg",
        "../static/images/r1.jpg",
        "../static/images/s1.jpg",
        "../static/images/t1.jpg",
        "../static/images/u1.jpg",
        "../static/images/v1.jpg",
        "../static/images/w1.jpg",
        "../static/images/x1.jpg",
        "../static/images/y1.jpg",
        "../static/images/z1.jpg"
      ],
      swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
        loop : true,
        pagination: {
          el: '.swiper-pagination',
        },
         navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: true,
      },
      selected: "jishu",
      button:[{
        name:"技术",
        type:"jishu"
      },{
        name:"设计",
        type:"sheji"
      },{
        name:"影业",
        type:"yingye"
      },{
        name:"销售",
        type:"xiaoshou"
      },{
        name:"人事",
        type:"renshi"
      },{
        name:"全部",
        type:"all"
      }],
      job:{
        all:[{
          name:"前端工程师",
          site:"上海"
        },{
          name:"高级后端（python）工程师",
          site:"上海"
        },{
          name:"高级JAVA工程师",
          site:"上海"
        },{
          name:"IOS工程师",
          site:"上海"
        },{
          name:"架构师",
          site:"上海"
        },{
          name:"设计师",
          site:"上海"
        },{
          name:"插画师",
          site:"上海"
        },{
          name:"美食编导",
          site:"上海"
        },{
          name:"美食主播",
          site:"上海"
        },{
          name:"城市经理",
          site:"南京"
        },{
          name:"销售顾问",
          site:"上海"
        },{
          name:"员工关系专员",
          site:"上海"
        }],
        jishu:[{
          name:"前端工程师",
          site:"上海"
        },{
          name:"高级后端（python）工程师",
          site:"上海"
        },{
          name:"高级JAVA工程师",
          site:"上海"
        },{
          name:"IOS工程师",
          site:"上海"
        },{
          name:"架构师",
          site:"上海"
        }],
        sheji:[{
          name:"设计师",
          site:"上海"
        },{
          name:"插画师",
          site:"上海"
        }],
        yingye:[{
          name:"美食编导",
          site:"上海"
        },{
          name:"美食主播",
          site:"上海"
        }],
        xiaoshou:[{
          name:"城市经理",
          site:"南京"
        },{
          name:"销售顾问",
          site:"上海"
        }],
        renshi:[{
          name:"员工关系专员",
          site:"上海"
        }]
      },
      showjob:[{
          name:"前端工程师",
          site:"上海"
        },{
          name:"高级后端（python）工程师",
          site:"上海"
        },{
          name:"高级JAVA工程师",
          site:"上海"
        },{
          name:"IOS工程师",
          site:"上海"
        },{
          name:"架构师",
          site:"上海"
        }]
    }
  },
  methods: {
    getjob: function(jobStr){
      this.selected = jobStr;
      if(jobStr=="jishu"){
        return this.showjob = this.job.jishu;
      }else if(jobStr=="sheji"){
        return this.showjob = this.job.sheji;
      }else if(jobStr=="yingye"){
        return this.showjob = this.job.yingye;
      }else if(jobStr=="xiaoshou"){
        return this.showjob = this.job.xiaoshou;
      }else if(jobStr=="renshi"){
        return this.showjob = this.job.renshi;
      }else if(jobStr=="all"){
        return this.showjob = this.job.all;
      }
       
    },
    goLagou(){
      window.open("https://www.lagou.com/gongsi/j86312.html");
    },
    showImg2:function (n) {
      this.$set(this.pic3, n, this.pic1[n]);
    },
    showImg1:function (n) {
      this.$set(this.pic3, n, this.pic2[n]);
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
#addus{
  position: relative;
}
.handle{
  position: absolute;
  top: 0;
  z-index: 100;
}
.swiper-button-prev{
  left: 65px;
}
.swiper-button-next{
  right: 65px;
}
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
.box{
  padding-top:20px;
  margin-bottom: 140px;
}
.list{
  width: 830px;
  margin: 70px auto 0;
}
.list>h2{
  margin-top:70px;
  color: #58afff;
  font-size: 32px;
  font-weight: normal;
  text-align: center;
}
.text1{
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.8;
  margin-top:20px; 
  padding-bottom: 70px;
}
.text2{
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.8;
  margin-top:20px; 
  padding-bottom: 70px;
}
.text3{
  text-align: left;
  letter-spacing: 2px;
  line-height: 1.8;
  margin-top:20px; 
}
.text4{
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.8;
  margin-top:20px; 
}
.text5{
  text-align: center;
  letter-spacing: 2px;
  line-height: 1.8;
  color: #58afff;
  font-weight: normal;
  margin-top: 10px;
  font-size: 12px;
}
.photo-list{
  position: relative;
  width: 830px;
  height: 605px;
  margin-top: 44px;
  margin-bottom: 27px;
}
.photo-list>div{
  width: 118px;
  height: 150px;
  float: left;
  cursor: pointer;
  position: relative;
}
.photo-list>div>img{
  position: absolute;
  top: 0;
  left: 0;
  width: 118px;
  height: 150px;
}
.photo-list>div>span{
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 180px;
}
.label{
  width: 860px;
}
.label>div>div{
  position: relative;
  padding: 7px 12px;
  border: 2px solid #58afff;
  color: #58afff;
  font-size: 14px;
  border-radius: 25px;
  display: inline-block;
  margin: 5px;
}
.label1{
  left:336px; top:516px;
  animation:ani1 500ms linear 0ms 1 alternate forwards,shake 1500ms linear 500ms infinite alternate;
 
}

.label2{
  left:256px; top:486px;
  margin-bottom: 25px!important;
  animation:ani2 500ms linear 250ms 1 alternate forwards,shake 1500ms linear 750ms infinite alternate;
}
.label3{
  left:347px; top:400px;
 animation:ani3 500ms linear 500ms 1 alternate forwards,shake 1500ms linear 1000ms infinite alternate;
}
.label4{
  left:329px; top:352px;
  margin-bottom: 17px!important;
  animation:ani4 500ms linear 750ms 1 alternate forwards,shake 1500ms linear 1250ms infinite alternate;
}
.label5{
  left:365px; top:292px;
  animation:ani5 500ms linear 1000ms 1 alternate forwards,shake 1000ms linear 1500ms infinite alternate;
}
.label6{
  left:270px; top:244px;
  margin-bottom: 44px!important;
  animation:ani6 500ms linear 1250ms 1 alternate forwards,shake 1500ms linear 1750ms infinite alternate;
}
.label7{
  left:344px; top:157px;
  margin-bottom: 9px!important;
  animation:ani7 500ms linear 1500ms 1 alternate forwards,shake 1000ms linear 2000ms infinite alternate;
}
.label8{
  left:300px; top:105px;
  animation:ani8 500ms linear 1750ms 1 alternate forwards,shake 1500ms linear 2250ms infinite alternate;
}
.label9{
  left:310px; top:57px;
  margin-bottom: 14px!important;
  animation:ani9 500ms linear 2000ms 1 alternate forwards,shake 1000ms linear 2500ms infinite alternate;
}
.label10{
  left:310px;
  animation:shake 1000ms linear 2750ms infinite alternate;
}
.btn-select{
  background-color: #58afff;
  color: #ffffff;
}
.button-list{
  text-align: center;
  margin: 105px 20px 70px;
}
.button-list>button{
  text-align: center;
  margin: 0 25px;
}
.button-list>button:first-child{
  text-align: center;
  margin: 0 25px 0 0;
}
.button-list>button:last-child{
  text-align: center;
  margin: 0 0 0 25px;
}
.job-list{
  margin-bottom: 29px;
}
.job{
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #727272;
}
.job-name{
  float: left;
  color: #4f4f4f;
}
.job-site{
  float: right;
  color: #4f4f4f;
}
.all-job{
  color: #58afff;
  cursor: pointer;
  font-weight: normal;
}
.friend{
  margin-bottom: 57px;
  text-align: center;
}
.friend2{
  color: #58AFFF;
  font-weight: normal;
  font-size: 32px;
  margin: 120px 0 20px 0;
  text-align: center;
}
.bg1{
  height: 400px;
  background-image: url("../assets/images/us1.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}
.bg2{
  height: 400px;
  background-image: url("../assets/images/us2.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center bottom;
}
.bg3{
  height: 400px;
  background-image: url("../assets/images/us3.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}
@keyframes ani1{
  0%   {left:336px; top:516px;}
  100% {left:28px; top:0px;}
}
@keyframes ani2{
  0%   {left:256px; top:486px;}
  100% {left:374px; top:0px;}
}
@keyframes ani3{
  0%   {left:347px; top:400px;}
  100% {left:80px; top:0px;}
}
@keyframes ani4{
  0%   {left:329px; top:352px;}
  100% {left:441px; top:0px;}
}
@keyframes ani5{
  0%   {left:365px; top:292px;}
  100% {left: 43px;; top:0px;}
}
@keyframes ani6{
  0%   {left:270px; top:244px;}
  100% {left: 370px; top:0px;}
}
@keyframes ani7{
  0%   {left:344px; top:157px;}
  100% {left: 141px; top:0px;}
}
@keyframes ani8{
  0%   {left:300px; top:105px;}
  100% {left: 432px; top:0px;}
}
@keyframes ani9{
  0%   {left:310px; top:57px;}
  100% {left: 10px; top:0px;}
}
@keyframes ani10{
  0%   {left:310px; top:0px;}
  100% {left: 310px; top:0px;}
}
@keyframes shake {
  0%   {transform: translateX(-30px);}
  100% {transform: translateX(30px);}
}
</style>
