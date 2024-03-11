import { useContext } from 'react';

import CounterContext from '../../../context/counterContext/CounterContext'

export default () => {
    const { items, pages, pageActiveId } = useContext(CounterContext)

    const tdStyle = 'py-1 px-3 ';

    const PageHeaderTamplete = ({ pageTitle }) => {
        return (
            <header className="pb-5 whitespace-nowrap h-[140px] text-gray-800 gap-x-2 px-6 flex justify-between items-center">
                <h1 className="rounded-lg text-xl font-bold border-b-8 pl-4 border-teal-600">{pageTitle}</h1>
                
                <div className="flex text-base font-semibold flex-col items-start">
                    <h2 className="rounded-lg pl-4 pb-1 border-b-2 border-teal-600">ابو حيدر مجاري كهرباء</h2>

                    <div>
                        <div className="border-b-2 pl-4 rounded-lg py-1 border-teal-600 flex gap-x-3 items-center justify-between">
                            <h3>ابو حيدر</h3>
                            <div>
                                <h4>07701676546</h4>
                                <h4>07505934007</h4>
                            </div>
                        </div>
                    </div>

                    <div className="flex rounded-lg border-b-2 border-teal-600 pl-4 pt-1 gap-x-3 items-center justify-between">
                        <h3>حيدر علي</h3>
                        <h4>07744411594</h4>
                    </div>
                </div>
            </header>
        )
    }

    const PageTableHeaderTamplete = () => {
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
        <div id='pages-temp-box' className='hidden print:block overflow-x-scroll print:overflow-x-auto'>
            {
                pages.map((page) => {
                    const { pageId, pageTitle } = page
                    let tableItemsIndexs = 1
                    if (pageId !== 0)
                        return (
                            <div key={pageId} className='w-[215.9mm] print:w-auto mx-auto break-before-page'>
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
                                                        <td className={tdStyle}>{tableItemsIndexs - 1}</td>
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