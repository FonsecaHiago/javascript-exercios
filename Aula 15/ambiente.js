let num = [5, 3, 1, 6, 8]
//num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
if (pos == -1) {
    console.log('Valor inexistente')
} else{
console.log(`o valor 8 esta na posição ${pos}`)
}