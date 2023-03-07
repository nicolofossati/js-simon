/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
const number_array = [];
const correct_number = [];
let tmp;
let score = 0;

const ulDom = document.querySelector('#unoreded_list');
let liDom;
for(let i=0; i<5; i++){
    liDom = document.createElement('li');
    tmp = random(1,100);
    number_array[i] = tmp;
    liDom.textContent = tmp;
    ulDom.appendChild(liDom);
}

console.log(number_array);

let curr_promp;
const myTimeout = setTimeout(num_input, seconds(31));
function num_input(){
    for(let i=0; i<5; i++){
        curr_promp = parseInt(prompt(`Inserisci il ${i+1}° numero`));
        if(number_array.includes(curr_promp)){
            correct_number[score] = curr_promp;
            score++;
        }
    }

    const liTagDom = ulDom.getElementsByTagName('li');
    for(let i=0; i<number_array.length; i++){
        liTagDom[i].innerHTML = number_array[i];
        if(correct_number.includes(number_array[i])){
            liTagDom[i].classList.add("correct_num");
        } else {
            liTagDom[i].classList.add("wrong_num");
        }
    }
    timerDom.innerHTML = `HAI INDOVINATO ${score}/5`;
}

const timerDom = document.querySelector('.span_container span');
let rem_sec = 30;

const timeInterval = setInterval(myTimer, seconds(1));

function myTimer(){
    rem_sec--;

    timerDom.innerHTML = `Tempo rimanente: ${rem_sec}s`;
    
    if(rem_sec == 0){
        svuota_array(number_array);
        timerDom.innerHTML = `TEMPO TERMINATO`;
        clearInterval(timeInterval);
    }
}

function seconds(sec){
    return sec*1000;
}

function random(min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

function svuota_array(arr){
    const liTagDom = ulDom.getElementsByTagName('li');
    for(let i=0; i<arr.length; i++){
        liTagDom[i].innerHTML = "";
    }
}