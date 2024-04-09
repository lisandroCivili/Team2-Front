import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import Pedidos from './components/pages/pedidos/Pedidos.jsx'
import Usuarios from "./components/pages/usuarios/Usuarios.jsx";
import Administrador from "./components/pages/productos/Administrador.jsx";
import FormularioProducto from "./components/pages/productos/FormularioProducto.jsx";
import DetalleProducto from "./components/pages/productos/DetalleProducto.jsx";
import Carrito from "./components/pages/pedidos/carrito.jsx";
import "../styles/App.css"


const App = () => {
  return (
    <>
      <Menu></Menu>
      <Carrito></Carrito>
      <Footer></Footer>
    </>
  );
};

export default App;