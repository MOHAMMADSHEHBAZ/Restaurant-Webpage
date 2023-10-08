import img from './maining.png'
import React from "react";

export default function Welcome(props) {
  return (
    <>
      <div className="welcome">
      <div className="container ">
        <div className="container">
          <div className="row">
            <h1 className="col-8" id='h1'>{props.title}</h1>
             <img src={img} alt="abc" id='img' className="col-4 fluid"/> 
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

