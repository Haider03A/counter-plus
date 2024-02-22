import { useContext, useState } from 'react'
import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ butStyle }) => {
    const { setPrintMode } = useContext(CounterContext)

    const clickHandler = async () => {
        await setPrintMode(true)
        window.print()
    }

    window.addEventListener("afterprint", () => {
        setPrintMode(a => a)
    });

    return (
        <button onClick={clickHandler} className={`${butStyle}`}>طباعة الصفحات</button>
    )
}