var valores = [9, 1, 4, 7, 5]
/*valores.sort() para deixar em ordem numerica
for (var pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
    
}
 */

for(var pos in valores){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}