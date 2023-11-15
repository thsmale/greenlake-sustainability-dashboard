import React from 'react'
import { Card, CardBody, CardHeader } from "grommet";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";

const BoxComponent = ({toggle,  predictedTotalEmissons, setPredictedTotalEmissons,totalEmissons,
            setTotalEmissons, predictive, totalSoFar, setTotalSoFar, predictedTotalSoFar }) => {
  let percentageEmisson = (totalEmissons / predictedTotalEmissons) * 100;
  let percentageCPU = (totalSoFar / predictedTotalSoFar) * 100;
 
  return (
    <div>
      <Card>
        { toggle ? <CardHeader>Compute</CardHeader> : <CardHeader>Emissions</CardHeader> }
        <CardBody>
        <CircularProgressbarWithChildren value={toggle ? percentageCPU.toFixed(0) : percentageEmisson.toFixed(0) } styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Text size
              textSize: "16px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
              // Colors
              pathColor: `${ toggle ? "#01A982" : "#FF7701"}`,
              textColor: "#000",
              trailColor: "#d6d6d6",
              backgroundColor: "#01A982",
            })}>
            <div style={{ fontSize: 48, marginTop: -5 }}>
              <strong>{toggle ? percentageCPU.toFixed(0) : percentageEmisson.toFixed(0)}%</strong>
            </div>
          </CircularProgressbarWithChildren>
          <div>
            {toggle ? (
              <p>Current Usage this month: {totalSoFar} CPU</p>
            ) : (
              <p>Current Usage this month: {totalEmissons} MTCO2e</p>
            )}
          </div>
          {toggle ? (
            <p>Predicted Current Usage this month: {predictedTotalSoFar} CPU</p>
          ) : (
            <p>
              Predicted Current Usage this month: {predictedTotalEmissons} MTCO2e
            </p>
        )}
        </CardBody>
      </Card>
    </div>
  );
};

export default BoxComponent
