import React from 'react';
import { products } from '../data/menu-data';
import ScrollDialog from '../components/ScrollDialog';
import BudList from '../components/BudList';

const Menu = (props) => {
    return(
        <div>
            <div>
            <h1 class="text-3xl font-bold underline">MENU</h1>
            </div>
            <div className="bg-red-400 flex flex-col justify-center items-center w-full">
               <div className="bg-purple-400 pt-4 px-4 flex flex-row justify-between w-5/6">
                   <p>BUDS</p>
                   {/* <img
                       src="https://www.pngfind.com/pngs/m/59-596989_weed-nugget-png-transparent-png.png"
                       alt='bud nug'
                       className="w-20"
                   /> */}
                   <BudList/>
               </div> 
               <div className="bg-green-400 pt-4 px-4 flex flex-row justify-between w-5/6">
                   <p>Diamond Sauce</p>
                   <img
                       src="https://www.pngfind.com/pngs/m/59-596989_weed-nugget-png-transparent-png.png"
                       alt='bud nug'
                       className="w-20"
                   />
               </div>
               <div className="bg-orange-400 pt-4 px-4 flex flex-row justify-between w-5/6">
                   <p>Carts</p>
                   <img
                       src="https://www.pngfind.com/pngs/m/59-596989_weed-nugget-png-transparent-png.png"
                       alt='bud nug'
                       className="w-20"
                   />
               </div>  
               <ScrollDialog/>
            </div>
        </div>
    );

}

export default Menu;