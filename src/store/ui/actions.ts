import { createAction } from "@reduxjs/toolkit";
import { IModal } from "./interfaces/data.interface";

export const openCartModal = createAction<IModal>("ui/openCartModal");
export const closeCartModal = createAction<void>("ui/closeCartModal");
