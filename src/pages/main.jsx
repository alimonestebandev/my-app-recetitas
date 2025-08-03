import { useEffect, useState } from "react";
import Header from "../COMPONENTS/header.jsx";
import ItemPreview from "../COMPONENTS/item.preview.jsx";

import store from "../STORE/main.store.js";

function Main() {
  const [items, setItems] = useState([]);

  const { setRecipeSelected } = store();

  const getDATA = () => {
    fetch("src/DATA/api.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error al obtener el JSON:", error));
  };
  useEffect(() => getDATA(), []);

  return (
    <div>
      <button onClick={() => console.log(items)}>Mostrar JSON</button>
      <div className="central-container">
        <Header />
        {items.map((e, index) => {
          return (
            <ItemPreview
              setRecipeSelected={setRecipeSelected}
              item={e}
              createdAt={e.createdAt}
              author={e.author}
              urlImg={e.urlImg}
              key={index}
              title={e.title}
              description={e.description}
            ></ItemPreview>
          );
        })}
        {/* <ItemPreview
          title="Puré de papas con milanesa a caballo"
          description="Exquisito pure de papas hervidas, coccion lenta y bla bla bla"
        />
        <ItemPreview
          urlImg="https://img-global.cpcdn.com/recipes/b401588469ec6bbe/640x640sq80/photo.webp"
          title="¡IMPRESIONA A TU VISITAS! | ¡Bizcochitos Caseros para el mate!"
          description="¿Vienen visitas de repente y no tenes mucho tiempo? hacete estos bizcochitos ideales para unos buenos mates"
        />
        <ItemPreview
          urlImg="https://media.ambito.com/p/136b65f52fb3f65f745783fb24ebe77a/adjuntos/239/imagenes/042/492/0042492372/730x0/smart/infusionesjpg.jpg"
          title="Infusiones relajantes 💜"
          description="ideales para ansiedad, estres y malestar general"
        /> */}
      </div>
    </div>
  );
}

export default Main;
