define([], function () { 

  /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Delegator
     */
  function BusinessController() { 

    kony.mvc.Business.Delegator.call(this); 

  } 

  inheritsFrom(BusinessController, kony.mvc.Business.Delegator); 

  BusinessController.prototype.getAccounts = function(param,presentationSuccess,presentationError) {
    var serviceHandler =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("getAccountsObject");
    serviceHandler.customVerb('getAccounts', param , getAllCallback,{});

    function getAllCallback(status, data, error) {
     
       if(error === null){
        presentationSuccess(data);
      } else{
        presentationError(error);
      }
    }
  };
  
  return BusinessController;

});