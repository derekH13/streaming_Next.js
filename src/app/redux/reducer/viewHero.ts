import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialType = {
    itens: boolean
}

const initialState: initialType = {
    itens: false
}

const viewHeroSlice = createSlice({
    name: 'viewHero',
    initialState,
    reducers: {
        mostarviewHero: (state, action: PayloadAction<boolean>) => {
            state.itens = action.payload
            console.log(state.itens);
            
        }
    }
})

export const { mostarviewHero } = viewHeroSlice.actions

export default viewHeroSlice.reducer