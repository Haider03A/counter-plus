import { useContext, useState } from 'react'
import CounterContext from './context/CounterContext'
export default ({dataKey}) => {
    const { items, setItems, maxCount } = useContext(CounterContext)
    const [butChliked, setButChliked] = useState(false)
 
    const plusCount = () => {
        const cloneItems = [...items]

        for (let i = 0; i < cloneItems.length; i++) {
            let count = cloneItems[i].count

            if (cloneItems[i].key == dataKey) {
                if (count <= maxCount) {
                    cloneItems[i].count = ++count
                    setButChliked(true)
                    setTimeout(()=> setButChliked(false),300)
                    break;
                }
            }
        }
        setItems(cloneItems)

    }

    const plusIcon = <svg className={`${butChliked ? 'stroke-white' : 'stroke-gray-400' } h-6 duration-300 pointer-events-none stroke-3`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M6 12H18M12 6V18" strokeLinecap="round" strokeLinejoin="round" /></svg>

    return (
        <button onClick={plusCount} className={`${butChliked ? 'bg-blue-500' : 'bg-gray-200' } duration-300 h-12 rounded-lg px-3`}>{plusIcon}</button>
    )
}