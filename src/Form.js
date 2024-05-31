import { Formik, Form, Field, ErrorMessage, useField} from 'formik';
import * as Yup from 'yup';

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label }</label>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
}

const Checkbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'});
    return (
        <>
            <label className='checkbox'>
                <input type='checkbox' {...props} {...field}/>
                {children}
            </label>

            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
}   

const MainForm = () => {

    return (
        <Formik
            initialValues = {{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema = {Yup.object({
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
            })}
            onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2>Send a donation</h2>
                <TextInput
                    label='Your name'
                    id="name"
                    name="name"
                    type="text"
                />
                <TextInput
                    label='Your mail'
                    id="email"
                    name="email"
                    type="email"
                />
                <TextInput
                    label='Amount'
                    id="amount"
                    name="amount"
                    type="number"
                />          
                <label htmlFor="currency">Currency</label>
                <Field
                    id="currency"
                    name="currency"
                    as='select'>
                        <option value="">Select a currency</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className='error' name='currency' component='div'/>     
                <label htmlFor="text" >Your message</label>
                <Field 
                    id="text"
                    name="text"
                    as='textarea'
                />
                <ErrorMessage className='error' name='text' component='div'/>  
                <Checkbox name='terms'>
                    Do you agree with the privacy policy?
                </Checkbox> 
                <button type="submit">Send</button>
            </Form>
        </Formik>
    )
}

export default MainForm;