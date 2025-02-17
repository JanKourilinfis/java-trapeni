/*var text="ahojjjjjjj"
alert(text.toUpperCase())
alert(text.toLowerCase())
alert(text.charAt(0))
alert(text.length)
alert(text.indexOf("j"))
alert(text.lastIndexOf("j"))
alert(text.substring(0, 2))*/

var pohlaví=prompt("jaké je vaše pohlaví")
var rod=prompt("zadejte vaše rozdné číslo, s lomítkem(11 znaků), nebo bez(10 znaků)")
var cislo=rod.length
var lom=rod.charAt(6)
if(cislo==10||11&&lom=="/"){
    alert("platné rodné číslo")
}
else{
    alert("neplatné rodné číslo")
}

if(pohlaví==("muž")){
    alert("jste muž")
}
else if(pohlaví==("žena")){
    alert("jste žena")
}
else{
    alert("vaše pohlaví neznáme")
}
