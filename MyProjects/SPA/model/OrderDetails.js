function OrderDetails(code,desc,qty,unitPrice,tot){
    var __itemID = code;
    var __desc = desc;
    var __qty = qty;
    var __unitPrice = unitPrice;
    var __tot = tot;

    this.getItemId=function (){
        return __itemID;
    }
    this.setItemId=function (newID){
        __itemID = newID;
    }

    this.getItemDesc=function (){
        return __desc;
    }
    this.setItemDesc=function (newDesc){
        __desc = newDesc;
    }

    this.getQty=function (){
        return __qty;
    }
    this.setQty=function (newQty){
        __qty = newQty;
    }

    this.getUnitPrice=function (){
        return __unitPrice;
    }
    this.setUnitPrice=function (newUniPrice){
        __unitPrice = newUniPrice;
    }

    this.getTot=function (){
        return __tot;
    }
    this.setTot=function (newTot){
        __tot = newTot;
    }


}