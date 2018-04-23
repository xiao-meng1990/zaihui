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
@media screen and (max-width: 1199px) {
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
}
@media screen and (min-width: 1200px) {
  h1{
    font-size: 0.48rem;
    color: #727272;
    margin-left: 0.76rem;
  }
  .detail{
    margin-top: 0.06rem;
    font-size: 0.18rem;
    color: #858585;
    margin-left: 0.76rem;
  }
  .detail>p{
    margin-bottom: 0.02rem;
  }
  button{
    margin-top: 0.46rem;
    margin-left: 0.76rem;
  }
  .btn-default{
    font-size: 0.14rem;
    color: #888888;
    border-color: #888888;
  }
}
</style>