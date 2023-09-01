import { useContext, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ item }) => {
    const { items, setNewCountNum, newCountNum } = useContext(CounterContext)
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



    return (
        <div className='text-white font-bold h-10 relative'>
            {
                item.count &&
                <span dir='ltr' className={`h-full duration-300 block leading-10 px-3 ${(valueMinus == 'normal' && 'bg-teal-600') || (valueMinus && 'bg-rose-500') || (!valueMinus && 'bg-indigo-500')} rounded-lg`}>{item.count}</span>
            }
            <AnimatePresence>
                {countNumAlert}
            </AnimatePresence>
        </div>
    )
}