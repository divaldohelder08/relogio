const spanhr=document.querySelector(".horas")
const spanmin=document.querySelector(".minutos")
const spanseg=document.querySelector(".segundos")
const marcador=document.querySelector(".marcador")
let novadata
setInterval(()=> {
    novadata=new Date()
    let horas=novadata.getHours()
    let minutos=novadata.getMinutes()
    let segundos=novadata.getSeconds()
    if(horas<10)
        horas="0"+horas
    spanhr.innerText=horas    
    if(minutos<10)
        horas="0"+minutos
    spanmin.innerText=minutos
    if(segundos<10)
        horas="0"+segundos
    spanseg.innerText=segundos
    
})