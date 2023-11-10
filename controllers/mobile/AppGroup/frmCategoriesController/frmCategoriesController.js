define({ 

  //Type your controller code here 
  onNavigate:function(){
    this.view.preShow = this.preShow; 
  },

  preShow:function(){
    this.getCategories();
  },

  getCategories:function(){
    var repo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("getCategories");
    var param = {
      "APIKEY": "Ry78bErN4Tapf5hNDW934kZ5",
      "categoryId":"abcat0101000"
    };

    repo.customVerb('getCategories', param, getAllCompletionCallback.bind(this));
    function getAllCompletionCallback(status, data, error) {

      kony.print("getAllCompletionCallback status:::"+JSON.stringify(status));
      kony.print("getAllCompletionCallback data:::"+JSON.stringify(data));
      kony.print("getAllCompletionCallback error:::"+JSON.stringify(error));


      // this.successCallback(data);
      if(error === null){
        this.successCallback(data);
      } else{
        this.errorCallback(error);
      }
    }
  },

  successCallback:function(data){
    header = "\"CATEGORIES\"";
    subCategories = data.subCategories;
    this.view.segData.widgetDataMap = {
      "lblHeading":"header",
      "lblCategoriesId":"categoryId",
      "lblCategoriesName":"categoryName",
    };

    let hdr = {"lblHeading":header};
    let gabung = [[hdr,subCategories],];
    //alert(gabung);
    this.view.segData.setData(gabung);

  },

  errorCallback:function(error){
    alert(error);
  },

});