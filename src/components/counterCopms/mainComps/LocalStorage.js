import { useContext, useEffect } from 'react'
import CounterContext from '../../../context/counterContext/CounterContext'

export default () => {
    const { items, setItems, key, setKey, pages, setPages, pageActiveId, setPageActiveId, pageId, setPageId, printMode, setPrintMode } = useContext(CounterContext)

    const localStorageItems = JSON.parse(localStorage.getItem('items'))
    const localStorageKey = JSON.parse(localStorage.getItem('key'))
    const localStoragePages = JSON.parse(localStorage.getItem('pages'))
    const localStoragePageActiveId = JSON.parse(localStorage.getItem('pageActiveId'))
    const localStoragePageId = JSON.parse(localStorage.getItem('pageId'))
    const localStoragePrintMode = JSON.parse(localStorage.getItem('printMode'))

    useEffect(() => {

        localStorageItems &&
            setItems(localStorageItems);

        localStorageKey &&
            setKey(localStorageKey);

        localStoragePages &&
            setPages(localStoragePages);

        localStoragePageActiveId !== null &&
            setPageActiveId(localStoragePageActiveId);

        localStoragePageId !== null &&
            setPageId(localStoragePageId);

            localStoragePrintMode && 
            setPrintMode(localStoragePrintMode);

    }, [])

    useEffect(() => localStorage.setItem('items', JSON.stringify(items)), [items])

    useEffect(() => localStorage.setItem('key', key), [key])

    useEffect(() => localStorage.setItem('pages', JSON.stringify(pages)), [pages])

    useEffect(() => localStorage.setItem('pageActiveId', JSON.stringify(pageActiveId)), [pageActiveId])

    useEffect(() => localStorage.setItem('pageId', pageId), [pageId])
    
    useEffect(() => localStorage.setItem('printMode', JSON.stringify(printMode)), [printMode])

}