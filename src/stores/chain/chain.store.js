import create from "zustand";
import { devtools } from "zustand/middleware";

const useChainStore = create(
  devtools((set, get) => ({
    chainedData: [],
    resetData: () => {
      set({ chainedData: [1, 2, 3] });
    },
    dependentEvent: () => {
      const dataFromApi = [1, 2, 3];
      console.log("dependentEventData", dataFromApi);
      get().chainEvent(dataFromApi);
    },
    chainEvent: (payload) => {
      const dataFromAnotherApi = payload.map((data) => data * 10);
      console.log("chainedEventData", dataFromAnotherApi);
      set({ chainedData: dataFromAnotherApi });
    },
  }))
);

export default useChainStore;

// useChainStore.subscribe(console.log);
