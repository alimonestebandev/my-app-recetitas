import { useEffect, useState } from "react";
import Header from "../COMPONENTS/header.jsx";
import ItemPreview from "../COMPONENTS/item.preview.jsx";
import store from "../STORE/main.store.js";
import Loading from "../COMPONENTS/loading.jsx";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import useStateLoading from "../CUSTOM_HOOKS/state.jsx";
import SearchIcon from "@mui/icons-material/Search";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
import Footer from "../COMPONENTS/footer.jsx";
import CoffeeIcon from "@mui/icons-material/Coffee";
function Main() {
  const { state, changeState } = useStateLoading();
  const {
    setRecipeSelected,
    setItemsStore,
    items,
    setOptionSelected,
    optionSelected,
  } = store();

  const [errorMsg, setErrorMsg] = useState(null);

  const [filteredItems, setFilteredItems] = useState([]);

  // const invertItemsList = () => {
  //   console.log(filteredItems);
  //   if (filteredItems == null && items) {
  //     return setFilteredItems(items.reverse());
  //   } else {
  //     return setFilteredItems(null);
  //   }
  // };

  // useEffect(() => invertItemsList, [setFilteredItems]);

  useEffect(() => applyFilter(), [items]);

  const applyFilter = () => {
    var option = document.getElementById("filter_option");
    if (option?.value == "0") {
      setFilteredItems(null);
    } else if (option?.value == "1") {
      showOnlyFavorites();
    }
  };

  const showOnlyFavorites = () => {
    if (items) {
      var newItems = items.filter((item) => item.isFavorite);
      setFilteredItems(newItems);
    }
  };

  const searchItem = (words) => {
    if (words.target.value.length > 2) {
      const filterApply = items.filter((e) =>
        e.title
          .toUpperCase()
          .replace(" ", "")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            words.target.value
              .toUpperCase()
              .replace(" ", "")
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      );
      setFilteredItems(filterApply);
    } else {
      setFilteredItems(items);
    }
  };

  const getLocalDATA = () => {
    setOptionSelected(1);
    if (localStorage.getItem("LOCAL-DATA")) {
      var LocalData = JSON.parse(localStorage.getItem("LOCAL-DATA"));
      setFilteredItems(LocalData);
      setItemsStore(LocalData);
    } else {
      setFilteredItems(null);
      setItemsStore(null);
    }
    if (state == true) {
      changeState();
    }
  };

  const getApiDATA = () => {
    setOptionSelected(0);
    setItemsStore(null);
    setFilteredItems(null);
    fetch("src/DATA/api.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length >= 1) {
          setItemsStore(data);
          setFilteredItems(data);
          setErrorMsg(null);
        }
      })
      .catch((error) => {
        setErrorMsg("Error al cargar publicaciones");
      });
    if (state == true) {
      changeState();
    }
  };
  useEffect(() => {
    if (optionSelected == 0) {
      getApiDATA();
    } else if (optionSelected == 1) {
      getLocalDATA();
    }
  }, []);

  return (
    <div className="central-container">
      <header>
        <Header />
        <div className="search-container">
          <input
            onChange={(e) => searchItem(e)}
            className="input-search"
            type="text"
          />
          <button title="Buscar" className="btn-searchbar">
            <SearchIcon></SearchIcon>
          </button>
        </div>
        <div className="header-btns">
          <button
            className={optionSelected == 0 ? "btn-selected" : " "}
            onClick={getApiDATA}
          >
            Novedades
          </button>
          <button
            className={optionSelected == 1 ? "btn-selected" : " "}
            onClick={getLocalDATA}
          >
            Mis Recetas
          </button>
        </div>
        {optionSelected == 1 && (
          <div className="my-recipes-bar">
            <h4>Mostrar:</h4>
            <select id="filter_option" onChange={applyFilter}>
              <option value="0">Todos</option>
              <option value="1">Favoritos</option>
            </select>
            <Link
              to="/create-recipe"
              title="Crear Receta"
              className="btn-create"
            >
              <AddBoxIcon />
              <p>Crear Receta</p>
            </Link>
          </div>
        )}
      </header>
      <main>
        {/* <div
          style={{
            paddingTop: "5px",
            borderTop: "1px solid black",
            position: "relative",
            height: "40px",
          }}
        >
          <button
            title="Invertir Lista"
            className="filter-btn-arrows"
            onClick={invertItemsList}
          >
            <SwapVertIcon></SwapVertIcon>
          </button>
        </div> */}
        {!state && filteredItems == null
          ? items?.map((e, index) => {
              return (
                <ItemPreview
                  setRecipeSelected={setRecipeSelected}
                  item={e}
                  key={index}
                ></ItemPreview>
              );
            })
          : filteredItems != null &&
            filteredItems != [] &&
            filteredItems?.map((e, index) => {
              return (
                <ItemPreview
                  setRecipeSelected={setRecipeSelected}
                  item={e}
                  key={index}
                ></ItemPreview>
              );
            })}
        {state && <Loading />}
        {errorMsg && optionSelected == 0 && (
          <h4 style={{ color: "red" }}>{errorMsg}</h4>
        )}
        {(items?.length <= 0 && filteredItems?.length <= 0) ||
          (items?.length >= 0 && filteredItems?.length <= 0) ||
          items == [] ||
          (items == null && (
            <div style={{ color: "gray" }}>
              <CoffeeIcon></CoffeeIcon>
              <h4 style={{ margin: "0", color: "gray", fontWeight: "normal" }}>
                No hay Recetas para mostrar.
              </h4>
            </div>
          ))}
      </main>

      <Footer></Footer>
    </div>
  );
}

export default Main;
