import { useContext } from 'react'
import CounterContext from '../../../../context/counterContext/CounterContext'

export default () => {
    const { setItems, setKey} = useContext(CounterContext)
    const removeKey = 3612

    const clickHandler = () => {
        const promptAlert  = window.prompt('اذا كنت تريد حذف جميع العناصر اكتب '+removeKey)

        if (promptAlert == removeKey) {
            setItems([])
            setKey(0)
        } else {
            alert('لم يتم حذف اي من العناصر بسبب الأدخال الخاطأ')
        }
        
    }

    return(
        <button onClick={clickHandler} className="active:bg-blue-500 duration-300 h-12 px-3 bg-rose-500 text-stone-50 rounded-lg">حذف الكل</button>
    )
}