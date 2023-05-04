import CustomerForm from '../CustomerForm/CustomerForm';

function CustomerInfo() {

    return (
        <>
            <h3>Step 2: Customer Information</h3>
            {/* need customer info form imported here */}
                {/* including radio buttons */}
            <CustomerForm />
            {/* need button NEXT for moving to another page */}
        </>
    )
}

export default CustomerInfo;