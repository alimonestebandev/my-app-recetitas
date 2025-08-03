import { useEffect, useState } from "react";
import Header from "../COMPONENTS/header.jsx";
import ItemPreview from "../COMPONENTS/item.preview.jsx";
import store from "../STORE/main.store.js";
import Loading from "../COMPONENTS/loading.jsx";

import useStateLoading from "../CUSTOM_HOOKS/state.jsx";

function Main() {
  const { state, changeState } = useStateLoading();
  const { setRecipeSelected, setItemsStore, items } = store();

  const getDATA = () => {
    fetch("src/DATA/api.json")
      .then((res) => res.json())
      .then((data) => {
        if (items <= 0) {
          setItemsStore(data);
          console.log(data);
        }
        changeState();
      })
      .catch((error) => console.error("Error al obtener el JSON:", error));
  };
  useEffect(() => getDATA(), []);

  return (
    <div>
      <div className="central-container">
        <Header />
        {!state ? (
          items?.map((e, index) => {
            return (
              <ItemPreview
                setRecipeSelected={setRecipeSelected}
                item={e}
                key={index}
              ></ItemPreview>
            );
          })
        ) : (
          <Loading loading={state} />
        )}
      </div>
    </div>
  );
}

export default Main;
