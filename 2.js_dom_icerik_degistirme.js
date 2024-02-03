let p=document.querySelectorAll("p")
console.log(p)
p[1].textContent="Yeni Paragraf"
p[1].textContent="<h1>Yeni Paragraf</h1>" /* Html etiketlerini textContent görmez. */
p[1].innerHTML="<h1> Yeni Başlık </h1>"

let ozel=document.querySelector("#ozel")
console.log(ozel)
let ozel_a=ozel.querySelector("a")
console.log(ozel_a)
console.log(ozel_a.getAttribute("href"))

ozel_a.textContent="Amazon Link"
ozel_a.setAttribute("href","https://www.amazon.com.tr")