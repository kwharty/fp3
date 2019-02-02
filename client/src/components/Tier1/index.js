import React from "react";
import "./about.css";
import bong1 from "./bong.jpg";



const Tier1 = () => {
  return (

    <div style={{
      margin: '50px'
  }}>
      <div className="row justify-content-center no-gutters">
        <div className="col-6">
          <div>




          <img className="d-block w-100" src={bong1} alt="GLASS10" style ={{

width: "300px",
height: "500px"


        }}/>






            {/* <div>
              <img className="img-fluid" src="../img/bong.jpg" alt="" />
              <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={bong1} alt="GLASS10" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="../img/ashCatch1.jpg" alt="Accoriess" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="../img/bowl1.jpg" alt="swag" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
 */}

          </div>
          <div className="col-12 justify-content-right">
            <div className="bg-black  text-center h-100 project" />
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h2 className="my-0 font-weight-normal">Teir 1</h2>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$30 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4" />
                    <li>Shipped to you in discrete packaging.</li>
                    <li>Collectible box</li><br />
                    <li>One handpicked water pipe & a clollection of accesorries</li>
                    <li>Raffle entry for giveaways.</li>
                    <li>A $60 value!</li>


                    <button type="button" className="btn btn-md btn-block btn-primary"><a href="pages/login.html">
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