import "./App.css";
import ItemPreview from "./COMPONENTS/item.preview.jsx";
import SearchIcon from "@mui/icons-material/Search";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";

function App() {
  return (
    <div className="central-container">
      <header>
        <div className="header-logo">
          <BreakfastDiningIcon> </BreakfastDiningIcon>
          <h4>Recetitas</h4>
          <h4 className="slogan">Encontrá lo que estas buscando</h4>
        </div>
        <div className="search-container">
          <input className="input-search" type="text" />
          <button className="btn-search">
            <SearchIcon></SearchIcon>
          </button>
        </div>
      </header>

      <ItemPreview
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
      />
    </div>
  );
}

export default App;
