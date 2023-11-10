define([], function() {
  /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */
  function PresentationController() {
    kony.mvc.Presentation.BasePresenter.call(this);
  }

  inheritsFrom(PresentationController, kony.mvc.Presentation.BasePresenter);

  /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */
  PresentationController.prototype.initializePresentationController = function() {

  };

  PresentationController.prototype.getAccounts = function(params, successCallBack, errorCallBack) {
    var getAccountsActionModel = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PaninUIManager");
    getAccountsActionModel.businessController.getAccounts(params, successCallBack, errorCallBack);
  };

  return PresentationController;
});