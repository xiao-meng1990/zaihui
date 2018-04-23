<template>
  <div class="bgImage">
    <div class="bg-white">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'zhBg',
}
</script>
<style scoped>
@media screen and (max-width: 1999px) {
  .bgImage{
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    width: 615px;
    height: 605px;
    background-size: 615px 605px;
    background-position: top right;
    background-repeat: no-repeat;
    background-image: url("../assets/images/swiperbg.png");
  }
  .bg-white{
    width: 369px;
    height: 271px;
    position: absolute;
    top: 140px;
    left: 130px;
    background-color: #ffffff;
  }

}
@media screen and (min-width: 1200px) {
  .bgImage{
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    width: 6.15rem;
    height: 6.05rem;
    background-size: 6.15rem 6.05rem;
    background-position: top right;
    background-repeat: no-repeat;
    background-image: url("../assets/images/swiperbg.png");
  }
  .bg-white{
    width: 3.69rem;
    height: 2.71rem;
    position: absolute;
    top: 1.4rem;
    left: 1.3rem;
    background-color: #ffffff;
  }
}
</style>