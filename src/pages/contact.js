import React, { Component } from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';


import bg from "../assets/img/singapore.webp";

import emailjs from 'emailjs-com';
import {
  MDBAnimation,
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalFooter,
} from 'mdbreact';

class Contact extends Component{

  state = {
    modal: false
  };

  toggle() {
    console.log("toggled");
    this.setState({
      modal: !this.state.modal
    });
  };


  render(){
    return(
      <Layout>
        <Header />
          <img  className={"video"}
                src={bg}
                alt={""}
                 style={{
                   height:"30vh",
                   width:"100vw",
                   objectFit:"cover"
                 }}>
          </img>

          <div  style={{
            position:"absolute",
            top:0,
            background: "rgba(190,190,190,.3)",
            height:"30vh",
            width:"100vw",
            objectFit:"cover"
          }}>
            <div className="header-content text-white mx-auto"
                 style={{
                   left:"50vh",
                   marginTop:"17vh",
                 }}
            >
              <h1 className={"text-center m-5"}>
                Get In Touch
              </h1>
              <h3 className={"m-5 text-center"}> </h3>

            </div>
          </div>

        <MDBAnimation type={"fadeIn"} duration={"1s"} reveal={"true"} >
          <div className="container mt-5 mb-5">
            <form className="contact-form text-right" onSubmit={this.sendEmail}>
              {/*NAME*/}
              <div className={"row"}>
                <label htmlFor={"name"} className={"col-2 col-lg-3 m-3 my-1"}> Name </label>
                <input className={"mt-3 col-lg-6 col-8 "} type="text" id={"name"}
                       placeholder={""} name="name"
                       style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                <div className={"col-lg-2"}/>
              </div>
              {/*PHONE*/}
              <div className={"row"}>
                <label htmlFor={"phone"} className={"col-2 col-lg-3 m-3 my-1"}> Phone </label>
                <input className={"mt-3 col-lg-6 col-8"} type="text" id={"phone"}
                       placeholder={""} name="phone"
                       style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                <div className={"col-lg-2"}/>
              </div>
              {/*EMAIL*/}
              <div className={"row"}>
                <label htmlFor={"email"} className={"col-2 col-lg-3 m-3 my-1"}> Email </label>
                <input className={"mt-3 col-lg-6 col-8 "} type="email" id={"email"}
                       placeholder={""} name="email"
                       style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                <div className={"col-lg-2"}/>
              </div>
              {/*BETA*/}
              <div className={"row my-2"}>
                <label htmlFor={"beta"} className={"col-2 col-lg-3 m-3 my-1 "}>Interests</label>
                <div className={"row col-3 col-lg-2 text-left mt-3 mr-2 interest-section"}>
                  <input type="checkbox" style={{width:"30px", height:"30px", marginTop:"0px"}}
                         id="beta" name="beta" value="beta"
                  />
                  <p className={"my-1 ml-2"}>Beta Program</p>
                </div>
                <div className={"row col-3 col-lg-2 text-left mt-3 mr-2"}>
                  <input type="checkbox" style={{width:"30px", height:"30px", marginTop:"0px"}}
                         name="learn" value="learn" id={"learn"}
                  />
                  <p className={"my-1 ml-2"}>Learn More</p>
                </div>
                <div className={"row col-3 col-lg-2  text-left mt-3"}>
                  <input type="checkbox" style={{width:"30px", height:"30px", marginTop:"0px"}}
                         name="pricing" value="pricing" id={"pricing"}
                  />
                  <p className={"my-1 ml-2"}>Pricing</p>
                </div>
                <div className={"col-lg-3"}/>
              </div>
                {/*MESSAGE*/}
              <div className={"row"}>
                <label htmlFor={"message"} className={"col-2 col-lg-3 m-3 my-1"}> Message </label>
                <textarea className={"mt-3 col-lg-6 col-8 contact-text "} rows={"4"} cols={"50"}
                          placeholder={""} style={{borderRadius:"5px", borderWidth:"1.5px"}}
                          name="message" id={"message"}
                />
                <div className={"col-lg-2"}/>
              </div>
              {/*SUBMIT*/}
              <div className={"col-lg-12 text-center"}>
              <input type="submit" onClick={ ()=>this.toggle()} value="Submit"
                     className="btn-default btn text-white mt-3 btn-tertiary"
                     style={{width:"200px"}}
              />
              </div>
            </form>
          </div>
        </MDBAnimation>
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={()=>this.toggle()}>
            <h5 className={"m-4 text-center"}> Thanks!  We'll be in touch.</h5>
            <MDBModalFooter className={"align-content-center justify-content-center "}>
              <MDBBtn className={"mt-3 text-white btn-tertiary"}  onClick={()=>this.toggle()}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
        <section className="contact bg-primary" id="contact" style={{padding:"3px"}}>
        </section>
        <Footer/>
      </Layout>

    );
  }
  sendEmail(e) {
    e.preventDefault();
    console.log("email sent");
    emailjs.sendForm('gmail', 'template_jjrY3GEB', e.target,
      'user_cV1OsELmIYfBvcQFwMZHH')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
export default Contact;


