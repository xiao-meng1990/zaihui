<template>
<ul class="nav nav-pills" :class="fontcolor">
  <li role="presentation" class="dropdown" @mouseover="showProduct" @mouseout="hideProduct">
    <a class="dropdown-toggle">
      产品 <span class="caret white-color"></span>
    </a>
    <ul id="product" class="dropdown-menu">
      <li role="presentation"><router-link to="/huitouke">客回头</router-link></li>
      <li role="presentation"><router-link to="/zhihuixin">智汇新</router-link></li>
      <li role="presentation"><router-link to="/jukefu">聚客付</router-link></li>
      <li role="presentation"><router-link to="/moshushi">魔数师</router-link></li>
      <li role="presentation"><router-link to="/brand">品牌服务</router-link></li>
    </ul>
  </li>
  <li role="presentation"><router-link class="white-color" to="/showcase">案例</router-link></li>
  <li role="presentation"><router-link class="white-color" to="/dynamic">动态</router-link></li>
  <li role="presentation" class="dropdown" @mouseover="showUs" @mouseout="hideUs">
    <a class="dropdown-toggle">
      关于我们 <span class="caret white-color"></span>
    </a>
    <ul id="us" class="dropdown-menu">
      <li role="presentation"><router-link to="/about">关于再惠</router-link></li>
      <li role="presentation"><router-link to="/addus">招贤纳士</router-link></li>
      <li role="presentation"><router-link to="/callus">联系我们</router-link></li>
    </ul>
  </li>
  <li role="presentation"><router-link class="white-color" to="/apply">合作</router-link></li>
</ul>
</template>
<script>
export default {
  name: 'zhNav',
  props: {
    fontcolor: {
      type: String,
      default: ""
    }
  },
  methods:{
    showProduct: function(){
      $("#product").show();
    },
    hideProduct: function(){
      $("#product").hide();
    },
    showUs: function(){
      $("#us").show();
    },
    hideUs: function(){
      $("#us").hide();
    }
  }
}
</script>
<style scoped>
.font-color .dropdown>a{
  color: #ffffff;
  font-size: 12px;
}
.font-color .white-color{
  color: #ffffff;
  font-size: 12px;
  border-right-color:#ffffff;
  border-bottom-color: #ffffff;
}
a{
  color: #4f4f4f;
  font-size: 12px;
}
.footColor1{
  color: #ffffff;
  font-size: 12px;
}
.dropdown-toggle{
  cursor: pointer;
}
</style>
