import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./PAGES/main.page.jsx";
import CompleteRecipe from "./PAGES/complete-recipe.jsx";
import CreateRecipe from "./PAGES/create-recipe.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/see-recipe" element={<CompleteRecipe />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
