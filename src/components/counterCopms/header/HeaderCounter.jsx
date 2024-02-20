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
                <div className="absolute overflow-hidden top-[calc(100%-10px)] right-4 w-44 z-10 flex flex-col items-start bg-white divide-y divide-gray-100 rounded-lg shadow">
                    {items[0] && <CopyToClipboardButton butStyle={childrenButtonStyle} />}
                    {items[0] && <PrintTemplete butStyle={childrenButtonStyle} />}
                    {thereIsCountNum && <ResetAllCountersButton butStyle={childrenButtonStyle} />}
                    {items[0] && <RemoveAllItemsButton butStyle={childrenButtonStyle} />}
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
        if (e.target != optionButRef.current && showOptionsBut) {
            setShowOptionsBut(false)
        }
    })

    return (
        <div className='shadow print:hidden relative'>
            <div className='sm:container px-4 mx-auto flex justify-between items-center h-16 relative'>

                <button ref={optionButRef} className={`${showOptionsBut ? 'bg-gray-200' : 'bg-gray-100'} font-semibold p-2 rounded-md focus:outline-none`} type="button" onClick={_ => setShowOptionsBut(a => !a)}>
                    <svg className="w-5 h-5 pointer-events-none fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 15">
                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                </button>
                <a href="#">
                    <svg className="h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 237.54462935598863"><defs /><g featurekey="symbolFeature-0" transform="matrix(6.150691880687768,0,0,6.150691880687768,76.16094326845253,-13.85443381319461)" fill="#111111"><path xmlns="http://www.w3.org/2000/svg" d="M20.53 8.77L14.9 3.4C13.3 1.87 10.69 1.87 9.09 3.4L3.47 8.77C2.69 9.51 2.25 10.54 2.25 11.59V17.77C2.25 19.96 4.1 21.74 6.38 21.74H17.63C19.9 21.74 21.76 19.96 21.76 17.77V11.59C21.76 10.54 21.32 9.51 20.54 8.77H20.53ZM20.25 17.77C20.25 19.13 19.07 20.24 17.62 20.24H6.38C4.93 20.24 3.75 19.13 3.75 17.77V11.59C3.75 10.94 4.02 10.32 4.51 9.85L10.13 4.48C10.65 3.99 11.32 3.74 12 3.74C12.68 3.74 13.35 3.99 13.87 4.48L19.5 9.85C19.99 10.32 20.26 10.93 20.26 11.59V17.77H20.25Z" fill="black" /><path xmlns="http://www.w3.org/2000/svg" d="M14.18 13.27L11.46 12.59L13.52 10.53C13.81 10.24 13.81 9.76 13.52 9.47C13.23 9.18 12.75 9.18 12.46 9.47L9.46001 12.47C9.27001 12.66 9.20001 12.94 9.27001 13.2C9.34001 13.46 9.55001 13.66 9.81001 13.73L12.53 14.41L10.47 16.47C10.18 16.76 10.18 17.24 10.47 17.53C10.62 17.68 10.81 17.75 11 17.75C11.19 17.75 11.38 17.68 11.53 17.53L14.53 14.53C14.72 14.34 14.79 14.06 14.72 13.8C14.65 13.54 14.44 13.34 14.18 13.27Z" fill="black" /></g><g id="SvgjsG1015" featurekey="nameFeature-0" transform="matrix(2.0514222424179502,0,0,2.0514222424179502,-5.743982180950826,117.92669815843827)" fill="#111111"><path d="M2.8 11.239999999999998 q1.48 -0.24 2.92 -0.24 t2.96 0.24 l0 11.28 l9.64 0 l0 -11.28 q1.48 -0.24 2.92 -0.24 t2.96 0.24 l0 28.76 q-1.52 0.24 -2.96 0.24 t-2.92 -0.24 l0 -12.44 l-9.64 0 l0 12.44 q-1.52 0.24 -2.96 0.24 t-2.92 -0.24 l0 -28.76 z M41.519999999999996 40.48 q-3.24 0 -5.6 -1.12 t-3.88 -3.1 t-2.26 -4.68 t-0.74 -5.9 t0.74 -5.94 t2.26 -4.74 t3.88 -3.12 t5.6 -1.12 t5.6 1.12 t3.88 3.12 t2.26 4.74 t0.74 5.94 t-0.74 5.9 t-2.26 4.68 t-3.88 3.1 t-5.6 1.12 z M41.519999999999996 35.6 q6.2 0 6.2 -9.92 q0 -4.96 -1.5 -7.44 t-4.66 -2.48 q-6.28 0 -6.28 9.92 t6.24 9.92 z M58.839999999999996 11.239999999999998 q1.48 -0.24 2.86 -0.24 t2.9 0.24 l0 23.72 l9.96 0 q0.12 0.68 0.16 1.3 t0.04 1.22 t-0.04 1.22 t-0.16 1.3 l-15.72 0 l0 -28.76 z M78.67999999999999 11.239999999999998 q1.68 -0.2 3.52 -0.34 t4.08 -0.14 q7.56 0 11.5 3.76 t3.94 11.3 t-4 11.1 t-11.88 3.56 q-2.04 0 -3.76 -0.14 t-3.4 -0.34 l0 -28.76 z M84.55999999999999 35.36 q0.36 0.04 0.92 0.08 t1.36 0.04 q1.84 0 3.42 -0.42 t2.74 -1.54 t1.84 -3 t0.68 -4.8 t-0.68 -4.84 t-1.84 -3.04 t-2.66 -1.58 t-3.18 -0.46 l-1.28 0 q-0.76 0.04 -1.32 0.12 l0 19.44 z M106.55999999999999 11.239999999999998 l16.32 0 q0.24 1.2 0.24 2.48 t-0.24 2.48 l-10.48 0 l0 6.24 l8.32 0 q0.24 1.28 0.24 2.52 t-0.24 2.48 l-8.32 0 l0 7.6 l10.76 0 q0.24 1.2 0.24 2.48 t-0.24 2.48 l-16.6 0 l0 -28.76 z M128.08 11.239999999999998 q1.76 -0.2 3.3 -0.34 t3.42 -0.14 q2.2 0 4.34 0.4 t3.86 1.42 t2.78 2.76 t1.06 4.42 q0 1.6 -0.4 2.82 t-1.02 2.14 t-1.34 1.58 t-1.36 1.06 l-0.68 0.44 l7 12.16 l-1.68 0.16 q-0.88 0.08 -1.8 0.08 q-1.52 0 -3 -0.24 l-7.52 -13.36 l0.96 -0.48 q0.56 -0.28 1.36 -0.72 t1.54 -1.1 t1.26 -1.6 t0.52 -2.22 q0 -2.52 -1.44 -3.7 t-3.72 -1.18 q-0.88 0 -1.6 0.12 l0 24.28 l-1.44 0.12 q-0.72 0.08 -1.4 0.08 t-1.44 -0.04 t-1.56 -0.16 l0 -28.76 z" /></g><g id="SvgjsG1016" featurekey="sloganFeature-0" transform="matrix(1.168389515467903,0,0,1.168389515467903,28.28901116729308,214.06274519358908)" fill="#111111"><path d="M11.025 6.035 l0 2.2266 l-6.9922 0 l0 3.5156 l6.6602 0 l0 2.3145 l-6.6895 0 l0 3.6621 l7.1582 0 l0 2.2461 l-9.6973 0 l0 -13.965 l9.5605 0 z M32.8417625 6.035 l0 11.719 l5.5469 0 l0 2.2461 l-8.1348 0 l0 -13.965 l2.5879 0 z M67.089453125 6.035 l0 2.2266 l-6.9922 0 l0 3.5156 l6.6602 0 l0 2.3145 l-6.6895 0 l0 3.6621 l7.1582 0 l0 2.2461 l-9.6973 0 l0 -13.965 l9.5605 0 z M97.451515625 19.41406 c-1.2044 0.45573 -2.5716 0.68359 -4.1016 0.68359 c-5.013 0 -7.5195 -2.4251 -7.5195 -7.2754 c0 -4.5898 2.5065 -6.8848 7.5195 -6.8848 c1.53 0 2.8972 0.22786 4.1016 0.68359 l0 2.3438 c-1.2044 -0.52083 -2.5065 -0.78125 -3.9063 -0.78125 c-3.3528 0 -5.0293 1.5462 -5.0293 4.6387 c0 3.3528 1.6765 5.0293 5.0293 5.0293 c1.3997 0 2.7019 -0.26042 3.9063 -0.78125 l0 2.3438 z M125.722953125 6.035 l0 2.2461 l-4.0039 0 l0 11.719 l-2.5879 0 l0 -11.719 l-4.0039 0 l0 -2.2461 l10.596 0 z M143.886675 19.980469 l0 -13.945 l6.3477 0 c2.8516 0 4.2773 1.2468 4.2773 3.7402 c0 1.6862 -1.1101 3.0827 -3.3301 4.1895 l4.4238 6.0352 l-3.2617 0 l-4.248 -6.084 l0 -1.1816 c2.4739 -0.42317 3.7109 -1.3835 3.7109 -2.8809 c0 -1.0286 -0.57942 -1.543 -1.7383 -1.543 l-3.5449 0 l0 11.67 l-2.6367 0 z M176.113246875 6.035 l0 13.965 l-2.5879 0 l0 -13.965 l2.5879 0 z M206.87534375 19.41406 c-1.2044 0.45573 -2.5716 0.68359 -4.1016 0.68359 c-5.013 0 -7.5195 -2.4251 -7.5195 -7.2754 c0 -4.5898 2.5065 -6.8848 7.5195 -6.8848 c1.53 0 2.8972 0.22786 4.1016 0.68359 l0 2.3438 c-1.2044 -0.52083 -2.5065 -0.78125 -3.9063 -0.78125 c-3.3528 0 -5.0293 1.5462 -5.0293 4.6387 c0 3.3528 1.6765 5.0293 5.0293 5.0293 c1.3997 0 2.7019 -0.26042 3.9063 -0.78125 l0 2.3438 z" /></g></svg>
                </a>
                {dcopDownOptionList()}
            </div>


        </div>

    )
}