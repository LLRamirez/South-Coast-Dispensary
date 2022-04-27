import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { elixir } from '../data/menu-data';

class ElixirList extends React.Component {
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
                       src="https://highoc.com/wp-content/uploads/116399_Syringe-Strawberry-AVATAR.jpg"
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
            <div className="text-center pt-4 pb-3 bg-[#bf6900] text-white mb-4">
                        <p className="text-2xl font-bold">THC OIL</p>
                        <p className="text-base">$100 each | $250 per 3</p>
                    </div>
                    <div className="flex flex-col items-center">
                {elixir.map((el) => (
                    
                    
                    <div className="pb-8">
                    <img
                            src={el.imageUrl}
                            className=""
                        />
                        <div className="text-[#0b2027]">
                            <p className="text-lg font-bold underline">{el.title}</p>
                            <p className="text-base">{el.thc}</p>
                            <div>
                            <p className="text-base">Reviews [{el.reviews}]</p>
                              
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

export default ElixirList;