import store from "../STORE/main.store";
import { Link } from "react-router-dom";
function ItemPreview({
  item,
  urlImg = "https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/food-dinner-icon.png",
}) {
  const { title, description, author, createdAt } = item;

  const { setSelectedRecipe } = store();

  const selectRecipe = () => {
    setSelectedRecipe(item);
  };

  return (
    <Link
      to="/see-recipe"
      onClick={() => selectRecipe()}
      title="ver más"
      className="item-preview"
    >
      <div>
        <img className="image-preview" src={urlImg} alt="" />
      </div>
      <div className="data">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
      <div className="data-time">
        <p>Creado por: {author || "undefined"}</p>
        {createdAt && <p>| Fecha: {createdAt}</p>}
      </div>
    </Link>
  );
}

export default ItemPreview;
