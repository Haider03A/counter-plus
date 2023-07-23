import '../style/ListOFItems.css'
import MinusButton from './MinusButton'
import PlusButton from './PlusButton'
import RemoveButton from './RemoveButton'
import CounterContext from './context/CounterContext'
import { useContext, useEffect, useRef, useState } from 'react'


export default () => {
    const { items } = useContext(CounterContext)
    const [elements, setElements] = useState()
    useEffect(_ => {
        const elements = items.map(item => {
            return(<li data-key={item.key} key={item.key}>
                <PlusButton />
                <MinusButton />
                <span className="item">{item.item}</span>
                <RemoveButton />
                <span className="counter">{item.count}</span>
            </li>)
        })
        
        setElements(elements)

    }, [items])

    return (
        <ul className="list">
            {elements}
        </ul>
    )
}