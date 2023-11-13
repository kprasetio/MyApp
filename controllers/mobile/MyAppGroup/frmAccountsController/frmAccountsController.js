define({ 

  //Type your controller code here 
  onNavigate:function(){
    this.view.preShow = this.preShow;
  },

  preShow:function(){
    this.view.HeaderComp.headerBtnLeft.onClick = this.backOnClick;
    this.view.segAccounts.onRowClick = this.onSegRowClick;
    // alert("local "+kony.i18n.getCurrentLocale());
    var txtSavings = kony.i18n.getLocalizedString("i18n.lbl.savings");

    // alert("welcome " + kony.i18n.getLocalizedString("i18n.lbl.welcome"));
    // alert("savings "+ txtSavings);
    var accounts = 

        [[{

          "Heading": {text:txtSavings}

        },
          [{
            "AccountType":"IDR CNY",
            "AccountNumber":"12345",
            "imgAcc":{src:"savings_illustration.png"}, 
            "BalanceHeader":"Current Balance",
            "Balance":"1000.00",
            "Currency":"CNY",
            "AccountSts":"Inactive Account",
            "InfoDetail":"Current 12345 Info Detail" 
          },
           {
             "AccountType":"Deposito USD",
             "AccountNumber":"34567",
             "imgAcc":{src:"savings_illustration.png"}, 
             "BalanceHeader":"Principal",
             "Balance":"2000.00",
             "Currency":"USD",
             "AccountSts":" ",
             "InfoDetail":"Deposito 34567 Info Detail" 
           },
           {
             "AccountType":"Deposito USD",
             "AccountNumber":"98765",
             "imgAcc":{src:"savings_illustration.png"}, 
             "BalanceHeader":"Principal",
             "Balance":"3000.00",
             "Currency":"USD",
             "AccountSts":" ",
             "InfoDetail":"Deposito 98765 Info Detail" 
           }]]];

    //alert("account " + JSON.stringify(accounts));
    this.view.segAccounts.widgetDataMap = {
      "lblHeading":"Heading",
      "lblAccountType":"AccountType",
      "lblAccountNumber":"AccountNumber",
      "imgAccount":"imgAcc", 
      "lblBalanceHeader":"BalanceHeader",
      "lblBalance":"Balance",
      "lblCurrency":"Currency",
      "lblAccountSts":"AccountSts"
    };
    this.view.segAccounts.removeAll();
    this.view.segAccounts.setData(accounts);
    this.view.forceLayout();
  },

  onSegRowClick:function(){
    var navigateToForm = new kony.mvc.Navigation("MyAppGroup/frmAccountDetail");

    selectedRowItems = this.view.segAccounts.selectedRowItems[0];
    nama = selectedRowItems.AccountType;
    account = selectedRowItems.AccountNumber;
    currency = selectedRowItems.Currency;
    balance = selectedRowItems.Balance;
    balanceHeader = selectedRowItems.BalanceHeader;
    image = selectedRowItems.imgAcc.src;
    infoDetail = selectedRowItems.InfoDetail;
    index = this.view.segAccounts.selectedRowIndex[1];

    kony.print("selectedRowItems "+selectedRowItems);
    kony.print("index"  + index);
    myObj ={"nama":nama, "account":account, "currency" : currency, "balanceHeader": balanceHeader, "balance" : balance, "image":image,"infoDetail":infoDetail};
    navigateToForm.navigate(myObj);
  },


  backOnClick:function(){
    var navigateToForm = new kony.mvc.Navigation("MyAppGroup/frmLogin");
    myObj ={};
    navigateToForm.navigate(myObj);
  },

});