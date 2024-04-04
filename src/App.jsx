import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Usuarios from "./components/pages/Pedidos";
import Pedidos from "./components/pages/DetalleProducto";
import DetalleProducto from "./components/pages/DetalleProducto";
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
const App = () => {
  return (
    <>
      <Menu></Menu>
      <Usuarios></Usuarios>
      <Footer></Footer>
    </>
  );
};

export default App;