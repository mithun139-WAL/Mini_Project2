window.addEventListener('load', function cart(){
    if(localStorage.getItem("Products")){
        let arr = JSON.parse(localStorage.getItem("Products"));
        let divTag = document.querySelector("#display_here");
        let divTag1 =document.querySelector("#display_price");
        let divTag2 = document.querySelector("#list");
        let divtag3 = document.querySelector("#sum_total");
        let text = [];
        let text1 =[];
        let sum = 0;
        let text2 =[];
        for( let value of Object.values(arr)){
            text.push(`Product: ${value.name} \n`);
            text1.push(` Price:₹ ${value.price} \n`);
            text2.push(`${value.name}:  ₹ ${value.price} \n`);
            sum+=Number(value.price) 
        }
        divTag.textContent = text.join(' ');
        divTag1.textContent = text1.join(' ');
        divtag3.textContent = `Total price :₹ ${sum}`;
        divTag2.textContent = text2.join(' ');
    }
    else{

        document.querySelector("#display_here").textContent = "No items in Cart";
    }
});