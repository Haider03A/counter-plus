import { useContext } from 'react'

import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ setShowDeletePageBox }) => {

    const { pages, setPages, pageActiveId } = useContext(CounterContext)

    const DeletePageButtonHandler = () => {
        const clonePages = [...pages]
        if (pages[1]) {
            clonePages.forEach((page, i) => {
                const { pageId } = page
                if (pageId === pageActiveId) {
                    clonePages.splice(i)
                }
            })
            setPages(clonePages)

            setShowDeletePageBox(a => !a)
        }


    }


    return (
        <div className="h-screen w-screen bg-black bg-opacity-40 fixed top-0 left-0 z-50 flex justify-center items-center">
            <div className="w-10/12 sm:w-100 shadow rounded-lg bg-white p-3">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-base font-medium">حذف الصفحة</h2>
                    <button className="focus:outline-none active:bg-gray-300 p-1 rounded-lg bg-gray-100" onClick={() => setShowDeletePageBox(a => !a)}>
                        <svg className="w-8 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </button>
                </div>
                <div className="mt-4 flex justify-center gap-x-1 2sm:gap-x-2">
                    <button className="focus:outline-none text-white font-semibold bg-rose-500 active:bg-rose-700 py-3 px-4 rounded-lg" onClick={() => DeletePageButtonHandler()}>حذف</button>
                    <button className="focus:outline-none text-gray-700 font-semibold active:bg-gray-300 p-3 rounded-lg bg-gray-100" onClick={() => setShowDeletePageBox(a => !a)}>الغاء</button>
                </div>

            </div>
        </div>
    )
}