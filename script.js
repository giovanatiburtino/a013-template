/*Vocês foram contratados para criar um programa para o Labank. Vamos verificar se o dependente do usuário tem entre 13 e 17 anos para 
aprovar a solicitação de cartão de crédito vinculado. Usando ifs aninhados: */ //

const idadeDoDependente = Number(prompt("Digite sua idade:"))

if (idadeDoDependente >= 13) {
    if (idadeDoDependente <= 17) {
        console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu")
    } else {
        console.log("Consulte outras possibilidades Labank.")
    }
} else {
    console.log("Consulte outras possibilidades Labank.")
}

//Utilizando operador lógica para unir duas operações relacionais: 

// if(idadeDoDependente >= 13 && idadeDoDependente <= 17){ 
//     console.log("Seu dependente já pode ter um cartão de crédito vinculado ao seu.")
// } else {
//     console.log("Consulte outras possibilidades Labank.")
// }

//Utilize um if ternário para verificar se o número é exatamente 13.

idadeDoDependente === 13 ? console.log("A idade do do dependente é 13 e já pode ter um cartão") : console.log("Verifique as opções possíveis")

//A Labank gostou muito do seu trabalho e quer implementar um serviço de escolha de cartão pelo ramal telefónico.

const cartao = Number (prompt ("Digite 1 para Fácil, 2 para Black, 3 para Platinum e 4 para Master Gold"))

switch(cartao){
    case 1:
        console.log("Seu cartão escolhido foi Fácil")
        break
    case 2:
        console.log("Seu cartão escolhido foi Black")
        break
    case 3:
        console.log("Seu cartão escolhido foi Platinum")
        break
    case 4:
        console.log("Seu cartão escolhido foi Master Gold")
        break
    default:
        console.log("Escolha uma das quatros opções disponíveis.")
}

//Crie um código que receba um número por prompt e verifique se um número é divisível por 2 e por 3.

const divisivel = Number(prompt("Digite um número"))
const numSurpresa = divisivel

//Utilizando operadores lógicos para unir duas operações relacionais. Crie um if ternário que imprima um número surpresa que deve ser 30.

if (divisivel % 2 === 0 && divisivel % 3 === 0){
    console.log("O número é divisível por 2 e 3")
    numSurpresa === 30 ? console.log("UFA ACERTEI") : console.log("Não foi dessa vez!")
    switch (divisivel){
        case 6:
            console.log("Este número é o 6")
            break
        case 12:
            console.log("Este número é o 12")
            break
        case 18:
            console.log("Este número é 0 18")
            break
        case 24:
            console.log("Este número é o 24")
            break
        case 30:
            console.log("Este número é o 30")
            break
        default:
            console.log("o número é maior que 30 ou menor que 6")
    }
} else {
    console.log("O número não é divisível por 2 e 3")
}

//Utilizando ifs aninhados

// if(divisivel % 2 === 0){
//     if(divisivel % 3 === 0){
//         console.log("Este número é divisível por 2 e 3")
//     }
// } else {
//     console.log("Este número não é divisível por 2 e 3.")
// }
