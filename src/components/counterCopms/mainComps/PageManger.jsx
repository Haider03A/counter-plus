import NewPageButton from "../buttons/mainCompsButton/NewPageButton"

export default () => {
    return (
        <div className="flex print:hidden h-9 px-4 gap-x-1 justify-start items-center sm:container mx-auto mt-2 ">
            <NewPageButton />
            <div className="flex overflow-hidden font-semibold gap-x-1 h-full text-gray-700 bg-gray-100 rounded justify-start items-center">
                <button className="h-full px-2 bg-teal-500 text-white active:bg-gray-200">صحيات</button>
                <button className="h-full px-2 active:bg-gray-200">متحكمات</button>
                <button className="h-full px-2 active:bg-gray-200">نواعم </button>
                <button className="h-full px-2 active:bg-gray-200">انارة </button>
            </div>
        </div>

    )
}