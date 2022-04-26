import React from 'react';

import BudList from '../components/BudList';
import SauceList from '../components/SauceList';
import CartList from './CartList';
import EdiblesList from './EdiblesList';
import ElixirList from '../components/ElixirList';
import StarterPlantsList from '../components/StarterPlantsList';

const Menu = (props) => {
    return(
        <div>
            <div className="pt-6">
            <h1 class="text-3xl font-bold underline pt-6 pb-4">MENU</h1>
            </div>
            <div className="bg-red-400 flex flex-col justify-center items-center">
               <div className="bg-purple-400 pt-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-lg">FLOWER</p>
                   <BudList/>
               </div> 
               <div className="bg-green-400 pt-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-lg">CONCENTRATES</p>
                   <SauceList/>
               </div>
               <div className="bg-orange-400 pt-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-lg">CARTRIDGES</p>
                   <CartList/>
               </div> 
               <div className="bg-orange-400 pt-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-lg">EDIBLES</p>
                   <EdiblesList/>
               </div>  
               <div className="bg-orange-400 pt-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-base">TINCTURE SYRINGE</p>
                   <ElixirList/>
               </div>  
               <div className="bg-orange-400 pt-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-base">SEED & STARTER PLANTS</p>
                   <StarterPlantsList/>
               </div>  
            </div>
        </div>
    );

}

export default Menu;