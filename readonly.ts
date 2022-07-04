interface Cachorro {
    nome: string, 
    idade: number, 
    parqueFavorito?: string
}

type CachorroReadOnly = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class meuCachorro implements CachorroReadOnly {
    nome: 'Pablo Escobar';
    idade: 16;
    parqueFavorito: 'Baile da Penha';
}


