// t = meses
const jurosSimples = (C, i, t) => C * i * t
    // const C = 1200;
    // const i = 0.035;
    // const t = 10;
    // return C*i*t
// }
const montanteSimples = ({ jurosSimples }) => (C, i, t) => C + jurosSimples(C, i, t)
//     const Capital = 1200
    // return Capital + jurosSimples(C, i, t)
// }
const montanteJurosCompostos = (C, i, t) => C * Math.pow((1+i), t)
//     const C = 1200;
//     const i = 0.035;
const jurosCompostos = ({ montanteJurosCompostos }) => (C, i, t) => montanteJurosCompostos(C, i, t) - C
// }

// console.log('Juros de:', juros())
// const Capital = 1200
// const montante = Capital+juros()
// console.log('Montante de:', montante)

// console.log(jurosSimples())
module.exports = {
    jurosSimples,
    montanteSimples: montanteSimples({ jurosSimples }),
    montanteJurosCompostos,
    jurosCompostos: jurosCompostos({ montanteJurosCompostos }),
    pure:{ 
        montanteSimples,
        jurosCompostos
    }       
}