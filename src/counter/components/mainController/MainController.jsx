import { useContext } from 'react'
import CounterContext from '../context/CounterContext'
import CopyToClipboard from "./CopyToClipboard"
import RemoveAllItems from "./RemoveAllItems"
import ResetAllCounters from "./ResetAllCounters"

export default () => {
    const { items, thereIsCountNum, setThereIsCountNum } = useContext(CounterContext)

    return (
        <div className="sm:container text-xs font-bold flex w-full gap-1 justify-between p-5 mx-auto flex-wrap">
            {items[0] && <CopyToClipboard />}
            <div className="flex gap-1 flex-wrap basis-full justify-end 2sm:basis-auto 2sm:justify-normal">
                {thereIsCountNum && <ResetAllCounters />}
                {items[0] && <RemoveAllItems />}
            </div>
        </div>
    )
}