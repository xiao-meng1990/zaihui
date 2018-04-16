<template>
  <div id="brand">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <zh-header-product
      class="headerTop6"
      msgTop="品牌服务"
      msgCenter="一站式营销：实现每个商户的品牌梦想"
      msgBottom1="专注于品牌整合设计，围绕品牌和产品，选择主流媒介传播方式，"
      msgBottom2="通过创意内容，帮助商户获得精准流量，"
      msgBottom3="高效转化新客，实现商业价值，提升品牌影响力。"
    ></zh-header-product>
    <zh-detail style="margin-bottom:70px;">
      <div class="bg11"></div>
      <div class="bg12"></div>
      <div class="bg13"></div>
      <markup style="margin-top:90px;" message="松子创意：高端品牌视觉定制" :describe="this.module1">
        <ul class="nav nav-tabs" role="tablist">
          <li @mouseover="showcase1(0)" :class="{active:showstyle1[0]}" class="xiaoshou"><a>品牌故事</a></li>
          <li @mouseover="showcase1(1)" :class="{active:showstyle1[1]}" class="xiaoshou"><a>团队实力</a></li>
          <li @mouseover="showcase1(2)" :class="{active:showstyle1[2]}" class="xiaoshou"><a>服务优势</a></li>
          <li @mouseover="showcase1(3)" :class="{active:showstyle1[3]}" class="xiaoshou"><a>服务内容</a></li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" :class="{active:showstyle1[0]}" class="tab-pane zh-tabs" id="navfirst1">
            <div>松子看似只是一颗小小的微不足道的种子，却包含了无穷的能量</div>
            <div>松子不仅是再惠的吉祥物松鼠惠惠最喜欢的食物，也是各位商户的精神食粮</div>
            <div>松子创意希望能为商户播下种子，通过专业的品牌视觉定制服务</div>
            <div>让品牌茁壮成长，收获辛苦耕耘的果实</div>
          </div>
          <div role="tabpanel" :class="{active:showstyle1[1]}" class="tab-pane zh-tabs" id="navfirst2">
            <div>团队成员曾服务于正邦、饿了么、阿里云、天猫、豆捞坊等知名企业，</div>
            <div>对互联网和餐饮行业有深入了解，</div>
            <div>熟知互联网时代的设计趋势，帮助商户提升商户品牌价值。</div>
          </div>
          <div role="tabpanel" :class="{active:showstyle1[2]}" class="tab-pane zh-tabs" id="navfirst3">
            <div class="first-img1">
              <div></div>
              <p>专注服务餐饮商户<br>
                  以小价格享受国际<br>
                  设计公司的专业品质</p>
            </div>
            <div class="first-img2">
              <div></div>
              <p>精选定制套餐<br>
                系统化呈现视觉效果</p>
            </div>
            <div class="first-img3">
              <div></div>
              <p>专业的咨询<br>
                高频的沟通，精益求精<br>
                实现客户需求</p>
            </div>
          </div>
          <div role="tabpanel" :class="{active:showstyle1[3]}" class="tab-pane zh-tabs" id="navfirst4">
            <div class="second-img1">
              <div></div>
              <p>高端品牌视觉定制套餐</p>
            </div>
            <div class="second-img2">
              <div></div>
              <p>个性化视觉定制</p>
            </div>
          </div>
        </div>
      </markup>
      <markup style="margin-top:10px;" message="一碗编辑部：年轻人热捧的探店视频" :describe="this.module2">
        <ul class="nav nav-tabs" role="tablist">
          <li @mouseover="showcase2(0)" :class="{active:showstyle2[0]}" class="xiaoshou"><a>品牌故事</a></li>
          <li @mouseover="showcase2(1)" :class="{active:showstyle2[1]}" class="xiaoshou"><a>团队实力</a></li>
          <li @mouseover="showcase2(2)" :class="{active:showstyle2[2]}" class="xiaoshou"><a>产品优势</a></li>
          <li @mouseover="showcase2(3)" :class="{active:showstyle2[3]}" class="xiaoshou"><a>投放渠道</a></li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" :class="{active:showstyle2[0]}" class="tab-pane zh-tabs" id="navsecond1">
            <div>自古“民以食为天”，我们与亲朋好友不仅享受美食，</div>
            <div>更沉浸于愉快的沟通交流。作为在中国饮食文化中有着重要地位的碗，</div>
            <div>承载起了人与人之间的联系。一个碗，抚慰了我们的胃，</div>
            <div>拉近了彼此的距离，承载了酸甜苦辣的人生故事。</div>
            <div>一碗编辑部希望通过记录饮食男女的真实生活，</div>
            <div>发掘人与食物之间的有趣故事，让食物有烟火气更充满人情味</div>
          </div>
          <div role="tabpanel" :class="{active:showstyle2[1]}" class="tab-pane zh-tabs" id="navsecond2">
            <div>团队成员都是美食狂热爱好者，曾任职于Enjoy、悦食中国等专业美食平台，</div>
            <div>为全国多家知名餐厅撰稿，热衷于发掘不为人知的地道美食。</div>
          </div>
          <div role="tabpanel" :class="{active:showstyle2[2]}" class="tab-pane zh-tabs" id="navsecond3">
            <div class="third-img1">
              <div></div>
              <p>专注服务餐饮商户<br>
                  以小价格享受国际<br>
                  设计公司的专业品质</p>
            </div>
            <div class="third-img2">
              <div></div>
              <p>专注服务餐饮商户<br>
                  以小价格享受国际<br>
                  设计公司的专业品质</p>
            </div>
            <div class="third-img3">
              <div></div>
              <p>专注服务餐饮商户<br>
                  以小价格享受国际<br>
                  设计公司的专业品质</p>
            </div>
            <div class="third-img4">
              <div></div>
              <p>专注服务餐饮商户<br>
                  以小价格享受国际<br>
                  设计公司的专业品质</p>
            </div>
          </div>
          <div role="tabpanel" :class="{active:showstyle2[3]}" class="tab-pane" id="navsecond4">
            <div class="text-width">1.视频投放渠道：腾讯、爱奇艺、优酷土豆、哔哩哔哩、搜狐、秒拍、梨视频、今日头条、微博等20多个平台渠道；</div>
            <div class="text-width">2.大众点评曝光位：一碗编辑部的主页和商户主页的餐厅亮点栏目；</div>
            <div class="text-width">3.微信朋友圈广告；</div>
            <div class="text-width">4.小红书APP：展示商户环境和菜品，吸引精准女性消费者。</div>
          </div>
        </div>
      </markup>
      <markup style="margin-top:10px;" message="惠流量：海量曝光，精准拓客" :describe="this.module3">
        <ul class="nav nav-tabs" role="tablist">
          <li @mouseover="showcase3(0)" :class="{active:showstyle3[0]}" class="xiaoshou"><a>产品优势</a></li>
          <li @mouseover="showcase3(1)" :class="{active:showstyle3[1]}" class="xiaoshou"><a>产品内容</a></li>
        </ul>
        <div class="tab-content">
          <div :class="{active:showstyle3[0]}" class="tab-pane zh-tabs" id="navthird1">
            <span style="border-right: 1px solid #B9B9B9;">惠生活</span>
            <span style="border-right: 1px solid #B9B9B9;">礼品卡</span>
            <span>公众号推文</span>
            <span style="border-right: 1px solid #B9B9B9;padding: 0px 54px;">朋广设计推广</span>
            <span>H5</span>
          </div>
          <div :class="{active:showstyle3[1]}" class="tab-pane zh-tabs" id="navthird2">
            <div class="fourth-img1">
              <div></div>
              <p>专注服务餐饮商户<br>
                以小价格享受餐饮巨头的<br>
                专业营销方案</p>
            </div>
            <div class="fourth-img2">
              <div></div>
              <p>自主掌握会员<br>
                领取优惠券即成为会员<br>
                高效转化外部流量</p>
            </div>
            <div class="fourth-img3">
              <div></div>
              <p>一举两得<br>
                既可获取新会员<br>
                又能提升老会员消费频次</p>
            </div>
          </div>
        </div>
      </markup>
      <markup style="margin-top:10px;" message="客户成功部：商户运维和营销的智囊团" :describe="this.module4">
        <ul class="nav nav-tabs" role="tablist">
          <li @mouseover="showcase4(0)" :class="{active:showstyle4[0]}" class="xiaoshou"><a>日常维护</a></li>
          <li @mouseover="showcase4(1)" :class="{active:showstyle4[1]}" class="xiaoshou"><a>深度营销</a></li>
          <li @mouseover="showcase4(2)" :class="{active:showstyle4[2]}" class="xiaoshou"><a>惠撩人</a></li>
          <li @mouseover="showcase4(3)" :class="{active:showstyle4[3]}" class="xiaoshou"><a>再惠之星</a></li>
        </ul>
        <div class="tab-content">
          <div :class="{active:showstyle4[0]}" class="tab-pane zh-tabs" id="navfourth1">
            <div class="fifth-img1">
              <div></div>
              <span>上线培训</span>
              <p>确认营销活动和上线内容<br>
                  制定培训计划和材料<br>
                  对全员进行培训指导</p>
            </div>
            <div class="fifth-img2">
              <div></div>
              <span>数据监控</span>
              <p>数据实时同步后台<br>
                  效果实时追踪</p>  
            </div>
            <div class="fifth-img3">
              <div></div>
              <span>数据分析</span>
              <p>结合商户实际情况<br>
                  对设定的销售目标<br>
                  进行分析指导</p>
            </div>
          </div>
          <div :class="{active:showstyle4[1]}" class="tab-pane zh-tabs" id="navfourth2">
            <div class="sixth-img1">
              <div></div>
              <span>活动策划</span>
              <p>根据行业和商户情况<br>
                  结合时下热点<br>
                  制定活动策划方案</p>
            </div>
            <div class="sixth-img2">
              <div></div>
              <span>活动实施</span>
              <p>确定活动主题和实施详情<br>
                  协助商户开展活动</p>  
            </div>
            <div class="sixth-img3">
              <div></div>
              <span>活动解析</span>
              <p>收集活动数据<br>
                  进行全方位的分析与总结</p>
            </div>
          </div>
          <div :class="{active:showstyle4[2]}" class="tab-pane zh-tabs" id="navfourth3">
            <div>提供专业的本地生活服务领域人才招聘，</div>
            <div>帮助商户解决招人难的问题，提高商户运营效率。</div>
          </div>
          <div :class="{active:showstyle4[3]}" class="tab-pane zh-tabs" id="navfourth4">
            <div>评选最佳顾客回头率餐厅评选，助力门店更好地吸引和获取会员，</div>
            <div>提升会员满意度和品牌形象。</div>
          </div>
        </div>
      </markup>
      
    </zh-detail>
    
    <zh-footer class="foot-box2"></zh-footer>
  </div>
