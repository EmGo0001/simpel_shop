import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBasket = create(
  persist((set, get) => ({
    basket: [],
    addToBasket: (id, product) =>
      set((state) => ({
        basket: [...state.basket, { id, product }],
      })),
    removeFromBasket: (id) =>
      set(() => ({
        basket: get().basket.filter((item) => item.id !== id),
      })),
  })),
);

export default useBasket;
