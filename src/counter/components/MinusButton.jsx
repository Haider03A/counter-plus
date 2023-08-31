import { useContext, useState } from 'react'
import CounterContext from './context/CounterContext'

export default ({ dataKey }) => {
    const { items, setItems, minCount, setNewCountNum } = useContext(CounterContext)
    const [butChliked, setButChliked] = useState(false)
 
    const minusCount = () => {
        const cloneItems = [...items]

        for (let i = 0; i < cloneItems.length; i++) {
            let count = cloneItems[i].count

            if (cloneItems[i].key == dataKey) {
                if (count > minCount) {
                    cloneItems[i].count = --count
                    setButChliked(true)
                    setNewCountNum({key: dataKey, newCountNum: -1})
                    setTimeout(()=> setButChliked(false),300)
                    break;
                }
            }
        }
        setItems(cloneItems)
    }

    const minusIcon = <svg className={`${butChliked ? 'stroke-red-400' : 'stroke-gray-200' } h-6 duration-300 pointer-events-none stroke-3`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" >
        <path strokeLinecap="round" strokeLinejoin="round"  d="M6 12L18 12" /></svg>

    return (
        <button onClick={minusCount} className={`${butChliked ? 'border-red-400' : 'border-gray-200' } border-dashed border-2 flex justify-center items-center duration-300 h-14 w-14 rounded-lg`}>{minusIcon}</button>
    )
}