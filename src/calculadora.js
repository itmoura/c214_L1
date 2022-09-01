const ValidateNumber = require('./validateNumber.js')

const Calc = {
    multiplicacao(num1, num2) {
        if (ValidateNumber.validate(num1, num2)){
            return 'Error'
        }
        return num1 * num2;
    },
    soma(num1, num2) {
        if (ValidateNumber.validate(num1, num2)){
            return 'Error'
        }
        return num1 + num2;
    },
    divisao(num1, num2) {
        if (ValidateNumber.validate(num1, num2)){
            return 'Error'
        }
        if (num2 === 0) {
            return 'Não é possivel dividir por 0'
        }
        return num1 / num2;
    },
    subtracao(num1, num2) {
        if (ValidateNumber.validate(num1, num2)){
            return 'Error'
        }
        return num1 - num2;
    },
    eleva(num1, num2){
        if (ValidateNumber.validate(num1, num2)){
            return 'Error'
        }
        return num1 ** num2;
    }
};

module.exports = Calc;