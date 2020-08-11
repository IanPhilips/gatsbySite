import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';


import vid from "../assets/videos/JumboMRF.mp4"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
            <video autoPlay={"autoplay"} loop={"loop"} muted className={"video"}
            style={{height:"100vh"}}>
              <source src={vid} type={"video/mp4"}/>
            </video>

      <div className={"col-lg-12"} style={{
        position:"absolute",
        alignContent:"center",
        top:0,
        background: "rgba(190,190,190,.3)",
        height:"100vh"
      }}>
      <div className="header-content mx-auto"
           style={{
             // top:"10vh",
             left:"50vh",
             margin:"20vh",
           }}
           >
        <h1 className="mb-5">
          Software Solutions analyzes inbound material to your MRF to
          reduce operation costs, bill partners according to their material,
          and reduce contamination.
        </h1>
        <Scroll type="id" element="contact">
          <a href="#contact" className="btn btn-outline btn-xl">
            Sign up for our Beta
          </a>
        </Scroll>
      </div>
      </div>
    </header>



    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Data like you've never seen</h2>
          <p className="text-muted">
          </p>
          <hr />
        </div>
        <div className="row">

          <div className="col-lg-12 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4">
                  <div className="feature-item">
                  <FontAwesomeIcon icon={faAddressBook} size="4x" className={"mb-5"}/>

                    <h3>Flexible Use</h3>
                    <p className="text-muted">
                      Put an image, video, animation, or anything else in the
                      screen!
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-item">
                    <FontAwesomeIcon icon={faAddressBook} size="4x" className={"mb-5"}/>
                    <h3>Free to Use</h3>
                    <p className="text-muted">
                      As always, this theme is free to download and use for any
                      purpose!
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-item">
                    <FontAwesomeIcon icon={faAddressBook} size="4x" className={"mb-5"}/>
                    <h3>Open Source</h3>
                    <p className="text-muted">
                      Since this theme is MIT licensed, you can use it
                      commercially!
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>



    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          Sign up for our Beta
        </h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="email" name="email" />
          <br/>
          <input type="submit" value="Submit" className="btn btn-outline btn-xl mt-3" />
        </form>
      </div>
    </section>

    <Footer />
  </Layout>

);
function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_jjrY3GEB', e.target,
    'user_cV1OsELmIYfBvcQFwMZHH')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
}
export default IndexPage;
