let x=document.getElementById("li_1")
console.log(x)
let y=document.getElementsByClassName("myUl")
console.log(y)
console.log(typeof(y))
ilk_ul=y[1]
console.log(ilk_ul)
let z=document.getElementsByTagName("li")[2]
console.log(z)
let a=document.querySelector("ul")
console.log(a)
let b=document.querySelectorAll("ul")
console.log(b)
let c=document.querySelector("#li_1")
console.log(c)
let d=document.querySelectorAll(".myUl")
console.log(d)

console.log("*************************")

console.log(document.URL)
console.log(document.body)
console.log(document.head)
console.log(document.links)

console.log("***************************")
//başlık(h1) rengini değiştirme
console.log("başlık(h1) rengini değiştirme")
let baslik=document.querySelectorAll("h1")
console.log(baslik)
baslik[0].style.backgroundColor="#42f5e9"
baslik[0].style.color="#f54242"
baslik[0].style.border="2px solid green"

function rastgeleRenk(){
    let harf_rakam="ABCDEF0123456789"
    let renk="#"
    for(i=0;i<6;i++){
        renk+=harf_rakam[Math.floor(Math.random()*16)]
    }
    return renk
}

function renkDegistir(){
    yeni_renk=rastgeleRenk()
    baslik[0].style.color=yeni_renk
}

//setInterval: Bir işlemi belirli zaman aralıklarında 
//tekrarlayan iki parametre alan bir JavaScript fonksiyonudur.
setInterval("renkDegistir()",500)


