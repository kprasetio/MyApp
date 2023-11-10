define({ 

  //Type your controller code here 
  onNavigate:function(){
    this.view.preShow = this.preShow;
  },

  preShow:function(){
    this.view.segAccounts.onRowClick = this.onSegRowClick;
    this.getAccounts();
  },

  getAccounts:function(){
    var dataModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PaninUIModule");
    var params = {"cif":"0003145641"};

    dataModule.presentationController.getAccounts(params, 
                                                  this.getDataSuccessCallback, 
                                                  this.getDataFaildCallback);  
  },

  getDataSuccessCallback:function(data){
    // alert("Data " + JSON.stringify(data));
    accounts = data.accounts;

    this.view.segAccounts.widgetDataMap = {
      "lblHeading":"Heading",
      "lblAccountType":"accountType",
      "lblAccountNumber":"accountNum",
      //"imgAccount":"imgAcc", 
      //"lblBalanceHeader":"BalanceHeader",
      "lblBalance":"currentBalance",
      "lblCurrency":"currency",
      "lblAccountSts":"accountStatus"
    };
    this.view.segAccounts.removeAll();
    this.view.segAccounts.setData(accounts);
  },

  getDataFaildCallback:function(error){
    alert("Data " + JSON.stringify(error));
  },
  
  onSegRowClick:function(){
    var navigateToForm = new kony.mvc.Navigation("AppGroup/frmAccountDetailNew");

    selectedRowItems = this.view.segAccounts.selectedRowItems[0];
    nama = selectedRowItems.accountType;
    account = selectedRowItems.accountNum;
    currency = selectedRowItems.currency;
    balance = selectedRowItems.currentBalance;
   
    index = this.view.segAccounts.selectedRowIndex[1];

    kony.print("selectedRowItems "+selectedRowItems);
    kony.print("index"  + index);
    myObj ={"nama":nama, "account":account, "currency" : currency, "balance" : balance};
    navigateToForm.navigate(myObj);
  },

});