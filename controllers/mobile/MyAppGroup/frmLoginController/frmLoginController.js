var test = null;

define({ 
  mymodule:null, 
  
  onNavigate:function(){
    this.view.init = this.init;
    this.view.preShow = this.preShow;
    this.view.postShow = this.postShow;  
  },

  preShow:function(){
    this.mymodule=require("Module");
    this.view.listBoxLanguage.selectedKeys = "ID";
    this.view.flxLogin.txtUser.text = "";
    this.view.flxLogin.TextCompWithoutContract.txtComp.text = "";
    this.view.btnLogin.onClick = this.loginOnClick;
    this.view.HeaderComp.headerBtnLeft.onClick = this.backOnClick;
    this.view.TextCompWithoutContract.txtComp.onDone = this.txtCompOnDone;
    this.view.lblForgetPassword.onTouchStart = this.availableSoon;

    this.view.flxMainBox.flxBox1.onTouchStart = this.availableSoon;
    this.view.flxMainBox.flxBox2.onTouchStart = this.availableSoon;
    this.view.flxMainBox.flxBox3.onTouchStart = this.availableSoon;
    this.view.flxMainBox.flxBox4.onTouchStart = this.availableSoon;
    //this.view.txtUser.onDone = this.onDone;
    this.view.listBoxLanguage.onSelection = this.changeBahasa;

    kony.logger.appLogger.error("Message to be logged at error log level");
    kony.logger.appLogger.debug("Message to be logged at error log level");
    kony.logger.appLogger.trace("Message to be logged at error log level");
    kony.print("Test Print");

  },

  loginOnClick:function(){

    /**
* Quantum Fabric is auto initialized, only if the Quantum Fabric app is linked in the Quantum Visualizer.
* In all other cases the Quantum Fabric initialization code should be written by User.
*/
    user = this.view.flxLogin.txtUser.text;
    pass = this.view.flxLogin.TextCompWithoutContract.txtComp.text;

    var authParams = "";
    authParams = {
      "userid": user,
      "password": pass,
      "loginOptions": {
        "isOfflineEnabled": false
      }
    };
    // KNYMobileFabric = new kony.sdk();
    /// KNYMobileFabric.init("de159752e96fec6ad2128e488f98b786","608dd202683b03fc6c60dfb629653105","/appconfig",this.successCallback, this.errorCallback);
    var authClient = KNYMobileFabric.getIdentityService("MyAppIdentityServices");
    authClient.login(authParams, this.successCallback, this.errorCallback);

  },

  successCallback:function(res){
    //code for success call back
    //alert("Success " + JSON.stringify(res));
    var navigateToForm = new kony.mvc.Navigation("MyAppGroup/frmAccountsNew");
    myObj ={};
    navigateToForm.navigate(myObj);
  },
  errorCallback:function(res){
    //code for failure call back
    alert("res " + res.details.message);

  },

  txtCompOnDone:function(){
    this.view.btnLogin.setFocus(true);  
  },

  changeBahasa:function(){
    bahasa = this.view.listBoxLanguage.selectedKey;
    //alert(bahasa);
    if (bahasa==="EN"){
      kony.i18n.setCurrentLocaleAsync("en_US", this.onsuccesscallback, this.onfailurecallback);
    }else if (bahasa==="ID"){
      kony.i18n.setCurrentLocaleAsync("in_ID", this.onsuccesscallback, this.onfailurecallback);
    }

  },

  onsuccesscallback:function(code, desc){
    //alert("success " + code + " " + desc);
    this.view.lblWelcome.text = kony.i18n.getLocalizedString("i18n.lbl.welcome");
    this.view.lbluser.text = kony.i18n.getLocalizedString("i18n.lbl.name");
    this.view.lblpass.text = kony.i18n.getLocalizedString("i18n.lbl.password");
    //this.view.btnExit.text = kony.i18n.getLocalizedString("i18n.btn.exit");
    this.view.btnLogin.text = kony.i18n.getLocalizedString("i18n.btn.login");
    this.view.forceLayout();

    //alert(kony.i18n.getCurrentLocale());
  },
  onfailurecallback:function(code, desc){
    alert("failed " + code + " " + desc);
  },

  postShow:function(){
    //alert("postShow");
  },

  init:function(){

  },

  //   onDone:function(){
  //     user = this.view.flxLogin.txtUser.text;
  //     if (user===""){
  //       alert("user must be filled out");
  //     } else if (user.length > 150) {
  //       alert("user cannot be more than 150 characters");
  //     } else if(/[^a-zA-Z0-9\-\/]/.test(user)){
  //       alert("user can only contain alphanumeric characters, hyphens(-) and back slashs(\)");
  //     }
  //   },
  //Type your controller code here 
  //   login:function(){
  //     user = this.view.flxLogin.txtUser.text;
  //     pass = this.view.flxLogin.TextCompWithoutContract.txtComp.text;

  //     if (user === 'kurniadi' && pass === 'password') {
  //       //alert("Login Success !!");

  //       //var navigateToForm = new kony.mvc.Navigation("AppGroup/frmList");
  //       //myObj ={"mode":"Login","nama" : user, "alamat" : "", "value":" "};
  //       //navigateToForm.navigate(myObj);
  //       var navigateToForm = new kony.mvc.Navigation("AppGroup/frmAccounts");
  //       myObj ={};
  //       navigateToForm.navigate(myObj);

  //     }else {
  //       alert("The username or password is incorrect");
  //     }
  //   },

  onBtnExitClick:function(){
    this.mymodule.confirmDialog("Are you sure ?",this.alertres);
  },

  availableSoon:function(){
    this.mymodule.informDialog("Available Soon");
  },

  alertres:function(response)
  {
    if(response){
      kony.application.exit();
    }
  },

  backOnClick:function(){
    var navigateToForm = new kony.mvc.Navigation("MyAppGroup/frmCredential");
    myObj ={};
    navigateToForm.navigate(myObj);
  },

});