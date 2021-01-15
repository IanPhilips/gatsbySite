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

        <p className={"mb-1"}> 1644 Platte Street, Suite 400 </p>
        <p> Denver, CO 80202 </p>
        <br/>

        <p className={"mb-1"}> Hello@Bluterra.io </p>
        <p> +1 720.675.9293 </p>

        <br/>

        <p> &copy; {config.siteTitle} 2020. All Rights Reserved. </p>
          <br/>
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
