import { Form, Button } from "react-bootstrap";
import { useForm} from "react-hook-form";
import Swal from 'sweetalert2'
import { crearProducto } from "../../../helpers/queries";


const FomularioProducto = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  const datosValidados = async(producto)=>{
    const respuesta = await crearProducto(producto)
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Producto agregado",
          text: `Se agrego el producto`,
          icon: "success"
        });
        reset()
      }else{
        Swal.fire({
          title: "Ocurrio un error",
          text: "No se puedo agregar el producto, intente nuevamente en unos minutos.",
          icon: "error"
        });
      }
  }

  return (
    <div>
      <section className="container mainSection">
        <h1 className="display-4 mt-5">Titulo</h1>
        <hr />
        <Form className="my-4" onSubmit={handleSubmit(datosValidados)}>
          <Form.Group className="mb-3" controlId="formNombreProducto">
            <Form.Label>Nombre del producto*</Form.Label>
            <Form.Control
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
            <Form.Label>Precio*</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 6"
              {...register("precio", {
                required: "El precio es un dato obligatorio.",
                min: {
                  value: 1000,
                  message: "El precio debe ser $1000 como minimo.",
                },
                max: {
                  value: 7000,
                  message: "El precio debe ser $7000 como máximo.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
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
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Categoría*</Form.Label>
            <Form.Select
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
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Detalle*</Form.Label>
            <Form.Control
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
          <Button type="submit" variant="success">
            Agregar
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default FomularioProducto;
