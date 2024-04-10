import { useState } from 'react';
import { Container } from "react-bootstrap";
import "../styles/login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import imgfondo from "../assets/pexels-valeria-boltneva-1639557.jpg";

const Login = () => {

  return (
    <Container className='cardLogin mx-auto p-0 row rounded-5 mt-5'>
        <div className='col-12 col-lg-6 h-100 p-0'> 
            <img className='imgHamburguesa img-fluid object-fit-cover h-100 ' src={imgfondo} alt="hamburguesa"/>
        </div>
        <div className='col-12 col-lg-6 mt-5'>
            <h1 className='text-center mb-5'>Login</h1>
            <form className='w-75 mx-auto' action="">
                <div class="mb-3">
                    <label for="inputEmail" className="form-label">E-mail</label>
                    <input type="email" className='form-control' id='inputEmail' required maxLength={100} minLength={5}/>
                </div>
                <div class="mb-3">
                    <label for="inputPassword" className="form-label">Contraseña</label>
                    <input type="password" className='form-control' id='inputPassword' required maxLength={100} minLength={8}/>
                </div>
                <button type='submit' className='btn btn-primary mx-auto mb-4'>Acceder</button>
            </form>
            
        </div>
      
    </Container>
  );
};

export default Login;
