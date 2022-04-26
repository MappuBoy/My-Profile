// jQuery
let custRegExID = /^(C00-)[0-9]{1,3}$/;
let custRegExName = /^[A-Z,a-z]{1,20}$/;
let custRegExAddress = /^[A-Z,a-z]{1,20}$/;
let custRegExContact = /^[0-9]{9}$/;

$('#btnSave').click(function (){
    saveCustomer();
});

$('#txtCustID').on('keyup',function (event){
    if (event.key == "Enter"){
        $('#txtCustName').focus();
    }
    let inputId = $('#txtCustID').val();
    if (custRegExID.test(inputId)){
        $('#txtCustID').css('border','2px solid green');
        $('#lblCustID').text("");
    }else {
        $('#txtCustID').css('border','2px solid red');
        $('#lblCustID').text("Your input Data format is wrong (C00-001)");
    }

});

$('#txtCustName').on('keydown',function (event){
    if (event.key == "Enter"){
        $('#txtCustAddress').focus();
    }
    let inputId = $('#txtCustName').val();
    if (custRegExName.test(inputId)){
        $('#txtCustName').css('border','2px solid green');
        $('#lblCustName').text("");
    }else {
        $('#txtCustName').css('border','2px solid red');
        $('#lblCustName').text("Your input Data format is Wrong");
    }
});

$('#txtCustAddress').on('keydown',function (event){
    if (event.key == "Enter"){
        $('#txtCustContact').focus();
    }
    let inputId = $('#txtCustAddress').val();
    if (custRegExAddress.test(inputId)){
        $('#txtCustAddress').css('border','2px solid green');
        $('#lblCustAddress').text("");
    }else {
        $('#txtCustAddress').css('border','2px solid red');
        $('#lblCustAddress').text("Your input Data format is Wrong");
    }
});

$('#txtCustContact').on('keydown',function (event){
    if (event.key == "Enter"){
        saveCustomer();
    }
    let inputId = $('#txtCustContact').val();
    if (custRegExContact.test(inputId)){
        $('#txtCustContact').css('border','2px solid green');
        $('#lblCustContact').text("");
    }else {
        $('#txtCustContact').css('border','2px solid red');
        $('#lblCustContact').text("Your input Data format is Wrong");
    }
});

$('#txtCustID,#txtCustName,#txtCustAddress,#txtCustContact').on('keydown',function (event){
    if (event.key=="Tab"){
        event.preventDefault();
    }
});

$('#txtSerachID').on('keydown',function (event){
    if (event.key == "Enter"){
        let id = $('#txtSerachID').val();
        searchCustomer(id);
    }
});

$('#btnDelete').click(()=>{

});



function clearCustomerTextFields(){
    $('#txtCustID').val("");
    $('#txtCustName').val("");
    $('#txtCustAddress').val("");
    $('#txtCustContact').val("");

    $('#txtCustID').focus();
}

function generateCustId(){
    var lasIndex = customerDB[customerDB.length-1].getCustomerId();
    // console.log(lasIndex);
    let newCustId = parseInt(lasIndex.substring(1,4))+1;
    // console.log(newOrderId);
    if (newCustId < 10){
        $("#txtCustID").val("C00"+newCustId);
    }else if(newCustId <100){
        $("#txtCustID").val("C0"+newCustId);
    }else {
        $("#txtCustID").val("C"+newCustId);
    }
}

function loadAllCustomer(){
    for (var cust of customerDB){
        let custDetails1 = `<tr><td>${cust.getCustomerId()}</td><td>${cust.getCustName()}</td><td>${cust.getCustAddress()}</td><td>${cust.getCustContact()}</td></tr>`;
        $('#tablebody').append(custDetails1);
    }
}

function saveCustomer(){
    $('#tablebody > tr').off('click');
    // $('#tablebody > tr').off('dblclick');

    //gather details from inputs
    var custid = $('#txtCustID').val();
    var custName = $('#txtCustName').val();
    var custAdress = $('#txtCustAddress').val();
    var custContact = $('#txtCustContact').val();

    var customer = new CustomerDTO(custid,custName,custAdress,custContact);

    customerDB.push(customer);

    $('#tablebody').empty();

    loadAllCustomer();

    clearCustomerTextFields();

    generateCustId();

    $('#tablebody > tr').click(function(){

        //get values of selected rows
        let id = $($(this).children().get(0)).text();
        let name = $($(this).children().get(1)).text();
        let address = $($(this).children().get(2)).text();
        let contact = $($(this).children().get(3)).text();


        $('#txtCustID').val(id);
        $('#txtCustName').val(name);
        $('#txtCustAddress').val(address);
        $('#txtCustContact').val(contact);

    });
}

function deleteCustomer(){

}

function searchCustomer(id){
    // $('#txtSerachID').off('keydown');

    // console.log(id);
    for (i of customerDB){
        var sId =  i.getCustomerId();
        if (sId == id){
            // return i;
            // console.log(i);
            $('#txtCustID').val(sId);
            $('#txtCustName').val(i.getCustName());
            $('#txtCustAddress').val(i.getCustAddress());
            $('#txtCustContact').val(i.getCustContact());
        }
        // else{
        //     alert("There's no such Customer!!!!")
        // }
    }
}














