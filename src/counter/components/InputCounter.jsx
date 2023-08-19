import { useContext, useEffect, useState } from 'react'
import CounterContext from './context/CounterContext'

export default ({ dataKey }) => {
    const { items, setItems, maxCount, minCount } = useContext(CounterContext)
    const [butVisible, setButVisible] = useState(false)
    const [butMinus, setButMinus] = useState(false)
    const [inputNotVaild, setInputNotVaild] = useState(false)
    const [theEndValue, setTheEndValue] = useState('')

    useEffect(() => {
        theEndValue ? setButVisible(true) : setButVisible(false);
        theEndValue.toString()[0] == '-' ? setButMinus(true) : setButMinus(false);

        theEndValue == 0 ? setTheEndValue('') : '';
        theEndValue > maxCount ? setTheEndValue(maxCount) : '';

    }, [theEndValue])

    const onChangeHandler = e => setTheEndValue(+(e.target.value))

    const calcCounter = (inputRef) => {
        if (theEndValue) {
            const cloneItems = [...items]
            for (let i = 0; i < cloneItems.length; i++) {
                let count = cloneItems[i].count

                if (cloneItems[i].key == dataKey) {

                    const resoltCount = count + theEndValue
                    if (resoltCount <= maxCount && resoltCount >= minCount) {
                        cloneItems[i].count = resoltCount
                        setInputNotVaild(false)
                        inputRef.focus()
                        inputRef.value = ''
                        setTheEndValue('')
                        break;
                    } else {
                        setInputNotVaild(true)
                        inputRef.focus()
                    }

                }
            }
            setItems(cloneItems)
        }
    }



    const onKeydownHandker = (e) => {
        const inputRef = e.target
        if (e.key == 'Enter') {
            calcCounter(inputRef)
        }
    }

    const onClickHandler = (e) => {
        const inputRef = e.target.parentElement.lastElementChild
        calcCounter(inputRef)

    }



    return (
        <div className="font-bold flex gap-x-1 basis-full justify-end 2sm:basis-auto 2sm:justify-normal">
            {butVisible &&
                <button onClick={onClickHandler} className={`${butMinus ? 'bg-red-500' : 'bg-blue-500'} h-12 px-3 bg-blue-500 text-white rounded-lg`}>حساب</button>}
            <input dir='ltr' type="number" value={theEndValue} min={0} placeholder="ادخل رقما" onKeyDown={onKeydownHandker} onChange={onChangeHandler} className={`${inputNotVaild ? 'focus:border-b-red-500' : 'focus:border-b-blue-500'} w-28 h-12 placeholder:text-right  bg-gray-200 bg-opacity-50 outline-none p-2.5 border-b-4 border-transparent duration-300 rounded-lg`} />
        </div>
    )
}