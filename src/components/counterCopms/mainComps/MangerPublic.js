import { useContext, useEffect } from 'react'

import CounterContext from '../../../context/counterContext/CounterContext'

const ResetApp = () => {
    const { setItems, setKey, setPages, setPageActiveId, setPageId, setPrintMode, resetApp, setResetApp } = useContext(CounterContext)

    useEffect(() => {
        if(resetApp) {
            setItems([])
            setKey(0)
            setPages([{pageName: 'الكل', pageTitle: 'قائمة', pageId: 0}])
            setPageActiveId(0)
            setPageId(1)
            setPrintMode(false)
            
            setResetApp(false)
        }
        
    }, [resetApp])
}

export { ResetApp }