import styles from "../CSS/complete-recipe.module.css";
import Header from "../COMPONENTS/header.jsx";
import { useEffect, useState } from "react";
import store from "../STORE/main.store.js";
import BackHomeBtn from "../COMPONENTS/backhome-btn.jsx";
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
    <div className={styles.central_container}>
      <header>
        <Header></Header>
        <BackHomeBtn></BackHomeBtn>
      </header>
      <main>
        <div style={{ paddingTop: "35px" }}>
          {item.urlImg && (
            <img
              className={styles.image}
              src={item.urlImg}
              alt={"imagen de " + item.title}
            />
          )}
        </div>
        <h3 className={styles.title}>{item?.title}</h3>
        <p className={styles.title_cat}>Receta por: {item?.author}</p>
        <p className={styles.text_white_space}>{item?.description}</p>
        <p>{item?.createdAt}</p>
        {item.ingredients && (
          <div className={styles.items}>
            <h2 className={styles.title_cat}>INGREDIENTES: </h2>
            <p className={styles.text_white_space}>{item.ingredients} </p>
          </div>
        )}
        <div className={styles.instructions_container}>
          <h3 className={styles.title_cat}>INSTRUCCIONES</h3>
          <p className={styles.text_white_space}>{item?.instructions}</p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default CompleteRecipe;
