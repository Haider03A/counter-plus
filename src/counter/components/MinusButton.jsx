import { useContext } from 'react'
import CounterContext from './context/CounterContext'

export default () => {
    const { items, setItems, minCount } = useContext(CounterContext)

    const minusCount = e => {
        const dataKey = e.target.parentElement.dataset.key
        const cloneItems = [...items]

        for (let i = 0; i < cloneItems.length; i++) {
            let count = +(cloneItems[i].count)
            
            if (cloneItems[i].key == dataKey) { 
                if (count > minCount) {
                    if (cloneItems[i].inputNum && (count - cloneItems[i].inputNum) >= minCount) {
                        cloneItems[i].count = (count - cloneItems[i].inputNum)
                        cloneItems[i].inputNum = ''
                        break;
                    } else {
                        cloneItems[i].count = --count
                        break;
                    }
                }
            }
        }
        setItems(cloneItems)
    }

    return (
        <button onClick={minusCount} className="h-12 bg-gray-200 bg-opacity-50 rounded-lg px-3"><svg className='h-6 pointer-events-none stroke-gray-400 stroke-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"><path d="M6 12L18 12" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
    )
}