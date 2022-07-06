import { createReducer } from "@reduxjs/toolkit";
import { closeCartModal, openCartModal } from "./actions";
import { IUIState } from "./interfaces/data.interface";

export const initialState: IUIState = {
  cartModal: {
    data: null,
    open: false,
  },
};
export default createReducer<IUIState>(initialState, (builder) =>
  builder
    .addCase(
      openCartModal,
      (state, { payload }): IUIState => ({
        ...state,
        cartModal: {
          ...state.cartModal,
          open: true,
        },
      })
    )
    .addCase(
      closeCartModal,
      (state): IUIState => ({
        ...state,
        cartModal: {
          ...state.cartModal,
          open: false,
        },
      })
    )
);
