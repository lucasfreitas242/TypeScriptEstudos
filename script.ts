function soma(a: number, b:number) { //Tipagem de dados na hora da declaração da Função
    return a + b;
}

//Interfaces 

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(decibeis: number): void;
}

interface IFelino extends IAnimal{
    visaoNoturna:boolean;
}

const animal: IAnimal = {
    nome: "Everaldo",
    tipo: "terrestre",
    executarRugido: (decibeis) => console.log((`${decibeis}dB`))
}

const felino: IFelino = {
    nome: "Patrício",
    tipo: "aquático",
    visaoNoturna: true,
    executarRugido: (decibeis) => console.log((`${decibeis}dB`))
}

felino.executarRugido(6);

animal.executarRugido(12);