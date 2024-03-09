import { useContext, useEffect, useState } from "react"
import NewPageManger from "../../mainComps/childers/NewPageManger"
import CounterContext from '../../../../context/counterContext/CounterContext'

export default () => {
    const { setpopupActive } = useContext(CounterContext)
    const [showNawPageManger, setShowNawPageManger] = useState(false)
    const onClickHandler = () => {
        setShowNawPageManger(a => !a)
    }

    useEffect(() => {
        setpopupActive(showNawPageManger)
    }, [showNawPageManger])

    return (
        <>
            <button className="focus:outline-none rounded h-full bg-indigo-500 px-2 active:bg-indigo-700" onClick={() => onClickHandler()}>
                <svg className="fill-gray-100 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-240h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" /></svg>
            </button>
            {
                showNawPageManger &&
                <NewPageManger setShowNawPageManger={ setShowNawPageManger } />
            }
        </>
    )
}