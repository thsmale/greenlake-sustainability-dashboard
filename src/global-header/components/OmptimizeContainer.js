import React from 'react'
import { Button } from "grommet";
const OmptimizeContainer = ({ modal, modalToggle, func }) => {
    const toggleModal = () => {
      modalToggle(!modal)
  }
    return (
        <div>
            <p>Would you like to optimize for compute?</p>
      <Button onClick={func} primary label="Optimize" />
    </div>
  );
};

export default OmptimizeContainer
