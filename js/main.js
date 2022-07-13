let contenitore=  document.getElementById('contenitore');

function creaquadrti(){
    for(let i=0; i<=100; i++){
        const creaquadrato= document.createElement('div');
        creaquadrato.classList.add('square');
        contenitore.append(creaquadrato);
    }
}