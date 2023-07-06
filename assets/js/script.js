const horas= document.getElementById("horas");
const minutos= document.getElementById("minutos");
const segundos= document.getElementById("segundos");
const dia= document.getElementById("dia");
const mes= document.getElementById("mes");
const ano= document.getElementById("ano");

const relogio= setInterval(function time(){
    let datetoday = new Date()
    let hr= datetoday.getHours()
    let min= datetoday.getMinutes()
    let s= datetoday.getSeconds()
    let d= datetoday.getDate()
    let m=datetoday.getMonth() +1
    let a= datetoday.getFullYear()


    if (hr<10) hr= '0' + hr;
    if (min<10) min= '0' + min;
    if (s<10) s= '0' + s;
    if (d<10) d= '0' + d;
    if (m<10) m= '0' + m;
    


    
    horas.textContent=hr;
    minutos.textContent=min;
    segundos.textContent=s;
    dia.textContent=d;
    mes.textContent=m;
    ano.textContent=a;

})
const colorButtons = document.querySelectorAll('.color-button');
const body = document.body;

colorButtons.forEach(button => {
  button.addEventListener('click', function() {
    const selectedColor = button.getAttribute('data-color');
    body.style.background = selectedColor;
  });
});
