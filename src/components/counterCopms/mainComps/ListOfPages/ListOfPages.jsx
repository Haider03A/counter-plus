import { useState } from 'react'
import ListOfItems from './listOfItems/ListOFItems'
import AddPages from '../creatorComps/AddPages'

export default () => {
    const [show, setShow] = useState(true)

    const onClickHandler = (e) => {
        setShow(!show)
    }

    const arrowIcon = <svg className={`${show ? 'rotate-0' : 'rotate-90'} duration-300 stroke-3 inline-block stroke-white h-8 fill-none`} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve"><path strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="m20.5 11.5-6 6-6-6"></path></svg>
    return (
        <ul className='flex flex-col gap-y-3 pb-32'>
            <li><AddPages /></li>
            <li className={`${show ? 'border-sky-300' : 'border-transparent'} max-h-100 overflow-y-auto border duration-300`}>
                <button onClick={onClickHandler} className={`${show ? 'rounded-bl' : 'rounded'} active:bg-indigo-500 flex justify-center items-center duration-300  pl-3 rounded-bl text-right mb-3 bg-sky-600 text-white font-semibold`}>
                    {arrowIcon}
                    قائمة كهرباء
                    {show ? <span className='h-3 w-3 mr-3 bg-green-500 rounded-full inline-block'></span> : ''}
                </button>
                {show ? <ListOfItems /> : ''}
            </li>
        
        </ul>
    )
}