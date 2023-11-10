define({ 

  onNavigate:function(){
    this.view.init = this.init;
  },
  
  init:function(){
    this.view.flxCustomer.onTouchStart = this.customerOnClick;
    this.view.flxNotCustomer.onTouchStart = this.notCustomerOnClick;
  },

  customerOnClick:function(){
    var navigateToForm = new kony.mvc.Navigation("AppGroup/frmCredential");
    myObj ={};
    navigateToForm.navigate(myObj);
  },
  
  notCustomerOnClick:function(){
    alert("Available Soon !");
  },

});