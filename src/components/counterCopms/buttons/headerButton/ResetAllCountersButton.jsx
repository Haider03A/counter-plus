import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import CounterContext from '../../../../context/counterContext/CounterContext'

export default () => {
    const { items, setItems } = useContext(CounterContext)
    const resetKey = 2212

    const clickHandler = () => {
        const promptAlert = window.prompt('اذا كنت تريد إعادة ضبط جميع عدادات العناصر اكتب ' + resetKey)
        const cloneItems = [...items]

        if (promptAlert == resetKey) {

            for (let i = 0; i < cloneItems.length; i++) {
                cloneItems[i].count = 0
            }

            setItems(cloneItems)

        } else {
            alert('لم يتم إعادة ضبط اي من العناصر بسبب الأدخال الخاطأ')
        }

    }
    return (
        <>
            <AnimatePresence>
                {items[0] &&
                    <motion.button
                        initial={{ opacity: 0, scale: '50%' }}
                        transition={{ duration: 2, stiffness: 120, type: 'tween' }}
                        animate={{ opacity: 1, scale: '100%' }}
                        exit={{ opacity: 0, scale: 0 }}
                        onClick={clickHandler}
                        className="active:bg-blue-500 duration-300 h-12 px-3 bg-teal-600 text-stone-50 rounded-lg">
                        اعادة ضبط الكل</motion.button>}
            </AnimatePresence>
        </>
    )
}