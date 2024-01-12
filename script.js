
let button1=document.querySelector("#btn1");
let txt1=document.querySelector('#txt1');

let button2=document.querySelector('#btn2');

let button3=document.querySelector("#btn3");
let txt3=document.querySelector('#txt3');

let button4=document.querySelector("#btn4");


button1.addEventListener("click", ()=>{
    let a=document.querySelector('#inp1').value;
    let b=document.querySelector('#inp2').value;
    c=Number(a)+Number(b);

    txt1.innerHTML="Результат: "+(c);
}
)

button2.addEventListener('click', addCircle);
function addCircle(){
    let newCircle=document.createElement('div');
    tsk2.appendChild(newCircle);
    newCircle.classList.add('circle');
    
}


button3.addEventListener("click", () => {
    let a = document.querySelector('#inp3').value;
    let b = document.querySelector('#inp4').value;
    let c = document.querySelector('#inp5').value;
    x = Number(a) + Number(b) + Number(c);

    txt3.innerHTML = "Результат: " + (x);
}
)


button4.addEventListener('click', addSquare);
function addSquare() {
    let newSquare = document.createElement('div');
    tsk4.appendChild(newSquare);
    newSquare.classList.add('square');
}