export default () => {
    return (
        <div>
            <label htmlFor="new-page-titel" className="mb-2 block text-black md:text-lg text-sm opacity-25 md:font-extrabold font-bold">انشاء صفة جديدة :</label>
            <div className="flex pb-2 max-xxsm:flex-wrap gap-2 items-center text-sm md:font-bold font-semibold">
                <input id="new-page-titel" placeholder="عنوان الصفحة " className="active:bg-gray-200 basis-full text-gray-600 rounded-md bg-gray-100 h-12 py-2 px-1 focus:outline-none focus:border-b-indigo-500 border-b-2 border-transparent" type="text" />
                <button className="active:bg-indigo-700 duration-300 h-12 px-3 text-gray-50 rounded-md bg-indigo-500 whitespace-nowrap">اضف الصفحة</button>
            </div>
        </div>
    )
}