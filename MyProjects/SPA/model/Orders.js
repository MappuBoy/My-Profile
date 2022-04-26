function Order(ordID,ordDate,custId){
    var __ordID = ordID;
    var __ordDate = ordDate;
    var __custId = custId;

    this.getOrdId=function (){
        return __ordID;
    }
    this.setOrdId=function (newID){
        __ordID = newID;
    }

    this.getOrdDate=function (){
        return __ordID;
    }
    this.setOrdDate=function (newDate){
        __ordDate = newDate;
    }

    this.getCustId=function (){
        return __custId;
    }
    this.setCustId=function (newCustId){
        __custId = newCustId;
    }

}