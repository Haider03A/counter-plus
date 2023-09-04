import InputCounter from './childers/InputCounter'
import MinusButton from '../buttons/mainCompsButton/MinusButton'
import PlusButton from '../buttons/mainCompsButton/PlusButton'
import RemoveButton from '../buttons/mainCompsButton/RemoveButton'
import CounterContext from '../../../context/counterContext/CounterContext'
import { useContext, useEffect, useRef, useState } from 'react'
import Counter from './childers/CounterItem'
import MoverButton from './childers/MoverItem'


export default () => {
    const { items, setThereIsCountNum } = useContext(CounterContext)
    const [elements, setElements] = useState()
    const listBoxRef = useRef()

    useEffect(_ => {
        const elements = items.map((item, i) => {


            return (
                <li style={{height: 200}} className={`${false ? 'bg-gray-50' : 'bg-white'} test mb-3 border-dashed border-2 border-transparent p-2 pb-0 rounded-lg block`} key={item.key} data-key={item.key}>
                    <div className='flex gap-x-4 mb-3'>
                        <div className='flex flex-col gap-3'>
                            <PlusButton dataKey={item.key} />
                            <MinusButton dataKey={item.key} />
                        </div>
                        <div className='flex w-full  justify-between items-start gap-x-1'>
                            <span className="basis-full font-bold text-lg">{item.item}</span>
                            <div className='flex flex-col flex-wrap justify-between items-end 3sm:flex-nowrap h-full gap-4'>
                                <div className='flex gap-x-1'>
                                    {item.count ? <Counter item={item} /> : ''}
                                    <RemoveButton dataKey={item.key} countEqZero={item.count ? false : true} />
                                </div>
                                <div className=''>
                                    <InputCounter dataKey={item.key} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <MoverButton listBoxRef={listBoxRef} items={items} />
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
                <ul ref={listBoxRef} className="sm:container bg-transparent relative overflow-y-hidden flex flex-col pb-28 md:px-10 mx-auto px-5 pt-5">
                    {elements}
                </ul>
                :
                <h3 className="sm:container py-24 font-bold text-gray-300 flex justify-center items-center md:px-10 mx-auto p-5">لا يوجد اي عنصر مضاف، أضف عناصر لتظهر هنا</h3>
            }
        </>
    )
}