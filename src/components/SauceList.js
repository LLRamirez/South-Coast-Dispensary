import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { sauce } from '../data/menu-data';
import StarIcon from '@mui/icons-material/Star';

class SauceList extends React.Component {
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
                       src="https://greenrushdaily.com/wp-content/uploads/2017/03/18-different-kinds-cannabis-concentrates-6.jpg"
                       alt='thc wax'
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
            <div className="text-center pt-4 pb-3 mb-4 bg-[#bf6900] text-white">
                        <p className="text-2xl font-bold">THC WAX</p>
                        <p className="text-base">$40 1g | $120 3.5g</p>
                    </div>
                    <div className="flex flex-col items-center">
                {sauce.map((sau) => (
                    
                    
                    <div className="pb-8">
                    <img
                            src={sau.imageUrl}
                            className=""
                        />
                        <div className="text-[#0b2027]">
                            <p className="text-lg font-bold underline">{sau.title}</p>
                            <p className="text-base">{sau.description}</p>
                            <div>
                            <p className="text-base">Reviews 
                            <StarIcon/>
                            [{sau.reviews}]</p>
                              
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

export default SauceList;