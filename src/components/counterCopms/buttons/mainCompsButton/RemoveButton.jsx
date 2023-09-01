import { useContext } from 'react'
import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ dataKey, countEqZero }) => {
    const { items, setItems } = useContext(CounterContext)

    const removeItem = (e) => {
        const cloneItems = [...items]

        for (let i = 0; i < cloneItems.length; i++) {
            if (cloneItems[i].key == dataKey) {
                if (countEqZero) {
                    cloneItems.splice(i, 1)
                    break;
                } else {
                    cloneItems[i].count = 0
                    break;
                }
            }
        }
        setItems(cloneItems)
    }

    const deleteIcon = <svg className='h-6 pointer-events-none stroke-white' strokeWidth='1.5px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M10 11V17" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11V17" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 7H20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    const resetIcon = <svg className='h-6 pointer-events-none stroke-white stroke-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
        <path d="M3 3V8M3 8H8M3 8L6 5.29168C7.59227 3.86656 9.69494 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.71683 21 4.13247 18.008 3.22302 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    return (
        <button onClick={removeItem} className={`${countEqZero ? 'bg-rose-500' : 'bg-teal-600'} active:bg-blue-500 duration-300 h-10 rounded-lg px-1`}>{countEqZero ? deleteIcon : resetIcon}</button>
    )
}