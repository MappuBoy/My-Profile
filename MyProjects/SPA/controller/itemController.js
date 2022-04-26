let itemRegExCode = /^(P00-)[0-9]{1,3}$/;
let itemRegExDesc = /^[A-Z,a-z]{1,20}$/;
let itemRegExPackSIze = /^[0-9]{1,20}('g','kg','pack')$/;
let itemRegExQty = /^[0-9]{1,}$/;
let itemRegExPrice = /^[0-9]{1,}(.)[0-9]{2}$/;

var isFound = false;

$('#txtItemCode').on('keyup',function (event){
    if (event.key == "Enter"){
        $('#txtItemDesc').focus();
    }
    let input = $('#txtItemCode').val();
    if (itemRegExCode.test(input)){
        $('#txtItemCode').css('border','2px solid green');
        $('#lblItemCode').text("");
    }else {
        $('#txtItemCode').css('border','2px solid red');
        $('#lblItemCode').text("Input values are wrong!!!Please check");
    }
});

$('#txtItemDesc').on('keyup',function (event){
    if (event.key == "Enter"){
        $('#txtItemPackSize').focus();
    }
    let input = $('#txtItemDesc').val();
    if (itemRegExDesc.test(input)){
        $('#txtItemDesc').css('border','2px solid green');
        $('#lblItemDesc').text("");
    }else {
        $('#txtItemDesc').css('border','2px solid red');
        $('#lblItemDesc').text("Input values are wrong!!!Please check");
    }
});

$('#txtItemPackSize').on('keyup',function (event){
    if (event.key == "Enter"){
        $('#txtItemQty').focus();
    }
    let input = $('#txtItemPackSize').val();
    if (itemRegExPackSIze.test(input)){
        $('#txtItemPackSize').css('border','2px solid green');
        $('#lblItemPackSize').text("");
    }else {
        $('#txtItemPackSize').css('border','2px solid red');
        $('#lblItemPackSize').text("Input values are wrong!!!Please check");
    }
});

$('#txtItemQty').on('keyup',function (event){
    if (event.key == "Enter"){
        $('#txtItemPrice').focus();
    }
    let input = $('#txtItemQty').val();
    if (itemRegExQty.test(input)){
        $('#txtItemQty').css('border','2px solid green');
        $('#lblItemQty').text("");
    }else {
        $('#txtItemQty').css('border','2px solid red');
        $('#lblItemQty').text("Input values are wrong!!!Please check");
    }
});

$('#txtItemPrice').on('keyup',function (event){
    if (event.key == "Enter"){
        saveItem();
    }
    let input = $('#txtItemPrice').val();
    if (itemRegExPrice.test(input)){
        $('#txtItemPrice').css('border','2px solid green');
        $('#lblItemPrice').text("");
    }else {
        $('#txtItemPrice').css('border','2px solid red');
        $('#lblItemPrice').text("Input values are wrong!!!Please check");
    }
});

$('#txtItemCode,#txtItemDesc,#txtItemPackSize,#txtItemQty,#txtItemPrice').on('keydown',function (event){
    if (event.key=="Tab"){
        event.preventDefault();
    }
});

$('#btnItemSave').click(function (){
    saveItem();
});

$('#txtSearch').on('keydown',function (event){
    if (event.key == "Enter"){
        var searchId = $('#txtSearch').val();
        searchItem(searchId);
    }
});

function clearItemTextFields(){

    $('#txtItemCode').val("");
    $('#txtItemDesc').val("");
    $('#txtItemPackSize').val("");
    $('#txtItemQty').val("");
    $('#txtItemPrice').val("");

    $('#txtItemCode').focus();
}

function loadAllItems(){
    for (var item of itemDB){
        let itmDetails = `<tr><td>${item.getItemCode()}</td><td>${item.getItemDescription()}</td><td>${item.getItemPackSize()}</td><td>${item.getItemQty()}</td><td>${item.getItemPrice()}</td></tr>`;
        $('#itemTablebody').append(itmDetails);
    }
}

function generateitmId(){
    var lasIndex = itemDB[itemDB.length-1].getItemCode();
    // console.log(lasIndex);
    let newItemId = parseInt(lasIndex.substring(1,4))+1;
    // console.log(newOrderId);
    if (newItemId < 10){
        $("#txtItemCode").val("P00"+newItemId);
    }else if(newItemId <100){
        $("#txtItemCode").val("P0"+newItemId);
    }else {
        $("#txtItemCode").val("P"+newItemId);
    }
}

function saveItem(){

    $('#itemTablebody > tr').off('click');

    let code = $('#txtItemCode').val();
    let desc = $('#txtItemDesc').val();
    let pckSize = $('#txtItemPackSize').val();
    let qty = $('#txtItemQty').val();
    let price = $('#txtItemPrice').val();


    var item = new Item(code,desc,pckSize,qty,price);

    itemDB.push(item);

    $('#itemTablebody').empty();

    loadAllItems();

    clearItemTextFields();

    generateitmId();

    $('#itemTablebody > tr').click(function(){

        //get values of selected rows
        let code = $($(this).children().get(0)).text();
        let desc = $($(this).children().get(1)).text();
        let packSize = $($(this).children().get(2)).text();
        let qty = $($(this).children().get(3)).text();
        let price = $($(this).children().get(4)).text();


        $('#txtItemCode').val(code);
        $('#txtItemDesc').val(desc);
        $('#txtItemPackSize').val(packSize);
        $('#txtItemQty').val(qty);
        $('#txtItemPrice').val(price);

    });

    $('#itemDropDown').empty();

    loadAllItemDetails();
}

function searchItem(id){
    for (var item of itemDB){
        var code = item.getItemCode();
        if (code == id){
            $('#txtItemCode').val(code);
            $('#txtItemDesc').val(item.getItemDescription());
            $('#txtItemPackSize').val(item.getItemPackSize());
            $('#txtItemQty').val(item.getItemQty());
            $('#txtItemPrice').val(item.getItemPrice());
        }
    }
}

function deleteItem(){

}

function updateItem(){

    /*let code = $('#txtItemCode').val();
    var upID = searchItem(code);

    if (itemDB.length > 0){
        if (){

        }else if (){
            saveItem();
        }
    }*/
    // let desc = $('#txtItemDesc').val();
    // let pckSize = $('#txtItemPackSize').val();
    // let qty = $('#txtItemQty').val();
    // let price = $('#txtItemPrice').val();


}