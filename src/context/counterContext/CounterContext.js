import { createContext, useState } from 'react'

const valeusCounterContext = () => {
    const [items, setItems] = useState([])
    const [key, setKey] = useState(1)
    const [newCountNum, setNewCountNum] = useState(null)
    const [thereIsCountNum, setThereIsCountNum] = useState(false)
    const minCount = 0
    const maxCount = 999
    const [popupActive, SetpopupActive] = useState(false)
    const [pages, setPages] = useState([])
    const [pageActiveId, setPageActiveId] = useState('all')
    const [pageId, setPageId] = useState(1)

    return {
        items, setItems,
        key, setKey,
        minCount, maxCount,
        thereIsCountNum, setThereIsCountNum,
        newCountNum, setNewCountNum,
        popupActive, SetpopupActive,
        pages, setPages,
        pageActiveId, setPageActiveId,
        pageId, setPageId
    }
}


const CounterContext = createContext()

export default CounterContext
export { valeusCounterContext }