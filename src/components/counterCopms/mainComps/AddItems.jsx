import CounterContext from '../../../context/counterContext/CounterContext'
import { useContext, useRef } from 'react'

export default () => {
    const { items, setItems, key, setKey } = useContext(CounterContext)
    const inputRef = useRef()

    const addItem = _ => {
        const inputValue = inputRef.current.value.trim()
        const cloneItems = [...items]

        if (inputValue[0] == '$' && inputValue[1] == '$') {
            let cloneKey = key
            let word = '';
            const words = [];

            for (let i = 2; i < inputValue.length; i++) {
                if(inputValue[i] != '\n' && inputValue[i] != '' && inputValue.length - 1 == i) {
                    word += inputValue[i]
                    words.push(word.trim())
                    word = ''
                } else if (inputValue[i] != '\n' && inputValue[i] != '') {
                    word += inputValue[i]
                } else {
                    words.push(word.trim())
                    word = ''
                }
            }

            words.forEach(word => {
                if (word != '') {
                    cloneItems.push({ key: cloneKey, item: word, count: 0, inputNum: ''})    
                    cloneKey+=1
                }
            })
            setKey(cloneKey)
            setItems(cloneItems)

        } else if (inputValue) {
            cloneItems.push({
                key,
                item: inputValue,
                count: 0,
                inputNum: ''
            })
            setItems(cloneItems)
            setKey(key + 1)
        }

        inputRef.current.value = ''
        inputRef.current.focus()

    }

    return (
        <div className="bg-white font-bold z-20 flex w-full gap-x-1 items-center p-3 pb-7 fixed bottom-0 right-0">
            <button onClick={addItem} className="active:bg-blue-500 duration-300 h-12 px-3 bg-cyan-800 text-stone-50 rounded-lg">إضافة</button>
            <textarea ref={inputRef} placeholder="أضاف العناصر" style={{minHeight: '3rem'}} className="h-12 bg-gray-200 bg-opacity-50 outline-none basis-full p-2.5 border-b-4 border-transparent duration-300 focus:border-b-blue-500 rounded-lg"></textarea>
        </div>
    )
}