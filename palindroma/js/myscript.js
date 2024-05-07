'use strict';
const parola= prompt('inserire parola');
let parola_al_contrario=[];

for(let i=parola.length-1; i >= 0; i--){
    parola_al_contrario.push(parola[i]);

}

console.log(parola);
console.log(parola_al_contrario);

controllo(parola,parola_al_contrario);

function controllo (parola, parola_al_contrario){
    let cont=0;
    for(let i = 0; i< parola.length; i++){
        if(parola[i] === parola_al_contrario[i])
            cont++;
    }
    if(cont === parola.length)
        console.log(parola + ' è palindroma');
    else
        console.log(parola + ' non è palindroma');
}

