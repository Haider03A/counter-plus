import InputCounter from './InputCounter'
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
            return (
                <li className='flex flex-col gap-y-4' key={item.key} data-key={item.key}>
                    <div className='flex justify-between items-center'>
                        <span className="font-bold text-lg">{item.item}</span>
                        <div className='flex items-center gap-x-1' data-key={item.key}>
                            <span dir='ltr' className="h-10 leading-10 px-3 bg-blue-500 rounded-lg text-white font-bold">{item.count}</span>
                            <RemoveButton />
                        </div>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <div className='flex gap-x-1' data-key={item.key}>
                            <PlusButton />
                            <MinusButton />
                        </div>
                        <InputCounter dataKey={item.key} value={item.inputNum} />
                    </div>

                </li>
            )
        })

        setElements(elements)

    }, [items])

    return (
        <ul className="container pb-28 md:px-10 mx-auto px-5 pt-5">
            {elements}
        </ul>
    )
}