import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const StorePhotoGallery = props => {

    const slider = (
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          <div data-src="./greendelivery.png" />
          <div data-src="./plants.png" />
          <div data-src="https://thumbs.gfycat.com/OccasionalFortunateChihuahua-max-1mb.gif" />
        </AutoplaySlider>
      );

    return (
        <div className="flex justify-center">
            {/* <img
                src="./plants.png"
                alt="thc plants harvest"
            /> */}
            {slider}
        </div>
    );
}

export default StorePhotoGallery;