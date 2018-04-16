<template>
  <div id="apply">
    <router-link to="/callus">
      <button class="btn btn-info xuanfu">联系我们</button>
    </router-link>
    <div>
      <router-link to="/">
        <div class="logo"></div>
      </router-link>
      <zh-nav></zh-nav>
      <zh-nav-button message="登录" class="btn btn-default"></zh-nav-button>
    </div>
    <zh-detail class="box">
      <div class="company-title">申请合作</div>
      <div class="text">我们期待与您的合作，与天下创业者一起砥砺前行。</div>
      <div>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="名称">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>

          <el-form-item label="省">
            <el-select  v-model="form.citys" v-on:change="change()" placeholder="选择">
              <el-option v-for="item in citydata.provinces" v-bind:label="item.name" v-bind:value="item.citys"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="城市">
            <el-select v-model="form.citys[0]"  placeholder="选择">
              <el-option v-for="city in form.citys" v-bind:label="city" v-bind:value="city"></el-option>
              
            </el-select>
          </el-form-item>
          <el-form-item label="行业（餐饮，娱乐，丽人，酒店，零售，医疗，教育，其他）">
            <el-select v-model="form.region3" placeholder="选择">
              <el-option label="餐饮" value="餐饮"></el-option>
              <el-option label="娱乐" value="娱乐"></el-option>
              <el-option label="丽人" value="丽人"></el-option>
              <el-option label="酒店" value="酒店"></el-option>
              <el-option label="零售" value="零售"></el-option>
              <el-option label="医疗" value="医疗"></el-option>
              <el-option label="教育" value="教育"></el-option>
              <el-option label="其他" value="其他"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="submit">
          <el-button type="primary" >提 交</el-button>
        </div>
        
      </div>
      <div class="relation">
        <div>400-800-5694</div>
        <div>业务咨询：lianxi@kezaihui.com</div>
        <div>工作时间： 周一至周五 9:30-18:30</div>
      </div>
    </zh-detail>
    <zh-footer class="foot-box2"></zh-footer>
  </div>
</template>

<script>
import zhHeaderProduct from '@/components/zhHeaderProduct.vue'
import zhDetail from '@/components/detail.vue'
import zhFooter from '@/components/footer.vue'
import zhNav from '@/components/zhNav.vue'
import zhNavButton from '@/components/zhNavButton.vue'
import zhJumbotron from '@/components/zhJumbotron.vue'
import zhImageText from '@/components/zhImageText.vue'

