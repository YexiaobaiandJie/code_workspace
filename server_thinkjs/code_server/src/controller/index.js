const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }
  loginAction(){
    console.log("loginAction is running!");
  }
};
