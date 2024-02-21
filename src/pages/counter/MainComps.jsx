import { useContext } from 'react'

import AddItems from '../../components/counterCopms/mainComps/AddItems'
import ListOFItems from '../../components/counterCopms/mainComps/ListOFItems'
import LocalStorage from '../../components/counterCopms/mainComps/LocalStorage'
import MainController from '../../components/counterCopms/header/HeaderCounter'
import PrintTemplete from '../../components/counterCopms/mainComps/PrintTemplete'

import './counter.css'

import CounterContext from '../../context/counterContext/CounterContext'
import PageManger from '../../components/counterCopms/mainComps/PageManger'

export default () => {
    const { popupActive } = useContext(CounterContext)

    return (
        <main className={`${popupActive ? 'h-screen w-screen overflow-hidden' : ''}`}>
            <LocalStorage />
            <PrintTemplete />
            <MainController />
            <PageManger />
            <AddItems />
            <ListOFItems />
        </main>

    )
}