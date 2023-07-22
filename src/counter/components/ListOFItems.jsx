import '../style/ListOFItems.css'
import { CounterContext } from '../Counter'
import { useContext } from 'react'


export default () => {
    const { items } = useContext(CounterContext) 
    
    return(
        <ul className="list">

        </ul>
    )
}