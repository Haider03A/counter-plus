import { useContext, useState } from 'react'
import CounterContext from './context/CounterContext'

export default ({ dataKey }) => {
    const { items, setItems, minCount } = useContext(CounterContext)
    const [butChliked, setButChliked] = useState(false)
 
    const minusCount = () => {
        const cloneItems = [...items]

        for (let i = 0; i < cloneItems.length; i++) {
            let count = cloneItems[i].count

            if (cloneItems[i].key == dataKey) {
                if (count > minCount) {
                    cloneItems[i].count = --count
                    setButChliked(true)
                    setTimeout(()=> setButChliked(false),300)
                    break;
                }
            }
        }
        setItems(cloneItems)
    }

    const minusIcon = <svg className={`${butChliked ? 'stroke-white' : 'stroke-gray-400' } h-6 duration-300 pointer-events-none stroke-3`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M6 12L18 12" strokeLinecap="round" strokeLinejoin="round" /></svg>

    return (
        <button onClick={minusCount} className={`${butChliked ? 'bg-red-500' : 'bg-gray-200' } duration-300 h-12 rounded-lg px-3`}>{minusIcon}</button>
    )
}