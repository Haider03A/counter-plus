import { useContext, useEffect } from 'react'

import CounterContext from '../../../context/counterContext/CounterContext'

const ResetApp = () => {
    const { setItems, setKey, setPages, setPageActiveId, setPageId, setPrintMode, resetApp, setResetApp } = useContext(CounterContext)

    useEffect(() => {
        if(resetApp) {
            setItems([])
            setKey(0)
            setPages([{pageName: 'الصفحة الاولى', pageTitle: 'الصفحة الاولى', pageId: 0}])
            setPageActiveId(0)
            setPageId(1)
            setPrintMode(false)
            
            setResetApp(false)
            location.reload()
        }
    }, [resetApp])
}

export { ResetApp }