function adicionaValores<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

const numeroArray = [1, 2, 3, 4, 5];

const stringArray = ['1', '3', '2', '4'];

adicionaValores(stringArray, '5')