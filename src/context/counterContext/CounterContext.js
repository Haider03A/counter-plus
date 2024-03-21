import { createContext, useState } from 'react'

const valeusCounterContext = () => {
    const [items, setItems] = useState([])
    const [key, setKey] = useState(1)
    const [newCountNum, setNewCountNum] = useState(null)
    const [thereIsCountNum, setThereIsCountNum] = useState(false)
    const minCount = 0
    const maxCount = 999
    const [printMode, setPrintMode] = useState(false)
    const [popupActive, setpopupActive] = useState(false)
    const [pageActiveId, setPageActiveId] = useState(0)
    const [pageId, setPageId] = useState(1)
    const [pages, setPages] = useState([{pageName: 'الصفحة الاولى', pageTitle: 'الصفحة الاولى', pageId: 0}])
    const [resetApp, setResetApp] = useState(false)
    const [itemActiveId, setItemActiveId] = useState(null)

    return {
        items, setItems,
        key, setKey,
        minCount, maxCount,
        thereIsCountNum, setThereIsCountNum,
        newCountNum, setNewCountNum,
        printMode, setPrintMode,
        popupActive, setpopupActive,
        pages, setPages,
        pageActiveId, setPageActiveId,
        pageId, setPageId,
        resetApp, setResetApp,
        itemActiveId, setItemActiveId
    }
}


const CounterContext = createContext()

export default CounterContext
export { valeusCounterContext }