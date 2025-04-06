import { configureStore } from "@reduxjs/toolkit";
import HeroReducer  from './reducer/viewHero'

const store = configureStore({
    reducer: {
        viewHero: HeroReducer
    }
})


export type RootReducer = ReturnType<typeof store.getState>
export default store