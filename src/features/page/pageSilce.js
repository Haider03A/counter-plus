import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pageId: 1,
    pageIdActive: 0,
    pages: []
}

const itemSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPageIdActive : (state, pageIdActive) => {
            state.pageIdActive = pageIdActive
        }
    }
})

export const { addItem } = itemSlice.actions
export default itemSlice.reducer