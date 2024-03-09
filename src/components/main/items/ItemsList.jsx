// import IncreaseButton from './buttons/IncreaseButton'
// import DecrementButton from './buttons/DecrementButton'
// import RemoveButton from './buttons/RemoveButton'
import InputCounter from './children/InputCounter'
import Counter from './children/CounterItem'

// import { useContext, useEffect, useRef, useState, pageActiveId } from 'react'
import { useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'


export default () => {
    const { items } = useSelector(state => state.pageItem)
    // const { items, setThereIsCountNum, pageActiveId } = useContext(CounterContext)
    const [elements, setElements] = useState()
    const listBoxRef = useRef()

    useEffect(_ => {
        const elements = items.map((item) => {
            // if (item.idPage == pageActiveId || pageActiveId === 0)
            if (true) {
                return (
                    <li className="bg-white test mb-3 border-dashed border-2 border-transparent p-2 pb-0 rounded-lg block" key={item.itemId} >
                        <div className='flex justify-between gap-x-4 mb-3'>
                            <div className='flex flex-col gap-3'>
                                {/* <IncreaseButton dataKey={item.key} />
                                <DecrementButton dataKey={item.key} /> */}
                            </div>
                            <div className='flex w-full flex-col justify-between items-start gap-y-2'>
                                <div className='flex w-full justify-between gap-x-3'>
                                    <span className="basis-full block font-bold text-sm 2sm:text-base sm:text-lg">{item.item}</span>
                                    <div className='flex gap-x-1'>
                                        {item.count ? <Counter item={item} /> : ''}
                                        {/* <RemoveButton dataKey={item.key} countEqZero={item.count ? false : true} /> */}
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <InputCounter item={item} />
                                </div>
                            </div>
                        </div>
                    </li>


                )
            }

        })

        // let countHave = false
        // for (let i = 0; i < items.length; i++) {
        //     if (items[i].count) {
        //         countHave = true
        //         break;
        //     } else {
        //         countHave = false
        //     }
        // }
        // setThereIsCountNum(countHave)

        setElements(elements)

    }, [items])


    return (
        <>
            {items[0] ?
                <ul ref={listBoxRef} className="print:hidden sm:container bg-transparent relative overflow-y-hidden flex flex-col pb-28 md:px-10 mx-auto px-5 pt-5">
                    {elements}
                </ul>
                :
                <h3 className="print:hidden sm:container py-24 font-bold text-gray-300 flex justify-center items-center md:px-10 mx-auto p-5">لا يوجد اي عنصر مضاف، أضف عناصر لتظهر هنا</h3>
            }
        </>
    )

}