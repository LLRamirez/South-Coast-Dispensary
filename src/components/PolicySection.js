import React from 'react';

const PolicySection = props => {
    return (
        <div>
            <div>
                <p>Delivery Policy:</p>
                <p>$100 minimum + $20 delivery fee.</p>
            </div>
            <div>
                <p>How to order?</p>
                <p>Text 401-292-2222 the following:</p>
                    <div>
                        <ul>
                            <li>Photo ID or Medical ID</li>
                            <li>Your Delivery Address</li>
                            <li>Your Order</li>
                            <li>Done! (receive ETA and confirmation# within 1 hr of text )</li>
                        </ul>
                    </div>
            </div>
            <div>
                <p>Payment Policy:</p>
                <p>At the time of delivery via cash or $Cashapp.</p>
            </div>
            <div>
                <p>Shipping Policy:</p>
                <p>Shipping availvble to out of state customers. (text for more info)</p>
            </div>
            
        </div>
    );
}

export default PolicySection;
