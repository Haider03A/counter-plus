import './style/Public.css'
import AddItems from './components/AddItems'
import ListOFItems from './components/ListOFItems'
import { createContext, useState } from 'react'

export const CounterContext = createContext(null)


export default () => {
    const [items, setItems] = useState([1])
    const [key, setKey] = useState(0)
    const valeuCounterContext = { items, key }
    return (
        <main className="container">
            <CounterContext.Provider value={valeuCounterContext}>
                <AddItems />
                <ListOFItems />
            </CounterContext.Provider>
        </main>
    )
}