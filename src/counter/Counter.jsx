import './counter.css'
import AddItems from './components/AddItems'
import ListOFItems from './components/ListOFItems'
import { useState } from 'react'
import CounterContext from './components/context/CounterContext'
import LocalStorage from './components/LocalStorage'
import MainController from './components/mainController/MainController'



export default () => {
    const [items, setItems] = useState([])
    const [key, setKey] = useState(0)
    const [thereIsCountNum, setThereIsCountNum] = useState(false)
    const minCount = 0
    const maxCount = 999
    const valeuCounterContext = { items, setItems, key, setKey, minCount, maxCount, thereIsCountNum, setThereIsCountNum }
    return (
        <main>
            <CounterContext.Provider value={valeuCounterContext}>
                <LocalStorage />
                <MainController />
                <ListOFItems />
                <AddItems />
            </CounterContext.Provider>

        </main>
    )
}