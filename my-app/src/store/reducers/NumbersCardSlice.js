import {createSlice} from "@reduxjs/toolkit";
import {CONST_LOCAL_STORAGE} from "../../constants";


const initialState={
    cardNumberList:[]
}

export const numbersCardsSlice = createSlice({
    name:'numbersCard',
    initialState,
    reducers:{

        addCard(state){
            const body = {
               number:Math.floor(Math.random() * 1000)
            }
            state.cardNumberList.push(body)
            localStorage.setItem(CONST_LOCAL_STORAGE, JSON.stringify(state.cardNumberList))
        },

        deleteCard(state, action){
            const cardIndex = action.payload;
            state.cardNumberList = state.cardNumberList.filter((item, index)=>index !== cardIndex)
            localStorage.setItem(CONST_LOCAL_STORAGE, JSON.stringify(state.cardNumberList))
        },

        sortNumbers(state){
            state.cardNumberList = state.cardNumberList.sort((a,b)=>{
                return a.number- b.number;
            })
            localStorage.setItem(CONST_LOCAL_STORAGE, JSON.stringify(state.cardNumberList))
        },

        setCardList(state, action){
            state.cardNumberList = action.payload
        }
    }
})

export const {addCard, deleteCard, sortNumbers, setCardList } = numbersCardsSlice.actions

export default numbersCardsSlice.reducer