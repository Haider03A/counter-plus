import { useContext, useEffect, useState } from "react"
import EditPageInformationBox from "../../mainComps/childers/EditPageInformationBox"
import CounterContext from '../../../../context/counterContext/CounterContext'

export default () => {
    const { setpopupActive } = useContext(CounterContext)
    const [showEditPageInformationBox, setShowEditPageInformationBox] = useState(false)
    const onClickHandler = () => {
        setShowEditPageInformationBox(a => !a)
    }

    useEffect(() => {
        setpopupActive(showEditPageInformationBox)
    }, [showEditPageInformationBox])

    return (
        <>
            <button className="focus:outline-none rounded h-full bg-purple-500 px-2 active:bg-purple-700" onClick={() => onClickHandler()}>
            <svg className="fill-gray-100 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
            </button>
            {
                showEditPageInformationBox &&
                <EditPageInformationBox setShowEditPageInformationBox={ setShowEditPageInformationBox } />
            }
        </>
    )
}