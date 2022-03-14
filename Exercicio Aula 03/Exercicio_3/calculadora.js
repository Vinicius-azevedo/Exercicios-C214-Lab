const CalculadoraLimit = require('./valid');
const valid = require('valid.js');


const Calculadora = {
    soma(val1, val2) {
        const calcValor1 = valid({ val1 },  CalculadoraLimit.calculadoraLimit);
        const calcValor2 = valid({ val2 },  CalculadoraLimit.calculadoraLimit);
        if((calcValor1 !== undefined) || (calcValor2 !== undefined) ){
            return 'Valores não definidos';
        }
        
        var res = val1 + val2;
        return res;
    },

    subtracao(val1, val2) {
        const calcValor1 = valid({ val1 },  CalculadoraLimit.calculadoraLimit);
        const calcValor2 = valid({ val2 },  CalculadoraLimit.calculadoraLimit);
        if((calcValor1 !== undefined) || (calcValor2 !== undefined) ){
            return 'Valores não definidos';
        }

        var res = val1 - val2;
        return res;
    },

    multiplicacao(val1, val2) {
        const calcValor1 = valid({ val1 },  CalculadoraLimit.calculadoraLimit);
        const calcValor2 = valid({ val2 },  CalculadoraLimit.calculadoraLimit);
        if((calcValor1 !== undefined) || (calcValor2 !== undefined) ){
            return 'Valores não definidos';
        }

        var res = val1 * val2;
        return res;
    },

    divisao(val1, val2) {
        const calcValor1 = valid({ val1 },  CalculadoraLimit.calculadoraLimit);
        const calcValor2 = valid({ val2 },  CalculadoraLimit.calculadoraLimit);
        if((calcValor1 !== undefined) || (calcValor2 !== undefined) ){
            return 'Valores não definidos';
        }

        var res = val1 / val2;
        return res;
    },
};

module.exports = Calculadora;
