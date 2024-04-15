const APIProductos = import.meta.env.VITE_API_PRODUCTOS
const URLUsuario = import.meta.env.VITE_API_USUARIO;

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

export const loguear = async (usuario) => {
    try {
        const respuesta = await fetch(URLUsuario);
        const solucion = await respuesta.json();
        const coincidencia = solucion.find((user)=>
            usuario.email === user.email && usuario.contraseña === user.contraseña
        );
      if(coincidencia){
        return coincidencia;
      }else{
        throw new Error("Login failes");
      }
    } catch (error) {
      console.log(error);
    }
};



export const registrar = async (usuario) => {
    try { 
      const respuestaListaUsuarios = await fetch(URLUsuario);
      const listaUsuarios = await respuestaListaUsuarios.json();
      const usuarioExistente = listaUsuarios.find(
        (itemUsuario) => 
          itemUsuario.nombreUsuario === usuario.nombreUsuario ||
          itemUsuario.email === usuario.email
      );
      if (!usuarioExistente) {
        const respuestaRegistro = await fetch(URLUsuario, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        });
        const data = await respuestaRegistro.json();
        return data; // Devuelve la respuesta de registro, no la respuesta original
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
};