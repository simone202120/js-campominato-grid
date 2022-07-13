let contenitore=  document.getElementById('contenitore');
let play = document.getElementById("play");
let difficoltà = prompt('inserisci un livello di difficoltà da 1 a 3');
let n;



play.addEventListener('click', function(){
    if(difficoltà == 1){
        n=100;
    }else if(difficoltà== 2){
        n=69;
    }else if(difficoltà== 3){
        n=49;
    }
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
