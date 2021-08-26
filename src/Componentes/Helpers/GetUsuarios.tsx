
export const getUsuarios = async() => {
    const url = "http://localhost:3010/api/Usuarios";
    const res = await fetch(url)
    const usuarios = await res.json();
    return usuarios;
}