import BackHomeBtn from "../COMPONENTS/backhome-btn";
import "../CSS/create-recipe.css";

function CreateRecipe() {
  return (
    <div className="central-container">
      <BackHomeBtn></BackHomeBtn>
      <h3 style={{ textAlign: "left", paddingTop: "50px" }}>
        Creá una nueva Receta
      </h3>
      <div>
        <form className="form-create-recipe" action="">
          <h4>URL image</h4>
          <input type="text" name="img" />
          <h4>Titulo *</h4>
          <input type="text" />
          <h4>Breve descripcion *</h4>
          <input type="text" />
          <h4>Autor *</h4>
          <input type="text" />
          <h4>Ingredientes</h4>
          <textarea resize="none" type="text" />
          <h4>Instrucciones *</h4>
          <textarea resize={false} type="text" />

          <input className="btn-post" type="submit" value="Publicar" />
          <p>(*) Campos obligatorios</p>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;
