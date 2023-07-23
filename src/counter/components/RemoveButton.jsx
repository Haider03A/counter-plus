import { useContext } from 'react'
import CounterContext from './context/CounterContext'

export default () => {
    const { items, setItems } = useContext(CounterContext)

    const removeItem = (e) => {
        const dataKey = e.target.parentElement.dataset.key
        const cloneItems = [...items]
             
        for(let i = 0; i<cloneItems.length; i++) {
            if(cloneItems[i].key == dataKey) {
                cloneItems.splice(i, 1)
                break;
            }
        }
        setItems(cloneItems)
    }
    
    return(
        <button onClick={removeItem} className="button remover">x</button>
    )
}