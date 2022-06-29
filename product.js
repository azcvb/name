const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const product = $(".containerTT__product");
const productImg = $(".containerTT__price");




const newProduct = document.createElement("div")
newProduct.classList.add("containerTT__product--title")
newProduct.innerHTML =`
            <ul>
            <li class="nameProduct">Bỉm tã dán Whoopee</li>
            <li class="priceProduct">130.000 VND</li>
            <li class="SL">SL: 35</li>
            </ul>
`
product.appendChild(newProduct);    

const newImg = document.createElement("div")
newImg.classList.add("containerTT__img")
newImg.innerHTML = `
        <img src="./img/bim2.jpg" alt="" class="imgProduct">
`
productImg.appendChild(newImg)

  
        const nameProduct = $(".nameProduct").outerText
        const priceProduct = $(".priceProduct").outerText
        const imgProduct = $$(".imgProduct")
        const img = imgProduct[0].currentSrc
        










