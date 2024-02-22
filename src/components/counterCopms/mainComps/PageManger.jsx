import { useContext, useEffect, useRef } from "react"

import NewPageButton from "../buttons/mainCompsButton/NewPageButton"
import CounterContext from '../../../context/counterContext/CounterContext'

export default () => {
    const { pages, pageActiveId, setPageActiveId } = useContext(CounterContext)
    const avtivePageButtonRef = useRef(null)

    useEffect(() => avtivePageButtonRef.current.scrollIntoView(), [pageActiveId])

    return (
        <div className="flex print:hidden h-12 px-4 gap-x-1 justify-start items-center sm:container mx-auto mt-2 ">
            <NewPageButton />

            <div id="pages-name-box" className="flex overflow-x-scroll font-semibold gap-x-1 h-full text-gray-700 bg-gray-100 rounded justify-start items-center">
                {
                    pages.map(page => {
                        const { pageId, pageName } = page
                        return pageActiveId == pageId ? <button ref={pageActiveId == pageId ? avtivePageButtonRef : null} key={pageId} className="h-full px-2 bg-teal-500 text-white active:bg-teal-600 whitespace-nowrap">{pageName}</button> : <button ref={pageActiveId == pageId ? avtivePageButtonRef : null} key={pageId} className="h-full px-2 active:bg-gray-200 whitespace-nowrap" onClick={() => setPageActiveId(pageId)}>{pageName}</button>
                    })
                }
            </div>

        </div>

    )
}