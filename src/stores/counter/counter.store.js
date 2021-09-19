import create from "zustand";
import { devtools } from "zustand/middleware";

const useCounterStore = create(
  devtools((set, get) => ({
    count: 10,
    step: 5,
    increase: () => set((state) => ({ count: state.count + state.step })),
    decrease: () => set({ count: get().count - get().step }),
    setStep: (value) => set({ step: value }),
    reset: () => set({ count: 0 }),
  }))
);

export default useCounterStore;

// useCounterStore.subscribe(console.log);
