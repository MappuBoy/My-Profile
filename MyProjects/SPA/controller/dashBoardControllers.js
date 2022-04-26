var dashboardPage = document.getElementById('homePage');
var orderPage = document.getElementById('orderPage');
var customerPage = document.getElementById('customerPage');
var item_Page = document.getElementById('itemPage');

dashboardPage.style.display = 'block';
orderPage.style.display = 'none';
customerPage.style.display = 'none';
item_Page.style.display = 'none';

var bthDashborad = document.getElementById('dashBoard');

bthDashborad.addEventListener('click',function (){
    orderPage.style.display = 'none';
    customerPage.style.display = 'none';
    item_Page.style.display = 'none';
    dashboardPage.style.display = 'block';
});

var bthOrder = document.getElementById('order');

bthOrder.addEventListener('click',function (){
    dashboardPage.style.display = 'none';
    customerPage.style.display = 'none';
    item_Page.style.display = 'none';
    orderPage.style.display = 'block';
});

var bthCustomer = document.getElementById('customer');

bthCustomer.addEventListener('click',function (){
    dashboardPage.style.display = 'none';
    item_Page.style.display = 'none';
    orderPage.style.display = 'none';
    customerPage.style.display = 'block';
});

var bthItem = document.getElementById('item');

bthItem.addEventListener('click',function (){
    dashboardPage.style.display = 'none';
    orderPage.style.display = 'none';
    customerPage.style.display = 'none';
    item_Page.style.display = 'block';
});

getCustomerCount();

getItemCount();

getorderCount();

function getCustomerCount(){
    let custCount;
    custCount = customerDB[customerDB.length-1];
    $('#countCustomer').text(custCount);
}

function getItemCount(){
    let custCount;
    custCount = itemDB[itemDB.length-1];
    $('#countCustomer').text(custCount);
}

function getorderCount(){
    let custCount;
    custCount = orderDB[orderDB.length-1];
    $('#countCustomer').text(custCount);
}