import React from 'react'
import { Button } from "grommet";
const OptimizeContainer = ({
  modal,
  modalToggle,
  func,
  optimized,
  setOptimized,
  toggleSetOptimized,
  toggleTransformFunc
}) => {
  return (
    <div>
      {optimized ? (
        <div>
          <p>Confirm that you would like to optimize for compute.</p>
          <div>
            <Button onClick={toggleTransformFunc} primary label="Confirm" />
            <Button onClick={toggleSetOptimized} label="Cancel" />
          </div>
        </div>
      ) : (
        <>
          <p>Would you like to optimize for compute?</p>
          <Button onClick={func} primary label="Optimize" />
        </>
      )}
    </div>
  );
};

export default OptimizeContainer;
