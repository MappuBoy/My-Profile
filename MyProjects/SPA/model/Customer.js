function CustomerDTO(id,name,address,contact){
    var __id = id;
    var __name = name;
    var __address = address;
    var __contact = contact;

    this.getCustomerId=function (){
        return __id;
    }

    this.setCustomerId=function (newID){
        __id = newID;
    }

    this.getCustName=function (){
        return __name;
    }

    this.setCustName=function (newName){
        __name = newName;
    }

    this.getCustAddress=function (){
        return __address;
    }

    this.setCustAddress=function (newAdd){
        __address = newAdd;
    }

    this.getCustContact=function (){
        return __contact;
    }

    this.setCustContact=function (newCon){
        __contact = newCon;
    }
}