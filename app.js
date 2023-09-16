 const search = ()=>{
    const searchBox = document.querySelector("#search-item").value.toUpperCase();
    const storeitems = document.querySelector(".product-list");
    const product = document.querySelectorAll(".product");
    const productName = document.getElementsByTagName("h2");

    for( var i = 0;i< productName.length ;i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
          let textValue =  match.textContent || match.innerHTML

          if(textValue.toUpperCase().indexOf(searchBox) > -1){
            product[i].style.display="";
          }
          else{
            product[i].style.display="none";
            
          }
        }
    }
 }