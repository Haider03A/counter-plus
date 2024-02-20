export default () => {
    const thStyle = 'py-3 px-3 ';
    const tdStyle = 'py-3 px-3 ';
    const trStyle = 'odd:bg-white even:bg-gray-100 last:border-b-4 border-teal-600'

    return(
        <div className="p-4">
            <table className="w-full text-right rounded-t-md  overflow-hidden shadow">
                <thead className="bg-teal-600 font-normal text-lg text-white">
                    <tr>
                        <th className={thStyle}>#</th>
                        <th className={thStyle}>المادة</th>
                        <th className={thStyle}>الكمية</th>
                        <th className={thStyle}>ملاحظة</th>
                    </tr>
                </thead>
                <tbody className="text-base font-medium text-teal-900">
                    <tr className={trStyle}>
                        <td className={tdStyle}>1</td>
                        <td className={tdStyle}>بلك سويج حجري</td>
                        <td className={tdStyle}>12</td>
                        <td className={tdStyle}></td>
                    </tr>
                    <tr className={trStyle}>
                        <td className={tdStyle}>2</td>
                        <td className={tdStyle}>بلك سويج سبلت ثنائي</td>
                        <td className={tdStyle}>155</td>
                        <td className={tdStyle}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}