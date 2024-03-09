import { useRef } from 'react'
import { useSelector, useDispatch, } from 'react-redux'

import { addItem } from '../../../features/pageItem/pageItemSlice'

export default () => {
    const dispatch = useDispatch()
    const inputRef = useRef()

    const addItemHandler = _ => {
        const inputValue = inputRef.current.value.trim()

        dispatch(addItem(inputValue))

        inputRef.current.value = ''
        inputRef.current.focus()

    }

    return (
        <div style={{backgroundColor: '#fdfdfd'}} className="print:hidden font-bold z-20 flex w-full gap-x-1 items-center p-3 pb-7 pt-0 fixed bottom-0 right-0">
            <button onClick={addItemHandler} className="active:bg-blue-500 duration-300 h-12 px-3 bg-cyan-800 text-stone-50 rounded-lg">إضافة</button>
            <textarea ref={inputRef} placeholder="أضاف العناصر" style={{minHeight: '3rem'}} className="h-12 bg-gray-200 bg-opacity-50 outline-none basis-full p-2.5 border-b-4 border-transparent duration-300 focus:border-b-blue-500 rounded-lg"></textarea>
        </div>
    )
}