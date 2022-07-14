let contenitore=  document.getElementById('contenitore');
let play = document.getElementById("play");




play.addEventListener('click', function(){
    let difficolta = parseInt(document.getElementById('difficult').value);
    let n=0;
    
    contenitore.innerHTML='';

    if(difficolta == 1){
        n=100;
    }else if(difficolta == 2){
        n=81;
    }else if(difficolta ==  3){
        n=49;
    }
    creaquadrati(n);

    console.log(difficoltà, n)
    }
);




function creaquadrati(numero){
    console.log('SONO DENTRO LA FUNCTION')
    for(let i=1; i<=numero; i++){
        const creaquadrato= document.createElement('div');
        console.log('SONO DENTRO LA FOR')
        creaquadrato.classList.add('quadrato');
        creaquadrato.innerHTML = i;
        let radicequadrata= Math.sqrt(numero);
        creaquadrato.style.width=`calc(100% / ${radicequadrata})`;
        creaquadrato.style.height=`calc(100% / ${radicequadrata})`;
        contenitore.append(creaquadrato);

        creaquadrato.addEventListener('click',
            function (){
                creaquadrato.classList.toggle('azzurro');
                console.log(i)
             }
        )
    }
}
