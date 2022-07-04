function soma(a: number, b:number) { //Tipagem de dados na hora da declaração da Função
    return a + b;
}

//Interfaces 

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    // executarRugido(decibeis: number): void;
    domestico: boolean;
}

interface IFelino extends IAnimal{
    visaoNoturna:boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}


const animal: IAnimal = {
    nome: "Everaldo",
    tipo: "terrestre",
    domestico: false
    // executarRugido: (decibeis) => console.log((`${decibeis}dB`))
}

const felino: IFelino = {
    nome: "Patrício",
    tipo: "aquático",
    domestico: true,
    visaoNoturna: true,
    // executarRugido: (decibeis) => console.log((`${decibeis}dB`))
}

//Types 

type IDomestico = IFelino | ICanino;

const cachorro: IDomestico = {
    nome: 'Pereira Funk',
    tipo: 'aquático',
    domestico: false,
    porte: 'medio'

}

// felino.executarRugido(6);

// animal.executarRugido(12);



