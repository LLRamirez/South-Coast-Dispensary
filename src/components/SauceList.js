import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { sauce } from '../data/menu-data';

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
                       src="https://www.pngfind.com/pngs/m/59-596989_weed-nugget-png-transparent-png.png"
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
         
          <DialogContent>
            <DialogContentText>
            <div className="p-8">
            <div className="text-center pt-4 pb-3">
                        <p className="text-2xl font-bold">THC SAUCE</p>
                        <p className="text-base">$40 1g | $120 3.5g</p>
                    </div>
                    <div className="flex flex-col items-center">
                {sauce.map((sau) => (
                    
                    
                    <div className="pb-8">
                    <img
                            src={sau.imageUrl}
                            className=""
                        />
                        <div className="">
                            <p className="text-lg">{sau.title}</p>
                            <p className="text-lg">{sau.description}</p>
                            <div>
                            <p className="text-lg">Reviews [{sau.reviews}]</p>
                              
                            </div>
                        </div>
                        
                    </div>
                    
                
                ))}
                </div>

            </div>
            
            </DialogContentText>
          </DialogContent>
          <DialogActions>
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