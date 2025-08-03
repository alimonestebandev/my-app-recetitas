import SearchIcon from "@mui/icons-material/Search";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-logo">
        <BreakfastDiningIcon> </BreakfastDiningIcon>
        <h4>Recetitas</h4>
        <h4 className="slogan">Encontrá lo que estas buscando</h4>
      </div>
      <div className="search-container">
        <input className="input-search" type="text" />
        <button title="Buscar" className="btn-searchbar">
          <SearchIcon></SearchIcon>
        </button>
        <Link
          to="/create-recipe"
          title="Crear publicación"
          className="btn-searchbar"
        >
          <AddBoxIcon /> Publicar
        </Link>
      </div>
    </header>
  );
}

export default Header;
