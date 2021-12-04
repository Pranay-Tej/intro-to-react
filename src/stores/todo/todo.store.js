import axios from "axios";
import create from "zustand";
import { devtools } from "zustand/middleware";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const useTodoStore = create(
  devtools((set) => ({
    todoList: [],
    isLoading: false,
    errorMessage: null,
    fetchAll: async () => {
      try {
        set({ isLoading: true });
        const res = await axios(`${BASE_URL}/todos`);
        set({ todoList: res.data });
      } catch (error) {
        console.error(error.message);
        set({ errorMessage: error.message });
      } finally {
        set({ isLoading: false });
      }
    },
    selectedTodoId: null,
    setSelectedTodoId: (value) => set({ selectedTodoId: value }),
  }))
);

export default useTodoStore;

// useTodoStore.subscribe(console.log);
