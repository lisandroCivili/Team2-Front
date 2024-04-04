import { Form, Button } from "react-bootstrap";

const FomularioProducto = () => {
  return (
    <div>
      <section className="container mainSection">
        <h1 className="display-4 mt-5">{titulo}</h1>
        <hr />
        <Form className="my-4" onSubmit={handleSubmit(datosValidados)}>
          <Form.Group className="mb-3" controlId="formNombreProdcuto">
            <Form.Label>Nombre de la receta*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Brownies"
              {...register("nombreReceta", {
                required: "El nombre de la receta es obligatorio",
                minLength: {
                  value: 3,
                  message:
                    "El nombre de la receta debe tener como minimo 3 caracteres.",
                },
                maxLength: {
                  value: 30,
                  message:
                    "El nombre de la receta debe tener como maximo 30 caracteres.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombreReceta?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Cantidad*</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 6"
              {...register("cantidad", {
                required: "La cantidad resultante es obligatoria.",
                min: {
                  value: 1,
                  message: "La cantidad tiene que tiene ser 1 como minimo.",
                },
                max: {
                  value: 100,
                  message: "La cantidad tiene que tiene ser 100 como máximo.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.cantidad?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/3090274/pexels-photo-3090274.jpeg"
              {...register("imagen", {
                required: "La url de al imagen es obligatoria.",
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
              <option value="Desayuno">Desayuno</option>
              <option value="Almuerzo">Almuerzo</option>
              <option value="Cena">Cena</option>
              <option value="Postre">Postre</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.categoria?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Descripción breve*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Una taza de café suave y aromático."
              as="textarea"
              {...register("descripcion_breve", {
                required: "La descripcion breve es obligatoria",
                minLength: {
                  value: 15,
                  message:
                    "La descripcion breve debe tener como minimo 3 caracteres.",
                },
                maxLength: {
                  value: 50,
                  message:
                    "La descripcion breve debe tener como maximo 30 caracteres.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion_breve?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Descripción Amplia*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: El café americano es una bebida caliente que consiste en un espresso diluido con agua caliente, lo que resulta en una taza de café suave y aromático. Es una opción popular para aquellos que prefieren un café menos intenso que el espresso tradicional. Perfecto para disfrutar en cualquier momento del día."
              as="textarea"
              {...register("descripcion_amplia", {
                required: "La descripcion amplia es obligatoria",
                minLength: {
                  value: 15,
                  message:
                    "La descripcion amplia debe tener como minimo 3 caracteres.",
                },
                maxLength: {
                  value: 250,
                  message:
                    "La descripcion amplia debe tener como maximo 30 caracteres.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion_amplia?.message}
            </Form.Text>
          </Form.Group>

          <Button type="submit" variant="success">
            Guardar
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default FomularioProducto;
