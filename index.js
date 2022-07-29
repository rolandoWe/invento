
console.log('pipo')
let manana_inp=document.querySelector('.manana_inp');
let tarde_inp=document.querySelector('.tarde_inp');
let noche_inp=document.querySelector('.noche_inp');
let manana=document.querySelector('.manana');
let tarde=document.querySelector('.tarde');
let noche=document.querySelector('.noche');
let formula=document.querySelector('.formula');

function actualizar(){
    manana.innerHTML=manana_inp.value;
    tarde.innerHTML=tarde_inp.value;
    noche.innerHTML=noche_inp.value;
    
    console.log(manana_inp.value)
    console.log(tarde_inp.value)
    console.log(noche_inp.value)
}
// actualizar()

formula.addEventListener("submit",function(f){
 f.preventDefault();
 actualizar()
})