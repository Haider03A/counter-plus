import { useContext, useState } from 'react'

import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ setShowEditPageInformationBox }) => {
    const { pages, setPages, pageActiveId } = useContext(CounterContext)
    console.log(setShowEditPageInformationBox);

    const { pageName, pageTitle } = pages.find(page => page.pageId === pageActiveId)

    const [ inputNewPageName, setInputNewPageName ] = useState(pageName)
    const [ inputNewPageTitle, setInputNewPageTitle ] = useState(pageTitle)

    const EditInfoPgaeButtonHandler = () => {
        setInputNewPageName(a => a.toString().trim())
        setInputNewPageTitle(a => a.toString().trim())

        const pageDateObj = {}


        if (inputNewPageName.length < 13 && inputNewPageName != '') {
            pageDateObj.pageName = inputNewPageName
        }

        if (inputNewPageTitle.length < 36 && inputNewPageTitle != '') {
            pageDateObj.pageTitle = inputNewPageTitle
        }

        const { pageName, pageTitle } = pageDateObj


        if (pageName && pageTitle) {
            const clonePages = [...pages].map(page => {
                const { pageId } = page
                if (pageId === pageActiveId) {
                    return { pageName, pageTitle, pageId }
                }
                return page
            })
            setPages(clonePages)

            setInputNewPageName('')
            setInputNewPageTitle('')

            setShowEditPageInformationBox(a => !a)
        }





    }


    return (
        <div className="h-screen w-screen bg-black bg-opacity-40 fixed top-0 left-0 z-50 flex justify-center items-center">
            <div className="w-10/12 sm:w-100 shadow rounded-lg bg-white p-3">
                <div className="flex justify-between items-center border-b pb-2">
                    <h2 className="text-base font-medium">تغيير معلوامات الصفحة</h2>
                    <button className="focus:outline-none active:bg-gray-300 p-1 rounded-lg bg-gray-100" onClick={() => setShowEditPageInformationBox(a => !a)}>
                        <svg className="w-8 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </button>
                </div>
                <div className="gap-y-5 mt-2 flex flex-col items-center">
                    <div className="2sm:w-3/4">
                        <label htmlFor="new_page_name" className="block mb-2 text-sm font-semibold text-gray-900">اسم الصفحة</label>
                        <input value={inputNewPageName} onChange={(e) => setInputNewPageName(e.target.value)} type="text" id="new_page_name" className="bg-gray-100 border-b-4 border-transparent text-gray-950 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5" placeholder="كهرباء" required />
                    </div>
                    <div className="2sm:w-3/4">
                        <label htmlFor="new_page_title" className="block mb-2 text-sm font-semibold text-gray-900">عنوان الصفحة</label>
                        <input value={inputNewPageTitle} onChange={(e) => setInputNewPageTitle(`e.target.value`)} type="text" id="new_page_title" className="bg-gray-100 border-b-4 border-transparent text-gray-950 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full p-2.5" placeholder="قائمة كهرباء مرحلة ثانية" required />
                    </div>
                </div>
                <div className="mt-4 flex justify-center gap-x-1 2sm:gap-x-2">
                    <button className="focus:outline-none text-white font-semibold bg-purple-500 active:bg-purple-700 py-3 px-4 rounded-lg" onClick={() => EditInfoPgaeButtonHandler()}>تغيير</button>
                    <button className="focus:outline-none text-gray-700 font-semibold active:bg-gray-300 p-3 rounded-lg bg-gray-100" onClick={() => setShowEditPageInformationBox(a => !a)}>الغاء</button>
                </div>

            </div>
        </div>
    )
}