import { useState } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import "../../../../styles/registro.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { registrar } from "../../../helpers/queries.js";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Registro = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const navegacion = useNavigate()
    const onSubmit = async (usuario) => {
        try {
            const respuesta = await registrar({...usuario, rol:"Usuario"});
            console.log(respuesta);
            const usuarioObj = {
                email: usuario.email,
                rol: "Usuario",
                nombreUsuario: usuario.nombreUsuario,
                contraseña: usuario.contraseña,
            };
    
            if (respuesta) {
                sessionStorage.setItem("usuario", JSON.stringify(usuarioObj));
                Swal.fire("¡Fantástico!", `Su usuario quedó registrado exitosamente`, "success");
                reset();
                navegacion("/");
    
            } else if (respuesta === null) {
                Swal.fire("Error", "Este usuario o correo ya existe", "error");
            } else {
                Swal.fire("Error", "prueba", "error");
            }
        } catch (error) {
            console.error("Error al registrar usuario:");
            Swal.fire("Error", "no se pudo crear el usuario", "error");
        }
    };

    return (
        <Container className='cardRegistro mx-auto p-0 row rounded-5 mt-5'>
            <h1 className='text-center my-3'>¡Registrate!</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="nombreusuario"
                        maxLength={100}
                        {...register("nombreUsuario", {
                            required: "El nombre de usuario es obligatorio",
                            minLength: {
                                value: 5,
                                message: "La cantidad minima de caracteres es de 2 digitos",
                            },
                            maxLength: {
                                value: 30,
                                message: "La cantidad maxima de caracteres es de 2 digitos",
                            },
                        })}
                    />
                    <Form.Text className="textoErrorRegister">
                        {errors.nombreUsuario?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        {...register("email", {
                            required: "El email es un dato obligatorio",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message:
                                    "El email debe cumplir con el formato mail@dominio.com",
                            },
                        })}
                    />
                    <Form.Text className="textoErrorRegister">{errors.email?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Su contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula."
                        {...register("contraseña", {
                            required: "La contraseña es un dato obligatorio",
                            pattern: {
                                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                                message:
                                    "Su contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                            },
                            min:{
                                value: 8,
                                message:
                                    "La contraseña debe tener un mínimo de 8 caracteres",
                            },
                            max:{
                                value: 16,
                                message:
                                    "La contraseña debe tener un máximo de 16 caracteres",
                            }
                        })}
                    />
                    <Form.Text className="textoErrorRegister">
                        {errors.contraseña?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" className="my-4 d-block m-auto">
                    Registrarse
                </Button>
            </Form>
        </Container>
    );
};

export default Registro;
