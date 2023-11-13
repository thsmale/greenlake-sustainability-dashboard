import React from 'react'
import { Box, Image, ResponsiveContext, Meter } from "grommet";
const BoxComponent = () => {
    return (
      <div>
        <Box fill pad="small" height="1000" background="#F5F5F5">
          <Meter
            values={[
              { round:true,
                value: 60,
                label: "sixty",
                onClick: () => {},
              },
            ]}
            aria-label="meter"
          />
          <p>Current Usage</p>
          <p>Predicted Total Usage</p>
        </Box>
      </div>
    );
}

export default BoxComponent
