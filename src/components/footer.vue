<template>
  <div :class="color">
    <div class="box-info">
      <div class="left-info">
        <router-link to="/">
          <div class="logo"></div>
        </router-link>
        <div class="phone-title">咨询热线</div>
        <div class="phone-num">400-6052-3213</div>
      </div>
      <div class="right-info">
        <div class="model-list">
          <p>产品介绍</p>
          <div><router-link to="/huitouke">客回头</router-link></div>
          <div><router-link to="/zhihuixin">智汇新</router-link></div>
          <div><router-link to="/moshushi">魔数师</router-link></div>
          <div><router-link to="/jukefu">聚客付</router-link></div>
          <div><router-link to="/brand">品牌服务</router-link></div>
        </div>
        <div class="model-list m-l-52">
          <p>新闻动态</p>
          <div><router-link to="/dynamic">新闻报道</router-link></div>
          <div><router-link :to="{ name:'dynamic', params: {num: 123} }">媒体合作</router-link></div>
        </div>
        <div class="model-list m-l-52">
          <p>关于我们</p>
          <div><router-link to="/about">关于再惠</router-link></div>
          <div><router-link to="/addus">招贤纳士</router-link></div>
          <div><router-link to="/callus">联系我们</router-link></div>
        </div>
        <div class="model-list m-l-52">
          <p>快速通道</p>
          <div><router-link to="/apply">合作申请</router-link></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="box-company">
      © 上海羊晨羊晓信息技术有限公司  沪ICP备15033564号
    </div>
  </div>
</template>

<script>
export default {
  name: 'zh-footer',
  props:{
    color:{
      type:String,
      default:"foot-box"
    }
  },
  data () {
    return {
      msg: 'footer'
    }
  }
}
</script>
<style scoped>
.foot-box{
  height: 300px;
  background-color: #58AFFF;
  position: relative;
}
.foot-box .box-info{
  min-width: 1024px;
  width: 100%;
  float: left;
}
.foot-box .left-info{
  float: left;
  width: 50%;
}
.foot-box .right-info{
  float: left;
  width: 50%;
  margin-top: 42px;
}
.foot-box .logo{
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
.foot-box .phone-title{
  font-size: 13px;
  color: #ffffff;
  font-weight: 300;
  margin-left: 75px;
  margin-top: 15px;

}
.foot-box .phone-num{
  font-size: 13px;
  color: #ffffff;
  font-weight: 300;
  margin-left: 75px;
  margin-top: 5px;
}
.foot-box .box-company{
  text-align: center;
  color: #fff;
  font-size: 12px;
  width: 100%;
  position: absolute;
  bottom: 25px
}
.foot-box .model-list{
  display: inline-block;
  max-width: 75px;
  vertical-align: top;
}
.foot-box .model-list>p{
  font-size: 14px;
  margin-bottom: 18px;
  color: #fff;
  font-weight: 400;
  letter-spacing: 3px;
}
.foot-box .model-list div{
  font-size: 12px;
  margin-bottom: 5px;
  color: #fff!important;
  letter-spacing: 3px;
  cursor: pointer;
}
.foot-box .model-list div>a{
  font-size: 12px;
  margin-bottom: 5px;
  color: #fff!important;
  letter-spacing: 3px;
  cursor: pointer;
}
.m-l-52{
  margin-left: 52px;
}
.foot-box2{
  height: 300px;
  background-color: #F2F2F2;
  position: relative;
}
.foot-box2 .box-info{
  min-width: 1024px;
  width: 100%;
  float: left;
}
.foot-box2 .left-info{
  float: left;
  width: 50%;
}
.foot-box2 .right-info{
  float: left;
  width: 50%;
  margin-top: 42px;
}
.foot-box2 .logo{
  display: inline-block;
  width: 84px;
  height: 30px;
  margin-left:37px;
  margin-top: 29px;
  background-image: url('../assets/images/Group@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.foot-box2 .phone-title{
  font-size: 13px;
  color: #7E7E7E;
  font-weight: 300;
  margin-left: 75px;
  margin-top: 15px;

}
.foot-box2 .phone-num{
  font-size: 13px;
  color: #7E7E7E;
  font-weight: 300;
  margin-left: 75px;
  margin-top: 5px;
}
.foot-box2 .box-company{
  text-align: center;
  color: #7E7E7E;
  font-size: 12px;
  width: 100%;
  position: absolute;
  bottom: 25px
}
.foot-box2 .model-list{
  display: inline-block;
  max-width: 75px;
  vertical-align: top;
}
.foot-box2 .model-list>p{
  font-size: 14px;
  margin-bottom: 18px;
  color: #7E7E7E;
  font-weight: 400;
  letter-spacing: 3px;
}
.foot-box2 .model-list div{
  font-size: 12px;
  margin-bottom: 5px;
  color: #7E7E7E;
  letter-spacing: 3px;
  cursor: pointer;
}
.foot-box2 .model-list div>a{
  font-size: 12px;
  margin-bottom: 5px;
  color: #7E7E7E!important;
  letter-spacing: 3px;
  cursor: pointer;
}
</style>
