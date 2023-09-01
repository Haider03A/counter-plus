import { useContext } from 'react'

import CounterContext from '../../../context/counterContext/CounterContext'
import CopyToClipboardButton from "../buttons/headerButton/CopyToClipboardButton"
import RemoveAllItemsButton from "../buttons/headerButton/RemoveAllItemsButton"
import ResetAllCountersButton from "../buttons/headerButton/ResetAllCountersButton"

export default () => {
    const { items, thereIsCountNum } = useContext(CounterContext)

    return (
        <div className="sm:container text-xs font-bold flex w-full gap-1 justify-between p-5 mx-auto flex-wrap">
            {items[0] && <CopyToClipboardButton />}
            <div className="flex gap-1 flex-wrap basis-full justify-end 2sm:basis-auto 2sm:justify-normal">
                {thereIsCountNum && <ResetAllCountersButton />}
               <RemoveAllItemsButton />
            </div>
        </div>
    )
}