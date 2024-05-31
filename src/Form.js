import {useFormik} from 'formik';
import * as Yup from 'yup';

const Form = () => {

    // const validate = (values) => {
    //     const errors = {};

    //     if(!values.name) {
    //         errors.name = 'This is a required field!'
    //     } else if (!values.name.lenght < 2) {
    //         errors.name = 'This field must contain at least 2 characters'
    //     }

    //     if(!values.email) {
    //         errors.email = 'This is a required field!'
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    //         errors.email = 'The wrong email was entered'
    //     }

    //     return errors
    // } 

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
        }, 
        validationSchema: Yup.object({
            name: Yup.string()
                        .min(2, 'This field must contain at least 2 characters')
                        .required('This is a required field!'),
            email: Yup.string()
                        .email('The wrong email was entered')
                        .required('This is a required field!'),
            amount: Yup.number()
                        .min(1, 'At least 1')
                        .required('This is a required field!'),
            currency: Yup.string().required('Select a currency'),
            text: Yup.string().min(5, 'At least 5'),
            terms: Yup.boolean()
                        .required('This is a required field!')
                        .oneOf([true], 'This is a required field!')
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    })

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Send a donation</h2>
            <label htmlFor="name">Your name</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div className="error">{formik.errors.name}</div> : null}
            <label htmlFor="email">Your mail</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
            <label htmlFor="amount">Amount</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.amount && formik.touched.amount ? <div className="error">{formik.errors.amount}</div> : null}
            <label htmlFor="currency">Currency</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}>
                    <option value="">Select a currency</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            {formik.errors.currency && formik.touched.currency ? <div className="error">{formik.errors.currency}</div> : null}
            <label htmlFor="text" >Your message</label>
            <textarea 
                id="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.text && formik.touched.text ? <div className="error">{formik.errors.text}</div> : null}
            <label className="checkbox">
                <input name="terms" 
                type="checkbox" 
                value={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                Do you agree with the privacy policy?
            </label>
            {formik.errors.terms && formik.touched.terms ? <div className="error">{formik.errors.terms}</div> : null}
            <button type="submit">Send</button>
        </form>
    )
}

export default Form;