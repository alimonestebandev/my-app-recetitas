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

function Main() {
  const { state, changeState } = useStateLoading();
  const { setRecipeSelected, setItemsStore, items } = store();

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

  const searchItem = (words) => {
    if (words.target.value.length > 2) {
      const filterApply = items.filter((e) =>
        e.title
          .toUpperCase()
          .replace(" ", "")
          .includes(words.target.value.toUpperCase().replace(" ", ""))
      );
      setFilteredItems(filterApply);
    } else {
      setFilteredItems(items);
    }
  };

  const getDATA = () => {
    fetch("src/DATA/api.json")
      .then((res) => res.json())
      .then((data) => {
        if (items <= 0) {
          setItemsStore(data);
          setFilteredItems(data);
        } else {
          setFilteredItems(items);
        }
        changeState();
      })
      .catch((error) => console.error("Error al obtener el JSON:", error));
  };
  useEffect(() => {
    getDATA();
  }, []);

  return (
    <div>
      <div className="central-container">
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
          <Link
            to="/create-recipe"
            title="Crear publicación"
            className="btn-searchbar"
          >
            <AddBoxIcon /> Publicar
          </Link>
        </div>
        <div
          style={{
            paddingTop: "5px",
            borderTop: "1px solid black",
            position: "relative",
            height: "40px",
          }}
        >
          {/* <button
            title="Invertir Lista"
            className="filter-btn-arrows"
            onClick={invertItemsList}
          >
            <SwapVertIcon></SwapVertIcon>
          </button> */}
        </div>
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
      </div>
    </div>
  );
}

export default Main;
