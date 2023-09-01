import { createContext, useState } from 'react'
 
const valeusCounterContext = () => {
    const [items, setItems] = useState([])
    const [key, setKey] = useState(0)
    const [newCountNum, setNewCountNum] = useState(null)
    const [thereIsCountNum, setThereIsCountNum] = useState(false)
    const minCount = 0
    const maxCount = 999
    
   return { items, setItems, key, setKey, minCount, maxCount, thereIsCountNum, setThereIsCountNum, newCountNum, setNewCountNum }
}


const CounterContext = createContext()

export default CounterContext
export { valeusCounterContext }