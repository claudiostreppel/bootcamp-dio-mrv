// código criado por mim

/*let num1 = Number(prompt('Digite o primeiro número....:  '))
let num2 = Number(prompt('Digite o segundo numero.....:  '))
let resultado = document.getElementById('resultado')
function soma() {
    let resultado1 = num1 + num2
    if (num1 === num2 && resultado1 >= 10 && resultado1 < 20) {
        resultado.innerText = (`Os números digitados ${num1} e ${num2} são iguais. O resultado da sua soma é ${resultado1} maior que 10 e menor que 20`)
    } else if (num1 === num2 && resultado1 < 10) {
        resultado.innerText = (`Os números digitados ${num1} e ${num2} são iguais. O resultado da sua soma é ${resultado1} e é menor que 10`)
    } else if (num1 !== num2 && resultado1 >= 10 && resultado1 < 20) {
        resultado.innerText = (`Os números ${num1} e ${num2} não são iguais. O resultado da sua soma é ${resultado1} maior que 10 e menor que 20`)
    } else if (num1 !== num2 && resultado1 < 10) {
         resultado.innerText = (`Os números ${num1} e ${num2} não são iguais. O resultado da sua soma é ${resultado1} e é menor 10 e menor que 20`)
    } else if (num1 !== num2 && resultado1 >= 20) {
        resultado.innerText = (`Os números ${num1} e ${num2} não são iguais. O resultado da sua soma é ${resultado1} e é maior que 10 maior ou igual a 20`)
    } else {
        resultado.innerText = (`Os números ${num1} e ${num2} são iguais. O resultado da sua soma é ${resultado1} e é maior que 10 e maior ou igual a 20`)
    }
}
soma()*/

// código criado pela instrutora Stephany 
/*function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(11, 20));*/