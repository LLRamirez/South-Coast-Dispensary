import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { products } from '../data/menu-data';

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
         
          <DialogContent>
            <DialogContentText>
            <div className="p-8">
                
                {products.map((prod) => (
                    <div>
                    <div className="text-center pt-4 pb-3">
                        <p className="text-2xl font-bold">HOUSE BUDS</p>
                        <p className="text-base">$220oz | $120 hlf</p>
                    </div>
                    <div className="">
                        <ul className="list-disc">
                            <li className="text-lg">{prod.title}</li>
                            <li className="text-lg">{prod.price}</li>
                        </ul>
                        <image
                            src={prod.imageUrl}
                        />
                    </div>
                    
                </div>
                ))}
        <div>

<div className="text-center pt-4 pb-3">
    <p className="text-2xl font-bold">MID TIER</p>
    <p className="text-base">$250oz | $130 hlf</p>
</div>
<div className="">
    <ul className="list-disc">
        <li className="text-lg">Lemon Haze</li>
        <li className="text-lg">Ice Cream Cake</li>
        <li className="text-lg">Whoosie Who</li>
    </ul>
</div>
</div>

<div>

<div className="text-center pt-4 pb-3">
    <p className="text-2xl font-bold">TOP TIER</p>
    <p className="text-base">$280oz | $150 hlf</p>
</div>
<div className="">
    <ul className="list-disc">
        <li className="text-lg">Lava Cake</li>
        <li className="text-lg">Peanut Butter Breath</li>
        <li className="text-lg">Snicker Doodle</li>
    </ul>
</div>
</div>

<div>

<div className="text-center pt-4 pb-3">
    <p className="text-2xl font-bold">SECRET STASH</p>
    <p className="text-base">$300oz | $160 hlf</p>
</div>
<div className="">
    <ul className="list-disc">
        <li className="text-lg">Miracle Alien Cookies</li>
        <li className="text-lg">Hell on Wheels</li>
        <li className="text-lg">Strawberry Banana</li>
    </ul>
</div>
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

export default BudList;