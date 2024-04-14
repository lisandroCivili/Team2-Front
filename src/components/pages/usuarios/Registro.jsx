import { useState } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import "../../../../styles/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { registrar } from "../../../helpers/queries.js";
 

const Registro = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (usuario) => {
        usuario.rol = "Usuario";
        registrar(usuario).then((respuesta) => {
            const usuarioObj = {
                perfil: "Usuario",
                nombreUsuario: usuario.nombreUsuario,
            };
            if (respuesta && respuesta.mensaje === "usuario creado") {
                sessionStorage.setItem("usuario", JSON.stringify(usuarioObj));
                // Swal.fire("Fantastico", `su usuario quedo registrado exitosamente`, "success");
                // setEstaLogueado(true);
                // reset();
                // navegacion("/");
                // registerhandleClose();
            } else if (respuesta === null) {
                // Swal.fire("Error", "Este usuario o correo ya existe", "error");
            } else {
                // Swal.fire("Error", "No se pudo registrar su usuario exitosamente ", "error");
            }
        });
    };

  return (
    <Container className='cardRegistro mx-auto p-0 row rounded-5 mt-5'>
        <h1 className='text-center my-3'>¡Registrate!</h1>
        {/* <form className='w-75 mx-auto' action="">
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
        </form> */}
        <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>NombreUsuario*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="nombreusuario"
                                maxLength={100}
                                {...register("nombreUsuario", {
                                    required: "El nombre de usuario es obligatorio",
                                    minLength: {
                                        value: 2,
                                        message: "La cantidad minima de caracteres es de 2 digitos",
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "La cantidad maxima de caracteres es de 2 digitos",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.nombreUsuario?.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Correo electronico*</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                {...register("email", {
                                    required: "El email es un dato obligatorio",
                                    pattern: {
                                        value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                        message:
                                            "El email debe cumplir con el formato mail@dominio.com",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña*</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="contraseña"
                                {...register("contraseña", {
                                    required: "La contraseña es un dato obligatorio",
                                    pattern: {
                                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                                        message:
                                            "Su contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                                    },
                                })}
                            />
                            <Form.Text className="text-danger">
                                {errors.contraseña?.message}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="mt-4 d-block m-auto">
                            Registrarse
                        </Button>
                    </Form>


      
    </Container>
  );
};

export default Registro;
