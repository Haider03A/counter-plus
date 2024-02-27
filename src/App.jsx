import './App.css'

// import LocalStorage from './components/counterCopms/mainComps/LocalStorage'
// import { ResetApp } from './components/counterCopms/mainComps/MangerPublic'
// import MainController from './components/counterCopms/header/HeaderCounter'
// import PrintTemplete from './components/counterCopms/mainComps/PrintTemplete'
// import PageManger from './components/counterCopms/mainComps/PageManger'

import ItemsList from './components/main/items/ItemsList'
import AddItems from './components/main/items/AddItem'

function App() {
    // const { popupActive } = useContext(CounterContext)
    //   className={`${popupActive ? 'h-screen w-screen overflow-hidden' : ''}`}             LocalStorage

    return (
        <main >
            {/* <LocalStorage />
            <ResetApp />
            <MainController />
            <PageManger />
            <PrintTemplete /> */}
            <AddItems />
            <ItemsList />

        </main>

    )
}

export default App