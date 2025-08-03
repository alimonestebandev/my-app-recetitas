import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./PAGES/main.jsx";
import CompleteRecipe from "./PAGES/complete-recipe.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/see-recipe" element={<CompleteRecipe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
