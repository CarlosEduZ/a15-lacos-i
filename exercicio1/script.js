let coxinha = Number(prompt("Você quer comer mais coxinhas? \n 1 para Sim \n 2 para Não."))
let conta = 0 
let preco = 2.50

while(coxinha !== 2){
    conta += preco
    coxinha = Number(prompt("Você quer comer mais coxinhas? \n 1 para Sim \n 2 para Não."))
}
alert(`A conta custou um total de ${conta}`)