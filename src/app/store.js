import { configureStore } from '@reduxjs/toolkit'

import itemReducer from '../features/items/itemsSlice'

const store = configureStore({
    reducer: {
        item: itemReducer
        
    }
})

export {store}