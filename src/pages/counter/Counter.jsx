import './counter.css'
import AddItems from '../../components/counterCopms/mainComps/creatorComps/AddItems'
import ListOFPages from '../../components/counterCopms/mainComps/ListOfPages/ListOfPages'
import LocalStorage from '../../components/counterCopms/mainComps/LocalStorage'
import HeaderCounter from '../../components/counterCopms/header/HeaderCounter'

import CounterContext from '../../context/counterContext/CounterContext'
import { valeusCounterContext } from '../../context/counterContext/CounterContext'



export default () => {
    return (
        <div className='sm:container md:px-10 mx-auto px-5 '>
            <CounterContext.Provider value={valeusCounterContext()}>
                <LocalStorage />
                <HeaderCounter />
                <ListOFPages />
                <AddItems />
            </CounterContext.Provider>
        </div>

    )
}