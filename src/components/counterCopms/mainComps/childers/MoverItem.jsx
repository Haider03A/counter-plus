import { useState } from "react";

export default ({ listBoxRef }) => {
    let timeHoldTouch, timeTouchStatus

    const touchStartHandler = (e) => timeHoldTouch = setTimeout(() => timeTouchStatus = true, 300)

    const touchEndHandler = (e) => !timeTouchStatus ? clearTimeout(timeHoldTouch) : false;



    const touchMoveHandler = (e) => {
        if (timeTouchStatus) {
            const parentElement = e.target.parentElement
            const moverHeight = e.target.offsetHeight
            const itemHeight = parentElement.offsetHeight
            const itemOffsetY = parentElement.offsetTop
            const pageY = e.touches[0].pageY
            const result = -(itemOffsetY + (itemHeight - moverHeight / 2) - pageY)

            parentElement.style.transform = `translateY(${result}px)`

            const clientY = e.touches[0].clientY
            const screenHeight = window.screen.height

            if (clientY < 200) {
                window.scrollBy(0, -10)
            } else if (clientY > screenHeight - 200) {
                window.scrollBy(0, +10)
            }

        } else {
            clearTimeout(timeHoldTouch)
        }

    }


    return (
        <div onTouchMove={touchMoveHandler} onTouchStart={touchStartHandler} onTouchEnd={touchEndHandler} className='focus:outline-none touch-none py-2 pt-3 mt-3 w-full'>
            <span className='block pointer-events-none mx-auto w-9 h-1 rounded-lg bg-gray-300'></span>
        </div>

    )
}