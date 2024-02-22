import { useContext } from 'react';

import CounterContext from '../../../context/counterContext/CounterContext'

export default () => {
    const { items, pages, pageActiveId } = useContext(CounterContext)

    const tdStyle = 'py-1 px-3 ';

    const PageHeaderTamplete = ({  pageTitle }) => {
        return (
            <header className="pb-5 text-gray-900 px-6 flex justify-between items-center">
                <div className="flex flex-col">
                    <h1 className="py-2 pl-5 text-2xl font-bold w-full border-b-4 border-teal-600 whitespace-nowrap">{pageTitle}</h1>
                </div>

                <div className="flex text-base font-semibold flex-col items-center">
                    <h2 className="px-6 py-2 border-b-2 border-teal-600">ابو حيدر مجاري كهرباء</h2>
                    <div>
                        <div className="py-2 border-b-2 border-teal-600 w-40 flex justify-between">
                            <h3>ابو حيدر</h3>
                            <div>
                                <h4>07701676546</h4>
                                <h4>07505934007</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-40 justify-between">
                        <h3>حيدر</h3>
                        <h4>07507828758</h4>
                    </div>
                </div>
            </header>
        )
    }

    const PageTableHeaderTamplete =  () => {
        const thStyle = 'py-2 px-3 ';
        return (
            <thead className="bg-teal-600 font-normal text-base text-white">
                <tr>
                    <th className={thStyle}>#</th>
                    <th className={thStyle}>المادة</th>
                    <th className={thStyle}>الكمية</th>
                    <th className={thStyle}>ملاحظة</th>
                </tr>
            </thead>
        )
    }

    return (
        <div id='pages-temp-box' className='overflow-x-scroll print:overflow-x-auto'>
            {
                pages.map((page) => {
                    const { pageId, pageTitle } = page
                    let tableItemsIndexs = 1
                    if (pageId !== 0) 
                    return (
                        <div key={pageId} className='w-[215.9mm] print:w-auto mx-auto p-10 break-before-page'>
                            <PageHeaderTamplete pageTitle={pageTitle} />
                            <table className="w-full text-right rounded-t-lg  overflow-hidden shadow">
                                <PageTableHeaderTamplete />
                                <tbody className="text-sm font-semibold text-gray-900">
                                    {items.map((oneItem) => {
                                        const { idPage, key, item, count, unit } = oneItem
                                        if (pageId == idPage) {
                                            tableItemsIndexs++
                                            return (
                                                <tr key={key} className="odd:bg-white even:bg-gray-100 border-b last:border-b-4 last:border-teal-600">
                                                    <td className={tdStyle}>{tableItemsIndexs-1}</td>
                                                    <td className={tdStyle}>{item}</td>
                                                    <td className={tdStyle}>{unit ? count + ' ' + unit : count ? count : ''}</td>
                                                    <td className={tdStyle}></td>
                                                </tr>
                                            )
                                        }
                                        
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }

        </div>
    )
}