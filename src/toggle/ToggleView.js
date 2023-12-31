import React from 'react'
import "./ToggleView.css"
const ToggleView = ({ toggleBtn, toggle,togglet}) => {

   
    return (
      <div>
        <div className="toggle-view-container">
          <div className="ToggleView">
            <div onClick={toggleBtn} className={`${toggle ? "green" : ""}`}>
              <p>Compute</p>
            </div>
            <div onClick={toggleBtn} className={`${toggle ? "" : "orange"}`}>
              <p>Emissions</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ToggleView