</template>

<script>
import zhHeaderProduct from '@/components/zhHeaderProduct.vue'
import zhDetail from '@/components/detail.vue'
import zhFooter from '@/components/footer.vue'
import markup from '@/components/markup.vue'

export default {
  name: 'brand',
  components: {
    zhHeaderProduct,
    zhDetail,
    zhFooter,
    markup
  },
  data(){
    return {
      activeName: 'first',
      showstyle1:[true,false,false,false],
      showstyle2:[true,false,false,false],
      showstyle3:[true,false],
      showstyle4:[true,false,false,false],
      module1:[{
        row:"通过科学的咨询、专业的设计和品牌管理方法"
      },{
        row:"帮助商户搭建品牌体系，塑造良好的品牌形象，从而降低运营成本"
      },{
        row:"且避免反复修改品牌形象对消费者忠诚度造成损伤"
      },{
        row:"从竞品中脱颖而出，推动商户的持续发展"
      }],
      module2:[{
        row:"为商户策划环境展示和菜品试吃的宣传片"
      },{
        row:"通过专业的内容策划和制作来展现菜品的诱人的味觉和精美的视觉"
      },{
        row:"帮助商户推广，吸引新老会员到店消费，提升商户品牌形象"
      }],
      module3:[{
        row:"商户制定专业的运营和营销策略，通过精准广告投放帮助商户大量曝光，"
      },{
        row:"获取新会员。设计定制化的主题营销活动，"
      },{
        row:"帮助商户建立生动的品牌形象，增加会员忠诚度，提升客单价和销量。"
      }],
      module4:[{
        row:"无需担心售后求助无门的困境，再惠的金牌超能售后部门，"
      },{
        row:"会全力帮助商户快速学习和应用系统，"
      },{
        row:"实现营销最佳效果，建立良好的品牌形象。"
      },{
        row:"更有专业团队辅助商户寻找餐饮人才，"
      },{
        row:"高效解决商户招人难的痛点，极大提升商户的运营效率。"
      }]
    }
  },
  methods:{
    showcase1: function(id){
      var j = id;
      for(var n=0;n<this.showstyle1.length;n++){
          if(n==j){
            this.$set(this.showstyle1, n, true);
          }else{
            this.$set(this.showstyle1, n, false);
          }
        }
    },
    showcase2: function(id){
      var j = id;
      for(var n=0;n<this.showstyle2.length;n++){
          if(n==j){
            this.$set(this.showstyle2, n, true);
          }else{
            this.$set(this.showstyle2, n, false);
          }
        }
    },
    showcase3: function(id){
      var j = id;
      for(var n=0;n<this.showstyle3.length;n++){
          if(n==j){
            this.$set(this.showstyle3, n, true);
          }else{
            this.$set(this.showstyle3, n, false);
          }
        }
    },
    showcase4: function(id){
      var j = id;
      for(var n=0;n<this.showstyle4.length;n++){
          if(n==j){
            this.$set(this.showstyle4, n, true);
          }else{
            this.$set(this.showstyle4, n, false);
          }
        }
    },
  }
}
</script>
<style>
#moshushi{
  position: relative;
}
.zh-tabs{
  text-align: center;
}
.xiaoshou{
  cursor: pointer;
}
.text-width{
  text-align: left;
  color: #686868;
  width: 545px;
  margin-left: 40px;
  margin-bottom: 10px;
}
.zh-tabs>div{
  font-size: 14px;
  color: #4f4f4f;
  line-height: 1.5
}
.zh-tabs>span{
  display: inline-block;
  padding: 0px 40px;
  margin: 14px 0;
}
.tab-content{
  height: 150px;
}
.first-img1{
  width: 150px;
  display: inline-block;
  vertical-align: top;
}
.first-img1>div{
  width: 64px;
  height: 51px;
  background-image: url("../assets/images/first1.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 64px 48px;
  display: inline-block;
}
.first-img1>p{
  color: #4f4f4f;
  font-size: 10px;
}
.first-img2{
  width: 140px;
  display: inline-block;
  vertical-align: top;
  margin: 0 80px;
}
.first-img2>div{
  width: 64px;
  height: 51px;
  background-image: url("../assets/images/first2.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 44px 51px;
  display: inline-block;
}
.first-img2>p{
  color: #4f4f4f;
  font-size: 10px;
}
.first-img3{
  width: 150px;
  vertical-align: top;
  display: inline-block;
}
.first-img3>div{
  width: 64px;
  height: 51px;
  background-image: url("../assets/images/first3.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 54px 48px;
  display: inline-block;
}
.first-img3>p{
  color: #4f4f4f;
  font-size: 10px;
}
.second-img1{
  width: 220px;
  vertical-align: top;
  display: inline-block;
  margin-right: 85px;
}
.second-img1>div{
  width: 87px;
  height: 87px;
  background-image: url("../assets/images/second1.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 48px 74px;
  display: inline-block;
}
.second-img1>p{
  color: #686868;
  font-size: 18px;
}
.second-img2{
  width: 220px;
  vertical-align: top;
  display: inline-block;
  margin-left: 85px;
}
.second-img2>div{
  width: 87px;
  height: 87px;
  background-image: url("../assets/images/second2.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 87px 87px;
  display: inline-block;
}
.second-img2>p{
  color: #686868;
  font-size: 18px;
}
.third-img1{
  width: 140px;
  vertical-align: top;
  display: inline-block;
  margin-right: 10px;
}
.third-img1>div{
  width: 63px;
  height: 55px;
  background-image: url("../assets/images/third1.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 63px 42px;
  display: inline-block;
}
.third-img1>p{
  color: #4f4f4f;
  font-size: 10px;
}

.third-img2{
  width: 140px;
  vertical-align: top;
  display: inline-block;
  margin-right: 10px;
}
.third-img2>div{
  width: 63px;
  height: 55px;
  background-image: url("../assets/images/third2.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 50px 54px;
  display: inline-block;
}
.third-img2>p{
  color: #4f4f4f;
  font-size: 10px;
}
.third-img3{
  width: 140px;
  vertical-align: top;
  display: inline-block;
  margin-right: 10px;
}
.third-img3>div{
  width: 63px;
  height: 55px;
  background-image: url("../assets/images/third3.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 29px 55px;
  display: inline-block;
}
.third-img3>p{
  color: #4f4f4f;
  font-size: 10px;
}
.third-img4{
  width: 140px;
  vertical-align: top;
  display: inline-block;
}
.third-img4>div{
  width: 63px;
  height: 55px;
  background-image: url("../assets/images/third4.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 58px 43px;
  display: inline-block;
}
.third-img4>p{
  color: #4f4f4f;
  font-size: 10px;
}
.fourth-img1{
  width: 150px;
  display: inline-block;
  vertical-align: top;
}
.fourth-img1>div{
  width: 64px;
  height: 59px;
  background-image: url("../assets/images/fourth1.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 63px 42px;
  display: inline-block;
}
.fourth-img1>p{
  color: #4f4f4f;
  font-size: 10px;
}

.fourth-img2{
  width: 150px;
  display: inline-block;
  vertical-align: top;
  margin: 0 72px;
}
.fourth-img2>div{
  width: 64px;
  height: 59px;
  background-image: url("../assets/images/fourth2.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 52px 50px;
  display: inline-block;
}
.fourth-img2>p{
  color: #4f4f4f;
  font-size: 10px;
}

.fourth-img3{
  width: 150px;
  display: inline-block;
  vertical-align: top;
}
.fourth-img3>div{
  width: 64px;
  height: 59px;
  background-image: url("../assets/images/fourth3.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 39px 59px;
  display: inline-block;
}
.fourth-img3>p{
  color: #4f4f4f;
  font-size: 10px;
}

.fifth-img1{
  width: 150px;
  display: inline-block;
  vertical-align: top;
}
.fifth-img1>div{
  width: 59px;
  height: 46px;
  background-image: url("../assets/images/fifth1.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 53px 46px;
  display: inline-block;
}
.fifth-img1>p{
  color: #4f4f4f;
  font-size: 10px;
}
.fifth-img1>span{
  color: #4f4f4f;
  font-size: 12px;
  font-weight: normal;
  display: block;
  margin-top: 20px;
}

.fifth-img2{
  width: 150px;
  display: inline-block;
  vertical-align: top;
  margin: 0 72px;
}
.fifth-img2>div{
  width: 59px;
  height: 46px;
  background-image: url("../assets/images/fifth2.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 59px 42px;
  display: inline-block;
}
.fifth-img2>p{
  color: #4f4f4f;
  font-size: 10px;
}
.fifth-img2>span{
  color: #4f4f4f;
  font-size: 12px;
  font-weight: normal;
  display: block;
  margin-top: 20px;
}
.fifth-img3{
  width: 150px;
  display: inline-block;
  vertical-align: top;
}
.fifth-img3>div{
  width: 59px;
  height: 46px;
  background-image: url("../assets/images/fifth3.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 44px 43px;
  display: inline-block;
}
.fifth-img3>p{
  color: #4f4f4f;
  font-size: 10px;
}
.fifth-img3>span{
  color: #4f4f4f;
  font-size: 12px;
  font-weight: normal;
  display: block;
  margin-top: 20px;
}

.sixth-img1{
  width: 150px;
  display: inline-block;
  vertical-align: top;
}
.sixth-img1>div{
  width: 59px;
  height: 46px;
  background-image: url("../assets/images/sixth1.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 50px 49px;
  display: inline-block;
}
.sixth-img1>p{
  color: #4f4f4f;
  font-size: 10px;
}
.sixth-img1>span{
  color: #4f4f4f;
  font-size: 12px;
  font-weight: normal;
  display: block;
  margin-top: 20px;
}

.sixth-img2{
  width: 150px;
  display: inline-block;
  vertical-align: top;
  margin: 0 72px;
}
.sixth-img2>div{
  width: 59px;
  height: 46px;
  background-image: url("../assets/images/sixth2.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 50px 44px;
  display: inline-block;
}
.sixth-img2>p{
  color: #4f4f4f;
  font-size: 10px;
}
.sixth-img2>span{
  color: #4f4f4f;
  font-size: 12px;
  font-weight: normal;
  display: block;
  margin-top: 20px;
}

.sixth-img3{
  width: 150px;
  display: inline-block;
  vertical-align: top;
}
.sixth-img3>div{
  width: 59px;
  height: 46px;
  background-image: url("../assets/images/sixth3.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 43px 43px;
  display: inline-block;
}
.sixth-img3>p{
  color: #4f4f4f;
  font-size: 10px;
}
.sixth-img3>span{
  color: #4f4f4f;
  font-size: 12px;
  font-weight: normal;
  display: block;
  margin-top: 20px;
}
.bg11{
  position: absolute;
  width: 189px;
  height: 260px;
  background-image: url("../assets/images/bg/bg11.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  right: 0;
  top:262px;
}
.bg12{
  position: absolute;
  width: 169px;
  height: 460px;
  background-image: url("../assets/images/bg/bg12.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  left: 0;
  top: 662px;
}
.bg13{
  position: absolute;
  width: 231px;
  height: 350px;
  background-image: url("../assets/images/bg/bg13.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  right: 0;
  bottom:162px;
}
</style>
