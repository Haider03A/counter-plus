
import CounterContext from '../../context/counterContext/CounterContext'
import { valeusCounterContext } from '../../context/counterContext/CounterContext'
import MainComps from './MainComps'


export default () => {
    

    return (
            <CounterContext.Provider value={valeusCounterContext()}>
                
                <MainComps />

            </CounterContext.Provider>

    )
}