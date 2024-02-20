import { useContext } from 'react'

import AddItems from '../../components/counterCopms/mainComps/AddItems'
import ListOFItems from '../../components/counterCopms/mainComps/ListOFItems'
import LocalStorage from '../../components/counterCopms/mainComps/LocalStorage'
import MainController from '../../components/counterCopms/header/HeaderCounter'
import PrintTemplete from '../../components/counterCopms/mainComps/PrintTemplete'

import './counter.css'

import CounterContext from '../../context/counterContext/CounterContext'

export default () => {
    const { printMode } = useContext(CounterContext)

    return (
        <main>
            <LocalStorage />
            <PrintTemplete />
            <MainController />
            <AddItems />
            <ListOFItems />
        </main>

    )
}