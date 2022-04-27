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
            <h1 class="text-3xl font-bold underline pt-6 pb-4 text-center text-[#ddfc74]">MENU</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
               <div className="border-b-4 border-b-[#d3f9b5] pt-4 pb-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-lg">FLOWER</p>
                   <BudList/>
               </div> 
               <div className="border-b-4 border-b-[#d3f9b5] pt-4 pb-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-lg">CONCENTRATES</p>
                   <SauceList/>
               </div>
               <div className="border-b-4 border-b-[#d3f9b5] pt-4 pb-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-lg">CARTRIDGES</p>
                   <CartList/>
               </div> 
               <div className="border-b-4 border-b-[#d3f9b5] pt-4 pb-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-lg">EDIBLES</p>
                   <EdiblesList/>
               </div>  
               <div className="border-b-4 border-b-[#d3f9b5] pt-4 pb-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-lg">ORAL SYRINGE</p>
                   <ElixirList/>
               </div>  
               <div className="border-b-4 border-b-[#d3f9b5] pt-4 pb-4 flex flex-row justify-between items-center w-full">
                   <p className="font-bold text-lg">STARTER PLANTS</p>
                   <StarterPlantsList/>
               </div>  
            </div>
        </div>
    );

}

export default Menu;