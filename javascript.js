// document.writeln("<script type='text/javascript' src='./product.js'></script>");

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const signIn = $(".header__signIn")
const signOut = $(".header__signOut")
const avatar = $(".header__avatar")
const modal = $("#modal");
const modalIn = $(".modalIn");
const modalOut = $(".modalOut");
const modalCloseIN = $(".closeIn");
const modalCloseOut = $(".closeOut");
const accountIn = $$(".account__input")
const btnIn = $$(".btnSignIn")
const nameAcc = $(".account__text")
const addProduct = $$(".addProduct")
const logOut = $(".logOut")
const modalProduct = $(".modal__admin")
const closeAdmin = $(".closeAdmin")
const modalBtnAdmin = $(".modal__productBtn")
const reloadInput = $$("input")
const addProductModal = $$(".addProduct__modal")
const quanao = $(".quanao")
const sua = $(".sua")
const bim = $(".bim")
const dochoi = $(".dochoi")
const vitamin = $(".vitamin")
const imgProduct = $$(".imgProduct")
const nameProduct = $$(".nameProduct")
const priceProduct = $$(".priceProduct")


var arr = [
]


signIn.onclick = function() {
   modalIn.classList.add("open")
}
signOut.onclick = function() {
    modalOut.classList.add("open")
}

modalCloseIN.onclick = function() {
    modalIn.classList.remove("open")
}
modalCloseOut.onclick = function() {
    modalOut.classList.remove("open")
}


btnIn[0].onclick = function() {   
    if(accountIn[0].value != "") {
        // signIn.classList.add("hidden")
        // signOut.classList.add("hidden")
        modalIn.classList.remove("open")
        alert("Bạn đã đăng ký thành công.")

    }
    
    }
 
 btnIn[1].onclick = function() {   
    if(accountIn[1].value != "") {
        signIn.classList.add("hidden")
        signOut.classList.add("hidden")
        modalOut.classList.remove("open")
        avatar.classList.remove("hidden")
        nameAcc.innerHTML = accountIn[1].value;
        if(accountIn[1].value == "admin") {
            addProduct.forEach(element => {
                element.classList.add("openBlock")
            });
        }
    }
 }

 logOut.onclick = function() {
        signIn.classList.remove("hidden")
        signOut.classList.remove("hidden")
        avatar.classList.add("hidden")
        location.reload()
 }
addProduct.forEach(e => {
    e.onclick = function() {
        modalProduct.classList.add("openFlex")
        arr.shift()
    }
});

closeAdmin.onclick = function() {
    modalProduct.classList.remove("openFlex")
    reloadInput.forEach(e => {
        e.value = ''
    })
}
modalBtnAdmin.onclick = function() {
    
    modalProduct.classList.remove("openFlex")
    arr.push({
        typeProduct: addProductModal[0].value,
        imgProduct:addProductModal[1].value,
        nameProduct: addProductModal[2].value,
        priceProduct: addProductModal[3].value,
        SLProduct: addProductModal[4].value,
})

const newAddProduct = document.createElement("li")
        newAddProduct.innerHTML = `
                <a href="./product.html">
                <img src="${arr[0].imgProduct}" alt="" class="imgProduct">
                    <p>${arr[0].nameProduct} </p>
                    <div class="price">
                        <p class="priceProduct">${arr[0].priceProduct} VND</p>
                        <div class="price-icon">
                        <i class="fa-solid fa-square-plus"></i>
                        </div>
                    </div>
                </img>
                </a>

        `


    if(arr[0].typeProduct == "quần áo") {
        quanao.appendChild(newAddProduct); 
    }else if(arr[0].typeProduct == "sữa") {
        sua.appendChild(newAddProduct); 
    }else if(arr[0].typeProduct == "bỉm") {
        bim.appendChild(newAddProduct); 
    }else if(arr[0].typeProduct == "đồ chơi") {
        dochoi.appendChild(newAddProduct); 
    }else if(arr[0].typeProduct == "vitamin") {
        vitamin.appendChild(newAddProduct); 
    }else {
        alert("Bạn nhập sai danh mục sản phẩm. Xin vui lòng nhập lại!!")
    }
    

    
    
        



    reloadInput.forEach(e => {
        e.value = ''
    })
}






