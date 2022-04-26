import React from 'react';

const PolicySection = props => {
    return (
        <div className="pt-8 pb-8">
            <div>
                <p>Delivery Policy:</p>
                <p>$100 minimum + $20 delivery fee.</p>
            </div>
            <div>
                <p>How to order?</p>
                <p>Text 401-292-2222 the following:</p>
                    <div>
                        <ol>
                            <li>1. Photo ID or Medical ID</li>
                            <li>2. Your Delivery Address</li>
                            <li>3. Your Order</li>
                            <li>4. Done! (ETA and confirmation# sent within 1 hr)</li>
                        </ol>
                    </div>
            </div>
            <div>
                <p>Payment Policy:</p>
                <p>At time of delivery via cash or $Cashapp.</p>
            </div>
            <div>
                <p>Shipping Policy:</p>
                <p>Out of state shipping available. (text for details)</p>
            </div>
            
        </div>
    );
}

export default PolicySection;
