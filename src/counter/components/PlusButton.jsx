import { useContext } from 'react'
import CounterContext from './context/CounterContext'
export default () => {
    const { items, setItems, maxCount } = useContext(CounterContext)

    const plusCount = e => {
        const dataKey = e.target.parentElement.dataset.key
        const cloneItems = [...items]

        for (let i = 0; i < cloneItems.length; i++) {
            let count = +(cloneItems[i].count)

            if (cloneItems[i].key == dataKey) {
                if (count <= maxCount) {
                    if (cloneItems[i].inputNum && (cloneItems[i].inputNum + count) <= maxCount) {
                        cloneItems[i].count = (count + cloneItems[i].inputNum)
                        cloneItems[i].inputNum = ''
                        break;
                    } else {
                        cloneItems[i].count = ++count
                        break;
                    }

                }

            }
        }
        setItems(cloneItems)

    }

    const plusIcon = <svg className='h-6 pointer-events-none stroke-gray-400 stroke-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M6 12H18M12 6V18" strokeLinecap="round" strokeLinejoin="round" /></svg>

    return (
        <button onClick={plusCount} className="focus:stroke-white h-12 bg-gray-200 bg-opacity-50 rounded-lg px-3">{plusIcon}</button>
    )
}