import React from 'react';

const PolicySection = props => {
    return (
        <div className="pt-8 pb-8">
            <div className="pb-8 text-center">
                <p className="text-2xl font-bold pb-4 underline text-[#ddfc74]">Delivery Policy:</p>
                <p><b>$100</b> min + <b>$20</b> delivery fee.</p>
            </div>
            <div className="pb-8">
                <p className="text-2xl font-bold pb-4 underline text-center text-[#ddfc74]">How to order?</p>
                <p className="pb-2 text-center">Text <b>774-441-2993</b>:</p>
                    <div className="flex justify-center">
                        <ol className="text-left">
                            <li>1. Your <u><b>Photo ID</b></u> or <u><b>Medical ID</b></u></li>
                            <li>2. Your <u><b>Delivery Address</b></u></li>
                            <li>3. Your <u><b>Order</b></u></li>
                            <li>4. <b>Done!</b> ( ETA & Confirmation # sent within 1hr )</li>
                        </ol>
                    </div>
            </div>
            <div className="pb-8 text-center">
                <p className="text-2xl font-bold pb-4 underline text-[#ddfc74]">Payment Policy:</p>
                <p>At time of delivery via <b>Cash</b> or <b>$Cashapp</b>.</p>
            </div>
            <div className="pb-8 text-center">
                <p className="text-2xl font-bold pb-4 underline text-[#ddfc74]">Shipping Policy:</p>
                <p><b>Out of State</b> shipping available. ( Text for quote )</p>
            </div>
        </div>
    );
}

export default PolicySection;
