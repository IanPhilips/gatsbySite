import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <div className="container text-left">
        <br/> <br/>

        <h3> Let's Chat. </h3>
        <br/> <br/>

        <p> contact@bluterrasystems.com </p>
        <br/>

        <p> +1 303.842.8550 </p>
        <br/>

        <p> Boulder, CO 80302 </p>
        <br/> <br/> <br/>

        <p> &copy; {config.siteTitle} 2020. All Rights Reserved. </p>
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
