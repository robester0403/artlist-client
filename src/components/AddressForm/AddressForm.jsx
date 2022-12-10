function AddressForm ({formRef, handleAddressSubmit, onClickBack}){
    return (
        <form ref={formRef} onSubmit={handleAddressSubmit} className="address-form">
            <div>
                <label htmlFor="user_address"> Address </label>
                <input type = "text" name="user_address" placeholder="100 Queen St W" autoComplete="off"/>
            </div>
            <div>
                <label htmlFor="user_city"> City </label>
                <select name="user_city" defaultValue="Toronto">
                    <option value="Toronto" > Toronto</option>
                    <option value="Mississauga" > Mississauga</option>
                </select>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            <div>
                <button type="click" onClick={onClickBack}>Back</button>
            </div>
        </form>
    )

}

export default AddressForm;