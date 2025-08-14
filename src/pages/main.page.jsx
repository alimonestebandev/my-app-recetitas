import { useEffect, useState } from "react";
import Header from "../COMPONENTS/header.jsx";
import ItemPreview from "../COMPONENTS/item.preview.jsx";
import store from "../STORE/main.store.js";
import Loading from "../COMPONENTS/loading.jsx";
import useStateLoading from "../CUSTOM_HOOKS/state.jsx";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
import Footer from "../COMPONENTS/footer.jsx";
import CoffeeIcon from "@mui/icons-material/Coffee";

import styles from "../CSS/main.module.css";

function MainPage() {
  const { isLoading, startLoading, stopLoading } = useStateLoading();
  const {
    setRecipeSelected,
    setItemsStore,
    items,
    setOptionSelected,
    optionSelected,
  } = store();

  const [errorMsg, setErrorMsg] = useState(null);

  const [filteredItems, setFilteredItems] = useState([]);

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
    startLoading();
    setOptionSelected(1);
    if (localStorage.getItem("LOCAL-DATA")) {
      var LocalData = JSON.parse(localStorage.getItem("LOCAL-DATA"));
      setFilteredItems(LocalData);
      setItemsStore(LocalData);
      stopLoading();
    } else {
      setFilteredItems(null);
      setItemsStore(null);
      stopLoading();
    }
  };

  const getApiDATA = () => {
    startLoading();
    setOptionSelected(0);
    setItemsStore(null);
    setFilteredItems(null);
    fetch("api.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.length >= 1) {
          setItemsStore(data);
          setFilteredItems(data);
          setErrorMsg(null);
        }
        stopLoading();
      })
      .catch((error) => {
        setErrorMsg("Error al cargar publicaciones");
        stopLoading();
      });
  };
  useEffect(() => {
    if (optionSelected == 0) {
      getApiDATA();
    } else if (optionSelected == 1) {
      getLocalDATA();
    }
  }, []);

  return (
    <div className={styles.central_container}>
      <header>
        <Header />
        <div className={styles.search_container}>
          <input
            onChange={(e) => searchItem(e)}
            className={styles.input_search}
            type="text"
          />
          <button title="Buscar" className={styles.btn_searchbar}>
            <SearchIcon></SearchIcon>
          </button>
        </div>
        <div className={styles.header_btns}>
          <button
            className={optionSelected == 0 ? styles.btn_selected : " "}
            onClick={getApiDATA}
          >
            Novedades
          </button>
          <button
            className={optionSelected == 1 ? styles.btn_selected : " "}
            onClick={getLocalDATA}
          >
            Mis Recetas
          </button>
        </div>
        {optionSelected == 1 && (
          <div className={styles.my_recipes_bar}>
            <select id="filter_option" onChange={applyFilter}>
              <option value="0">Todos</option>
              <option value="1">Favoritos</option>
            </select>
            <Link
              to="/create-recipe"
              title="Crear Receta"
              className={styles.btn_create}
            >
              <AddBoxIcon />
              <p>Crear Receta</p>
            </Link>
          </div>
        )}
      </header>
      <main className={styles.items_container}>
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
        {!isLoading && filteredItems == null
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
        {isLoading && <Loading />}
        {errorMsg && optionSelected == 0 && (
          <h4 style={{ color: "red" }}>{errorMsg}</h4>
        )}
        {filteredItems?.length <= 0 ||
          (items?.length && filteredItems?.length <= 0) ||
          (items == null && (
            <div style={{ color: "gray", margin: "20px 0 20px 0" }}>
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

export default MainPage;
