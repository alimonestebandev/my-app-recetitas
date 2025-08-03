import { create } from "zustand";

const store = create((set) => ({
  recipeSelected: "",
  setSelectedRecipe: (newRecipe) => set({ recipeSelected: newRecipe }),
}));

export default store;
