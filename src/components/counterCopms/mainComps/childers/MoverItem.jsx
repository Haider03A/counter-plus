import { useState } from "react"


export default ({ listBoxRef, items }) => {

    const [itemMoved, setItemMoved] = useState(false)

    let timeHoldTouch, timeTouchStatus, parentElement

    const touchStartHandler = (e) => {
        timeHoldTouch = setTimeout(() => {
            timeTouchStatus = true
            parentElement = e.target.parentElement
        }, 300)
    }

    const touchEndHandler = (e) => {
        if (timeTouchStatus) {
            parentElement.style.transform = null
            parentElement.style.borderColor = null
            parentElement.style.zIndex = null
            setItemMoved(false)
        } else {
            clearTimeout(timeHoldTouch)
        }
    }



    const touchMoveHandler = (e) => {
        if (timeTouchStatus) {

            const moverHeight = e.target.offsetHeight
            const itemHeight = parentElement.offsetHeight
            const itemOffsetY = parentElement.offsetTop
            const pageY = e.touches[0].pageY
            const result = -(itemOffsetY + (itemHeight - moverHeight / 2) - pageY)

            parentElement.style.transform = `translateY(${result}px) scale(0.9)`
            parentElement.style.borderColor = 'rgb(129 140 248)'
            parentElement.style.zIndex = 3

            const clientY = e.touches[0].clientY
            const screenHeight = window.screen.height

            if (clientY < 200) {
                window.scrollBy(0, -10)
            } else if (clientY > screenHeight - 200) {
                window.scrollBy(0, +10)
            };

            // const itemCountInBox = items.length
            // const itemHeightInBox = itemCountInBox*itemHeight

            // setItemMoved(true);

        } else {
            clearTimeout(timeHoldTouch)
        }

    }


    return (
        <div onTouchMove={touchMoveHandler} onTouchStart={touchStartHandler} onTouchEnd={touchEndHandler} className='focus:outline-none touch-none py-2 pt-3 mt-3 w-full'>
            <span className={`${itemMoved ? 'bg-indigo-400' : 'bg-gray-300'} block pointer-events-none mx-auto w-9 h-1 rounded-lg`}></span>
        </div>

    )
}