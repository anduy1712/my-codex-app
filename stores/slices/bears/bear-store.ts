import { create } from "zustand";

import { initialBearState } from "./consts";
import { TBearStore } from "./types";

const useBearStore = create<TBearStore>((set) => ({
  ...initialBearState,
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}));

export default useBearStore;
