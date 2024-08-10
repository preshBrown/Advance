import orderSliceReducer from "./orderSlice"
import { configureStore } from "@reduxjs/toolkit"




const store = configureStore({
    reducer: {
        order: orderSliceReducer
    }
})
export default store