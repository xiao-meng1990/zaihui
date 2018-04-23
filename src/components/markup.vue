<template> 
  <div class="box">
    <div class="title">{{message}}</div>
    <div class="row" v-for="item in describe">{{ item.row }}</div>
    <!-- <div>这个地方在渲染后不会被占用</div> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'markup',
  props: {
    message:{
      type: String,
      default:"松子创意：高端品牌视觉定制"
    },
    describe:{
      type:Array,
      default: function(){
        return [{
          row:"通过科学的咨询、专业的设计和品牌管理方法"
        },{
          row:"帮助商户搭建品牌体系，塑造良好的品牌形象，从而降低运营成本"
        },{
          row:"且避免反复修改品牌形象对消费者忠诚度造成损伤"
        },{
          row:"从竞品中脱颖而出，推动商户的持续发展"
        }]
      }
    }
  },
  data () {
    return {
      msg: 'markup'
    }
  }
}
</script>
<style scoped>
.box{
  width: 630px;
  margin: 0 auto;
  text-align: center;
}
.title{
  text-align: center;
  font-size: 32px;
  color: #BD4C63;
  margin-bottom: 10px;
  font-weight: normal;
}
.row{
  text-align: center;
  font-size: 12px;
  line-height: 22px;
  letter-spacing: 1.5px;
}
</style>
