import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import BudList from '../components/BudList';
import StarterPlantsList from "../components/StarterPlantsList";
import EdiblesList from "../components/EdiblesList";
import ElixirList from "../components/ElixirList";
import SauceList from "../components/SauceList";
import CartList from "../components/CartList";



export default function MainNavigation() {

  /*
  react useState hook to save the current open/close state of the drawer,
  normally variables dissapear afte the function was executed
  */
  const [open, setState] = useState(false);

  
  /*
  function that is being called every time the drawer should open or close,
  the keys tab and shift are excluded so the user can focus between
  the elements with the keys
  */
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (

    <AppBar 
    class="bg-[#ddfc74]"
    position="static">
      <Container maxWidth="lg" disableGutters="true">
        <Toolbar
          className="bg-[#ddfc74] text-[#0b2027]"
        >

            {/* <Typography variant="h6" sx={{flexGrow: 1, fontWeight: 700}}> */}
           <p className="font-bold grow pt-2 pb-2 text-xl">SOUTHCOAST MJ DISPENSARY DELIVERY</p>
            {/* </Typography> */}

            <Box component="div" sx={{
              display: {
                // xs: 'none',
                xs: 'block',
                sm: 'block',
              }
            }}>
              
            </Box>

            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="open drawer" 
              onClick={toggleDrawer(true)}
              sx={{ 
                mr: 2,
                display: {
                  xs: 'block',
                  sm: 'block',
                }
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* The outside of the drawer */}
            <Drawer
              //from which side the drawer slides in
              anchor="right"
              //if open is true --> drawer is shown
              open={open}
              //function that is called when the drawer should close
              onClose={toggleDrawer(false)}
              //function that is called when the drawer should open
              onOpen={toggleDrawer(true)}
            >
                {/* The inside of the drawer */}
                <Box sx={{
                  p: 2,
                  height: 1,
                  backgroundColor: "#d3f9b5",
                  color: "#bf6900",
                }}>

                  {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
                  <IconButton sx={{mb: 2}}>
                    <CloseIcon onClick={toggleDrawer(false)} />
                  </IconButton>

                  <Divider sx={{mb: 2}} />

                  <Box sx={{mb: 2}}>
                    <ListItemButton
                      className="flex justify-between"
                    >
                      <ListItemIcon>
                      <p className="text-[#0b2027] font-bold">Flower</p>
                      </ListItemIcon>
                      {/* <ListItemText primary="Bud" /> */}
                      <BudList/>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                        {/* <DescriptionIcon sx={{color: "primary.main"}}/> */}
                        <p className="text-[#0b2027] font-bold">Concentrates</p>
                      </ListItemIcon>
                      {/* <ListItemText primary="Concentrates" /> */}
                      <SauceList/>
                    </ListItemButton>

                    <ListItemButton>
                      <ListItemIcon>
                      <p className="text-[#0b2027] font-bold">Cartridges</p>
                        {/* <FolderIcon sx={{color: "primary.main"}} /> */}
                        {/* <ListItemText primary="Cartridges" />  */}
                      </ListItemIcon>
                      <CartList/>
                      
                    </ListItemButton>


                    <ListItemButton>
                      <ListItemIcon>
                        <p className="text-[#0b2027] font-bold">Edibles</p>
                      </ListItemIcon>
                      <EdiblesList/>
                      {/* <ListItemText primary="Edibles" /> */}
                    </ListItemButton>


                    <ListItemButton>
                      <ListItemIcon>
                        <p className="text-[#0b2027] font-bold">Oral Syringe</p>
                      </ListItemIcon>
                      <ElixirList/>
                      {/* <ListItemText primary="Oral Syringe" /> */}
                    </ListItemButton>


                    <ListItemButton>
                      <ListItemIcon>
                        <p className="text-[#0b2027] font-bold">Starter Plants</p>
                      </ListItemIcon>
                      <StarterPlantsList/>
                      {/* <ListItemText primary="Seeds & Starter Plants" /> */}
                    </ListItemButton>


                  </Box>
                  

                
                </Box>
              
            </Drawer>
           

          </Toolbar>
      </Container>
    </AppBar>

  );
}