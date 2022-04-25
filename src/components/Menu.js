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
            <div>
            <h1 class="text-3xl font-bold underline">MENU</h1>
            </div>
            <div className="bg-red-400 flex flex-col justify-center items-center w-full">
               <div className="bg-purple-400 pt-4 px-4 flex flex-row justify-between w-5/6">
                   <p>BUDS</p>
                   <BudList/>
               </div> 
               <div className="bg-green-400 pt-4 px-4 flex flex-row justify-between w-5/6">
                   <p>Concentrates</p>
                   <SauceList/>
               </div>
               <div className="bg-orange-400 pt-4 px-4 flex flex-row justify-between w-5/6">
                   <p>Elevted Carts</p>
                   <CartList/>
               </div> 
               <div className="bg-orange-400 pt-4 px-4 flex flex-row justify-between w-5/6">
                   <p>O.D. Edibles</p>
                   <EdiblesList/>
               </div>  
               <div className="bg-orange-400 pt-4 px-4 flex flex-row justify-between w-5/6">
                   <p>VooDoo  Child Elixer</p>
                   <ElixirList/>
               </div>  
               <div className="bg-orange-400 pt-4 px-4 flex flex-row justify-between w-5/6">
                   <p>Seed & Starter Plants</p>
                   <StarterPlantsList/>
               </div>  
            </div>
        </div>
    );

}

export default Menu;