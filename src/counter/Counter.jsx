import './counter.css'
import AddItems from './components/AddItems'
import ListOFItems from './components/ListOFItems'
import { useState } from 'react'
import CounterContext from './components/context/CounterContext'
import LocalStorage from './components/LocalStorage'



export default () => {
    const [items, setItems] = useState([])
    const [key, setKey] = useState(0)
    const minCount = 0.5
    const maxCount = 999
    const valeuCounterContext = { items, setItems, key, setKey, minCount, maxCount }
    return (
        <main>
            <CounterContext.Provider value={valeuCounterContext}>
                <LocalStorage />
                <AddItems />
                <ListOFItems />
            </CounterContext.Provider>

        </main>
    )
}