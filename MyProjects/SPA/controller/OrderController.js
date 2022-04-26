//code to load all customerid into dropdown
$('#custDropDown').on('click', function () {
    $('#custDropDown').empty();
    loadAllCutId();
});

//code to load all itemCode into dropdown
// $('#itemDropDown').on('load',function (){
//
// });

$('#itemDropDown').change(() => {
    var str = "";
    $("#itemDropDown option:selected").each(function () {
        str += $(this).text() + " ";
        itemDB.forEach((value, index) => {
            //console.log(value.getItemCode());
            var code = value.getItemCode();
            if (str.trim() === code) {
                $('#itemDesc').val(value.getItemDescription());
                $('#itemPackSize').val(value.getItemPackSize());
                $('#itemUniPrice').val(value.getItemPrice());
            }
        });
    });
});

//code to addToCard button
$('#btnAdd').click(function () {
    let code = $('#itemDropDown').val();
    let desc = $('#itemDesc').val();
    let packSize = $('#itemPackSize').val();
    let qty = $('#itemQty').val();
    let uniPrice = $('#itemUniPrice').val();

    if (code == "" || desc == "" || packSize == "" || qty == "" || uniPrice == "") {
        // console.log("somthing");
        alert("Something Missing Please Check!!!!!")
        return;
    }

    var found = false;
    if ($('#cartTable').length > 0) {
        $('#cartTable tr').each((i, v) => {
            let idCode = $((v).children)[0].innerText;
            // let iqty = $((v).children)[2].innerText;
            let iunitPrice = $((v).children)[3].innerText;
            if (code.trim() === idCode.trim()) {
                let iqty = Number($((v).children)[2].innerText) + Number(qty);
                $((v).children)[2].innerText = iqty;//Number($((v).children)[2].innerText)+Number(qty);
                $((v).children)[4].innerText = Number(iunitPrice) * iqty;
                found = true;
            }
            //console.log($((v).children)[0].innerText);

        });
    }
    if (!found) {
        let ordDetails = `<tr><td>${code}</td><td>${desc}</td><td>${qty}</td><td>${uniPrice}</td><td>${Number(qty) * Number(uniPrice)}</td></tr>`;
        $('#cartTable').append(ordDetails);
    }
    calAmount();
});

//code to Submit button
$('#btnSubmit').click(function () {
    var rowCount = $('#tblOrderDetails > tbody > tr').length;
    if (rowCount > 0) {
        // console.log("hello");
        var amountTxt = $('#amount').text();
        let newString = amountTxt.split('Total:');
        let numberText = parseFloat(newString[1]);
        var cash = parseFloat($('#exampleFormControlInput1').val());
        var balance = cash - numberText;
        if (cash > numberText) {
            $('#exampleFormControlInput2').val(balance);
            placeOrder();
            addToCart();
            alert("Order Added Successfully");
        } else {
            alert("Cash is lower than Amount");
            $('#exampleFormControlInput1').css('border', '2px solid red');
        }
    } else {
        alert("Check the Table before Place The Order");
    }
});

getTodayDate();

//function to generate date
function getTodayDate() {
    var tdate = new Date();
    var dd = tdate.getDate(); //yields day
    var MM = tdate.getMonth(); //yields month
    var yyyy = tdate.getFullYear(); //yields year
    var currentDate = dd + "-" + (MM + 1) + "-" + yyyy;
    $('#formGroupExampleInput2').val(currentDate);
}

//function to generate auto id
function generateOrdId() {
    var lasIndex = orderDB[orderDB.length - 1].getOrdId();
    // console.log(lasIndex);
    let newOrderId = parseInt(lasIndex.substring(1, 4)) + 1;
    if (newOrderId < 10) {
        $("#formGroupExampleInput").val("D00" + newOrderId);
    } else if (newOrderId < 100) {
        $("#formGroupExampleInput").val("D0" + newOrderId);
    } else {
        $("#formGroupExampleInput").val("D" + newOrderId);
    }
}

//function to loadAll customer id
function loadAllCutId() {
    for (var cust of customerDB) {
        let custDetails1 = `<option>${cust.getCustomerId()}</option>`;
        $('#custDropDown').append(custDetails1);
    }
}

//function to generate item id
function loadAllItemDetails() {
    for (var item of itemDB) {
        let itemDetails1 = `<option>${item.getItemCode()}</option>`;
        $('#itemDropDown').append(itemDetails1);
    }
}


//function to calculate order amount
function calAmount() {
    let itot = 0.0;
    $('#cartTable tr').each((i, v) => {
        let total = $((v).children)[4].innerText;
        itot += Number(total);
    });
    $('#amount').text(`Total: ${itot}.00`);
}

//function to getorder details from the input and add them to array
function addToCart() {
    if ($('#cartTable').length > 0) {
        $('#cartTable tr').each((i, v) => {
            let idCode = $((v).children)[0].innerText;
            let idesc = $((v).children)[1].innerText;
            let iqty = $((v).children)[2].innerText;
            let iunitPrice = $((v).children)[3].innerText;
            let iTotal = $((v).children)[4].innerText;

            var orderDetails = new OrderDetails(idCode, idesc, iqty, iunitPrice, iTotal);

            orderDetailsDB.push(orderDetails);
        });
    }
    // console.log(tot);

    $('#cartTable').empty();
}

//function to submit button click
function placeOrder() {

    let ordId = $('#formGroupExampleInput').val();
    let ordDate = $('#formGroupExampleInput2').val();
    let custId = $('#custDropDown').val();

    var orderDTO = new Order(ordId, ordDate, custId);

    var number = orderDB.push(orderDTO);

}

// function searchItem(id) {
//     for (var item of itemDB) {
//         var code = item.getItemCode();
//         if (code == id) {
//             // $('#txtItemCode').val(code);
//             $('#itemDesc').val(item.getItemDescription());
//             $('#itemPackSize').val(item.getItemPackSize());
//             // $('#txtItemQty').val(item.getItemQty());
//             $('#itemUniPrice').val(item.getItemPrice());
//
//         }
//     }
// }