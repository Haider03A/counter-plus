import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    const editIcon = <svg className='md:h-5 h-4 pointer-events-none fill-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
    const colorIcon = <svg className='md:h-5 h-4 pointer-events-none fill-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25.755-.255h0a2.5,2.5,0,0,1,2.5,2.5v8.5a0,0,0,0,1,0,0h-5a0,0,0,0,1,0,0v-8.5a2.5,2.5,0,0,1,2.5-2.5Z" transform="rotate(45 25.756 5.244)"></path><rect width="9" height="4" x="15.952" y="8.548" rx="1" ry="1" transform="rotate(45 20.452 10.548)"></rect><path d="M20.805,13.73,17.27,10.195,7.584,19.881a1,1,0,0,0-.289.8l.033.363a1,1,0,0,1-.289.8l-.729.729a1.5,1.5,0,0,0,0,2.121h0a1.5,1.5,0,0,0,2.121,0l.729-.729a1,1,0,0,1,.8-.289l.363.033a1,1,0,0,0,.8-.289Z"></path><path d="M5.623,29.377a2,2,0,0,1-4,0c0-1.1,2-4,2-4S5.623,28.272,5.623,29.377Z"></path></svg>
    const deleteIcone = <svg className='md:h-5 h-4 pointer-events-none fill-gray-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z"></path></svg>

    return (
        <div onClick={showAndHiddnPageMangerBox}>
            <button data-butopenpagemangerbox='true' className="active:bg-gray-300 duration-300 block bg-gray-200 rounded-md p-2">{pgaeMangerIcon}</button>

            <AnimatePresence>
                {pageMangerBoxVisible ?
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{opacity: 0}}
                        data-notpagemangerbox='true' className="flex justify-center items-center z-100 h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-25">
                        <motion.div
                            initial={{ scale: 0.2 }}
                            animate={{ scale: 1 }}
                            className="pt-16 p-3 overflow-auto w-100 relative mx-3 rounded-md bg-white touch-none">
                            <button data-butclosepagemangerbox='true' className="active:bg-indigo-700 duration-300 absolute rounded-bl-md top-0 right-0 h-10 w-10 bg-indigo-500 text-gray-50 text-xl font-bold flex items-center justify-center">×</button>

                            <label htmlFor="new-page-titel" className="mb-2 block text-black opacity-25 md:font-extrabold font-bold">انشاء صفة جديدة :</label>
                            <div className="flex pb-2 max-xxsm:flex-wrap gap-2 items-center text-xs md:font-bold font-semibold">
                                <input id="new-page-titel" placeholder="عنوان الصفحة " className="active:bg-gray-200 basis-full text-gray-600 rounded-md bg-gray-100 h-12 py-2 px-1 focus:outline-none focus:border-b-indigo-500 border-b-2 border-transparent" type="text" />
                                <button className="active:bg-indigo-700 duration-300 h-12 px-3 text-gray-50 rounded-md bg-indigo-500 whitespace-nowrap">اضف الصفحة</button>
                            </div>

                            <label className="mb-2 mt-4 block text-black opacity-25 md:font-extrabold font-bold">قائمة الصفحات :</label>
                            <ol className="md:font-bold font-semibold max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                                <li className="flex justify-start items-center gap-1 max-xxsm:flex-wrap border border-gray-100 p-2 rounded-md">
                                    <h2 className="md:text-xl text-gray-600 basis-full gap-x-1 flex items-center">
                                        <span className='h-4 w-4 max-md:h-3 max-md:w-3 max-md:mt-1 rounded-sm bg-green-500 block'></span>
                                        متحكمات
                                    </h2>
                                    <button className="active:bg-gray-300 duration-300 block bg-gray-100 rounded-md p-2">{colorIcon}</button>
                                    <button className="active:bg-gray-300 duration-300 block bg-gray-100 rounded-md p-2">{editIcon}</button>
                                    <button className="active:bg-gray-300 duration-300 block bg-gray-100 rounded-md p-2">{deleteIcone}</button>
                                </li>
                            </ol>
                        </motion.div>


                    </motion.div>
                    : ''}
            </AnimatePresence>

        </div>
    )
}