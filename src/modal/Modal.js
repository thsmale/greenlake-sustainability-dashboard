import React, { useState } from 'react'
import "./Modal.css"
import { Card, CardHeader, Box, CardBody, CardFooter, Button, Spinner } from "grommet";
const Modal = ({ toggle, togglePredictive, modalToggle }) => {
  const [loader, setLoader] = useState(false);

  const setLoaderFunc = () => {
    console.log("this is the loader before", loader);
    setLoader(true);

    // console.log("this is the loader after", loader);
    console.log("this is the loader after", loader);
    setTimeout(() => {

    }, 2000);
    togglePredictive();
    modalToggle();
  };

  return (
    <>
      <Box
        fill
        style={{
          background: "rgba(0,0,0,0.5)",
          position: "absolute",
          width: "100vw",
          height: "100vh",
        }}
        align="center"
        justify="center"
      >
        {/* Parent box to position the absolute box relative to */}

        {/* This is the parent Box */}
        <Box style={{}}>
          {/* Content of the absolutely positioned box */}

          <div>
            {loader ? (
              <Spinner />
            ) : (
              <Card fill height="small" width="small" background="light-1">
                <CardHeader pad="medium">
                  Header
                  <div className="card-header-exit" onClick={toggle}>
                    X
                  </div>
                </CardHeader>
                <CardBody pad="medium">
                  Would like to optimize the compute?
                </CardBody>
                <Button onClick={setLoaderFunc} primary label="Optimize" />

                <CardFooter
                  pad={{ horizontal: "small", vertical: "small" }}
                  background="light-2"
                ></CardFooter>
              </Card>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Modal
