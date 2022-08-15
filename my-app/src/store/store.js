import {configureStore} from "@reduxjs/toolkit";
import numbersCardsSlice from './reducers/NumbersCardSlice'


export const store = () => {
    return configureStore({
        reducer: numbersCardsSlice
    })
}