let contenitore=  document.getElementById('contenitore');
let play = document.getElementById("play");
let difficoltà = document.getElementById('difficult').value;
let n;
if(difficoltà.value == 1){
    n=100;
}else if( difficoltà.value == 2){
    n==81;
}else if( difficoltà.value == 3){
    n==49;
}
play.addEventListener('click', function(){
    creaquadrati(n);
    }
);




function creaquadrati(numero){
    console.log('SONO DENTRO LA FUNCTION')
    for(let i=1; i<=numero; i++){
        const creaquadrato= document.createElement('div');
        console.log('SONO DENTRO LA FOR')
        creaquadrato.classList.add('quadrato');
        creaquadrato.innerHTML = i;
        contenitore.append(creaquadrato);

        creaquadrato.addEventListener('click',
            function (){
                creaquadrato.classList.toggle('azzurro');
                console.log(i)
             }
        )
    }
}
