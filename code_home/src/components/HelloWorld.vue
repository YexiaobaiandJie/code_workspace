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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      id_input: '',
      pwd_input: '',
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
</style>
