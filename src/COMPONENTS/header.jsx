import SearchIcon from "@mui/icons-material/Search";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";

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
        <button className="btn-search">
          <SearchIcon></SearchIcon>
        </button>
      </div>
    </header>
  );
}

export default Header;
