import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    itemId: 1,
    items: [],
    minCount: 0,
    maxCount: 999
}

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const cloneItems = [...state.items]
            const value = action.payload
            
            if (value[0] == '$' && value[1] == '$') {
                let word = '';
                const words = [];
    
                for (let i = 2; i < value.length; i++) {
                    if(value[i] != '\n' && value[i] != '' && value.length - 1 == i) {
                        word += value[i]
                        words.push(word.trim())
                        word = ''
                    } else if (value[i] != '\n' && value[i] != '') {
                        word += value[i]
                    } else {
                        words.push(word.trim())
                        word = ''
                    }
                }
    
                words.forEach(word => {
                    if (word != '') {
                        cloneItems.push({ itemId: state.itemId, pageId: 1111, item: word, count: 0, inputNum: ''})    
                        state.itemId = ++state.itemId
                    }
                })
                state.items = cloneItems
    
            } else if (value) {
                state.items = [...state.items, {
                    itemId: state.itemId,
                    pageId: 1111,
                    item: value,
                    count: 100,
                    inputNum: ''
                }]
                state.itemId = ++state.itemId
            }
        }
    }
})

export const { addItem, setNewCountNum } = itemSlice.actions
export default itemSlice.reducer