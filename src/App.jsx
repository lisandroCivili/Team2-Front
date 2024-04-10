import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import React from "react";
import Inicio from "./components/common/pages/Inicio";
import Error404 from "./components/./common/pages/Error404";
import AcercaDe from "./components/common/pages/AcercaDe";

function App() {
  return (
    <div>
    {/* <Inicio></Inicio> */}
    {/* <Error404></Error404> */}
    <AcercaDe></AcercaDe>
    </div>
  );
}

export default App;
