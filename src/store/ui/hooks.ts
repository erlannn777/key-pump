import { useSelector } from "react-redux";
import { Store } from "../types";
import { IModal } from "./interfaces/data.interface";

export const useCartModal = (): IModal => {
  return useSelector((state: Store) => state.ui.cartModal);
};
