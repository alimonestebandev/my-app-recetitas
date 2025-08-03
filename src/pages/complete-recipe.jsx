import "../CSS/complete-recipe.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import store from "../STORE/main.store";

function CompleteRecipe() {
  const [item, setItem] = useState([]);
  const { recipeSelected } = store();
  useEffect(() => {
    setItem(recipeSelected);
  }, []);

  return (
    <div className="central-container">
      <Link title="Volver" to="/" className="btn-back">
        <ArrowBackIcon></ArrowBackIcon> Volver
      </Link>

      <div style={{ "padding-top": "35px" }}>
        {item.urlImg && <img className="image" src={item.urlImg} alt="" />}
      </div>
      <h3 className="title">{item?.title}</h3>
      <p>{item?.description}</p>
      <p>{item?.author}</p>
      <div className="items">
        <h2>Ingredientes: </h2>
        <p>Sal, Azucar bla, bla ,ablas </p>
      </div>
      <div>
        <h3>INSTRUCCIONES</h3>
        <p></p>
      </div>
    </div>
  );
}

export default CompleteRecipe;
