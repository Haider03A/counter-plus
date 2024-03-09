import { useFormik } from 'formik'
import * as Joi from 'joi'
import { useSelector } from 'react-redux'

export default ({ item }) => {
    const { minCount, maxCount } = useSelector(state => state.pageItem)

    const { count } = item
    
    // console.log(count - minCount >= minCount ? count - minCount : minCount);
    
    const formik = useFormik({
        initialValues: {
            numberToCalc: ''
        },
        onSubmit: (values) => {
            values.numberToCalc == 0 &&
            formik.setFieldValue('numberToCalc', '');
        },
        validationSchema: Joi.object({
          })
    })
    
    return (
        <form onSubmit={formik.handleSubmit} className="font-bold flex gap-x-1 basis-full justify-end 3sm:basis-auto 3sm:justify-normal">
            <button type='submit' className="h-14 px-3 bg-blue-500 text-white rounded-lg">حساب</button>
            <div>
                <input onChange={formik.handleChange}  value={formik.values.numberToCalc} dir='ltr' type="text" name='numberToCalc' placeholder="أدخل رقما" className="focus:border-indigo-500 border-transparent border-b-2 bg-gray-100 text-gray-700 w-28 h-14 placeholder:text-gray-300 placeholder:text-right outline-none p-2.5 duration-300 rounded-lg" />
                {formik.errors.numberToCalc && formik.touched.numberToCalc && <span>{formik.errors.numberToCalc}</span>}
            </div>
        </form>
    )
}