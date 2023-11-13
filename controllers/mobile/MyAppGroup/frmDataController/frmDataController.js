nama = "";
alamat = "";
value = "";
index = 0;

define({ 

  //Type your controller code here 
  onNavigate:function(parms){
    this.view.preShow = this.preShow;
    
    nama = parms.nama;
    alamat= parms.alamat;
    value = parms.value;
    mode = parms.mode;
    index = parms.index;
    //alert(nama);
    this.view.flxMain.txtNama.text = nama;
    this.view.flxMain.txtAlamat.text = alamat;
    this.view.flxMain.txtValue.text = value;

    if (mode==="Display"){
      this.view.btnEdit.text = "Edit";
      this.view.btnDelete.setVisibility(true);
      this.view.flxMain.txtNama.setEnabled(false);
      this.view.flxMain.txtAlamat.setEnabled(false);
      this.view.flxMain.txtValue.setEnabled(false);
    } else if (mode==="Add"){
      this.view.btnEdit.text = "Save";
      this.view.flxMain.txtNama.setEnabled(true);
      this.view.flxMain.txtAlamat.setEnabled(true);
      this.view.flxMain.txtValue.setEnabled(true);
      this.view.btnDelete.setVisibility(false);
    }

  },
  
  preShow:function(){
    this.view.btnEdit.onClick = this.saveOnClick;
    this.view.btnDelete.onClick = this.deleteOnClick;
  },

  saveOnClick:function(){
    if (this.view.btnEdit.text==="Edit"){
      this.view.flxMain.txtValue.setEnabled(true);
      this.view.flxMain.txtAlamat.setEnabled(true);
      this.view.btnEdit.text="Save";
      this.view.btnDelete.setVisibility(false);
      mode = "Edit";
    }else{
      mymodule = require("Module"); 
      mymodule.commonAlrt("Are you sure ?",this.saveCallBack); 
    }
  },

  saveCallBack:function(response)
  {
    if(response){
      var navigateToForm = new kony.mvc.Navigation("AppGroup/frmList");
      nama = this.view.flxMain.txtNama.text;
      alamat = this.view.flxMain.txtAlamat.text;
      value = this.view.flxMain.txtValue.text;

      if (mode==="Edit") {
        myObj ={"mode":"SaveEdit","index":index,"nama" : nama, "alamat" : alamat,"value" : value};
      }else if (mode==="Add") {
        myObj ={"mode":"SaveAdd","index":index,"nama" : nama, "alamat" : alamat,"value" : value};
      }
      
      navigateToForm.navigate(myObj);
    }
  },

  deleteOnClick:function(){
    mymodule = require("Module"); 
    mymodule.commonAlrt("Are you sure ?",this.deleteCallBack); 
  },

  deleteCallBack:function(response)
  {
    if(response){
      var navigateToForm = new kony.mvc.Navigation("AppGroup/frmList");
      nama = this.view.flxMain.txtNama.text;
      alamat = this.view.flxMain.txtAlamat.text;
      value = this.view.flxMain.txtValue.text;
      myObj ={"mode":"Delete","index":index,"nama" : nama, "alamat" : alamat,"value" : value};
      navigateToForm.navigate(myObj);
    }
  },

  backOnClick:function(){
    var navigateToForm = new kony.mvc.Navigation("AppGroup/frmList");
    myObj ={"mode":"Display","index":0,"nama" : " ", "alamat" : " ","value" : " "};
    navigateToForm.navigate(myObj);
  }
});