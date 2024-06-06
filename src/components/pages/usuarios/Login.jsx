import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../../../../styles/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgfondo from "../../../assets/pexels-loginmin.jpg";
import { useForm } from "react-hook-form";
import { loguear } from "../../../helpers/queries.js";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";


<<<<<<< HEAD
=======

>>>>>>> 099ce956e5d7d8b66d879a3b6da386b46cb9228b
const Login = () => {
    const navegacion = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const onSubmit = async(usuario) => {
        const respuesta = await loguear(usuario)
        
        if (respuesta) {
                const usuario = {
                    rol: respuesta.rol,
                    nombreUsuario: respuesta.nombreUsuario,
                    contraseña: respuesta.contraseña,
                    email: respuesta.email,
                }
                sessionStorage.setItem("usuario", JSON.stringify(usuario));
                Swal.fire(
                    `¡Bienvenido!`,
                    `Iniciaste sesion correctamente.`,
                    "success"
                );
                if(respuesta.rol === "Admin"){
                    navegacion("/administrador/");
                }else{
                    navegacion("/");
                }
            } else {
                Swal.fire("Error", "Email o contraseña incorrecto ", "error");
            }
        };


        return (
          <Container className="cardLogin mx-auto p-0 row rounded-5 mt-5">
            <div className="col-12 col-lg-6 h-100 p-0">
              <img
                className="imgHamburguesa img-fluid object-fit-cover"
                src={imgfondo}
                alt="hamburguesa"
              />
            </div>
            <div className="col-12 col-lg-6 mt-5">
              <h1 className="text-center mb-5">Login</h1>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Correo electronico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese un email"
                    maxLength={200}
                    {...register("email", {
                      required: "El email es un dato obligatorio",
                      pattern: {
                        value:
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:
                          "El email debe cumplir con el formato mail@dominio.com",
                      },
                    })}
                  />
                  <Form.Text className="textoErrorLogin">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    minLength={8}
                    maxLength={16}
                    {...register("contraseña", {
                      required: "La contraseña es un dato obligatorio",
                      pattern: {
                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                        message:
                          'Entre 8 y 16 caracteres, al menos 1 digito, 1 minusc. y 1 mayusc.',
                      },
                    })}
                  />
                  <Form.Text className="textoErrorLogin">
                    {errors.contraseña?.message}
                  </Form.Text>
                </Form.Group>
                <Button
                  variant="primary"
                  className="my-4 d-block m-auto"
                  type="submit"
                >
                  Iniciar Sesion
                </Button>
              </Form>
            </div>
          </Container>
        );
};

export default Login;
