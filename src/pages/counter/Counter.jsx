import './counter.css'
import AddItems from '../../components/counterCopms/mainComps/AddItems'
import ListOFItems from '../../components/counterCopms/mainComps/ListOFItems'
import { useState } from 'react'
import LocalStorage from '../../components/counterCopms/mainComps/LocalStorage'
import MainController from '../../components/counterCopms/header/HeaderCounter'

import CounterContext from '../../context/counterContext/CounterContext'


export default () => {
    const [items, setItems] = useState([])
    const [key, setKey] = useState(0)
    const [newCountNum, setNewCountNum] = useState(null)
    const [thereIsCountNum, setThereIsCountNum] = useState(false)
    const minCount = 0
    const maxCount = 999
    const valeuCounterContext = { items, setItems, key, setKey, minCount, maxCount, thereIsCountNum, setThereIsCountNum, newCountNum, setNewCountNum }
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