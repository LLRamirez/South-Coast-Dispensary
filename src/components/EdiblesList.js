import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { edibles } from '../data/menu-data';
import StarIcon from '@mui/icons-material/Star';

class EdiblesList extends React.Component {
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
                       src="https://images.ctfassets.net/cnu0m8re1exe/3ePSVkzg1uMq0VhFtdZPpf/52124ccc84911c1e62875f3dcc203da7/15_Best_THC_Edibles.png"
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
                        <p className="text-2xl font-bold">EDIBLES</p>
                        <p className="text-base">$40 each | $200 per 6</p>
                    </div>
                    <div className="flex flex-col items-center">
                {edibles.map((ed) => (
                    
                    
                    <div className="pb-8">
                    <img
                            src={ed.imageUrl}
                            className=""
                        />
                        <div className="text-[#0b2027]">
                            <p className="text-lg font-bold underline">{ed.title}</p>
                            <p className="text-base">{ed.thc}</p>
                            <div>
                            <div className="flex flex-row">
                            <p className="text-base">Reviews</p>
                            
                            <p className="text-lg">
                            <StarIcon/>
                            [{ed.reviews}]</p>
                            </div>
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

export default EdiblesList;