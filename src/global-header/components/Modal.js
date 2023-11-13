import React from 'react'
import { Card, CardHeader, Box, CardBody, CardFooter, Button, Icons } from "grommet";
const Modal = ({toggle}) => {
    return (
      <>
        <Box fill align="center" justify="center">
          {/* Parent box to position the absolute box relative to */}

          <Box
            width="large"
            height="medium"
            background="light-2"
            align="center"
            justify="center"
          >
            {/* This is the parent Box */}
            <Box
              style={{
                position: "absolute",
                top: "50px", // You can adjust these values as needed
                left: "50px",
                width: "100px",
                height: "100px",
                background: "lightblue",
              }}
            >
              {/* Content of the absolutely positioned box */}
              Absolute Box
              <div>
                <Card height="small" width="small" background="light-1">
                  <CardHeader pad="medium">Header</CardHeader>
                  <CardBody pad="medium">Body</CardBody>
                  <CardFooter
                    pad={{ horizontal: "small" }}
                    background="light-2"
                  >
                    <p>gregeg</p>
                    {/* <Button icon={<Icons.Favorite color="red" />} hoverIndicator />
                <Button
                  icon={<Icons.ShareOption color="plain" />}
                  hoverIndicator
                /> */}
                  </CardFooter>
                </Card>
              </div>
            </Box>
          </Box>
        </Box>
      </>
    );
}

export default Modal
