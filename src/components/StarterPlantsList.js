import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { starterPlants } from '../data/menu-data';
import StarIcon from '@mui/icons-material/Star';

class StarterPlantsList extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen('paper')}>
        <img
                       src="https://2qibqm39xjt6q46gf1rwo2g1-wpengine.netdna-ssl.com/wp-content/uploads/2021/05/25151622_web1_M1-EDH-20210512-Marijuana-Seeds-For-Sale--1280-.jpg"
                       alt='bud nug'
                       className="w-20"
                   />
        </Button>
        {/* <Button onClick={this.handleClickOpen('body')}>scroll=body</Button> */}
       
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
         
          <DialogContent
          className="bg-[#d3f9b5]"
          >
            <DialogContentText>
            <div className="">
            <div className="text-center pt-4 pb-3 bg-[#bf6900] mb-4 text-white">
                        <p className="text-2xl font-bold">STARTER PLANTS</p>
                        <p className="text-base">$100 each | $250 per 3</p>
                    </div>
                    <div className="flex flex-col items-center">
                {starterPlants.map((sp) => (
                    
                    
                    <div className="pb-8">
                    <img
                            src={sp.imageUrl}
                            className=""
                        />
                        <div className="text-[#0b2027]">
                            <p className="text-lg font-bold underline">{sp.title}</p>
                            <p className="text-base">{sp.thc}</p>
                            <div>
                            <p className="text-base">Reviews 
                            <StarIcon/>
                            [{sp.reviews}]</p>
                              
                            </div>
                        </div>
                        
                    </div>
                    
                
                ))}
                </div>

            </div>
            
            </DialogContentText>
          </DialogContent>
          <DialogActions
          className="bg-[#d3f9b5]"
          >
            <Button onClick={this.handleClose} color="primary">
             Exit
            </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default StarterPlantsList;