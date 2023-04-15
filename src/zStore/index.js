import { create } from "zustand";
import {immer} from "zustand/middleware/immer";
import createBaseSlice from "./createBaseSlice";
import createStoreSlice from "./createStoreSlice";

const useStore = create(immer((...args) => ({
  ...createBaseSlice(...args),
  ...createStoreSlice(...args)
})))

export default useStore

