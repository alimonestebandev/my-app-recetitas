import { create } from "zustand";

const store = create((set) => ({
  items: "",
  optionSelected: 0,
  recipeSelected: "",
  setItemsStore: (newItems) => set({ items: newItems }),
  setOptionSelected: (newOption) => set({ optionSelected: newOption }),
  setSelectedRecipe: (newRecipe) => set({ recipeSelected: newRecipe }),
}));

export default store;
