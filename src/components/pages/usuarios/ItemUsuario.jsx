import React from "react";
import { Button, Col } from "react-bootstrap";
import "../../../../styles/Administrador.css";
import { Link } from "react-router-dom";
import { borrarUsuario, listarUsuarios } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ItemUsuario = ({ usuario, setUsuarios }) => {

  const eliminarUsuario = () =>{
    Swal.fire({
      title: `¿Seguro desea eliminar a "${usuario.nombreUsuario}" permanentemente?`,
      text: "¡No se puede revertir esta operación!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar"
    }).then(async(result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarUsuario(usuario._id)
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Usuario eliminado",
            text: `El usuario ${usuario.nombreUsuario} fue eliminado.`,
            icon: "success"
          });
          const usuariosActualizadosRespuesta = await listarUsuarios()
          if (usuariosActualizadosRespuesta.status === 200) {
            const usuariosActualizados = await usuariosActualizadosRespuesta.json()
            console.log(usuariosActualizados)
            setUsuarios(usuariosActualizados.usuarios)
          }
        }else{
          Swal.fire({
            title: "Ocurrio un error",
            text: `No se pudo eliminar el usuario, intente nuevamente en unos minutos.`,
            icon: "error"
          });
        }
      }
    });
  }

  return (
    <>
      <Col
        sm={3}
        className="columna border-bottom border-success p-2 text-center"
      >
        <p className="datosUsuario">
          
        {usuario.nombreUsuario}
        </p>
      </Col>
      <Col
        sm={3}
        className="columna border-bottom border-success p-2 text-center"
      >
        <p className="datosUsuario">

        {usuario.email}
        </p>
      </Col>
      <Col
        sm={3}
        className="columna border-bottom border-success p-2 text-center  filasDatosSM"
      >
        <p className="datosUsuario">

        {usuario.rol}
        </p>
      </Col>
      <Col
        sm={3}
        className="columna border-bottom border-success p-2 text-center  filasDatosSM"
      >
        <Button className="btn eliminarUsuario me-2" onClick={eliminarUsuario}>
          <i className="bi bi-trash"></i>
        </Button>
        <Button as={Link} to="/error404" className="btn editarUsuario">
          <i className="bi bi-pencil-square"></i>
        </Button>
      </Col>
    </>
  );
};

export default ItemUsuario;
