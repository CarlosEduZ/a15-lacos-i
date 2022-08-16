let coxinha = prompt("Você quer comer mais coxinhas? \n S para Sim \n N para Não.").toUpperCase()
let conta = 0 
let preco = 2.50

while(coxinha !== `N`){
    conta += preco
    coxinha = prompt("Você quer comer mais coxinhas? \n S para Sim \n N para Não.").toUpperCase()
}
alert(`A conta custou um total de ${conta}`)