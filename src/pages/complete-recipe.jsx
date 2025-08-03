import "../CSS/complete-recipe.css";

import { useEffect, useState } from "react";
import store from "../STORE/main.store";
import BackHomeBtn from "../COMPONENTS/backhome-btn";

function CompleteRecipe() {
  const [item, setItem] = useState([]);
  const { recipeSelected } = store();
  useEffect(() => {
    if (recipeSelected) {
      setItem(recipeSelected);
    } else {
      window.location = "/";
    }
  }, []);

  return (
    <div className="central-container">
      <BackHomeBtn></BackHomeBtn>
      <div style={{ paddingTop: "35px" }}>
        {item.urlImg && <img className="image" src={item.urlImg} alt="" />}
      </div>
      <h3 className="title">{item?.title}</h3>
      <p>{item?.description}</p>
      <p style={{ fontWeight: "bold" }}>Receta por: {item?.author}</p>
      <p>{item?.createdAt}</p>
      {item.ingredients && (
        <div className="items">
          <h2>Ingredientes: </h2>
          <p>{item.ingredients} </p>
        </div>
      )}
      <div style={{ textAlign: "left" }}>
        <h3>INSTRUCCIONES</h3>
        <p>{item?.instructions}</p>
      </div>
    </div>
  );
}

export default CompleteRecipe;
