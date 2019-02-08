import React from 'react';
import "./about.css";
// import bong from "./bong.jpg";
import bong1 from "./bong1.jpg";
// import bong2 from "./bong3.jpg";
// import bong3 from "./bowl1.jpg";
// import bong4 from "./bong2.jpg";



const Tier2 = () => {
  return (



    <div style={{
      margin: '50px'
  }}>
      <div className="row justify-content-center no-gutters">
        <div className="col-6" style={{
// paddingTop: "100px",
paddingBottom: "100px",
        }}>
          <div>




          <img className="d-block w-100" src={bong1} alt="GLASS10" style ={{

width: "300px",
height: "500px"


        }}/>



          </div>
          <div className="col-12 justify-content-right" style={{
paddingTop: "20px",
paddingBottom: "0px",
        }}>
            <div className="bg-black  text-center h-100 project" />
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h2 className="my-0 font-weight-normal">Tier 2</h2>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$50 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4" />
                    <li>Shipped to you in discrete packaging.</li>
                    <li>or a single box $65</li>
                    <li>Collectible box</li>
                    <li>One handpicked water pipe & a collection of accessories</li>
                    <li> 2x Raffle entry for giveaways.</li>
                    <li> add a tier 1 combo for only $25</li>                   
                     <li>A $110 Value!</li> <br></br><br></br>                   
                    <button type="button" className="btn btn-md btn-block btn-primary"><a href="/checkout2">
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

export default Tier2;







