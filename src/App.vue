<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  min-width: 1024px;
  max-width: 2000px;
  font-weight: 300;
  letter-spacing: 3px;
}
.el-form{
  width: 710px!important;
  margin: 0 auto!important;
  height: 250px!important;
  margin-top: 60px!important;
}
.el-form-item {
  margin-bottom: 22px!important;
  width: 335px!important;
  float: left!important;
  margin: 0 10px!important;
  margin-top: 13px!important;
}
.el-form-item:last-child {
  margin-bottom: 22px!important;
  width: 690px!important;
  margin: 0 10px!important;
  margin-top: 13px!important;
}
.el-form--label-top .el-form-item__label {
  float: none!important;
  display: inline-block!important;
  text-align: left!important;
  padding: 0!important;
}
.el-form-item__label {
  text-align: right!important;
  float: left!important;
  font-size: 12px!important;
  color: #727272!important;
  padding: 0 12px 0 0!important;
  -webkit-box-sizing: border-box!important;
  box-sizing: border-box!important;
  font-weight: 300!important;
  line-height: 1.2!important;
}
.el-input__inner {
  -webkit-appearance: none!important;
  background-color: #fff!important;
  background-image: none!important;
  border-radius: 4px!important;
  border: 1px solid #dcdfe6!important;
  -webkit-box-sizing: border-box!important;
  box-sizing: border-box!important;
  color: #606266!important;
  display: inline-block!important;
  font-size: inherit!important;
  height: 32px!important;
  line-height: 32px!important;
  outline: 0!important;
  padding: 0 15px!important;
  -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1)!important;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1)!important;
  width: 100%;
}
.el-select {
    display: block!important;
    position: relative!important;
}
#dongtai .headText{
  margin-top: 100px;
}
#about .headText{
  margin-top: 100px;
}
</style>

