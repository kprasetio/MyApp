define({ 
  accounts:null,
  accType:null,
  iteration:0,
  //Type your controller code here 
  onNavigate:function(){
    this.view.preShow = this.preShow;
    this.view.init = this.init;
  },

  preShow:function(){

    this.view.lblAll.skin = sknLblFontWhite;
    this.view.lblCreditCard.skin = sknLblFontBlack;
    this.view.lblEWallet.skin = sknLblFontBlack;
    this.view.lblSavings.skin = sknLblFontBlack;

    this.view.lblAll.onTouchStart = this.lblAllOnTounch;
    this.view.lblCreditCard.onTouchStart = this.lblCreditCardOnTounch;
    this.view.lblEWallet.onTouchStart = this.lblEWalletOnTounch;
    this.view.lblSavings.onTouchStart = this.lblSavingsOnTounch;

    this.view.segSavings.onRowClick = this.onSegSavingsRowClick;
    this.view.segEWallet.onRowClick = this.onSegEWalletRowClick;
    this.view.segCreditCard.onRowClick = this.onSegSavingsRowClick;

    //this.getAccounts();
  },

  init:function(){
    this.view.segSavings.setVisibility(false);
    this.view.segEWallet.setVisibility(false);
    this.view.segCreditCard.setVisibility(false);
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
    //alert("Data " + JSON.stringify(data));

    //this.view.segAccounts.removeAll();

    this.accounts = data.accounts;
    lengthData = this.accounts.length; 
    //alert("accounts "+JSON.stringify(accounts));

    this.view.segSavings.removeAt(0, 0);
    this.view.segEWallet.removeAt(0, 0);
    this.view.segCreditCard.removeAt(0, 0);
    this.iteration = 0;
    for (let i=0; i<lengthData;i++) {
      this.accType = this.accounts[i].accountType;

      // Get Data Savings
      this.dataSavingsOnly(i);
      // Get Data E-Cash
      this.dataEwalletOnly(i);
      // Get Data Credit 
      this.dataCreditCardOnly(i);
    }

    this.view.segSavings.setVisibility(true);
    this.view.segEWallet.setVisibility(true);
    this.view.segCreditCard.setVisibility(true);
  },

  dataSavingsOnly:function(iter){
    posCurrent = this.accType.search("Current");
    posSaving = this.accType.search("Saving");
    posDeposito = this.accType.search("Deposito");
    if (posCurrent=== 0 || posSaving === 0 || posDeposito === 0) {
      //alert(accounts[i].accountNum);
      if (this.accounts[iter].accountStatus==="InActive") {
        skinLblStatus = "sknLblFontRed";
      } else {
        skinLblStatus = "sknLblFontBlack";
      }
      dataSavingTmp = {
        lblAccountType:this.accounts[iter].accountType,
        lblAccountNumber:this.accounts[iter].accountNum,
        lblBalance:this.accounts[iter].currentBalance,
        lblCurrency:this.accounts[iter].currency,
        lblAccountSts:{text:this.accounts[iter].accountStatus, skin:skinLblStatus},
        imgAccount:{src:"savings_illustration.png"},
        lblBalanceHeader:{text:"Current balance"}
      };
      this.view.segSavings.addDataAt(dataSavingTmp,this.iteration,0); 
      this.iteration+=1;
    }
  },

  dataEwalletOnly:function(iter){
    posEcash = this.accType.search("Ecash");
    if (posEcash=== 0) {
      if (this.accounts[iter].accountStatus==="InActive") {
        skinLblStatus = "sknLblFontRed";
      } else {
        skinLblStatus = "sknLblFontBlack";
      }
      dataEcashTmp = {
        lblAccountType:this.accounts[iter].accountType,
        lblAccountNumber:this.accounts[iter].accountNum,
        lblBalance:this.accounts[iter].currentBalance,
        lblCurrency:this.accounts[iter].currency,
        lblAccountSts:{text:this.accounts[iter].accountStatus, skin:skinLblStatus},
        imgAccount:{src:"ecash_illustration.png"},
        lblBalanceHeader:{text:"Current balance"}
      };
      this.view.segEWallet.addDataAt(dataEcashTmp,this.iteration,0); 
      this.iteration+=1;
    }
  },
  dataCreditCardOnly:function(iter){
    posCredirCard = this.accType.search("Credit");
    if (posCredirCard=== 0) {
      if (this.accounts[iter].accountStatus==="InActive") {
        skinLblStatus = "sknLblFontRed";
      } else {
        skinLblStatus = "sknLblFontBlack";
      }
      dataCreditCardTmp = {
        lblAccountType:this.accounts[iter].accountType,
        lblAccountNumber:this.accounts[iter].accountNum,
        lblBalance:this.accounts[iter].currentBalance,
        lblCurrency:this.accounts[iter].currency,
        lblAccountSts:{text:this.accounts[iter].accountStatus, skin:skinLblStatus},
        imgAccount:{src:"creditcard_illustration.png"},
        lblBalanceHeader:{text:"Outstanding balance"}
      };
      this.view.segCreditCard.addDataAt(dataCreditCardTmp,this.iteration,0); 
      this.iteration+=1;
    }
  },

  getDataFaildCallback:function(error){
    this.getAccounts();
  },

  onSegSavingsRowClick:function(){
    var navigateToForm = new kony.mvc.Navigation("MyAppGroup/frmAccountDetailNew");

    selectedRowItems = this.view.segSavings.selectedRowItems[0];
    nama = selectedRowItems.lblAccountType;
    account = selectedRowItems.lblAccountNumber;
    currency = selectedRowItems.lblCurrency;
    balance = selectedRowItems.lblBalance;
    imageAcc =selectedRowItems.imgAccount;
    index = this.view.segSavings.selectedRowIndex[1];

    kony.print("selectedRowItems "+selectedRowItems);
    kony.print("index"  + index);
    myObj ={"nama":nama, "account":account, "currency" : currency, "balance" : balance, "imageAcc":imageAcc};
    navigateToForm.navigate(myObj);
  },

  onSegEWalletRowClick:function(){
    var navigateToForm = new kony.mvc.Navigation("MyAppGroup/frmAccountDetailNew");

    selectedRowItems = this.view.segEWallet.selectedRowItems[0];
    nama = selectedRowItems.lblAccountType;
    account = selectedRowItems.lblAccountNumber;
    currency = selectedRowItems.lblCurrency;
    balance = selectedRowItems.lblBalance;
    imageAcc =selectedRowItems.imgAccount;
    index = this.view.segEWallet.selectedRowIndex[1];

    kony.print("selectedRowItems "+selectedRowItems);
    kony.print("index"  + index);
    myObj ={"nama":nama, "account":account, "currency" : currency, "balance" : balance, "imageAcc":imageAcc};
    navigateToForm.navigate(myObj);
  },
  onSegCreditCardRowClick:function(){
    var navigateToForm = new kony.mvc.Navigation("MyAppGroup/frmAccountDetailNew");

    selectedRowItems = this.view.segCreditCard.selectedRowItems[0];
    nama = selectedRowItems.lblAccountType;
    account = selectedRowItems.lblAccountNumber;
    currency = selectedRowItems.lblCurrency;
    balance = selectedRowItems.lblBalance;
    imageAcc =selectedRowItems.imgAccount;
    index = this.view.segCreditCard.selectedRowIndex[1];

    kony.print("selectedRowItems "+selectedRowItems);
    kony.print("index"  + index);
    myObj ={"nama":nama, "account":account, "currency" : currency, "balance" : balance, "imageAcc":imageAcc};
    navigateToForm.navigate(myObj);
  },

  lblAllOnTounch:function(){
    this.view.lblAll.skin = sknLblFontWhite;
    this.view.lblCreditCard.skin = sknLblFontBlack;
    this.view.lblEWallet.skin = sknLblFontBlack;
    this.view.lblSavings.skin = sknLblFontBlack;
    this.view.segSavings.setVisibility(true);
    this.view.segEWallet.setVisibility(true);
    this.view.segCreditCard.setVisibility(true);

  },
  lblCreditCardOnTounch:function(){
    this.view.lblAll.skin = sknLblFontBlack;
    this.view.lblCreditCard.skin = sknLblFontWhite;
    this.view.lblEWallet.skin = sknLblFontBlack;
    this.view.lblSavings.skin = sknLblFontBlack;
    this.view.segSavings.setVisibility(false);
    this.view.segEWallet.setVisibility(false);
    this.view.segCreditCard.setVisibility(true);
  },
  lblEWalletOnTounch:function(){
    this.view.lblAll.skin = sknLblFontBlack;
    this.view.lblCreditCard.skin = sknLblFontBlack;
    this.view.lblEWallet.skin = sknLblFontWhite;
    this.view.lblSavings.skin = sknLblFontBlack;
    this.view.segSavings.setVisibility(false);
    this.view.segEWallet.setVisibility(true);
    this.view.segCreditCard.setVisibility(false);
  },
  lblSavingsOnTounch:function(){
    this.view.lblAll.skin = sknLblFontBlack;
    this.view.lblCreditCard.skin = sknLblFontBlack;
    this.view.lblEWallet.skin = sknLblFontBlack;
    this.view.lblSavings.skin = sknLblFontWhite;
    this.view.segSavings.setVisibility(true);
    this.view.segEWallet.setVisibility(false);
    this.view.segCreditCard.setVisibility(false);
  },
});