import BackHomeBtn from "../COMPONENTS/backhome-btn";
import "../CSS/create-recipe.css";
import { useForm } from "react-hook-form";

import store from "../STORE/main.store.js";

function CreateRecipe() {
  const { items, setItemsStore } = store();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (values) => {
    const {
      title,
      description,
      urlImg,
      instructions,
      ingredients,
      author,
    } = values;

    //Crea un item y lo añade a la lista de items global

    const newObj = {
      id: items.length + 1,
      title,
      description,
      author,
      urlImg,
      instructions,
      ingredients,
    };
    setItemsStore([newObj, ...items]);
  };

  return (
    <div className="central-container">
      <BackHomeBtn></BackHomeBtn>
      <h3 style={{ textAlign: "left", paddingTop: "50px" }}>
        Creá una nueva Receta
      </h3>
      <div>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="form-create-recipe"
          action=""
        >
          <h4>Direccion URL de Imagen (Opcional)</h4>
          <input
            {...register("urlImg", { required: false, minLength: 5 })}
            type="text"
          />

          <h4>Título *</h4>
          <p style={{ margin: "0", color: "red" }}>{errors?.title?.message}</p>
          <input
            {...register("title", {
              required: "Ingresá el título, campo obligatorio *",
              minLength: 5,
            })}
          />

          <h4>Breve descripción (Max 100 caracteres) *</h4>
          <p style={{ margin: "0", color: "red" }}>
            {errors?.description?.message}
          </p>
          <input
            {...register("description", {
              required: "Ingresá una breve descripción, campo obligatorio *",
              minLength: 5,
              maxLength: {
                value: 100,
                message:
                  "Superaste los caracteres máximos, deben ser menor a 100 ",
              },
            })}
            type="text"
          />

          <h4>Autor (Max 30 caracteres) *</h4>
          <p style={{ margin: "0", color: "red" }}>{errors?.author?.message}</p>
          <input
            {...register("author", {
              required: "Ingresá tu nombre o del autor, campo obligatorio *",
              minLength: 3,
              maxLength: {
                value: 30,
                message:
                  "Superaste los caracteres máximos, deben ser menor a 30",
              },
            })}
            type="text"
          />

          <h4>Ingredientes (Opcional)</h4>
          <textarea
            {...register("ingredients", {
              minLength: 1,
            })}
            type="text"
          />
          <h4>Instrucciones *</h4>
          <p style={{ margin: "0", color: "red" }}>
            {errors?.instructions?.message}
          </p>
          <textarea
            {...register("instructions", {
              required: "Ingresá las instrucciones, campo obligatorio *",
              minLength: 5,
            })}
            type="text"
          />

          <input className="btn-post" type="submit" value="Publicar" />
          <p>(*) Campos obligatorios</p>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;
