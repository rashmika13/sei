import React from 'react';


// destructure at the argument level
const ColorPicker = ({ colors }) => {

  // receive the whole prop object as an argument and destrucre in the function scope
  // const {colors} = props;

  // just call props.colors

console.log("color prop inside ColorPicker", colors);

  return  (
    <div>
      {colors.map(color =>
      <button key={color}>{color}</button>
    )}
    </div>
  )
}

export default ColorPicker;
