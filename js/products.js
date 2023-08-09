function getProducts() {
    var response = "";
    var request = new XMLHttpRequest();
    request.open("GET", "https://1uc5lbhdt4.execute-api.us-east-1.amazonaws.com/products", true);
    request.onload = function() {
    response = JSON.parse(request.responseText);
    //console.log(response.Items);
    var html = "";
    var max = response.Items.length;
    if (response.length < max) max = response.length;

    for (var i = 0; i< 3; i++)
    {
    html += '<div class="col-md-3 box">' +
    '<h3 id="Product_name">' + response.Items[i].Product_name + '</h3>' +
    '<br>'+
    '<p id="Product_description"><strong> Product Description: </strong>' + response.Items[i].Product_description + '</p>' +
    '<p id="Product_price"><strong> Product Price: </strong> ' +  "$" + response.Items[i].Product_price + '</p>' +
    '<p id="Product_size"><strong> Product Size: </strong></span> ' + response.Items[i].Product_size + '</p>' +
    '<a href="#" onclick="addToCart(id)" >Add to cart</a>' +
    '<br>'+    
    '</div>'
}
    document.getElementById("Product").innerHTML = html
    document.getElementById("Product").addEventListener("click", function(event){
        var target = event.target;
        if (target.tagName === "p"){
            var pro= target.getAttribute("Product_name");
            window.selectedProduct_name = pro;
        }
    })
    };
    request.send();
    }

    function getProductsAll() {
        var response = "";
        var request = new XMLHttpRequest();
        request.open("GET", "https://1uc5lbhdt4.execute-api.us-east-1.amazonaws.com/products", true);
        request.onload = function() {
        response = JSON.parse(request.responseText);
        //console.log(response.Items);
        var html = "";
        var max = response.Items.length;
        if (response.length < max) max = response.length;
        for (var i = 0; i< max; i++)
        {

        html += '<div class="col-4 box">' +
        '<h3>' + response.Items[i].Product_name + '</h3>' +
        '<br>'+
        '<p><strong> Product Description: </strong>' +  response.Items[i].Product_description + '</p>' +
        '<p><strong> Product Price: </strong> ' +   "$" + response.Items[i].Product_price + '</p>' +
        '<p><strong> Product Size: </strong></span> ' + response.Items[i].Product_size + '</p>' +
        '<a href="#" onclick="addToCart()">Add to cart</a>' +
        '</div>'
    }
        document.getElementById("ProductAll").innerHTML = html
        };
        request.send();
        }

    function getProductInCart() {
        var response = "";
        var request = new XMLHttpRequest();
        request.open("GET", "https://1uc5lbhdt4.execute-api.us-east-1.amazonaws.com/product/" + sessionStorage.getItem("Username"), true);
        request.onload = function() {
        response = JSON.parse(request.responseText);
        var html = "";
        var max = response.Items.length;
        if (response.length < max) max = response.length;
        for (var i = 0; i< max; i++)
        {
        html += '<div class="col-md-3 box">' +
        '<button type="button"  class="close" onclick="Delete(\'' + response.Items[i].CartID + '\', \'' + response.Items[i].Username +'\')"><span aria-hidden="true">&times;</span></button>' +
        '<h3>' + response.Items[i].Product_name+ '</h3>' +
        '<br>'+
        '<p><strong> Product price: </strong> ' + "$" + response.Items[i].Product_price + '</p>' +
        '<p><strong> Product size: </strong>' + response.Items[i].Product_size + '</p>' +
        //'<a href="#" onclick="addToCart">Add to cart</a>' +
        '</div>'
    }
        document.getElementById("ProductInCart").innerHTML = html
        };
        request.send();
    }  

    function Delete(CartID, Username){
        var response = "";
        var request = new XMLHttpRequest();
        request.open("DELETE", "https://1uc5lbhdt4.execute-api.us-east-1.amazonaws.com/cart/" + CartID + "/" + Username, true);
        request.onload = function(){
        response = JSON.parse(request.responseText);   
        if (response.message == "application deleted") {
            alert('Item deleted successfully.');
            location.reload();
        }
        else {
            alert('Error. Unable to delete item.');
        }
    };
    request.send();
    
    }

    function Order(){
    


    }
   