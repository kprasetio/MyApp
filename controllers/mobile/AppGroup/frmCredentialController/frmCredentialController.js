define({ 

  onNavigate:function(){
    this.view.preShow = this.preShow;
  },

  preShow:function(){
    //this.view.flxDebitCard.rbDebitCard.selectedKey = 'rbg1';
    this.view.flxCreditCard.rbCreditCard.onSelection = this.creditCardOnSelection;
    this.view.flxDebitCard.rbDebitCard.onSelection = this.debitCardOnSelection;
    this.view.flxECash.rbECash.onSelection = this.eCashOnSelection;
    this.view.btnNext.onClick = this.btnNextOnClick;

    this.view.flxCreditCard.flxInputCreditCard.txtCreditCard.onTextChange = this.txtCreditCardOnChange;
    this.view.flxDebitCard.flxInputDebitCard.txtDebitCard.onTextChange = this.txtDebitCardOnChange;
    this.view.flxECash.flxInputECash.txtECash.onTextChange = this.txtECashOnChange;
    this.view.btnNext.setEnabled(false);
    this.view.flxRadioButton.flxCreditCard.height = 80;
    this.view.flxRadioButton.flxDebitCard.height = 80;
    this.view.flxRadioButton.flxECash.height = 80;
    this.view.flxCreditCard.flxInputCreditCard.setVisibility(false);
    this.view.flxDebitCard.flxInputDebitCard.setVisibility(false);
    this.view.flxECash.flxInputECash.setVisibility(false);
    this.view.flxCreditCard.flxInputCreditCard.txtCreditCard.text = "";
    this.view.flxDebitCard.flxInputDebitCard.txtDebitCard.text="";
    this.view.flxECash.flxInputECash.txtECash.text="";
    this.view.HeaderComp.headerBtnLeft.onClick = this.backOnClick;
    this.view.flxRadioButton.flxCreditCard.rbCreditCard.selectedKey = null;
    this.view.flxRadioButton.flxDebitCard.rbDebitCard.selectedKey = null;
    this.view.flxRadioButton.flxECash.rbECash.selectedKey = null;
  },

  txtCreditCardOnChange:function(){
    if (this.view.flxCreditCard.flxInputCreditCard.txtCreditCard.text==="" && 
        this.view.flxDebitCard.flxInputDebitCard.txtDebitCard.text==="" && 
        this.view.flxECash.flxInputECash.txtECash.text===""
       ) {
      this.view.btnNext.setEnabled(false);
    }else {
      this.view.btnNext.setEnabled(true);
    }
  },

  txtDebitCardOnChange:function(){
    if (this.view.flxCreditCard.flxInputCreditCard.txtCreditCard.text==="" && 
        this.view.flxDebitCard.flxInputDebitCard.txtDebitCard.text==="" && 
        this.view.flxECash.flxInputECash.txtECash.text===""
       ) {
      this.view.btnNext.setEnabled(false);
    }else {
      this.view.btnNext.setEnabled(true);
    }
  },

  txtECashOnChange:function(){
    if (this.view.flxCreditCard.flxInputCreditCard.txtCreditCard.text==="" && 
        this.view.flxDebitCard.flxInputDebitCard.txtDebitCard.text==="" && 
        this.view.flxECash.flxInputECash.txtECash.text===""
       ) {
      this.view.btnNext.setEnabled(false);
    }else {
      this.view.btnNext.setEnabled(true);
    }
  },

  creditCardOnSelection:function(){
    this.view.flxRadioButton.flxDebitCard.rbDebitCard.selectedKey = null;
    this.view.flxRadioButton.flxECash.rbECash.selectedKey = null;
    this.view.flxRadioButton.flxCreditCard.height = 150;
    this.view.flxRadioButton.flxDebitCard.height = 80;
    this.view.flxRadioButton.flxECash.height = 80;
    this.view.flxCreditCard.flxInputCreditCard.setVisibility(true);
    this.view.flxDebitCard.flxInputDebitCard.setVisibility(false);
    this.view.flxECash.flxInputECash.setVisibility(false);
    this.view.flxCreditCard.flxInputCreditCard.txtCreditCard.text = "";
    this.view.flxDebitCard.flxInputDebitCard.txtDebitCard.text="";
    this.view.flxECash.flxInputECash.txtECash.text="";

  },
  debitCardOnSelection:function(){
    this.view.flxRadioButton.flxCreditCard.rbCreditCard.selectedKey = null;
    this.view.flxRadioButton.flxECash.rbECash.selectedKey = null;
    this.view.flxRadioButton.flxDebitCard.height = 150;
    this.view.flxRadioButton.flxCreditCard.height = 80;
    this.view.flxRadioButton.flxECash.height = 80;
    this.view.flxCreditCard.flxInputCreditCard.setVisibility(false);
    this.view.flxDebitCard.flxInputDebitCard.setVisibility(true);
    this.view.flxECash.flxInputECash.setVisibility(false);
    this.view.flxCreditCard.flxInputCreditCard.txtCreditCard.text = "";
    this.view.flxDebitCard.flxInputDebitCard.txtDebitCard.text="";
    this.view.flxECash.flxInputECash.txtECash.text="";
  },
  eCashOnSelection:function(){
    this.view.flxRadioButton.flxDebitCard.rbDebitCard.selectedKey = null;
    this.view.flxRadioButton.flxCreditCard.rbCreditCard.selectedKey = null;
    this.view.flxRadioButton.flxECash.height = 150;
    this.view.flxRadioButton.flxDebitCard.height = 80;
    this.view.flxRadioButton.flxCreditCard.height = 80;
    this.view.flxCreditCard.flxInputCreditCard.setVisibility(false);
    this.view.flxDebitCard.flxInputDebitCard.setVisibility(false);
    this.view.flxECash.flxInputECash.setVisibility(true);
    this.view.flxCreditCard.flxInputCreditCard.txtCreditCard.text = "";
    this.view.flxDebitCard.flxInputDebitCard.txtDebitCard.text="";
    this.view.flxECash.flxInputECash.txtECash.text="";
  },

  btnNextOnClick:function(){
    var eCash = this.view.flxECash.flxInputECash.txtECash.text;
    //alert(eCash.substring(0, 2));
    if (eCash!=="" && eCash.substring(0, 2) !== "08"){
      alert("eCash Number is not valid!");
    }else{
      var navigateToForm = new kony.mvc.Navigation("AppGroup/frmLogin");
      myObj ={};
      navigateToForm.navigate(myObj);
    }
  },

  backOnClick:function(){
    var navigateToForm = new kony.mvc.Navigation("AppGroup/frmPreLogin");
    myObj ={};
    navigateToForm.navigate(myObj);
  }
});