<template>
  <button @click="see()" :class="btnStyle">{{message}}</button>
</template>
<script>
export default {
  name: 'zhNavButton',
  props: {
    btnStyle:{
      type: String,
      default: ""
    },
    message:{
      type: String,
      default: ""
    }
  },
  methods:{
    see: function(){
      window.open("http://shuju.kezaihui.com");
    }
  }

}
</script>
<style scoped>
button{
  font-size: 12px;
}
.btn-default{
  border-color: #949595;
  padding: 5px 23px;
  line-height: 1;
}
.btn-white{
  border-color: #ffffff;
  padding: 3px 28px;
  background-color: rgba(225,225,225,0);
  color: #ffffff;
  vertical-align: text-bottom;
  top: -3px;
  position: relative;
}
</style>
