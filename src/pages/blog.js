import React from 'react';
import {  graphql } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBContainer } from 'mdbreact';
import { navigate } from '../../.cache/gatsby-browser-entry';


const BlogListPage = ({data}) => {
  const { allMarkdownRemark } = data; // data.markdownRemark holds your post data
  console.log("all markdown remark:", allMarkdownRemark);
  return (
    <Layout>
      <Header/>
      <div style={{height:"100px"}}/>
      <MDBContainer className={"mt-5"}>
        <h1 className={"mt-5"}>The Blog</h1>
        <div className={"row"}>
        {allMarkdownRemark.edges.map((node, i) => {
          const blog = node.node.frontmatter;
          return (

            <div className={"col-4"}>

            <MDBCard className={"mt-5 p-2"} key={i} >
              <div onClick={()=>{navigate("/"+blog.slug)}} style={{cursor:"pointer"}}>
              <MDBCardHeader className={"p-2"}> <h2>{blog.title} </h2> </MDBCardHeader>
              <h5>{blog.date}</h5>
              <MDBCardBody
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: node.node.html }}
              />
              </div>
            </MDBCard>
            </div>
          )
        })}
        </div>
      </MDBContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
          html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              
            }
          }
        }
      }
    }
  `

export default BlogListPage
