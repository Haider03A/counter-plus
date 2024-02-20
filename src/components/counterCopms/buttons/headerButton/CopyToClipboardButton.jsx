import { useContext, useState } from 'react'
import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ butStyle }) => {
    const { items } = useContext(CounterContext)
    const [copied, setCopied] = useState(false)
    const clickHandler = () => {
        if (items[0]) {
            let toClipboard = ''
            items.forEach(({ item, count, unit }) => {
                toClipboard += `${item}\t${count ? `${count} ${unit ? unit : ''}` : ''}\n`
            });
            navigator.clipboard.writeText(toClipboard).then(
                () => {
                    setCopied(true)
                    setTimeout(() => setCopied(false), 1500)
                })
        }
    }

    return (
            <button onClick={clickHandler} className={`${butStyle}`}>نسخ الى الحافظة</button>
    )
}