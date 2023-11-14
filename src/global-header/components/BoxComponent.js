import React from 'react'
import { Box, Image, ResponsiveContext, Meter } from "grommet";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const BoxComponent = () => {
  const percentage = 66;
    return (
      <div>
        <Box fill pad="small" height="1000" background="#F5F5F5">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0.25,
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",
              // Text size
              textSize: "16px",
              
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
              // Colors
              pathColor: `#01A982`,
              textColor: "#000",
              trailColor: "#d6d6d6",
              backgroundColor: "#01A982",
            })}
          />
          ;<p>Current Usage</p>
          <p>Predicted Total Usage</p>
        </Box>
      </div>
    );
}

export default BoxComponent
