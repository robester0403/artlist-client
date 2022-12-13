import "./AddressForm.scss"

function AddressForm ({formRef, handleAddressSubmit, onClickBack}){
    return (
        <form ref={formRef} onSubmit={handleAddressSubmit} className="address-form">
            <div className="address-form__address-container">
                <label htmlFor="user_address">
                <input className="address-form__address"type = "text" name="user_address" placeholder="e.g. 100 Queen St W" autoComplete="off"/>
                </label>
            </div>
            <div className="address-form__city-container">
                <label htmlFor="user_city">
                    <select name="user_city" defaultValue="Toronto" className="address-form__city">
                        <option value="Toronto" > Toronto</option>
                        <option value="Mississauga" > Mississauga</option>
                    </select>
                </label>
            </div>
            <div className="address-form__button-container">
                <button className="address-form__button"type="button" onClick={onClickBack}>Back</button>
                <button className="address-form__button" type="submit">Submit</button>

            </div>
        </form>
    )
}

export default AddressForm;