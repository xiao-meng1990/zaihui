<template>
  <div>
    <h1>{{title}}</h1>
    <div class="detail">
      <p>{{message1}}</p>
      <p>{{message2}}</p>
    </div>
    <router-link :to="links">
      <button class="btn btn-default">{{button}}</button>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'zhSwiper',
  props: ['title','message1','message2','button','links'],
}
</script>
<style scoped>
h1{
  font-size: 48px;
  color: #727272;
  margin-left: 76px;
}
.detail{
  margin-top: 6px;
  font-size: 18px;
  color: #858585;
  margin-left: 76px;
}
.detail>p{
  margin-bottom: 2px;
}
button{
  margin-top: 46px;
  margin-left: 76px;
}
.btn-default{
  font-size: 14px;
  color: #888888;
  border-color: #888888;
}
</style>