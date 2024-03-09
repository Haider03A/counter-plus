
export default ({ item }) => {
    return (
        <div className='text-white font-bold h-10 relative'>
            <span dir='ltr' className="bg-indigo-500 h-full flex gap-x-1 duration-300 leading-10 px-3 rounded-lg">{item.unit && <span>{item.unit}</span>} {item.count}</span>
            <select className="opacity-0 w-full h-full absolute top-0 left-0 ">
                <option className="text-black font-bold" defaultValue value="">عدد</option>
                <option className="text-black font-bold" value="متر">متر</option>
                <option className="text-black font-bold" value="ملم">ملم</option>
                <option className="text-black font-bold" value="باكيت">باكيت</option>
                <option className="text-black font-bold" value="لفة">لفة</option>
                <option className="text-black font-bold" value="ربطة">ربطة</option>
                <option className="text-black font-bold" value="قطعة">قطعة</option>
                <option className="text-black font-bold" value="كيس">كيس</option>
            </select>
        </div>
    )
}