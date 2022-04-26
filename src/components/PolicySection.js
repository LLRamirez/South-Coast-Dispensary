import React from 'react';

const PolicySection = props => {
    return (
        <div className="pt-8 pb-8">
            <div className="pb-8">
                <p className="text-2xl font-bold pb-4 underline">Delivery Policy:</p>
                <p>$100 min + $20 delivery fee.</p>
            </div>
            <div className="pb-8">
                <p className="text-2xl font-bold pb-4 underline">How to order?</p>
                <p className="pb-2">Text 774-441-2993:</p>
                    <div className="flex justify-center">
                        <ol className="text-left">
                            <li>1. Your <u><b>Photo ID</b></u> or <u><b>Medical ID</b></u></li>
                            <li>2. Your <u><b>Delivery Address</b></u></li>
                            <li>3. Your <u><b>Order</b></u></li>
                            <li>4. <b>Done!</b> (ETA & Confirmation # sent within 1 hr)</li>
                        </ol>
                    </div>
            </div>
            <div className="pb-8">
                <p className="text-2xl font-bold pb-4 underline">Payment Policy:</p>
                <p>At time of delivery via cash or $Cashapp.</p>
            </div>
            <div className="pb-8">
                <p className="text-2xl font-bold pb-4 underline">Shipping Policy:</p>
                <p>Out of state shipping available. (Text for quote)</p>
            </div>
        </div>
    );
}

export default PolicySection;
