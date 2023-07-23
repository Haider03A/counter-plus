import '../style/AddItems.css'
import CounterContext from './context/CounterContext'
import { useContext, useRef } from 'react'

export default () => {
    const { items, setItems, key, setKey } = useContext(CounterContext)
    const inputRef = useRef()

    const addItem = async _ => {
        const inputValue = inputRef.current.value.trim()
        const cloneItems = [...items]

        if (inputValue[0] == '$' && inputValue[inputValue.length - 1] == '$') {
            let word = '';
            const words = [];

           
            for (let i = 1; i < inputValue.length - 1; i++) {
                if (inputValue[i] != '\n' && inputValue[i] != '') {
                    word += inputValue[i]
                } else {
                    words.push(word.trim())
                    word = ''
                }
            }

            words.forEach(word => {
                if (word != '') {
                    cloneItems.push({ key, item: word, count: 0 })
                    setKey(key + 1)
                }
            })
            setItems(cloneItems)

        } else if (inputValue) {
            cloneItems.push({
                key,
                item: inputValue,
                count: 0
            })
            setItems(cloneItems)
            setKey(key + 1)
        }

        inputRef.current.value = ''
        inputRef.current.focus()

    }

    return (
        <div className="add-item-box container">
            <button onClick={addItem} className="button">إضافة</button>
            <textarea ref={inputRef} placeholder="أضاف العناصر" className="input" cols="30" rows="10"></textarea>
        </div>
    )
}