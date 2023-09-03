import './counter.css'
import AddItems from '../../components/counterCopms/mainComps/AddItems'
import ListOFItems from '../../components/counterCopms/mainComps/ListOFItems'
import LocalStorage from '../../components/counterCopms/mainComps/LocalStorage'
import MainController from '../../components/counterCopms/header/HeaderCounter'

import CounterContext from '../../context/counterContext/CounterContext'
import { valeusCounterContext } from '../../context/counterContext/CounterContext'



export default () => {
   return (
        <main className='bg-gray-100'>
            <CounterContext.Provider value={valeusCounterContext()}>
                <LocalStorage />
                <MainController />
                <ListOFItems />
                <AddItems />
            </CounterContext.Provider>

        </main>
    )
}