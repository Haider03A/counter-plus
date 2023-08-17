import { useContext } from 'react'
import CounterContext from './context/CounterContext'

export default ({dataKey, value})=> {
    const {items, setItems} = useContext(CounterContext)

    const onChangeHandil = e => {
        const dataKey = e.target.parentElement.dataset.key
        const inputValue = +(e.target.value)
        const cloneItems = [...items]

        for (let i = 0; i < cloneItems.length; i++) {
            if (cloneItems[i].key == dataKey) {
                cloneItems[i].inputNum = inputValue
                if (e.target.value == 0) {
                    cloneItems[i].inputNum = ''
                }
                break
            }
        }
        setItems(cloneItems)

    }

    return(
        <div className="basis-28" data-key={dataKey}>
            <input type="number" value={value} onChange={onChangeHandil} min={0} placeholder="ادخل رقما" className="font-bold w-full h-12 bg-gray-200 bg-opacity-50 outline-none p-2.5 border-b-4 border-transparent duration-300 focus:border-b-blue-500 rounded-lg"/>
        </div>
    )
}