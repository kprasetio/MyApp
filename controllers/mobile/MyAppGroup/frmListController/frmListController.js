var selectedRowItems = null;
var index=null;

define({ 

  onNavigate:function(parms){
    this.view.preShow = this.preShow;

    nama = parms.nama;
    alamat = parms.alamat;
    value = parms.value;
    mode = parms.mode;
    index = parms.index;

    if (mode === "SaveAdd"){
      // data = this.view.segData.data;
      ///alert("data" + data);
      data = {
        "lblStrip":"" ,
        "lblAddress":alamat, 
        "lblName":nama,
        "lblValue":value,
      };
      //alert(data)
      this.view.segData.addDataAt(data, 15);

    } else if (mode === "SaveEdit"){
      //alert("Save");
      data = this.view.segData.selectedRowItems;
      data.lblName=nama;
      data.lblAddress=alamat;
      data.lblValue=value;
      //alert(data);
      this.view.segData.setDataAt(data, index[1], 0);
    }else if (mode=== "Delete"){
      this.view.segData.removeAt(index[1], 0);
    }else if (mode === "Login"){
      this.view.lblHello.text = "Hello, " + nama;
    }
  },

  preShow:function(){
    this.view.btnAdd.onClick = this.onBtnAddClick;
  },
  //Type your controller code here 
  onClickSegment:function(){
    var navigateToForm = new kony.mvc.Navigation("AppGroup/frmData");

    selectedRowItems = this.view.segData.selectedRowItems;
    nama = selectedRowItems[0].lblName;
    alamat = selectedRowItems[0].lblAddress;
    value = selectedRowItems[0].lblValue;
    index = this.view.segData.selectedRowIndex;
    //alert("index="+index);
    //  alert("index1="+index[1]);
    myObj ={"mode":"Display", "index":index, "nama" : nama, "alamat" : alamat, "value":value};
    navigateToForm.navigate(myObj);
  },

  onBtnAddClick:function(){
    var navigateToForm = new kony.mvc.Navigation("AppGroup/frmData");
    myObj ={"mode":"Add", "index":0, "nama" : " ", "alamat" : " ", "value":value};
    navigateToForm.navigate(myObj);
  },


});