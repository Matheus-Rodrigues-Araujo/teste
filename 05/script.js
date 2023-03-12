let palavra = 'Cadeira'
let tamanho = palavra.length -1

const inverterPalavra = (str) =>{
    let tamanho = str.length -1
    let palavraInvertida = ''
    for(let i= tamanho; i >= 0; i--){
        palavraInvertida += str[i]
    }
    console.log('>>> ' + palavraInvertida)
}

inverterPalavra(palavra)