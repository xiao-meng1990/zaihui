<template>
  <div id="callus">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <div>
      <router-link to="/">
        <div class="logo"></div>
      </router-link>
      <zh-nav></zh-nav>
      <zh-nav-button message="登录" class="btn btn-default"></zh-nav-button>
    </div>
    <zh-detail class="box">
      <div class="company-title">联系我们</div>
      <div class="company-info">
        <div class="list">
          <p>上海总部</p>
          <div>地址： 长宁区淮海西路432号凯利大厦2楼</div>
          <div>电话： 021-60523213</div>
          <div>邮编： 200052</div>
        </div>
        <div class="list">
          <p>杭州分公司</p>
          <div>地址： 杭州市下城区绍兴路161号野风现代中心北楼502室</div>
          <div>电话： 0571-88307308</div>
        </div>
        <div class="list">
          <p>宁波分公司</p>
          <div>地址：宁波市海曙区药行街42号银亿环球中心1502室</div>
          <div>电话：0574-87115616</div>
        </div>
        <div class="list">
          <p>绍兴分公司</p>
          <div>地址：绍兴市越城区胜利东路375号鼎盛时代大厦2506室</div>
          <div>电话：0575-88755397</div>
        </div>
        <div class="list">
          <p>南京分公司</p>
          <div>地址： 南京市秦淮区洪武路23号隆盛大厦2109室</div>
          <div>电话： 025-83350995</div>
        </div>
        <div class="list">
          <p>苏州分公司</p>
          <div>地址： 苏州市姑苏区干将西路1296号深业姑苏中心803室</div>
          <div>电话： 0512-81660112</div>
        </div>
        <div class="list">
          <p>无锡分公司</p>
          <div>地址： 无锡市梁溪区人民中路109号苏宁广场写字楼2005号</div>
          <div>电话： 0510-82712772</div>
        </div>
        <div class="list">
          <p>武汉分公司</p>
          <div>地址： 武汉市江汉区王家墩CBD泛海国际SOHO城2栋1709室</div>
          <div>电话： 027-83613177</div>
        </div>
        <div class="list">
          <p>合肥分公司</p>
          <div>地址： 合肥市包河区望湖街道马鞍山南路660号绿地赢海C座1901室</div>
          <div>电话： 0551-63456061</div>
        </div>
        <div class="list">
          <p>厦门分公司</p>
          <div>地址： 门市思明区嘉禾路25号新景中心C幢709室</div>
          <div>电话： 0592-5520185</div>
        </div>
        <div style="border-bottom:0" class="list">
          <p>福州分公司</p>
          <div>地址： 福州市鼓楼区水部街道六一中路28号佳盛广场C座9层1-4单元</div>
          <div>电话： 025-83350995</div>
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
import zhNav from '@/components/zhNav.vue'
import zhNavButton from '@/components/zhNavButton.vue'
import zhJumbotron from '@/components/zhJumbotron.vue'
import zhImageText from '@/components/zhImageText.vue'

export default {
  name: 'huitouke',
  components: {
    zhDetail,
    zhFooter,
    zhNav,
    zhNavButton
  }
}
</script>
<style scoped>
#callus{
  position: relative;
}
.box{
  margin-bottom: 94px;
}
.logo{
  cursor: pointer;
  display: inline-block;
  width: 84px;
  height: 30px;
  margin-left:37px;
  margin-top: 29px;
  background-image: url('../assets/images/Group@2x.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.company-title{
  font-size: 40px;
  margin: 85px auto 74px;
  text-align: center;
}
.list{
  width: 660px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  margin: 0px auto;
  padding: 30px 0;
}
.list>p{
  font-size: 16px;
  color: #58AFFF;
  margin-bottom: 22px;
  font-weight: normal;
}
.list>div{
  font-size: 14px;
  margin-bottom: 5px;
}
</style>
