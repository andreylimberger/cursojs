// Função Arrow

function apresentar(nome) {
    return `Meu nome é ${nome}`;
}


// Arrow function
const apresentarNome = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2

// Arrou function com mais de uma linh

const somaNumerosPequenos = (num1, num2) => {
    if (num1 >10 || num2 > 10) {
        return "Somente números de 1 à 9"
    } else {
        return num1 + num2;
    }

}