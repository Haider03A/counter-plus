import { useContext } from 'react'
import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ butStyle }) => {
    const { printMode, setPrintMode } = useContext(CounterContext)

    return (
        <button className={`${butStyle} ${printMode ? 'bg-gray-100': ''}`} onClick={() => {setPrintMode(a => !a)}}>{printMode ? 'وضع التعديل' : 'وضع الطباعة'}</button>
    )
}