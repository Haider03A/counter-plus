import { useContext } from 'react'
import CounterContext from '../../../../context/counterContext/CounterContext'

export default ({ butStyle }) => {
    const { setResetApp } = useContext(CounterContext)
    const removeKey = 3612

    const clickHandler = () => {
        const promptAlert  = window.prompt('اذا كنت تريد حذف جميع العناصر اكتب '+removeKey)

        if (promptAlert == removeKey) {
            setResetApp(true)
        } else {
            alert('لم يتم حذف اي من العناصر بسبب الأدخال الخاطأ')
        }
        
    }

    return(
        <button onClick={clickHandler} className={`${butStyle} `}>اعادة ضبط البرنامج</button>
    )
}