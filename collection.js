var searchinput = document.getElementById("searchinput")

var products = document.querySelectorAll(".products-box")

searchinput.addEventListener("input",function(){
    var searchvalue = searchinput.value.toLowerCase()

    products.forEach(function(product){
        var productname = product.textContent.toLowerCase()

        if(productname.includes(searchvalue)){
            product.style.display="block"
        } else{
            product.style.display="none"
        }
    })
})