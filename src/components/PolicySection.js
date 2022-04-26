import React from 'react';

const PolicySection = props => {
    return (
        <div className="pt-8 pb-8">
            <div className="pb-8">
                <p className="text-2xl font-bold pb-4">Delivery Policy:</p>
                <p>$100 minimum + $20 delivery fee.</p>
            </div>
            <div className="pb-8">
                <p className="text-2xl font-bold pb-4">How to order?</p>
                <p className="pb-2">Text 401-292-2222:</p>
                    <div className="flex justify-center">
                        <ol className="text-left">
                            <li>1. Your <u>Photo ID</u> or <u>Medical ID</u></li>
                            <li>2. Your <u>Delivery Address</u></li>
                            <li>3. Your <u>Order</u></li>
                            <li>4. <b>Done!</b> (ETA & Confirmation # sent within 1 hr)</li>
                        </ol>
                    </div>
            </div>
            <div className="pb-8">
                <p className="text-2xl font-bold pb-4">Payment Policy:</p>
                <p>At time of delivery via cash or $Cashapp.</p>
            </div>
            <div className="pb-8">
                <p className="text-2xl font-bold pb-4">Shipping Policy:</p>
                <p>Out of state shipping available. (Text for quote)</p>
            </div>
        </div>
    );
}

export default PolicySection;
