import React from "react";
import img1 from './imd.jpg'
import img2 from './imd1.jpg'

export default function Cards() {
  return (
    <>
      <div
        className="container d-flex align-item-center justify-content-center "
        id="services">
        <h1 className="mt-10">Our Services</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col margin">
            <div class="">
              <h4>CATERING SERVICE</h4>
              <img src={img1} className="size card-img-top fluid radius" alt="..." />
            </div>
          </div>
          <div className="col margin">
            <div class="">
              <h4>HOME DELIVERY</h4>
              <img src={img2} className="size card-img-top fliud radius" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
