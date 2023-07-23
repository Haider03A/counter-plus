import { useContext } from 'react'
import CounterContext from './context/CounterContext'

export default () => {
    const { items, setItems, minCount } = useContext(CounterContext)
    
    const minusCount = e => {
        const dataKey = e.target.parentElement.dataset.key
        const cloneItems = [...items]
             
        for(let i = 0; i<cloneItems.length; i++) {
            let count = +(cloneItems[i].count) 

            if(cloneItems[i].key == dataKey) {
                if (count > minCount) {
                    cloneItems[i].count = --count
                    break;
                }
            }
        }
        setItems(cloneItems)
    }

    return(
        <button onClick={minusCount} className="button minus">-</button>
    )
}