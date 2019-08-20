module.exports = class extends think.Logic {

  indexAction() {
     
  }
  loginAction(){
    console.log("logic_login is running")
    
    let rules = {
      username:{
        string:true,
        required:true,
      },
      password:{
        string:true,
        required:true,
      }
    }
    let flag = this.validate(rules);
    if(!flag){
      return this.fail('validate error',this.validateErrors);
    }

  }
};
