import { useContext } from 'react'

import CounterContext from '../../../context/counterContext/CounterContext'
import CopyToClipboardButton from "../buttons/headerButton/CopyToClipboardButton"
import RemoveAllItemsButton from "../buttons/headerButton/RemoveAllItemsButton"
import ResetAllCountersButton from "../buttons/headerButton/ResetAllCountersButton"
import PagesManger from '../mainComps/creatorComps/PagesManger'

export default () => {
    const { items, thereIsCountNum } = useContext(CounterContext)

    return (
        <div className='text-xs font-bold flex w-full gap-1 justify-start py-5 mx-auto flex-wrap'>
            <PagesManger />
            {items[0] && <CopyToClipboardButton />}
            {thereIsCountNum && <ResetAllCountersButton />}
            {items[0] && <RemoveAllItemsButton />}
        </div>


    )
}