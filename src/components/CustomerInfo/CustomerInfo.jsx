import CustomerForm from '../CustomerForm/CustomerForm';

// page to hold the Customer Form component
function CustomerInfo() {

    return (
        <>
            <h3>Step 2: Customer Information</h3>
            <CustomerForm />
            {/* need button NEXT for moving to another page */}
        </>
    )
}

export default CustomerInfo;