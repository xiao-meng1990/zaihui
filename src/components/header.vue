<template> 
  <div class="headerTop">
    <router-link to="/">
      <div class="logo"></div>
    </router-link>
    <!-- <div>这个地方在渲染后不会被占用</div> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zh-header',
  data () {
    return {
      msg: 'header'
    }
  }
}
</script>
<style scoped>
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
@media screen and (max-width: 1199px) {
  .headerTop{
    height: 600px;
  }
}
@media screen and (min-width: 1200px) {
  .headerTop{
    height: 6rem;
  }
}

</style>
