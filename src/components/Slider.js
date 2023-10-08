import React from 'react'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import cd1 from './cdimg.jpg'
import cd2 from './cdimg1.jpg'
import cd3 from './cdimg2.jpg'

export default function Slider() {
  return (
    <>
      <div className="container margin marginb">
        <div className="row">
          <div className="col">
          <div className="">
              <img src={img1} className="card-img-top radius fluid" alt="img" />
            </div>
          </div>
          <div className="col">
          <div className="">
              <img src={img2} className="card-img-top radius fluid" alt="img" />
            </div>
          </div>
          <div className="col">
          <div className="">
              <img src={img3} className="card-img-top radius fluid" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="container margin">
        <div className="row">
          <div className="col">
          <div className="">
              <img src={cd1} className="card-img-top radius" alt="img" />
            </div>
          </div>
          <div className="col">
          <div className="">
              <img src={cd2} className="card-img-top radius" alt="img" />
            </div>
          </div>
          <div className="col">
          <div className="">
              <img src={cd3} className="card-img-top radius" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}