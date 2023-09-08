import { useContext, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ item, dataKey }) => {
    const { items, setItems, setNewCountNum, newCountNum } = useContext(CounterContext)
    const [countNumAlert, setCountNumAlert] = useState(null)
    const [valueMinus, setValueMinus] = useState('normal')

    const duration = .3

    useEffect(() => {
        if (newCountNum && newCountNum.key == item.key) {
            const valueMinus = newCountNum.newCountNum.toString()[0] == '-'

            const spanRef = <motion.span dir="ltr" className={`absolute font-extrabold top-0 left-0 block leading-10 px-3 rounded-lg ${valueMinus ? 'text-rose-500' : 'text-indigo-500'}`}
                initial={{ left: 0, opacity: 0 }}
                animate={{ left: '105%', opacity: 1 }}
                transition={{ duration }}
                exit={{ opacity: 0 }}>{valueMinus ? newCountNum.newCountNum : '+' + newCountNum.newCountNum}</motion.span>

            setValueMinus(valueMinus);
            setCountNumAlert(spanRef)

            setTimeout(() => {
                setNewCountNum(null)
                setValueMinus('normal')
                setCountNumAlert(null)
            }, duration * 1000)
        }
    }, [items])

    useEffect(() => {
        setNewCountNum(null)
    }, [countNumAlert])

    const onInputHandler = (e) => {
        const cloneItems = [...items]
        const selectValue  = e.target.value
        for (let i = 0; i < cloneItems.length; i++) {
            if (cloneItems[i].key == dataKey) {
                cloneItems[i].unit = selectValue
                setItems(cloneItems)
                break
            }
        }
        console.log(item);

    } 



    return (
        <div className='text-white font-bold h-10 relative'>
            <span dir='ltr' className={`h-full flex gap-x-1 duration-300 leading-10 px-3 ${(valueMinus == 'normal' && 'bg-teal-600') || (valueMinus && 'bg-rose-500') || (!valueMinus && 'bg-indigo-500')} rounded-lg`}>{item.unit && <span>{item.unit}</span>} {item.count}</span>
            <select onInput={onInputHandler} className="opacity-0 w-full h-full absolute top-0 left-0 ">
                <option className="text-black font-bold" defaultValue value="">عدد</option>
                <option className="text-black font-bold" value="متر">متر</option>
                <option className="text-black font-bold" value="ملم">ملم</option>
                <option className="text-black font-bold" value="باكيت">باكيت</option>
                <option className="text-black font-bold" value="لفة">لفة</option>
                <option className="text-black font-bold" value="ربطة">ربطة</option>
                <option className="text-black font-bold" value="قطعة">قطعة</option>
                <option className="text-black font-bold" value="كيس">كيس</option>
            </select>
            <AnimatePresence>
                {countNumAlert}
            </AnimatePresence>
        </div>
    )
}