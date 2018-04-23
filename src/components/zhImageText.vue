<template>
  <div>
    <div class="imageText">
      <img :src="img[0].imgSrc" class="img1" alt="拓客难">
      <p>拓客难</p>
      <div>每获取一位新客<br>需要投入极高的成本<br>且未必是目标客户</div>
    </div>
    <div class="imageText">
      <img :src="img[1].imgSrc" class="img2" alt="入会繁">
      <p>入会繁</p>
      <div>入会要求消费者填写<br>繁多的信息，导致消费者反感<br>容易选择放弃</div>
    </div>
    <div class="imageText">
      <img :src="img[2].imgSrc" class="img3" alt="留客累">
      <p>留客累</p>
      <div>千辛万苦拉来的新客<br>却难以再次消费<br>忠诚度低，最后逐渐流失</div>
    </div>
    <div class="imageText">
      <img :src="img[3].imgSrc" class="img4" alt="营销弱">
      <p>营销弱</p>
      <div>没有专业市场部<br>缺少大品牌商户的<br>营销经验和包装策划能力</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zh-image-text',
  data(){
    return {
      img:[{
        imgSrc: require("../assets/images/icon1.png") 
      },{
        imgSrc: require("../assets/images/icon2.png") 
      },{
        imgSrc: require("../assets/images/icon3.png") 
      },{
        imgSrc: require("../assets/images/icon4.png") 
      }]
      
    }
  }
}
</script>
<style scoped>
.imageText{
  display: inline-block;
  width: 210px;
  height: 150px;
  vertical-align: top;
  margin: 44px 10px;
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
  width: 102px;
  height: 59px;
  margin-bottom: 15px;
}
.imageText .img2{
  width: 96px;
  height: 62px;
  margin-bottom: 12px;
}
.imageText .img3{
  width: 92px;
  height: 57px;
  margin-bottom: 17px;
}
.imageText .img4{
  width: 91px;
  height: 59px;
  margin-bottom: 15px;
}
</style>
