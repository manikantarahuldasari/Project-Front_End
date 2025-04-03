function getAllproducts(){
    var promiseObj=fetch('https://fakestoreapi.com/products')
    promiseObj
    .then((res)=>{
         return res.json()
    }).
    then((data)=>{
        console.log(data)
        data.forEach((product)=>{
            createCards(product)
        })
    })

    .catch((error)=>{
        alert("something went wrong while fetching the data")
    });
}

function createCards(product){
    const {image,price,title}=product;

    var divCards=document.createElement("div");
    divCards.className="card" ; 
    
    var imgEle=document.createElement("img");
    imgEle.src=image;
    imgEle.width="270";
    imgEle.height="160";

    var div=document.createElement("div");
    div.style.display="flex";
    div.style.justifyContent="space-between";

    var h3=document.createElement("h3");
    h3.innerText=title;

    var i=document.createElement("i");
    i.style.fontSize="21px";
    i.className="bi bi-suit-heart";

    div.appendChild(h3);
    div.appendChild(i);

    var p1=document.createElement("p");
    var p2=document.createElement("p");
    p1.innerText=`$ ${price}`;
    p2.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit."

    var button1=document.createElement("button");
    var button2=document.createElement("button");
    button1.innerText="product deatils";
    button2.innerText="Add to cart";

    divCards.appendChild(imgEle);
    divCards.appendChild(div);
    divCards.appendChild(p1);
    divCards.appendChild(p2);
    divCards.appendChild(button1);
    divCards.appendChild(button2);
   
    document.querySelector("#cards").appendChild(divCards)

    
}