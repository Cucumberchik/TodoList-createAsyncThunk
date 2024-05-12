import {configureStore} from "@reduxjs/toolkit"
import {useDispatch, useSelector, type TypedUseSelectorHook} from "react-redux"
import TodoSlice from "./features/TodoSlice"


export const store = configureStore({
    reducer: TodoSlice,
})

export const useAppDispatch:()=>typeof store.dispatch = useDispatch;
export const useAppSelecgor:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;