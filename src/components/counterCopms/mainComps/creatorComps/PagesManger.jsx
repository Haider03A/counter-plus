import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddPages from "./childern/AddPages";
import ListPages from "./childern/ListPages";

export default () => {
    const [pageMangerBoxVisible, setPageMangerBoxVisible] = useState(false)

    const showAndHiddnPageMangerBox = (e) => {

        const { notpagemangerbox, butclosepagemangerbox, butopenpagemangerbox } = e.target.dataset

        if (notpagemangerbox || butclosepagemangerbox) {
            setPageMangerBoxVisible(false);
        } else if (butopenpagemangerbox) {
            setPageMangerBoxVisible(true);
        }

    }

    const pgaeMangerIcon = <svg className='h-6 pointer-events-none fill-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M17 12c-.6 0-1-.4-1-1V2H9C7.3 2 6 3.3 6 5v22c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V12h-9zm3 15h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1zm0-5h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1zm0-5h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"></path><path d="M26 10c0-.1 0-.3-.1-.4 0-.1-.1-.2-.2-.3l-7-7c-.1-.1-.2-.2-.3-.2-.1-.1-.3-.1-.4-.1v8h8z"></path></svg>

    return (
        <div onClick={showAndHiddnPageMangerBox}>
            <button data-butopenpagemangerbox='true' className="active:bg-gray-300 duration-300 block bg-gray-200 rounded-md p-2">{pgaeMangerIcon}</button>

            <AnimatePresence>
                {pageMangerBoxVisible ?
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        data-notpagemangerbox='true' className="flex justify-center items-center z-100 h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-25">
                        <motion.div
                            initial={{ scale: 0.2 }}
                            animate={{ scale: 1 }}
                            className="pt-12 p-3 overflow-auto w-100 relative mx-3 rounded-md bg-white touch-none">
                                
                            <button data-butclosepagemangerbox='true' className="active:bg-indigo-700 duration-300 absolute rounded-bl-md top-0 right-0 h-10 w-10 bg-indigo-500 text-gray-50 text-xl font-bold flex items-center justify-center">×</button>
                            <AddPages />
                            <ListPages />

                        </motion.div>


                    </motion.div>
                    : ''}
            </AnimatePresence>

        </div>
    )
}