import React from 'react'
import { Button } from "grommet";
const OmptimizeContainer = ({ modal, modalToggle, func }) => {
    const toggleModal = () => {
      modalToggle(!modal)
  }
    return (
    <div>
      <Button onClick={func} primary label="Optimize" />
    </div>
  );
};

export default OmptimizeContainer
