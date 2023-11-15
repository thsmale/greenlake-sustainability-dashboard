import React from 'react'
import { Card, CardBody, CardHeader, Button } from "grommet";

const OptimizeContainer = ({
  func,
  optimized,
  setOptimized,
  toggleSetOptimized,
  toggleTransformFunc,
  transform
}) => {
  return (
    <div>
      <Card>
        <CardHeader>Optimize</CardHeader>
        <CardBody>
          {transform ? (
            <>
            <p>Compute Optimized</p>
            </>
          ) : (
            <>
              {optimized ? (
                <div>
                  <p>Confirm that you would like to optimize for compute.</p>
                  <div>
                    <Button
                      onClick={toggleTransformFunc}
                      primary
                      label="Confirm"
                    />
                    <Button onClick={toggleSetOptimized} label="Cancel" />
                  </div>
                </div>
              ) : (
                <>
                  <p>Would you like to optimize for compute?</p>
                  <Button onClick={func} primary label="Optimize" />
                </>
              )}
            </>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default OptimizeContainer;
