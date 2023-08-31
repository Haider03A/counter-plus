import { useContext, useState } from 'react'
import CounterContext from './context/CounterContext'
export default ({dataKey}) => {
    const { items, setItems, maxCount, setNewCountNum } = useContext(CounterContext)
    const [butChliked, setButChliked] = useState(false)
 
    const plusCount = () => {
        const cloneItems = [...items]

        for (let i = 0; i < cloneItems.length; i++) {
            let count = cloneItems[i].count

            if (cloneItems[i].key == dataKey) {
                if (count <= maxCount) {
                    cloneItems[i].count = ++count
                    setButChliked(true)
                    setNewCountNum({key: dataKey, newCountNum: 1})
                    setTimeout(()=> setButChliked(false),300)
                    break;
                }
            }
        }
        setItems(cloneItems)

    }

    const plusIcon = <svg className={`${butChliked ? 'stroke-indigo-400' : 'stroke-gray-200' } h-8 duration-300 pointer-events-none stroke-3`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M6 12H18M12 6V18" strokeLinecap="round" strokeLinejoin="round" /></svg>

    return (
        <button onClick={plusCount} className={`${butChliked ? 'border-indigo-400' : 'border-gray-200' } border-dashed border-2 flex justify-center items-center duration-300 h-14 w-14 rounded-lg`}>{plusIcon}</button>
    )
}