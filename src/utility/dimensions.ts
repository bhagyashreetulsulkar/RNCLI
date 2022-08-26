import {Dimensions, PixelRatio} from 'react-native';

const screenWidth: number = Dimensions.get('window').width;
const screenHeight: number = Dimensions.get('window').height;

const DesignHeight: number = 812;
const DesignWidth: number = 360;

// It is based on the screen width of your design layouts e.g Height 812 x Width 360

// function normalize(size) {
//   return PixelRatio.roundToNearestPixel(size * scale);
// }

const viewWidth = (width: number): number => {
  if (!width) {
    const error = new Error('Width must present');
    throw error;
  }

  // Parse string percentage input and convert it to number.
  const percent: number = (width / DesignWidth) * 100;
  const elemWidth: number = parseFloat(percent + '%');

  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

const viewHeight = (height: number): number => {
  if (!height) {
    const error = new Error('Height must present');
    throw error;
  }

  // Parse string percentage input and convert it to number.
  const percent: number = (height / DesignHeight) * 100;
  const elemHeight: number = parseFloat(percent + '%');

  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

// The below two functions can be used for accurate ratio between width's and height's
// Use them when required to use very sharp ratio of sizes.
const viewHeightAcc = (height: number, min: number): number => {
  if (!height) {
    const error = new Error('Height must present');
    throw error;
  }

  if (!min) {
    const error = new Error('min must present');
    throw error;
  }

  const percent: number = (height / DesignHeight) * 100;
  const elemHeight: number = parseFloat(percent + '%');

  // Exact percentage of pixel ratio
  const val: number = (screenHeight * elemHeight) / 100;

  return val > min ? val : min;
};

const viewWidthAcc = (width: number, min: number): number => {
  if (!width) {
    const error = new Error('Width must be present');
    throw error;
  }

  if (!min) {
    const error = new Error('min must be present');
    throw error;
  }

  const percent: number = (width / DesignWidth) * 100;
  const elemHeight: number = parseFloat(percent + '%');

  // Exact percentage of pixel ratio
  const val: number = (screenWidth * elemHeight) / 100;

  return val > min ? val : min;
};

export default {
  screenWidth,
  screenHeight,
  viewHeight,
  viewWidth,
  viewHeightAcc,
  viewWidthAcc,
};
