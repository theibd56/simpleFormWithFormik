

const Form = () => {
    return (
        <form className="form">
            <h2>Send a donation</h2>
            <label htmlFor="name">Your name</label>
            <input
                id="name"
                name="name"
                type="text"
            />
            <label htmlFor="email">Your mail</label>
            <input
                id="email"
                name="email"
                type="email"
            />
            <label htmlFor="amount">Amount</label>
            <input
                id="amount"
                name="amount"
                type="number"
            />
            <label htmlFor="currency">Currency</label>
            <select
                id="currency"
                name="currency">
                    <option value="">Select a currency</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            <label htmlFor="text">Your message</label>
            <textarea 
                id="text"
                name="text"
            />
            <label className="checkbox">
                <input name="terms" type="checkbox" />
                Do you agree with the privacy policy?
            </label>
            <button type="submit">Send</button>
        </form>
    )
}

export default Form;