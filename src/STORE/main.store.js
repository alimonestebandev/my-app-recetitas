import { create } from "zustand";

const store = create((set) => ({
  items: "",
  recipeSelected: "",
  setSelectedRecipe: (newRecipe) => set({ recipeSelected: newRecipe }),
}));

export default store;
