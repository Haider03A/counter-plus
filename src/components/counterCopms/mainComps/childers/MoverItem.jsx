import { useState } from "react"


export default ({ listBoxRef, items }) => {


    let timeHoldTouch, timeTouchStatus, parentElement

    const touchStartHandler = (e) => {
        timeHoldTouch = setTimeout(() => {
            parentElement = e.target.parentElement
            timeTouchStatus = true
        }, 300)


    }

    const touchEndHandler = (e) => {
        if (timeTouchStatus) {
            parentElement.style.transform = null
            parentElement.style.borderColor = null
            parentElement.style.zIndex = null
        } else {
            clearTimeout(timeHoldTouch)
        }
    }



    const touchMoveHandler = (e) => {
        if (timeTouchStatus) {

            const pageY = e.touches[0].pageY,

                listBoxOffsetTop = listBoxRef.current.offsetTop,
                itemTop = parentElement.offsetTop + listBoxOffsetTop,

                moverOffsetTop = e.target.offsetTop,
                moverOffsetHeight = e.target.offsetHeight,

                result = pageY - moverOffsetTop - (moverOffsetHeight / 2) - itemTop;


            parentElement.style.transform = `translateY(${result}px) scale(0.9)`
            parentElement.style.borderColor = 'rgb(129 140 248)'
            parentElement.style.zIndex = 3

            // For scrolling
            const clientY = e.touches[0].clientY
            const screenHeight = window.screen.height

            if (clientY < 200) {
                window.scrollBy(0, -10)
            } else if (clientY > screenHeight - 200) {
                window.scrollBy(0, +10)
            };


        } else {
            clearTimeout(timeHoldTouch)
        }

    }


    return (
        <div onTouchMove={touchMoveHandler} onTouchStart={touchStartHandler} onTouchEnd={touchEndHandler} className='focus:outline-none touch-none py-2 pt-3 w-full'>
            <span className='bg-gray-300 block pointer-events-none mx-auto w-9 h-1 rounded-lg'></span>
        </div>

    )
}