interface IUsuario {
    id: string, 
    email: string
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordernador' | 'supervisor';
}

function redireciona(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        //redireciona para a área de Admin
    }

    //redireciona para a área de Usuário
}