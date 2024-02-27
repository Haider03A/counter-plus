import { configureStore } from '@reduxjs/toolkit'

import itemReducer from '../features/items/itemsSlice'
import pagesReducer from '../features/pages/pagesSilce'

const store = configureStore({
    reducer: {
        items: itemReducer,
        pages: pagesReducer
    }
})

export {store}