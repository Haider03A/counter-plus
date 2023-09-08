import { useContext, useState } from 'react'
import CounterContext from '../../../../context/counterContext/CounterContext'

export default () => {
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

    const copiedIcon = <svg className={`${copied ? 'fill-sky-600' : 'fill-transparent'} h-6 duration-300 pointer-events-none stroke-1`} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512">
        <path d="M432 64l-240 240-112-112-80 80 192 192 320-320z" />
    </svg>

    return (
        <div className='flex items-center gap-x-1'>
            <button onClick={clickHandler} className="active:bg-blue-700 duration-300 h-12 px-3 bg-sky-600 text-stone-50 rounded-lg">نسخ الى الحافظة</button>
            <span className={`${copied ? 'bg-gray-200' : 'fill-transparent'} flex justify-center duration-300 items-center h-12 px-3 rounded-lg`}>{copiedIcon}</span>
        </div>
    )
}