import InputCounter from './childers/InputCounter'
import Counter from './childers/CounterItem'
import MinusButton from '../../../buttons/mainCompsButton/MinusButton'
import PlusButton from '../../../buttons/mainCompsButton/PlusButton'
import RemoveButton from '../../../buttons/mainCompsButton/RemoveButton'
import CounterContext from '../../../../../context/counterContext/CounterContext'
import { useContext, useEffect, useRef, useState } from 'react'


export default () => {
    const { items, setThereIsCountNum } = useContext(CounterContext)
    const [elements, setElements] = useState()
    const listBoxRef = useRef()

    useEffect(_ => {
        const elements = items.map((item, i) => {


            return (
                <li className='bg-white border-dashed border-2 border-transparent p-2 pb-0 rounded-lg block' key={item.key} data-key={item.key}>
                    <div className='flex justify-between gap-x-4 mb-3'>
                        <div className='flex flex-col gap-3'>
                            <PlusButton dataKey={item.key} />
                            <MinusButton dataKey={item.key} />
                        </div>
                        <div className='flex w-full flex-col justify-between items-start gap-x-1'>
                            <div className='flex w-full justify-between gap-x-3'>
                                <span className="basis-full block font-bold text-sm xsm:text-base sm:text-lg">{item.item}</span>
                                <div className='flex gap-x-1'>
                                  {item.count ? <Counter item={item} dataKey={item.key} /> : ''}
                                  <RemoveButton dataKey={item.key} countEqZero={item.count ? false : true} />
                                </div>
                            </div>
                            <div className='w-full'>
                                <InputCounter dataKey={item.key} />
                            </div>
                        </div>
                    </div>
                </li>
            )
        })

        let countHave = false
        for (let i = 0; i < items.length; i++) {
            if (items[i].count) {
                countHave = true
                break;
            } else {
                countHave = false
            }
        }
        setThereIsCountNum(countHave)

        setElements(elements)

    }, [items])

    return (
        <>
            {items[0] ?
                <ul ref={listBoxRef} className="gap-y-3 bg-transparent relative overflow-y-hidden flex flex-col">
                    {elements}
                </ul>
                :
                <h3 className="sm:container py-24 font-bold text-gray-300 flex justify-center items-center md:px-10 mx-auto p-5">لا يوجد اي عنصر مضاف، أضف عناصر لتظهر هنا</h3>
            }
        </>
    )
}