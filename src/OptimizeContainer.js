import React from 'react'
import { Button } from "grommet";
const OptimizeContainer = ({ modal, modalToggle, func }) => {
  return (
    <div>
      <p>Would you like to optimize for compute?</p>
      <Button onClick={func} primary label="Optimize" />
    </div>
  );
};

export default OptimizeContainer;
