import { useRef, useContext } from "react"

import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ SetShowNawPageManger }) => {
    const { pages, setPages, pageId, setPageId, setPageActiveId} = useContext(CounterContext)

    const inputPageNameRef = useRef();
    const inputPageTitleRef = useRef();


    const createPgaeButtonHandler = () => {
        const inputPageNameValue = inputPageNameRef.current.value.toString().trim()
        const inputPageTitleValue = inputPageTitleRef.current.value.toString().trim()

        inputPageNameRef.current.value = inputPageNameValue
        inputPageTitleRef.current.value = inputPageTitleValue

        const pageDateObj = {}
        
        
        if (inputPageNameValue.length < 13 && inputPageNameValue != '') {
            pageDateObj.pageName = inputPageNameValue
        } else {
            
        }
        
        if (inputPageTitleValue.length < 36 && inputPageTitleValue != '') {
            pageDateObj.pageTitle = inputPageTitleValue
        } else {

        }

        const { pageName, pageTitle } = pageDateObj

        if (pageName && pageTitle) {
            pageDateObj.id = pageId
            setPages([...pages, pageDateObj])
            setPageActiveId(pageId)
            setPageId(a => ++a)

            inputPageNameRef.current.value = ''
            inputPageTitleRef.current.value = ''

            SetShowNawPageManger(a => !a)
        }





    }

    return (
        <div className="h-screen w-screen bg-black bg-opacity-40 fixed top-0 left-0 z-50 flex justify-center items-center">
            <div className="w-10/12 sm:w-100 shadow rounded-lg bg-white p-3">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-base font-medium">انشاء صفحة جديدة</h2>
                    <button className="focus:outline-none active:bg-gray-300 p-1 rounded-lg bg-gray-100" onClick={() => SetShowNawPageManger(a => !a)}>
                        <svg className="w-8 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </button>
                </div>
                <div className="gap-y-5 mt-2 flex flex-col items-center">
                    <div className="2sm:w-3/4">
                        <label htmlFor="page_name" className="block mb-2 text-sm font-semibold text-gray-900">اسم الصفحة</label>
                        <input ref={inputPageNameRef} type="text" id="page_name" className="bg-gray-100 border-b-4 border-transparent text-gray-950 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5" placeholder="كهرباء" required />
                    </div>
                    <div className="2sm:w-3/4">
                        <label htmlFor="page_title" className="block mb-2 text-sm font-semibold text-gray-900">عنوان الصفحة</label>
                        <input ref={inputPageTitleRef} type="text" id="page_title" className="bg-gray-100 border-b-4 border-transparent text-gray-950 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5" placeholder="قائمة كهرباء مرحلة ثانية" required />
                    </div>
                </div>
                <div className="mt-4 flex justify-center gap-x-1 2sm:gap-x-2">
                    <button className="focus:outline-none text-white font-semibold active:bg-teal-600 py-3 px-4 rounded-lg bg-teal-400" onClick={() => createPgaeButtonHandler()}>انشاء</button>
                    <button className="focus:outline-none text-gray-700 font-semibold active:bg-gray-300 p-3 rounded-lg bg-gray-100" onClick={() => SetShowNawPageManger(a => !a)}>الغاء</button>
                </div>

            </div>
        </div>
    )
}