export default {
  name: 'apply',
  components: {
    zhDetail,
    zhFooter,
    zhNav,
    zhNavButton
  },
  methods:{
    change: function(){
      console.log(this.form.citys)
    }
  },
  data(){
    return {
      form: {
        name: '',
        region1: '',
        citys: '',
        region2: '',
        region3: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      labelPosition: 'top',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      citydata:{
        "provinces": [{

            "name": "北京市",

            "citys": [

               "东城区",

              "西城区",

              "崇文区",

              "宣武区",

              "朝阳区",

              "海淀区",

              "丰台区",

              "石景山区",

              "房山区",

              "通州区",

              "顺义区",

              "昌平区",

              "大兴区",

              "怀柔区",

              "平谷区",

              "门头沟区",

              "密云区",

              "延庆区",

              "其他"

            ]

          },

          {

            "name": "广东省",

            "citys": [

              "广州",

              "深圳",

              "珠海",

              "汕头",

              "韶关",

              "佛山",

              "江门",

              "湛江",

              "茂名",

              "肇庆",

              "惠州",

              "梅州",

              "汕尾",

              "河源",

              "阳江",

              "清远",

              "东莞",

              "中山",

              "潮州",

              "揭阳",

              "云浮",

              "其他"

            ]

          },

          {

            "name": "上海市",

            "citys": [

              "黄浦区",

              "卢湾区",

              "徐汇区",

              "长宁区",

              "静安区",

              "普陀区",

              "闸北区",

              "虹口区",

              "杨浦区",

              "宝山区",

              "闵行区",

              "嘉定区",

              "松江区",

              "金山区",

              "青浦区",

              "南汇区",

              "奉贤区",

              "浦东新区",

              "崇明区",

              "其他"

            ]

          },

          {

            "name": "天津市",

            "citys": [

              "和平区",

              "河东区",

              "河西区",

              "南开区",

              "河北区",

              "红桥区",

              "塘沽区",

              "汉沽区",

              "大港区",

              "东丽区",

              "西青区",

              "北辰区",

              "津南区",

              "武清区",

              "宝坻区",

              "静海县",

              "宁河县",

              "蓟县",

              "其他"

            ]

          },

          {

            "name": "重庆市",

            "citys": [

              "渝中区",

              "大渡口区",

              "江北区",

              "南岸区",

              "北碚区",

              "渝北区",

              "巴南区",

              "长寿区",

              "双桥区",

              "沙坪坝区",

              "万盛区",

              "万州区",

              "涪陵区",

              "黔江区",

              "永川区",

              "合川区",

              "江津区",

              "九龙坡区",

              "南川区",

              "綦江县",

              "潼南区",

              "荣昌区",

              "璧山区",

              "大足区",

              "铜梁县",

              "梁平县",

              "开县",

              "忠县",

              "城口县",

              "垫江区",

              "武隆县",

              "丰都县",

              "奉节县",

              "云阳县",

              "巫溪县",

              "巫山县",

              "其他"

            ]

          },

          {

            "name": "辽宁省",

            "citys": [

              "沈阳",

              "大连",

              "鞍山",

              "抚顺",

              "本溪",

              "丹东",

              "锦州",

              "营口",

              "阜新",

              "辽阳",

              "盘锦",

              "铁岭",

              "朝阳",

              "葫芦岛",

              "其他"

            ]

          },

          {

            "name": "江苏省",

            "citys": [

              "南京",

              "苏州",

              "无锡",

              "常州",

              "镇江",

              "南通",

              "泰州",

              "扬州",

              "盐城",

              "连云港",

              "徐州",

              "淮安",

              "宿州",

              "其他"

            ]

          },

          {

            "name": "湖北省",

            "citys": [

              "武汉",

              "黄石",

              "十堰",

              "荆州",

              "宜昌",

              "襄樊",

              "鄂州",

              "荆门",

              "孝感",

              "黄冈",

              "咸宁",

              "随州",

              "仙桃",

              "天门",

              "潜江",

              "神农架",

              "其他"

            ]

          },

          {

            "name": "四川省",

            "citys": [

              "成都",

              "自贡",

              "攀枝花",

              "泸州",

              "德阳",

              "绵阳",

              "广元",

              "遂宁",

              "内江",

              "乐山",

              "南充",

              "眉山",

              "宜宾",

              "广安",

              "达州",

              "雅安",

              "巴中",

              "资阳",

              "其他"

            ]

          },

          {

            "name": "陕西省",

            "citys": [

              "西安",

              "铜川",

              "宝鸡",

              "咸阳",

              "渭南",

              "延安",

              "汉中",

              "榆林",

              "安康",

              "商洛",

              "其他"

            ]

          },

          {

            "name": "河北省",

            "citys": [

              "石家庄",

              "唐山",

              "秦皇岛",

              "邯郸",

              "邢台",

              "保定",

              "张家口",

              "承德",

              "沧州",

              "廊坊",

              "衡水",

              "其他"

            ]

          },

          {

            "name": "山西省",

            "citys": [

              "太原",

              "大同",

              "阳泉",

              "长治",

              "晋城",

              "朔州",

              "晋中",

              "运城",

              "忻州",

              "临汾",

              "吕梁",

              "其他"

            ]

          },

          {

            "name": "河南省",

            "citys": [

              "郑州",

              "开封",

              "洛阳",

              "平顶山",

              "安阳",

              "鹤壁",

              "新乡",

              "焦作",

              "濮阳",

              "许昌",

              "漯河",

              "三门峡",

              "南阳",

              "商丘",

              "信阳",

              "周口",

              "驻马店",

              "焦作",

              "其他"

            ]

          },

          {

            "name": "吉林省",

            "citys": [

              "吉林",

              "四平",

              "辽源",

              "通化",

              "白山",

              "松原",

              "白城",

              "延边朝鲜自治区",

              "其他"

            ]

          },

          {

            "name": "黑龙江",

            "citys": [

              "哈尔滨",

              "齐齐哈尔",

              "鹤岗",

              "双鸭山",

              "鸡西",

              "大庆",

              "伊春",

              "牡丹江",

              "佳木斯",

              "七台河",

              "黑河",

              "绥远",

              "大兴安岭地区",

              "其他"

            ]

          },

          {

            "name": "内蒙古",

            "citys": [

              "呼和浩特",

              "包头",

              "乌海",

              "赤峰",

              "通辽",

              "鄂尔多斯",

              "呼伦贝尔",

              "巴彦淖尔",

              "乌兰察布",

              "锡林郭勒盟",

              "兴安盟",

              "阿拉善盟"

            ]

          },

          {

            "name": "山东省",

            "citys": [

              "济南",

              "青岛",

              "淄博",

              "枣庄",

              "东营",

              "烟台",

              "潍坊",

              "济宁",

              "泰安",

              "威海",

              "日照",

              "莱芜",

              "临沂",

              "德州",

              "聊城",

              "滨州",

              "菏泽",

              "其他"

            ]

          },

          {

            "name": "安徽省",

            "citys": [

              "合肥",

              "芜湖",

              "蚌埠",

              "淮南",

              "马鞍山",

              "淮北",

              "铜陵",

              "安庆",

              "黄山",

              "滁州",

              "阜阳",

              "宿州",

              "巢湖",

              "六安",

              "亳州",

              "池州",

              "宣城"

            ]

          },

          {

            "name": "浙江省",

            "citys": [

              "杭州",

              "宁波",

              "温州",

              "嘉兴",

              "湖州",

              "绍兴",

              "金华",

              "衢州",

              "舟山",

              "台州",

              "丽水",

              "其他"

            ]

          },

          {

            "name": "福建省",

            "citys": [

              "福州",

              "厦门",

              "莆田",

              "三明",

              "泉州",

              "漳州",

              "南平",

              "龙岩",

              "宁德",

              "其他"

            ]

          },

          {

            "name": "湖南省",

            "citys": [

              "长沙",

              "株洲",

              "湘潭",

              "衡阳",

              "邵阳",

              "岳阳",

              "常德",

              "张家界",

              "益阳",

              "滨州",

              "永州",

              "怀化",

              "娄底",

              "其他"

            ]

          },

          {

            "name": "广西省",

            "citys": [

              "南宁",

              "柳州",

              "桂林",

              "梧州",

              "北海",

              "防城港",

              "钦州",

              "贵港",

              "玉林",

              "百色",

              "贺州",

              "河池",

              "来宾",

              "崇左",

              "其他"

            ]

          },

          {

            "name": "江西省",

            "citys": [

              "南昌",

              "景德镇",

              "萍乡",

              "九江",

              "新余",

              "鹰潭",

              "赣州",

              "吉安",

              "宜春",

              "抚州",

              "上饶",

              "其他"

            ]

          },

          {

            "name": "贵州省",

            "citys": [

              "贵阳",

              "六盘水",

              "遵义",

              "安顺",

              "铜仁",

              "毕节",

              "其他"

            ]

          },

          {

            "name": "云南省",

            "citys": [

              "昆明",

              "曲靖",

              "玉溪",

              "保山",

              "邵通",

              "丽江",

              "普洱",

              "临沧",

              "其他"

            ]

          },

          {

            "name": "西藏",

            "citys": [

              "拉萨",

              "那曲地区",

              "昌都地区",

              "林芝地区",

              "山南区",

              "阿里区",

              "日喀则",

              "其他"

            ]

          },

          {

            "name": "海南省",

            "citys": [

              "海口",

              "三亚",

              "五指山",

              "琼海",

              "儋州",

              "文昌",

              "万宁",

              "东方",

              "澄迈县",

              "定安县",

              "屯昌县",

              "临高县",

              "其他"

            ]

          },

          {

            "name": "甘肃省",

            "citys": [

              "兰州",

              "嘉峪关",

              "金昌",

              "白银",

              "天水",

              "武威",

              "酒泉",

              "张掖",

              "庆阳",

              "平凉",

              "定西",

              "陇南",

              "临夏",

              "甘南",

              "其他"

            ]

          },

          {

            "name": "宁夏",

            "citys": [

              "银川",

              "石嘴山",

              "吴忠",

              "固原",

              "中卫",

              "其他"

            ]

          },

          {

            "name": "青海",

            "citys": [

              "西宁",

              "海东地区",

              "海北藏族自治区",

              "海南藏族自治区",

              "黄南藏族自治区",

              "果洛藏族自治区",

              "玉树藏族自治州",

              "还西藏族自治区",

              "其他"

            ]

          },

          {

            "name": "新疆",

            "citys": [

              "乌鲁木齐",

              "克拉玛依",

              "吐鲁番地区",

              "哈密地区",

              "和田地区",

              "阿克苏地区",

              "喀什地区",

              "克孜勒苏柯尔克孜",

              "巴音郭楞蒙古自治区",

              "昌吉回族自治州",

              "博尔塔拉蒙古自治区",

              "石河子",

              "阿拉尔",

              "图木舒克",

              "五家渠",

              "伊犁哈萨克自治区",

              "其他"

            ]

          }]
        }
      }
    }
  
}
</script>
<style scoped>
#callus{
  position: relative;
}
.box{
  margin-bottom: 55px;
}
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
.company-title{
  font-size: 40px;
  margin: 85px auto 25px;
  text-align: center;
}
.text{
  text-align: center;
  font-size: 15px;
  color: #4F4F4F;
}
.submit{
  width: 710px;
  padding: 0 10px;
  text-align: right;
  margin: 0 auto;
  padding-bottom: 61px;
}
.submit>button{
  background-color: #76B6E4;
  border: 0;
  padding: 9px 15px;
  font-weight: 300;
}
.relation{
  padding-top:45px;
  border-top: 1px solid #cacaca;
}
.relation div{
  text-align: center;
  font-size: 12px;
  margin-bottom: 8px;
}
</style>
