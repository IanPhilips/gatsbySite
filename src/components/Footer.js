import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <div className="container text-left">
        <br/> <br/>

        <h4> Let's Chat. </h4>
        <br/> <br/>

        <p> contact@bluterra.io </p>
        <br/>

        <p> +1 720.675.9293 </p>
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
