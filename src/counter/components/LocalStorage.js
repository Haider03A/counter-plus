import { useContext, useEffect } from 'react'
import CounterContext from './context/CounterContext'

export default () => {
    const localStorageItems = JSON.parse(localStorage.getItem('items'))
    const localStorageKey = JSON.parse(localStorage.getItem('key'))
    const { items, setItems, key, setKey } = useContext(CounterContext)

    useEffect(() => {
        if(localStorageItems && localStorageKey) {
           setItems(localStorageItems) 
           setKey(localStorageKey)
        }
        
    }, [])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
        localStorage.setItem('key', key)
    }, [items, key])


}