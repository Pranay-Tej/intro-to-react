import axios from "axios";
import create from "zustand";
import { devtools } from "zustand/middleware";

const useTodoStore = create(
  devtools((set) => ({
    todoList: [],
    isLoading: false,
    errorMessage: null,
    fetchAll: async () => {
      try {
        set({ isLoading: true });
        const res = await axios("http://localhost:3001/todos");
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
