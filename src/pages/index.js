import React, { Component } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
// import Scroll from '../components/Scroll';
import Footer from '../components/Footer';

import down from "../assets/img/down.png";
import recyc from "../assets/img/recyc.jpeg";
import meter from "../assets/img/meter.png";
import trash from "../assets/img/trash.png";
import up from "../assets/img/up.png";
import dashboard from "../assets/images/dashboard_v2.png";
import vid from "../assets/videos/JumboShortMRF.mp4";

import {
  MDBAnimation,
  MDBBtn,
} from 'mdbreact';

class IndexPage extends Component{


  render(){
  return(
  <Layout>
    <Header />

    <header className="masthead">
            <video autoPlay={"autoplay"} loop={"loop"} muted className={"video"}
            style={{
              height:"100%",
              width:"100%",
              objectFit:"cover"
            }}>
              <source src={vid} type={"video/mp4"}/>
            </video>

      <div  style={{
        position:"absolute",
        top:0,
        background: "rgba(100,100,100,.3)",
        height:"100%",
        width:"100%",
        objectFit:"cover"
      }}>
      <div className="header-content mx-auto"
           style={{
             left:"50vh",
             marginTop:"30vh",
           }}
           >
        <h1 className={"text-center m-5"}>
          Live Actionable Data About Your Inbound Material
        </h1>
        <h3 className={"m-5 text-center"}>Make Informed Decisions, Get Repeatable
        Results </h3>
        {/*<Scroll type="id" element="contact">*/}
        <div className={"justify-content-center align-content-center mx-auto"}>
          <MDBBtn href={"/contact"} className={"btn-xl"}>
            Sign up for our Beta
          </MDBBtn>
        </div>
        {/*</Scroll>*/}
      </div>
      </div>
    </header>



    <section className="features bg-gray-slant" id="benefits">
      <div className="container">
        <div className="section-heading text-center ">
          <h2>AI Software Benefits</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 my-auto">
            <div className="container-fluid ">
              <div className="row">

                <div className="col-lg-3">
                <MDBAnimation type={"fadeIn"} duration={"1s"} delay={"0.25s"} reveal={"true"}>
                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={down} alt={""} style={{height:"125px"}}
                    />
                    <h5> Reduce Operational Costs</h5>
                    <p className="text-muted mt-4">
                      Etc. Etc.
                    </p>
                  </div>
                </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} delay={".5s"} reveal={"true"}>

                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={trash} alt={""} style={{height:"125px"}}
                    />
                    <h5>Track Contamination</h5>
                    <p className="text-muted mt-4">
                      Charge more for contamination and let the market work for you

                    </p>
                  </div>
                  </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} delay={"1s"}>
                  <div className="feature-item">
                    <img className={"mb-4 align-content-center justify-content-center"}
                         src={up} alt={""} style={{height:"125px"}}
                    />
                    <h5>Increase Revenue</h5>
                    <p className="text-muted mt-4">
                      Bill partners according to what materials they bring in

                    </p>
                  </div>
                  </MDBAnimation>
                </div>

                <div className="col-lg-3">
                  <MDBAnimation type={"fadeIn"} duration={"1s"} delay={"1.25s"} reveal={"true"}>

                    <div className="feature-item">
                      <img className={"mb-4 align-content-center justify-content-center"}
                           src={meter} alt={""} style={{height:"125px"}}
                      />
                      <h5>Increase Efficiency</h5>
                      <p className="text-muted mt-4">
                        Charge more for contamination and let the market work for you

                      </p>
                    </div>
                  </MDBAnimation>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    <section className="features " id="features">
      <div className="container">
        <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={"true"} >

        <div className="section-heading text-center">
          <h3>Configurable Data Puts You in Control</h3>
        </div>
        </MDBAnimation>
        <div className="row">
          <div className="col-lg-8 ">
            <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={"true"} >
              <img src={dashboard} alt={""} style={{width:"100%", boxShadow:"8px 8px 5px lightgray"}}/>
            </MDBAnimation>
          </div>
          <div className="col-lg-4 mt-3 bg-gray bg-left-bleed p-4">
            <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={"true"} >
              <h5> Dashboard Intro</h5>
              <hr align={"left"} className={"align-content-left justify-content-left"}/>
              <p> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
              <p> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
              <p> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </MDBAnimation>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-4 mt-3 bg-right-bleed bg-gray p-4">
            <MDBAnimation type={"slideInLeft"} duration={"1s"} reveal={"true"} >
              <h5> Dashboard Detail</h5>
              <hr align={"left"} className={"align-content-left justify-content-left"}/>
              <p> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
              <p> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
              <p> - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            </MDBAnimation>
          </div>
          <div className="col-lg-8 order-first order-lg-last">
            <MDBAnimation type={"slideInRight"} duration={"1s"} reveal={"true"} >
                  <img src={dashboard} alt={""} style={{width:"100%", boxShadow:"8px 8px 5px lightgray"}}/>
            </MDBAnimation>
          </div>

        </div>

      </div>
    </section>


    <img src={recyc} alt={"recycling"} style={{width:"100%", height:"400px", objectFit:"cover"}} />

    <section className="contact bg-secondary" id="contact" style={{padding:"20px"}}>
      <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} >
      <div className="container text-right row col-lg-12">
        <div className={"col-lg-9 text-white my-auto"}>
          <h5> Some random quote here about how this software will improve their lives. </h5>
        </div>
        <div className={"col-lg-3 text-center"}>
          <MDBBtn href={"/contact"} className={"btn-xl"}>
            Sign up for our Beta
          </MDBBtn>
        </div>
      </div>
      </MDBAnimation>
    </section>



    <Footer />
  </Layout>

);
}

}
export default IndexPage;
