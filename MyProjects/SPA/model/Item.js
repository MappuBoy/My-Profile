function Item(code,description,packSize,qty,price){
    var __code = code;
    var __description = description;
    var __packSize = packSize;
    var __qty = qty;
    var __price = price;

    this.getItemCode=function (){
        return __code;
    }
    this.setItemCode=function (newCode){
        __code = newCode;
    }

    this.getItemDescription=function (){
        return __description;
    }
    this.setItemDescription=function (newDesc){
        __description = newDesc;
    }

    this.getItemPackSize=function (){
        return __packSize;
    }
    this.setItemPackSize=function (newPackSize){
        __packSize = newPackSize;
    }

    this.getItemQty=function (){
        return __qty;
    }
    this.setItemQty=function (newQty){
        __qty = newQty;
    }

    this.getItemPrice=function (){
        return __price;
    }
    this.setItemPrice=function (newPrice){
        __price = newPrice;
    }

}