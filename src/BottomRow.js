import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  const [quarter, setQuarter]= useState(1);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">0</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">0</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">0</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick={function() {setQuarter(quarter + 1)}} className='buttons' className='newButtons'>+ Quarter</button>
      </div>
    </div>
  );
};

export default BottomRow;
