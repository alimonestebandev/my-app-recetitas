import store from "../STORE/main.store";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ItemPreview({ item }) {
  const {
    id,
    apiItem,
    title,
    description,
    author,
    createdAt,
    urlImg,
    isFavorite,
  } = item;

  const { setSelectedRecipe, items, setItemsStore } = store();

  const setFavorite = () => {
    var item = items.find((e) => e.id == id);
    item.isFavorite = !item.isFavorite;
    setItemsStore(items);

    localStorage.setItem("LOCAL-DATA", JSON.stringify(items));
  };

  const selectRecipe = () => {
    setSelectedRecipe(item);
  };

  return (
    <div title="ver más" className="item-preview">
      <Link to="/see-recipe" onClick={() => selectRecipe()} className="data">
        <img
          className="image-preview"
          src={
            urlImg ||
            "https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/food-dinner-icon.png"
          }
          alt=""
        />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
      {!apiItem && (
        <button onClick={() => setFavorite()} className="favorite-icon">
          {isFavorite ? (
            <FavoriteIcon></FavoriteIcon>
          ) : (
            <FavoriteBorderIcon></FavoriteBorderIcon>
          )}
        </button>
      )}
      <div className="data-time">
        <p>Creado por: {author || "undefined"}</p>
        {createdAt && <p>| Fecha: {createdAt}</p>}
      </div>
    </div>
  );
}

export default ItemPreview;
