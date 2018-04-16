<template> 
  <div class="jumbotron">
    <h2>{{zhTitle}}</h2>
    <!-- <div>这个地方在渲染后不会被占用</div> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zh-jumbotron',
  props:['zhTitle']
}
</script>
<style scoped>
.jumbotron{
  text-align: center;
}
.jumbotron h2{
  font-size: 32px;
  color: #727272;
  text-align: center;
}
</style>
