define({ 
  nama:"",
  account:"",
  currency:"",
  balance:"",
  balanceHeader:"",
  image:"",
  
  onNavigate:function(params){
    this.nama = params.nama;
    this.account = params.account;
    this.currency = params.currency;
    this.balance = params.balance;
    this.image = params.image;
    this.balanceHeader = params.balanceHeader;
	this.infoDetail = params.infoDetail;
    this.view.preShow = this.preShow;
  },

  preShow:function(){
    this.view.lblAccountType.text = this.nama;
    this.view.lblAccountNumber.text = this.account;
    this.view.lblCurrency.text = this.currency;
    this.view.lblBalance.text = this.balance;
    this.view.imgAccount.src = this.image;
    this.view.lblBalanceHeader.text = this.balanceHeader;
    this.view.lblInfoDetail.text = this.infoDetail;
    this.view.HeaderComp.headerBtnLeft.onClick = this.backOnClick;
  },

   backOnClick:function(){
    var navigateToForm = new kony.mvc.Navigation("MyAppGroup/frmAccounts");
    myObj ={};
    navigateToForm.navigate(myObj);
  },
});