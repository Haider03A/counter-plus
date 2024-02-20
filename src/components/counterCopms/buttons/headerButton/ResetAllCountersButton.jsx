import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ butStyle }) => {
    const { items, setItems } = useContext(CounterContext)
    const resetKey = 2212

    const clickHandler = () => {
        const promptAlert = window.prompt('اذا كنت تريد إعادة ضبط جميع عدادات العناصر اكتب ' + resetKey)
        const cloneItems = [...items]

        if (promptAlert == resetKey) {

            for (let i = 0; i < cloneItems.length; i++) {
                cloneItems[i].count = 0
                cloneItems[i].unit = '' 
            }

            setItems(cloneItems)

        } else {
            alert('لم يتم إعادة ضبط اي من العناصر بسبب الأدخال الخاطأ')
        }

    }
    return (
        <button onClick={clickHandler} className={`${butStyle}`}>اعادة ضبط الكل</button>
    )
}