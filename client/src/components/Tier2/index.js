import React from 'react';
import "./about.css";
import bong from "./bong.jpg";
import bong1 from "./bong1.jpg";
import bong2 from "./bong3.jpg";
import bong3 from "./bowl1.jpg";
import bong4 from "./bong2.jpg";



const Tier2 = () => {
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



          </div>
          <div className="col-12 justify-content-right">
            <div className="bg-black  text-center h-100 project" />
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <div className="card mb-4 box-shadow">
                  <div className="card-header">
                    <h2 className="my-0 font-weight-normal">Teir 2</h2>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">$50 <small className="text-muted">/ mo</small></h1>
                    <ul className="list-unstyled mt-3 mb-4" />
                    <li>Shipped to you in discrete packaging.</li>
                    <li>or a single box $65</li>
                    <li>Collectible box</li><br />
                    <li>One handpicked water pipe & a clollection of accesorries</li>
                    <li> 2x Raffle entry for giveaways.</li>
                    <li> add a teir 1 combo for only $25</li>                   
                     <li>A $110 Value!</li>                    
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










//     <div className="row justify-content-center no-gutters">


//     <div className="col-6" >

// <img className="d-block w-100" src={bong1} alt="glass" style ={{

// width: "300px",
// height: "500px"
//         }}  />
//       </div>

//       <div className="">

//       <div className="col-6">
//         <div className="bg-black text-center h-100 project">
//           <div className="d-flex h-100">
//             <div className="project-text w-100 my-auto text-center text-lg-left">
//               <div className="card mb-4 box-shadow">
//                 <div className="card-header">
//                   <h2 className="my-0 font-weight-normal">Teir 2</h2>
//                 </div>
//                 <div className="card-body">
//                   <h1 className="card-title pricing-card-title">$50 <small className="text-muted">/ mo</small></h1>
//                   <ul className="list-unstyled mt-3 mb-4" />
//                   <li>or a single box $65</li>
//                   <li>Shipped to you in discrete packaging.</li>
//                   <li>Collectible box</li>
//                   <li>An even higher quaility water pipe with accesorries</li>
//                   <li> add a teir 1 combo for only $25</li>
//                   <li> 2x Raffle entry for giveaways.</li>
//                   <li>A $110 Value!</li>

//                   <button type="button" className="btn btn-md btn-block btn-primary"><a href="pages/login.html">
//                     <h4 className="text-white"> Get started</h4>
//                   </a></button>
//                 </div>
//               </div>
//               <hr className="d-none d-lg-block mb-0 ml-0"></hr>
//                           </div>
//           </div>
//           </div>

//         </div>
//       </div>
//       <div>


//         {/* <p>TESTING RENDER</p> */}

//       </div>
//     </div>

  );
}

export default Tier2;







