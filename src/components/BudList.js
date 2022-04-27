import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { houseBud, midTier, topTier, secretStash } from '../data/menu-data';
import StarIcon from '@mui/icons-material/Star';

class BudList extends React.Component {
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
         
          <DialogContent
            className="bg-[#d3f9b5]"
          >
            <DialogContentText>
            <div className="">
            <div className="text-center pt-4 pb-3 bg-[#bf6900] text-white mb-4">
                        <p className="text-2xl font-bold whitespace-nowrap">HOUSE BUDS</p>
                        <p className="text-base">$220oz | $120 hlf</p>
                    </div>
                    <div className="flex flex-col items-center">
                {houseBud.map((hbud) => (
                    
                    
                    <div className="pb-8">
                    <img
                            src={hbud.imageUrl}
                            className=""
                        />
                        <div className="text-[#0b2027]">
                            <p className="text-lg font-bold underline">{hbud.title}</p>
                            {/* <p className="text-lg">{hbud.price}</p> */}
                            <div>
                            
                            <p className="text-base">Reviews 
                            <StarIcon />
                            [{hbud.reviews}]</p>

                            </div>
                        </div>
                        
                    </div>
                    
                
                ))}
                </div>
        <div>

<div className="text-center pt-4 pb-3 bg-[#bf6900] text-white mb-4">
    <p className="text-2xl font-bold">MID TIER</p>
    <p className="text-base">$250oz | $130 hlf</p>
</div>
<div className="flex flex-col items-center">
  {midTier.map((mT) => (
                    
                    
                    <div className="pb-8">
                    <img
                            src={mT.imageUrl}
                            className=""
                        />
                        <div className="text-[#0b2027]">
                            <p className="text-lg font-bold underline">{mT.title}</p>
                            {/* <p className="text-lg">{mT.price}</p> */}
                            <div>
                            <p className="text-base">Reviews 
                            <StarIcon />
                            [{mT.reviews}]</p>
                            
                            </div>
                        </div>
                        
                    </div>
                    
                
                ))}
                </div>
</div>

<div>

<div className="text-center pt-4 pb-3 bg-[#bf6900] text-white mb-4">
    <p className="text-2xl font-bold">TOP TIER</p>
    <p className="text-base">$280oz | $150 hlf</p>
</div>
<div className="flex flex-col items-center">
  {topTier.map((tT) => (
                    
                    
                    <div className="pb-8">
                    <img
                            src={tT.imageUrl}
                            className=""
                        />
                        <div className="text-[#0b2027]">
                            <p className="text-lg font-bold underline">{tT.title}</p>
                            {/* <p className="text-lg">{tT.price}</p> */}
                            <div>
                            <p className="text-base">Reviews 
                            <StarIcon />
                            [{tT.reviews}]</p>
                            
                            </div>
                        </div>
                        
                    </div>
                    
                
                ))}
                </div>
</div>

<div>

<div className="text-center pt-4 pb-3 bg-[#bf6900] text-white mb-4">
    <p className="text-2xl font-bold whitespace-nowrap">SECRET STASH</p>
    <p className="text-base">$300oz | $160 hlf</p>
</div>
<div className="flex flex-col items-center">
  {secretStash.map((sSt) => (
                    
                    
                    <div className="pb-8">
                    <img
                            src={sSt.imageUrl}
                            className=""
                        />
                        <div className="text-[#0b2027]">
                            <p className="text-lg font-bold underline">{sSt.title}</p>
                            {/* <p className="text-lg">{prod.price}</p> */}
                            <div>
                            <p className="text-base">Reviews <StarIcon />
                            [{sSt.reviews}]</p>
                            
                            </div>
                        </div>
                        
                    </div>
                    
                
                ))}
                </div>
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

export default BudList;