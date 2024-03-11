import { useContext } from 'react'

import LocalStorage from '../../components/counterCopms/mainComps/LocalStorage'
import { ResetApp } from '../../components/counterCopms/mainComps/MangerPublic'
import AddItems from '../../components/counterCopms/mainComps/AddItems'
import ListOFItems from '../../components/counterCopms/mainComps/ListOFItems'
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
            <ResetApp />
            <MainController />
            <PageManger />
            <PrintTemplete />
            <AddItems />
            <ListOFItems />

        </main>

    )
}