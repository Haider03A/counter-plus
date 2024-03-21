import {useContext, useEffect, useRef} from 'react'
import CounterContext from '../../../../context/counterContext/CounterContext'

export default () => {
    const editItemInputRef = useRef(null)
    const { items, setItems, itemActiveId, setItemActiveId } = useContext(CounterContext)
    
    useEffect(() => {
        const { item } = items.find(item => item.key == itemActiveId)
        editItemInputRef.current.value = item
        editItemInputRef.current.focus()
        
    }, [])

    const onKeydownHandker = (e) => {
        const inputValue = String(e.target.value).trim()
        console.log(e);
        if (e.key == "Enter" && inputValue ) {
            const newItem = items.map(item => {
                if (item.key == itemActiveId) {
                    item.item = inputValue
                    return item
                }
                return item
            })
            setItems(newItem)
            setItemActiveId(null)
        }
    }

    return(
        <form>
            <input ref={editItemInputRef} type='url' onKeyDown={onKeydownHandker} onFocus={(e) => e.target.select()} className='absolute inset-0 bg-gray-100 border-b-4 border-transparent text-gray-950 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full sm:w-2/4 p-2.5' onBlur={()=> setItemActiveId(null)} />
        </form>
    )
}