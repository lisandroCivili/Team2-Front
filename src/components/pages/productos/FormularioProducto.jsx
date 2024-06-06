import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  crearProducto,
  editarProducto,
  obtenerProducto,
} from "../../../helpers/queries";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const FomularioProducto = ({ editando, titulo}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    if (editando) {
      cargarDatosProducto();
    }
  }, []);

  const cargarDatosProducto = async () => {
    const respuesta = await obtenerProducto(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setValue("nombreProducto", datos.nombreProducto);
      setValue("precio", datos.precio);
      setValue("imagen", datos.imagen);
      setValue("categoria", datos.categoria);
      setValue("detalle", datos.detalle);
    } else {
      throw new Error("No se obtuvieron datos");
    }
  };

  const datosValidados = async (producto) => {
    if (editando) {
      const respuesta = await editarProducto(producto, id);
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Edicion confirmada",
          text: `El producto ${producto.nombreProducto} se editó con exito.`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "No se pudo editar.",
          text: "Por favor intentalo nuevamente en unos minutos.",
          icon: "error",
        });
      }
    } else {
      const respuesta = await crearProducto({...producto, cantidad:1});
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Producto agregado",
          text: `Se agrego el producto`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Ocurrio un error",
          text: "No se pudo agregar el producto, intente nuevamente en unos minutos.",
          icon: "error",
        });
      }
    }
  };
  let botonFormulario;
  let editarBoton;
  if (editando) {
    botonFormulario = "Editar";
    editarBoton = (
      <Button type="submit" variant="success" className="agregarBoton">
        {botonFormulario}
      </Button>
    );
  } else {
    botonFormulario = "Agregar";
    editarBoton = (
      <Button type="submit" variant="success" className="agregarBoton">
        {botonFormulario}
      </Button>
    );
  }

  return (
    <div>
      <section className="container mainSection">
        <h1 className="display-4 mt-5 tituloForm">{titulo}</h1>
        <hr />
        <Form className="my-4" onSubmit={handleSubmit(datosValidados)}>
          <Form.Group className="mb-3" controlId="formNombreProducto">
            <Form.Label className="labels">NOMBRE DEL PRODUCTO*</Form.Label>
            <Form.Control
              className="inputs"
              type="text"
              placeholder="Ej: Hamburguesa con papas"
              {...register("nombreProducto", {
                required: "El nombre del producto es obligatorio",
                minLength: {
                  value: 5,
                  message:
                    "El nombre del producto debe tener como minimo 5 caracteres.",
                },
                maxLength: {
                  value: 30,
                  message:
                    "El nombre del producto debe tener como maximo 30 caracteres.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreProducto?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label className="labels">PRECIO*</Form.Label>
            <Form.Control
              className="inputs"
              type="number"
              placeholder="Ej: 6"
              {...register("precio", {
                required: "El precio es un dato obligatorio.",
                min: {
                  value: 1000,
                  message: "El precio debe ser $1000 como minimo.",
                },
                max: {
                  value: 10000,
                  message: "El precio debe ser $7000 como máximo.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label className="labels">IMAGEN URL*</Form.Label>
            <Form.Control
              className="inputs"
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/3090274/pexels-photo-3090274.jpeg"
              {...register("imagen", {
                required: "La url de la imagen es obligatoria.",
                pattern: {
                  value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/,
                  message:
                    "Debe ingresar una URL válida, con una imagen en formato jpg, jpeg, gif o png.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategoria">
            <Form.Label className="labels">CATEGORIA*</Form.Label>
            <Form.Select
              className="inputs"
              {...register("categoria", {
                required: "Debe seleccionar una categoria.",
              })}
            >
              <option value="">Seleccione una opcion</option>
              <option value="Entradas">Entradas</option>
              <option value="Combo">Combo</option>
              <option value="Hamburguesas">Hamburguesas</option>
              <option value="Papas">Papas</option>
              <option value="Sandwichs">Sandwichs</option>
              <option value="Bebidas">Bebidas</option>
              <option value="Postre">Postre</option>
              <option value="Otros">Otros</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDetalle">
            <Form.Label className="labels">DETALLE*</Form.Label>
            <Form.Control
              className="inputs"
              type="text"
              placeholder="Describe el producto..."
              as="textarea"
              {...register("detalle", {
                required: "El detalle del producto es obligatorio.",
                minLength: {
                  value: 15,
                  message:
                    "El detalle del producto debe tener como minimo 15 caracteres.",
                },
                maxLength: {
                  value: 3000,
                  message:
                    "El detalle del producto debe tener como maximo 200 caracteres.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.detalle?.message}
            </Form.Text>
          </Form.Group>
          {editarBoton}
        </Form>
      </section>
    </div>
  );
};

export default FomularioProducto;
