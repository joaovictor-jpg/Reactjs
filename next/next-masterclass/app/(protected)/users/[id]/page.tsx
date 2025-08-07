interface UsuariosParams {
    params: Promise<{ id: string }>;
}

const Usuarios = async ({ params }: UsuariosParams) => {
    const { id } = await params;
    return(
        <div>
            <h1>Usuário com ID: {id}</h1>
        </div>
    )
}

export default Usuarios;