<template>
  <div class="hello">
    <div>
      <h1>{{ '-WELCOME-' }}{{id_input}}</h1>
      <el-input v-model="id_input" placeholder="username" id="userid" class="login_input"></el-input>
      <el-input v-model="pwd_input" placeholder="password" id="pwd" class="login_input"></el-input>
      <el-button type="primary" plain :disabled="true" icon="el-icon-user">LOGIN</el-button>
    </div>
    <div style="margin-top:50px;display:flex;justify-content:center;align-items:center;">
      <div class="index_function_light">
      <p class="index_font">blue</p>
      </div>
      <div class="index_function2_light">
      <p class="index_font">green</p>
      </div>
      <div class="index_function3_light">
      <p class="index_font">orange</p>
      </div>
      <div class="index_function4_light">
      <p class="index_font">red</p>
      </div>
      <div class="index_function5_light">
      <p class="index_font">gray</p>
      </div>
    </div>
    <div class="line"></div>
    <div style="margin-top:20px;">
      <div>
        <el-radio v-model="radio" label="1">选项A</el-radio>
        <el-radio v-model="radio" label="2">选项B</el-radio>
      </div>
      <div>
      <el-radio-group v-model="radio1" style="margin:20px;">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
    <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type" style="margin:20px 3px 0 3px;">{{tag.name}}</el-tag>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      id_input: '',
      pwd_input: '',
      radio:'1',
      radio1:'1',
      num:'1',
      tags:[
        {
          name:'标签1',
          type:''
        },
        {
          name:'标签2',
          type:'success'
        },
        {
          name:'守望先锋',
          type:'overwatch'
        }
      ]
    }
  },
  methods: {
    login: function () {
      var idinput = document.getElementById('userid')
      var pwdinput = document.getElementById('pwd')
      var userid = idinput.value
      var pwd = pwdinput.value
      this.$http.post('http://localhost:8360/index/login', {'Userid': userid, 'Password': pwd}).then(function(res)
      { 
        var data = res.body
        console.log(data)
      })
    },
    handleChange:function(value){
      console.log(value)
    }
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.login_input {
  margin:20px;
  display:block;
  margin-left:auto;
  margin-right:auto;
  width:500px;
}
.index_function_heavy{
  width:220px;
  height:356px;
  border-radius:0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.index_function_light{
  width:200px;
  height:324px;
  border-radius:0px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color:#409EFF;
  float:left;
  margin-left:10px;
  margin-right:10px;
}

.index_function2_light{
  width:200px;
  height:324px;
  border-radius:0px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color:#67C23A;
  float:left;
  margin-left:10px;
  margin-right:10px;
}
.index_function3_light{
  width:200px;
  height:324px;
  border-radius:0px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color:#E6A23C;
  float:left;
  margin-left:10px;
  margin-right:10px;
}
.index_function4_light{
  width:200px;
  height:324px;
  border-radius:0px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color:#F56C6C;
  float:left;
  margin-left:10px;
  margin-right:10px;
}
.index_function5_light{
  width:200px;
  height:324px;
  border-radius:0px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color:#909399;
  float:left;
  margin-left:10px;
  margin-right:10px;
}
.index_font{
  font-family:PingFang SC;
  font-weight:800;
  font-size:30px;
  color:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
}
.line{
  padding:0 20px 0;
  margin:20px 30px 0 30px;
  line-height:10px;
  height:2px;
  background-color:#ddd;
  text-align:center;
}
</style>
