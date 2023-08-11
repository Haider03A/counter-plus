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
    
    const deleteIcon = <svg className='h-6 pointer-events-none stroke-white stroke-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <path d="M10 11V17" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11V17" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 7H20" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

    return(
        <button onClick={removeItem} className="h-10 bg-red-500 rounded-lg px-1">{deleteIcon}</button>
    )
}