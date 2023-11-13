import React from 'react'
import "./Modal.css"
import { Card, CardHeader, Box, CardBody, CardFooter, Button, Icons } from "grommet";
const Modal = ({toggle}) => {
    return (
      <>
        <Box fill align="center" justify="center">
          {/* Parent box to position the absolute box relative to */}

          {/* This is the parent Box */}
          <Box
            style={{
              position: "absolute",
              top: "50%", // You can adjust these values as needed
              left: "50%",
              width: "400px",
              height: "400px",
              background: "gray",
              transform: "translateX(-50%)",
            }}
          >
            {/* Content of the absolutely positioned box */}

            <div>
              <Card fill height="small" width="small" background="light-1">
                <CardHeader pad="medium">
                  Header
                  <div className="card-header-exit" onClick={toggle}>X</div>
                </CardHeader>
                <CardBody pad="medium">
                  Would like to optimize the compute?
                </CardBody>
                <Button primary label="Optimize" />

                <CardFooter pad={{ horizontal: "small", vertical: "small" }} background="light-2">
               
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
      </>
    );
}

export default Modal
