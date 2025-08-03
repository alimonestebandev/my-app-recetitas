import { create } from "zustand";

const store = create((set) => ({
  items: "",
  recipeSelected: "",
  setItemsStore: (newItems) => set({ items: newItems }),
  setSelectedRecipe: (newRecipe) => set({ recipeSelected: newRecipe }),
}));

export default store;
