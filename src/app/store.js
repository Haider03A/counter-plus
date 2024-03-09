import { configureStore } from '@reduxjs/toolkit'

import itemReducer from '../features/pageItem/pageItemSlice'
import pageReducer from '../features/page/pageSilce'

const store = configureStore({
    reducer: {
        pageItem: itemReducer,
        page: pageReducer
    }
})

export {store}