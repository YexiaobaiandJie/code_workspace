const Base = require('./base.js');

module.exports = class extends Base {

  indexAction() {
    return this.display();
  }

  async loginAction(){
    console.log("loginAction is running!");
    let username = this.post("username");
    let pwd = this.post("password");
    console.log(username);
    console.log(pwd);
    //验证用户信息
    let model = this.model('user_info');    //user_info是数据库表名
    let res = await model.where({id:username}).find();  //不使用async\await组合会返回promise{<pending>}
    //数据库内部的userid不能重复
    if(think.isEmpty(res)){
      console.log("未查询到数据");
      //返回账户不存在
      return this.fail({mes:'账户不存在'});
    }else{
      console.log("数据库存在数据");
      //const [first] = res;如果是确定数量的数据可以es6里的解构
      let password = res.password;
      if(password == pwd){
        //返回用户数据以及登录成功信息
        return this.success({mes:'登录成功',user_data:res});
      }else{
        //返回密码错误
        return this.fail({mes:'账户或密码错误'});

      }
      console.log(res.username);
    }
    
    
  }
};
