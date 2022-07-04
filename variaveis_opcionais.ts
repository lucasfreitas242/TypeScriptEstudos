interface IUsuario {
    id: string, 
    email: string
    ocupacao?: 'gerente' | 'coordernador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario) {
    if (usuario.ocupacao) {
        //redireciona para a área de usuario.cargo específico
    }

    //redireciona para a área de Usuário
}