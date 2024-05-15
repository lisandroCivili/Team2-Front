const APIProductos = import.meta.env.VITE_API_PRODUCTOS;
const URLUsuario = import.meta.env.VITE_API_USUARIO;
const URLUsuarioGet = import.meta.env.VITE_API_USUARIO_GET;
const URLPedidoNuevo = import.meta.env.VITE_API_PEDIDOS_NUEVO;
const URLPedidos = import.meta.env.VITE_API_PEDIDOS;


export const leerProductos = async () => {
  try {
    const respuesta = await fetch(APIProductos);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearProducto = async (nuevoProducto) => {
  try {
    const respuesta = await fetch(APIProductos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoProducto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};



export const borrarProducto = async (id) => {
  try {
    const respuesta = await fetch(APIProductos + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProducto = async (id) => {
  try {
    const respuesta = await fetch(`${APIProductos}/${id}`);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const mostrarProducto = async (nombreProducto) => {
  try {
    const respuesta = await fetch(
      `${APIProductos}?nombreProducto=${nombreProducto}`
    );
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarProducto = async (nuevosDatosProducto, id) => {
  try {
    const respuesta = await fetch(APIProductos + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevosDatosProducto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
// QUERIES USUARIO


export const registrar = async (usuario) => {
  try { 
    const respuestaListaUsuarios = await fetch(URLUsuarioGet);
    console.log(respuestaListaUsuarios)
    const listaUsuarios = await respuestaListaUsuarios.json();
    console.log(listaUsuarios)
    const usuarioExistente = listaUsuarios.usuarios.find(
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
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const loguear = async (usuario) => {
  try {
    const respuesta = await fetch(URLUsuarioGet, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    if (respuesta.ok) {
      return respuesta.json(); 
    } else {
      throw new Error(`Error al iniciar sesión: ${respuesta.statusText}`);
    }
  } catch (error) {
    console.error("Error en el login:", error);
    throw error;
  }
};


// QUERIES PEDIDOS

export const crearPedido = async (nuevoPedido) => {
  try {
    const respuesta = await fetch(URLPedidoNuevo, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoPedido),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const leerPedidos = async () => {
  try {
    const respuesta = await fetch(URLPedidos);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
