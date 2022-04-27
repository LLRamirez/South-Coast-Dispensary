import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { carts } from '../data/menu-data';
import StarIcon from '@mui/icons-material/Star';

class CartList extends React.Component {
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
                       src="https://helios-i.mashable.com/imagery/articles/06rJYr9mSqWxM4KcVQZVejH/hero-image.fill.size_1200x1200.v1623386613.jpg"
                       alt='thc cartrigdes'
                       className="w-20"
                   />
        </Button>
       
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
            <div className="text-center pt-4 pb-3 bg-[#bf6900] text-white mb-4">
                        <p className="text-2xl font-bold">CARTRIDGES</p>
                        <p className="text-base">$60 each | $400 per/4</p>
                    </div>
                    <div className="flex flex-col items-center">
                {carts.map((cart) => (
                    
                    
                    <div className="pb-8">
                    <img
                            src={cart.imageUrl}
                            className=""
                        />
                        <div className="text-[#0b2027]">
                            <p className="text-lg font-bold underline">{cart.title}</p>
                            
                            <div>
                            <p className="text-base">Reviews 
                            <StarIcon />
                            [{cart.reviews}]</p>
                              
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

export default CartList;