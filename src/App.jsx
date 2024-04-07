import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Usuarios from "./components/pages/pedidos/Pedidos";
import Pedidos from "./components/pages/productos/DetalleProducto";
import DetalleProducto from "./components/pages/productos/DetalleProducto";
import FormularioProducto from "./components/pages/productos/FomularioProducto";
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import FomularioProducto from "./components/pages/productos/FomularioProducto";
import Administrador from "./components/pages/productos/Administrador";

const App = () => {
  return (
    <>
      <Menu></Menu>
      <Administrador></Administrador>
      <Footer></Footer>
    </>
  );
};

export default App;