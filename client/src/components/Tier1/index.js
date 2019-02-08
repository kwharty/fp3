import React from "react";
import "./about.css";
import bong1 from "./bong.jpg";

const Tier1 = () => {
  return (

    <div style={{
      margin: '50px'
    }}>

      <div className="row justify-content-center no-gutters">
        <div className="col-6" style={{
paddingTop: "100px",
paddingBottom: "100px",
        }} >
          <div>
            <img className="d-block w-100" src={bong1} alt="GLASS10" style={{
              width: "300px",
              height: "500px"
            }} />

          </div>

          <div className="col-12 justify-content-right" style={{
paddingTop: "20px",
paddingBottom: "0px",
        }} >
            <div className="bg-black  text-center h-100 project"/>
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <div className="card mb-4 box-shadow">
                  <div className="card-header" id="tiers" >
                    <h2 className="my-0 font-weight-normal">Tier 1</h2>
                  </div>
                  <div className="card-body" id="tiers">
                    <h1 className="card-title pricing-card-title">$30 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4" />
                    <li>Shipped to you in discrete packaging.</li>
                    <li>Collectible box</li>
                    <li>One handpicked water pipe & a collection of accessories</li>
                    <li>Raffle entry for giveaways.</li>
                    <li>A $60 value!</li> 
                    <br></br><br></br>

                    <button type="button" className="btn btn-md btn-block btn-primary" ><a href="/checkout1">
                      <h4 className="text-white"> Get started</h4>
                    </a></button>
                  </div>
                </div>
                <hr className="d-none d-lg-block mb-0 mr-0"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  );

}

export default Tier1;