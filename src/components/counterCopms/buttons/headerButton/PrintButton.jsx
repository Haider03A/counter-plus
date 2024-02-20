import { useContext, useState } from 'react'
import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ butStyle }) => {
    const { printMode, setPrintMode } = useContext(CounterContext)

    const clickHandler = () => {
        window.print()
    }

    window.addEventListener("afterprint", () => {
        
    });

    return (
        <button onClick={clickHandler} className={`${butStyle}`}>طباعة الصفحات</button>
    )
}