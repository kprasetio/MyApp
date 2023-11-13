define(function () {

  return {
    confirmDialog:function(messageString,callBack){ 
      var basicConf = {message: messageString,
                       alertType: constants.ALERT_TYPE_CONFIRMATION,
                       alertTitle: "Confirmation",
                       yesLabel:"yes",
                       noLabel: "no", 
                       alertHandler: callBack};
      var pspConf = {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT,
        "contentAlignment":constants.ALERT_CONTENT_ALIGN_CENTER
      };
      var infoAlert = kony.ui.Alert(basicConf,pspConf);
    },

    informDialog: function(messageString){ 
      //Creating the basicConfig object
      var basicConf = {
        message: messageString,
        alertType: constants.ALERT_TYPE_INFO,

      };
      //Creating the pspConfig object
      var pspConfig = {
        "contentAlignment": constants.ALERT_CONTENT_ALIGN_LEFT
      };
      kony.ui.Alert(basicConf, pspConfig);
    },

    setLanguange:function(){
      alert("Current Device Local = " + kony.i18n.getCurrentDeviceLocale());
      var selLang = "in_ID";
      kony.i18n.setCurrentLocaleAsync(selLang,this.LocaleUpdateSucCallback, this.LocaleUpdateFailCallback);
      kony.store.setItem("currentDeviceLocale",selLang);
      //  }
    },

    LocaleUpdateSucCallback:function(oldresp,newresp){

      alert(oldresp + " " + newresp);

    },
    LocaleUpdateFailCallback:function(oldresp,newresp){
      alert(oldresp + " " + newresp);
    }

  };
});