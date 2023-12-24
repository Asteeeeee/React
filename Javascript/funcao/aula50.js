// argumentos que sustentam todos os argumentos enviados
function funcao([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}

let obj = {nome: 'Luis', sobrenome: 'Rocha', idade: 19};
let array = []
//funcao(['Luis', 'Guilherme', 19]);

const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
};
conta('/', 1, 20, 30, 40, 50 ); 