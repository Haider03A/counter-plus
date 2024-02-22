import { createContext, useState } from 'react'

const valeusCounterContext = () => {
    const [items, setItems] = useState([])
    const [key, setKey] = useState(1)
    const [newCountNum, setNewCountNum] = useState(null)
    const [thereIsCountNum, setThereIsCountNum] = useState(false)
    const minCount = 0
    const maxCount = 999
    const [printMode, setPrintMode] = useState(false)
    const [popupActive, SetpopupActive] = useState(false)
    const [pages, setPages] = useState([{pageName: 'الكل', pageTitle: 'قائمة', pageId: 0}])
    const [pageActiveId, setPageActiveId] = useState(0)
    const [pageId, setPageId] = useState(1)
    const [resetApp, setResetApp] = useState(false)

    return {
        items, setItems,
        key, setKey,
        minCount, maxCount,
        thereIsCountNum, setThereIsCountNum,
        newCountNum, setNewCountNum,
        printMode, setPrintMode,
        popupActive, SetpopupActive,
        pages, setPages,
        pageActiveId, setPageActiveId,
        pageId, setPageId,
        resetApp, setResetApp
    }
}


const CounterContext = createContext()

export default CounterContext
export { valeusCounterContext }