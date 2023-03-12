// Node.js
// Para executar: node script.js
const fibonacciArray = [0, 1]
const numeroProcurado = 37

// Sequência com 20 valores
const criarSequencia = ()=>{
    for(let i =1; i<20; i++){
        let posterior = fibonacciArray[fibonacciArray.length -1]
        let anterior = fibonacciArray[fibonacciArray.length -2]
        fibonacciArray.push(posterior + anterior)
    }
}
criarSequencia()

const procurarNumero = (num, valor)=>{
    const filtragem = num.filter(n => n === valor)
    if(filtragem.length){
        console.log(`${valor} pertence a sequência de Fibonacci`)
    }else{
        console.log(`${valor} não pertence a sequência de Fibonacci`)
    }
}

procurarNumero(fibonacciArray, numeroProcurado )


