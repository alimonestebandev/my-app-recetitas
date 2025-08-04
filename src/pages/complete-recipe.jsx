import "../CSS/complete-recipe.css";
import Header from "../COMPONENTS/header.jsx";

import { useEffect, useState } from "react";
import store from "../STORE/main.store";
import BackHomeBtn from "../COMPONENTS/backhome-btn";
import Footer from "../COMPONENTS/footer.jsx";

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
      <header>
        <Header></Header>
        <BackHomeBtn></BackHomeBtn>
      </header>
      <main>
        <div style={{ paddingTop: "35px" }}>
          {item.urlImg && <img className="image" src={item.urlImg} alt="" />}
        </div>
        <h3 className="title">{item?.title}</h3>
        <p className="title_cat">Receta por: {item?.author}</p>
        <p style={{ textAlign: "left", whiteSpace: "pre-line" }}>
          {item?.description}
        </p>
        <p>{item?.createdAt}</p>
        {item.ingredients && (
          <div className="items">
            <h2 className="title_cat">INGREDIENTES: </h2>
            <p style={{ whiteSpace: "pre-line" }}>{item.ingredients} </p>
          </div>
        )}
        <div style={{ textAlign: "left" }}>
          <h3 className="title_cat">INSTRUCCIONES</h3>
          <p style={{ whiteSpace: "pre-line" }}>{item?.instructions}</p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default CompleteRecipe;
