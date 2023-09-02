import InputCounter from './childers/InputCounter'
import MinusButton from '../buttons/mainCompsButton/MinusButton'
import PlusButton from '../buttons/mainCompsButton/PlusButton'
import RemoveButton from '../buttons/mainCompsButton/RemoveButton'
import CounterContext from '../../../context/counterContext/CounterContext'
import { useContext, useEffect, useState } from 'react'
import Counter from './childers/CounterItem'
import MoverButton from './childers/MoverItem'


export default () => {
    const { items, setThereIsCountNum } = useContext(CounterContext)
    const [elements, setElements] = useState()

    useEffect(_ => {
        const elements = items.map((item, i) => {


            return (
                <li style={{order: i}} className={`${i % 2 != 0 ? 'bg-gray-50' : 'bg-gray-100'} p-2 pb-0 rounded-lg`} key={item.key} data-key={item.key}>
                    <div className='flex gap-x-4'>
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
                    <MoverButton />
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
                <ul className="sm:container flex flex-col gap-y-3 pb-28 md:px-10 mx-auto px-5 pt-5">
                    {elements}
                </ul>
                :
                <h3 className="sm:container py-24 font-bold text-gray-300 bg-white flex justify-center items-center md:px-10 mx-auto p-5">لا يوجد اي عنصر مضاف، أضف عناصر لتظهر هنا</h3>
            }
        </>
    )
}