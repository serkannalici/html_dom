/* 
JavaScript addEventListener yöntemi, 
bir kullanıcı bir düğmeyi tıkladığında olduğu gibi, 
belirli bir olay gerçekleştiğinde çağrılacak işlevleri 
ayarlamaya olanak tanır.

element.addEventListener(olay, fonksiyon)
*/
let baslik=document.querySelector("#bir")
let baslik2=document.querySelector("#iki")
let baslik3=document.querySelector("#uc")
let baslik4=document.querySelector("#dort")

//1.yöntem
// function mouse_uzerine_gelme(){
//     baslik.textContent="Mouse Üzerinde"
//     baslik.style.color="red"
// }
// baslik.addEventListener("mouseover",mouse_uzerine_gelme)

//* 2.yöntem
baslik.addEventListener("mouseover",function(){
    baslik.textContent="Mouse Üzerinde 2"
    baslik.style.color="blue"
})
baslik.addEventListener("mouseout",function(){
    baslik.textContent="Mouse Üzerinde Değil"
    baslik.style.color="red"
})
baslik2.addEventListener("click",function(){
    baslik2.textContent="Tıklandı"
    baslik2.style.color="yellow"
})
baslik3.addEventListener("dblclick",function(){
    baslik3.textContent="Çift Tıklandı"
    baslik3.style.color="purple"
})
baslik4.addEventListener("mousedown",function(){
    baslik4.textContent="Mouse Basılı"
    baslik4.style.color="chocolate"
})
baslik4.addEventListener("mouseup",function(){
    baslik4.textContent="Mouse Basılı Değil"
    baslik4.style.color="black"
})

baslik4.addEventListener("click",function(){
    let element = document.querySelector("#bes");
    element.classList.toggle("mystyle");
})



