import React from "react"
import PropTypes from "prop-types"
import {init} from "emailjs-com"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"/>
        <script type="text/javascript">
          {(function(){init("user_cV1OsELmIYfBvcQFwMZHH")})()}
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YPC306R5M1"></script>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
