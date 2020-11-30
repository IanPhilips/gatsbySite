import React from 'react';
import config from '../../config';
import { MDBBtn } from 'mdbreact';

export default function Footer() {
  return (
    <footer>
      <div className="container text-left">
        <div className={"row"}>
        <div className={"col-12 col-md-6"}>
        <br/> <br/>

        <p> 1644 Platte Street, Suite 400 </p>
        <br/>
        <p> Denver, CO 80202 </p>
        <br/>

        <br/>
        <p> Hello@Bluterra.io </p>
        <br/>
        <p> +1 720.675.9293 </p>

        <br/> <br/> <br/>

        <p> &copy; {config.siteTitle} 2020. All Rights Reserved. </p>
          <br/>
        </div>
        <div className={"col-12 col-md-6 text-center my-auto order-first order-md-last"}>
          <h1> Let's Chat</h1>
          <p className={"mt-4"}> Ready to have adaptable, intelligent systems work for you?  </p>
          <MDBBtn href={"/contact"} className={"mx-auto mt-4"}>
            Contact us
          </MDBBtn>
        </div>

        </div>
        {/*<ul className="list-inline">*/}
          {/*<li className="list-inline-item">*/}
          {/*  <a href="/#">Privacy</a>*/}
          {/*</li>*/}
          {/*<li className="list-inline-item">*/}
          {/*  <a href="/#">Terms</a>*/}
          {/*</li>*/}
          {/*<li className="list-inline-item">*/}
          {/*  <a href="/#">FAQ</a>*/}
          {/*</li>*/}
        {/*</ul>*/}
      </div>
    </footer>
  );
}
