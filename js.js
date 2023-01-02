// console.log("Hello World");



const h1=document.querySelector('h1');
// const p=document.querySelector('p');

// const parrafito=document.querySelector('.parrafito');
// const pid=document.getElementById('pid');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const resultado=document.querySelector('#resultado');
const form=document.querySelector('#form');

//En el addEventListener la funcion a llamar no requiere parentesis
//btn.addEventListener('click',onClickBtn);

form.addEventListener('submit',Sumar);


function Sumar(event){
    //console.log('Escuchando el boton');
   event.preventDefault();

   resultado.innerText =( "resultado: "+ (  Number( input1.value) + Number(  input2.value)) );
}


// console.log(input.value);
// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input


// }
// );

// h1.innerHTML="Hi <br> Feo";

// console.log(h1.getAttribute('pantalla'));
// h1.setAttribute('class','rojo');


// h1.classList.add('verde');
// h1.classList.remove('verde');


// h1.classList.toggle('verde');

// h1.classList.contains('verde');


// input.value=456;

// console.log(document.createElement('img'));

// const imagen =document.createElement('img');

// imagen.setAttribute('src','https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
// imagen.setAttribute('heigth','200px');
// imagen.setAttribute('width','200px');


// pid.innerHTML ="";
// pid.appendChild(imagen);


