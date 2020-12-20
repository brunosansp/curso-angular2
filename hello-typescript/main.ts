var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}

var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function(valor) {
    return valor * 2;
})

numeros.map(valor => valor * 2);


// =====================================
// =====================================
class Matematica {
    soma(x, y) {
        return x + y;
    }
}
// =====================================
// Tipagem de variável, forçando erro.
var n1: string = 'sdfsdf';
n1 = ''; // Se tentarmos por um número ão compila, se alterar para uma string compila normalmente.
// =====================================
// =====================================