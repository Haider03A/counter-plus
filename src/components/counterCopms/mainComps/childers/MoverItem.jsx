import { useState } from "react";

export default () => {
    const touchHandler = (e) => {

        // console.log(e.target.offsetTop, "       ",   e.touches[0].clientY);
    }
    
    return (
        <div onTouchMove={touchHandler} className='focus:outline-none py-2 pt-3 mt-3 w-full'>
            <span className='block pointer-events-none mx-auto w-9 h-1 rounded-lg bg-gray-300'></span>
        </div>

    )
}