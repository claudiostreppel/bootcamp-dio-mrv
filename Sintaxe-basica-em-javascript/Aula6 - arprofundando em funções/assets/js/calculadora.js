function calcularadora() {
    const operacao = prompt('Escolha uma operaco: \n 1 - Soma(+) \n 2 - Subtracao (-) \n 3 - Multiplicacao (*)\n 4 - Divisão (/)\n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)')

    let n1 = Number(prompt('Insira o primeiro valor..: '))
    let n2 = Number(prompt('Insira o segundoo valor..: '))
    let resultado = 0

      function soma()  {
        resultado = n1 + n2
        alert(`${n1} + ${n2} = ${resultado}`)
    }
      function subtracao()  {
        resultado = n1 - n2
        alert(`${n1} - ${n2} = ${resultado}`)
    }
      function multiplicacao()  {
        resultado = n1 * n2
        alert(`${n1} x ${n2} = ${resultado}`)
    }
      function divisao()  {
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
    }
      function divisaoInteira()  {
        resultado = n1 % n2
        alert(`${n1} resto da divisão por ${n2} = ${resultado}`)
    }
      function potenciacao()  {
        resultado = n1 ** n2
        alert(`${n1} elevado a ${n2} = ${resultado}`)
    }

    if (operacao == 1) {
        soma()
    } else if (operacao == 2) {
        subtracao()
    } else if (operacao == 3) {
        multiplicacao()
    } else if (operacao == 4) {
        divisao()
    } else if (operacao == 5) {
        divisaoInteira()
    } else if (operacao == 6) {
        potenciacao()
    }
}
calcularadora()