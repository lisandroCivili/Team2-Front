const APIProductos = import.meta.env.VITE_API_PRODUCTOS

export const leerProductos = async() =>{
    try {
        const respuesta = await fetch(APIProductos);
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const crearProducto = async(nuevoProducto) =>{
    try {
        const respuesta = await fetch(APIProductos, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(nuevoProducto)
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const borrarProducto = async(id) =>{
    try {
        const respuesta = await fetch(APIProductos+'/'+id, {
            method: "DELETE",
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const obtenerProducto = async(id) =>{
    try {
        const respuesta = await fetch(APIProductos+'/'+id)
        return respuesta
    } catch (error) {
        console.log(error)
    }
}
export const mostrarProducto = async(nombreProducto) =>{
    try {
        const respuesta = await fetch(`${APIProductos}?nombreProducto=${nombreProducto}`)
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

export const editarProducto = async(nuevosDatosProducto, id) =>{
    try {
        const respuesta = await fetch(APIProductos+'/'+id, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(nuevosDatosProducto)
        });
        return respuesta
    } catch (error) {
        console.log(error)
    }
}

const userAdmin = {
    email:"admin@lisandrocivili.com",
    password: "123Aa$123"
}

export const login = (usuario)=>{
    if (usuario.mail === userAdmin.email && usuario.pass === userAdmin.password) {
        sessionStorage.setItem('loginRC', JSON.stringify(usuario.mail))
        return true
    }else{
        return false
    }
}