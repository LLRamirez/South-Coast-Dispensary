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
          <div data-src="https://images.thestar.com/aWC_7_0biAcqpvsmU4bj3_d3W4s=/1086x724/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/edmonton/2018/07/29/medical-cannabis-grower-tom-neumann-takes-starmetro-through-his-process-from-seed-to-harvest/_2e6a4105.jpg" />
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