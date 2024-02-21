import { useContext } from "react"

import NewPageButton from "../buttons/mainCompsButton/NewPageButton"
import CounterContext from '../../../context/counterContext/CounterContext'

export default () => {
    const { pages, pageActiveId, setPageActiveId } = useContext(CounterContext)

    return (
        <div className="flex print:hidden h-12 px-4 gap-x-1 justify-start items-center sm:container mx-auto mt-2 ">
            <NewPageButton />

            <div id="pages-name-box" className="flex overflow-x-scroll font-semibold gap-x-1 h-full text-gray-700 bg-gray-100 rounded justify-start items-center">
                <button key='all' className={`${pageActiveId == 'all' ? 'bg-teal-500 active:bg-teal-600 text-white' : 'active:bg-gray-200'} h-full px-2 whitespace-nowrap`} onClick={() => setPageActiveId('all')}>الكل</button>
                {
                    pages.map(page => {
                        const { id, pageName } = page
                        return pageActiveId == id ? <button key={id} className="h-full px-2 bg-teal-500 text-white active:bg-teal-600 whitespace-nowrap">{pageName}</button> : <button key={id} className="h-full px-2 active:bg-gray-200 whitespace-nowrap" onClick={() => setPageActiveId(id)}>{pageName}</button>
                    })
                }
            </div>

        </div>

    )
}