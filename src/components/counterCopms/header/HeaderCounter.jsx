import { useContext, useRef, useState } from 'react'

import CounterContext from '../../../context/counterContext/CounterContext'
import CopyToClipboardButton from "../buttons/headerButton/CopyToClipboardButton"
import RemoveAllItemsButton from "../buttons/headerButton/RemoveAllItemsButton"
import ResetAllCountersButton from "../buttons/headerButton/ResetAllCountersButton"
import PrintTemplete from '../buttons/headerButton/PrintButton'

export default () => {
    const { items, thereIsCountNum } = useContext(CounterContext)
    const optionButRef = useRef()
    const [showOptionsBut, setShowOptionsBut] = useState(false)
    const childrenButtonStyle = 'text-lg font-semibold w-full text-right px-4 py-2 active:bg-gray-100 text-gray-700'

    const dcopDownOptionList = _ => {
        if (items[0] && showOptionsBut) {
            return (
                <div className="absolute overflow-hidden top-[calc(100%-20px)] right-4 w-44 z-10 flex flex-col items-start bg-white divide-y divide-gray-100 rounded-lg shadow">
                    {items[0] && <CopyToClipboardButton butStyle={childrenButtonStyle} />}
                    {thereIsCountNum && <ResetAllCountersButton butStyle={childrenButtonStyle} />}
                    {items[0] && <RemoveAllItemsButton butStyle={childrenButtonStyle} />}
                    {items[0] && <PrintTemplete butStyle={childrenButtonStyle} />}
                </div>
            )
        } else if (showOptionsBut) {
            return (
                <div className="absolute overflow-hidden top-[calc(100%-20px)] right-4 z-10 items-start bg-white divide-y divide-gray-100 rounded-lg shadow">
                    <span className={childrenButtonStyle}>لا توجد اي عناصر</span>
                </div>
            )
        }
    }

    document.body.addEventListener('click', e => {
        if (e.target != optionButRef.current && showOptionsBut ) {
            setShowOptionsBut(false)
        }
    })

    return (
        <div className='print:hidden sm:container mx-auto h-20 p-4 relative'>
            <button ref={optionButRef} className={`${showOptionsBut ? 'bg-gray-200' : 'bg-gray-100'} font-semibold p-2 rounded-md focus:outline-none`} type="button" onClick={_ => setShowOptionsBut(a => !a)}>
                <svg className="w-5 h-5 pointer-events-none fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>
            {dcopDownOptionList()}


        </div>

    )
}