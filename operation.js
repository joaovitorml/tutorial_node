Operation = {}

function somar(a,b){
    return a+b;
}

function subtrair(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}

function dividir(a,b){
    if(b==0){
        console.log('Não pode divir por 0');
    }
    else{
        return a/b;
    }

}

Operation.somar = somar;
Operation.subtrair = subtrair;
Operation.multiplicar = multiplicar;
Operation.dividir = dividir;

module.exports = Operation;

/*
exports.somar = somar;
exports.subtrair = subtrair;
exports.multiplicar = multiplicar;
exports.dividir = dividir;
*/