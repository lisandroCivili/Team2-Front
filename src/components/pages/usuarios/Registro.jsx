import { useState } from 'react';
import { Container } from "react-bootstrap";
import "../../../../styles/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Registro = () => {

    const onSubmit = (usuario) => {
        usuario.perfil = "Usuario";
        usuario.estado = "Activo";
        registrar(usuario).then((respuesta) => {
            const usuarioObj = {
                perfil: "Usuario",
                nombreUsuario: usuario.nombreUsuario,
            };
            if (respuesta && respuesta.mensaje === "usuario creado") {
                sessionStorage.setItem("usuario", JSON.stringify(usuarioObj));
                Swal.fire("Fantastico", `su usuario quedo registrado exitosamente`, "success");
                setEstaLogueado(true);
                reset();
                navegacion("/");
                registerhandleClose();
            } else if (respuesta === null) {
                Swal.fire("Error", "Este usuario o correo ya existe", "error");
            } else {
                Swal.fire("Error", "No se pudo registrar su usuario exitosamente ", "error");
            }
        });
    };
    
  return (
    <Container className='cardRegistro mx-auto p-0 row rounded-5 mt-5'>
        <h1 className='text-center my-3'>¡Registrate!</h1>
        <form className='w-75 mx-auto' action="">
            <div className='row'>
                <div className="mb-3 col-12 col-lg-6">
                    <label htmlFor="inputName" className="form-label">Nombre y apellido</label>
                    <input type="title" className='form-control' id='inputName' required maxLength={50} minLength={3}/>
                </div>
                <div className="mb-3 col-12 col-lg-6">
                    <label htmlFor="inputEmail" className="form-label">E-mail</label>
                    <input type="email" className='form-control' id='inputEmail' required maxLength={100} minLength={5}/>
                </div>
                <div className="mb-3 col-12 col-lg-6">
                    <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                    <input type="password" className='form-control' id='inputPassword' required maxLength={100} minLength={8}/>
                </div>
                <div className="mb-3 col-12 col-lg-6">
                    <label htmlFor="inputRptPassword" className="form-label">Repetir contraseña</label>
                    <input type="password" className='form-control' id='inputRptPassword' required maxLength={100} minLength={8}/>
                </div>
            </div>
            <button action='' type='submit' className='btn btn-primary mb-4'>Registrarme</button>
        </form>
    
      
    </Container>
  );
};

export default Registro;
