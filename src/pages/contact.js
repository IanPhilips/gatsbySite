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
  MDBModalHeader,
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
                   height:"40vh",
                   width:"100vw",
                   objectFit:"cover"
                 }}>
          </img>

          <div  style={{
            position:"absolute",
            top:0,
            background: "rgba(190,190,190,.3)",
            height:"40vh",
            width:"100vw",
            objectFit:"cover"
          }}>
            <div className="header-content text-white mx-auto"
                 style={{
                   left:"50vh",
                   marginTop:"20vh",
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
            <form className="contact-form" onSubmit={this.sendEmail}>
              {/*NAME*/}
              <div className={"row"}>
                <div className={"col-lg-1"}/>
                <label htmlFor={"name"} className={"col-lg-1 m-3 my-1"}> Name </label>
                <input className={"mt-3 col-lg-8"} type="text" id={"name"}
                       placeholder={""} name="name"
                       style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                <br/>
              </div>
              {/*PHONE*/}
              <div className={"row"}>
                <div className={"col-lg-1"}/>
                <label htmlFor={"phone"} className={"col-lg-1 m-3 my-1"}> Phone </label>
                <input className={"mt-3 col-lg-8"} type="text" id={"phone"}
                       placeholder={""} name="phone"
                       style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                <br/>
              </div>
              {/*EMAIL*/}
              <div className={"row"}>
                <div className={"col-lg-1"}/>
                <label htmlFor={"email"} className={"col-lg-1 m-3 my-1"}> Email </label>
                <input className={"mt-3 col-lg-8"} type="email" id={"email"}
                       placeholder={""} name="email"
                       style={{borderRadius:"5px", borderWidth:"1.5px"}}/>
                <br/>
              </div>
              {/*BETA*/}
              <div className={"row my-3"}>
                <div className={"col-lg-1"}/>
                <label htmlFor={"beta"} className={"col-lg-1 m-3 my-1"}> Interests </label>
                <div className={"row col-lg-3 text-left mt-2 "}>
                  <input type="checkbox" style={{width:"30px", height:"30px", marginTop:"0px"}}
                         id="beta" name="beta" value="beta"
                  />
                  <p className={"my-1 ml-2"}>Beta Program</p>
                </div>
                <div className={"row col-lg-3 text-left mt-2"}>
                  <input type="checkbox" style={{width:"30px", height:"30px", marginTop:"0px"}}
                         name="learn" value="learn" id={"learn"}
                  />
                  <p className={"my-1 ml-2"}>Learn More</p>
                </div>
                <div className={"row col-lg-3 text-left mt-2"}>
                  <input type="checkbox" style={{width:"30px", height:"30px", marginTop:"0px"}}
                         name="pricing" value="pricing" id={"pricing"}
                  />
                  <p className={"my-1 ml-2"}>Pricing</p>
                </div>
              </div>
                {/*MESSAGE*/}
              <div className={"row"}>
                <div className={"col-lg-1"}/>
                <label htmlFor={"message"} className={"col-lg-1 m-3 my-1"}> Message </label>
                <textarea className={"mt-3 col-lg-8"} rows={"4"} cols={"50"}
                          placeholder={""} style={{borderRadius:"5px", borderWidth:"1.5px"}}
                          name="message" id={"message"}/>
                <br/>
              </div>
              {/*SUBMIT*/}
              <div className={"col-lg-12 text-center"}>
              <input type="submit" onClick={ ()=>this.toggle()} value="Submit"
                     className="btn-default btn btn-xl mt-3" />
              </div>
            </form>
          </div>
        </MDBAnimation>
        <MDBContainer>
          <MDBModal isOpen={this.state.modal} toggle={()=>this.toggle()}>
            <MDBModalHeader> Thanks!  We'll be in touch.</MDBModalHeader>

            <MDBModalFooter className={"align-content-center justify-content-center bg-primary"}>
              <MDBBtn className={"btn btn-outline btn-xl mt-3"} color={"tr"} onClick={()=>this.toggle()}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>

        <Footer />
      </Layout>

    );
  }
  sendEmail(e) {
    e.preventDefault();
    console.log("email sent")
    // emailjs.sendForm('gmail', 'template_jjrY3GEB', e.target,
    //   'user_cV1OsELmIYfBvcQFwMZHH')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  }
}
export default Contact;